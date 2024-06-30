// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { Invocation } from './Invocation.js';
import { QueenSoldier } from './effects/QueenSoldier.js';

/**
 * Invokes Beehive Queen upon the Scene.
 */
export class BeehiveQueen extends Invocation {
	/**
	 * The soldiers of the Beehive Queen.
	 * @type {QueenSoldier[]}
	 */
	_soldiers = [];

	/**
	 * Invokes Beehive Queen upon the Scene.
	 * @param {IScene} scene The scene where Beehive Queen is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.beehive_queen.body));

		this._body.x = -208;
		this._body.y = -300;
	}

	/**
	 * Spawns the soliders.
	 */
	spawnParts() {
		for (let i = 0; i < 25; ++i) {
			const s = new QueenSoldier(this._scene, i % 2 == 0 ? 1 : 0);
			this._scene.dm.addSprite(s, Layers.Scene.FIGHTERS);
			this._soldiers.push(s);
		}
	}

	/**
	 * Removes the soldier when the queen is removed.
	 */
	kill() {
		super.kill();
		for (const s of this._soldiers) {
			s.kill();
		}
		this._soldiers = [];
	}
}
