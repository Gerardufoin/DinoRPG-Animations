// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Timer } from './Timer.js';
import { Tween } from '../display/Tween.js';

/**
 * Allows the creation and update of Tweens.
 */
export class TweenManager {
	/**
	 * List of Tweens currently playing.
	 * @type {Tween[]}
	 */
	_tweens = [];

	/**
	 * Update the registered Tweens and remove the disposable ones.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		this._tweens.map((t) => t.update(timer.deltaTimeS));
		this._tweens = this._tweens.filter((t) => !t._disposed);
	}

	/**
	 * Add a new Tween animation to the list.
	 * @param {Tween} tween The new Tween to add to the list.
	 */
	addTween(tween) {
		this._tweens.push(tween.getHead());
	}
}
