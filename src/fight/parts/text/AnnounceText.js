// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Text } from 'pixi.js';

/**
 * Instantiate an announce text, displaying it at the given coordinates.
 */
export class AnnounceText extends Text {
	/**
	 * The GlowFilter of the text.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;
	/**
	 * Create an announce text which will spawn at the given coordinates.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 * @param {string} text The text to display.
	 */
	constructor(x, y, text) {
		super(text, {
			fontFamily: 'Impact',
			fontSize: 20,
			align: 'left',
			fill: 0xffffff
		});
		this.resolution = 2;
		this.anchor.set(0, 1.1);
		this.x = x;
		this.y = y;
		if (!AnnounceText.GlowFilter) {
			AnnounceText.GlowFilter = new GlowFilter({
				distance: 2,
				color: 0x000000,
				outerStrength: 3,
				quality: 1
			});
		}
		this.filters = [AnnounceText.GlowFilter];
	}
}
