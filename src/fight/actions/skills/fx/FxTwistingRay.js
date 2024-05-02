// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Anim.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';
import { TwistingRay } from '../../../parts/skills/TwistingRay.js';

/**
 * The given Fighter spawns rays around it.
 */
export class FxTwistingRay extends State {
	/**
	 * A Fighter spawns rays around it.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 */
	constructor(scene, endCall, fighter) {
		super(scene, endCall);
		this._coefSpeed = 0.025;

		for (let i = 0; i < 20; ++i) {
			fighter.dm.addSprite(
				new TwistingRay(this._scene, 0, -fighter.height * 0.5, 1 / this._coefSpeed),
				Layers.Fighter.BACK
			);
		}
	}

	/**
	 * Updates the State until its coef is 1, then ends it.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef === 1) {
			this.end();
		}
	}
}
