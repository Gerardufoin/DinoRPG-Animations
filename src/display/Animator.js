// @ts-check
import { Container, Rectangle, Ticker } from 'pixi.js';
import { Sprite } from '@pixi/picture';
import { PixiHelper } from './PixiHelper.js';
import { Animation } from './Animation.js';
import { ImageExtractor } from './ImageExtractor.js';
import { PartManager } from './PartManager.js';
import { ConstantShaderManager } from './ConstantShaderManager.js';
import { SCENE_FULL_WIDTH, SCENE_HEIGHT } from '../fight/IScene.js';

/**
 * The Animator class will contain the dino's body and control its animations.
 * Once all the dinos parts have been added, the playAnim method can be called with the keyframes of an animation.
 * The animation will loop until stopped or another animation is played.
 */
export class Animator extends Container {
	/**
	 * Frame rate of the animation.
	 * @type {number}
	 */
	_fps = 40;
	/**
	 * Number of milliseconds needed to reach the next frame.
	 * @type {number}
	 */
	_tickRate = 1000 / this._fps;
	/**
	 * Body of the dino.
	 * Will contain all the parts making up the dino.
	 * @type {Animation}
	 */
	_body = new Animation();
	/**
	 * Container containing all the elements added as children for the animation (body, shadows, ...)
	 * This is needed for the image export. If the negative scale is on the top part, it is not taken into consideration.
	 */
	_flipContainer = new Container();
	/**
	 * The list of the available animations for the body set.
	 * @type {object}
	 */
	_animations;
	/**
	 * Current animation being played.
	 * @type {string}
	 */
	_currentAnim = '';

	/**
	 * Controls if the animator is running or not.
	 * Setting it to false will freeze the animation and all its subanimation on its current frame.
	 * @type {boolean}
	 */
	playing = true;
	/**
	 * Time elasped since last animation key.
	 * Will reset once reaching the _tickRate value.
	 * @type {number}
	 */
	_time = 0;

	/**
	 * Callbacks of the animator.
	 * All registered callbacks are stored there.
	 * A callback will be triggered if an animation has registered a callback of the same name for its current frame.
	 * @type {object}
	 */
	_callbacks = {};

	/**
	 * True if the current animation has reached its last frame at least once.
	 * @type {boolean}
	 */
	get hasAnimEnded() {
		return this._body.hasEnded;
	}

	/**
	 * Check if the animation has finished loading.
	 * @type {boolean}
	 */
	get loaded() {
		return this._body.loaded;
	}
	/**
	 * Sets a callback to be fired once the animation finished loading.
	 * If the animation is already loaded, the callback fires immediately.
	 * @param {() => void} cb The callback to register once the animation is loaded.
	 */
	set onLoad(cb) {
		this._body.onLoad = cb;
	}

	/**
	 * Contructor of the Animator.
	 * Adds the body to the main container, setup the update and add the default 'stop' callback which stop the animation.
	 * @param {boolean} autoUpdate Set if the Animator must register itself to the PixiJS ticker for its animation to play automatically. True by default.
	 */
	constructor(autoUpdate = true) {
		super();
		this.addChild(this._flipContainer);
		this._body.filters = [];
		this._flipContainer.addChild(this._body);
		if (autoUpdate) {
			const ticker = Ticker.shared;
			ticker.add(() => this.update(Ticker.shared.deltaMS));
		}
		this.registerCallback('resetChildAnimations', (animation, args) => {
			animation.resetChildAnimations(args[0]);
		});
		this.registerCallback('stop', (animation) => {
			animation.stop();
		});
		this.registerCallback('gotoAndPlay', (animation, args) => {
			animation.setCurrentIdx(args[0]);
			animation.updateAnimation();
			animation.executeCallbacks(this._callbacks);
		});
		this.registerCallback('gotoAndPlayRandom', (animation, args) => {
			animation.setCurrentIdx(Math.floor(Math.random() * args[0]));
			animation.updateAnimation();
			animation.executeCallbacks(this._callbacks);
		});
		this.registerCallback('playAnim', (_animation, args) => {
			this.playAnim(args[0]);
		});
	}

	/**
	 * Register a new callback for the Animator.
	 * The callback will be triggered if a frame has registered a callback of the same name.
	 * @param {string} name Name of the callback to register.
	 * @param {*} callback Function called when the callback is triggered. Will receive the animation triggering the callback
	 * as well as an array as parameter if any arguments are passed along.
	 */
	registerCallback(name, callback) {
		this._callbacks[name] = callback;
	}

	/**
	 * Remove all callbacks registered under the given name.
	 * @param {string} name Name of the callback to clear.
	 */
	clearCallback(name) {
		this._callbacks[name] = undefined;
	}

