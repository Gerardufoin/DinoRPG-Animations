// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_djinn } from '../../../../gfx/invocations/djinn.js';

/**
 * Invokes Djinn upon the Scene.
 */
export class Djinn extends Invocation {
	/**
	 * Animator for Djinn.
	 * @type {Animator}
	 */
	_djinn;

	/**
	 * Invokes Djinn upon the Scene.
	 * @param {IScene} scene The scene where Djinn is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._djinn = new Animator(false).loadAnimation(invoc_djinn);
		this._djinn.playing = false;
		this._body.addChild(this._djinn);

		this._body.x = -215;
		this._body.y = -300;
	}

	/**
	 * Start Djinn breath once descended.
	 */
	descended() {
		this._djinn.playing = true;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._djinn.update(timer.deltaTimeMS);
	}
}
