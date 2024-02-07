// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { NotificationDisplay } from './NotificationDisplay.js';
import { BLEND_MODES } from 'pixi.js';

/**
 * Create a Quick notification.
 */
export class QuickNotification extends NotificationDisplay {
	/**
	 * Store the GlowFilter to prevent creating it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Add the quick icon to the display and place it appropriately.
	 */
	constructor() {
		super();
		const icon = new Asset(ref.status.quick, 2.3);
		icon.x += 1.15;
		icon.y -= 0.05;
		if (!QuickNotification.GlowFilter) {
			QuickNotification.GlowFilter = new GlowFilter({
				distance: 5,
				color: 0xffff00,
				outerStrength: 1
			});
		}
		icon.filters = [QuickNotification.GlowFilter];
		icon.blendMode = BLEND_MODES.ADD;
		this.addChild(icon);
	}
}
