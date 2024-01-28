// @ts-check

import { Graphics } from 'pixi.js';
import { Faller } from '../Faller.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Scene } from '../../Scene.js';
import { Timer } from '../../Timer.js';

// GFX 742
/**
 * Creates a drip of water which burst into a ripple when hitting the ground.
 */
export class Drip extends Faller {
	/**
	 * Amount of time the drip will elongate while falling.
	 */
	static ELONGATE_TIMER = 7;
	/**
	 * Amount of time the drip will ripple on the ground.
	 */
	static RIPPLE_TIMER = 7;
	/**
	 * The GlowFilter of the drips.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Animation timer.
	 * @type {number}
	 */
	_animTimer = 0;

	/**
	 * Instantiate a drip of water at the given coordinates.
	 * @param {Scene} scene The Scene where the drip of water is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 */
	constructor(scene, x, y, z) {
		super(new Graphics(), scene);

		this._x = x;
		this._y = y;
		this._z = z;

		this._weight = 0.2 + Math.random() * 0.2;
		this.updatePos();

		if (!Drip.GlowFilter) {
			Drip.GlowFilter = new GlowFilter({
				distance: 10,
				color: 0x00aaff,
				outerStrength: 1
			});
		}
		this._root.filters = [Drip.GlowFilter];
	}

	/**
	 * Update the drip appearance.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		this._animTimer += timer.tmod;
		super.update(timer);

		const grph = /** @type {Graphics} */ (this._root);
		grph.clear();
		grph.lineStyle(1, 0xffffff);
		if (this._flFall) {
			grph.moveTo(0, 0).lineTo(0, -(Math.min(this._animTimer / Drip.ELONGATE_TIMER, 1) * 5 + 1));
		} else {
			const coef = Math.min(this._animTimer / Drip.RIPPLE_TIMER, 1);
			grph.drawEllipse(0, 0, coef * 5 + 3, coef * 4 + 1);
		}
	}

	/**
	 * Reset the rotation on landing and set the fadeout timer.
	 */
	landed() {
		this._root.rotation = 0;
		this._animTimer = 0;
		this._fadeoutTimer = Drip.RIPPLE_TIMER;
	}
}
