// @ts-check
// Allows the creation of a PixiJS ColorMatrixFilter based on the ColorMatrix of MT
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/flash/ColorMatrix.hx

/**
 * Creates a matrix for a ColorMatrixFilter based on the settings used by Flash and Motion Twin.
 */
export class ColorMatrix {
	// RGB value to luminance
	static R_LUM = 0.212671;
	static G_LUM = 0.71516;
	static B_LUM = 0.072169;

	// Flash contrast values for 0-100
	static FLASH_CONTRAST_VALUES = [
		0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11, 0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.2, 0.21, 0.22,
		0.24, 0.25, 0.27, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62,
		0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98, 1.0, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36,
		1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2.0, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3.0,
		3.2, 3.4, 3.6, 3.8, 4.0, 4.3, 4.7, 4.9, 5.0, 5.5, 6.0, 6.5, 6.8, 7.0, 7.3, 7.5, 7.8, 8.0, 8.4, 8.7, 9.0, 9.4,
		9.6, 9.8, 10.0
	];

	matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];

	/**
	 * Adjust the saturation of the matrix. This increases/decreases the saturation, this does not set it.
	 * @param {number} s The change in saturation value.
	 */
	adjustSaturation(s) {
		s += 1;
		const is = 1 - s;
		const irlum = is * ColorMatrix.R_LUM;
		const iglum = is * ColorMatrix.G_LUM;
		const iblum = is * ColorMatrix.B_LUM;
		const mat = [
			irlum + s,
			iglum,
			iblum,
			0,
			0, // r
			irlum,
			iglum + s,
			iblum,
			0,
			0, // g
			irlum,
			iglum,
			iblum + s,
			0,
			0, // b
			0,
			0,
			0,
			1,
			0 // a
		];
		this.concat(mat);
	}

	/**
	 * Adjusts the contrast of the matrix. This increases/decreases the contrast, this does not set it.
	 * @param {number} c The change in contrast.
	 */
	adjustContrast(c) {
		this.adjustContrastRGB(c, c, c);
	}

	/**
	 * Adjusts the contrast of the matrix for each RGB value independently.
	 * @param {number} r The change of contrast for the red.
	 * @param {number} g The change of contrast for the green.
	 * @param {number} b The change of contrast for the blue.
	 */
	adjustContrastRGB(r, g, b) {
		r += 1;
		g += 1;
		b += 1;
		var mat = [
			r,
			0,
			0,
			0,
			-0.5 * (1 - r), // r
			0,
			g,
			0,
			0,
			-0.5 * (1 - g), // g
			0,
			0,
			b,
			0,
			-0.5 * (1 - b), // b
			0,
			0,
			0,
			1,
			0 // a
		];
		this.concat(mat);
	}

	// https://en.wikibooks.org/wiki/Beginner%27s_Guide_to_Adobe_Flash/Filters_and_Blend_Modes/Adjusting_Color_Filters
	// https://github.com/jindrapetrik/jpexs-decompiler/blob/master/libsrc/ffdec_lib/src/com/jpexs/decompiler/flash/xfl/XFLConverter.java#L5436
	/**
	 * The contrast adjustement based on Flash.
	 * @param {number} c The contrast value, between 100 and -100.
	 */
	adjustContrastFlash(c) {
		c = Math.min(Math.max(Math.round(c), -100), 100);
		const v = (c < 0 ? c / 100 : ColorMatrix.FLASH_CONTRAST_VALUES[c]) + 1;
		const o = -0.24902 * (v - 1);
		var mat = [
			v,
			0,
			0,
			0,
			o, // r
			0,
			v,
			0,
			0,
			o, // g
			0,
			0,
			v,
			0,
			o, // b
			0,
			0,
			0,
			1,
			0 // a
		];
		this.concat(mat);
	}

	/**
	 * Changes the brightness of the matrix.
	 * @param {number} b The change in brightness. This increases/decreases the brigthness, this does not set it.
	 */
	adjustBrightness(b) {
		this.adjustBrightnessRGB(b, b, b);
	}

	/**
	 * Changes the brigthness of the matrix independently for the RGB values.
	 * @param {number} r The change of brightness for the red.
	 * @param {number} g The change of brightness for the green.
	 * @param {number} b The change of brightness for the blue.
	 */
	adjustBrightnessRGB(r, g, b) {
		var mat = [
			1,
			0,
			0,
			0,
			r, // r
			0,
			1,
			0,
			0,
			g, // g
			0,
			0,
			1,
			0,
			b, // b
			0,
			0,
			0,
			1,
			0 // a
		];
		this.concat(mat);
	}

	// https://en.wikibooks.org/wiki/Beginner%27s_Guide_to_Adobe_Flash/Filters_and_Blend_Modes/Adjusting_Color_Filters
	/**
	 * The brightness adjustement based on Flash.
	 * @param {number} b The brightness value, between -100 and 100.
	 */
	adjustBrightnessFlash(b) {
		this.adjustBrightness(Math.min(Math.max(Math.round(b), -100), 100) / 255);
	}

	/**
	 * Adjusts the hue of the matrix.
	 * @param {number} angle The change in angle for the hue.
	 */
	adjustHue(angle) {
		angle *= Math.PI / 180;
		var c = Math.cos(angle);
		var s = Math.sin(angle);
		var f1 = 0.213;
		var f2 = 0.715;
		var f3 = 0.072;
		var mat = [
			f1 + c * (1 - f1) + s * -f1,
			f2 + c * -f2 + s * -f2,
			f3 + c * -f3 + s * (1 - f3),
			0,
			0, // r
			f1 + c * -f1 + s * 0.143,
			f2 + c * (1 - f2) + s * 0.14,
			f3 + c * -f3 + s * -0.283,
			0,
			0, // g
			f1 + c * -f1 + s * -(1 - f1),
			f2 + c * -f2 + s * f2,
			f3 + c * (1 - f3) + s * f3,
			0,
			0, // b
			0,
			0,
			0,
			1,
			0, // a
			0,
			0,
			0,
			0,
			1 // ?
		];
		this.concat(mat);
	}

	/**
	 * Changes the matrix to black and white.
	 */
	desaturate() {
		var mat = [
			ColorMatrix.R_LUM,
			ColorMatrix.G_LUM,
			ColorMatrix.B_LUM,
			0,
			0, // r
			ColorMatrix.R_LUM,
			ColorMatrix.G_LUM,
			ColorMatrix.B_LUM,
			0,
			0, // g
			ColorMatrix.R_LUM,
			ColorMatrix.G_LUM,
			ColorMatrix.B_LUM,
			0,
			0, // b
			0,
			0,
			0,
			1,
			0 // a
		];
		this.concat(mat);
	}

	/**
	 * Concatenate a new matrix to the current matrix. This remplace the current matrix.
	 * @param {number[]} mat The new matrix to concatenate.
	 */
	concat(mat) {
		const temp = [];
		for (let y = 0; y < 4; ++y) {
			for (let x = 0; x < 5; ++x) {
				temp[y * 5 + x] =
					mat[y * 5] * this.matrix[x] +
					mat[y * 5 + 1] * this.matrix[x + 5] +
					mat[y * 5 + 2] * this.matrix[x + 10] +
					mat[y * 5 + 3] * this.matrix[x + 15] +
					(x == 4 ? mat[y * 5 + 4] : 0);
			}
		}
		this.matrix = temp;
	}
}
