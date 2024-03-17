// @ts-check

import { Container, Graphics } from 'pixi.js';
import { GlowFilter } from '@pixi/filter-glow';

/**
 * Creates a light beam which blast at the given coordinates.
 */
export class LightBeam extends Container {
	/**
	 * The GlowFilter of the beam.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * The starting position of the beam.
	 * @type {{x: number, y: number}}
	 */
	_start;
	/**
	 * The end position of the beam.
	 * @type {{x: number, y: number}}
	 */
	_dest;
	/**
	 * The width of the beam at 1 coefficient.
	 * @type {number}
	 */
	_width;
	/**
	 * The beam part.
	 * @type {Graphics}
	 */
	_beam;
	/**
	 * The base of the beam.
	 * @type {Graphics}
	 */
	_base;

	/**
	 * Creates the beam of light.
	 * @param {number} sx The x position of the start of the beam.
	 * @param {number} sy The y position of the start of the beam.
	 * @param {number} tx The x position of the target of the beam.
	 * @param {number} ty The y position of the target of the beam.
	 * @param {number} width The width of the beam.
	 */
	constructor(sx, sy, tx, ty, width) {
		super();
		this._start = {
			x: sx,
			y: sy
		};
		this._dest = {
			x: tx,
			y: ty
		};
		this._width = width;

		if (!LightBeam.GlowFilter) {
			LightBeam.GlowFilter = new GlowFilter({
				distance: 30,
				color: 0xfffad6,
				outerStrength: 10
			});
		}
		this.filters = [LightBeam.GlowFilter];

		this._beam = new Graphics();
		this.addChild(this._beam);
		this._base = new Graphics();
		this.addChild(this._base);
	}

	/**
	 * Updates the size of the beam based on the given coefficient.
	 * @param {number} coef The coefficient of the beam size.
	 */
	update(coef) {
		const halfWidth = (this._width / 2) * coef;
		this._beam.clear();
		this._beam
			.beginFill(0xfffad6)
			.drawPolygon(
				this._start.x - halfWidth,
				this._start.y,
				this._start.x + halfWidth,
				this._start.y,
				this._dest.x + halfWidth,
				this._dest.y,
				this._dest.x - halfWidth,
				this._dest.y
			);
		this._base.clear();
		this._base.beginFill(0xfffad6).drawEllipse(this._dest.x, this._dest.y, halfWidth, (this._width / 4) * coef);
	}
}
