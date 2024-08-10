// @ts-check
import {
	BlurFilter,
	Color,
	ColorMatrixFilter,
	Container,
	DisplayObject,
	Filter,
	Matrix,
	SpriteMaskFilter
} from 'pixi.js';
import { Sprite } from '@pixi/picture';
import { offsetShader } from './shaders/ColorOffsetShader.js';
import { GlowFilter } from '@pixi/filter-glow';
import { PixiHelper } from './PixiHelper.js';

/**
 * The Animation class is a PixiJS Container which contains a cluster of dispay objects and control their animations.
 */
export class Animation extends Container {
	/**
	 * List of all the parts of the animation.
	 * Each member of the object is the name of one of the part which are added as the container children.
	 * This will be used during the animation to move the parts and hide the parts which are not displayed for the current frame.
	 * @type {{[name: string]: Animation}}
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
	 * @type {{id: string, callbacks?: object, frames: object[]}}
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
	 * If you want to pause everything at once, use the playing in the Animator instead.
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
	 * Adjust color filter of the animation.
	 * @type {ColorMatrixFilter}
	 */
	_adjustColorFilter;
	/**
	 * Glow filter of the animation.
	 * @type {GlowFilter}
	 */
	_glowFilter;

	/**
	 * If defined, the object will be hidden or not depending on if the main container is flipped or not.
	 * For example, if flippable is 0, it is not impacted by the side. If it is 1, it will only show when there is not flip.
	 * If it is -1, it will only show when the main container is flipped.
	 */
	flippable = 0;

	/**
	 * The number of elements the animation object depends on which are currently still loading.
	 * @type {number}
	 */
	_loadingElements = 0;
	/**
	 * Returns true if the animation has finished loading. False otherwise.
	 * @type {boolean}
	 */
	get loaded() {
		return this._loadingElements == 0;
	}
	/**
	 * Registered callbacks to call once the Animation finishes loading.
	 * Callbacks are removed once called.
	 * @type {(() => void)[]}
	 */
	_loadCallbacks = [];
	/**
	 * Adds a callback to be called once the animation has finished loading.
	 * An animation finishes loading once the texture of all its children have loaded.
	 * If the animation is already in a loaded state, the callback is immediately triggered.
	 * @param {() => void} fn The callback to fire once the animation finishes loading.
	 */
	set onLoad(fn) {
		if (this.loaded) {
			fn();
		} else {
			this._loadCallbacks.push(fn);
		}
	}

	/**
	 * Create a new Animation and specify the scale.
	 * @param {number} scale The Scale of the animation.
	 */
	constructor(scale = 1) {
		super();
		this._scale = scale;
	}

	/**
	 * Overload the addChild method to make sure nothing uses it by accident.
	 * Adding a child directly will bypass the loading system and has to be avoided.
	 * @param {...any} children Elements to add.
	 * @returns {any} The normal addChild return value.
	 */
	addChild(...children) {
		console.warn(
			'[Animation.addChild] should not be directly called to allow for onLoad to work. Use addSprite/Anim/Part instead.'
		);
		return super.addChild(...children);
	}

	/**
	 * Executes all the load callbacks and empty the queue.
	 */
	executeLoadCallbacks() {
		for (const cb of this._loadCallbacks) {
			cb();
		}
		this._loadCallbacks = [];
	}

	/**
	 * Adds a sprite element to the animation.
	 * This will add the sprite to the loading queue.
	 * @param {Sprite} sprite The Sprite to add as a child to the animation.
	 */
	addSprite(sprite) {
		// If the texture is loading, we increase the loading children and setup the callback once the loading is done.
		if (!sprite.texture.valid) {
			const cb = () => {
				sprite.texture.baseTexture.off('loaded', cb);
				this._loadingElements--;
				if (this._loadingElements == 0) {
					this.executeLoadCallbacks();
				}
			};
			this._loadingElements++;
			sprite.texture.baseTexture.on('loaded', cb);
		}
		super.addChild(sprite);
	}

