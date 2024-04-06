// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../../Part.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { IScene } from '../../../IScene.js';

// GFX 582
/**
 * A shard for the Rock projectile.
 */
export class RockShard extends Part {
	/**
	 * A shard particle for the Rock projectile.
	 * @param {IScene} scene The Scene where the shard is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		this._root.addChild(new Asset(ref.fx.projectile.rock_shard));

		this._x = x;
		this._y = y;
		this._z = -2;

		this._vx = -5 + Math.random() * 10;
		this._vy = 0;
		this._vz = -(3 + Math.random() * 6);

		this.setScale(0.5 + Math.random() * 0.5);
		this._root.angle = Math.random() * 360;

		this._weight = 0.2 + Math.random() * 0.3;
		this._fadeoutTimer = 80 + Math.random() * 10;
		this._fadeScale = true;

		this.updatePos();
	}
}
