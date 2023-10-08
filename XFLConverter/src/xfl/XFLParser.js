// @ts-check
import { XMLParser } from 'fast-xml-parser';
import libxmljs from 'libxmljs2';
import path from 'path';
import fs from 'fs';

import { mapping } from './mapping.js';
import { subAnimations } from './subanimations.js';

const FLAG_NO_RGB = true;

/**
 * Parse XFL files and return the raw data ready for conversion.
 */
export class XFLParser {
	RESULTS_FOLDER = './results';
	DEFAULT_SCALE = 10;
	_parser = new XMLParser({
		ignoreAttributes: false,
		attributeNamePrefix: ''
	});

	// abandonned
	getStyle(shapeData, style) {
		return !shapeData[style] || !shapeData[style].color ? 'none' : shapeData[style].color;
	}

	// abandonned
	createSVG(result) {
		for (const s of result.shapes) {
			for (const e of s.edges) {
				let pathData = '';
				for (const d of e.data) {
					switch (d.type) {
						case 'moveTo':
							pathData += ` M${d.dest.x / this.DEFAULT_SCALE} ${d.dest.y / this.DEFAULT_SCALE}`;
							break;
						case 'lineTo':
							pathData += ` L${d.dest.x / this.DEFAULT_SCALE} ${d.dest.y / this.DEFAULT_SCALE}`;
							break;
						case 'curveTo':
							pathData += ` Q${d.dest.x / this.DEFAULT_SCALE} ${d.dest.y / this.DEFAULT_SCALE} ${
								d.control.x / this.DEFAULT_SCALE
							} ${d.control.y / this.DEFAULT_SCALE}`;
							break;
						default:
							throw new Error(`Unknown SVG command ${d.type}`);
					}
				}
				console.log(
					`<path d="${pathData.trim()}" fill="${this.getStyle(
						s.fills,
						e.fillStyle.out
					)}" fill-rule="evenodd" stroke="${this.getStyle(s.strokes, e.strokeStyle)}" />`
				);
			}
		}
	}

	/**
	 * Replace symbol name with project names for the animations
	 * @param {any} output Stringified JSON output where the mapping si to be applied.
	 * @returns The output string on which the part mapping has been applied.
	 */
	applyMapping(output) {
		for (let k in mapping) {
			if (mapping[k]) {
				output = output.replaceAll(`"${k}"`, `"${mapping[k]}"`);
			}
		}
		return output;
	}

	/**
	 * Write the parsed object into a JSON file.
	 * @param {object} result Resulting object of the XFL parsing process.
	 * @param {string} fileType Type of file which was parsed (_part, _sub, _anim, etc)
	 * @returns {void}
	 */
	saveResult(result, fileType) {
		if (!fs.existsSync(this.RESULTS_FOLDER)) {
			fs.mkdirSync(this.RESULTS_FOLDER);
		}
		if (fileType === '_part') {
			this.createSVG(result);
			return;
		}
		fs.writeFileSync(
			path.join(this.RESULTS_FOLDER, result.name + fileType + '.json'),
			this.applyMapping(JSON.stringify(result, null, '\t'))
		);
	}

	/**
	 * Entry point of the parsing process.
	 * @param {string} file Path to the root XFL file to parse.
	 * @param {string} fileType Type of tile being parsed, based on MotionTwin naming.
	 */
	parse(file, fileType) {
		const xflContent = fs.readFileSync(file);
		this.validate(xflContent.toString());
		const data = this._parser.parse(xflContent);
		const result = {
			name: ''
		};
		result.name = data.DOMSymbolItem.name;
		this.parseLayers(data.DOMSymbolItem.timeline.DOMTimeline.layers, result, fileType);
		this.saveResult(result, fileType);
	}

