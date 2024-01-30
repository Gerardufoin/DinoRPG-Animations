// @ts-check
// Color related functions: https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe3/mt/flash/Color.hx
import { Color, ColorMatrixFilter, Filter, Matrix } from 'pixi.js';
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

	/**
	 * Get a color from the rainbow based on the given coefficient.
	 * If no coefficient is given, the color is random.
	 * @param {number} c Coefficient of the color.
	 * @returns {Color} The color from the rainbow.
	 */
	static getRainbow(c = undefined) {
		if (c === undefined) {
			c = Math.random();
		}
		const a = [0.0, 0.0, 0.0];
		const part = (1 / 3) * 2;
		for (let i = 0; i < 3; ++i) {
			let v = part + i * 2 * part - c;
			// hMod from https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/bumdum/Lib.hx
			while (v > 0.5) v -= 1;
			while (v < -0.5) v += 1;
			a[i] = Math.min(1.5 - Math.abs(v) * 3, 1);
		}
		return new Color({ r: a[0] * 255, g: a[1] * 255, b: a[2] * 255 });
	}

	/**
	 * Merge two colors based on the coefficient.
	 * For example a coefficient of 0.2 will keep 80% of the first color and 20% of the second one.
	 * @param {Color} col1 The first color to merge.
	 * @param {Color | number| string} col2 The second color to merge.
	 * @param {number} c Coefficient used to merge the colors. 0.5 by default.
	 * @returns {Color} The new merged color.
	 */
	static mergeCol(col1, col2, c = 0.5) {
		if (!(col2 instanceof Color)) {
			col2 = new Color(col2);
		}
		return new Color({
			r: Math.round((col1.red * c + col2.red * (1 - c)) * 255),
			g: Math.round((col1.green * c + col2.green * (1 - c)) * 255),
			b: Math.round((col1.blue * c + col2.blue * (1 - c)) * 255)
		});
	}
}
