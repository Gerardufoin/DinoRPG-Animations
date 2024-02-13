// @ts-check
import { Container, Graphics, Rectangle, Text } from 'pixi.js';
import { Timer } from '../../Timer.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Scene } from '../../Scene.js';

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

		const bubble = new Graphics()
			.beginFill(0xffffff)
			.drawRect(-(txt.width + 10) / 2, -(txt.height + 3), txt.width + 10, txt.height + 6);
		const corner = new Graphics().beginFill(0xffffff).drawPolygon([0, 0, 0, 9, 9, 0]);
		bubble.filters = [
			new GlowFilter({
				color: 0xffffff,
				distance: 5,
				outerStrength: 6,
				quality: 1
			})
		];
		this.addChild(bubble);
		this.addChild(txt);
		this.addChild(corner);
		this.filterArea = new Rectangle(0, 0, Scene.FULL_WIDTH, Scene.HEIGHT);
		this.filters = [
			new GlowFilter({
				color: 0x000000,
				distance: 2,
				outerStrength: 2,
				quality: 1
			})
		];
		this.x = x;
		this.y = y;
	}

	/**
	 * Update the Speech Bubble content over time until the text is completely displayed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {}
}
