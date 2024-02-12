// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Score.hx

import { Container, Graphics, Text } from 'pixi.js';
import { Timer } from '../../Timer.js';

/**
 * Instantiate a Speech Bubble, displaying it at the given coordinates.
 */
export class SpeechBubble extends Container {
	/**
	 * Create a SpeechBubble which will spawn at the given coordinates and will fill with text over time.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 * @param {string} message The text to display.
	 */
	constructor(x, y, message) {
		super();
		let width = 100;
		if (message.length > 30) width = 150;
		if (message.length > 200) width = 200;
		if (message.length > 300) width = 400;
		// PixiJS wordwarp one pixel sooner than Flash (or than Ruffle at least).
		width += 1;

		const txt = new Text(message, {
			fontFamily: 'Verdana',
			fontSize: 10,
			lineHeight: 13,
			align: 'center',
			fill: 0x000000,
			wordWrap: true,
			wordWrapWidth: width,
			breakWords: true
		});
		txt.resolution = 2;
		txt.anchor.set(0.5, 1);
		txt.y = -5;

		const bubble = new Graphics()
			.beginFill(0xffffff)
			.drawRect(-(txt.width + 10) / 2, -(txt.height + 8), txt.width + 10, txt.height + 8);
		this.addChild(bubble);
		this.addChild(txt);
		this.x = x;
		this.y = y;
	}

	/**
	 * Update the Speech Bubble content over time until the text is completely displayed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {}
}
