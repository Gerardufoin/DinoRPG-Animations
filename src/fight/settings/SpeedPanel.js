// @ts-check

import { Container, Graphics } from 'pixi.js';
import { Settings } from './Settings.js';
import { ref } from '../../gfx/references.js';
import { Button } from './Button.js';

/**
 * Panel allowing to quickly control the speed of the fight without having to access the settings.
 */
export class SpeedPanel extends Container {
	/**
	 * Padding between each button.
	 * @type {number}
	 */
	static BUTTON_PADDING = 6;
	/**
	 * Padding around the panel.
	 * @type {number}
	 */
	static PANEL_PADDING = 5;

	/**
	 * The settings of the application.
	 * @type {Settings}
	 */
	_settings;

	/**
	 * Creates a speed panel which consists of multiple buttons allowing to quickly change the speed of the application.
	 * @param {Settings} settings The Settings of the application.
	 */
	constructor(settings) {
		super();
		this._settings = settings;

		this.addChild(
			new Graphics()
				.beginFill(0x000000, 0.4)
				.drawRoundedRect(
					-SpeedPanel.PANEL_PADDING,
					-SpeedPanel.PANEL_PADDING,
					SpeedPanel.PANEL_PADDING * 2 + SpeedPanel.BUTTON_PADDING * 3 + 9 + 12 + 14 + 19,
					10 + 14,
					10
				)
		);

		let posX = 0;

		const playButton = new Button(ref.settings.play);
		playButton.onAction = () => {
			this._settings.paused = false;
			this._settings.speed = 1;
		};
		this.addChild(playButton);

		const pauseButton = new Button(ref.settings.pause);
		pauseButton.onAction = () => {
			this._settings.paused = true;
		};
		pauseButton.x = posX += 9 + SpeedPanel.BUTTON_PADDING;
		this.addChild(pauseButton);

		const doubleSpeedButton = new Button(ref.settings.speed_up_1);
		doubleSpeedButton.onAction = () => {
			this._settings.paused = false;
			this._settings.speed = 2;
		};
		doubleSpeedButton.x = posX += 12 + SpeedPanel.BUTTON_PADDING;
		this.addChild(doubleSpeedButton);

		const tripleSpeedButton = new Button(ref.settings.speed_up_2);
		tripleSpeedButton.onAction = () => {
			this._settings.paused = false;
			this._settings.speed = 3;
		};
		tripleSpeedButton.x = posX += 14 + SpeedPanel.BUTTON_PADDING;
		this.addChild(tripleSpeedButton);
	}
}
