// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { YggdraLeaf } from './effects/YggdraLeaf.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Yggdrasil upon the Scene.
 */
export class Yggdrasil extends Invocation {
	/**
	 * List of the leaves created in the Scene.
	 * @type {YggdraLeaf[]}
	 */
	_leaves = [];

	/**
	 * Invokes Fairies upon the Scene.
	 * @param {IScene} scene The scene where Fairies is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.yggdrasil.body));

		this._body.x = -210;
		this._body.y = -285;
	}

	/**
	 * Spawns the leaves.
	 */
	spawnParts() {
		for (let i = 0; i < 50; ++i) {
			const l = new YggdraLeaf(this._scene);
			this._scene.dm.addSprite(l, Layers.Scene.FIGHTERS);
			this._leaves.push(l);
		}
	}

	/**
	 * Remove the leaves.
	 */
	kill() {
		super.kill();
		this._leaves.map((f) => f.kill());
		this._leaves = [];
	}
}
