// @ts-check

import { Container, NineSlicePlane, Text } from 'pixi.js';
import { Settings } from './Settings.js';
import { TextureManager } from '../../display/TextureManager.js';
import { ref } from '../../gfx/references.js';
import { FONT_SCALE, SCENE_FULL_WIDTH, SCENE_HEIGHT } from '../IScene.js';
import { Button } from './Button.js';
import { Asset } from '../../display/Asset.js';
import { Toggle } from './Toggle.js';
import { SpeedPanel } from './SpeedPanel.js';

/**
 * The settings panel, which allows the user to change the settings of the application.
 */
export class SettingsPanel extends Container {
	/**
	 * Font size for the non bold text.
	 * @type {number}
	 */
	static S_FONT_SIZE = 2;
	/**
	 * Padding of the panel.
	 * @type {number}
	 */
	static PADDING = 15;
	/**
	 * Padding between a title and the buttons.
	 * @type {number}
	 */
	static TITLE_PADDING = 15;
	/**
	 * Y offset to align the arrows with the text.
	 * @type {number}
	 */
	static ARROW_OFFSET = 1;
	/**
	 * Available speed settings.
	 * @type {number[]}
	 */
	static SPEED_SETTINGS = [0.25, 0.5, 1, 2, 3];
	/**
	 * Available text size settings.
	 * @type {number[]}
	 */
	static TEXT_SIZE_SETTINGS = [1, 1.25, 1.5];

	/**
	 * The application's settings.
	 * @type {Settings}
	 */
	_settings;
	/**
	 * Reference to the display for the speed settings.
	 * @type {SpeedPanel}
	 */
	_speedSettingsDisplay;
	/**
	 * Previous paused setting state before opening the menu. Set in the opening of the menu and used when closing the menu.
	 * @type {boolean}
	 */
	_prevPausedSetting = false;

	/**
	 * The background of the panel.
	 * @type {NineSlicePlane}
	 */
	_background;
	/**
	 * The buttons controlling the speed of the fight.
	 * @type {{ [id: string]: Text }}
	 */
	_speedButtons = {};
	/**
	 * The buttons controlling the text size of the dialogues.
	 * @type {{ [id: string]: Text }}
	 */
	_textSizeButtons = {};

	/**
	 * Callbacks to invoke when the setting panel is opened.
	 * @type {(() => void)[]}
	 */
	_onOpenCallbacks = [];
	/**
	 * Add the function to the list of callbacks invoked when the panel is opened.
	 * @type {() => void}
	 */
	set onOpen(cb) {
		this._onOpenCallbacks.push(cb);
	}

	/**
	 * Creates the setting panel and registers the Fight's Settings object.
	 * @param {Settings} settings The current settings of the application.
	 * @param {SpeedPanel} speedSettings The speed panel settings to update or display based on the settings.
	 */
	constructor(settings, speedSettings) {
		super();
		this._settings = settings;
		this._speedSettingsDisplay = speedSettings;
		this.visible = false;

		this._speedSettingsDisplay.visible = this._settings._showSpeedMenu;

		this._background = new NineSlicePlane(
			TextureManager.getTextureFromCompressedReference(ref.scene.box),
			35,
			35,
			35,
			8
		);
		this._background.width = SCENE_FULL_WIDTH;
		this._background.height = SCENE_HEIGHT;
		this.addChild(this._background);

		let posY = 0;
		// Title
		const title = new Text(this._settings.getLangText('title'), {
			fontFamily: 'drpg-verdana',
			fontSize: 18 * FONT_SCALE,
			fontWeight: 'bold',
			align: 'center',
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 4 * FONT_SCALE
		});
		title.anchor.set(0.5, 0);
		title.scale.set(1 / FONT_SCALE);
		title.x = SCENE_FULL_WIDTH / 2;
		title.y = posY += SettingsPanel.PADDING;
		this.addChild(title);

		// Speed options
		const speedPanel = this.createSpeedPanel();
		speedPanel.x = SettingsPanel.PADDING + 15;
		speedPanel.y = posY += 40;
		this.addChild(speedPanel);

		// Text size options
		const textPanel = this.createTextSizePanel();
		textPanel.x = SettingsPanel.PADDING + 15;
		textPanel.y = posY += 45;
		this.addChild(textPanel);

		// Close button
		const close = new Button(ref.settings.close);
		close.x = SCENE_FULL_WIDTH - 22 - SettingsPanel.PADDING;
		close.y = SettingsPanel.PADDING;
		close.onAction = () => this.close();
		this.addChild(close);
	}

