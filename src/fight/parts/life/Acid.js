// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Acid.hx + _LAcid in Fighter

import { Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { Scene } from '../../Scene.js';

// GFX 767
/**
 * Instantiate an acid particle, which begins as a ball an will burst into smoke.
 */
export class Acid extends Phys2D {
	/**
	 * Ball part of the Acid.
	 * @type {Container}
	 */
	_ball;
	/**
	 * Smoke part of the Acid.
	 * @type {Container}
	 */
	_smoke;
	/**
	 * Animation timer, controlling the growth the the ball/smoke asset.
	 * @type {number}
	 */
	_animTimer = 0;
	/**
	 * Targetted y coordinate where the acid ball will burst into smoke.
	 * @type {number}
	 */
	_targetY;

	/**
	 * Create an acid particle at the given coordinates.
	 * Once the acid particle reaches the target y coordinate, it bursts into smoke.
	 * @param {Scene} scene The Scene where the acid is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} ty The target y coordinate where the acid will become smoke.
	 */
	constructor(scene, x, y, ty) {
		super(new Container(), scene);
		this._x = x;
		this._y = y;
		this._targetY = ty;

		this._weight = 0.2 + Math.random() * 0.2;

		this._ball = new Asset(ref.fx.acid_ball);
		this._smoke = new Asset(ref.fx.acid_smoke);
		this._root.addChild(this._ball);
		this._root.addChild(this._smoke);
		this._smoke.visible = false;
	}

	/**
	 * Update the size of the acid particle and change it from ball to smoke once it reaches the target destination.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._animTimer += timer.tmod;
		if (this._ball.visible) {
			// Ball grows over 3 frames
			this._ball.scale.x = this._ball.scale.y = Math.min(this._animTimer / 3, 1);
		} else {
			// Smoke grows from 0.4 to 1.1 over 7 frames
			this._smoke.scale.x = this._smoke.scale.y = Math.min((this._animTimer / 7) * 0.7, 0.7) + 0.4;
		}
		// Once target is reached, we show the smoke, make its weight lighter and setup the fadeout timer.
		if (this._y > this._targetY) {
			this._ball.visible = false;
			this._smoke.visible = true;
			this._animTimer = 0;

			this._weight = -(0.2 * Math.random() * 0.5);
			this._fadeoutTimer = 10 + Math.random() * 15;
			this.setScale(1 + Math.random() * 0.5);
			this._vr = (Math.random() * 2 - 1) * 3;
			this._y = this._targetY;
			this._vy = 0;
		}
	}
}
