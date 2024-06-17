// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { Bubbles } from '../env/water/Bubbles.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Blue Whale upon the Scene.
 */
export class BlueWhale extends Invocation {
	/**
	 * The bubbles of the Blue Whale.
	 * @type {Bubbles[]}
	 */
	_bubbles = [];

	/**
	 * Invokes Blue Whale upon the Scene.
	 * @param {IScene} scene The scene where Blue Whale is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.blue_whale.body));

		this._body.x = -210;
		this._body.y = -305;
	}

	/**
	 * Spawns the bubbles.
	 */
	spawnParts() {
		for (let i = 0; i < 40; ++i) {
			const b = new Bubbles(this._scene, 1.5, -10, 0.003, 0);
			this._scene.dm.addSprite(b, Layers.Scene.FIGHTERS);
			this._bubbles.push(b);
		}
	}

	/**
	 * Removes the bubbles when the whale is removed.
	 */
	kill() {
		super.kill();
		for (const b of this._bubbles) {
			b.kill();
		}
		this._bubbles = [];
	}
}
