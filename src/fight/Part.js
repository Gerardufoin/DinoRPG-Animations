// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Part.hx

import { Phys } from './Phys.js';
import { Timer } from './Timer.js';

/**
 * Part is an FX instantiated in the scene and fading over time.
 */
export class Part extends Phys {
	/**
	 * Time before the Part fades out.
	 * @type {number}
	 */
	_timer = 0;
	/**
	 * Freeze timer. Part will not update while frozen.
	 * @type {number}
	 */
	_freezeTimer = 0;
	/**
	 * Base alpha of the Part. Used to fade it out through a coefficient.
	 * @type {number}
	 */
	_alpha = 1;
	/**
	 * Once the timer reaches this limit, starts to fade out the Part.
	 * @type {number}
	 */
	_fadeLimit = 10;
	/**
	 * Decides if the Part fades out through its alpha or through its scale.
	 * @type {boolean}
	 */
	_fadeScale = false;

	/**
	 * Sets the alpha of the container.
	 * @param {number} n Value of the alpha.
	 */
	setAlpha(n) {
		this._alpha = n;
		this._root.alpha = this._alpha;
	}

	/**
	 * Update the Part, change the scale and the alpha.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 * @returns {void}
	 */
	update(timer) {
		if (this._freezeTimer > 0) {
			this._freezeTimer -= timer.tmod;
			if (this._freezeTimer <= 0) {
				//root.play(); TODO
				//root._visible = true;
			} else {
				return;
			}
		}
		super.update(timer);
		if (this._timer > 0) {
			this._timer -= timer.tmod;
			if (this._timer <= this._fadeLimit) {
				const c = this._timer / this._fadeLimit;
				if (this._fadeScale) {
					this._root.scale.x = this._root.scale.y = c * this._scale;
				} else {
					this._root.alpha = c * this._alpha;
				}
			}
			if (this._timer <= 0) {
				this.kill();
			}
		}
	}
}
