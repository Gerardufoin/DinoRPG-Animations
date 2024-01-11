// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Phys.hx

import { Ticker } from 'pixi.js';
import { Sprite } from './Sprite.js';
import { PixiHelper } from '../display/PixiHelper.js';

export class Phys extends Sprite {
	/**
	 * X velocity.
	 * @type {number}
	 */
	_vx = 0.0;
	/**
	 * Y velocity.
	 * @type {number}
	 */
	_vy = 0.0;
	/**
	 * Z velocity.
	 * @type {number}
	 */
	_vz = 0.0;
	/**
	 * Rotation velocity.
	 * @type {number}
	 */
	_vr = 0.0;
	/**
	 * Scale velocity.
	 * @type {number}
	 */
	_vsc = 0.0;
	_friction = 0.0;
	_frv = 0.0;
	_groundFrict = 0.5;
	_groundRotFrict = 0.5;
	_bounceFrict = 0.5;
	_weight = 0.0;

	/**
	 * On bounce callback.
	 * @type {() => void}
	 */
	onBounce;

	constructor(container, scene) {
		super(container, scene);
	}

	update() {
		if (this._friction != 0) {
			const frict = Math.pow(this._friction, Ticker.shared.deltaTime);
			this._vx *= frict;
			this._vy *= frict;
			this._vz *= frict;
			this._vr *= frict;
		}
		this._vz += this._weight * Ticker.shared.deltaTime;
		if (this._frv != 0) {
			this._vr *= Math.pow(this._frv, Ticker.shared.deltaTime);
		}
		this._root.rotation += this._vr * Ticker.shared.deltaTime;

		this._x += this._vx * Ticker.shared.deltaTime;
		this._y += this._vy * Ticker.shared.deltaTime;
		this._z += this._vz * Ticker.shared.deltaTime;

		if (this._vsc != 0) {
			this._root.scale.x *= Math.pow(this._vsc, Ticker.shared.deltaTime);
			this._root.scale.y = this._root.scale.x;
		}

		if (this._bounceFrict != 0 && this._z > 0) {
			this._z = 0;
			this._vz *= -this._bounceFrict;
			this._vx *= this._groundFrict;
			this._vy *= this._groundFrict;
			this._vr *= -this._groundRotFrict;
			if (this.onBounce) {
				this.onBounce();
			}
		}

		super.update();
	}

	/**
	 *
	 * @param {{x: number, y: number}} t Destination
	 * @param {number} c ???
	 * @param {number} limit Max increase
	 */
	towardSpeed(t, c, limit) {
		const dx = t.x - this._x;
		const dy = t.y - this._y;
		this._vx += PixiHelper.mm(-limit, dx * c, limit);
		this._vy += PixiHelper.mm(-limit, dy * c, limit);
	}
}
