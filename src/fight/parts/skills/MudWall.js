// @ts-check

import { Container } from 'pixi.js';
import { Animator } from '../../../display/Animator.js';
import { Sprite } from '../../Sprite.js';
import { fx_mudwall } from '../../../gfx/fx/mudwall.js';
import { Timer } from '../../Timer.js';

/**
 * Instantiates a mud wall which is animated while spawning in.
 */
export class MudWall extends Sprite {
	/**
	 * The Animator of the mud wall.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Creates a mud wall at the given coordinates with the given scale.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} scale The scale of the mud wall.
	 */
	constructor(x, y, scale) {
		super(new Container());

		this._animator = new Animator(false).loadAnimation(fx_mudwall, scale);
		this._root.addChild(this._animator);

		this._root.x = x;
		this._root.y = y;
	}

	/**
	 * Updates the animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._animator.update(timer.deltaTimeMS);
	}
}
