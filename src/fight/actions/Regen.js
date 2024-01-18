// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/Regen.hx
import { Fighter } from '../Fighter.js';
import { Scene } from '../Scene.js';
import { State } from '../State.js';

/**
 * A Fighter regens some life.
 */
export class Regen extends State {
	/**
	 * The Fighter regerenating life.
	 * @type {Fighter}
	 */
	_fighter;
	/**
	 * The amount of life healed.
	 * @type {number}
	 */
	_amount;
	/**
	 * Type of effect to apply to the Fighter, based on Fighter.LifeEffect.
	 * @type {{fx: number, amount?: number, size?: number}}
	 */
	_lifeFx;

	/**
	 * A Fighter (fid) heals the given amount of life while applying the specified visual effects on itself.
	 * @param {Scene} scene The scene where the action happens.
	 * @param {number} fid The Fighter's id.
	 * @param {number} amount The amount of life healed.
	 * @param {{fx: number, amount?: number, size?: number}} lifeFx The Fighter.LifeEffect to apply on the Fighter.
	 */
	constructor(scene, fid, amount, lifeFx) {
		super(scene);

		this._fighter = this._scene.getFighter(fid);
		if (!this._fighter) {
			this.kill();
			console.error(`Regen Error: Fighter with id ${fid} does not exist in the scene.`);
			return;
		}

		this._amount = amount;
		this._lifeFx = lifeFx;
		this._fighter.resurrect();
		this.addActor(this._fighter);
	}

	/**
	 * The Fighter gains the given amount of life.
	 */
	init() {
		this._fighter.backToDefault();
		this._fighter.gainLife(this._amount, this._lifeFx);
		this.end();
	}
}
