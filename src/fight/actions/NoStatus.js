// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/NoStatus.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

/**
 * Remove a status from the Fighter.
 */
export class NoStatus extends State {
	/**
	 * The Fighter whose status is removed.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The FighterStatus to remove from the Fighter.
	 * @type {number}
	 */
	_status;

	/**
	 * Remove the passed status from the fighter.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the chosen Fighter.
	 * @param {number} status The FighterStatus to remove from the Fighter.
	 */
	constructor(scene, endCall, fid, status) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		this._status = status;
		if (!this._fighter) {
			console.error(`NoStatus Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this.addActor(this._fighter);
	}

	/**
	 * Removes the Status from the Fighter.
	 */
	init() {
		this._fighter.removeStatus(this._status);
		this._fighter.setLockTimer(5);
		this.end();
	}
}
