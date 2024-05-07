// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Lightning.hx
import { BLEND_MODES, Container, Graphics } from 'pixi.js';
import { Bolt } from '../../../life/Bolt.js';
import { IScene, SCENE_WIDTH } from '../../../../IScene.js';
import { Entity } from '../../../../Entity.js';
import { Timer } from '../../../../Timer.js';
import { PixiHelper } from '../../../../../display/PixiHelper.js';

/**
 * A lightning strike which falls repeatedly on the Scene until killed.
 */
export class FallingLightning extends Entity {
	/**
	 * The length of a segment of the lightning strike.
	 * @type {number}
	 */
	static SEGMENT_LENGTH = 20;
	/**
	 * The segments of the lightning strike. Only need the y value, x is randomized and controlled by _root.
	 * @type {number[]}
	 */
	_segments = [];
	/**
	 * The visual representation of the lightning strike.
	 * @type {Graphics}
	 */
	_bolt;

	/**
	 * The delay before the lightning strike respawn.
	 * @type {number}
	 */
	_delay = 0;
	/**
	 * The power of the lightning strike between 0 and 5.
	 * Greater strength will make the strike bigger and last longer.
	 * @type {number}
	 */
	_power = 0;
	/**
	 * The timer for the amount of time the lightning strike wobbles.
	 * @type {number}
	 */
	_flashTime = 0;
	/**
	 * Random value for the lightning strike look.
	 * @type {number}
	 */
	_randomness = 0;

	/**
	 * Creates a lightning strike at a random position on the Scene.
	 * The lightning strike will refresh itself at a new position automatically until killed.
	 * @param {IScene} scene The Scene where the lightning strike is created.
	 */
	constructor(scene) {
		super(new Container(), scene);

		this._bolt = new Graphics();
		this._bolt.blendMode = BLEND_MODES.ADD;
		this._root.filters = [Bolt.GlowFilter];
		this._root.addChild(this._bolt);

		this.generate();
	}

	/**
	 * Recreate the lightning strike and randomize its parameters.
	 */
	generate() {
		// Randomize position
		this._x = Math.random() * SCENE_WIDTH;
		this._y = this._scene.getRandomPYPos();
		this.updatePos();

		// Randomize parameters
		this._power = Math.floor(Math.random() * 6);
		this._flashTime = 10 + this._power;
		this._randomness = 5 + Math.floor(Math.random() * 10);
		this._delay = Math.floor(Math.random() * 15);

		// Create new lightning strike display
		let py = 0;
		this._segments = [py];
		const ty = this._scene.getGY(0);
		while (this._root.y + py > ty) {
			py -= FallingLightning.SEGMENT_LENGTH;
			this._segments.push(py);
		}
		this._root.alpha = 1;
		this._bolt.clear();
	}

	/**
	 * Updates the look of the lightning strike.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._delay -= timer.tmod;
		if (this._delay > 0) {
			return;
		}

		this._flashTime -= timer.tmod;
		if (this._flashTime >= 0) {
			// Randomize the look of the strike every elapsed frame while flash time is not up.
			if (timer.frameElapsed) {
				this._bolt.lineStyle(1, 0xffffff, 1);
				const firstY = this._segments[0];
				this._bolt.clear();
				this._bolt.moveTo(0, firstY);

				const half = this._segments.length * 0.5;

				for (let i = 0; i < this._segments.length; ++i) {
					const py = this._segments[i];
					const c = 1 - Math.abs(i - half) / half;
					this._bolt.lineStyle(3 + c * this._power, 0xffffff, 1);
					this._bolt.lineTo(
						(Math.random() * 2 - 1) * this._randomness,
						py + (Math.random() * 2 - 1) * this._randomness
					);
				}
			}
		}
		this._root.alpha = PixiHelper.mm(0, (this._flashTime + 5) / 5, 1);
		// Once the strike has vanished, respawn it
		if (this._root.alpha == 0) {
			this.generate();
		}
	}
}
