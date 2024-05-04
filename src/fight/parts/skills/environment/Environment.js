// @ts-check

import { Container } from 'pixi.js';
import { Sprite } from '../../../Sprite.js';
import { Timer } from '../../../Timer.js';
import { Animator } from '../../../../display/Animator.js';

/**
 * An environment which can be summoned on the Scene to change the background effects.
 */
export class Environment extends Sprite {
	/**
	 * The environment animator.
	 * @type {Animator}
	 */
	_animator;
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
	 * Creates a new environment based on the given animation.
	 * @param {object} anim The environment animation.
	 */
	constructor(anim) {
		super(new Container());

		this._animator = new Animator(false).loadAnimation(anim);
		this._root.addChild(this._animator);
	}

	/**
	 * Updates the env animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._animator.update(timer.deltaTimeMS);

		if (this._disposed) {
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
}
