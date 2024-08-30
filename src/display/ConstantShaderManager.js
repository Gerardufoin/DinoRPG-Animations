// @ts-check
import { GlowFilter } from '@pixi/filter-glow';
import { BlurFilter, ColorMatrixFilter, Filter } from 'pixi.js';
import { offsetShader } from './shaders/ColorOffsetShader.js';
import { PixiHelper } from './PixiHelper.js';

/**
 * This class allows to instantiate constant shaders only once.
 * "Constant" shaders are shaders which do not change over time and are constant through the execution of the program.
 * When this is the case, the same shader can and must be reused every time an element needs a similar shader.
 */
export class ConstantShaderManager {
	/**
	 * The storage for the glow shaders.
	 * @type {{distance: number, color: number, outerStrengh: number, innerStrengh: number, quality: number, filter: GlowFilter, padding: number}[]}
	 */
	static glowShaderStorage = [];
	/**
	 * The storage for the blur shaders.
	 * @type {{blurX: number, blurY: number, quality: number, filter: BlurFilter}[]}
	 */
	static blurShaderStorage = [];
	/**
	 * The storage for the color offset shaders.
	 * @type {{or: number, og: number, ob: number, mr: number, mg: number, mb: number, filter: Filter}[]}
	 */
	static colorOffsetShaderStorage = [];
	/**
	 * The storage for the adjust color shaders.
	 * @type {{brightness: number, saturation: number, contrast: number, hue: number, filter: ColorMatrixFilter}[]}
	 */
	static adjustColorShaderStorage = [];

	/**
	 * Gets or creates a constant glow shader with the given parameters.
	 * This glow shader must never be modified once instantiated.
	 * @param {Partial<import('@pixi/filter-glow').GlowFilterOptions>} opt Options used to create the glow filter.
	 * @param {number} padding The padding for the glow filter if it is cut off.
	 * @returns {GlowFilter} The resulting glow filter.
	 */
	static getGlowFilter(opt, padding = undefined) {
		for (const g of ConstantShaderManager.glowShaderStorage) {
			if (
				g.distance === opt.distance &&
				g.color === opt.color &&
				g.quality === opt.quality &&
				g.outerStrengh === opt.outerStrength &&
				g.innerStrengh === opt.innerStrength &&
				g.padding === padding
			) {
				return g.filter;
			}
		}
		const filter = new GlowFilter(opt);
		if (padding) {
			filter.padding = padding;
		}
		ConstantShaderManager.glowShaderStorage.push({
			distance: opt.distance,
			color: opt.color,
			quality: opt.quality,
			outerStrengh: opt.outerStrength,
			innerStrengh: opt.innerStrength,
			padding: padding,
			filter: filter
		});
		return filter;
	}

	/**
	 * Gets or creates a constant blur filter with the given parameters.
	 * This blur shader must never be modified once instantiated.
	 * @param {number} blurX The strength of the horizontal blur. 8 by default.
	 * @param {number | undefined} blurY The strength of the vertical blur. Same value as blurX if undefined.
	 * @param {number} quality The quality of the blur. 4 if undefined.
	 * @returns {BlurFilter} The resulting blur filter.
	 */
	static getBlurFilter(blurX = 8, blurY = undefined, quality = 4) {
		blurY ??= blurX;
		for (const b of ConstantShaderManager.blurShaderStorage) {
			if (b.blurX === blurX && b.blurY === blurY && b.quality === quality) {
				return b.filter;
			}
		}
		const filter = new BlurFilter(blurX, quality);
		filter.blurX = blurX;
		filter.blurY = blurY;
		ConstantShaderManager.blurShaderStorage.push({
			blurX: blurX,
			blurY: blurY,
			quality: quality,
			filter: filter
		});
		return filter;
	}

	/**
	 * Gets or creates a constant color offset filter with the given parameters.
	 * This color offset shader must never be modified once instantiated.
	 * @param {number} or The red offset of the filter. 0 by default.
	 * @param {number} og The green offset of the filter. 0 by default.
	 * @param {number} ob The blue offset of the filter. 0 by default.
	 * @param {number} mr The red multiplier of the filter. 1 by default.
	 * @param {number} mg The green multiplier of the filter. 1 by default.
	 * @param {number} mb The blue mutliplier of the filter. 1 by default.
	 * @returns {Filter} The resulting color offset filter.
	 */
	static getColorOffsetFilter(or = 0, og = 0, ob = 0, mr = 1, mg = 1, mb = 1) {
		for (const c of ConstantShaderManager.colorOffsetShaderStorage) {
			if (c.or === or && c.og === og && c.ob === ob && c.mr === mr && c.mg === mg && c.mb === mb) {
				return c.filter;
			}
		}
		const filter = new Filter(undefined, offsetShader, {
			offset: new Float32Array([or, og, ob]),
			mult: new Float32Array([mr, mg, mb])
		});
		ConstantShaderManager.colorOffsetShaderStorage.push({
			or: or,
			og: og,
			ob: ob,
			mr: mr,
			mg: mg,
			mb: mb,
			filter: filter
		});
		return filter;
	}

	/**
	 * Gets or creates a constant AdjustColor filter with the given parameters.
	 * This adjust color shader must never be modified once instantiated.
	 * This uses the AdjustColor from Flash.
	 * @param {number} brightness The change in brigthness. 0 by default.
	 * @param {number} contrast The change in contrast. 0 by default.
	 * @param {number} saturation The change in saturation. 0 by default.
	 * @param {number} hue The rotation of the hue (360°). 0 by default.
	 * @param {boolean} flash If true, this uses the AdjustColorFilter version from Flash. In this case, the parameters are between -100 and 100.
	 * If false, this uses the AdjustColorFilter version from Motion Twin. In this case, the parameters are between -1 and 1.
	 * @returns {ColorMatrixFilter} The resulting adjust color filter.
	 */
	static getAdjustColorFilter(brightness = 0, contrast = 0, saturation = 0, hue = 0, flash = true) {
		for (const c of ConstantShaderManager.adjustColorShaderStorage) {
			if (
				c.brightness === brightness &&
				c.contrast === contrast &&
				c.saturation === saturation &&
				c.hue === hue
			) {
				return c.filter;
			}
		}
		const filter = flash
			? PixiHelper.adjustColorFilter(brightness, contrast, saturation, hue)
			: PixiHelper.adjustColorFilterMT(brightness, contrast, saturation, hue);
		ConstantShaderManager.adjustColorShaderStorage.push({
			brightness: brightness,
			contrast: contrast,
			saturation: saturation,
			hue: hue,
			filter: filter
		});
		return filter;
	}
}
