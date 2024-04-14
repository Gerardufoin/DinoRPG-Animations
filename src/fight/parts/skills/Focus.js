// @ts-check

import { Container } from 'pixi.js';
import { Sprite } from '../../Sprite.js';
import { Animator } from '../../../display/Animator.js';
import { fx_focus } from '../../../gfx/fx/focus.js';
import { Timer } from '../../Timer.js';

/**
 * Instantiates a focus animation which flicker and then burst on demand.
 */
export class Focus extends Sprite {
	/**
	 * The animator for the focus animation.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Instantiate the Focus animation at the given coordinates.
	 * The Focus can then burst on demand and will be automatically destroyed.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	constructor(x, y) {
		super(new Container());

		this._animator = new Animator(false).loadAnimation(fx_focus, 2);
		this._animator.scale.set(0.5);
		this._root.addChild(this._animator);
		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this._root.scale.set(0);
		this._root.x = x;
		this._root.y = y;
	}

	/**
	 * Sets the animation to the bursting part.
	 */
	burst() {
		this._animator.setFrame(3, true);
	}

	/**
	 * Sets the coefficient for the focus size, between 0 and 1.
	 * @param {number} coef The size coefficient between 0 and 1.
	 */
	setSize(coef) {
		this._root.scale.set(coef * 2);
	}

	/**
	 * Updates the focus animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._animator.update(timer.deltaTimeMS);
	}
}
