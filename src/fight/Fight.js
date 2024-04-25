// @ts-check
// https://github.com/motion-twin/WebGamesArchives/tree/main/DinoRPG/gfx/fight
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
// enums: https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/src/com/Fight.hx
import { Renderer } from 'pixi.js';
import { HaxeUnserializer } from './data/HaxeUnserializer.js';
import { HaxeSerializer } from './data/HaxeSerializer.js';
import { DAConverter } from './data/DAConverter.js';
import { MTConverter } from './data/MTConverter.js';
import { Scene } from './Scene.js';
import { History } from './History.js';
import { Timer } from './Timer.js';
import { PreloadData } from '../display/PreloadData.js';
import { Settings } from './settings/Settings.js';

/**
 * Create a fight scene to render the history of a fight for DinoRPG.
 *
 * Can be created using the legacy fight data used by Motion Twin, or the adapted JSON version used for this project.
 */
export class Fight {
	static FRAME_RATE = 32;

	/**
	 * The fight settings, allowing to manage the different fight options.
	 * @type {Settings}
	 */
	_settings;
	/**
	 * Timer managing the time elapsed between two frame to make it fit an expected framerate.
	 * @type {Timer}
	 */
	_timer;
	/**
	 * PixiJS renderer for the fight. Will render the instantiated Scene object.
	 * @type {Renderer}
	 */
	_renderer;
	/**
	 * PixiJS container containing all the object to be displayed during the fight.
	 * @type {Scene}
	 */
	_scene;
	/**
	 * Unserialized legacy data if any was passed at intialization.
	 * @type {object}
	 */
	_legacyData;
	/**
	 * Data of the current fight under DA format.
	 * @type {object}
	 */
	_data;

	/**
	 * If waiting time is above 0, the game is paused until the given time has elapsed.
	 * @type {number}
	 */
	_waitingTime = 0;

	/**
	 * Is the current fight history paused?
	 * @type {boolean}
	 */
	get paused() {
		return this._waitingTime > 0;
	}

	/**
	 * Fight history manager.
	 * @type {History}
	 */
	_history;

	/**
	 * Creates a fight based on the data parameter.
	 * @param {{legacy_data?: string, bg?: string, history?: Array, lang?: string, settings?: boolean}} data Object containing the data describing a fight.
	 */
	constructor(data) {
		if (data.legacy_data) {
			this._legacyData = new HaxeUnserializer(decodeURIComponent(data.legacy_data)).unserialize();
			this._data = DAConverter.convert(this._legacyData);
		} else {
			this._data = data;
		}
		this._renderer = new Renderer({
			backgroundColor: 0xfce3bb,
			width: 488,
			height: 300
		});

		this._settings = new Settings(data.lang ?? 'en', !(data.settings ?? true));
		this._settings.copyFight = () => {
			this.copyToClipboard();
		};

		this._scene = new Scene(
			this._data.bg,
			{
				top: this._data.top ?? 0,
				bottom: this._data.bottom ?? 0,
				right: this._data.right ?? 0
			},
			this._data.ground ?? 0,
			this._renderer,
			this._settings
		);

		this._timer = new Timer(Fight.FRAME_RATE, this._settings);
		this._timer.add(() => {
			this.update();
			this._renderer.render(this._scene);
		});
		this._timer.start();

		this._history = new History(this, this._scene, this._data.history);

		// Preload data and then starts the history.
		PreloadData.preload(this._renderer).then(() => {
			// "Fake" loading delay to leave the time for the player to understand what is happening and for some resources to load.
			setTimeout(() => {
				if (this._settings.onFightStart && typeof this._settings.onFightStart === 'function') {
					this._settings.onFightStart();
				}
				this._history.playNext();
			}, 1000);
		});
	}

	/**
	 * Updates the States and the Scene.
	 * If waiting time is above 0, decrease it and play the next history action once finish.
	 */
	update() {
		this._history.updateStates(this._timer);
		this._scene.update(this._timer);
		if (this._waitingTime > 0) {
			this._waitingTime -= this._timer.tmod;
			if (this._waitingTime <= 0) {
				this._waitingTime = 0;
				this._history.nextAction();
			}
		}
	}

