// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { Sismic } from '../Sismic.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Big Mama upon the Scene.
 */
export class BigMama extends Invocation {
	/**
	 * The speed of the leg descent.
	 * @type {number}
	 */
	static DESCENT_SPEED = 4;

	/**
	 * Check if the descent impact has already been spawned in.
	 * @type {boolean}
	 */
	_spawnedImpact = false;

	/**
	 * Invokes Big Mama upon the Scene.
	 * @param {IScene} scene The scene where Big Mama is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.big_mama.body));

		this._body.x = -220;
		this._body.y = -310;

		this._y -= 25;
		this._ray = 125;
		this.updatePos();
	}

	/**
	 * Speed up Big Mama descent for impact.
	 * @param {number} coef The coefficient for the position, between 0 and 1.
	 */
	descend(coef) {
		super.descend(coef);
		this._z = Invocation.DEFAULT_Z_POSITION * (1 - Math.min(coef * BigMama.DESCENT_SPEED, 1));

		if (this._z == 0 && !this._spawnedImpact) {
			this._spawnedImpact = true;
			this._scene.dm.addSprite(new Sismic(this._scene, this._root.x, this._root.y, 0.6, 2), Layers.Scene.SHADE);
		}
	}
}
