// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Phys.hx

import { Timer } from './Timer.js';
import { Container } from 'pixi.js';
import { Entity } from './Entity.js';
import { IScene } from './IScene.js';

/**
 * The Phys class applies physic components to move the Sprite around.
 */
export class Phys extends Entity {
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
	/**
	 * Friction of the entity.
	 * Slows down the velocity over time.
	 * @type {number}
	 */
	_friction = 0.0;
	/**
	 * Friction of the entity's rotation velocity.
	 * Slows down the rotation velocity over time.
	 * @type {number}
	 */
	_rotationFrict = 0.0;
	/**
	 * @type {number | null}
	 */
	_groundFrict = 0.5;
	/**
	 * The friction applied to the rotation when the entity is on the ground (z = 0).
	 * @type {number}
	 */
	_groundRotFrict = 0.5;
	/**
	 * The friction applied to vz when the entity is hitting the ground (z = 0).
	 * @type {number}
	 */
	_bounceFrict = 0.5;
	/**
	 * The weight of the entity.
	 * If above 0, will increase vz over time.
	 * @type {number}
	 */
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
	 * @param {IScene} scene The scene where the body evolves.
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
		if (this._rotationFrict != 0) {
			this._vr *= Math.pow(this._rotationFrict, timer.tmod);
		}
		this._root.angle += this._vr * timer.tmod;

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
}