	/**
	 * Gets the fight canvas to add to a webpage.
	 * @returns {import("pixi.js").ICanvas} The canvas instance to add to the webpage.
	 */
	getDisplay() {
		return this._renderer.view;
	}

	/**
	 * Pauses the action for the given number of frames.
	 * @param {number} frames The number of frames the pause has to last.
	 */
	pause(frames) {
		this._waitingTime = frames;
	}

	/**
	 * Copies the fight to the user clipboard.
	 */
	copyToClipboard() {
		navigator.clipboard.writeText(JSON.stringify(this._data, undefined, '\t'));
	}

	/**
	 * Gets the fight data under MT format.
	 * @param {boolean} forceDAData Force the process to use the converted data as base, even if legacy data was passed at init.
	 * @returns {string} The serialized data to feed fight.swf.
	 */
	getMTFormat(forceDAData = false) {
		if (this._legacyData && !forceDAData) {
			return encodeURIComponent(new HaxeSerializer(this._legacyData).serialize());
		}
		return encodeURIComponent(new HaxeSerializer(MTConverter.convert(this._data)).serialize());
	}

	/**
	 * Gets the unserialized fight data under MT format.
	 * @returns {object} The fight data under MT format as an object.
	 */
	getMTObject() {
		if (this._legacyData) {
			return this._legacyData;
		}
		return MTConverter.convert(this._data);
	}

	/**
	 * Destroys the fight display and clean the memory.
	 * Call if you need to remove the Fight from the webpage without reloading.
	 * The Fight object is rendered useless after this method is called and will have to be discarded.
	 */
	destroy() {
		this._timer.destroy();
		this._renderer.destroy();
	}

	/**
	 * Registers a callback firing every time a new step is started in the fight history.
	 * Will give the step index and object as argument.
	 * @param {((idx: number, step: object) => {})} cb The callback to invoke on a new step.
	 */
	set onStepStart(cb) {
		this._settings.onStepStart = cb;
	}

	/**
	 * Registers a callback firing every time a step ends in the fight history.
	 * Will give the step index and object as argument.
	 * @param {((idx: number, step: object) => {})} cb The callback to invoke when a step ends.
	 */
	set onStepEnd(cb) {
		this._settings.onStepEnd = cb;
	}

	/**
	 * Registers a callback firing once the fight starts.
	 * @param {(() => {})} cb The callback to invoke when the fight starts.
	 */
	set onFightStart(cb) {
		this._settings.onFightStart = cb;
	}

	/**
	 * Registers a callback firing once the fight ends.
	 * @param {(() => {})} cb The callback to invoke when the fight ends.
	 */
	set onFightEnd(cb) {
		this._settings.onFightEnd = cb;
	}

	/**
	 * Registers a callback firing every time a fighter or its portrait is clicked.
	 * Will give the fighter idx as parameter.
	 * @param {((idx: number) => {})} cb The callback to invoke when a fighter is clicked.
	 */
	set onFighterClick(cb) {
		this._settings.onFighterClick = cb;
	}

	/**
	 * Registers a callback firing every time the status of a fighter changes.
	 * Will give the status idx and the list of its status as parameters.
	 * @param {((idx: number, status: string[]) => {})} cb The callback to invoke when there is a change of status on a fighter.
	 */
	set onStatusChange(cb) {
		this._settings.onStatusChange = cb;
	}

	/**
	 * Registers a callback firing every time the life of a fighter changes.
	 * Will give the fighter and its current life as parameters.
	 * @param {((idx: number, life: number[]) => {})} cb The callback to invoke when the life of a fighter changes.
	 */
	set onLifeChange(cb) {
		this._settings.onLifeChange = cb;
	}

	/**
	 * Registers a callback firing every time a fighter dies.
	 * @param {((idx: number) => {})} cb The callback to invoke when a fighter dies.
	 */
	set onDeath(cb) {
		this._settings.onDeath = cb;
	}
}
