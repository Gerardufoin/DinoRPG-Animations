// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/SlotDinoz.hx

import { Container } from 'pixi.js';
import { Fighter } from './Fighter.js';

// TODO
export class Slot extends Container {
	/**
	 * The slot's Fighter.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * Return the side of the Slot's Fighter.
	 * @type {boolean}
	 */
	get side() {
		return this._fighter.side;
	}

	/**
	 *
	 * @param {Fighter} fighter
	 */
	constructor(fighter) {
		super();
		this._fighter = fighter;
	}

	update() {}

	/**
	 *
	 * @param {number} ratio
	 */
	setLife(ratio) {}

	/**
	 *
	 * @param {number} e
	 */
	setMaxEnergy(e) {}

	/**
	 *
	 * @param {number} e
	 */
	setEnergy(e) {}

	hideEnergyBar() {}

	fxDamage() {}
}
