// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Status.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

/**
 * A status is added to a Fighter.
 */
export class Status extends State {
	/**
	 * The Fighter receiving the status.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The FighterStatus to add to the Fighter.
	 * @type {number}
	 */
	_status;

	/**
	 * Add the passed status to the fighter.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the chosen Fighter.
	 * @param {number} status The FighterStatus to add to the Fighter.
	 */
	constructor(scene, endCall, fid, status) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		this._status = status;
		if (!this._fighter) {
			console.error(`Status Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this.addActor(this._fighter);
	}

	/**
	 * Adds the Status to the Fighter.
	 */
	init() {
		this._fighter.addStatus(this._status);
		this._fighter.setLockTimer(10);
		this.end();
	}
}
