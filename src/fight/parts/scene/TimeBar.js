// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { Timer } from '../../Timer.js';

/**
 * The time bar being showing at the top of the screen, displaying the remaining time in the fight.
 */
export class TimeBar extends Container {
	/**
	 * The moving part of the bar, scaling up and down depending on the remaining time.
	 * @type {Container}
	 */
	_bar = new Container();

	/**
	 * The total time of the bar.
	 * @type {number}
	 */
	_maxTime = 0;
	/**
	 * The elapsed time in number of frames.
	 * @type {number}
	 */
	_elaspedTime = 0;

	/**
	 * Creates the timebar at the given coordinates.
	 * @param {number} max The total time of the time bar.
	 */
	constructor(max) {
		super();
		this.addChild(new Asset(ref.scene.timebar_bg));
		const bar = new Asset(ref.scene.timebar);
		bar.x = bar.y = 0;
		this._bar.addChild(bar);
		this._bar.x = this._bar.y = 1;
		this.addChild(this._bar);
		this._maxTime = max;
	}

	/**
	 * Increase the elapsed time.
	 * @param {number} t The time to add to the elapsed time, in frames.
	 */
	decreaseTime(t) {
		this._elaspedTime = PixiHelper.mm(0, this._elaspedTime + t, this._maxTime);
	}

	/**
	 * Update the size of the time bar, based on the elapsed and max times.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		if (!this.visible) return;

		const coef = (this._maxTime - this._elaspedTime) / this._maxTime;
		const diff = this._bar.scale.x - coef;
		const limit = 0.05;
		if (diff > 0) {
			this._bar.scale.x = Math.max(coef, this._bar.scale.x - 0.0008 * timer.tmod);
		}
		// If the difference in size is too big, we increase the speed.
		if (diff > limit) {
			this._bar.scale.x = Math.max(coef, this._bar.scale.x - diff * (diff - limit) * timer.tmod);
		}

		if (this._bar.scale.x === 0) {
			this.y -= 4.5 * timer.tmod;
			if (this.y < -20) {
				this.visible = false;
			}
		}
	}
}
