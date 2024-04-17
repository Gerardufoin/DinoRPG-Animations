// @ts-check

import { lang } from './Lang.js';

/**
 * The settings of the application.
 * Allows to set the speed, font size, and different other parameters.
 */
export class Settings {
	/**
	 * Name of the settings in local storage.
	 * @type {string}
	 */
	static SETTING_KEY_NAME = 'DA-DRPG-SETTINGS';

	/**
	 * If set to true, the Fight is paused.
	 * @type {boolean}
	 */
	paused = false;
	/**
	 * The language to use for the settings display.
	 * @type {string}
	 */
	language = 'en';
	/**
	 * The display speed of the fight.
	 * @type {number}
	 */
	_speed = 1;
	/**
	 * Return the current display speed.
	 * @type {number}
	 */
	get speed() {
		return this.paused ? 0 : this._speed;
	}
	/**
	 * Get the speed without being affected by the pause setting.
	 * @type {number}
	 */
	get rawSpeed() {
		return this._speed;
	}
	/**
	 * Set the display speed of the fight.
	 * @type {number}
	 */
	set speed(v) {
		this._speed = v;
		this.saveSettings();
	}

	/**
	 * Defines if the speed menu should be constantly on screen or not.
	 * @type {boolean}
	 */
	_showSpeedMenu = false;
	/**
	 * If true, the speed menu stays on screen.
	 * @type {boolean}
	 */
	get showSpeedMenu() {
		return this._showSpeedMenu;
	}
	/**
	 * Sets if the speed menu should stay on screen.
	 * @type {boolean}
	 */
	set showSpeedMenu(v) {
		this._showSpeedMenu = v;
		this.saveSettings();
	}

	/**
	 * The size multiplier for the dialogues.
	 * @type {number}
	 */
	_textSize = 1;
	/**
	 * Get the size multiplier for the dialogues.
	 * @type {number}
	 */
	get textSize() {
		return this._textSize;
	}
	/**
	 * Set the size multiplier for the dialogues.
	 * @type {number}
	 */
	set textSize(v) {
		this._textSize = v;
		this.saveSettings();
	}

	/**
	 * Load the settings from local storage.
	 */
	constructor() {
		this.loadSettings();
	}

	/**
	 * Get the given language key in the defined application language.
	 * @param {string} key The translation key to get.
	 * @returns {string} The value of the translation key in the current language, or an empty string.
	 */
	getLangText(key) {
		return lang[this.language][key] ?? lang.en[key] ?? '';
	}

	/**
	 * Load the settings from the local storage.
	 */
	loadSettings() {
		let settings = {};
		try {
			const settingJson = localStorage.getItem(Settings.SETTING_KEY_NAME);
			settings = JSON.parse(settingJson) ?? {};
		} catch (e) {
			console.error(`[Settings.loadSettings] Error: Unable to parse the saved settings.`);
			settings = {};
		}
		this._showSpeedMenu = settings.displaySpeed ?? false;
		this._speed = settings.speed ?? 1;
		this._textSize = settings.textSize ?? 1;
	}

	/**
	 * Save the settings in the local storage.
	 */
	saveSettings() {
		const settings = {
			speed: this._speed,
			displaySpeed: this._showSpeedMenu,
			textSize: this._textSize
		};
		localStorage.setItem(Settings.SETTING_KEY_NAME, JSON.stringify(settings));
	}
}
