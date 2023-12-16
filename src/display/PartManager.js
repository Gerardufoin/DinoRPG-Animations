// @ts-check
import { Sprite, Matrix, BlurFilter, Filter } from 'pixi.js';
import { GlowFilter } from '@pixi/filter-glow';
import { TextureManager } from './TextureManager.js';
import { offsetShader } from './shaders/ColorOffsetShader.js';
import { Animation } from './Animation.js';
import { PixiHelper } from './PixiHelper.js';

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
	 * @param {Array} partsList Details of the part of the dino, comprised of multiple sub-parts.
	 * @param {Array} partsDetail Customization array comprised of multiple integer deciding which sub-part of the dino will be used.
	 * @param {Array} palette Color palette comprised of 4 arrays (col0-3).
	 * @param {string} assetPath Path to the assets of the current part.
	 * @param {number} scale Scale of the dino to instantiate. Needed to instantiate the SVG.
	 * @returns {Animation} A part of the dino containing all its sub-parts and possible sub-animations.
	 */
	static createPart(partsList, partsDetail, palette, assetPath, scale = 1) {
		let part = new Animation();
		for (const element of partsList) {
			let sprite = PartManager.getSubPart(element, partsDetail, palette, assetPath, scale);
			if (sprite) {
				part.addAnim(sprite);
			}
		}
		return part;
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
	 * @param {Matrix | undefined} parentTransform Transform of the parent, if any. Will be multiplied with the child transform and applied to the container.
	 * The object will be modified, send a clone if you don't want your object to change.
	 * @returns {Animation | null} A PixiJS container representing the sub-part, or null if the sub-part is not valid for this customization.
	 */
	static getSubPart(part, partsDetail, palette, assetPath, scale, parentTransform = undefined) {
		parentTransform = parentTransform ?? PixiHelper.matrixFromObject({}, scale);
		if (part.ref) {
			// If the part has a reference, it is final and the element can be instantiated
			return PartManager.getElement(part, partsDetail, palette, assetPath, scale, parentTransform);
		} else if (part.partIdx !== undefined && part.frames !== undefined) {
			// If the part has a partIdx, get the correct sub-part to instantiate
			let idx = part.frames[partsDetail[part.partIdx] % part.frames.length];
			// We add the current part transform to the parentTransform
			const currentTransform = parentTransform.clone();
			if (part.transform) {
				currentTransform.append(PixiHelper.matrixFromObject(part.transform, scale));
			}
			if (idx >= 0 && part.parts[idx]) {
				// Check if part is comprised of multiple layers or not
				if (!Array.isArray(part.parts[idx])) {
					return PartManager.getSubPart(
						part.parts[idx],
						partsDetail,
						palette,
						assetPath,
						scale,
						currentTransform.clone()
					);
				} else {
					const cont = new Animation();
					for (const p of part.parts[idx]) {
						const newPart = PartManager.getSubPart(
							p,
							partsDetail,
							palette,
							assetPath,
							scale,
							currentTransform.clone()
						);
						if (newPart) {
							cont.addAnim(newPart);
						}
					}
					return cont;
				}
			}
		} else if (part.animation && part.parts) {
			// If the part is an animation, set the animation and get its parts for instantiation
			let anim = new Animation();
			anim.setAnimation(part.animation);
			for (const pName in part.parts) {
				const element = PartManager.createPart(part.parts[pName], partsDetail, palette, assetPath, scale);
				if (element) {
					anim.addPart(pName, element);
				}
			}
			return anim;
		}
		return null;
	}

	/**
	 * Generate an element of the dino based on its information.
	 * An element must have a "ref" property referencing the asset to instantiate.
	 * @param {*} part The element being created. Has at least a "ref" property.
	 * @param {Array} partsDetail Customization array of the dino.
	 * @param {Array} palette Color palette comprised of 4 arrays (col0-3).
	 * @param {string} assetPath The path to the part assets.
	 * @param {number} scale The scale of the part, needed to instantiate the SVG.
	 * @param {Matrix | undefined} parentTransform Transform of the parent, if any. Will be multiplied with the child transform and applied to the container.
	 * @returns {Animation | null} A PixiJS container representing the element.
	 */
	static getElement(part, partsDetail, palette, assetPath, scale, parentTransform = undefined) {
		if (part.special && (partsDetail.length <= 15 || partsDetail[15] <= 0)) {
			return null;
		}
		const resolution = part.resolution ?? TextureManager.DEFAULT_RESOLUTION;
		let texture = TextureManager.getTextureFromCompressedReference(part.ref.svg, scale * resolution);
		const sprite = Sprite.from(texture);
		const filters = [];
		sprite.scale.set(1 / resolution);
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
			blurFilter.quality = part.blur.quality ?? 1;
			filters.push(blurFilter);
		}
		if (part.colorOffset || part.colorMultiplier) {
			filters.push(
				new Filter(undefined, offsetShader, {
					offset: new Float32Array([
						part.colorOffset?.r ?? 0,
						part.colorOffset?.g ?? 0,
						part.colorOffset?.b ?? 0
					]),
					mult: new Float32Array([
						part.colorMultiplier?.r ?? 1,
						part.colorMultiplier?.g ?? 1,
						part.colorMultiplier?.b ?? 1
					])
				})
			);
		}
		if (part.glow) {
			filters.push(
				new GlowFilter({
					distance: part.glow.distance ?? 1,
					color: part.glow.color,
					quality: part.glow.quality ?? 1,
					innerStrength: 0,
					outerStrength: part.glow.strength ?? 1
				})
			);
		}
		sprite.filters = filters;
		// Transformation are not directly applied to the sprite so it can be scaled for resolution purposes
		const localTransform = new Animation();
		localTransform.addChild(sprite);
		localTransform.transform.setFromMatrix(
			parentTransform.append(
				// Matrix created by multiplying the SWF transform with the SVG transform (offset)
				new Matrix(
					part.transform?.a ?? 1,
					part.transform?.b ?? 0,
					part.transform?.c ?? 0,
					part.transform?.d ?? 1,
					((part.transform?.a ?? 1) * -(part.ref?.offset?.x ?? 0) +
						(part.transform?.c ?? 0) * -(part.ref?.offset?.y ?? 0) +
						(part.transform?.tx ?? 0)) *
						scale,
					((part.transform?.b ?? 0) * -(part.ref?.offset?.x ?? 0) +
						(part.transform?.d ?? 1) * -(part.ref?.offset?.y ?? 0) +
						(part.transform?.ty ?? 0)) *
						scale
				)
			)
		);
		return localTransform;
	}
}
