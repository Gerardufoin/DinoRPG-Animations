// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Flip.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

/**
 * A Fighter changes direction.
 */
export class Flip extends State {
	/**
	 * The Fighter changing direction.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * A Fighter changes its direction, facing the other side.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the chosen Fighter.
	 */
	constructor(scene, endCall, fid) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			console.error(`Flip Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this.addActor(this._fighter);
	}

	/**
	 * The Fighter flips.
	 */
	init() {
		this._fighter.flip();
		this.releaseCasting(10);
		this.end();
	}
}
