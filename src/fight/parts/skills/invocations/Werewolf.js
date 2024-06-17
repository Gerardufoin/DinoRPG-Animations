// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_werewolf_eyes } from '../../../../gfx/invocations/werewolf_eyes.js';

/**
 * Invokes Werewolf upon the Scene.
 */
export class Werewolf extends Invocation {
	/**
	 * The animator for the eyes of the Werewolf.
	 * @type {Animator}
	 */
	_eyes;

	/**
	 * Invokes Werewolf upon the Scene.
	 * @param {IScene} scene The scene where Werewolf is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.werewolf.body));

		this._eyes = new Animator(false).loadAnimation(invoc_werewolf_eyes);
		this._eyes.playing = false;
		this._eyes.visible = false;
		this._body.addChild(this._eyes);

		this._body.x = -210;
		this._body.y = -295;
	}

	/**
	 * Show Raijin aura once the descend is over.
	 */
	descended() {
		this._eyes.playing = true;
		this._eyes.visible = true;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._eyes.update(timer.deltaTimeMS);
	}
}
