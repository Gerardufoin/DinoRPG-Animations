// @ts-check
// https://github.com/motion-twin/WebGamesArchives/tree/main/DinoRPG/gfx/fight
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
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
		AddCastle: 1,
		MoveTo: 2,
		Damages: 3,
		DamagesGroup: 4,
		CastleAttack: 5,
		Return: 6,
		Dead: 7,
		Lost: 8,
		Escape: 9,
		Finish: 10,
		Energy: 11,
		MaxEnergy: 12,
		Pause: 13,
		Announce: 14,
		Goto: 15,
		Regen: 16,
		Object: 17,
		Fx: 18,
		Status: 19,
		NoStatus: 20,
		Display: 21,
		TimeLimit: 22,
		Talk: 23,
		Text: 24,
		Flip: 25,
		SpawnToy: 26,
		DestroyToy: 27,
		Wait: 28,
		Log: 29,
		Notify: 30
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
