// @ts-check
import { Container, Graphics, Rectangle, Text } from 'pixi.js';
import { Timer } from '../../Timer.js';
import { GlowFilter } from '@pixi/filter-glow';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene, SCENE_FULL_WIDTH, SCENE_HEIGHT, SCENE_WIDTH } from '../../IScene.js';

/**
 * Instantiate a Speech Bubble, displaying it at the given coordinates.
 */
export class SpeechBubble extends Container {
	/**
	 * Horizontal padding between the text and the bubble border.
	 * @type {number}
	 */
	static PADDING_HORIZONTAL = 10;
	/**
	 * Vertical padding between the text and the bubble border.
	 * @type {number}
	 */
	static PADDING_VERTICAL = 6;
	/**
	 * The GlowFilter of the bubble.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static BubbleGlow;
	/**
	 * The GlowFilter of the bubble border.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static BorderGlow;

	/**
	 * Complete message to display over time in the speech bubble.
	 * @type {string}
	 */
	_message;
	/**
	 * PixiJS Text being displayed in the bubble.
	 * @type {Text}
	 */
	_text;
	/**
	 * The reference to the bubble part of the speech.
	 * @type {Graphics}
	 */
	_bubble;
	/**
	 * The width of the speech bubble. Depends on the amount of text to display.
	 * @type {number}
	 */
	_width;

	/**
	 * Speed at which the text is displayed.
	 * @type {number}
	 */
	_speed = 0.6;
	/**
	 * Display speed multiplicator.
	 * @type {number}
	 */
	_mult = 1;
	/**
	 * Speech display timer, show one more letter when reaching 1.
	 * @type {number}
	 */
	_timer = 0;
	/**
	 * Current character index of the message being displayed.
	 * @type {number}
	 */
	_index = 0;

	/**
	 * Return true if the message is fully displayed.
	 * @type {boolean}
	 */
	get isDisplayed() {
		return this._index >= this._message.length;
	}

	/**
	 * Create a SpeechBubble which will spawn at the given coordinates and will fill with text over time.
	 * @param {IScene} scene The scene where the text is instantiated.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 * @param {string} message The text to display.
	 */
	constructor(scene, x, y, message) {
		super();
		this._message = message;
		let width = 100;
		if (message.length > 30) width = 150;
		if (message.length > 200) width = 200;
		if (message.length > 300) width = 400;
		// PixiJS wordwarp one pixel sooner than Flash (or than Ruffle at least).
		width += 1;

		this._text = new Text(message, {
			fontFamily: 'drpg-verdana',
			fontSize: Math.round(10 * scene.settings.textSize),
			lineHeight: Math.round(13 * scene.settings.textSize),
			align: 'center',
			fill: 0x000000,
			wordWrap: true,
			wordWrapWidth: width,
			breakWords: true
		});
		this._text.resolution = 2;
		this._text.anchor.set(0.5, 1);
		this._text.y -= SpeechBubble.PADDING_VERTICAL / 2;
		// We take the final width of the bubble, the one when the message si fully displayed.
		// This is so the bubble width does not change while displaying the message.
		this._width = this._text.width;

		this._bubble = new Graphics();
		const corner = new Graphics().beginFill(0xffffff).drawPolygon([0, 0, 0, 10, 10, 0]);
		if (!SpeechBubble.BubbleGlow) {
			SpeechBubble.BubbleGlow = new GlowFilter({
				color: 0xffffff,
				distance: 5,
				outerStrength: 50,
				quality: 1
			});
		}
		this._bubble.filters = [SpeechBubble.BubbleGlow];
		this.addChild(this._bubble);
		this.addChild(this._text);
		this.addChild(corner);
		if (!SpeechBubble.BorderGlow) {
			SpeechBubble.BorderGlow = new GlowFilter({
				color: 0x000000,
				distance: 2,
				outerStrength: 2,
				quality: 1
			});
			SpeechBubble.BorderGlow.padding = 10;
		}
		this.filters = [SpeechBubble.BorderGlow];
		// Keep the bubble inside the scene.
		const minX = (this.width + 5) * 0.5 - 20;
		const minY = this.height - 2;
		this.x = PixiHelper.mm(minX, Math.round(x), SCENE_WIDTH - minX);
		this.y = PixiHelper.mm(minY, Math.round(y), SCENE_HEIGHT);
		this.setText('');
	}

	/**
	 * Sets the text in the speech bubble and resize the bubble to fit the text.
	 * @param {string} text The text to display in the bubble.
	 */
	setText(text) {
		this._text.text = text;
		this._bubble.clear();
		this._bubble
			.beginFill(0xffffff)
			.drawRect(
				-(this._width + SpeechBubble.PADDING_HORIZONTAL) / 2,
				-(this._text.height + SpeechBubble.PADDING_VERTICAL),
				this._width + SpeechBubble.PADDING_HORIZONTAL,
				this._text.height + SpeechBubble.PADDING_VERTICAL
			);
	}

	/**
	 * Speed up the text display.
	 */
	speedUp() {
		this._mult = 2;
	}

	/**
	 * Update the Speech Bubble content over time until the text is completely displayed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		if (this._index < this._message.length) {
			this._timer += this._speed * this._mult * timer.tmod;
			if (this._timer >= 1) {
				this._index += Math.floor(this._timer);
				this._timer = this._timer % 1;
				const str = this._message.substring(0, this._index);
				this.setText(str);
				const c = str.charAt(str.length - 1);
				if (c.match(/[.!?]/)) {
					this._timer -= 10;
				} else if (c == ',') {
					this._timer -= 5;
				} else if (c.match(/[A-Z]/)) {
					this._timer += this._speed;
				}
			}
		}
	}
}
