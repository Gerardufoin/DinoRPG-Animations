// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Blink.hx

import { Filter } from 'pixi.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Timer } from '../../../Timer.js';

/**
 * The given Fighter blinks multiple times with the give color and alpha.
 */
export class FxBlink extends State {
	/**
	 * The ColorTransform filter.
	 * Stored to prevent WebGL to recreate it each time.
	 * @type {Filter}
	 */
	static BlinkFilter = PixiHelper.colorOffsetFilter(0, 0, 0);

	/**
	 * Reference to the Fighter blinking.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * Reference to the color of the blink.
	 * @type {number}
	 */
	_color;
	/**
	 * Reference to the alpha of the blink.
	 * @type {number}
	 */
	_alpha;
	/**
	 * Current step of the blinking process.
	 * @type {number}
	 */
	_step = 0;

	/**
	 * A Fighter blinks multiple times with the given color and alpha.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 * @param {number} color The color of the blink.
	 * @param {number} alpha The alpha of the blink between 0 and 1.
	 */
	constructor(scene, endCall, fighter, color, alpha) {
		super(scene, endCall);
		this._caster = fighter;
		this._color = color;
		this._alpha = alpha;

		const root = this._caster.getRootContainer();
		if (!root.filters) {
			root.filters = [];
		}
		root.filters.push(FxBlink.BlinkFilter);

		this._coefSpeed = 0.1;
	}

	/**
	 * Updates the blinking.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		const percent = (this._step % 2 ? 1 - this._coef : this._coef) * 100;
		PixiHelper.setPercentColor(FxBlink.BlinkFilter, percent, this._color, this._alpha);

		if (this._coef === 1) {
			if (this._step === 5) {
				// Remove the filter
				const root = this._caster.getRootContainer();
				root.filters.pop();
				if (root.filters.length === 0) {
					root.filters = undefined;
				}
				this.end();
			}
			this._step++;
			this._coef = 0;
		}
	}
}