	/**
	 * Set the transform Matrix of the body of the Animator based on the transforms of the dino.
	 * @param {Array} transforms An array comprised of objects containing the tx ty a b c d element of a Matrix in order to set the transform.
	 * @param {Array} dParts The configuration array of the dino.
	 */
	setBodyTransforms(transforms, dParts) {
		const bodyMatrix = this._body.transform.localTransform;
		for (const t of transforms) {
			const mtrData = t.partIdx ? t.transforms[dParts[t.partIdx] % t.transforms.length] : t;
			bodyMatrix.append(PixiHelper.matrixFromObject(mtrData, this._body.getScale()));
			if (mtrData.contrast || mtrData.brightness || mtrData.hue || mtrData.saturation) {
				this._body.filters.push(
					ConstantShaderManager.getAdjustColorFilter(
						mtrData.brightness,
						mtrData.contrast,
						mtrData.saturation,
						mtrData.hue
					)
				);
			}
			if (mtrData.or || mtrData.og || mtrData.ob || mtrData.mr || mtrData.mg || mtrData.mb) {
				this._body.filters.push(
					ConstantShaderManager.getColorOffsetFilter(
						mtrData.or,
						mtrData.og,
						mtrData.ob,
						mtrData.mr,
						mtrData.mg,
						mtrData.mb
					)
				);
			}
		}
		this._body.transform.setFromMatrix(bodyMatrix);
	}

	/**
	 * Apply the glow of the body of the Animator using '@pixi/filter-glow'.
	 * Settings are different from flash and have to be adapted manually in the elements configuration json.
	 * @param {object} glowParam Parameters used to configure the glow effet.
	 */
	setBodyGlow(glowParam) {
		this._body.filters.push(
			ConstantShaderManager.getGlowFilter({
				distance: glowParam.distance ?? 1,
				color: glowParam.color,
				quality: glowParam.quality ?? 0.1,
				outerStrength: glowParam.strength
			})
		);
	}

	/**
	 * Because PixiJS filters are fiddly as hell. Set the filter area to the whole screen when glow filters are cut off.
	 */
	setFiltersFullscreen() {
		this.filterArea = new Rectangle(0, 0, SCENE_FULL_WIDTH, SCENE_HEIGHT);
		this._body.filterArea = new Rectangle(0, 0, SCENE_FULL_WIDTH, SCENE_HEIGHT);
	}

	/**
	 * Darkens the skin of the body.
	 */
	darken() {
		this._body.filters.push(ConstantShaderManager.getAdjustColorFilter(-0.57, 0.17, -0.83, 0, false));
	}

	/**
	 * Add a new part to the body.
	 * @param {string} partName Name of the part to add. Has to be the same name as one part in the animation.
	 * @param {Animation} part A dino part containing multiple sprites and possibly a sub-animation.
	 */
	addPart(partName, part) {
		this._body.addPart(partName, part);
	}

	/**
	 * Get a part added to the body using its name.
	 * @param {string} name The name of the part to get.
	 * @returns {Animation} The part, or undefined if it was not found.
	 */
	getPart(name) {
		return this._body.getPart(name);
	}

	/**
	 * Get the Sprite element of a part.
	 * Useful if you wish to make a mask out of it.
	 * @param {string} name The name of the part.
	 * @returns {Sprite} The Sprite element of the Part.
	 */
	getPartSprite(name) {
		return this._body.getPartSprite(name);
	}

	/**
	 * Flip the container.
	 * @param {boolean} side Direction the container has to face. True to face right, false to face left.
	 */
	flip(side) {
		this._flipContainer.scale.x = side ? -1 : 1;
		this._body.flip(this._flipContainer.scale.x);
	}

	/**
	 * Set all the animations available for the current body.
	 * @param {object} animations An object whose keys are the name of the animation and the values are the content of said animation.
	 */
	setAnimations(animations) {
		this._animations = animations;
	}

	/**
	 * Will play the given animation if the animation name represent a valid key in the _animation property.
	 * @param {string} key Name of the animation to play.
	 * @param {boolean} unpauseIfSame If true, unpause the animation if the new animation is the same as the current one. True by default.
	 */
	playAnim(key, unpauseIfSame = true) {
		if (!this._animations) return;

		if (!this._animations[key]) {
			key = 'stand';
		}

		if (this._animations[key]) {
			const animation = this._animations[key].anim ?? this._animations[key];
			const offset = this._animations[key].offset ?? 0;
			this._body.setAnimation(animation);
			if (animation.id == this._currentAnim) {
				if (unpauseIfSame) {
					this._body.play();
				}
				this._body.setNextOffsetIdx(offset);
			} else {
				this._body.play();
				this._body.setOffsetIdx(offset);
				this.setFrame(0);
				this._currentAnim = animation.id;
			}
		} else {
			this._body.markAsEnded();
		}
	}

