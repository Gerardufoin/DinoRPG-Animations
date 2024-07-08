// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Animator } from '../../../display/Animator.js';
import { fx_swamp } from '../../../gfx/fx/swamp.js';
import { IScene } from '../../IScene.js';

/**
 * Creates a swamp puddle which grows over time.
 */
export class Swamp extends Phys2D {
	/**
	 * Creates a swamp puddle at the given coordinates.
	 * @param {IScene} scene The Scene where the puddle is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_swamp);
		this._animator.playing = false;
		this._root.addChild(this._animator);

		this._x = x;
		this._y = y;
		this._fadeoutTimer = 50;
		this._sleep = Math.random() * 20;
		this.setScale(0.5 + Math.random() * 2);
		this._fadeScale = true;
	}
}
