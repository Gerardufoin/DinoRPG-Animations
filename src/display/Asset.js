// @ts-check

import { Sprite } from '@pixi/picture';
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
	 * @param {{jpg?: string, png?: string, webp?: string, svg?: string, offset?: {x: number, y: number}}} reference The reference to the compressed texture used to instantiate the Sprite.
	 * @param {number} scale Scale of tzhe texture to instantiate. Only applicable for SVG.
	 * @param {boolean} offset If true, apply the reference offset, if any. True by default.
	 */
	constructor(reference, scale = 1, offset = true) {
		super(TextureManager.getTextureFromCompressedReference(reference, scale));
		if (offset) {
			this.x = -(reference.offset?.x ?? 0) * scale;
			this.y = -(reference.offset?.y ?? 0) * scale;
		}
	}

	/**
	 * Calls the given callback once the texture is loaded.
	 * @param {() => void} fn The callback function to fire once the texture is loaded or immediately otherwise.
	 */
	set onLoad(fn) {
		if (this.texture.valid) {
			fn();
		} else {
			this.texture.baseTexture.on('loaded', fn);
		}
	}
}
