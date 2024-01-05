// @ts-check

import { Matrix } from 'pixi.js';

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
}
