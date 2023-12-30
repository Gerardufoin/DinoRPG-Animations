// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx
import { Container } from 'pixi.js';
import { ref as gfx } from '../gfx/references.js';
import { TextureManager } from '../display/TextureManager.js';
import { Asset } from '../display/Asset.js';

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
	/**
	 * Create a new scene where the fight will happen.
	 * @param {string} background The key to the background reference picture.
	 */
	constructor(background) {
		super();
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
}
