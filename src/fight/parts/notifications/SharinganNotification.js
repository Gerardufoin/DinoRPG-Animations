// @ts-check

import { Sprite } from 'pixi.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { NotificationDisplay } from './NotificationDisplay.js';
import { Timer } from '../../Timer.js';

/**
 * Create a Sharingan notification.
 * The Sharingan spins on itself.
 */
export class SharinganNotification extends NotificationDisplay {
	/**
	 * Reference to the sharingan icon to make it spin.
	 * @type {Sprite}
	 */
	_sharingan;

	/**
	 * Add the sharingan icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		this._sharingan = new Asset(ref.status.sharingan, 2);
		this._sharingan.anchor.set(0.5);
		this._sharingan.x += 2;
		this._sharingan.y += 2;
		this.addChild(this._sharingan);
	}

	/**
	 * Makes the Sharingan spin on itself.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		this._sharingan.angle += (360 / 33) * timer.tmod;
	}
}
