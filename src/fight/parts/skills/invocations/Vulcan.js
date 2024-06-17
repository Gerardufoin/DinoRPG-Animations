// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { invoc_vulcan_head } from '../../../../gfx/invocations/vulcan_head.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene, SCENE_WIDTH } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Lava } from '../Lava.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Vulcan upon the Scene.
 */
export class Vulcan extends Invocation {
	/**
	 * The animation for the head.
	 * @type {Animator}
	 */
	_head;
	/**
	 * List of the lava pillars created in the Scene.
	 * @type {Lava[]}
	 */
	_pillars = [];

	/**
	 * Invokes Vulcan upon the Scene.
	 * @param {IScene} scene The scene where Vulcan is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.vulcan.body));

		this._head = new Animator(false).loadAnimation(invoc_vulcan_head);
		this._head.x = 130;
		this._head.y = 28;
		this._body.addChild(this._head);

		this._body.x = -210;
		this._body.y = -290;
	}

	/**
	 * Create Vulcan's lava pillars once the descent is over.
	 */
	descended() {
		for (let i = 0; i < 8; ++i) {
			const lava = new Lava();
			this._scene.dm.addSprite(lava, Layers.Scene.FIGHTERS);
			const lroot = lava.getRootContainer();
			lroot.x = SCENE_WIDTH * Math.random();
			lroot.y = this._scene.getY(this._y) + 20 * Math.random() - 100 * Math.random();
			lroot.zIndex = lroot.y;
			this._pillars.push(lava);
		}
	}

	/**
	 * Updates the head animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._head.update(timer.deltaTimeMS);
	}

	/**
	 * Closes the lava pillars.
	 */
	kill() {
		super.kill();
		this._pillars.map((p) => p.close());
		this._pillars = [];
	}
}
