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

/**
 * Create a fight scene to render the history of a fight for DinoRPG.
 *
 * Can be created using the legacy fight data used by Motion Twin, or the adapted JSON version used for this project.
 */
export class Fight {
	static FRAME_RATE = 32;
	/**
	 * The different actions available in the fight history.
	 */
	static Action = {
		Add: 0,
		Announce: 1,
		Object: 2,
		Lost: 3,
		Status: 4,
		NoStatus: 5,
		Regen: 6,
		Damages: 7,
		DamagesGroup: 8,
		Fx: 9,
		Dead: 10,
		Goto: 11,
		Return: 12,
		Pause: 13,
		Finish: 14,
		AddCastle: 15,
		TimeLimit: 16,
		CastleAttack: 17,
		Display: 18,
		Text: 19,
		Talk: 20,
		Escape: 21,
		MoveTo: 22,
		Flip: 23,
		SpawnToy: 24,
		DestroyToy: 25,
		Wait: 26,
		Log: 27,
		Notify: 28,
		Energy: 29,
		MaxEnergy: 30
	};

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
	 * Create a fight based on the data parameter.
	 * @param {{legacy_data?: string, bg?: string, history?: Array, debug?: boolean}} data Object containing the data describing a fight.
	 */
	constructor(data) {
		if (data.legacy_data) {
			this._legacyData = new HaxeUnserializer(decodeURIComponent(data.legacy_data)).unserialize();
			this._data = DAConverter.convert(this._legacyData);
		} else {
			this._data = data;
		}
		//console.log(JSON.stringify(data, null, 4));
		this._renderer = new Renderer({
			backgroundColor: 0xfce3bb,
			width: 488,
			height: 300
		});

		this._scene = new Scene(
			this._data.bg,
			{
				top: this._data.top ?? 0,
				bottom: this._data.bottom ?? 0,
				right: this._data.right ?? 0
			},
			data.debug
		);

		this._timer = new Timer(Fight.FRAME_RATE);
		this._timer.add(() => {
			this.update();
			this._renderer.render(this._scene);
		});
		this._timer.start();

		this._history = new History(this, this._scene, this._data.history);
		// TODO: DinoAnim does not need to load external ressource, as such it begins as soon as the page finishes loading.
		// A "Fake" loading screen will be needed to allow the page to render properly and let the player breath before the fight start.
		// This will also leave the time for Timer.tmod to adapt to the current frame rate.
		setTimeout(() => {
			this._history.playNext();
		}, 1000);
	}

	/**
	 * Update the States and the Scene.
	 * If waiting time is above 0, decrease it and play the next history action once finish.
	 */
	update() {
		this._history.updateStates(this._timer);
		this._scene.update(this._timer);
		if (this._waitingTime > 0) {
			this._waitingTime -= this._timer.tmod;
			if (this._waitingTime <= 0) {
				this._waitingTime = 0;
				this._history.playNext();
			}
		}
	}

	/**
	 * Get the fight canvas to add to a webpage.
	 * @returns {import("pixi.js").ICanvas} The canvas instance to add to the webpage.
	 */
	getDisplay() {
		return this._renderer.view;
	}

	/**
	 * Pause the action for the given number of frames.
	 * @param {number} frames The number of frames the pause has to last.
	 */
	pause(frames) {
		this._waitingTime = frames;
	}

	/**
	 * Get the fight data under MT format.
	 * @param {boolean} forceDAData Force the process to use the converted data as base, even if legacy data was passed at init.
	 * @returns {string} The serialized data to feed fight.swf.
	 */
	getMTFormat(forceDAData = false) {
		if (this._legacyData && !forceDAData) {
			return encodeURIComponent(new HaxeSerializer(this._legacyData).serialize());
		}
		return encodeURIComponent(new HaxeSerializer(MTConverter.convert(this._data)).serialize());
	}
}