	/**
	 * Increase the loading elements of the animation.
	 * Called in addAnim, can be called if the animation has to wait for another element to load.
	 * @param {Animation} anim The animation to wait on.
	 */
	waitForAnimation(anim) {
		if (!anim.loaded) {
			this._loadingElements++;
			anim.onLoad = () => {
				this._loadingElements--;
				if (this._loadingElements === 0) {
					this.executeLoadCallbacks();
				}
			};
		}
	}

	/**
	 * Add a child animation to the object.
	 * The child animation may or may not have an actual playing animation.
	 * @param {Animation} anim A PixiJS Container containing multiple sprites and possibly an animation in its children.
	 */
	addAnim(anim) {
		// If the animation is still loading, we increase the children count and setup the callback once the animation is done loading.
		this.waitForAnimation(anim);
		super.addChild(anim);
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
	 * Get a part added to the animation by its name.
	 * @param {string} name The name of the part to get.
	 * @returns {Animation} The part, or undefined if it does not exist.
	 */
	getPart(name) {
		return this._parts[name];
	}

	/**
	 * Get the Sprite element of a part.
	 * Only use this if you are certain the part you are getting only has one Sprite.
	 * @param {string} name The name of the part.
	 * @returns {Sprite} The Sprite element of the part.
	 */
	getPartSprite(name) {
		if (this._parts[name]) {
			let part = /** @type {Container<DisplayObject>} */ (this._parts[name]);
			// Go fetch the sprite (last child of the hierarchy)
			while (part.children && part.children.length > 0) {
				part = /** @type {Container<DisplayObject>} */ (part.getChildAt(0));
			}
			return /** @type {Sprite} */ (part);
		}
		console.error(`[Animation.getPartSprite]: Part '${name}' does not exist`);
		return undefined;
	}

	/**
	 * Use specific parts as mask for other parts.
	 * A mask MUST be a sprite, so the part's sprite will have to be fetched (last element in the children hierarchy).
	 * @param {{[part: string]: string}} masks An object having a part name as key and a part name to use as mask as value.
	 */
	setMasks(masks) {
		for (const pName in masks) {
			if (this._parts[pName]) {
				const mask = this.getPartSprite(masks[pName]);
				if (mask) {
					if (!this._parts[pName].filters) {
						this._parts[pName].filters = [];
					}
					this._parts[pName].filters.push(new SpriteMaskFilter(mask));
				} else {
					console.error(`[Animation.setMasks]: Mask '${masks[pName]}' does not exist`);
				}
			} else {
				console.error(`[Animation.setMasks]: Part '${pName}' does not exist`);
			}
		}
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
					this._parts[p].setAdjustColorFilter(frame[p].acb, frame[p].acc, frame[p].acs, frame[p].ach);
					this._parts[p].setGlowFilter(frame[p].glx, frame[p].gly, frame[p].glc, frame[p].glq, frame[p].gls);
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
				let cb = f;
				// "rand" callback allows you to randomnly choose if a callback is called or not.
				// ex: ['rand', 2, 0, ['stop']] give 50% chance to either stop the animation.
				if (cb[0] == 'rand' && typeof cb[1] === 'number' && typeof cb[2] === 'number') {
					if (Math.floor(Math.random() * cb[1]) == cb[2]) {
						cb = cb[3];
					}
				}
				if (callbacksFunc[cb[0]]) {
					callbacksFunc[cb[0]](this, cb.slice(1));
				}
			}
		}
		for (const c of this._childAnimations) {
			c.executeCallbacks(callbacksFunc);
		}
	}

	/**
	 * Set the child animation of the given part at frame 0.
	 * If no specific part is given, set all child animations to frame 0.
	 * @param {string | undefined} part The part whose child animations to reset. If undefined, affect all children.
	 */
	resetChildAnimations(part = undefined) {
		if (part !== undefined) {
			if (!this._parts[part]) {
				console.error(`[ResetChildAnimations]: Unknown part ${part} in animation ${this._animation?.id}`);
				return;
			}
			if (this._parts[part]._animation) {
				this._parts[part]._playing = true;
				this._parts[part].setCurrentIdx(0);
				this._parts[part].updateAnimation();
			}
			this._parts[part].resetChildAnimations();
		} else {
			for (const c of this._childAnimations) {
				if (c._animation) {
					c._playing = true;
					c.setCurrentIdx(0);
					c.updateAnimation();
				}
				c.resetChildAnimations();
			}
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
		if (this._playing) {
			this.setCurrentIdx(this._currentIdx + idx);
		}
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
		if (idx >= length - 1 || idx < 0) {
			this._ended = true;
			if (this._nextOffsetIdx !== undefined) {
				this.setOffsetIdx(this._nextOffsetIdx);
				this._nextOffsetIdx = undefined;
				if (idx > 0) {
					idx -= length - 1;
				}
				length = this.getAnimationLength() - this._offsetIdx;
			}
		}
		// If idx is negative, increase by length until positive again (to be at the last valid value from the end of animation)
		while (idx < 0 && length > 1) {
			idx += length - 1;
		}
		this._currentIdx = length > 0 && idx >= 0 ? idx % length : 0;
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
	 * @param {{id: string, callbacks?: object, frames: object[]}} animation The animation to set as the current animation.
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
	 * Check all animation and enable/disable those whose flippable value is not 0 and different from the given flip value.
	 * @param {number} flip The side of the main container.
	 */
	flip(flip) {
		if (this.flippable) {
			this.visible = this.flippable == flip;
		}
		for (const c of this.children) {
			if (c instanceof Animation) {
				c.flip(flip);
			}
		}
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
	 * @param {number} blurX The x distance of the blur. 0 if undefined.
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

	/**
	 * Set the glow filter for the animation. If none exist, a new one will be created.
	 * @param {number} blurX The x distance of the glow. 0 if undefined.
	 * @param {number} blurY The y distance of the glow. 0 if undefined.
	 * @param {string} color The color of the glow. White if undefined.
	 * @param {number} quality The quality of the glow. 1 if undefined.
	 * @param {number} strength The strength of the glow. 0 if undefined.
	 */
	setGlowFilter(blurX, blurY, color, quality, strength) {
		if (this._glowFilter || blurX || blurY || quality || strength) {
			if (!this._glowFilter) {
				this._glowFilter = new GlowFilter({
					distance: blurX ?? blurY ?? 0,
					quality: quality ?? 0.3
				});
				if (!this.filters) {
					this.filters = [];
				}
				this.filters.push(this._glowFilter);
			}
			this._glowFilter.color = new Color(color).toNumber();
			this._glowFilter.outerStrength = strength ?? 0;
		}
	}

	/**
	 * Set the adjust color filter for the animation. If none exist, a new one will be created.
	 * @param {number} brightness The brightness of the filter. 0 if undefined.
	 * @param {number} contrast The contrast of the filter. 0 if undefined.
	 * @param {number} saturation The saturation of the filter. 0 if undefined.
	 * @param {number} hue The hue of the filter. 0 if undefined.
	 */
	setAdjustColorFilter(brightness, contrast, saturation, hue) {
		if (this._adjustColorFilter || brightness || contrast || saturation || hue) {
			if (!this._adjustColorFilter) {
				this._adjustColorFilter = new ColorMatrixFilter();
				if (!this.filters) {
					this.filters = [];
				}
				this.filters.push(this._adjustColorFilter);
			}
			this._adjustColorFilter.reset();
			PixiHelper.adjustColorFilter(
				brightness ?? 0,
				contrast ?? 0,
				saturation ?? 0,
				hue ?? 0,
				this._adjustColorFilter
			);
		}
	}
}
