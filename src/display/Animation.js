// @ts-check
import { Container, Filter, Matrix } from 'pixi.js';
import { offsetShader } from './shaders/ColorOffsetShader';

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
	 * An array containing all the parts having a sub-animation.
	 * Those parts will be updated when a frame change is triggered.
	 * @type {Animation[]}
	 */
	_subanimations = [];

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
	 * Color transformation of the animation.
	 * @type {Filter}
	 */
	_colorTransform;

	/**
	 * Add a part to the animation.
	 * A part is another Animation.
	 * @param {string} partName Name of the part to add. Has to be the same name as one part in the animation.
	 * @param {Animation} part A PixiJS Container containing multiple sprites and possibly a sub-animation.
	 */
	addPart(partName, part) {
		this.addChild(part);
		this._parts[partName] = part;
		if (part.getAnimationLength() > 0) {
			this._subanimations.push(part);
		}
	}

	/**
	 * Moves and displays all the body parts of the animation to fit the current animation keyframe.
	 * If a part does not have a definition for the current keyframe, it will be hidden.
	 */
	updateAnimation() {
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
				// Ordering of the parts display
				if (frame[p].l !== undefined) {
					this.swapChildren(this._parts[p], this.getChildAt(frame[p].l));
				}
			} else {
				this._parts[p].visible = false;
			}
		}
		for (const a of this._subanimations) {
			a.updateAnimation();
		}
	}

	/**
	 * Returns the callbacks contained at the current frame of the animation.
	 * @returns {Array} An array containing all the callbacks of the current frame, or an empty array if there are no callbacks.
	 */
	getCallbacks() {
		if (this._animation?.callbacks) {
			return this._animation.callbacks[this.getCurrentIdx()] ?? [];
		}
		return [];
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
		this._offsetIdx = length > 0 ? (idx ?? 0) % this.getAnimationLength() : 0;
	}

	/**
	 * Increase the current animation index by the given number.
	 * Animation length and offset are computed to get the new current index.
	 * This will be propagated to all sub-animations.
	 * @param {number} idx The new animation index.
	 */
	increaseCurrentIdx(idx) {
		this.setCurrentIdx(this._currentIdx + idx);
		for (const a of this._subanimations) {
			a.increaseCurrentIdx(idx);
		}
	}

	/**
	 * Set the current animation index.
	 * Will be impacted by animation length and offset.
	 * Sub animations are not impacted.
	 * @param {number} idx The desired current index.
	 */
	setCurrentIdx(idx) {
		const length = this.getAnimationLength() - this._offsetIdx;
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
				this.filters = [this._colorTransform];
			}
			this._colorTransform.uniforms.offset = new Float32Array([
				offsetRed ?? 0,
				offsetGreen ?? 0,
				offsetBlue ?? 0
			]);
			this._colorTransform.uniforms.mult = new Float32Array([multRed ?? 1, multGreen ?? 1, multBlue ?? 1]);
		}
	}
}
