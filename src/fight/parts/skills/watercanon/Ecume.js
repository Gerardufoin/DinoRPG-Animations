// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../../Phys2D.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';

// GFX 779
/**
 * Creates ecume which floats backward.
 * To attach inside the depth manager of a water canon.
 */
export class Ecume extends Phys2D {
	/**
	 * Creates a drop of ecume which floats away and disappear.
	 * @param {IScene} scene The Scene where the ecume is instantiated.
	 */
	constructor(scene) {
		super(new Container(), scene);

		this._root.addChild(new Asset(ref.fx.water.ecume));

		this._x = (Math.random() * 2 - 1) * 2;
		this._y = (Math.random() * 2 - 1) * 10;
		this._vx = -Math.random() * 5;
		this._vy = -Math.random() * 3;
		this._weight = 0.1 + Math.random() * 0.2;
		this._fadeoutTimer = 10 + Math.random() * 10;
		this._fadeType = 0;
		this._root.angle = Math.random() * 360;
		this._vr = (Math.random() * 2 - 1) * 5;
		this._rFriction = 0.98;
		this._friction = 0.97;
		this.setScale(0.5 + Math.random() * 0.5);
	}
}
