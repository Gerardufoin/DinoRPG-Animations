// @ts-check

import { BLEND_MODES, Container, Filter, SpriteMaskFilter } from 'pixi.js';
import { Sprite } from '../../../Sprite.js';
import { Timer } from '../../../Timer.js';
import { Animator } from '../../../../display/Animator.js';
import { env_mask } from '../../../../gfx/fx/env/mask.js';

/**
 * An environment which can be summoned on the Scene to change the background effects.
 */
export class Environment extends Sprite {
	/**
	 * The animator of the mask shader.
	 * Static to allow the shader to be preloaded.
	 * @type {Animator}
	 */
	static MaskAnimator;
	// All the mask filters are created as a SpriteMaskFilter to allow for blending.
	// All of them are static to be able to preload them to prevent WebGL from stuttering at creation.
	/**
	 * The default mask filter of the environement.
	 * @type {SpriteMaskFilter}
	 */
	static MaskFilter;
	/**
	 * The multiply mask filter of the environement.
	 * @type {SpriteMaskFilter}
	 */
	static MaskFilterMultiply;
	/**
	 * The multiply filter of the environment, to apply once the mask is removed.
	 * @type {Filter}
	 */
	static FilterMultiply;
	/**
	 * The add mask filter of the environement.
	 * @type {SpriteMaskFilter}
	 */
	static MaskFilterAdd;
	/**
	 * The add filter of the environment, to apply once the mask is removed.
	 * @type {Filter}
	 */
	static FilterAdd;
	/**
	 * The substract mask filter of the environement.
	 * @type {SpriteMaskFilter}
	 */
	static MaskFilterSubstract;
	/**
	 * The substract filter of the environment, to apply once the mask is removed.
	 * @type {Filter}
	 */
	static FilterSubstract;

	/**
	 * Additionnal effects for the environment.
	 * Stored here to be disposed once the environment is removed.
	 * @type {Sprite[]}
	 */
	_parts = [];
	/**
	 * Is this environment being disposed of.
	 * Disposed environment will fade out over time and be removed.
	 * @type {boolean}
	 */
	_disposed = false;

	/**
	 * Creates a new environment.
	 */
	constructor() {
		super(new Container());
		Environment.createMaskFilter();
		this._root.addChild(Environment.MaskAnimator);
	}

	/**
	 * Updates the env animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (!this._disposed) {
			Environment.MaskAnimator.update(timer.deltaTimeMS);
		} else {
			this._root.alpha = Math.max(this._root.alpha - 0.05 * timer.tmod, 0);
			if (this._root.alpha <= 0) {
				this.kill();
			}
		}
	}

	/**
	 * Fades out the environment and remove it.
	 */
	dispose() {
		this._disposed = true;
		this._parts.map((p) => p.kill());
		this._parts = [];
	}

	/**
	 * Create the mask filter.
	 * Should be called in preload data, but will be called at creation to reset the mask filter parameters.
	 */
	static createMaskFilter() {
		if (!Environment.MaskAnimator) {
			Environment.MaskAnimator = new Animator(false).loadAnimation(env_mask);
		}
		Environment.MaskAnimator.play(0);
		if (!Environment.MaskFilter) {
			const mask = Environment.MaskAnimator.getPartSprite('mask');
			Environment.MaskFilter = new SpriteMaskFilter();
			Environment.MaskFilter.maskSprite = mask;

			Environment.MaskFilterMultiply = new SpriteMaskFilter();
			Environment.MaskFilterMultiply.maskSprite = mask;
			Environment.MaskFilterMultiply.blendMode = BLEND_MODES.MULTIPLY;
			Environment.FilterMultiply = new Filter();
			Environment.FilterMultiply.blendMode = BLEND_MODES.MULTIPLY;

			Environment.MaskFilterAdd = new SpriteMaskFilter();
			Environment.MaskFilterAdd.maskSprite = mask;
			Environment.MaskFilterAdd.blendMode = BLEND_MODES.ADD;
			Environment.FilterAdd = new Filter();
			Environment.FilterAdd.blendMode = BLEND_MODES.ADD;

			Environment.MaskFilterSubstract = new SpriteMaskFilter();
			Environment.MaskFilterSubstract.maskSprite = mask;
			Environment.MaskFilterSubstract.blendMode = BLEND_MODES.SUBTRACT;
			Environment.FilterSubstract = new Filter();
			Environment.FilterSubstract.blendMode = BLEND_MODES.SUBTRACT;
		}
	}
}
