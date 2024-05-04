// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Faller.hx

import { Part } from '../../Part.js';
import { Timer } from '../../Timer.js';

/**
 * Creates a Part which will stop moving once making contact with the ground.
 */
export class Faller extends Part {
	/**
	 * True while the Part is falling.
	 * @type {boolean}
	 */
	_flFall = true;

	/**
	 * Stops the fall animation once the element reaches the ground.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._flFall && this._z == 0) {
			this._vx = 0;
			this._vy = 0;
			this._vz = 0;
			this._weight = 0;
			if (this._animator) {
				this._animator.playing = false;
			}
			this._flFall = false;
			this.landed();
		}
	}

	/**
	 * Function called once the entity hits the ground.
	 * Overwritten by children.
	 */
	landed() {}
}
