// @ts-check
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import libxmljs from 'libxmljs2';
import path from 'path';
import fs from 'fs';

import { mapping } from './mapping.js';

/**
 * Adapt the SVG output of ffdec to fit for DinoRPG.
 * Remove uneeded nodes, increase the dimension and the stroke size.
 */
export class SVGAdapter {
	_parser = new XMLParser({
		preserveOrder: true,
		ignoreAttributes: false
	});
	_builder = new XMLBuilder({
		format: true,
		preserveOrder: true,
		ignoreAttributes: false
	});

	/**
	 * Entry point of the parsing process.
	 * @param {string} folder Path to the folder where ffdoc was extracted.
	 */
	parse(folder) {
		const resultFolder = path.join(folder, 'adapted');
		if (fs.existsSync(resultFolder)) {
			fs.rmSync(resultFolder, { recursive: true, force: true });
		}
		fs.mkdirSync(resultFolder, { recursive: true });
		this.parseShapes(folder, resultFolder);
		this.parseSprites(folder, resultFolder);
	}

	/**
	 * Parse the SVG stored in the resulting "sprites" folder of ffdoc extraction.
	 * @param {string} folder Path to the extraction folder.
	 * @param {string} resultFolder Path to the folder where the results are to be saved.
	 */
	parseSprites(folder, resultFolder) {
		const spritesFolder = path.join(folder, 'sprites');
		if (fs.existsSync(spritesFolder)) {
			const schemaContent = fs.readFileSync('./src/svg/sprites-schema.xsd');
			const schema = libxmljs.parseXml(schemaContent.toString(), { baseUrl: './src/svg/' });
			this.formatSprites(spritesFolder, schema, resultFolder);
		}
	}

	/**
	 * Format the SVG contained in the "sprites" folder of ffdoc extraction.
	 *
	 * The "sprites" folder is comprised of multiple sub-folders. We go through all of them and only parse the SVG which:
	 * 1. Are the only element of a folder
	 * 2. Fit the given XSD format
	 *
	 * Formatted SVG will have their default g node removed, the content of the defs node will be move up to the root svg node.
	 * The size of the SVG will be increased by 2px in both direction, the translate of the transform will be moved up by 1 and the stroke-width will be set to 1.
	 * @param {string} folder Path to the "sprites" folder
	 * @param {libxmljs.Document} schema libxmljs XSD object used to validate the SVG format.
	 * @param {string} resultFolder Folder where the result of the formatting has to be saved.
	 */
	formatSprites(folder, schema, resultFolder) {
		for (const symbFolder of fs.readdirSync(folder)) {
			const matchSymb = symbFolder.match(/\w+_(\d+)/);
			if (matchSymb) {
				const symbol = matchSymb[1];
				const files = fs.readdirSync(path.join(folder, symbFolder));
				if (files.length === 1) {
					const svgContent = fs.readFileSync(path.join(folder, symbFolder, files[0]));
					const svgDoc = libxmljs.parseXml(svgContent.toString());
					if (svgDoc.validate(schema)) {
						const data = this._parser.parse(svgContent);
						for (const n of data) {
							if (n.svg) {
								this.increaseSize(n[':@'], '@_height');
								this.increaseSize(n[':@'], '@_width');
								n.svg = n.svg[1].defs;
								for (const g of n.svg) {
									if (g.g) {
										this.increaseTransform(g[':@'], '@_transform');
										for (const path of g.g) {
											if (path.path && path[':@'] && path[':@']['@_stroke-width'] === '0.05') {
												path[':@']['@_stroke-width'] = '1';
											}
										}
									}
								}
							}
						}
						this.saveAdaptedSVG(resultFolder, symbol, this._builder.build(data));
					} else {
						//console.log(`${symbol}: ${svgDoc.validationErrors}`);
					}
				}
			}
		}
	}

	/**
	 * Parse the SVG stored in the resulting "shapes" folder of ffdoc extraction.
	 * @param {string} folder Path to the extraction folder.
	 * @param {string} resultFolder Path to the folder where the results are to be saved.
	 */
	parseShapes(folder, resultFolder) {
		const shapesFolder = path.join(folder, 'shapes');
		if (fs.existsSync(shapesFolder)) {
			const schemaContent = fs.readFileSync('./src/svg/shapes-schema.xsd');
			const schema = libxmljs.parseXml(schemaContent.toString());
			this.formatShapes(shapesFolder, schema, resultFolder);
		}
	}