	/**
	 * Creates the speed settings management panel.
	 * @returns {Container} The created speed settings panel.
	 */
	createSpeedPanel() {
		const panel = new Container();
		const arrow = new Asset(ref.settings.arrow);
		arrow.y += SettingsPanel.ARROW_OFFSET;
		panel.addChild(arrow);
		const speedTitle = new Text(this._settings.getLangText('fight_speed'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		speedTitle.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		speedTitle.x = 18;
		panel.addChild(speedTitle);
		const buttons = this.createSpeedButtons();
		// If width is accessed too early, PixiJS does not load the text font properly. Didn't manage to find a way around it, onLoad does not work.
		// Dirty trick to refreshe the horizontal position when the panel is opened.
		this.onOpen = () => {
			buttons.x = 18 + Math.round(speedTitle.width) + SettingsPanel.TITLE_PADDING;
		};
		panel.addChild(buttons);
		const speedDisplaySetting = this.createSpeedDisplaySetting();
		speedDisplaySetting.x = 18;
		speedDisplaySetting.y = 18;
		panel.addChild(speedDisplaySetting);
		return panel;
	}

	/**
	 * Creates the button controlling the speed of the fight.
	 * @returns {Container} The container containing the speed buttons.
	 */
	createSpeedButtons() {
		const buttons = new Container();
		for (const sp of SettingsPanel.SPEED_SETTINGS) {
			const name = `x${sp}`;
			const speedButton = new Text(name, {
				fontFamily: 'drpg-verdana',
				fontSize: 12 * SettingsPanel.S_FONT_SIZE,
				strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
			});
			speedButton.scale.set(1 / SettingsPanel.S_FONT_SIZE);
			speedButton.onclick = () => {
				this.setSpeed(sp);
			};
			speedButton.ontap = () => {
				this.setSpeed(sp);
			};
			speedButton.eventMode = 'static';
			speedButton.cursor = 'pointer';

			this._speedButtons[name] = speedButton;
			buttons.addChild(speedButton);
		}
		this.setSpeedButtonsFocus();
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			let posX = 0;
			for (const sp of SettingsPanel.SPEED_SETTINGS) {
				const name = `x${sp}`;
				this._speedButtons[name].x = posX;
				posX += Math.round(this._speedButtons[name].width) + 8;
			}
		};
		return buttons;
	}

	/**
	 * Sets which speed button is actually enabled.
	 */
	setSpeedButtonsFocus() {
		for (const k in this._speedButtons) {
			if (`x${this._settings.rawSpeed}` === k) {
				this._speedButtons[k].style.fill = 0x3d6113;
				this._speedButtons[k].style.stroke = 0x7bc528;
			} else {
				this._speedButtons[k].style.fill = 0xffffff;
				this._speedButtons[k].style.stroke = 0x000000;
			}
		}
	}

	/**
	 * Sets the speed in the settings and change the focus of the speed buttons.
	 * @param {number} speed The new speed.
	 */
	setSpeed(speed) {
		this._settings.speed = speed;
		this.setSpeedButtonsFocus();
	}

	/**
	 * Creates the settings allowing to toggle on or off the speed setting on screen.
	 * @returns {Container} The display for the setting.
	 */
	createSpeedDisplaySetting() {
		const cont = new Container();
		const txt = new Text(this._settings.getLangText('fight_display_speed'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		txt.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		cont.addChild(txt);
		const toggle = new Toggle(
			ref.settings.checkbox_on,
			ref.settings.checkbox_off,
			this._settings.showSpeedMenu,
			() => {
				this._settings.showSpeedMenu = true;
				this._speedSettingsDisplay.visible = true;
			},
			() => {
				this._settings.showSpeedMenu = false;
				this._speedSettingsDisplay.visible = false;
			}
		);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			toggle.x = Math.round(txt.width) + SettingsPanel.TITLE_PADDING;
		};
		toggle.y = 3;
		cont.addChild(toggle);
		txt.dirty = true;
		return cont;
	}

	/**
	 * Creates the text size settings management panel.
	 * @returns {Container} The created text size settings panel.
	 */
	createTextSizePanel() {
		const panel = new Container();
		const arrow = new Asset(ref.settings.arrow);
		arrow.y += SettingsPanel.ARROW_OFFSET;
		panel.addChild(arrow);
		const title = new Text(this._settings.getLangText('text_size'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		title.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		title.x = 18;
		panel.addChild(title);
		const buttons = this.createTextSizeButtons();
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			buttons.x = 18 + Math.round(title.width) + SettingsPanel.TITLE_PADDING;
		};
		panel.addChild(buttons);
		return panel;
	}

	/**
	 * Creates the button controlling the size of the dialogues' text.
	 * @returns {Container} The container containing the size buttons.
	 */
	createTextSizeButtons() {
		const buttons = new Container();
		for (const sp of SettingsPanel.TEXT_SIZE_SETTINGS) {
			const name = `x${sp}`;
			const textSizeButton = new Text(name, {
				fontFamily: 'drpg-verdana',
				fontSize: 12 * SettingsPanel.S_FONT_SIZE,
				strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
			});
			textSizeButton.scale.set(1 / SettingsPanel.S_FONT_SIZE);
			textSizeButton.onclick = () => {
				this.setTextSize(sp);
			};
			textSizeButton.ontap = () => {
				this.setTextSize(sp);
			};
			textSizeButton.eventMode = 'static';
			textSizeButton.cursor = 'pointer';

			this._textSizeButtons[name] = textSizeButton;
			buttons.addChild(textSizeButton);
		}
		this.setTextSizeButtonsFocus();
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			let posX = 0;
			for (const sp of SettingsPanel.TEXT_SIZE_SETTINGS) {
				const name = `x${sp}`;
				this._textSizeButtons[name].x = posX;
				posX += Math.round(this._textSizeButtons[name].width) + 8;
			}
		};
		return buttons;
	}

	/**
	 * Sets which text size button is actually enabled.
	 */
	setTextSizeButtonsFocus() {
		for (const k in this._textSizeButtons) {
			if (`x${this._settings.textSize}` === k) {
				this._textSizeButtons[k].style.fill = 0x3d6113;
				this._textSizeButtons[k].style.stroke = 0x7bc528;
			} else {
				this._textSizeButtons[k].style.fill = 0xffffff;
				this._textSizeButtons[k].style.stroke = 0x000000;
			}
		}
	}

	/**
	 * Sets the text size in the settings and change the focus of the text size buttons.
	 * @param {number} size The new size.
	 */
	setTextSize(size) {
		this._settings.textSize = size;
		this.setTextSizeButtonsFocus();
	}

	/**
	 * Opens the settings panel and pause the fight.
	 */
	open() {
		this.visible = true;
		this._prevPausedSetting = this._settings.paused;
		this._settings.paused = true;
		// In case the settings were changed via the speed menu.
		this.setSpeedButtonsFocus();
		for (const cb of this._onOpenCallbacks) {
			cb();
		}
	}

	/**
	 * Closes the settings panel and resume the fight.
	 */
	close() {
		this.visible = false;
		// If the speed menu is hidden, unpause when closing the menu to prevent being stuck.
		this._settings.paused = this._settings._showSpeedMenu ? this._prevPausedSetting : false;
		this._speedSettingsDisplay.updateButtonSelection();
	}
}
