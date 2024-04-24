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
	 * Available auto skip settings.
	 * @type {number[]}
	 */
	static AUTO_SKIP_SETTINGS = [-1, 0, 1, 3];

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
	 * The buttons controlling the auto skip setting.
	 * @type {{ [id: string]: Text }}
	 */
	_autoSkipButtons = {};

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

		const xOffset = SettingsPanel.PADDING + 15;

		// Speed options
		const speedPanel = this.createSpeedPanel();
		speedPanel.x = xOffset;
		speedPanel.y = posY += 40;
		this.addChild(speedPanel);

		// Text size options
		const textPanel = this.createTextSizePanel();
		textPanel.x = xOffset;
		textPanel.y = posY += 45;
		this.addChild(textPanel);

		// Auto skip options
		const autoSkipPanel = this.createAutoSkipPanel();
		autoSkipPanel.x = xOffset;
		autoSkipPanel.y = posY += 25;
		this.addChild(autoSkipPanel);

		// Scale dinoz option
		const scaleDinozPanel = this.createDinoScalingSetting();
		scaleDinozPanel.x = xOffset;
		scaleDinozPanel.y = posY += 25;
		this.addChild(scaleDinozPanel);

		// Debug panel
		const debugPanel = this.createDebugPanel(xOffset);
		debugPanel.x = xOffset;
		debugPanel.y = posY += 30;
		this.addChild(debugPanel);

		// Fight copy panel
		const copyFightPanel = this.createCopyFightPanel();
		copyFightPanel.x = SCENE_FULL_WIDTH / 2;
		copyFightPanel.y = SCENE_HEIGHT - 30;
		this.addChild(copyFightPanel);

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

			this._speedButtons[sp] = speedButton;
			buttons.addChild(speedButton);
		}
		this.setTextButtonsFocus(this._speedButtons, this._settings._speed);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			let posX = 0;
			for (const sp of SettingsPanel.SPEED_SETTINGS) {
				this._speedButtons[sp].x = posX;
				posX += Math.round(this._speedButtons[sp].width) + 8;
			}
		};
		return buttons;
	}

	/**
	 * Sets which text button is actually enabled.
	 * @param {{[id: string]: Text}} buttons The buttons and value to check.
	 * @param {number} value The value of the enabled button.
	 */
	setTextButtonsFocus(buttons, value) {
		for (const k in buttons) {
			if (value.toString() === k) {
				buttons[k].style.fill = 0x3d6113;
				buttons[k].style.stroke = 0x7bc528;
			} else {
				buttons[k].style.fill = 0xffffff;
				buttons[k].style.stroke = 0x000000;
			}
		}
	}

	/**
	 * Sets the speed in the settings and change the focus of the speed buttons.
	 * @param {number} speed The new speed.
	 */
	setSpeed(speed) {
		this._settings.speed = speed;
		this.setTextButtonsFocus(this._speedButtons, this._settings._speed);
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

			this._textSizeButtons[sp] = textSizeButton;
			buttons.addChild(textSizeButton);
		}
		this.setTextButtonsFocus(this._textSizeButtons, this._settings._textSize);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			let posX = 0;
			for (const sp of SettingsPanel.TEXT_SIZE_SETTINGS) {
				this._textSizeButtons[sp].x = posX;
				posX += Math.round(this._textSizeButtons[sp].width) + 8;
			}
		};
		return buttons;
	}

	/**
	 * Sets the text size in the settings and change the focus of the text size buttons.
	 * @param {number} size The new size.
	 */
	setTextSize(size) {
		this._settings.textSize = size;
		this.setTextButtonsFocus(this._textSizeButtons, this._settings._textSize);
	}

	/**
	 * Creates the auto skip settings management panel.
	 * @returns {Container} The created auto skip settings panel.
	 */
	createAutoSkipPanel() {
		const panel = new Container();
		const arrow = new Asset(ref.settings.arrow);
		arrow.y += SettingsPanel.ARROW_OFFSET;
		panel.addChild(arrow);
		const title = new Text(this._settings.getLangText('auto_skip'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		title.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		title.x = 18;
		panel.addChild(title);
		const buttons = this.createAutoSkipButtons();
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			buttons.x = 18 + Math.round(title.width) + SettingsPanel.TITLE_PADDING;
		};
		panel.addChild(buttons);
		return panel;
	}

	/**
	 * Creates the button controlling the auto skip timing.
	 * @returns {Container} The container containing the buttons.
	 */
	createAutoSkipButtons() {
		const buttons = new Container();
		for (const sp of SettingsPanel.AUTO_SKIP_SETTINGS) {
			const name = sp < 0 ? this._settings.getLangText('auto_skip_disabled') : `${sp}s`;
			const textButton = new Text(name, {
				fontFamily: 'drpg-verdana',
				fontSize: 12 * SettingsPanel.S_FONT_SIZE,
				strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
			});
			textButton.scale.set(1 / SettingsPanel.S_FONT_SIZE);
			textButton.onclick = () => {
				this.setAutoSkip(sp);
			};
			textButton.ontap = () => {
				this.setAutoSkip(sp);
			};
			textButton.eventMode = 'static';
			textButton.cursor = 'pointer';

			this._autoSkipButtons[sp] = textButton;
			buttons.addChild(textButton);
		}
		this.setTextButtonsFocus(this._autoSkipButtons, this._settings._autoSkip);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			let posX = 0;
			for (const sp of SettingsPanel.AUTO_SKIP_SETTINGS) {
				this._autoSkipButtons[sp].x = posX;
				posX += Math.round(this._autoSkipButtons[sp].width) + 8;
			}
		};
		return buttons;
	}

	/**
	 * Sets the auto skip delay in the settings and change the focus of the text buttons.
	 * @param {number} delay The new auto skip delay.
	 */
	setAutoSkip(delay) {
		this._settings.autoSkip = delay;
		this.setTextButtonsFocus(this._autoSkipButtons, this._settings._autoSkip);
	}

	/**
	 * Creates the settings allowing to toggle on or off the dino scaling with hp.
	 * @returns {Container} The display for the setting.
	 */
	createDinoScalingSetting() {
		const cont = new Container();
		const arrow = new Asset(ref.settings.arrow);
		arrow.y += SettingsPanel.ARROW_OFFSET;
		cont.addChild(arrow);
		const txt = new Text(this._settings.getLangText('scale_size'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		txt.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		txt.x = 18;
		cont.addChild(txt);
		const toggle = new Toggle(
			ref.settings.checkbox_on,
			ref.settings.checkbox_off,
			this._settings.scaleDinoz,
			() => {
				this._settings.scaleDinoz = true;
			},
			() => {
				this._settings.scaleDinoz = false;
			}
		);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			toggle.x = 18 + Math.round(txt.width) + SettingsPanel.TITLE_PADDING;
		};
		toggle.y = 3;
		cont.addChild(toggle);
		return cont;
	}

	/**
	 * Creates the panel containing the debug settings.
	 * @param {number} offset The x offset of the panel.
	 * @returns {Container} The created debug settings panel.
	 */
	createDebugPanel(offset) {
		const panel = new Container();
		const title = new Text('DEBUG', {
			fontFamily: 'drpg-verdana',
			fontSize: 14 * SettingsPanel.S_FONT_SIZE,
			fontWeight: 'bold',
			align: 'center',
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 3 * SettingsPanel.S_FONT_SIZE
		});
		title.anchor.set(0.5, 0);
		title.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		title.x = SCENE_FULL_WIDTH / 2 - offset;
		panel.addChild(title);

		const autoPauseDisplay = this.createAutoPauseSetting();
		autoPauseDisplay.y = 30;
		panel.addChild(autoPauseDisplay);

		const hitboxDisplay = this.createHitboxSetting();
		hitboxDisplay.y = 55;
		panel.addChild(hitboxDisplay);

		return panel;
	}

	/**
	 * Creates the settings allowing to toggle on or off the pause between each action.
	 * @returns {Container} The display for the setting.
	 */
	createAutoPauseSetting() {
		const cont = new Container();
		const arrow = new Asset(ref.settings.arrow);
		arrow.y += SettingsPanel.ARROW_OFFSET;
		cont.addChild(arrow);
		const txt = new Text(this._settings.getLangText('auto_pause'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		txt.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		txt.x = 18;
		cont.addChild(txt);
		const toggle = new Toggle(
			ref.settings.checkbox_on,
			ref.settings.checkbox_off,
			this._settings.autoPause,
			() => {
				this._settings.autoPause = true;
			},
			() => {
				this._settings.autoPause = false;
			}
		);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			toggle.x = 18 + Math.round(txt.width) + SettingsPanel.TITLE_PADDING;
		};
		toggle.y = 3;
		cont.addChild(toggle);
		return cont;
	}

	/**
	 * Creates the settings allowing to toggle on or off the hitboxes.
	 * @returns {Container} The display for the setting.
	 */
	createHitboxSetting() {
		const cont = new Container();
		const arrow = new Asset(ref.settings.arrow);
		arrow.y += SettingsPanel.ARROW_OFFSET;
		cont.addChild(arrow);
		const txt = new Text(this._settings.getLangText('show_hitbox'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		txt.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		txt.x = 18;
		cont.addChild(txt);
		const toggle = new Toggle(
			ref.settings.checkbox_on,
			ref.settings.checkbox_off,
			this._settings.showHitbox,
			() => {
				this._settings.showHitbox = true;
			},
			() => {
				this._settings.showHitbox = false;
			}
		);
		// Callback to prevent font loading issue. See comment above.
		this.onOpen = () => {
			toggle.x = 18 + Math.round(txt.width) + SettingsPanel.TITLE_PADDING;
		};
		toggle.y = 3;
		cont.addChild(toggle);
		return cont;
	}

	/**
	 * Creates the button allowing to copy the fight into your clipboard.
	 * @returns {Container} The panel containing the copy fight button.
	 */
	createCopyFightPanel() {
		const panel = new Container();
		const doneButton = new Text(this._settings.getLangText('copy_fight_done'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		doneButton.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		doneButton.anchor.set(0.5, 0);
		doneButton.visible = false;
		panel.addChild(doneButton);

		const copyButton = new Text(this._settings.getLangText('copy_fight'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		copyButton.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		copyButton.anchor.set(0.5, 0);
		const cb = () => {
			copyButton.visible = false;
			doneButton.visible = true;
			this._settings.copyFight();
			setTimeout(() => {
				copyButton.visible = true;
				doneButton.visible = false;
			}, 1000);
		};
		copyButton.onclick = cb;
		copyButton.ontap = cb;
		copyButton.eventMode = 'static';
		copyButton.cursor = 'pointer';
		panel.addChild(copyButton);

		return panel;
	}

	/**
	 * Opens the settings panel and pause the fight.
	 */
	open() {
		this.visible = true;
		this._prevPausedSetting = this._settings.paused;
		this._settings.paused = true;
		// In case the settings were changed via the speed menu.
		this.setTextButtonsFocus(this._speedButtons, this._settings._speed);
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
