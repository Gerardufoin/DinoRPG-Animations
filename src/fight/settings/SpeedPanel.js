// @ts-check

import { AlphaFilter, Container, Graphics } from 'pixi.js';
import { Settings } from './Settings.js';
import { ref } from '../../gfx/references.js';
import { Button } from './Button.js';
import { ConstantShaderManager } from '../../display/ConstantShaderManager.js';

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
	static PANEL_PADDING = 3;

	/**
	 * The settings of the application.
	 * @type {Settings}
	 */
	_settings;

	/**
	 * Reference to the play button, setting the fight speed in speed 1.
	 * @type {Button}
	 */
	_playButton;
	/**
	 * Reference to the pause button, pausing the fight.
	 * @type {Button}
	 */
	_pauseButton;
	/**
	 * Reference to the first speed up button, setting the fight speed to 2.
	 * @type {Button}
	 */
	_speedUpButton1;
	/**
	 * Reference to the second speed up button, setting the fight speed to 3.
	 * @type {Button}
	 */
	_speedUpButton2;

	/**
	 * Creates a speed panel which consists of multiple buttons allowing to quickly change the speed of the application.
	 * @param {Settings} settings The Settings of the application.
	 */
	constructor(settings) {
		super();
		this._settings = settings;

		this.filters = [new AlphaFilter(0.6)];

		const background = new Graphics()
			.beginFill(0x000000, 0.1)
			.drawRoundedRect(
				-SpeedPanel.PANEL_PADDING,
				-SpeedPanel.PANEL_PADDING,
				SpeedPanel.PANEL_PADDING * 2 + SpeedPanel.BUTTON_PADDING * 3 + 9 + 12 + 14 + 19,
				SpeedPanel.PANEL_PADDING * 2 + 14,
				5
			);
		background.filters = [
			ConstantShaderManager.getGlowFilter({
				distance: 10,
				alpha: 0.6,
				color: 0x000000,
				outerStrength: 4,
				quality: 1
			})
		];
		this.addChild(background);

		let posX = 0;

		this._playButton = new Button(ref.settings.play);
		this._playButton.onAction = () => {
			this._settings.paused = false;
			this._settings.speed = 1;
			this.updateButtonSelection();
		};
		this.addChild(this._playButton);

		this._pauseButton = new Button(ref.settings.pause);
		this._pauseButton.onAction = () => {
			this._settings.paused = !this._settings.paused;
			this.updateButtonSelection();
		};
		this._pauseButton.x = posX += 9 + SpeedPanel.BUTTON_PADDING;
		this.addChild(this._pauseButton);

		this._speedUpButton1 = new Button(ref.settings.speed_up_1);
		this._speedUpButton1.onAction = () => {
			this._settings.paused = false;
			this._settings.speed = 2;
			this.updateButtonSelection();
		};
		this._speedUpButton1.x = posX += 14 + SpeedPanel.BUTTON_PADDING;
		this.addChild(this._speedUpButton1);

		this._speedUpButton2 = new Button(ref.settings.speed_up_2);
		this._speedUpButton2.onAction = () => {
			this._settings.paused = false;
			this._settings.speed = 3;
			this.updateButtonSelection();
		};
		this._speedUpButton2.x = posX += 14 + SpeedPanel.BUTTON_PADDING;
		this.addChild(this._speedUpButton2);

		this.updateButtonSelection();
	}

	/**
	 * Updates which button is selected based on the current settings.
	 */
	updateButtonSelection() {
		const shader = ConstantShaderManager.getAdjustColorFilter(0, 0, 0, 70);
		this._playButton.filters = !this._settings.paused && this._settings.speed == 1 ? [shader] : [];
		this._pauseButton.filters = this._settings.paused ? [shader] : [];
		this._speedUpButton1.filters = !this._settings.paused && this._settings.speed == 2 ? [shader] : [];
		this._speedUpButton2.filters = !this._settings.paused && this._settings.speed == 3 ? [shader] : [];
	}
}
