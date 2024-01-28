// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Scene } from '../../Scene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';

// GFX 707
/**
 * Creates a pacticle of light at the given coordinates with the given velocity.
 */
export class Light extends Phys2D {
	/**
	 * Creates a particle of light at the given coordinates with the given velocity.
	 * @param {Scene} scene The Scene where the particle is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 */
	constructor(scene, x, y, vx, vy) {
		super(new Container(), scene);
		this._root.addChild(new Asset(ref.fx.light));

		this._x = x;
		this._y = y;
		this._vx = vx;
		this._vy = vy;
	}
}
