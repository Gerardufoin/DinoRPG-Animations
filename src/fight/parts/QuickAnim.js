// @ts-check

import { Container } from 'pixi.js';
import { Sprite } from '../Sprite.js';
import { Animator } from '../../display/Animator.js';
import { Timer } from '../Timer.js';

/**
 * A class allowing to instantiate an animation in the scene.
 * The animation should have a destroy callback to be automatically removed once done playing.
 */
export class QuickAnim extends Sprite {
	/**
	 * The animator playing the animation.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Set the x coordinate of the root container.
	 * @type {number}
	 */
	set x(v) {
		this._root.x = v;
	}
	/**
	 * Set the y coordinate of the root container.
	 * @type {number}
	 */
	set y(v) {
		this._root.y = v;
	}

	/**
	 * Instantiate an animation in the scene.
	 * The animation should have a destroy callback to be removed once done playing.
	 * @param {object} animation The animation to instantiate.
	 * @param {number} x The x coordinate of the animation. 0 by default.
	 * @param {number} y The y coordinate of the animation. 0 by default.
	 */
	constructor(animation, x = 0, y = 0) {
		super(new Container());

		this._animator = new Animator(false).loadAnimation(animation);
		this._root.addChild(this._animator);

		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this.x = x;
		this.y = y;
	}

	/**
	 * Updates the animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._animator.update(timer.deltaTimeMS);
	}
}