	/**
	 * Start the parsing process of the DOMTimeline.layers depending on which type of file we are parsing.
	 * @param {*} layers The DOMTimeline.layers of the XFL document.
	 * @param {object} result Object containing the result of the parsing.
	 * @param {string} fileType Type of file being parsed (_part, _sub, _anim)
	 */
	parseLayers(layers, result, fileType) {
		switch (fileType) {
			case '_anim':
				this.parseAnim(layers, result);
				break;
			case '_sub':
				this.parseSub(layers, result);
				break;
			case '_part':
				this.parsePart(layers, result);
				break;
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
	 * Parse a string into a float with 3 decimal points.
	 * Returns undefined if the string is undefined.
	 * @param {string | undefined} value A string representing a float or an undefined object.
	 * @returns {Number | undefined} The string converted into float or undefined.
	 */
	parseFloat(value) {
		if (!value) {
			return undefined;
		}
		let nb = Number.parseFloat(value);
		return this.roundToPlace(nb, 3);
	}

	/**
	 * Parse the DOMTimeline.layers for the type "_anim"
	 * @param {*} layers The DOMTimeline.layers to parse.
	 * @param {object} result Object containing the result of the parsing.
	 */
	parseAnim(layers, result) {
		result.anims = {};
		const animations = [];
		for (const l of this.toArray(layers.DOMLayer)) {
			if (l.name === 'Labels Layer') {
				for (const f of l.frames.DOMFrame) {
					const idx = Number.parseInt(f.index);
					const duration = f.duration ?? 1;
					for (let i = 0; i < duration; ++i) {
						animations[idx + i] = { name: f.name || '' };
					}
				}
			} else if (l.name === 'Layer 2') {
				for (const f of l.frames.DOMFrame) {
					const idx = Number.parseInt(f.index);
					const symbolInstance = f.elements.DOMSymbolInstance;
					const frameData = {
						item: symbolInstance.libraryItemName,
						itemType: symbolInstance.name,
						transform: {
							tx: this.parseFloat(symbolInstance.matrix.Matrix.tx),
							ty: this.parseFloat(symbolInstance.matrix.Matrix.ty),
							a: this.parseFloat(symbolInstance.matrix.Matrix.a),
							b: this.parseFloat(symbolInstance.matrix.Matrix.b),
							c: this.parseFloat(symbolInstance.matrix.Matrix.c),
							d: this.parseFloat(symbolInstance.matrix.Matrix.d)
						}
					};
					const duration = f.duration ?? 1;
					for (let i = 0; i < duration; ++i) {
						if (!animations[idx + i]) {
							animations[idx + i] = { name: f.name || '', data: {} };
						}
						frameData.start = i;
						animations[idx + i].data = Object.assign({}, frameData);
					}
				}
			} else {
				throw new Error('Unexpected layer found in _anim file. Time to panic.');
			}
		}
		for (const anim of animations) {
			if (anim.name !== '') {
				if (result.anims[anim.name]) {
					throw new Error(
						`Animation ${anim.name} already exists, cannot have two animation with the same name.`
					);
				}
				result.anims[anim.name] = anim.data;
				console.log(anim.data?.item);
				this.parse(path.join('./resources/sdino/LIBRARY/', anim.data?.item + '.xml'), anim.data?.itemType);
			}
		}
	}

	/**
	 * Execute one step of a matrix multiplication. Simplified for the current case by removing multiplication always at 0.
	 * @param {*} x1 First element of the first matrix or 0 if undefined.
	 * @param {*} x2 First element of the second matrix or 0 if undefined.
	 * @param {*} y1 Second element of the first matrix or 0 if undefined.
	 * @param {*} y2 Second element of the second matrix or 0 if undefined.
	 * @param {*} t2 Third element of the second matrix or 0 if undefined.
	 * @returns {Number | undefined} The resulting number of the operation rounded to 3 places, or undefined if no element is defined.
	 */
	multiplyMatrix(x1, x2, y1, y2, t2) {
		if (x1 || x2 || y1 || y2 || t2) {
			return this.roundToPlace((x1 ?? 0) * (x2 ?? 0) + (y1 ?? 0) * (y2 ?? 0) + (t2 ?? 0), 3);
		}
		return undefined;
	}

	/**
	 * Multiply two colors together. If one color is undefined, return the other color.
	 * @param {Number} c1 First color value.
	 * @param {Number} c2 Second color value.
	 * @returns {Number | undefined} The multiplication of the two colors, or undefined if no color is defined.
	 */
	multiplyColors(c1, c2) {
		return c1 === undefined || c2 === undefined ? (c1 ?? 1) * (c2 ?? 1) : undefined;
	}

	/**
	 * Apply a subanimation to a keyframe.
	 * Will be removed soon, the subanimation should be included as is in the project and combined at runtime.
	 * @param {object} frameData Current frame data of the main animation.
	 * @param {object} frameIdx Current frame index of the main animation.
	 * @param {Number} elementNb Symbol of the subanimation.
	 * @returns {object} The combined information of the frameData and the given symbol animation.
	 */
	applySubAnimation(frameData, frameIdx, elementNb) {
		const subFrame = subAnimations[elementNb][frameIdx % subAnimations[elementNb].length];
		return {
			tx: this.multiplyMatrix(subFrame.tx, frameData.a, subFrame.ty, frameData.c, frameData.tx),
			ty: this.multiplyMatrix(subFrame.tx, frameData.b, subFrame.ty, frameData.d, frameData.ty),
			a: this.multiplyMatrix(subFrame.a, frameData.a, subFrame.b, frameData.c, 0),
			b: this.multiplyMatrix(subFrame.a, frameData.b, subFrame.b, frameData.d, 0),
			c: this.multiplyMatrix(subFrame.c, frameData.a, subFrame.d, frameData.c, 0),
			d: this.multiplyMatrix(subFrame.c, frameData.b, subFrame.d, frameData.d, 0),
			alpha: this.multiplyColors(frameData.alpha, subFrame.alpha),
			red: this.multiplyColors(frameData.red, subFrame.red),
			green: this.multiplyColors(frameData.green, subFrame.green),
			blue: this.multiplyColors(frameData.blue, subFrame.blue)
		};
	}

	/**
	 * Parse the DOMTimeline.layers for the type "_sub"
	 * @param {*} layers The DOMTimeline.layers to parse.
	 * @param {object} result Object containing the result of the parsing.
	 */
	parseSub(layers, result) {
		result.elementsCheck = [];
		result.elements = {};
		result.callbacks = {};
		result.frames = [];
		for (const l of this.toArray(layers.DOMLayer)) {
			for (const f of this.toArray(l.frames.DOMFrame)) {
				const idx = Number.parseInt(f.index);
				const duration = f.duration ?? 1;
				if (f.Actionscript) {
					for (let i = 0; i < duration; ++i) {
						if (!result.callbacks[idx + i]) {
							result.callbacks[idx + i] = [];
						}
						result.callbacks[idx + i].push(f.Actionscript.script.replaceAll('\n', ''));
					}
				}
				if (f.elements) {
					const symbolInstance = f.elements.DOMSymbolInstance;
					const element = symbolInstance.libraryItemName + (symbolInstance.name ?? '');
					const elementNb = symbolInstance.libraryItemName.match(/Symbol (\d+)/)[1];
					if (!result.elements[element]) {
						result.elements[element] = {
							name: symbolInstance.name,
							reference: symbolInstance.libraryItemName + '.xml'
						};
					}
					const frameData = {
						tx: this.parseFloat(symbolInstance.matrix.Matrix.tx),
						ty: this.parseFloat(symbolInstance.matrix.Matrix.ty),
						a: this.parseFloat(symbolInstance.matrix.Matrix.a),
						b: this.parseFloat(symbolInstance.matrix.Matrix.b),
						c: this.parseFloat(symbolInstance.matrix.Matrix.c),
						d: this.parseFloat(symbolInstance.matrix.Matrix.d),
						alpha: this.parseFloat(symbolInstance.color?.Color?.alphaMultiplier),
						red: this.parseFloat(symbolInstance.color?.Color?.redOffset),
						green: this.parseFloat(symbolInstance.color?.Color?.greenOffset),
						blue: this.parseFloat(symbolInstance.color?.Color?.blueOffset)
					};
					if (FLAG_NO_RGB) {
						frameData.red = frameData.green = frameData.blue = undefined;
					}
					for (let i = 0; i < duration; ++i) {
						if (!result.frames[idx + i]) {
							result.frames[idx + i] = {};
						}
						let elemName = element;
						let elemIdx = 1;
						while (result.frames[idx + i][elemName] !== undefined) {
							elemName = element + `-${elemIdx}`;
							elemIdx++;
						}
						if (!result.elementsCheck.includes(elemName)) {
							result.elementsCheck.push(elemName);
						}
						result.frames[idx + i][elemName] = subAnimations[elementNb]
							? this.applySubAnimation(frameData, idx + 1, elementNb)
							: frameData;
					}
				}
			}
		}
		result.elementsCheck = result.elementsCheck.sort();
	}

	// abandonned
	parsePart(layers, result) {
		result.shapes = [];
		for (const l of this.toArray(layers.DOMLayer)) {
			for (const f of this.toArray(l.frames.DOMFrame)) {
				if (f.elements?.DOMShape) {
					const fills = {};
					const strokes = {};
					const edges = [];
					for (const fi of this.toArray(f.elements.DOMShape.fills.FillStyle)) {
						fills[fi.index] = {
							color: fi.SolidColor.color,
							alpha: fi.SolidColor.alpha
						};
					}
					for (const str of this.toArray(f.elements.DOMShape.strokes.StrokeStyle)) {
						strokes[str.index] = {
							scaleMode: str.SolidStroke.scaleMode,
							weight: str.SolidStroke.weight,
							color: str.SolidStroke.fill.SolidColor.color,
							alpha: str.SolidStroke.fill.SolidColor.alpha
						};
					}
					for (const e of this.toArray(f.elements.DOMShape.edges.Edge)) {
						edges.push({
							strokeStyle: e.strokeStyle,
							fillStyle: {
								in: e.fillStyle0,
								out: e.fillStyle1
							},
							data: this.parseEdges(e.edges)
						});
					}
					result.shapes.push({
						fills: fills,
						strokes: strokes,
						edges: edges
					});
				} else {
					throw new Error('No DOMSymbolInstance for element, panic.');
				}
			}
		}
	}

	/**
	 * Parse the edges data of an XFL Edge node into an object
	 * https://stackoverflow.com/questions/4077200/whats-the-meaning-of-the-non-numerical-values-in-the-xfls-edge-definition
	 * !x y	-> moveTo
	 * /x y	-> lineTo
	 * |x y	-> lineTo
	 * [x1 y1 ex ey	-> curveTo (quadratic)
	 * ]x1 y1 ex ey -> curveTo (quadratic).
	 * @param {string} edges Content of the edges attribute of an XFL Edge node.
	 * @returns {Array} Returns an array containing the strokes details.
	 * @throws Error if the edges do not match known regexp.
	 */
	parseEdges(edges) {
		if (!/^([!|] *(-?\d+) +(-?\d+) *|[[\]] *(-?\d+) +(-?\d+) +(-?\d+) +(-?\d+) *)+$/gm.test(edges)) {
			throw new Error(`Edge data '${edges}' does not match regexp.`);
		}
		const regexp = /([!|] *(-?\d+) +(-?\d+) *|[[\]] *(-?\d+) +(-?\d+) +(-?\d+) +(-?\d+) *)/g;
		const strokes = [];
		let match = undefined;
		while ((match = regexp.exec(edges))) {
			switch (match[0][0]) {
				case '!':
					strokes.push({
						type: 'moveTo',
						dest: { x: Number.parseInt(match[2]), y: Number.parseInt(match[3]) }
					});
					break;
				case '|':
					strokes.push({
						type: 'lineTo',
						dest: { x: Number.parseInt(match[2]), y: Number.parseInt(match[3]) }
					});
					break;
				case '[':
				case '\\':
					strokes.push({
						type: 'curveTo',
						dest: { x: Number.parseInt(match[4]), y: Number.parseInt(match[5]) },
						control: { x: Number.parseInt(match[6]), y: Number.parseInt(match[7]) }
					});
					break;
			}
		}
		return strokes;
	}

	/**
	 * Transform input into an array. If the input is already an array, return the input.
	 * @param {*} obj Any javascript variable.
	 * @returns {Array} If obj is an array, obj. Otherwise an array containing obj.
	 */
	toArray(obj) {
		if (!obj) return [];
		if (Array.isArray(obj)) return obj;
		return [obj];
	}

	/**
	 * Validate the XFL content against the known XSD schema.
	 * @param {string} xflContent XFL document in string format.
	 * @throws The validation errors in case the document does not match the known schema.
	 */
	validate(xflContent) {
		const schemaContent = fs.readFileSync('./src/xfl/xfl-schema.xsd');
		const xflDoc = libxmljs.parseXml(xflContent);
		const xflSchema = libxmljs.parseXml(schemaContent.toString());
		if (!xflDoc.validate(xflSchema)) {
			throw new Error(`${xflDoc.validationErrors}`);
		}
	}
}
