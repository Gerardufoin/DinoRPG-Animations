// @ts-check

import { Asset } from '../../../display/Asset.js';
import { NotificationDisplay } from './NotificationDisplay.js';

/**
 * Create a standard notification given a reference.
 */
export class BasicNotification extends NotificationDisplay {
	/**
	 * Add the icon to the display and place it appropriately.
	 * @param {object} ref The compressed reference of the icon to display.
	 * @param {number} x X offset of the icon.
	 * @param {number} y Y offset of the icon.
	 * @param {number} scale Scale of the icon.
	 */
	constructor(ref, x = 0, y = 0, scale = 1) {
		super();
		const icon = new Asset(ref, scale);
		icon.x += x;
		icon.y += y;
		this.addChild(icon);
	}
}
