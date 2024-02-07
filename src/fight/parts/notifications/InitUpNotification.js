// @ts-check

import { Animator } from '../../../display/Animator.js';
import { notif_init_up } from '../../../gfx/notify/initup.js';
import { NotificationDisplay } from './NotificationDisplay.js';

/**
 * Create an Init Up notification.
 */
export class InitUpNotification extends NotificationDisplay {
	/**
	 * Add the init up animated icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		this._animator = new Animator(false).loadAnimation(notif_init_up, 2);
		this._animator.x -= 12.35;
		this._animator.y -= 12.5;
		this.addChild(this._animator);
	}
}
