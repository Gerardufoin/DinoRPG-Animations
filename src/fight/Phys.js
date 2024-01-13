// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Phys.hx

import { Sprite } from './Sprite.js';
import { PixiHelper } from '../display/PixiHelper.js';
import { Timer } from './Timer.js';
import { Container } from 'pixi.js';
import { Scene } from './Scene.js';

/**
 * The Phys class applies physic components to move the Sprite around.
 */
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
	/**
	 * @type {number | null}
	 */
	_groundFrict = 0.5;
	_groundRotFrict = 0.5;
	_bounceFrict = 0.5;
	_weight = 0.0;

	/**
	 * Set the bounce friction.
	 * @param {number} bf The new bounce friction.
	 */
	set bounceFrict(bf) {
		this._bounceFrict = bf;
	}

	/**
	 * On bounce callback.
	 * @type {() => void}
	 */
	onBounce;

	/**
	 * Insantiate a Phys class. The parameters are for the Sprite initialisation.
	 * @param {Container} container PixiJS container. The body being moved around.
	 * @param {Scene} scene The scene where the body evolves.
	 */
	constructor(container, scene) {
		super(container, scene);
	}

	/**
	 * Update the position based on the velocity and the frictions of the Fighter.
	 * @param {Timer} timer The Timer managing the elapsed time.
	 */
	update(timer) {
		if (this._friction != 0) {
			const frict = Math.pow(this._friction, timer.tmod);
			this._vx *= frict;
			this._vy *= frict;
			this._vz *= frict;
			this._vr *= frict;
		}
		this._vz += this._weight * timer.tmod;
		if (this._frv != 0) {
			this._vr *= Math.pow(this._frv, timer.tmod);
		}
		this._root.rotation += this._vr * timer.tmod;

		this._x += this._vx * timer.tmod;
		this._y += this._vy * timer.tmod;
		this._z += this._vz * timer.tmod;

		if (this._vsc != 0) {
			this._root.scale.x *= Math.pow(this._vsc, timer.tmod);
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

		super.update(timer);
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
