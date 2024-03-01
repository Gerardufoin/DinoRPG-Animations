// @ts-check

import { BlurFilter, Container } from 'pixi.js';
import { IScene } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { Tween } from '../../../display/Tween.js';

/**
 * Spawn a puff of black smoke. Used when the Castle is destroyed.
 */
export class Smoke extends Part {
	/**
	 * The BlurFilter of the Smoke.
	 * Storing it to prevent WebGL from creating a new shader every time.
	 * @type {BlurFilter}
	 */
	static BlurFilter;
	/**
	 * Number of frames of the bounce animation.
	 * @type {number}
	 */
	static GROW_TIMER = 5;

	/**
	 * Target scale the smoke will grow to when done growing.
	 * @type {number}
	 */
	_targetScale;
	/**
	 * The current timer of the grow animation.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Creates a puff of black smoke at the given coordinates.
	 * @param {IScene} scene The scene where the smoke is spawned in.
	 * @param {number} x The default x coordinate.
	 * @param {number} y The default y coordinate.
	 * @param {number} z The default z coordinate.
	 */
	constructor(scene, x, y, z) {
		super(new Container(), scene);
		this._root.addChild(new Asset(ref.castle.smoke));
		this._x = x;
		this._y = y;
		this._z = z;

		this._weight = -(0.1 + Math.random() * 0.1);
		this._vr = (Math.random() * 2 - 1) * 12;
		this._friction = 0.98;
		this._rotationFrict = 0.9;

		this._sleep = Math.random() * 5;
		this._fadeoutTimer = 20 + Math.random() * 50;

		this._targetScale = 0.5 + Math.random() * 0.5;
		this.setScale(0);
		this.setAlpha(0.75);

		if (!Smoke.BlurFilter) {
			Smoke.BlurFilter = new BlurFilter(8);
		}
		this._root.filters = [Smoke.BlurFilter];
		this.updatePos();
	}

	/**
	 * Update the grow animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._timer < Smoke.GROW_TIMER) {
			this._timer += timer.tmod;
			const coef = PixiHelper.mm(0, this._timer / Smoke.GROW_TIMER, 1);
			this.setScale(Tween.bezier(coef, 0, 1, 1, 1) * this._targetScale);
		}
	}
}
