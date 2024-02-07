// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { NotificationDisplay } from './NotificationDisplay.js';

/**
 * Create a Down notification.
 */
export class DownNotification extends NotificationDisplay {
	/**
	 * Store the GlowFilter to prevent creating it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Add the down icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		const icon = new Asset(ref.status.down);
		icon.x -= 19.5;
		icon.y -= 4.95;
		if (!DownNotification.GlowFilter) {
			DownNotification.GlowFilter = new GlowFilter({
				distance: 4,
				color: 0x600202,
				outerStrength: 2,
				quality: 0.5
			});
		}
		icon.filters = [DownNotification.GlowFilter];
		this.addChild(icon);
	}
}
