// @ts-check

import { Animator } from '../../../display/Animator.js';
import { PartManager } from '../../../display/PartManager.js';
import { worker } from '../../../gfx/worker/worker.js';
import { Timer } from '../../Timer.js';

/**
 * The worker working to repair the castle.
 * The helmet changes color based on the working speed.
 */
export class Worker extends Animator {
	/**
	 * Speed of the repair animation.
	 * @type {number}
	 */
	_repairSpeed;
	/**
	 * Timer before the Strike animation.
	 * @type {number}
	 */
	_timer = 20;
	/**
	 * If true, the strike animation is never updated.
	 * @type {boolean}
	 */
	stopStriking = false;

	/**
	 * Creates a Castle Worker based on its working speed.
	 * @param {number} x The x coordinates.
	 * @param {number} y The y coordinates.
	 * @param {number} speed The choice of helmet, 1 - yellow, 2 - blue, 3 - red.
	 */
	constructor(x, y, speed) {
		super(false);
		this._repairSpeed = speed;

		// Create body
		for (let pName in worker.parts) {
			let part = PartManager.createPart(worker.parts[pName], [speed - 1], [], '');
			if (part) {
				this.addPart(pName, part);
			}
		}
		this.setAnimations(worker.animations);
		this.playAnim('windup');

		this.x = x;
		this.y = y;
	}

	/**
	 * Update the animation based on the repair speed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	updateAnim(timer) {
		this._timer += timer.tmod * this._repairSpeed;
		if (this._timer >= 120 && !this.stopStriking) {
			this._timer -= 120;
			this.playAnim('windup');
		} else {
			this.update(timer.deltaTimeMS);
		}
	}
}
