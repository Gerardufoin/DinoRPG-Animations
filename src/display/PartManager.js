// @ts-check
import { Sprite, Container, Matrix, BlurFilter } from 'pixi.js';
import { TextureManager } from './TextureManager.js';

/**
 * Static class used to instantiate a part of a dino.
 * Dinos' parts are composed of multiple sprite, displayed or not depending on the numbers making up the dino.
 */
export class PartManager {
	/**
	 * The start of the color indexes in the dino customization array.
	 * Fixed number of value 10 based on the SWF file.
	 * @type {number}
	 */
	static pMax = 10;

	/**
	 * Create a part of a dino given its setting, customization array and color palette.
	 * @param {*} partsList Details of the part of the dino, comprised of multiple sub-parts.
	 * @param {Array} partsDetail Customization array comprised of multiple integer deciding which sub-part of the dino will be used.
	 * @param {Array} palette Color palette comprised of 4 arrays (col0-3).
	 * @param {string} assetPath Path to the assets of the current part.
	 * @param {number} scale Scale of the dino to instantiate. Needed to instantiate the SVG.
	 * @returns {Container} A PixiJS container representing the part and all its sub-parts.
	 */
	static createPart(partsList, partsDetail, palette, assetPath, scale = 1) {
		let container = new Container();
		for (let part of partsList) {
			let sprite = PartManager.getSubPart(part, partsDetail, palette, assetPath, scale);
			if (sprite) {
				container.addChild(sprite);
			}
		}
		return container;
	}

	// Remove this whole things later if proven that we don't need to deal with size manupulation post texture loading.
	/**
	 * Called once the SVG has finished loading.
	 * @param {Sprite} sprite Sprite using the SVG which just loaded.
	 */
	static setSpriteTransform(sprite) {
		sprite.visible = true;
	}

	/**
	 * Generate a sub-part for a part of the dino.
	 * Sub-part will for example be accessories, hairs, specials, etc.
	 * Will also be used to generate non conventional sprites like the shadows.
	 * @param {*} part The sub-part being created.
	 * @param {Array} partsDetail Customization array of the dino.
	 * @param {Array} palette Color palette comprised of 4 arrays (col0-3).
	 * @param {string} assetPath The path to the part assets.
	 * @param {number} scale The scale of the part, needed to instantiate the SVG.
	 * @returns {Container | null} A PixiJS container representing the sub-part, or null if the sub-part is not valid for this customization.
	 */
	static getSubPart(part, partsDetail, palette, assetPath, scale) {
		if (part.ref) {
			if (part.special && (partsDetail.length <= 15 || partsDetail[15] <= 0)) {
				return null;
			}
			const texture = TextureManager.getTexture(assetPath + part.ref, scale);
			const sprite = Sprite.from(texture);
			sprite.scale.set(1 / TextureManager.RESOLUTION);
			// TODO: Remove later if texture loading is not required
			/*sprite.visible = false;
			if (texture.valid) {
				PartManager.setSpriteTransform(sprite);
			} else {
				texture.on('update', () => {
					PartManager.setSpriteTransform(sprite);
				});
			}*/
			if (part.colorIdx !== undefined) {
				let pal = palette[part.colorIdx];
				sprite.tint = pal[partsDetail[PartManager.pMax + part.colorIdx] % pal.length];
			}
			if (part.blend) {
				sprite.blendMode = part.blend;
			}
			if (part.alpha) {
				sprite.alpha = part.alpha;
			}
			if (part.blur) {
				const blurFilter = new BlurFilter();
				blurFilter.blurX = part.blur.x ?? 0;
				blurFilter.blurY = part.blur.y ?? 0;
				sprite.filters = [blurFilter];
			}
			// Transformation are not directly applied to the sprite so it can be scaled for resolution purposes
			const localTransform = new Container();
			localTransform.addChild(sprite);
			localTransform.transform.setFromMatrix(
				// Matrix created by multiplying the SWF transform with the SVG transform (offset)
				new Matrix(
					part.transform?.a ?? 1,
					part.transform?.b ?? 0,
					part.transform?.c ?? 0,
					part.transform?.d ?? 1,
					((part.transform?.a ?? 1) * -(part.offset?.x ?? 0) +
						(part.transform?.c ?? 0) * -(part.offset?.y ?? 0) +
						(part.transform?.tx ?? 0)) *
						scale,
					((part.transform?.b ?? 0) * -(part.offset?.x ?? 0) +
						(part.transform?.d ?? 1) * -(part.offset?.y ?? 0) +
						(part.transform?.ty ?? 0)) *
						scale
				)
			);
			return localTransform;
		} else if (part.partIdx !== undefined && part.frames !== undefined) {
			let idx = part.frames[partsDetail[part.partIdx] % part.frames.length];
			if (idx >= 0 && part.parts[idx]) {
				return PartManager.getSubPart(part.parts[idx], partsDetail, palette, assetPath, scale);
			}
		}
		return null;
	}
}
