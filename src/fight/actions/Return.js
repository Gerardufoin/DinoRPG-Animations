// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Return.hx
import { FighterProperty, FighterStatus } from '../Enums.js';
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';
import { Timer } from '../Timer.js';

/**
 * Makes a Fighter go back to its saved position.
 */
export class Return extends State {
	/**
	 * The Fighter moving.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * Makes the Fighter with the given Fighter's id go back to its saved position.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The id of the chosen Fighter.
	 */
	constructor(scene, endCall, fid) {
		super(scene, endCall);
		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			console.error(`Return Error: Fighter with id ${fid} does not exist in the scene.`);
			this.kill();
			return;
		}
		this.addActor(this._fighter);
	}

	/**
	 * Randomly chose the return behavior of the Fighter.
	 */
	init() {
		const movements = [Fighter.MovementType.Run, Fighter.MovementType.Jump];
		if (this._fighter.haveStatus(FighterStatus.Fly) || this._fighter.haveProp(FighterProperty.GroundOnly)) {
			movements.shift();
		}
		this._fighter.initReturn(movements[Math.floor(Math.random() * movements.length)]);
	}

	/**
	 * Update the Fighter entrance animation.
	 * @param {Timer} timer The fight Timer containing the current time elasped.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		this._fighter.updateMove(this._coef);
		if (this._coef === 1) {
			this._fighter.backToDefault();
			this.end();
		}
	}
}
