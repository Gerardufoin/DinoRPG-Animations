// @ts-check

import { Resource, Texture, Sprite } from 'pixi.js';

/**
 * Wrapper for the Sprite class of PixiJS for convenience.
 *
 * AllowS to have an onLoad method, either firing immediately if the texture is loaded, or on('loaded) otherwise.
 */
export class Asset extends Sprite {
	/**
	 * The Asset object is a wrapper for the class Sprite of PixiJS.
	 * @param {Texture<Resource>} texture The texture used to instantiate Sprite.
	 */
	constructor(texture) {
		super(texture);
	}

	/**
	 * Calls the given callback once the texture is loaded.
	 * @param {() => void} fn The callback function to fire once the texture is loaded or immediately otherwise.
	 */
	onLoad(fn) {
		if (this.texture.valid) {
			fn();
		} else {
			this.texture.baseTexture.on('loaded', fn);
		}
	}
}
