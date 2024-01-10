// @ts-check
// https://github.com/motion-twin/WebGamesArchives/tree/main/DinoRPG/gfx/fight
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx
import { Renderer, Ticker } from 'pixi.js';
import { HaxeUnserializer } from './data/HaxeUnserializer.js';
import { HaxeSerializer } from './data/HaxeSerializer.js';
import { DAConverter } from './data/DAConverter.js';
import { MTConverter } from './data/MTConverter.js';
import { Scene } from './Scene.js';
import { History } from './History.js';

/**
 * Create a fight scene to render the history of a fight for DinoRPG.
 *
 * Can be created using the legacy fight data used by Motion Twin, or the adapted JSON version used for this project.
 */
export class Fight {
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
	 * Data of the current fight under this project format.
	 * @type {object}
	 */
	_data;

	/**
	 * If waiting time is above 0, the game is paused.
	 * @type {number}
	 */
	_waitingTime = 0;

	/**
	 * Fight history manager.
	 * @type {History}
	 */
	_history;

	/**
	 * Create a fight based on the data parameter.
	 * @param {{legacy_data?: string, bg?: string, history?: Array}} data Object containing the data descriving a fight.
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
		this._scene = new Scene(this._data.bg, this._data.top ?? 0, this._data.bottom ?? 0);

		this._history = new History(this._scene, this._data.history);

		// setup ticker
		var ticker = new Ticker();
		ticker.add(() => {
			this.update();
			this._renderer.render(this._scene);
		});
		ticker.start();
		this._history.playNext();
	}

	update() {
		this._scene.update();
		this._history.updateStates();
		//updateSprites();
		if (this._waitingTime > 0) {
			this._waitingTime -= Ticker.shared.elapsedMS;
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
