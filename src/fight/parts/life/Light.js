// @ts-check

import { Graphics } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Scene } from '../../Scene.js';

// GFX 707
/**
 * Creates a pacticle of light at the given coordinates with the given velocity.
 */
export class Light extends Phys2D {
	/**
	 * The GlowFilter of the Light.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Creates a particle of light at the given coordinates with the given velocity.
	 * @param {Scene} scene The Scene where the particle is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 */
	constructor(scene, x, y, vx, vy) {
		const light = new Graphics().beginFill(0xffffff).drawCircle(0, 0, 1);
		super(light, scene);
		if (!Light.GlowFilter) {
			Light.GlowFilter = new GlowFilter({
				distance: 10,
				color: 0xffffff,
				outerStrength: 1
			});
		}
		light.filters = [Light.GlowFilter];

		this._x = x;
		this._y = y;
		this._vx = vx;
		this._vy = vy;
	}
}
