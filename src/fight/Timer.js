// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe3/mt/Timer.hx

import { Ticker } from 'pixi.js';
import { Settings } from './settings/Settings.js';

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
	static MAX_DELTA_TIME = 500;
	/**
	 * The expected frame rate of the Timer.
	 * @type {number}
	 */
	_expectedFPS;
	/**
	 * A timer keeping track of the tmod elapsed since the last frame based on the expected frame rate.
	 * @type {number}
	 */
	_frameTimer = 0;

	/**
	 * The application settings, defines the speed of the Timer.
	 * @type {Settings}
	 */
	_settings;

	/**
	 * Return true when a frame of the expected frame rate has elapsed.
	 * @type {boolean}
	 */
	get frameElapsed() {
		return this._frameTimer >= 1;
	}

	/**
	 * Build upon PixiJS Ticker to include the frame limitation of DinoRPG via tmod.
	 * @param {number} fps The expected frame rate of the display.
	 * @param {Settings} settings The settings of the application, which will defines the speed of the Timer.
	 */
	constructor(fps, settings) {
		super();
		this._expectedFPS = fps;
		this._settings = settings;

		this.add(() => {
			if (this._frameTimer >= 1) {
				this._frameTimer -= 1;
			}
			this._frameTimer += this.tmod;
		});
	}

	/**
	 * TMOD should be 1 when the app is running at the expected FPS.
	 * Any FPS deviation from the expected value will reflect on tmod to compensate for the increase/decrease of FPS.
	 * If more than Timer.MAX_DELTA_TIME milliseconds have elapsed since the last frame, returns 1 instead.
	 * @type {number}
	 */
	get tmod() {
		return (this.elapsedMS >= Timer.MAX_DELTA_TIME ? 1 : this._expectedFPS / this.FPS) * this._settings.speed;
	}

	/**
	 * Elasped time between two frame in milliseconds.
	 * If bigger than Timer.MAX_DELTA_TIME, then is set to 1 / expectedFPS * 1000.
	 * @type {number}
	 */
	get deltaTimeMS() {
		return (
			(this.elapsedMS >= Timer.MAX_DELTA_TIME ? (1 / this._expectedFPS) * 1000 : this.elapsedMS) *
			this._settings.speed
		);
	}

	/**
	 * Elasped time between two frame in seconds.
	 * If bigger than Timer.MAX_DELTA_TIME, then is set to 1 / expectedFPS.
	 * @type {number}
	 */
	get deltaTimeS() {
		return this.deltaTimeMS / 1000;
	}
}
