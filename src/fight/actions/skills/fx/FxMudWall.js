// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Attach.hx

import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';

/**
 * The given Fighter creates a mud wall in front of it.
 */
export class FxMudWall extends State {
	/**
	 * The given fighter creates or remove a mudwall.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The target of the attachement.
	 * @param {boolean} remove Should the mudwall be removed or added. False by default.
	 */
	constructor(scene, endCall, fighter, remove = false) {
		super(scene, endCall);
		if (remove) {
			fighter.fxRemoveMudWall();
		} else {
			fighter.fxAddMudWall();
		}
		setTimeout(() => this.end(), 1000);
	}
}
