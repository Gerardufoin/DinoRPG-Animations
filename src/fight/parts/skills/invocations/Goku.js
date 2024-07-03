// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { Invocation } from './Invocation.js';
import { GokuTornado } from './effects/GokuTornado.js';

/**
 * Invokes Goku Queen upon the Scene.
 */
export class Goku extends Invocation {
	/**
	 * The tornado of Goku.
	 * @type {GokuTornado}
	 */
	_tornado;

	/**
	 * Invokes Goku upon the Scene.
	 * @param {IScene} scene The scene where Goku is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.goku.body));

		this._body.x = -210;
		this._body.y = -290;
	}

	/**
	 * Spawns the tornado.
	 */
	spawnParts() {
		this._tornado = new GokuTornado(this._scene);
		this._scene.dm.addSprite(this._tornado, Layers.Scene.FIGHTERS);
	}

	/**
	 * Removes the tornado when Goku is removed.
	 */
	kill() {
		super.kill();
		if (this._tornado) {
			this._tornado.kill();
			this._tornado = undefined;
		}
	}
}
