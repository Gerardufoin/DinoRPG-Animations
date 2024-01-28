// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Acid.hx + _LAcid in Fighter

import { Container } from 'pixi.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { Scene } from '../../Scene.js';
import { Light } from './Light.js';

// GFX 710
/**
 * Instantiate a heal particle, which sparkles.
 */
export class Heal extends Light {
	/**
	 * Length of the heal animation.
	 * @type {number}
	 */
	static ANIMATION_LENGTH = 23;
	/**
	 * Frame where the sparkle start growing.
	 * @type {number}
	 */
	static SPARKLE_FRAME_START = 20;
	/**
	 * The sparkle of the healing particle.
	 * @type {Container}
	 */
	_sparkle;
	/**
	 * Animation timer, controlling the growth the the ball/smoke asset.
	 * @type {number}
	 */
	_animTimer = 0;

	/**
	 * Create a healing spark at the given coordinates.
	 * @param {Scene} scene The Scene where the acid is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		super(scene, x, y, 0, 0);
		const light = this._root;
		this._sparkle = new Container();
		this._sparkle.addChild(new Asset(ref.fx.healing));

		this._root = new Container();
		this._root.addChild(this._sparkle);
		this._root.addChild(light);

		this._sleep = Math.random() * 20;
		this._root.visible = false;

		this.setScale(0.5 + Math.random());
		this._weight = -(0.02 + Math.random() * 0.1);
		this._fadeoutTimer = 10 + Math.random() * 20;
		this._animTimer = Math.random() * (Heal.SPARKLE_FRAME_START - 1);
		this.updatePos();
	}

	/**
	 * Update the size of the sparkle toward the end of the animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (!this.asleep) {
			this._animTimer = (this._animTimer + timer.tmod) % Heal.ANIMATION_LENGTH;

			const sparkleDuration = Heal.ANIMATION_LENGTH - Heal.SPARKLE_FRAME_START;
			// When the timer reaches SPARKLE_FRAME_START, the coef start at 0, then goes toward 1 at half the duration, and finally goes back to 0.
			const coef =
				1 - Math.abs(Math.max(this._animTimer - Heal.SPARKLE_FRAME_START, 0) / (sparkleDuration / 2) - 1);
			this._sparkle.scale.x = this._sparkle.scale.y = coef;
		}
	}
}
