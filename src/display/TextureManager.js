// @ts-check
import { Texture } from 'pixi.js';
import { decompressFromBase64 } from 'lz-string';
/**
 * Static class managing the textures.
 * Will only load a specific file once and then store the reference to the texture.
 */
export class TextureManager {
	/**
	 * Change the base scale of the SVG being loaded, which will then be scaled back down.
	 * Too high a scale will start becoming detrimental to the rendering when scaled back.
	 * 2 or 3 seems to give the best result.
	 * @type {number}
	 */
	static DEFAULT_RESOLUTION = 2;

	/**
	 * Returns a PixiJS Texture from the compressed reference data passed as parameter.
	 * @param {{jpg?: string, png?: string, svg?: string, webp?: string}} data Object containing the data compressed to base64 with LZ-String.
	 * @param {number} scale The scale of the texture, needed at load time for SVG textures. Ignored if the reference is not an SVG.
	 * @param {number} resolution The resolution is used to upscale an SVG without impacting the scale parameter which is used to reduce the stroke size. 1 by default.
	 * @returns {Texture} The PixiJS texture based on the image data and scale.
	 */
	static getTextureFromCompressedReference(data, scale = 1, resolution = 1) {
		scale = scale <= 0 ? 1 : scale;
		let scl = scale * resolution;
		let texture = undefined;
		if (data.svg) {
			texture = Texture.from(
				decompressFromBase64(data.svg).replace(
					/stroke-width="1"/g,
					`stroke-width="${Math.round((1 / scale) * 100) / 100}"`
				) + `<!--${scl}-->`,
				{
					resourceOptions: { scale: scl }
				}
			);
		} else if (data.jpg) {
			return Texture.from('data:image/jpg;base64,' + decompressFromBase64(data.jpg));
		} else if (data.png) {
			return Texture.from('data:image/png;base64,' + decompressFromBase64(data.png));
		} else if (data.webp) {
			return Texture.from('data:image/webp;base64,' + decompressFromBase64(data.webp));
		}
		return texture;
	}
}
