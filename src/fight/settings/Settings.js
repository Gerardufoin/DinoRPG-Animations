// @ts-check

import { lang } from './Lang.js';

/**
 * The settings of the application.
 * Allows to set the speed, font size, and different other parameters.
 */
export class Settings {
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
	 * Return the current display speed.
	 * @type {number}
	 */
	get speed() {
		return this.paused ? 0 : 1;
	}

	/**
	 * Get the given language key in the defined application language.
	 * @param {string} key The translation key to get.
	 * @returns {string} The value of the translation key in the current language, or an empty string.
	 */
	getLangText(key) {
		return lang[this.language][key] ?? lang.en[key] ?? '';
	}
}
