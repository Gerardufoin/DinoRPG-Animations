// @ts-check
import { Container, Graphics, NineSlicePlane, Text } from 'pixi.js';
import { Timer } from '../../Timer.js';
import { GlowFilter } from '@pixi/filter-glow';
import { ref } from '../../../gfx/references.js';
import { TextureManager } from '../../../display/TextureManager.js';
import { IScene, SCENE_WIDTH } from '../../IScene.js';

/**
 * Instantiate a Text Box at the top of the screen.
 */
export class TextBox extends Container {
	/**
	 * Width of the text box.
	 * @type {number}
	 */
	static BOX_WIDTH = 388;
	/**
	 * Default height of the text box.
	 * The box will start growing once the text is bigger than this size.
	 * @type {number}
	 */
	static DEFAULT_BOX_HEIGHT = 66;
	/**
	 * Width of the text area.
	 * @type {number}
	 */
	static TEXT_WIDTH = 354;
	/**
	 * Top padding of the text area.
	 * @type {number}
	 */
	static TEXT_PADDING_TOP = 9;
	/**
	 * The GlowFilter of the text.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static TextGlow;

	/**
	 * Complete message to display over time in the text box.
	 * @type {string}
	 */
	_message;
	/**
	 * PixiJS Text being displayed in the text box.
	 * @type {Text}
	 */
	_text;
	/**
	 * The reference to the bubble part of the speech.
	 * @type {NineSlicePlane}
	 */
	_box;

	/**
	 * Speed at which the text is displayed.
	 * @type {number}
	 */
	_speed = 0.75;
	/**
	 * Current character index of the message being displayed.
	 * @type {number}
	 */
	_index = 0;

	/**
	 * If true, the text box stretches with the text.
	 * If false, the text is masked and will dissapear toward the top over time.
	 *
	 * The stretch mode is not really used in the project, I just wanted to try to see how it looked.
	 */
	_stretch = false;

	/**
	 * Returns true if the message is fully displayed.
	 * @type {boolean}
	 */
	get isDisplayed() {
		return this._index >= this._message.length;
	}

	/**
	 * Creates a text box which will spawn at the top of the screen and will fill with text over time.
	 * @param {IScene} scene The scene where the text is instantiated.
	 * @param {string} message The text to display.
	 * @param {boolean} stretch If true, the box stretches to fit the text instead of the text being masked. False by default.
	 */
	constructor(scene, message, stretch = false) {
		super();
		this._message = message;
		this._stretch = stretch;

		this._text = new Text(message, {
			fontFamily: 'drpg-verdana',
			fontSize: Math.round(10 * scene.settings.textSize),
			lineHeight: Math.round(13 * scene.settings.textSize),
			fill: 0xfff3b3,
			wordWrap: true,
			wordWrapWidth: 361,
			breakWords: true
		});
		this._text.resolution = 2;
		this._text.x = -TextBox.TEXT_WIDTH / 2;
		if (!TextBox.TextGlow) {
			TextBox.TextGlow = new GlowFilter({
				color: 0x74361d,
				distance: 2,
				outerStrength: 3,
				quality: 1
			});
		}
		this._text.filters = [TextBox.TextGlow];
		if (this._stretch) {
			this._text.anchor.set(0, 0.5);
		} else {
			this._text.anchor.set(0, 1);
			const txtHeight = TextBox.DEFAULT_BOX_HEIGHT - TextBox.TEXT_PADDING_TOP * 2 + 5;
			const mask = new Graphics().beginFill(0xff0000).drawRect(0, -txtHeight, TextBox.TEXT_WIDTH + 5, txtHeight);
			this._text.addChild(mask);
			this._text.mask = mask;
		}

		this._box = new NineSlicePlane(TextureManager.getTextureFromCompressedReference(ref.scene.box), 35, 35, 35, 8);
		this._box.x = -TextBox.BOX_WIDTH / 2;
		this._box.width = TextBox.BOX_WIDTH;
		this._box.height = TextBox.DEFAULT_BOX_HEIGHT;
		this.addChild(this._box);
		this.addChild(this._text);
		this.x = SCENE_WIDTH / 2;
		this.y = 2;
		this.setText('');
	}

	/**
	 * Sets the text in the text box and resize the box to fit the text.
	 * @param {string} text The text to display in the box.
	 */
	setText(text) {
		this._text.text = text;
		if (this._stretch) {
			this._box.height = Math.max(TextBox.DEFAULT_BOX_HEIGHT, this._text.height + TextBox.TEXT_PADDING_TOP * 2);
			this._text.y = this._box.height / 2;
		} else {
			this._text.y =
				this._text.height >= this._box.height - TextBox.TEXT_PADDING_TOP * 2
					? TextBox.DEFAULT_BOX_HEIGHT - TextBox.TEXT_PADDING_TOP
					: (this._box.height + this._text.height) / 2;
		}
	}

	/**
	 * Speeds up the text display.
	 */
	speedUp() {
		this._speed = 2;
	}

	/**
	 * Updates the text box content over time until the text is completely displayed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		if (this._index < this._message.length) {
			this._index += this._speed * timer.tmod;
			const str = this._message.substring(0, Math.floor(this._index));
			this.setText(str);
		}
	}
}
