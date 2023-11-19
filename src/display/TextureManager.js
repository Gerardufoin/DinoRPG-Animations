// @ts-check
import { Texture } from 'pixi.js';
import { decompressFromBase64 } from 'lz-string';
/**
 * Static class managing the textures.
 * Will only load a specific file once and then store the reference to the texture.
 */
export class TextureManager {
	static textures = {};
	/**
	 * Change the base scale of the SVG being loaded, which will then be scaled back down.
	 * Too high a scale will start becoming detrimental to the rendering when scaled back.
	 * 2 or 3 seems to give the best result.
	 * @type {number}
	 */
	static RESOLUTION = 2;

	/**
	 * Returns a PixiJS Texture of the SVG file passed as parameter.
	 * @param {string} texturePath Path to the svg texture to load.
	 * @param {number} scale The scale of the texture, needed at load time for SVG textures.
	 * @returns {Texture} The PixiJS texture based on the SVG file and scale.
	 */
	static getTexture(texturePath, scale = 1) {
		let scl = (scale ?? 0) <= 0 ? 1 : scale;
		if (!TextureManager.textures[texturePath + scl]) {
			TextureManager.textures[texturePath + scl] = Texture.from(texturePath, {
				resourceOptions: { scale: scl * TextureManager.RESOLUTION }
			});
		}
		return TextureManager.textures[texturePath + scl];
	}

	/**
	 * Returns a PixiJS Texture of the SVG data passed as parameter.
	 * @param {string} data Raw SVG data compressed to base64 with LZ-String.
	 * @param {number} scale The scale of the texture, needed at load time for SVG textures.
	 * @returns {Texture} The PixiJS texture based on the SVG data and scale.
	 */
	static getTextureFromCompressedReference(data, scale = 1) {
		let scl = (scale ?? 0) <= 0 ? 1 : scale;
		return Texture.from(decompressFromBase64(data), {
			resourceOptions: { scale: scl * TextureManager.RESOLUTION }
		});
	}
}
