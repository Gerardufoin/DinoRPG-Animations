// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe3/mt/Timer.hx

import { Ticker } from 'pixi.js';

/**
 * DinoRPG display is set to run its animation at a fixed frame rate.
 * The Timer class ensure this can be done via its tmod variable, changing to adapt to the variable framerate of PixiJS
 * and keeping track of the expected frame rate.
 */
export class Timer extends Ticker {
	/**
	 * Maxmum allowed time between two frame.
	 * If the delta time exceed 500ms, set it to the expected frame rate to avoid deviations.
	 * @type {number}
	 */
	static MAX_DELTA_TIME = 0.5;
	/**
	 * Weight of the variation of the tmod variable.
	 * The smaller the number, the faster tmod will change based on the fps variation.
	 * @type {number}
	 */
	static TMOD_FACTOR = 0.95;

	/**
	 * The expected frame rate of the Timer.
	 * @type {number}
	 */
	_expectedFPS;
	/**
	 * Time eslapsed weighted by the expected frame rate.
	 * @type {number}
	 */
	_tmod = 1;
	/**
	 * Elasped time between two frame in seconds.
	 * @type {number}
	 */
	_deltaTime = 1;

	/**
	 * Build upon PixiJS Ticker to include the frame limitation of DinoRPG via tmod.
	 * @param {number} fps The expected frame rate of the display.
	 */
	constructor(fps) {
		super();
		this._expectedFPS = fps;
		this.add(() => {
			this._deltaTime = this.elapsedMS / 1000;
			if (this._deltaTime < Timer.MAX_DELTA_TIME) {
				this._tmod =
					this._tmod * Timer.TMOD_FACTOR + (1 - Timer.TMOD_FACTOR) * this._deltaTime * this._expectedFPS;
			} else {
				this._deltaTime = 1 / this._expectedFPS;
			}
		});
	}

	/**
	 * Time eslapsed weighted by the expected frame rate.
	 * @type {number}
	 */
	get tmod() {
		return this._tmod;
	}

	/**
	 * Elasped time between two frame in seconds.
	 * If bigger than Timer.MAX_DELTA_TIME, then is set to 1 / expectedFPS.
	 * @type {number}
	 */
	get deltaTimeSec() {
		return this._deltaTime;
	}
}
