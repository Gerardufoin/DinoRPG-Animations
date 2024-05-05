// @ts-check

import { BLEND_MODES, Container, SpriteMaskFilter } from 'pixi.js';
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
	/**
	 * The filter of the environement.
	 * Created as a SpriteMaskFilter to allow for blending.
	 * Static because it makes WebGL stutters at creation.
	 * @type {SpriteMaskFilter}
	 */
	static MaskFilter;

	/**
	 * The container masked by the masked animation.
	 * Add your display element in there.
	 * @type {Container}
	 */
	_masked;
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

		this._masked = new Container();
		this._masked.filters = [Environment.MaskFilter];
		this._root.addChild(this._masked);
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
		this._masked.filters = [];
	}

	static i = 3;
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
			Environment.MaskFilter = new SpriteMaskFilter();
			Environment.MaskFilter.maskSprite = Environment.MaskAnimator.getPartSprite('mask');
		}
		Environment.MaskFilter.blendMode = BLEND_MODES.NORMAL;
	}
}
