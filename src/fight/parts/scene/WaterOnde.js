// @ts-check

import { Container } from 'pixi.js';
import { Sprite } from '../../Sprite.js';
import { Timer } from '../../Timer.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Tween } from '../../../display/Tween.js';

// GFX 732
/**
 * Half the water ripples happening around a Fighter in water.
 *
 * Two ripples asset are overlapped, and fade in/out with a half timer offset difference.
 */
export class WaterOnde extends Sprite {
	/**
	 * Length of time it takes for one ripple to appear, grow, and disappear.
	 * @type {number}
	 */
	static RIPPLE_TIMER = 24;
	/**
	 * Alpha value when the ripple is at peak animation.
	 * @type {number}
	 */
	static RIPPLE_MAX_ALPHA = 0.55;
	/**
	 * Scale added when the ripple is at peak animation.
	 * @type {number}
	 */
	static RIPPLE_MAX_SCALE = 0.5;

	/**
	 * The two ripples alternating their positions.
	 * @type {Container[]}
	 */
	_ripples = [new Container(), new Container()];
	/**
	 * The timer of the rippling animation, going from 0 to RIPPLE_TIMER.
	 * @type {number}
	 */
	_timer = 0;

	/**
	 * Creates a WaterOnde at the given coordinates with the given scale.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} sx The x scale.
	 * @param {number} sy The y scale.
	 */
	constructor(x, y, sx, sy) {
		super(new Container());

		this._ripples[0].addChild(new Asset(ref.fx.water_onde));
		this._ripples[1].addChild(new Asset(ref.fx.water_onde));
		this._root.addChild(this._ripples[0]);
		this._root.addChild(this._ripples[1]);

		this._root.x = x;
		this._root.y = y;
		this._root.scale.set(sx, sy);
	}

	/**
	 * Update the ripple animation, managing their growth and transparency.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._timer = (this._timer + timer.tmod) % WaterOnde.RIPPLE_TIMER;
		const coef = this._timer / WaterOnde.RIPPLE_TIMER;
		this.updateRipple(this._ripples[0], coef);
		this.updateRipple(this._ripples[1], (coef + 0.5) % 1);
	}

	/**
	 * Update the scale and alpha of one ripple.
	 * @param {Container} ripple The ripple to update.
	 * @param {number} coef The current animation coeficien, between 0 and 1.
	 */
	updateRipple(ripple, coef) {
		ripple.alpha = WaterOnde.RIPPLE_MAX_ALPHA * Tween.bezier(coef, 0, 1, 1, 0);
		ripple.scale.set(1 + WaterOnde.RIPPLE_MAX_ALPHA * coef);
	}
}
