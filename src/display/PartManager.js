// @ts-check
import { Sprite, Matrix, Filter, Container } from 'pixi.js';
import { TextureManager } from './TextureManager.js';
import { Animation } from './Animation.js';
import { PixiHelper } from './PixiHelper.js';
import { ConstantShaderManager } from './ConstantShaderManager.js';

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
	 * @param {number} scaling Expected scaling of the part once in an animation.
	 * @returns {Animation} A part of the dino containing all its sub-parts and possible sub-animations.
	 */
	static createPart(partsList, partsDetail, palette, assetPath, scale = 1, scaling = 1) {
		let part = new Animation(scale);
		for (const element of partsList) {
			let sprite = PartManager.getSubPart(element, partsDetail, palette, assetPath, scale, scaling);
			if (sprite) {
				part.addAnim(sprite);
			}
		}
		return part;
	}

	/**
	 * Generate a sub-part for a part of the dino.
	 * Sub-part will for example be accessories, hairs, specials, etc.
	 * Will also be used to generate non conventional sprites like the shadows.
	 * @param {object} part The sub-part being created.
	 * @param {Array} partsDetail Customization array of the dino.
	 * @param {Array} palette Color palette comprised of 4 arrays (col0-3).
	 * @param {string} assetPath The path to the part assets.
	 * @param {number} scale The scale of the part, needed to instantiate the SVG.
	 * @param {number} scaling Expected scaling of the part once in an animation.
	 * @param {Matrix | undefined} parentTransform Transform of the parent, if any. Will be multiplied with the child transform and applied to the container.
	 * The object will be modified, send a clone if you don't want your object to change.
	 * @returns {Animation | null} A PixiJS container representing the sub-part, or null if the sub-part is not valid for this customization.
	 */
	static getSubPart(part, partsDetail, palette, assetPath, scale, scaling = 1, parentTransform = undefined) {
		parentTransform = parentTransform ?? PixiHelper.matrixFromObject({}, scale);
		if (part.ref) {
			// If the part has a reference, it is final and the element can be instantiated
			return PartManager.getElement(part, partsDetail, palette, assetPath, scale, scaling, parentTransform);
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
						scaling,
						currentTransform.clone()
					);
				} else {
					const cont = new Animation(scale);
					for (const p of part.parts[idx]) {
						const newPart = PartManager.getSubPart(
							p,
							partsDetail,
							palette,
							assetPath,
							scale,
							scaling,
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
			let anim = new Animation(scale);
			anim.setAnimation(part.animation);
			const partsScaling = PartManager.getAnimationScaling(part.animation);
			for (const pName in part.parts) {
				const element = PartManager.createPart(
					part.parts[pName],
					partsDetail,
					palette,
					assetPath,
					scale,
					scaling * (partsScaling[pName] ?? 1)
				);
				if (element) {
					anim.addPart(pName, element);
				}
			}
			if (part.transform) {
				anim.transform.setFromMatrix(PixiHelper.matrixFromObject(part.transform));
			}
			anim.filters = PartManager.createPartFilters(part);
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
	 * @param {number} scaling Expected scaling of the part once in an animation.
	 * @param {Matrix | undefined} parentTransform Transform of the parent, if any. Will be multiplied with the child transform and applied to the container.
	 * @returns {Animation | null} A PixiJS container representing the element.
	 */
	static getElement(part, partsDetail, palette, assetPath, scale, scaling, parentTransform = undefined) {
		if (!part.ref || (part.special && (partsDetail.length <= 15 || partsDetail[15] <= 0))) {
			return null;
		}

		const ref = part.ref instanceof Array ? part.ref[Math.floor(Math.random() * part.ref.length)] : part.ref;
		// Transformation are not directly applied to the sprite so it can be scaled for resolution purposes
		const localTransform = new Animation(scale);
		localTransform.transform.setFromMatrix(
			parentTransform.append(
				// Matrix created by multiplying the SWF transform with the SVG transform (offset)
				new Matrix(
					part.transform?.a ?? 1,
					part.transform?.b ?? 0,
					part.transform?.c ?? 0,
					part.transform?.d ?? 1,
					((part.transform?.a ?? 1) * -(ref.offset?.x ?? 0) +
						(part.transform?.c ?? 0) * -(ref.offset?.y ?? 0) +
						(part.transform?.tx ?? 0)) *
						scale,
					((part.transform?.b ?? 0) * -(ref.offset?.x ?? 0) +
						(part.transform?.d ?? 1) * -(ref.offset?.y ?? 0) +
						(part.transform?.ty ?? 0)) *
						scale
				)
			)
		);

		const resolution = part.resolution ?? TextureManager.DEFAULT_RESOLUTION;
		scaling *= Math.max(localTransform.scale.x, localTransform.scale.y);
		let texture = TextureManager.getTextureFromCompressedReference(ref, scale * scaling, resolution);
		const sprite = Sprite.from(texture);
		sprite.scale.set(1 / (resolution * scaling));

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
		sprite.filters = PartManager.createPartFilters(part);
		localTransform.addChild(sprite);
		return localTransform;
	}

	/**
	 * Creates the filters for a given part based on its properties.
	 * @param {object} part The part whose filters to create.
	 * @returns {Filter[] | undefined} The created filters or undefined it there is no filter.
	 */
	static createPartFilters(part) {
		const filters = [];

		if (part.blur) {
			filters.push(ConstantShaderManager.getBlurFilter(part.blur.x, part.blur.y, part.blur.quality));
		}
		if (part.colorOffset || part.colorMultiplier) {
			filters.push(
				ConstantShaderManager.getColorOffsetFilter(
					part.colorOffset?.r,
					part.colorOffset?.g,
					part.colorOffset?.b,
					part.colorMultiplier?.r,
					part.colorMultiplier?.g,
					part.colorMultiplier?.b
				)
			);
		}
		if (part.colorAdjust) {
			filters.push(
				ConstantShaderManager.getAdjustColorFilter(
					part.colorAdjust.brightness,
					part.colorAdjust.constrast,
					part.colorAdjust.saturation,
					part.colorAdjust.hue
				)
			);
		}
		if (part.glow) {
			filters.push(
				ConstantShaderManager.getGlowFilter(
					part.glow.distance,
					part.glow.color,
					part.glow.quality,
					part.glow.strength
				)
			);
		}
		return filters.length ? filters : undefined;
	}

	/**
	 * Transmute a transform into a scale.
	 * @param {{a: number, b: number, c: number, d: number}} tr The transform to convert.
	 * @returns {number} The resulting scale.
	 */
	static transformToScale(tr) {
		const container = new Container();
		container.transform.setFromMatrix(new Matrix(tr.a ?? 1, tr.b ?? 0, tr.c ?? 0, tr.d ?? 1));
		return Math.max(container.scale.x, container.scale.y);
	}

	/**
	 * Get the expected scaling for a single animation.
	 * @param {{id: string, callbacks?: object, expectedScaling?: object, frames: Array, anim?: object, offset?: number}} animation The animation to analyse.
	 * @param {{[id: string]: number} | {}} currentScaling The current scales for the parts.
	 * @returns {{[id: string]: number}} The expected scaling for each parts.
	 */
	static getAnimationScaling(animation, currentScaling = undefined) {
		const partsScaling = currentScaling ?? {};
		if (animation.anim) {
			animation = animation.anim;
		}
		// If a scaling is expected, take the expected scaling no matter what.
		if (animation.expectedScaling) {
			for (const k in animation.expectedScaling) {
				partsScaling[k] = animation.expectedScaling[k];
			}
		}
		for (const f of animation.frames) {
			for (const k in f) {
				if (partsScaling[k] === undefined) {
					partsScaling[k] = PartManager.transformToScale(f[k]);
				}
			}
		}
		return partsScaling;
	}

	/**
	 * Get the expected scaling for each part of the dino.
	 * @param {{[id: string]: {id: string, callbacks: object, frames: Array}}} animations The animation to analyse.
	 * @returns {{[id: string]: number} | {}} The expected scaling for each parts.
	 */
	static getAnimationsScaling(animations) {
		if (!animations) return {};
		let partsScaling = {};
		if (animations.stand) {
			partsScaling = PartManager.getAnimationScaling(animations.stand, partsScaling);
		}
		for (const p in animations) {
			if (p != 'stand') {
				partsScaling = PartManager.getAnimationScaling(animations[p], partsScaling);
			}
		}
		return partsScaling;
	}
}
