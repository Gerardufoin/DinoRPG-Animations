// @ts-check

import { BlurFilter, Color, Container } from 'pixi.js';
import { Part } from '../../Part.js';
import { IScene } from '../../IScene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../dino/references_small.js';

// GFX 645
/**
 * A dust particle taking the color of the background where it is spawned at.
 */
export class GroundDirt extends Part {
	/**
	 * The BlurFilter of the dirt.
	 * Storing it to prevent WebGL from creating a new shader every time.
	 * @type {BlurFilter}
	 */
	static BlurFilter;

	/**
	 * Creates a small cloud of dust at the given coordinate with the given velocity.
	 * The cloud of dust will have the color of the Scene background where it is spawned at.
	 * @param {IScene} scene The Scene where the cloud is spawned.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vy The initial y velocity.
	 * @param {number} vz The initial z velocity.
	 * @param {Color} color The color of the dirt particle.
	 */
	constructor(scene, x, y, z, vx, vy, vz, color) {
		super(new Container(), scene);
		const dust = new Asset(ref.fx.dust);
		this._root.addChild(dust);

		this._x = x;
		this._y = y;
		this._z = z;
		this._vx = vx;
		this._vy = vy;
		this._vz = vz;

		this._weight = -0.1 + Math.random() * 0.1;
		this._fadeoutTimer = 10 + Math.random() * 10;
		this._vr = (Math.random() * 2 - 1) * 10;
		this.setScale(0.5 + Math.random() * 0.75);
		this._root.angle = Math.random() * 360;
		this.updatePos();

		dust.tint = color;
		if (!GroundDirt.BlurFilter) {
			GroundDirt.BlurFilter = new BlurFilter(3);
		}
		dust.filters = [GroundDirt.BlurFilter];

		this._fadeScale = true;
	}
}
