// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../Part.js';
import { IScene } from '../IScene.js';
import { Animator } from '../../display/Animator.js';
import { fx_slash } from '../../gfx/fx/slash.js';

// GFX 660
/**
 * Creates a slashing animation at the given coordinates.
 */
export class Slash extends Part {
	/**
	 * Creates a slashing animation at the given coordinates.
	 * @param {IScene} scene The Scene where the slash is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_slash);
		this._animator.registerCallback('destroy', () => {
			this.kill();
		});
		this._root.addChild(this._animator);

		this._x = x;
		this._y = y;
	}
}
