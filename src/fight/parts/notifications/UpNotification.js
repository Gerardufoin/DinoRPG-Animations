// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { NotificationDisplay } from './NotificationDisplay.js';

/**
 * Create an Up notification.
 */
export class UpNotification extends NotificationDisplay {
	/**
	 * Store the GlowFilter to prevent creating it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Add the up icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		const icon = new Asset(ref.status.up);
		icon.x -= 9.5;
		icon.y -= 4.95;
		if (!UpNotification.GlowFilter) {
			UpNotification.GlowFilter = new GlowFilter({
				distance: 4,
				color: 0xffcc00,
				outerStrength: 2,
				quality: 0.5
			});
		}
		icon.filters = [UpNotification.GlowFilter];
		this.addChild(icon);
	}
}
