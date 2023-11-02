// @ts-check
import { Container, Ticker } from 'pixi.js';
import { GlowFilter } from '@pixi/filter-glow';
import { PixiHelper } from './PixiHelper';
import { Animation } from './Animation';

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
	_fps = 24;
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
	 * Controls if the animation is playing or not.
	 * Setting it to false will freeze the animation on its current frame.
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
	 * Contructor of the Animator.
	 * Adds the body to the main container, setup the update and add the default 'stop' callback which stop the animation.
	 */
	constructor() {
		super();
		this.addChild(this._body);
		const ticker = Ticker.shared;
		ticker.add(() => this.update());
		this.registerCallback('stop', () => {
			this.playing = false;
		});
		this.registerCallback('gotoAndPlay', (idx) => {
			this._body.setCurrentIdx(idx - 1);
		});
	}

	/**
	 * Register a new callback for the Animator.
	 * The callback will be triggered if a frame has registered a callback of the same name.
	 * @param {string} name Name of the callback to register.
	 * @param {*} callback Function called when the callback is triggered. Will receive an array as parameter if any arguments are passed along.
	 */
	registerCallback(name, callback) {
		this._callbacks[name] = callback;
	}

	/**
	 * Execute all the callbacks for the current frame, if any.
	 */
	executeCallbacks() {
		for (const f of this._body.getCallbacks()) {
			if (this._callbacks[f[0]]) {
				this._callbacks[f[0]](f.slice(1));
			}
		}
	}

	/**
	 * Set the transform Matrix of the body of the Animator based on the transforms of the dino.
	 * @param {Array} transforms An array comprised of objects containing the tx ty a b c d element of a Matrix in order to set the transform.
	 * @param {Array} dParts The configuration array of the dino.
	 */
	setBodyTransforms(transforms, dParts) {
		// TODO: Add brighness and contrast
		const bodyMatrix = this._body.transform.localTransform;
		for (const t of transforms) {
			if (t.partIdx) {
				bodyMatrix.append(
					PixiHelper.matrixFromObject(
						t.transforms[dParts[t.partIdx] % t.transforms.length],
						this._body.getScale()
					)
				);
			} else {
				bodyMatrix.append(PixiHelper.matrixFromObject(t, this._body.getScale()));
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
		var filter = new GlowFilter({
			distance: glowParam.distance ?? 1,
			color: glowParam.color,
			quality: glowParam.quality ?? 1,
			innerStrength: 0,
			outerStrength: glowParam.strength
		});
		this._body.filters = [filter];
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
	 * Register a new animation to be played.
	 * The animation will start at keyframe 0 and play each frame contained in its "frames" attribute.
	 * @param {any} animation The animation object to be played. Should contain at least a "frames" attribute.
	 */
	playAnim(animation) {
		this._body.setAnimation(animation.anim ?? animation);
		this._body.setOffsetIdx(animation.offset ?? 0);
		this.playing = true;
		this.setFrame(0);
	}

	/**
	 * Updates the timer of the animator if an animation is playing.
	 * If the timer reaches the tick rate, switch to the next frame.
	 * @returns {void}
	 */
	update() {
		if (!this.playing || this._body.getAnimationLength() == 0) {
			return;
		}
		this._time += Ticker.shared.elapsedMS;
		if (this._time >= this._tickRate) {
			this._body.increaseCurrentIdx(Math.floor(this._time / this._tickRate));
			this._time = this._time % this._tickRate;
			this._body.updateAnimation();
			this.executeCallbacks();
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
	}
}
