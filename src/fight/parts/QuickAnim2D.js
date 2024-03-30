// @ts-check

import { Container } from 'pixi.js';
import { Animator } from '../../display/Animator.js';
import { Timer } from '../Timer.js';
import { Phys2D } from './Phys2D.js';
import { IScene } from '../IScene.js';

/**
 * A class allowing to instantiate an animation in the scene with a 2D physic.
 * The animation should have a destroy callback to be automatically removed once done playing.
 */
export class QuickAnim2D extends Phys2D {
	/**
	 * The animator playing the animation.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Instantiate an animation in the scene.
	 * The animation should have a destroy callback to be removed once done playing.
	 * @param {IScene} scene The scene where the animation is instantiated.
	 * @param {object} animation The animation to instantiate.
	 * @param {number} x The x coordinate of the animation. 0 by default.
	 * @param {number} y The y coordinate of the animation. 0 by default.
	 * @param {number} alpha The alpha of the animation. 1 by default.
	 */
	constructor(scene, animation, x = 0, y = 0, alpha = 1) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(animation);
		this._root.addChild(this._animator);
		this._root.alpha = alpha;

		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this._x = x;
		this._y = y;
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
