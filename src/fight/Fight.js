// @ts-check
// https://github.com/motion-twin/WebGamesArchives/tree/main/DinoRPG/gfx/fight
import { Renderer, Ticker } from 'pixi.js';
import { HaxeUnserializer } from './data/HaxeUnserializer.js';
import { Converter } from './data/Converter.js';
import { Scene } from './Scene.js';

/**
 * Create a fight scene to render the history of a fight for DinoRPG.
 *
 * Can be created using the legacy fight data used by Motion Twin, or the adapted JSON version used for this project.
 */
export class Fight {
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
	 * Create a fight based on the data parameter.
	 * @param {{legacy_data?: string, bg?: string, history?: Array}} data Object containing the data descriving a fight.
	 */
	constructor(data) {
		if (data.legacy_data) {
			data = Converter.convert(new HaxeUnserializer(decodeURIComponent(data.legacy_data)).unserialize());
		}
		console.log(JSON.stringify(data, null, 4));
		this._renderer = new Renderer({
			backgroundColor: 0xfce3bb,
			width: 488,
			height: 300
		});
		this._scene = new Scene(data.bg);

		// setup ticker
		var ticker = new Ticker();
		ticker.add(() => {
			this._renderer.render(this._scene);
		});
		ticker.start();
	}

	/**
	 * Get the fight canvas to add to a webpage.
	 * @returns {import("pixi.js").ICanvas} The canvas instance to add to the webpage.
	 */
	getDisplay() {
		return this._renderer.view;
	}
}
