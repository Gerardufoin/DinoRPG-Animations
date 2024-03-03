// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Color, Container } from 'pixi.js';
import { IScene } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';

// GFX 726
/**
 * Creates a small stone particle for ground related effect.
 */
export class GroundStone extends Part {
	/**
	 * Creates a small stone particle at the given coordinate with the given velocity.
	 * The stone will have the color of the Scene background where it is spawned at.
	 * @param {IScene} scene The Scene where the stone is spawned.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 * @param {number} vz The initial z velocity.
	 * @param {Color} color The color of the stone particle.
	 */
	constructor(scene, x, y, z, vx, vy, vz, color) {
		super(new Container(), scene);
		const stone = new Asset(ref.fx.stone);
		this._root.addChild(stone);

		this._x = x;
		this._y = y;
		this._z = z;
		this._vx = vx;
		this._vy = vy;
		this._vz = vz;

		this._weight = 0.5 + Math.random() * 0.5;
		this._fadeoutTimer = 50 + Math.random() * 10;
		this.setScale(0.5 + Math.random() * 0.5);
		this._root.angle = Math.random() * 360;
		this.updatePos();

		stone.tint = color;

		stone.filters = [
			new GlowFilter({
				color: new Color(0xaaaaaa).multiply(color).toNumber(),
				distance: 1,
				outerStrength: 4,
				quality: 0.5
			})
		];

		this._fadeScale = true;
	}
}
