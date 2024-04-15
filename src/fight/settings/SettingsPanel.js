// @ts-check

import { Container, NineSlicePlane, Text } from 'pixi.js';
import { Settings } from './Settings.js';
import { TextureManager } from '../../display/TextureManager.js';
import { ref } from '../../gfx/references.js';
import { FONT_SCALE, SCENE_FULL_WIDTH, SCENE_HEIGHT } from '../IScene.js';
import { Button } from './Button.js';
import { ConstantShaderManager } from '../../display/ConstantShaderManager.js';
import { Asset } from '../../display/Asset.js';

/**
 * The settings panel, which allows the user to change the settings of the application.
 */
export class SettingsPanel extends Container {
	/**
	 * Padding of the panel.
	 */
	static PADDING = 15;

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

		let posY = 65;
		// Speed options
		const speedPanel = new Container();
		speedPanel.x = SettingsPanel.PADDING + 15;
		speedPanel.y = posY;
		const arrow = new Asset(ref.settings.arrow);
		arrow.anchor.set(0, 0.5);
		speedPanel.addChild(arrow);
		const speedTitle = new Text(this._settings.getLangText('fight_speed'), {
			fontFamily: 'drpg-verdana',
			fontSize: 12 * FONT_SCALE,
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2 * FONT_SCALE
		});
		speedTitle.anchor.set(0, 0.5);
		speedTitle.scale.set(1 / FONT_SCALE);
		speedTitle.x = 18;
		speedPanel.addChild(speedTitle);
		this.addChild(speedPanel);

		// Close button
		const close = new Button(ref.settings.close);
		close.x = SCENE_FULL_WIDTH - 22 - SettingsPanel.PADDING;
		close.y = SettingsPanel.PADDING;
		close.onAction = () => this.close();
		this.addChild(close);
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
