// @ts-check

import { IScene } from '../../../IScene.js';
import { MistralFx } from '../MistralFx.js';

/**
 * Wind particles for the Stinger projectile.
 */
export class StingerWind extends MistralFx {
	/**
	 * Creates a wind particle for the Stinger at the given position.
	 * @param {IScene} scene The Scene where the particle is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} side The side the Stinger is flying from. 1 left, -1 right.
	 */
	constructor(scene, x, y, z, side) {
		super(scene, side, 20);

		this._x = x;
		this._y = y;
		this._z = z;
		this._vx = (0.5 + Math.random() * 2) * side;
		this._vr = (Math.random() * 2 - 1) * 15;
		this.updatePos();
	}
}
