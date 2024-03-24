// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { IScene } from '../../../IScene.js';
import { Phys2D } from '../../Phys2D.js';

// GFX 783
/**
 * Creates a droplet of water at the given coordinates.
 */
export class WaterDrop extends Phys2D {
	/**
	 * Creates a droplet of water at the given coordinates, which disappear over time.
	 * @param {IScene} scene The Scene where the droplet is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		const drop = new Container();
		drop.addChild(new Asset(ref.fx.water.drop, 2));
		drop.scale.set(0.5);
		this._root.addChild(drop);

		this._x = x + Math.random() * 5;
		this._y = y + (Math.random() * 2 - 1) * 10;
		this._vx = -Math.random() * (3 + Math.random() * 5);

		this._fadeoutTimer = 10 + Math.random() * 20;
		this._fadeType = 0;
		this.setScale(0.5 + Math.random());

		this._root.angle = Math.random() * 360;
		this._vr = (Math.random() * 2 - 1) * 5;
		this._rFriction = 0.98;

		this.updatePos();
	}
}
