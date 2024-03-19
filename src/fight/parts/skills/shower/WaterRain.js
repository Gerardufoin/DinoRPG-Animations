// @ts-check

import { ARain } from './ARain.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Graphics } from 'pixi.js';

// GFX 768 + 769
/**
 * A single drop of water falling from the sky and rippeling on contact with the ground.
 */
export class WaterRain extends ARain {
	/**
	 * Amount of time the drip will ripple on the ground.
	 */
	static RIPPLE_TIMER = 8;

	/**
	 * The ripple once the drop hits the ground.
	 * @type {Graphics}
	 */
	_ripple;

	/**
	 * Create a single drop of water falling from the sky.
	 * @param {IScene} scene The Scene where the drop is instantiated.
	 * @param {number} side The side of the Scene where the drop shall fall.
	 */
	constructor(scene, side) {
		super(scene, side);

		this._trail = new Graphics().lineStyle(1, 0xffffff).moveTo(0, 0).lineTo(-30, 0);
		this._root.addChild(this._trail);
	}

	/**
	 * Reset the rotation on landing, create the ripple, and set the fadeout timer.
	 */
	landed() {
		for (let i = this._root.children.length - 1; i >= 0; --i) {
			this._root.removeChildAt(i);
		}
		this._root.rotation = 0;
		this._fadeoutTimer = WaterRain.RIPPLE_TIMER;
		this._ripple = new Graphics();
		this._root.addChild(this._ripple);
	}

	/**
	 * Update the ripple once the drop has hit the ground.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._ripple) {
			const coef = Math.min(1 - this._fadeoutTimer / WaterRain.RIPPLE_TIMER, 1);
			this._ripple.clear();
			this._ripple.lineStyle(1, 0xffffff).drawEllipse(0, 0, 5 + coef * 10, 3 + coef * 5);
		}
	}
}
