// @ts-check

import { Container } from 'pixi.js';
import { Phys } from '../Phys.js';
import { Scene } from '../Scene.js';
import { Asset } from '../../display/Asset.js';
import { ref } from '../../gfx/references.js';

/**
 * A Toy is a physical entity whose display is chosen with a key from gfx.toys.
 */
export class Toy extends Phys {
	/**
	 * Create a new toy at the given positions with the given initial velocity.
	 * @param {Scene} scene The Scene where the Toy is spawned in.
	 * @param {string} toy The reference to the toy display. Has to be an index from gfx.toys.
	 * @param {number | null} x The initial x coordinate.
	 * @param {number | null} y The initial y coordinate.
	 * @param {number | null} z The initial z coordinate.
	 * @param {number | null} vx The initial vx coordinate.
	 * @param {number | null} vy The initial vy coordinate.
	 * @param {number | null} vz The initial vz coordinate.
	 */
	constructor(scene, toy, x, y, z, vx, vy, vz) {
		super(new Container(), scene);

		const ast = new Asset(ref.toys[toy] ?? ref.toys.unk);
		this._root.addChild(ast);
		ast.x -= 8;
		ast.y -= 15;

		this._weight = 0.5;
		this._ray = 10;
		this._x = x ?? 0;
		this._y = y ?? 0;
		this._z = z ?? -this._ray;
		this._vx = vx ?? 0;
		this._vy = vy ?? 0;
		this._vz = vz ?? 0;
		this.dropShadow();
	}
}
