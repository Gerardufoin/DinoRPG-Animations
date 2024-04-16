// @ts-check

import { Container, NineSlicePlane, Text } from 'pixi.js';
import { Settings } from './Settings.js';
import { TextureManager } from '../../display/TextureManager.js';
import { ref } from '../../gfx/references.js';
import { FONT_SCALE, SCENE_FULL_WIDTH, SCENE_HEIGHT } from '../IScene.js';
import { Button } from './Button.js';
import { Asset } from '../../display/Asset.js';
import { Toggle } from './Toggle.js';

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
	 * Width conversion from the default font to verdana.
	 * @type {number}
	 */
	static DEFAULT_TO_VERDANA_SCALE = 1.25;
	/**
	 * Padding of the panel.
	 * @type {number}
	 */
	static PADDING = 15;
	/**
	 * Available speed settings.
	 * @type {number[]}
	 */
	static SPEED_SETTINGS = [0.25, 0.5, 1, 2, 3];

	/**
	 * The application's settings.
	 * @type {Settings}
	 */
	_settings;

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
	 * Creates the setting panel and registers the Fight's Settings object.
	 * @param {Settings} settings The current settings of the application.
	 */
	constructor(settings) {
		super();
		this._settings = settings;
		this.visible = false;

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
		title.y = SettingsPanel.PADDING;
		this.addChild(title);

		let posY = 55;

		// Speed options
		const speedPanel = this.createSpeedPanel();
		speedPanel.x = SettingsPanel.PADDING + 15;
		speedPanel.y = posY;
		this.addChild(speedPanel);

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
		const speedPanel = new Container();
		const arrow = new Asset(ref.settings.arrow);
		speedPanel.addChild(arrow);
		const speedTitle = new Text(this._settings.getLangText('fight_speed'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * SettingsPanel.S_FONT_SIZE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
		});
		speedTitle.scale.set(1 / SettingsPanel.S_FONT_SIZE);
		speedTitle.x = 18;
		speedPanel.addChild(speedTitle);
		const speedButtons = this.createSpeedButtons();
		speedButtons.x = 18 + speedTitle.width * SettingsPanel.DEFAULT_TO_VERDANA_SCALE + 20;
		speedPanel.addChild(speedButtons);
		const speedDisplaySetting = this.createSpeedDisplaySetting();
		speedDisplaySetting.x = 18;
		speedDisplaySetting.y = 18;
		speedPanel.addChild(speedDisplaySetting);
		// PixiJS does not like accessing width that fast. Set the text to dirty to force it to re-render.
		speedTitle.dirty = true;
		return speedPanel;
	}

	/**
	 * Creates the button controlling the speed of the fight.
	 * @returns {Container} The container containing the speed buttons.
	 */
	createSpeedButtons() {
		const buttons = new Container();
		let posX = 0;
		for (const sp of SettingsPanel.SPEED_SETTINGS) {
			const name = `x${sp}`;
			const speedButton = new Text(name, {
				fontFamily: 'drpg-verdana',
				fontSize: 12 * SettingsPanel.S_FONT_SIZE,
				strokeThickness: 2 * SettingsPanel.S_FONT_SIZE
			});
			speedButton.scale.set(1 / SettingsPanel.S_FONT_SIZE);
			speedButton.x = posX;
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
			posX += speedButton.width * SettingsPanel.DEFAULT_TO_VERDANA_SCALE + 8;
		}
		this.setSpeedButtonsFocus();
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
			},
			() => {
				this._settings.showSpeedMenu = false;
			}
		);
		toggle.x = txt.width * SettingsPanel.DEFAULT_TO_VERDANA_SCALE + 10;
		toggle.y = 3;
		cont.addChild(toggle);
		txt.dirty = true;
		return cont;
	}

	/**
	 * Opens the settings panel and pause the fight.
	 */
	open() {
		this.visible = true;
		this._settings.paused = true;
	}

	/**
	 * Closes the settings panel and resume the fight.
	 */
	close() {
		this.visible = false;
		this._settings.paused = false;
	}
}
