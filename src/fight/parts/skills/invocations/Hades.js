// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_hades_cut } from '../../../../gfx/invocations/hades_cut.js';

/**
 * Invokes Hades upon the Scene.
 */
export class Hades extends Invocation {
	/**
	 * The animator for the cut of Hades.
	 * @type {Animator}
	 */
	_cut;

	/**
	 * Invokes Hades upon the Scene.
	 * @param {IScene} scene The scene where Hades is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.hades.body));

		this._cut = new Animator(false).loadAnimation(invoc_hades_cut);
		this._cut.playing = false;
		this._cut.visible = false;
		this._cut.x = -210;
		this._cut.y = -285;
		// Add cut to root to avoid the white filter
		this._root.addChild(this._cut);

		this._body.x = -210;
		this._body.y = -285;
	}

	/**
	 * Starts Hades' cut once the descent is over.
	 */
	descended() {
		this._cut.playing = true;
		this._cut.visible = true;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._cut.update(timer.deltaTimeMS);
	}
}
