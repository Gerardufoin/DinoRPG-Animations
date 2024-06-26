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
	 * Determines if the settings are accessible in game or not.
	 * @type {boolean}
	 */
	display = true;
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
	 * The auto skip settings for the dialogues.
	 * @type {number}
	 */
	_autoSkip = -1;
	/**
	 * Get the auto skip delay for the dialogues.
	 * @type {number}
	 */
	get autoSkip() {
		return this._autoSkip;
	}
	/**
	 * Set the auto skip delay for the dialogues. Negative number do not skip.
	 * @type {number}
	 */
	set autoSkip(v) {
		this._autoSkip = v;
		this.saveSettings();
	}

	/**
	 * Decides if the dinoz should scale with hp or not.
	 * @type {boolean}
	 */
	_scaleDinoz = true;
	/**
	 * Get the setting deciding if a dinoz should scale with its HP or not.
	 * @type {boolean}
	 */
	get scaleDinoz() {
		return this._scaleDinoz;
	}
	/**
	 * Sets the setting deciding if a dinoz should scale with its HP or not.
	 * @type {boolean}
	 */
	set scaleDinoz(v) {
		this._scaleDinoz = v;
		this.saveSettings();
	}

	/**
	 * Decides if the fight should pause between each action.
	 * @type {boolean}
	 */
	_autoPause = false;
	/**
	 * Gets the setting deciding if the fight should pause between each action.
	 * @type {boolean}
	 */
	get autoPause() {
		return this._autoPause;
	}
	/**
	 * Sets the setting deciding if the fight should pause between each action.
	 * @type {boolean}
	 */
	set autoPause(v) {
		this._autoPause = v;
		this.saveSettings();
	}

	/**
	 * Decides if the hitboxes should be displayed or not.
	 * @type {boolean}
	 */
	_showHitbox = false;
	/**
	 * Callbacks to call when the ShowHitbox setting is changed.
	 * @type {((v: boolean) => void)[]}
	 */
	_showHitboxCallbacks = [];
	/**
	 * Register a new callback to invoke when the ShowHitbox setting is changed.
	 * @param {(v: boolean) => void} cb The callback to register.
	 */
	set onShowHitbox(cb) {
		this._showHitboxCallbacks.push(cb);
	}
	/**
	 * Gets the setting deciding if the hitboxes should be displayed or not.
	 * @type {boolean}
	 */
	get showHitbox() {
		return this._showHitbox;
	}
	/**
	 * Sets the setting deciding if the hitboxes should be displayed or not.
	 * @type {boolean}
	 */
	set showHitbox(v) {
		this._showHitbox = v;
		this.saveSettings();
		this._showHitboxCallbacks.forEach((cb) => cb(v));
	}

	/**
	 * Load the settings from local storage if the settings are enabled.
	 * @param {string} lang The language of the settings.
	 * @param {boolean} disable If true, the settings are the default one and cannot be loaded or saved. False by default.
	 */
	constructor(lang, disable = false) {
		this.display = !disable;
		this.language = lang;
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
	 * Copy the fight to the clipboard.
	 * To be defined by Fight when creating the settings.
	 */
	copyFight;

	/**
	 * Load the settings from the local storage.
	 */
	loadSettings() {
		if (!this.display) return;

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
		this._autoSkip = settings.autoSkip ?? -1;
		this._scaleDinoz = settings.scaleDinoz ?? true;
		this._autoPause = settings.autoPause ?? false;
		this._showHitbox = settings.showHitbox ?? false;
	}

	/**
	 * Save the settings in the local storage.
	 */
	saveSettings() {
		if (!this.display) return;

		const settings = {
			speed: this._speed,
			displaySpeed: this._showSpeedMenu,
			textSize: this._textSize,
			autoSkip: this._autoSkip,
			scaleDinoz: this._scaleDinoz,
			autoPause: this._autoPause,
			showHitbox: this._showHitbox
		};
		localStorage.setItem(Settings.SETTING_KEY_NAME, JSON.stringify(settings));
	}

	// CALLBACKS
	/**
	 * If the given parameter is a function, returns it.
	 * Otherwise returns a dummy function.
	 * @param {(...args: any) => void} cb The callback to check.
	 * @returns {(...args: any) => void} The callback or a new dummy function.
	 */
	asFunc(cb) {
		if (cb && typeof cb === 'function') {
			return cb;
		}
		return () => {};
	}

	_onStepStart;
	/**
	 * A callback firing every time a new step is started in the fight history.
	 * Will give the index and step object as argument. The object has its enums as numbers.
	 * @type {((index: number, step: object) => void)}
	 */
	set onStepStart(cb) {
		this._onStepStart = cb;
	}
	/**
	 * A callback firing every time a new step is started in the fight history.
	 * Will give the index and step object as argument. The object has its enums as numbers.
	 * @type {((index: number, step: object) => void)}
	 */
	get onStepStart() {
		return this.asFunc(this._onStepStart);
	}

	_onStepEnd;
	/**
	 * A callback firing every time a step ends in the fight history.
	 * Will give the index and step object as argument. The object has its enums as numbers.
	 * @type {((index: number, step: object) => void)}
	 */
	set onStepEnd(cb) {
		this._onStepEnd = cb;
	}
	/**
	 * A callback firing every time a step ends in the fight history.
	 * Will give the index and step object as argument. The object has its enums as numbers.
	 * @type {((index: number, step: object) => void)}
	 */
	get onStepEnd() {
		return this.asFunc(this._onStepEnd);
	}

	_onStepStartStr;
	/**
	 * A callback firing every time a new step is started in the fight history.
	 * Will give the index and step object as argument. The object has its enums as strings.
	 * @type {((index: number, step: object) => void)}
	 */
	set onStepStartStr(cb) {
		this._onStepStartStr = cb;
	}
	/**
	 * A callback firing every time a new step is started in the fight history.
	 * Will give the index and step object as argument. The object has its enums as strings.
	 * @type {((index: number, step: object) => void)}
	 */
	get onStepStartStr() {
		return this.asFunc(this._onStepStartStr);
	}

	_onStepEndStr;
	/**
	 * A callback firing every time a step ends in the fight history.
	 * Will give the index and step object as argument. The object has its enum as numbers.
	 * @type {((index: number, step: object) => void)}
	 */
	set onStepEndStr(cb) {
		this._onStepEndStr = cb;
	}
	/**
	 * A callback firing every time a step ends in the fight history.
	 * Will give the index and step object as argument. The object has its enum as numbers.
	 * @type {((index: number, step: object) => void)}
	 */
	get onStepEndStr() {
		return this.asFunc(this._onStepEndStr);
	}

	_onFightStart;
	/**
	 * A callback firing once the fight starts.
	 * @type {(() => void)}
	 */
	set onFightStart(cb) {
		this._onFightStart = cb;
	}
	/**
	 * A callback firing once the fight starts.
	 * @type {(() => void)}
	 */
	get onFightStart() {
		return this.asFunc(this._onFightStart);
	}

	_onFightEnd;
	/**
	 * A callback firing once the fight ends.
	 * @type {(() => void)}
	 */
	set onFightEnd(cb) {
		this._onFightEnd = cb;
	}
	/**
	 * A callback firing once the fight ends.
	 * @type {(() => void)}
	 */
	get onFightEnd() {
		return this.asFunc(this._onFightEnd);
	}

	_onFighterClick;
	/**
	 * A callback firing every time a fighter or its portrait is clicked.
	 * Will give the fighter idx as parameter.
	 * @type {((idx: number) => void)}
	 */
	set onFighterClick(cb) {
		this._onFighterClick = cb;
	}
	/**
	 * A callback firing every time a fighter or its portrait is clicked.
	 * Will give the fighter idx as parameter.
	 * @type {((idx: number) => void)}
	 */
	get onFighterClick() {
		return this.asFunc(this._onFighterClick);
	}

	_onStatusChange;
	/**
	 * A callback firing every time the status of a fighter changes.
	 * Will give the fighter idx and the list of its status as parameters.
	 * @type {((idx: number, status: string[]) => void)}
	 */
	set onStatusChange(cb) {
		this._onStatusChange = cb;
	}
	/**
	 * A callback firing every time the status of a fighter changes.
	 * Will give the fighter idx and the list of its status as parameters.
	 * @type {((idx: number, status: string[]) => void)}
	 */
	get onStatusChange() {
		return this.asFunc(this._onStatusChange);
	}

	_onLifeChange;
	/**
	 * A callback firing every time the life of a fighter changes.
	 * Will give the fighter and its current life as parameters.
	 * @type {((idx: number, life: number) => void)}
	 */
	set onLifeChange(cb) {
		this._onLifeChange = cb;
	}
	/**
	 * A callback firing every time the life of a fighter changes.
	 * Will give the fighter and its current life as parameters.
	 * @type {((idx: number, life: number) => void)}
	 */
	get onLifeChange() {
		return this.asFunc(this._onLifeChange);
	}

	_onDeath;
	/**
	 * A callback firing every time a fighter dies.
	 * @type {((idx: number) => void)}
	 */
	set onDeath(cb) {
		this._onDeath = cb;
	}
	/**
	 * A callback firing every time a fighter dies.
	 * @type {((idx: number) => void)}
	 */
	get onDeath() {
		return this.asFunc(this._onDeath);
	}
}
