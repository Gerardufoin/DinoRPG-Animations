// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Lost.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

/**
 * A Fighter lose some life.
 */
export class Lost extends State {
	/**
	 * The Fighter losing life.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The amount of life lost.
	 * @type {number}
	 */
	_amount;
	/**
	 * Type of effect to apply to the Fighter, based on Fighter.LifeEffect.
	 * @type {{fx: number, amount?: number, size?: number}}
	 */
	_lifeFx;

	/**
	 * A Fighter (fid) lose the given amount of life while applying the specified visual effects on itself.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fid The Fighter's id.
	 * @param {number} amount The amount of life lost.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx The Fighter.LifeEffect to apply on the Fighter.
	 */
	constructor(scene, endCall, fid, amount, lifeFx) {
		super(scene, endCall);

		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Lost Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}

		this._amount = amount;
		this._lifeFx = lifeFx;
		// Only add the Fighter to the casting if it is still alive.
		if (this._fighter._mode === Fighter.Mode.Dead) {
			this._fighter = undefined;
		} else {
			this.addActor(this._fighter);
		}
	}

	/**
	 * The Fighter lose the given amount of life.
	 */
	init() {
		if (this._fighter) {
			this._fighter.damages(this._amount, 20, this._lifeFx);
		}
		this.end();
	}
}