	/**
	 * Updates the timer of the animator if an animation is playing.
	 * If the timer reaches the tick rate, switch to the next frame.
	 * @param {number} deltaTime Elapsed time since last frame in ms.
	 * @returns {void}
	 */
	update(deltaTime) {
		if (!this.playing || this._body.getAnimationLength() == 0) {
			return;
		}
		this._time += deltaTime;
		if (this._time >= this._tickRate) {
			while (this._time >= this._tickRate) {
				this._body.increaseCurrentIdx(1);
				this._body.updateAnimation();
				this._body.executeCallbacks(this._callbacks);
				this._time -= this._tickRate;
			}
		}
	}

	/**
	 * Set the animation at a specific frame and reset the timer.
	 * @param {number} idx The frame index number. Will be moduloed by the animation length.
	 * @param {boolean} resetTimer If true, reset the timer. True by default.
	 */
	setFrame(idx, resetTimer = true) {
		this._body.setCurrentIdx(idx);
		if (resetTimer) {
			this._time = 0;
		}
		this._body.updateAnimation();
		this._body.executeCallbacks(this._callbacks);
	}

	/**
	 * Sets the animator and animation to playing.
	 * If idx is defined, sets the frame to idx.
	 * @param {number} idx The frame to set the animation at.
	 */
	play(idx = undefined) {
		this.playing = true;
		this._body.play();
		if (idx !== undefined) {
			this.setFrame(idx, true);
		}
	}

	/**
	 * Return the length of the current animation playing.
	 * @returns {number} The number of frames of the current animation.
	 */
	getCurrentAnimationLength() {
		return this._body.getAnimationLength();
	}

	/**
	 * Use the detail of an animation to fill the animator with the appropriate parts and animation.
	 * @param {{parts: object, animation: {id: string, callbacks?: object, frames: object[]}, masks?: object}} details The detail of the animation to instantiate.
	 * @param {number} scale The scale of the animation. Default to 1.
	 * @param {number[]} customization The customization array if the animation has some partIdx. Empty by default.
	 * @returns {Animator} The instance of this animator to chain calls.
	 */
	loadAnimation(details, scale = 1, customization = []) {
		this._body._scale = scale;
		this._body.setAnimation(details.animation);
		const partsScaling = PartManager.getAnimationScaling(details.animation);
		for (const pName in details.parts) {
			const element = PartManager.createPart(
				details.parts[pName],
				customization,
				[],
				scale,
				partsScaling[pName] ?? 1
			);
			if (element) {
				this.addPart(pName, element);
			}
		}
		if (details.masks) {
			this._body.setMasks(details.masks);
		}
		this.setFrame(0);
		return this;
	}

	/**
	 * Extract the visual data from the container into an image.
	 * Useful to display the dino without having to instanciate a WebGL context every time.
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 * @param {number | undefined} x The offset x position based on the center of the image.
	 * @param {number | undefined} y The offset y position based on the center of the image.
	 */
	toImage(callback, width = undefined, height = undefined, x = undefined, y = undefined) {
		ImageExtractor.convertToImage(this, callback, width, height, x, y, true);
	}

	/**
	 * Extract the visual data from the container into raw image data.
	 * Useful to display the dino without having to instanciate a WebGL context every time.
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 * @param {number | undefined} x The offset x position based on the center of the image.
	 * @param {number | undefined} y The offset y position based on the center of the image.
	 * @param {string} format Format of the output. 'image/png' by default.
	 */
	toRawImage(callback, width = undefined, height = undefined, x = undefined, y = undefined, format = 'image/png') {
		ImageExtractor.convertToImage(this, callback, width, height, x, y, false, format);
	}

	/**
	 * Extract the visual data from the container into an animation.
	 * The animation is a div tag of class 'DinoRPG-Animation' comprised of multiple img tags.
	 * A timeout then goes through the classes DinoRPG-Animation and set the appropriate image.
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 * @param {number | undefined} x The offset x position based on the center of the image.
	 * @param {number | undefined} y The offset y position based on the center of the image.
	 */
	toAnimation(callback, width = undefined, height = undefined, x = undefined, y = undefined) {
		ImageExtractor.convertToAnimation(this, callback, width, height, x, y, true);
	}

	/**
	 * Extract the visual data from the container into an animation.
	 * The animation is an array comprised of multiple raw image data (one per frame, in order).
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 * @param {number | undefined} x The offset x position based on the center of the image.
	 * @param {number | undefined} y The offset y position based on the center of the image.
	 * @param {string} format Format of the output. 'image/png' by default.
	 */
	toRawAnimation(
		callback,
		width = undefined,
		height = undefined,
		x = undefined,
		y = undefined,
		format = 'image/png'
	) {
		ImageExtractor.convertToAnimation(this, callback, width, height, x, y, false, format);
	}
}