	/**
	 * Format the SVG contained in the "shapes" folder of ffdoc extraction.
	 *
	 * The "shapes" folder is comprised of multiple raw SVG files. They will only be taken into consideration if validated by the given XSD schema.
	 *
	 * The size of the SVG will be increased by 2px in both direction, the translate of the transform will be moved up by 1 and the stroke-width will be set to 1.
	 * @param {string} folder Path to the "shapes" folder
	 * @param {libxmljs.Document} schema libxmljs XSD object used to validate the SVG format.
	 * @param {string} resultFolder Folder where the result of the formatting has to be saved.
	 */
	formatShapes(folder, schema, resultFolder) {
		for (const f of fs.readdirSync(folder)) {
			const svgContent = fs.readFileSync(path.join(folder, f));
			const svgDoc = libxmljs.parseXml(svgContent.toString());
			if (svgDoc.validate(schema)) {
				const data = this._parser.parse(svgContent);
				for (const n of data) {
					if (n.svg) {
						this.increaseSize(n[':@'], '@_height');
						this.increaseSize(n[':@'], '@_width');
						for (const g of n.svg) {
							if (g.g) {
								this.increaseTransform(g[':@'], '@_transform');
								for (const path of g.g) {
									if (path.path && path[':@'] && path[':@']['@_stroke-width'] === '0.05') {
										path[':@']['@_stroke-width'] = '1';
									}
								}
							}
						}
					}
				}
				this.saveAdaptedSVG(resultFolder, f, this._builder.build(data));
			} else {
				console.log(`${f} does not fit the schema`);
			}
		}
	}

	/**
	 * The the created SVG to the result folder.
	 * Will check if the SVG has to be renamed based on the mapping file.
	 * @param {string} folder Path to the folder where the results have to be saved.
	 * @param {string} fileName Symbol name of the file.
	 * @param {any} content Formatted SVG content to save.
	 */
	saveAdaptedSVG(folder, fileName, content) {
		const name = path.parse(fileName).name;
		const mappedName = (mapping[name] ?? name) + '.svg';
		const fullPath = path.join(folder, mappedName);
		const directory = path.dirname(fullPath);
		if (!fs.existsSync(directory)) {
			fs.mkdirSync(directory, { recursive: true });
		}
		// path nodes are always empty, remove the unneeded closing node.
		fs.writeFileSync(fullPath, content.replaceAll('></path>', '/>'));
	}

	/**
	 * Increate the size in px of a specific attribute by 2.
	 * @param {*} obj Object whose attribute is to be modified.
	 * @param {*} attribute Attribute of the object to modify.
	 */
	increaseSize(obj, attribute) {
		if (obj && obj[attribute]) {
			const size = Number.parseFloat(obj[attribute].substring(0, obj[attribute].length - 2));
			obj[attribute] = this.roundToPlace(size + 2, 2) + 'px';
		}
	}

	/**
	 * Increase the transform matrix of the attribute of a given object.
	 * @param {*} obj The object whose attribute is to be modified.
	 * @param {*} attribute The attribute of the object to modify.
	 */
	increaseTransform(obj, attribute) {
		if (obj && obj[attribute]) {
			const match = obj[attribute].match(/matrix\((?:[^,]+, ){4}(-?\d+\.\d+), (-?\d+\.\d+)\)/);
			if (match) {
				obj[attribute] = obj[attribute].replace(
					/(matrix\((?:[^,]+, ){4}).+\)/,
					`$1${this.roundToPlace(Number.parseFloat(match[1]) + 1, 2)}, ${this.roundToPlace(
						Number.parseFloat(match[2]) + 1,
						2
					)})`
				);
			}
		}
	}

	/**
	 * Round a number to a specific decimal place.
	 * @param {Number} number Number to round.
	 * @param {Number} place Decimal place rounded to.
	 * @returns {Number} The given number rounded to the given decimal place.
	 */
	roundToPlace(number, place) {
		return Math.round(number * Math.pow(10, place)) / Math.pow(10, place);
	}

	/**
	 * Convert a hex color to its RGB components.
	 * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	 * @param {string} hex The hexadecimal color code
	 * @returns {object} An object comprised of the r g b parameters
	 */
	hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16)
			  }
			: null;
	}

	/**
	 * Convert an RGB color to its hexadecimal representation.
	 * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	 * @param {number} r Red component.
	 * @param {number} g Green component.
	 * @param {number} b Blue component.
	 * @returns {string} The string hexadecimal representation of the color.
	 */
	rgbToHex(r, g, b) {
		return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
	}

	/**
	 * Find the needed to go from color A to color B and print its RGB value
	 * @param {string} colorA Starting color
	 * @param {string} colorB End color
	 */
	findTintFromTo(colorA, colorB) {
		const colA = this.hexToRgb(colorA);
		const colB = this.hexToRgb(colorB);
		console.log(
			this.rgbToHex(
				(colB.r / 255.0 / (colA.r / 255.0)) * 255.0,
				(colB.g / 255.0 / (colA.g / 255.0)) * 255.0,
				(colB.b / 255.0 / (colA.b / 255.0)) * 255.0
			)
		);
	}
}
