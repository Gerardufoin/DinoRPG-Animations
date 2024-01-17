// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Announce.hx

import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Spirit } from '../parts/Spirit.js';

/**
 * A Fighter announces an attack. Or something else. Like what it did today or how is the weather. Who knows really.
 */
export class Announce extends State {
	/**
	 * The Fighter making the announce.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The announce to make.
	 * @type {string}
	 */
	_message;

	/**
	 * Get the Fighter doing the announce.
	 * @param {Scene} scene The scene where the action is happening.
	 * @param {number} fid The Fighter's id.
	 * @param {string} message The announce to make.
	 */
	constructor(scene, fid, message) {
		super(scene);
		this._message = message;
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Announce Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}
		this.addActor(this._fighter);
		this._coefSpeed = 0.035;
	}

	/**
	 * TODO.
	 */
	init() {
		console.log(`Fighter ${this._fighter.id} announces: ${this._message}.`);
	}

	/**
	 * TODO.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef === 1) {
			this.end();
		}
	}
}
