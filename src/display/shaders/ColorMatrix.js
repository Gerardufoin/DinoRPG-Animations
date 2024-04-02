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
