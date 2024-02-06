// @ts-check

import { Container } from 'pixi.js';
import { Animator } from '../../../display/Animator.js';
import { Timer } from '../../Timer.js';

/**
 * Parent class for the display of the notifications.
 */
export class NotificationDisplay extends Container {
	/**
	 * If the notification is an animation, register the animator here so it is updated.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Update the animator if one is registered.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		if (this._animator) {
			this._animator.update(timer.deltaTimeMS);
		}
	}
}
