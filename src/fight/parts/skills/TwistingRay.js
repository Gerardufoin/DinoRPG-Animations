// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { IScene } from '../../IScene.js';
import { Phys2D } from '../Phys2D.js';

/**
 * Creates a ray a the given coordinates.
 * Does not seem to be used by MT.
 */
export class TwistingRay extends Phys2D {
	/**
	 * Creates a ray at the given coordinates.
	 * @param {IScene} scene The Scene where the ray is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} duration The duration of the ray.
	 */
	constructor(scene, x, y, duration) {
		super(new Container(), scene);

		const ray = new Container();
		ray.addChild(new Asset(ref.fx.twisting_ray, 5));
		ray.scale.set(1 / 5);
		this._root.addChild(ray);

		this._x = x;
		this._y = y;

		this.setScale(2 + Math.random() * 1.5);
		this._vr = (Math.random() * 2 - 1) * 1.5;
		this._root.angle = Math.random() * 360;

		this._fadeoutTimer = duration;
	}
}
