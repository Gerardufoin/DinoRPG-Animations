// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Scene } from '../../Scene.js';
import { Light } from './Light.js';
import { Container } from 'pixi.js';
import { Timer } from '../../Timer.js';

// GFX 752
/**
 * Creates a wind particle at the given coordinates with the given velocity.
 */
export class Wind extends Light {
	/**
	 * The GlowFilter of the Wind.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;
	/**
	 * Time taken (in frames) for the particle to grow from 0 to 1.
	 * @type {number}
	 */
	static GROWTH_TIME = 7;

	/**
	 * Grow the wind particle over time.
	 * @type {number}
	 */
	_growTimer = 0;

	/**
	 * Creates a particle of wind at the given coordinates with the given velocity.
	 * @param {Scene} scene The Scene where the particle is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 */
	constructor(scene, x, y, vx, vy) {
		super(scene, x, y, vx, vy);

		const particle = this._root;
		this._root = new Container();
		this._root.addChild(particle);

		if (!Wind.GlowFilter) {
			Wind.GlowFilter = new GlowFilter({
				distance: 10,
				color: 0xffffff,
				outerStrength: 5
			});
		}
		this._root.filters = [Wind.GlowFilter];

		this._fadeoutTimer = 10 + Math.random() * 10;

		this._vr = (Math.random() * 2 - 1) * 15;
		particle.x = Math.random() * 20;
		this._root.angle = Math.random() * 360;

		this._sleep = Math.random() * 20;
		this._root.visible = false;
		this._root.scale.x = this._root.scale.y = 0;
		this.updatePos();
	}

	/**
	 * Update the size of the wind particle.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._sleep <= 0 && this._growTimer < Wind.GROWTH_TIME) {
			this._growTimer += timer.tmod;
			this._root.scale.x = this._root.scale.y = Math.min(this._growTimer / Wind.GROWTH_TIME, 1);
		}
	}
}
