// @ts-check

import { Animator } from '../../../display/Animator.js';
import { notif_strong } from '../../../gfx/notify/strong.js';
import { NotificationDisplay } from './NotificationDisplay.js';

/**
 * Create a Strong notification.
 */
export class StrongNotification extends NotificationDisplay {
	/**
	 * Add the strong animated icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		this._animator = new Animator(false).loadAnimation(notif_strong, 2);
		this._animator.x -= 11.75;
		this._animator.y -= 11.5;
		this.addChild(this._animator);
	}
}
