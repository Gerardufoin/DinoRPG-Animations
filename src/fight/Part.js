// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Part.hx

import { Animator } from '../display/Animator.js';
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
	_fadeoutTimer = 0;
	/**
	 * Sleep timer. Part will not update while asleep.
	 * @type {number}
	 */
	_sleep = 0;
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
	 * Set if the Part is linked to an animation.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Sets the alpha of the container.
	 * @param {number} n Value of the alpha.
	 */
	setAlpha(n) {
		this._alpha = n;
		this._root.alpha = this._alpha;
	}

	/**
	 * Update the Part, change the scale and handle the sleep and fadeout.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 * @returns {void}
	 */
	update(timer) {
		if (this._sleep > 0) {
			this._sleep -= timer.tmod;
			if (this._sleep <= 0) {
				if (this._animator) {
					this._animator.playing = true;
				}
				this._root.visible = true;
			} else {
				return;
			}
		}
		super.update(timer);
		if (this._animator) {
			this._animator.update(timer.deltaTimeMS);
		}
		if (this._fadeoutTimer > 0) {
			this._fadeoutTimer -= timer.tmod;
			if (this._fadeoutTimer <= this._fadeLimit) {
				const c = this._fadeoutTimer / this._fadeLimit;
				if (this._fadeScale) {
					this._root.scale.set(c * this._scale);
				} else {
					this._root.alpha = c * this._alpha;
				}
			}
			if (this._fadeoutTimer <= 0) {
				this.kill();
			}
		}
	}
}
