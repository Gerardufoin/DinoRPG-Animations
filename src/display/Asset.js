// @ts-check

import { Sprite } from 'pixi.js';
import { TextureManager } from './TextureManager.js';

/**
 * Wrapper for the Sprite class of PixiJS for convenience.
 *
 * AllowS to have an onLoad method, either firing immediately if the texture is loaded, or on('loaded) otherwise.
 */
export class Asset extends Sprite {
	/**
	 * The Asset object is a wrapper for the class Sprite of PixiJS.
	 * It takes a reference object as parameter and instantiate the texture, moving it using the offset if needed.
	 * @param {{jpg?: string, png?: string, svg?: string, offset?: {x: number, y: number}}} reference The reference to the compressed texture used to instantiate the Sprite.
	 */
	constructor(reference) {
		const texture = TextureManager.getTextureFromCompressedReference(reference);
		super(texture);
		this.x = -(reference.offset?.x ?? 0);
		this.y = -(reference.offset?.y ?? 0);
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
