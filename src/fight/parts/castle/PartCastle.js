// @ts-check

import { Phys } from '../../Phys.js';
import { IScene } from '../../IScene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';

/**
 * A piece of stone falling from a damaged Castle..
 */
export class PartCastle extends Phys {
	/**
	 * Create a new piece of stone at the given positions with the given initial velocity.
	 * @param {IScene} scene The Scene where the part is spawned in.
	 * @param {number | null} x The initial x coordinate.
	 * @param {number | null} y The initial y coordinate.
	 * @param {number | null} z The initial z coordinate.
	 * @param {number | null} vx The initial vx coordinate.
	 * @param {number | null} vy The initial vy coordinate.
	 * @param {number | null} vz The initial vz coordinate.
	 */
	constructor(scene, x, y, z, vx, vy, vz) {
		super(new Asset(ref.castle.stone), scene);

		this._weight = 0.5 + Math.random();
		this._fadeoutTimer = 10 + Math.random() * 60;
		this._fadeScale = true;
		this.setScale(0.5 + Math.random() * 0.5);

		this._x = x ?? 0;
		this._y = y ?? 0;
		this._z = z ?? 0;
		this._vx = vx ?? 0;
		this._vy = vy ?? 0;
		this._vz = vz ?? 0;
		this.dropShadow();
	}
}
