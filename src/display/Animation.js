// @ts-check
import { BlurFilter, Container, Filter, Matrix } from 'pixi.js';
import { offsetShader } from './shaders/ColorOffsetShader.js';

/**
 * The Animation class is a PixiJS Container which contains a cluster of dispay objects and control their animations.
 */
export class Animation extends Container {
	/**
	 * List of all the parts of the animation.
	 * Each member of the object is the name of one of the part which are added as the container children.
	 * This will be used during the animation to move the parts and hide the parts which are not displayed for the current frame.
	 * @type {object}
	 */
	_parts = {};
	/**
	 * Scale of the animation.
	 * Parts will need to have their position adapted depending on the scale.
	 * @type {number}
	 */
	_scale = 1;

	/**
	 * Current animation loaded.
	 * Contains all the keyframes.
	 * @type {any}
	 */
	_animation = null;
	/**
	 * An array containing all the parts having an animation in their children.
	 * Those parts will be updated when a frame change is triggered.
	 * @type {Animation[]}
	 */
	_childAnimations = [];
	/**
	 * Controls if the animation is running or not.
	 * Setting it to false will freeze the animation on its current frame but the sub animation will still run.
	 * @type {boolean}
	 */
	_playing = true;
	/**
	 * Determine if the current animation has reached its last frame at least once.
	 * Reset once the animation is changed.
	 * @type {boolean}
	 */
	_ended = true;

	/**
	 * True if the current animation has reached its last frame at least once.
	 * Reset once the animation changes.
	 * @type {boolean}
	 */
	get hasEnded() {
		return this._ended;
	}

	/**
	 * Current index of the animation being played.
	 * @type {number}
	 */
	_currentIdx = 0;
	/**
	 * Animation offset. Frames before the offset will never be played.
	 * @type {number}
	 */
	_offsetIdx = 0;
	/**
	 * Next animation offset. Will be applied as soon as the animation loops.
	 * @type {number}
	 */
	_nextOffsetIdx;

	/**
	 * Color transformation of the animation.
	 * @type {Filter}
	 */
	_colorTransform;
	/**
	 * Blur filter of the animation.
	 * @type {BlurFilter}
	 */
	_blurFilter;

	/**
	 * Add a child animation to the object.
	 * The child animation may or may not have an actual playing animation.
	 * @param {Animation} anim A PixiJS Container containing multiple sprites and possibly an animation in its children.
	 */
	addAnim(anim) {
		this.addChild(anim);
		if (anim.getAnimationLength() > 0 || anim.hasChildAnimation()) {
			this._childAnimations.push(anim);
		}
	}

	/**
	 * Add a part to the animation.
	 * A part is another Animation which is referenced via a name.
	 * @param {string} partName Name of the part to add. Has to be the same name as one part in the animation.
	 * @param {Animation} part A PixiJS Container containing multiple sprites and possibly some animations in its children.
	 */
	addPart(partName, part) {
		this.addAnim(part);
		this._parts[partName] = part;
	}

	/**
	 * Moves and displays all the body parts of the animation to fit the current animation keyframe.
	 * If a part does not have a definition for the current keyframe, it will be hidden.
	 */
	updateAnimation() {
		if (this._playing) {
			const frame = this._animation?.frames ? this._animation.frames[this.getCurrentIdx()] : undefined;
			for (const p in this._parts) {
				if (frame && frame[p]) {
					this._parts[p].visible = true;
					this._parts[p].alpha = frame[p].alpha ?? 1;
					this._parts[p].transform.setFromMatrix(
						new Matrix(
							frame[p].a ?? 1,
							frame[p].b ?? 0,
							frame[p].c ?? 0,
							frame[p].d ?? 1,
							(frame[p].tx ?? 0) * this._scale,
							(frame[p].ty ?? 0) * this._scale
						)
					);
					this._parts[p].setColorTransform(
						frame[p].or,
						frame[p].og,
						frame[p].ob,
						frame[p].mr,
						frame[p].mg,
						frame[p].mb
					);
					this._parts[p].setBlurFilter(frame[p].blx, frame[p].bly, frame[p].blq);
					// Ordering of the parts display
					if (frame[p].l !== undefined) {
						this.swapChildren(this._parts[p], this.getChildAt(frame[p].l));
					}
				} else {
					this._parts[p].visible = false;
				}
			}
		}
		for (const a of this._childAnimations) {
			a.updateAnimation();
		}
	}

	/**
	 * Executes all the callbacks at the current frame using the functions registered as parameters.
	 * @param {object} callbacksFunc Object containing the references to the callbacks functions.
	 */
	executeCallbacks(callbacksFunc) {
		if (this._playing && this._animation?.callbacks) {
			for (const f of this._animation.callbacks[this.getCurrentIdx()] ?? []) {
				if (callbacksFunc[f[0]]) {
					callbacksFunc[f[0]](this, f.slice(1));
				}
			}
		}
		for (const c of this._childAnimations) {
			c.executeCallbacks(callbacksFunc);
		}
	}

	/**
	 * Set all children animations at frame 0.
	 */
	resetChildAnimations() {
		for (const c of this._childAnimations) {
			c.setCurrentIdx(0);
			c.resetChildAnimations();
		}
	}

