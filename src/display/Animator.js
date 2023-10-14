// @ts-check
import { Container, Ticker, Matrix } from 'pixi.js';
import { GlowFilter } from '@pixi/filter-glow';

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
	 * @type {Container}
	 */
	_body = new Container();
	/**
	 * List of all the parts of the dino.
	 * Each member of the object is the name of the dino's part.
	 * This will be used during the animation to move the part and hide the part which are not displayed for the current frame.
	 * @type {object}
	 */
	_parts = {};
	/**
	 * Scale of the dino.
	 * Parts of the dino will need to have their position adapted depending on the scale.
	 * @type {number}
	 */
	_scale = 1;

	/**
	 * Controls if the animation is playing or not.
	 * Setting it to false will freeze the animation on its current frame.
	 * @type {boolean}
	 */
	playing = true;
	/**
	 * Current animation being played by the animator.
	 * Contains all the keyframes.
	 * @type {any}
	 */
	_animation = null;
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
	}

	/**
	 * Get the animation current index.
	 * @returns {number} Return the current frame index of the animation.
	 */
	getCurrentIdx() {
		return this._currentIdx + this._offsetIdx;
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
		if (this._animation?.callbacks && this._animation.callbacks[this.getCurrentIdx()]) {
			for (const f of this._animation.callbacks[this.getCurrentIdx()]) {
				if (this._callbacks[f[0]]) {
					this._callbacks[f[0]](f.slice(1));
				}
			}
		}
	}

	/**
	 * Return a PixiJS Matrix using the parameters of the given object and the scale of the Animator.
	 * @param {object} obj Object containing the necessary parameters of a transform Matrix.
	 * @returns {Matrix} A PixiJS Matrix instantiated using the input and the Animator scale.
	 */
	matrixFromObject(obj) {
		return new Matrix(
			obj.a ?? 1,
			obj.b ?? 0,
			obj.c ?? 0,
			obj.d ?? 1,
			(obj.tx ?? 0) * this._scale,
			(obj.ty ?? 0) * this._scale
		);
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
				bodyMatrix.append(this.matrixFromObject(t.transforms[dParts[t.partIdx] % t.transforms.length]));
			} else {
				bodyMatrix.append(this.matrixFromObject(t));
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
	 * Add a part to the animation.
	 * A part is a PixiJS container comprised of multiple sprites moving together during animations.
	 * @param {string} partName Name of the part to add. Has to be the same name as one part in the animation.
	 * @param {Container} part PixiJS container containing multiple sprites representing a part.
	 */
	addPart(partName, part) {
		this._body.addChild(part);
		this._parts[partName] = part;
	}

	/**
	 * Moves and displays all the body parts of the dino to fit the current animation keyframe.
	 * If a part does not have a definition for the current keyframe, it will be hidden.
	 */
	moveParts() {
		const frame = this._animation?.frames ? this._animation.frames[this.getCurrentIdx()] : undefined;
		for (let p in this._parts) {
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
			} else {
				this._parts[p].visible = false;
			}
		}
	}

	/**
	 * Register a new animation to be played.
	 * The animation will start at keyframe 0 and play each frame contained in its "frames" attribute.
	 * @param {any} animation The animation object to be played. Should contain at least a "frames" attribute.
	 */
	playAnim(animation) {
		const anim = animation.anim ?? animation;
		this._offsetIdx = (animation.offset ?? 0) % (anim?.frames.length ?? 1);
		this._animation = anim;
		this.playing = true;
		this.setFrame(0);
	}

	/**
	 * Updates the timer of the animator if an animation is playing.
	 * If the timer reaches the tick rate, switch to the next frame.
	 * @returns {void}
	 */
	update() {
		if (!this.playing || !this._animation) {
			return;
		}
		this._time += Ticker.shared.elapsedMS;
		if (this._time >= this._tickRate) {
			this._currentIdx =
				(this._currentIdx + Math.floor(this._time / this._tickRate)) %
				(this._animation?.frames.length - this._offsetIdx);
			this._time = this._time % this._tickRate;
			this.moveParts();
			this.executeCallbacks();
		}
	}

	/**
	 * Return the number of frames of the current animation playing.
	 * @returns {number} The length of the animation or 0 if no animation.
	 */
	getAnimationLength() {
		return this._animation?.frames.length ?? 0;
	}

	/**
	 * Set the animation at a specific frame and reset the timer.
	 * @param {number} idx The frame index number. Will be moduloed by the animation length.
	 */
	setFrame(idx) {
		const length = this.getAnimationLength();
		if (!length) {
			this._currentIdx = 0;
			return;
		}
		this._currentIdx = idx % length;
		this._time = 0;
		this.moveParts();
	}
}
