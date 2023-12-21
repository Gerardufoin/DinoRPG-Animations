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
	 * Number of textures currently loading.
	 * @type {number}
	 */
	static _pendingTextures = 0;

	/**
	 * Registered callbacks to be fired once all the textures have loaded.
	 * Will be emptied afterward.
	 */
	static _callbacks = [];

	/**
	 * Indicates if all the required textures have been loaded yet.
	 * @returns {boolean} True if all textures have loaded, false otherwise.
	 */
	static haveAllTexturesLoaded() {
		return TextureManager._pendingTextures == 0;
	}

	/**
	 * Add a callback to be fired once all textures have loaded.
	 * @param {Function} callback The callback to register.
	 */
	static registerCallback(callback) {
		this._callbacks.push(callback);
	}

	/**
	 * Execute all the registered callbacks and remove them.
	 */
	static executeCallbacks() {
		for (const f of TextureManager._callbacks) {
			f();
		}
		TextureManager._callbacks = [];
	}

	/**
	 * Returns a PixiJS Texture of the SVG data passed as parameter.
	 * @param {string} data Raw SVG data compressed to base64 with LZ-String.
	 * @param {number} scale The scale of the texture, needed at load time for SVG textures.
	 * @returns {Texture} The PixiJS texture based on the SVG data and scale.
	 */
	static getTextureFromCompressedReference(data, scale = 1) {
		let scl = (scale ?? 0) <= 0 ? 1 : scale;
		const texture = Texture.from(decompressFromBase64(data) + `<!--${scl}-->`, {
			resourceOptions: { scale: scl }
		});
		if (!texture.valid) {
			TextureManager._pendingTextures++;
			texture.baseTexture.on('loaded', () => {
				TextureManager._pendingTextures--;
				if (TextureManager._pendingTextures == 0) {
					TextureManager.executeCallbacks();
				}
			});
		}
		return texture;
	}
}
