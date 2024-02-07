// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { NotificationDisplay } from './NotificationDisplay.js';

/**
 * Create a Slow notification.
 */
export class SlowNotification extends NotificationDisplay {
	/**
	 * Store the GlowFilter to prevent creating it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Add the slow icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		const icon = new Asset(ref.status.slow, 2.5);
		icon.x += 0.05;
		icon.y -= 0.8;
		if (!SlowNotification.GlowFilter) {
			SlowNotification.GlowFilter = new GlowFilter({
				distance: 1,
				color: 0xffffff,
				outerStrength: 4,
				quality: 0.5
			});
		}
		icon.filters = [SlowNotification.GlowFilter];
		this.addChild(icon);
	}
}
