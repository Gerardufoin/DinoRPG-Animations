// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Homing.hx

import { Container } from 'pixi.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { Fighter } from '../../Fighter.js';
import { Part } from '../../Part.js';
import { Timer } from '../../Timer.js';
import { IScene } from '../../IScene.js';

/**
 * Creates a homing Part, which will home toward a specific target.
 */
export class Homing extends Part {
	/**
	 * If true, orient the Part toward the target.
	 * @type {boolean}
	 */
	_flOrient = false;

	_speed = 3;
	_speedFriction = 0;
	_angle = 0;
	_va = 0.2;
	_ca = 0.1;

	/**
	 * The target toward which the Part is moving.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * Makes the Part move up and down.
	 * @type {{max: number, z: number, bz: number}}
	 */
	_jumper;

	/**
	 * Creates a Part which homes toward the given target.
	 * @param {Container} container The visual representation of the part.
	 * @param {IScene} scene The Scene where the Part is instantiated.
	 * @param {Fighter} target The target of the Part.
	 */
	constructor(container, scene, target) {
		super(container, scene);
		this._target = target;
		this._ray = 20;
		this.dropShadow();
	}

	/**
	 * Update the homing part parameters.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._speed > 1) {
			this._speed -= (this._speed - this._speed * this._speedFriction) * timer.tmod;
		}

		if (this._target) {
			const tz = this._target.position.z - this._target.height * 0.5;
			const dx = this._target.position.x - this._x;
			const dy = this._target.position.y - this._y;
			const dz = tz - this._z;
			const da = PixiHelper.hMod(Math.atan2(dy, dx) - this._angle, 3.14);
			const inc = PixiHelper.mm(-this._va, da * this._ca, this._va) * timer.tmod;
			this._angle = PixiHelper.hMod(this._angle + inc, 3.14);

			this._vx = Math.cos(this._angle) * this._speed;
			this._vy = Math.sin(this._angle) * this._speed;

			if (this._jumper) {
				const dist = Math.sqrt(dx * dx + dy * dy);
				const c = dist / this._jumper.max;
				this._z = this._jumper.bz * c + tz * (1 - c) + Math.sin(c * 3.14) * this._jumper.z;
			} else {
				this._z = dz * 0.2;
			}
		}

		if (this._flOrient) {
			this._root.angle = this._angle / 0.0174;
		}
	}

	/**
	 * Returns the distance to the target.
	 * @returns {number} The distance between the Part and the target.
	 */
	getTargetDistance() {
		return this.getDist(this._target.position);
	}
}
