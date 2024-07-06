// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { Layers } from '../../../DepthManager.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Meteor } from '../meteor/Meteor.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Hercobulus upon the Scene.
 */
export class Hercobulus extends Invocation {
	/**
	 * The cooldown value for the meteor strikes.
	 * @type {number}
	 */
	static METEOR_COOLDOWN = 4;

	/**
	 * If true, Hercobulus spawns meteors over time.
	 * @type {boolean}
	 */
	_spawnMeteors = false;
	/**
	 * Amount of time before the next meteor falls.
	 * @type {number}
	 */
	_meteorTimer = 0;

	/**
	 * Invokes Hercobulus upon the Scene.
	 * @param {IScene} scene The scene where Hercobulus is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.hercobulus.body));

		this._body.x = -228;
		this._body.y = -290;
	}

	/**
	 * Makes the meteors start falling.
	 */
	spawnParts() {
		this._spawnMeteors = true;
	}

	/**
	 * Stops spawning meteors once the descent is over.
	 */
	descended() {
		this._spawnMeteors = false;
	}

	/**
	 * Spawns the meteors.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._meteorTimer -= timer.tmod;
		if (this._spawnMeteors && this._meteorTimer <= 0) {
			this._meteorTimer = Hercobulus.METEOR_COOLDOWN + (Hercobulus.METEOR_COOLDOWN / 2) * Math.random();
			this._scene.dm.addSprite(new Meteor(this._scene, Math.random() <= 0.5 ? -1 : 1), Layers.Scene.FIGHTERS);
		}
	}
}
