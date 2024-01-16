// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Dead.hx

import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';
import { Spirit } from '../parts/Spirit.js';

/**
 * Action designing a Fighter to die.
 *
 * Dead Fighters will lose their shadow, play their death animation, and release a spirit.
 */
export class Dead extends State {
	/**
	 * The Fighter dying.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * Makes a Fighter die.
	 * @param {Scene} scene The scene where the Fighter is added.
	 * @param {number} fid Fighter's id.
	 */
	constructor(scene, fid) {
		super(scene);
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Dead Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}
		this.addActor(this._fighter);
	}

	/**
	 * Instantiate a spirit, removes the status and shadow, and play the death animation.
	 */
	init() {
		const spirit = new Spirit(this._scene);
		spirit._x = this._fighter.position.x;
		spirit._y = this._fighter.position.y - this._fighter.height;
		spirit.updatePos();

		this._fighter.die();
		this._coefSpeed = 0.1;
	}

	/**
	 * Update the Dead State until completion.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef === 1) {
			this.end();
		}
	}
}
