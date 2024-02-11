// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Flip.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Waits a specified amount of milliseconds and then releases the State.
 *
 * Seems identical to pausing the Fight except it uses milliseconds instead of frames.
 * Keeping it for legacy purposes for the Cinema.
 */
export class Wait extends State {
	/**
	 * The timer to wait in milliseconds.
	 * @type {number}
	 */
	_waitTimer;

	/**
	 * Waits for a specified amount of time before ending the State.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} timer The time in milliseconds to wait.
	 */
	constructor(scene, endCall, timer) {
		super(scene, endCall);
		this._waitTimer = timer;
	}

	/**
	 * Once the wait timer has elapsed, ends the State.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._waitTimer -= timer.deltaTimeMS;
		if (this._waitTimer <= 0) {
			this.end();
		}
	}
}
