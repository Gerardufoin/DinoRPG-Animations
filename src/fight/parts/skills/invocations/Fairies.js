// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { Firefly } from './effects/Firefly.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Fairies upon the Scene.
 */
export class Fairies extends Invocation {
	/**
	 * List of the fireflies created in the Scene.
	 * @type {Firefly[]}
	 */
	_fireflies = [];

	/**
	 * Invokes Fairies upon the Scene.
	 * @param {IScene} scene The scene where Fairies is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.invocations.fairies.body));

		this._body.x = -210;
		this._body.y = -285;
	}

	/**
	 * Spawns the fireflies.
	 */
	spawnParts() {
		for (let i = 0; i < 20; ++i) {
			const f = new Firefly(this._scene);
			this._scene.dm.addSprite(f, Layers.Scene.FIGHTERS);
			this._fireflies.push(f);
		}
	}

	/**
	 * Remove the fireflies if they are still here.
	 */
	kill() {
		super.kill();
		//this._fireflies.map((f) => f.kill());
		this._fireflies = [];
	}
}
