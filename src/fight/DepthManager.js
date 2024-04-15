// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Scene.hx

import { Container } from 'pixi.js';
import { Timer } from './Timer.js';
import { Sprite } from './Sprite.js';

export const Layers = {
	Scene: {
		BG: 0,
		SHADE: 1,
		CASTLE: 2,
		FIGHTERS: 3,
		EFFECTS: 4,
		PARTS: 5,
		BG_FRONT: 6,
		INTER: 7,
		COLUMNS: 8,
		LOADING: 9,
		DEBUG: 10,
		SETTINGS: 11
	},
	Fighter: {
		BACK: 0,
		BODY: 1,
		STATUS: 2,
		FRONT: 3,
		STATUS_ICON: 4,
		FX: 5
	}
};

/**
 * A DepthManager is comprised of multiple layers and allows the possibility to add Sprite/Containers to the desired layers.
 */
export class DepthManager extends Container {
	/**
	 * Layers of the DepthManager based on the required amount at initialization.
	 * @type {{container: Container, sprites: Sprite[]}[]}
	 */
	_layers = [];

	/**
	 * Create a new depth manager with the given number of layers.
	 * @param {number} layers The number of layers to instantiate.
	 */
	constructor(layers) {
		super();
		for (let i = 0; i < layers; ++i) {
			this._layers.push({
				container: new Container(),
				sprites: []
			});
			this.addChild(this._layers[i].container);
		}
	}

	/**
	 * Set the desired layer as sortable.
	 * A sortable layer will let PixiJS sort the children based on their z-index.
	 * @param {number} layerId The desired layer to set as sortable.
	 */
	setSortableLayer(layerId) {
		if (layerId < this._layers.length) {
			this._layers[layerId].container.sortableChildren = true;
		}
	}

	/**
	 * Update all the Sprites in the layers and remove the deleted Sprites.
	 * @param {Timer} timer The fight Timer containing the elasped time.
	 */
	update(timer) {
		this._layers.map((l) => {
			l.sprites.map((s) => {
				s.update(timer);
			});
			// Filter the deleted Sprites separately from the update in case the update added new Sprites.
			l.sprites = l.sprites.filter((s) => {
				if (s.isDeleted) {
					l.container.removeChild(s.getRootContainer());
					return false;
				}
				return true;
			});
		});
	}

	/**
	 * Adds a Sprite to the specified layer.
	 * The Sprite will then be updated with the DepthManager.
	 * @param {Sprite} sprite The Sprite to add.
	 * @param {number} layer The layer where to add the Sprite.
	 */
	addSprite(sprite, layer) {
		if (layer < this._layers.length) {
			this._layers[layer].container.addChild(sprite.getRootContainer());
			this._layers[layer].sprites.push(sprite);
		} else {
			console.error(
				`[AddSprite]: Sprite id ${sprite.spriteId} was added to the layer ${layer} which does not exists.`
			);
		}
	}

	/**
	 * Adds a PixiJS Container to a specific layer.
	 * @param {Container} cont The Container to add to the layer.
	 * @param {number} layer The layer where to add the Container.
	 */
	addContainer(cont, layer) {
		if (layer < this._layers.length) {
			this._layers[layer].container.addChild(cont);
		} else {
			console.error(`[AddContainer]: A container was added to the layer ${layer} which does not exist.`);
		}
	}

	/**
	 * Removes a PixiJS Container from a specific layer.
	 * @param {Container} cont The Container to remove from the layer.
	 * @param {number} layer The layer from which to remove the Container.
	 */
	removeContainer(cont, layer) {
		if (layer < this._layers.length) {
			this._layers[layer].container.removeChild(cont);
		} else {
			console.error(`[RemoveContainer]: Layer ${layer} does not exist.`);
		}
	}

	/**
	 * Offset the specified layer position by an xy value.
	 * @param {number} x The x offset value.
	 * @param {number} y The y offset value.
	 * @param {number} layer The layer to offset.
	 */
	offsetLayer(x, y, layer) {
		if (layer < this._layers.length) {
			this._layers[layer].container.x += x;
			this._layers[layer].container.y += y;
		} else {
			console.error(`[offsetLayer]: Layer ${layer} does not exist.`);
		}
	}

	/**
	 * Get the container of the given layer.
	 * @param {number} layer The desired layer.
	 * @returns {Container | null} The container of the desired layer, or null if the layer does not exist.
	 */
	getLayer(layer) {
		if (layer < this._layers.length) {
			return this._layers[layer].container;
		}
		console.error(`[getLayer]: Layer ${layer} does not exist.`);
		return null;
	}
}
