// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Container } from 'pixi.js';
import { ref as gfx } from '../gfx/references.js';
import { TextureManager } from '../display/TextureManager.js';
import { Asset } from '../display/Asset.js';
import { Fighter } from './Fighter.js';

/**
 * The fight scene containing all the different layers to display.
 *
 * Will contain every displayable elements needed to display the fight.
 */
export class Scene extends Container {
	static MARGIN = 10;
	_layers = {
		bg: new Container(),
		shade: new Container(),
		castle: new Container(),
		fighters: new Container(),
		effects: new Container(),
		parts: new Container(),
		bgFront: new Container(),
		inter: new Container(),
		columns: new Container(),
		loading: new Container()
	};
	_top = 0.0;
	_bottom = 0.0;
	/**
	 * Contains all the fighters currently instantiated and contained in the fighters layer.
	 * @type {Fighter[]}
	 */
	_fighters = [];

	/**
	 * Create a new scene where the fight will happen.
	 * @param {string} background The key to the background reference picture.
	 * @param {number} top Delimit the limit for the top part of the ground.
	 * @param {number} bottom Delimit the limit for the bottom part of the ground.
	 */
	constructor(background, top, bottom) {
		super();
		this._top = top;
		this._bottom = bottom;
		for (const k in this._layers) {
			this.addChild(this._layers[k]);
		}
		this.setBackground(background);
		this.createColumns();
	}

	/**
	 * Set the scene background.
	 * @param {string} key The background key to use in gfx.background.
	 */
	setBackground(key) {
		if (key && gfx.background[key]) {
			const texture = TextureManager.getTextureFromCompressedReference(gfx.background[key]);
			const sprite = new Asset(texture);
			sprite.y = -Scene.MARGIN;
			sprite.onLoad(() => {
				sprite.x = 488 / 2 - sprite.width / 2;
			});
			this._layers.bg.addChild(sprite);
		}
	}

	/**
	 * Create the columns bordering the scenes.
	 */
	createColumns() {
		const texture = TextureManager.getTextureFromCompressedReference(gfx.scene.mcColumn);
		this._layers.columns.addChild(new Asset(texture));
		const col2 = new Asset(texture);
		col2.onLoad(() => {
			col2.x = 488 - col2.width;
		});
		this._layers.columns.addChild(col2);
	}

	/**
	 * Add a fighter to the scene.
	 * @param {Fighter} fighter The figter to add.
	 */
	addFighter(fighter) {
		this._fighters.push(fighter);
		this._layers.fighters.addChild(fighter.body);
	}

	/**
	 * Convert a global y coordinate into a scene y coordinate.
	 * @param {number} y The global y value.
	 * @returns {number} The global y value converted into scene coordinate.
	 */
	getY(y) {
		return this._top + y * 0.5;
	}
}
