// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Text } from 'pixi.js';
import { FONT_SCALE } from '../../IScene.js';

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
			fontFamily: 'drpg-impact',
			fontWeight: 'bold',
			fontSize: 20 * FONT_SCALE,
			align: 'left',
			fill: 0xffffff
		});
		this.anchor.set(0, 1.1);
		this.scale.set(1 / FONT_SCALE);
		this.x = x;
		this.y = y;
		if (!AnnounceText.GlowFilter) {
			AnnounceText.GlowFilter = new GlowFilter({
				distance: 1,
				color: 0x000000,
				outerStrength: 4,
				quality: 1
			});
		}
		this.filters = [AnnounceText.GlowFilter];
	}
}
