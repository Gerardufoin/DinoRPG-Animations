// @ts-check
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import libxmljs from 'libxmljs2';
import path from 'path';
import fs from 'fs';
import LZString from 'lz-string';

import { mapping } from './mapping.js';
import { references_addons } from './references_addons.js';

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
	_referencesBuilder = new XMLBuilder({
		preserveOrder: true,
		ignoreAttributes: false
	});

	/**
	 * Entry point of the parsing process.
	 * @param {string} folder Path to the folder where ffdoc was extracted.
	 */
	parse(folder) {
		const references = {};
		const resultFolder = path.join(folder, 'adapted');
		if (fs.existsSync(resultFolder)) {
			fs.rmSync(resultFolder, { recursive: true, force: true });
		}
		fs.mkdirSync(resultFolder, { recursive: true });
		this.parseShapes(folder, resultFolder, references);
		this.parseSprites(folder, resultFolder, references);
		this.appendReferencesAddons(references);
		fs.writeFileSync(path.join(resultFolder, 'references.json'), JSON.stringify(references));
	}

	/**
	 * Parse the SVG stored in the resulting "sprites" folder of ffdoc extraction.
	 * @param {string} folder Path to the extraction folder.
	 * @param {string} resultFolder Path to the folder where the results are to be saved.
	 * @param {object} references Object containing the compressed references to the images.
	 */
	parseSprites(folder, resultFolder, references) {
		const spritesFolder = path.join(folder, 'sprites');
		if (fs.existsSync(spritesFolder)) {
			const schemaContent = fs.readFileSync('./src/svg/sprites-schema.xsd');
			const schema = libxmljs.parseXml(schemaContent.toString(), { baseUrl: './src/svg/' });
			this.formatSprites(spritesFolder, schema, resultFolder, references);
		}
	}

	/**
	 * Format the SVG contained in the "sprites" folder of ffdoc extraction.
	 *
	 * The "sprites" folder is comprised of multiple sub-folders. We go through all of them and only parse the SVG which fit the given XSD format
	 *
	 * Formatted SVG will have their default g node removed, the content of the defs node will be move up to the root svg node.
	 * The size of the SVG will be increased by 2px in both direction, the translate of the transform will be moved up by 1 and the stroke-width will be set to 1.
	 * @param {string} folder Path to the "sprites" folder
	 * @param {libxmljs.Document} schema libxmljs XSD object used to validate the SVG format.
	 * @param {string} resultFolder Folder where the result of the formatting has to be saved.
	 * @param {object} references Object containing the compressed references to the images.
	 */
	formatSprites(folder, schema, resultFolder, references) {
		for (const symbFolder of fs.readdirSync(folder)) {
			const matchSymb = symbFolder.match(/\w+_(\d+)/);
			if (matchSymb) {
				const symbol = matchSymb[1];
				const files = fs.readdirSync(path.join(folder, symbFolder));
				for (let i = 0; i < files.length; ++i) {
					const svgContent = fs.readFileSync(path.join(folder, symbFolder, files[i]));
					const svgDoc = libxmljs.parseXml(svgContent.toString());
					if (svgDoc.validate(schema)) {
						const data = this._parser.parse(svgContent);
						let offset = undefined;
						for (const n of data) {
							if (n.svg) {
								this.increaseSize(n[':@'], '@_height');
								this.increaseSize(n[':@'], '@_width');
								n.svg = n.svg[1].defs;
								for (const g of n.svg) {
									if (g.g) {
										let svgOffset = this.increaseTransform(g[':@'], '@_transform');
										if (!offset) {
											offset = svgOffset;
										}
										for (const path of g.g) {
											if (path.path && path[':@'] && path[':@']['@_stroke-width'] === '0.05') {
												path[':@']['@_stroke-width'] = '1';
											}
										}
									}
								}
							}
						}
						const name = symbol + (files.length > 1 ? `_${i + 1}` : '');
						this.saveAdaptedSVG(resultFolder, name, this._builder.build(data));
						this.addToReferences(name, this._referencesBuilder.build(data), references, offset);
					} else if (symbol == '1208') {
						console.log(`${symbol}: ${svgDoc.validationErrors}`);
					}
				}
			}
		}
	}

	/**
	 * Parse the SVG stored in the resulting "shapes" folder of ffdoc extraction.
	 * @param {string} folder Path to the extraction folder.
	 * @param {string} resultFolder Path to the folder where the results are to be saved.
	 * @param {object} references Object containing the compressed references to the images.
	 */
	parseShapes(folder, resultFolder, references) {
		const shapesFolder = path.join(folder, 'shapes');
		if (fs.existsSync(shapesFolder)) {
			const schemaContent = fs.readFileSync('./src/svg/shapes-schema.xsd');
			const schema = libxmljs.parseXml(schemaContent.toString());
			this.formatShapes(shapesFolder, schema, resultFolder, references);
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
	 * @param {object} references Object containing the compressed references to the images.
	 */
	formatShapes(folder, schema, resultFolder, references) {
		for (const f of fs.readdirSync(folder)) {
			const svgContent = fs.readFileSync(path.join(folder, f));
			const svgDoc = libxmljs.parseXml(svgContent.toString());
			if (svgDoc.validate(schema)) {
				const data = this._parser.parse(svgContent);
				let offset = undefined;
				for (const n of data) {
					if (n.svg) {
						this.increaseSize(n[':@'], '@_height');
						this.increaseSize(n[':@'], '@_width');
						for (const g of n.svg) {
							if (g.g) {
								const svgOffset = this.increaseTransform(g[':@'], '@_transform');
								if (!offset) {
									offset = svgOffset;
								}
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
				this.addToReferences(path.parse(f).name, this._referencesBuilder.build(data), references, offset);
			} else {
				console.log(`${f} does not fit the schema`);
			}
		}
	}

	/**
	 * Save the created SVG to the result folder.
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
	 * If the symbol is known in the mapping, compress the SVG and add it to the references.
	 * @param {string} symbol Symbol name of the file.
	 * @param {any} content Raw SVG content.
	 * @param {object} references Object containing the compressed references to the images.
	 * @param {object} offset Offset of the SVG matrix.
	 */
	addToReferences(symbol, content, references, offset) {
		const names = symbol.split('_');
		let ref = mapping[names[0]];
		let node = references;
		if (ref) {
			ref += names[1] ?? '';
			for (const p of ref.split('/')) {
				if (!node[p]) {
					node[p] = {};
				}
				node = node[p];
			}
			const result = content.replaceAll('></path>', '/>');
			node.svg = LZString.compressToBase64(result);
			node.offset = offset;
		}
	}

	/**
	 * Add the references_addons into the references object.
	 * Addons are SVG files manually modified to fit a certain purpose.
	 * @param {object} references The object containing the references to the SVG datas.
	 */
	appendReferencesAddons(references) {
		for (const key of Object.keys(references_addons)) {
			let node = references;
			for (const p of key.split('/')) {
				if (!node[p]) {
					node[p] = {};
				}
				node = node[p];
			}
			const svgData = fs.readFileSync(references_addons[key].file);
			node.svg = LZString.compressToBase64(svgData.toString());
			node.offset = references_addons[key].offset;
		}
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
	 * @return {object} The x and y offset of the matrix.
	 */
	increaseTransform(obj, attribute) {
		const offset = { x: 0, y: 0 };
		if (obj && obj[attribute]) {
			const match = obj[attribute].match(/matrix\((?:[^,]+, ){4}(-?\d+\.\d+), (-?\d+\.\d+)\)/);
			if (match) {
				offset.x = this.roundToPlace(Number.parseFloat(match[1]) + 1, 2);
				offset.y = this.roundToPlace(Number.parseFloat(match[2]) + 1, 2);
				obj[attribute] = obj[attribute].replace(/(matrix\((?:[^,]+, ){4}).+\)/, `$1${offset.x}, ${offset.y})`);
			}
		}
		return offset;
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