	/**
	 * Get the animation current index.
	 * @returns {number} Return the current frame index of the animation.
	 */
	getCurrentIdx() {
		return this._currentIdx + this._offsetIdx;
	}

	/**
	 * Set the offset index.
	 * @param {number | undefined} idx The new offset index of the animation.
	 */
	setOffsetIdx(idx) {
		const length = this.getAnimationLength();
		this._offsetIdx = length > 0 ? (idx ?? 0) % length : 0;
		this._nextOffsetIdx = undefined;
	}

	/**
	 * Set the next offset index, which will be updated once the animation finishes looping.
	 * @param {number | undefined} idx The new offset index of the animation.
	 */
	setNextOffsetIdx(idx) {
		const length = this.getAnimationLength();
		const offsetIdx = length > 0 ? (idx ?? 0) % length : 0;
		if (offsetIdx !== this._offsetIdx) {
			this._nextOffsetIdx = offsetIdx;
		}
	}

	/**
	 * Increase the current animation index by the given number.
	 * Animation length and offset are computed to get the new current index.
	 * This will be propagated to all children animations.
	 * @param {number} idx The new animation index.
	 */
	increaseCurrentIdx(idx) {
		this.setCurrentIdx(this._currentIdx + idx);
		for (const a of this._childAnimations) {
			a.increaseCurrentIdx(idx);
		}
	}

	/**
	 * Set the current animation index.
	 * Will be impacted by animation length and offset.
	 * Child animations are not impacted.
	 * @param {number} idx The desired current index.
	 */
	setCurrentIdx(idx) {
		let length = this.getAnimationLength() - this._offsetIdx;
		if (idx >= length - 1) {
			this._ended = true;
			if (this._nextOffsetIdx !== undefined) {
				this.setOffsetIdx(this._nextOffsetIdx);
				this._nextOffsetIdx = undefined;
				idx -= length - 1;
				length = this.getAnimationLength() - this._offsetIdx;
			}
		}
		this._currentIdx = length > 0 ? idx % length : 0;
	}

	/**
	 * Get the scale of the animation.
	 * @returns {number} The scale of the animation.
	 */
	getScale() {
		return this._scale;
	}

	/**
	 * Replace the current animation by the one passed as parameter.
	 * @param {Array} animation The animation to set as the current animation.
	 */
	setAnimation(animation) {
		this._ended = false;
		this._animation = animation;
	}

	/**
	 * Return the number of frames of the current animation playing.
	 * @returns {number} The length of the animation or 0 if no animation.
	 */
	getAnimationLength() {
		return this._animation?.frames.length ?? 0;
	}

	/**
	 * Indicates if the animation has children animations registered.
	 * @returns {boolean} True if at least a child animation has been registered, false otherwise.
	 */
	hasChildAnimation() {
		return this._childAnimations.length > 0;
	}

	/**
	 * Stop the current animation from updating and using callbacks.
	 */
	stop() {
		this._playing = false;
	}

	/**
	 * Start an animation which is stopped.
	 */
	play() {
		this._playing = true;
	}

	/**
	 * Force the animation to be marked as ended.
	 */
	markAsEnded() {
		this._ended = true;
	}

	/**
	 * Set the color transformation for the animation. If none exist, a new one will be created.
	 * @param {number} offsetRed The red color offset. 0 if undefined.
	 * @param {number} offsetGreen The green color offset. 0 if undefined.
	 * @param {number} offsetBlue The blue color offset. 0 if undefined.
	 * @param {number} multRed The red multiplicator. 1 if undefined.
	 * @param {number} multGreen The green multiplicator. 1 if undefined.
	 * @param {number} multBlue The blue multiplicator. 1 if undefined.
	 */
	setColorTransform(offsetRed, offsetGreen, offsetBlue, multRed, multGreen, multBlue) {
		if (this._colorTransform || offsetRed || offsetGreen || offsetBlue || multRed || multGreen || multBlue) {
			if (!this._colorTransform) {
				this._colorTransform = new Filter(undefined, offsetShader, {
					offset: new Float32Array(),
					mult: new Float32Array()
				});
				if (!this.filters) {
					this.filters = [];
				}
				this.filters.push(this._colorTransform);
			}
			this._colorTransform.uniforms.offset = new Float32Array([
				offsetRed ?? 0,
				offsetGreen ?? 0,
				offsetBlue ?? 0
			]);
			this._colorTransform.uniforms.mult = new Float32Array([multRed ?? 1, multGreen ?? 1, multBlue ?? 1]);
		}
	}

	/**
	 * Set the blur filter for the animation. If none exist, a new one will be created.
	 * @param {number} blurX The x distanc of the blur. 0 if undefined.
	 * @param {number} blurY The y distance of the blur. 0 if undefined.
	 * @param {number} blurQuality The quality of the blur. 0 if undefined.
	 */
	setBlurFilter(blurX, blurY, blurQuality) {
		if (this._blurFilter || blurX || blurY || blurQuality) {
			if (!this._blurFilter) {
				this._blurFilter = new BlurFilter();
				if (!this.filters) {
					this.filters = [];
				}
				this.filters.push(this._blurFilter);
			}
			this._blurFilter.blurX = blurX ?? 0;
			this._blurFilter.blurY = blurY ?? 0;
			this._blurFilter.quality = blurQuality ?? 1;
		}
	}
}
