// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../display/Asset.js';
import { ref } from '../../gfx/references.js';
import { Tween } from '../../display/Tween.js';
import { Timer } from '../Timer.js';

/**
 * The continue arrow is a simple arrow bouncing at the designated coordinates.
 */
export class ContinueArrow extends Container {
	/**
	 * Number of frames of the bounce animation.
	 * @type {number}
	 */
	static BOUNCE_TIMER = 15;
	/**
	 * The initial x coordinate.
	 */
	_iniX;
	/**
	 * The current timer of the bounce animation.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Creates a continue arrow which bounces back at the given coordinates.
	 * @param {number} x The default x coordinate.
	 * @param {number} y The default y coordinate.
	 */
	constructor(x, y) {
		super();
		this.addChild(new Asset(ref.scene.click));
		this.x = x;
		this.y = y;
		this._iniX = x;
	}

	/**
	 * Update the bouncing animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		this._timer = (this._timer + timer.tmod) % ContinueArrow.BOUNCE_TIMER;
		this.x = this._iniX + Tween.bezier(this._timer / ContinueArrow.BOUNCE_TIMER, 2.25, 0, 0, 2.25) * 5;
	}
}
