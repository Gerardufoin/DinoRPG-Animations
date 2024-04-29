// @ts-check
// Color related functions: https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe3/mt/flash/Color.hx
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/bumdum9/Lib.hx
import { Color, ColorMatrixFilter, Filter, Matrix } from 'pixi.js';
import { offsetShader } from './shaders/ColorOffsetShader.js';
import { ColorMatrix } from './shaders/ColorMatrix.js';

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
	 * @param {ColorMatrixFilter} filter The filter whose matrix to set. If undefined, a new filter will be created.
	 * @returns {ColorMatrixFilter} The resulting ColorMatrixFilter.
	 */
	static adjustColorFilter(brightness, contrast, saturation, hue, filter = undefined) {
		const matrix = new ColorMatrix();
		matrix.adjustBrightness(PixiHelper.mm(-100, brightness, 100) / 100);
		matrix.adjustContrast(PixiHelper.mm(-100, contrast, 100) / 100);
		matrix.adjustSaturation(PixiHelper.mm(-100, saturation, 100) / 100);
		matrix.adjustHue(hue);
		filter ??= new ColorMatrixFilter();
		// @ts-ignore
		filter.matrix = matrix.matrix;
		return filter;
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
	 * A modulus of some kind. Not sure really.
	 * Ref: https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/bumdum/Lib.hx.
	 * @param {number} n The number to modulus.
	 * @param {number} mod The modulus value.
	 * @returns {number | null} The resulting operation or null if mod is 0.
	 */
	static hMod(n, mod) {
		if (!mod) return null;
		while (n > mod) n -= mod * 2;
		while (n < -mod) n += mod * 2;
		return n;
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
			v = PixiHelper.hMod(v, 0.5);
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

	/**
	 * Set a percentage of color on a ColorOffsetFilter.
	 * @param {Filter} filter The ColorOffsetFilter whose properties will be modified.
	 * @param {number} percent The percent of the given color to apply, between 0 and 100.
	 * @param {Color | number | string} color The given color.
	 * @param {number} inc Flat increment to add to the color.
	 */
	static setPercentColor(filter, percent, color, inc = 0) {
		if (!(color instanceof Color)) {
			color = new Color(color);
		}
		percent /= 100;
		const iPercent = 1 - percent;
		filter.uniforms.offset = new Float32Array([
			Math.round(percent * color.red * 255) + inc,
			Math.round(percent * color.green * 255) + inc,
			Math.round(percent * color.blue * 255) + inc
		]);
		filter.uniforms.mult = new Float32Array([iPercent, iPercent, iPercent]);
	}

	/**
	 * Creates a color gradient ranging from white->yellow->orange->red->black based on the given coefficient.
	 * Steps happens every 0.33 of the color change duration.
	 * First 0.33, blue goes from 100% to 0%.
	 * Next for the next 0.66, green goes from 100% to 0%.
	 * When reaching 0.825, red goes from 100% to 0% during the last 0.175.
	 * @param {number} coef The current progression of the gradient between 0 and 1.
	 * @param {number} speedR Changes how fast the red value fall. 1 by default.
	 * @param {number} speedG Changes how fast the green value fall. 1 by default.
	 * @param {number} speedB Changes how fast the blue value falls. 1 by default.
	 * @returns {Color} The current color of the fire gradient.
	 */
	static getFireColorGradient(coef, speedR = 1, speedG = 1, speedB = 1) {
		const step = 1 / 3;
		const coefB = Math.max(0, 1 - (coef / step) * speedB);
		const coefG = Math.max(0, 1 - (Math.max(0, coef - step) / (1 - step)) * speedG);
		const coefR = Math.max(0, 1 - (Math.max(0, coef - 2 * step) / (1 - 2 * step)) * speedR);
		return new Color({ r: 255 * coefR, g: 255 * coefG, b: 255 * coefB });
	}

	/**
	 * Get a probability adapted based on the elapsed time.
	 * For example, given a probability of 0.5 for tmod = 1 (0.5 each frame at the expected FPS),
	 * this will change the probability to accomodate the different frame rate, based on the formula x = 1 - Math.pow(1 - proba, tmod).
	 * @param {number} proba The expected proba every tmod (0-1).
	 * @param {number} tmod The current tmod value (will be capped between 0 and 1).
	 * @returns {boolean} Execute a random check on the resulting probability and returns true if the random succeded, false otherwise.
	 */
	static tmodRandom(proba, tmod) {
		tmod = PixiHelper.mm(0, tmod, 1);
		const p = 1 - Math.pow(1 - proba, tmod);
		return Math.random() <= p;
	}
}
