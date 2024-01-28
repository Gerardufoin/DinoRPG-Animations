// @ts-check

import { ColorMatrixFilter, Filter, Matrix } from 'pixi.js';
import { offsetShader } from './shaders/ColorOffsetShader.js';

/**
 * Adds a few helpful methods to help with PixiJS manipulations.
 */
export class PixiHelper {
	/**
	 * Return a PixiJS Matrix using the parameters of the given object and the scale desired.
	 * @param {object} obj Object containing the necessary parameters of a transform Matrix.
	 * @param {number} scale Scale to apply to the matrix.
	 * @returns {Matrix} A PixiJS Matrix instantiated using the input and the scale.
	 */
	static matrixFromObject(obj, scale = 1) {
		return new Matrix(obj.a ?? 1, obj.b ?? 0, obj.c ?? 0, obj.d ?? 1, (obj.tx ?? 0) * scale, (obj.ty ?? 0) * scale);
	}

	/**
	 * Return the number value clamped between min and max.
	 * @param {number} min The lower limit of the clamp.
	 * @param {number} value The value to clamp.
	 * @param {number} max The upper limit of the clamp.
	 * @returns {number} The clamped value.
	 */
	static mm(min, value, max) {
		return Math.min(Math.max(min, value), max);
	}

	/**
	 * Convert an AdjustColorFilter from Flash into a ColorMatrixFilter for PixiJS.
	 * @param {number} brightness The change of brightness, between -100 and 100.
	 * @param {number} contrast The change of contrast, between -100 and 100.
	 * @param {number} saturation The change for the saturation, between -100 and 100.
	 * @param {number} hue The change of the hue, rotation over 360°.
	 * @returns {ColorMatrixFilter} The resulting ColorMatrixFilter.
	 */
	static adjustColorFilter(brightness, contrast, saturation, hue) {
		const matrix = new ColorMatrixFilter();
		matrix.brightness((PixiHelper.mm(-100, brightness, 100) + 100) / 100, true);
		matrix.contrast(PixiHelper.mm(-100, contrast, 100) / 100, true);
		matrix.saturate(PixiHelper.mm(-100, saturation, 100) / 100, true);
		matrix.hue(hue, true);
		return matrix;
	}

	/**
	 * Create a ColorOffsetFilter based on the given parameters.
	 * @param {number} r The red offset.
	 * @param {number} g The green offset.
	 * @param {number} b The blue offset.
	 * @param {number} mr The red multiplier. 1 by default.
	 * @param {number} mg The green multiplier. 1 by default.
	 * @param {number} mb The blue multiplier. 1 by default.
	 * @returns {Filter} The PixiJS filter using the ColorOffset shader.
	 */
	static colorOffsetFilter(r, g, b, mr = 1, mg = 1, mb = 1) {
		return new Filter(undefined, offsetShader, {
			offset: new Float32Array([r, g, b]),
			mult: new Float32Array([mr, mg, mb])
		});
	}
}
