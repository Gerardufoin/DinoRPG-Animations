// @ts-check
import { XMLParser } from 'fast-xml-parser';
import libxmljs from 'libxmljs2';
import path from 'path';
import fs from 'fs';

import { mapping_sdino } from './mapping_sdino.js';
import { mapping_smonster } from './mapping_smonster.js';
import { mapping_gfx } from './mapping_gfx.js';

const FLAG_NO_RGB = false;
const ELEM_IGNORE_RGB = ['156'];
const MAPPING = [mapping_sdino, mapping_smonster, mapping_gfx];

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

	_useMapping = 0;

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
		for (let k in MAPPING[this._useMapping]) {
			if (MAPPING[this._useMapping][k]) {
				output = output.replaceAll(`"${k}"`, `"${MAPPING[this._useMapping][k]}"`);
			}
		}
		return output;
	}

	/**
	 * Write the parsed object into a JSON file.
	 * @param {object} result Resulting object of the XFL parsing process.
	 * @param {string} fileType Type of file which was parsed (_part, _sub, _anim, etc)
	 * @param {string | undefined} parentName Name added by the parent container, if any.
	 * @returns {void}
	 */
	saveResult(result, fileType, parentName = undefined) {
		if (!fs.existsSync(this.RESULTS_FOLDER)) {
			fs.mkdirSync(this.RESULTS_FOLDER);
		}
		if (fileType === '_part') {
			this.createSVG(result);
			return;
		}
		fs.writeFileSync(
			path.join(this.RESULTS_FOLDER, result.name + fileType + (parentName ? `_${parentName}` : '') + '.json'),
			this.applyMapping(JSON.stringify(result, null, '\t'))
		);
	}

	/**
	 * Entry point of the parsing process.
	 * @param {string} file Path to the root XFL file to parse.
	 * @param {string} fileType Type of tile being parsed, based on MotionTwin naming.
	 * @param {object | undefined} parentData Data of the parent container, if any.
	 * @param {number | undefined} mappingIdx The mapping to use.
	 */
	parse(file, fileType, parentData = undefined, mappingIdx = undefined) {
		if (mappingIdx !== undefined) {
			this._useMapping = mappingIdx;
		}
		const xflContent = fs.readFileSync(file);
		this.validate(file, xflContent.toString());
		const data = this._parser.parse(xflContent);
		const result = {
			name: ''
		};
		result.name = data.DOMSymbolItem.name;
		this.parseLayers(
			data.DOMSymbolItem.timeline.DOMTimeline.layers,
			result,
			fileType,
			path.dirname(file),
			parentData?.transform
		);
		if (Object.keys(result).length > 1) {
			this.saveResult(result, fileType, parentData?.name);
		}
	}

	/**
	 * Start the parsing process of the DOMTimeline.layers depending on which type of file we are parsing.
	 * @param {*} layers The DOMTimeline.layers of the XFL document.
	 * @param {object} result Object containing the result of the parsing.
	 * @param {string} fileType Type of file being parsed (_part, _sub, _anim).
	 * @param {string} directory Directory of the file being parsed.
	 * @param {object | undefined} parentTransform Transform of the parent container, if any.
	 */
	parseLayers(layers, result, fileType, directory, parentTransform = undefined) {
		switch (fileType) {
			case 'smonster':
				this.parseMonsters(layers, directory);
				break;
			case '_anim':
				this.parseAnim(layers, result, directory);
				break;
			case '_sub':
				this.parseSub(layers, result, parentTransform);
				break;
			case '_part':
				this.parsePart(layers, result);
				break;
			case '_p1':
				this.parseMain(layers, result, directory);
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
	 * @param {boolean} undefinedIfZero If the result would be 0, return undefined instead.
	 * @returns {Number | undefined} The string converted into float or undefined.
	 */
	parseFloat(value, undefinedIfZero = false) {
		if (!value) {
			return undefined;
		}
		let nb = Number.parseFloat(value);
		return undefinedIfZero && !nb ? undefined : this.roundToPlace(nb, 3);
	}

	/**
	 * Parse the DOMTimeline.layers for the main monsters file
	 * @param {*} layers The DOMTimeline.layers to parse.
	 * @param {string} directory Directory of the file being parsed.
	 */
	parseMonsters(layers, directory) {
		const monstersIdx = [];
		const monsterList = [];
		const monsterObjs = {};
		for (const l of this.toArray(layers.DOMLayer)) {
			if (l.name === 'Labels Layer') {
				let lastLabel = '';
				for (const f of l.frames.DOMFrame) {
					const duration = f.duration ?? 1;
					if (f.name) {
						lastLabel = f.name;
						monsterList.push(f.name);
					}
					for (let i = 0; i < duration; ++i) {
						monstersIdx.push(lastLabel);
					}
				}
			} else {
				for (const f of l.frames.DOMFrame) {
					if (!f.elements) continue;
					const idx = Number.parseInt(f.index);
					const symbolInstance = f.elements.DOMSymbolInstance;
					const monsterData = {
						item: symbolInstance.libraryItemName,
						itemType: symbolInstance.name,
						transform: {
							tx: this.parseFloat(symbolInstance.matrix.Matrix.tx),
							ty: this.parseFloat(symbolInstance.matrix.Matrix.ty),
							a: this.parseFloat(symbolInstance.matrix.Matrix.a),
							b: this.parseFloat(symbolInstance.matrix.Matrix.b),
							c: this.parseFloat(symbolInstance.matrix.Matrix.c),
							d: this.parseFloat(symbolInstance.matrix.Matrix.d),
							brightness: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.brightness, true),
							contrast: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.contrast, true),
							saturation: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.saturation, true),
							hue: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.hue, true)
						},
						glow: {
							x: this.parseFloat(symbolInstance.filters?.GlowFilter?.blurX),
							y: this.parseFloat(symbolInstance.filters?.GlowFilter?.blurY),
							quality: this.parseFloat(symbolInstance.filters?.GlowFilter?.quality),
							strength: this.parseFloat(symbolInstance.filters?.GlowFilter?.strength),
							color: symbolInstance.filters?.GlowFilter?.color
						},
						blur: {
							x: this.parseFloat(symbolInstance.filters?.BlurFilter?.blurX),
							y: this.parseFloat(symbolInstance.filters?.BlurFilter?.blurY),
							quality: this.parseFloat(symbolInstance.filters?.BlurFilter?.quality)
						}
					};
					const duration = f.duration ?? 1;
					for (let i = 0; i < duration; ++i) {
						if (!monsterObjs[monstersIdx[idx + i]]) {
							monsterObjs[monstersIdx[idx + i]] = {};
						}
						monsterObjs[monstersIdx[idx + i]][symbolInstance.name] = monsterData;
					}
				}
			}
		}
		if (!fs.existsSync(this.RESULTS_FOLDER)) {
			fs.mkdirSync(this.RESULTS_FOLDER);
		}
		fs.writeFileSync(
			path.join(this.RESULTS_FOLDER, 'monster_base.js'),
			Object.keys(monsterObjs)
				.map(
					(m) => `
// ${monsterObjs[m]._p1.item}
export let ${m} = {
	name: '${m}',
	// ${monsterObjs[m]._box.item}
	width: ${monsterObjs[m]._box.transform.a},
	height: ${monsterObjs[m]._box.transform.d},
	transforms: [
		// 4089
		${JSON.stringify(monsterObjs[m]._p1.transform, undefined, '\t')},
		// Adjust
		{
			ty: ${-monsterObjs[m]._s?.transform?.ty ?? 0}
		}
	],
	glow: {
		distance: ${monsterObjs[m]._p1.glow.x},
		color: ${monsterObjs[m]._p1.glow.color?.replace('#', '0x') ?? ''},
		quality: ${monsterObjs[m]._p1.glow.quality},
		strength: ${Math.round((monsterObjs[m]._p1.glow.strength - 0.7) * 1000) / 1000}
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: ${monsterObjs[m]._s?.transform?.tx ?? 0},
			a: ${monsterObjs[m]._s?.transform?.a ?? 0},
			d: ${monsterObjs[m]._s?.transform?.d ?? 0}
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {},
	animations: {}
}
`
				)
				.join('\n\n\n')
		);
		fs.writeFileSync(
			path.join(this.RESULTS_FOLDER, 'monster_list.txt'),
			monsterList.map((m) => `- [ ] ${m}`).join('\n')
		);
	}

	/**
	 * Parse the DOMTimeline.layers for the type "_p1"
	 * @param {*} layers The DOMTimeline.layers to parse.
	 * @param {object} result Object containing the result of the parsing.
	 * @param {string} directory Directory of the file being parsed.
	 */
	parseMain(layers, result, directory) {
		let animFile = undefined;
		result.transforms = [];
		for (const l of this.toArray(layers.DOMLayer)) {
			if (l.name === 'Layer 1') {
				for (const f of this.toArray(l.frames.DOMFrame)) {
					const symbolInstance = f.elements.DOMSymbolInstance;
					if (!animFile && symbolInstance.libraryItemName) {
						animFile = symbolInstance.libraryItemName;
					}
					result.transforms.push({
						tx: this.parseFloat(symbolInstance.matrix.Matrix.tx),
						ty: this.parseFloat(symbolInstance.matrix.Matrix.ty),
						a: this.parseFloat(symbolInstance.matrix.Matrix.a),
						b: this.parseFloat(symbolInstance.matrix.Matrix.b),
						c: this.parseFloat(symbolInstance.matrix.Matrix.c),
						d: this.parseFloat(symbolInstance.matrix.Matrix.d),
						brightness: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.brightness, true),
						contrast: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.contrast, true),
						saturation: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.saturation, true),
						hue: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.hue, true)
					});
				}
			} else {
				throw new Error('Unexpected layer found in _p1 file. Time to panic.');
			}
		}
		if (animFile) {
			this.parse(path.join(directory, animFile + '.xml'), '_anim');
		}
	}

	/**
	 * Parse the DOMTimeline.layers for the type "_anim"
	 * @param {*} layers The DOMTimeline.layers to parse.
	 * @param {object} result Object containing the result of the parsing.
	 * @param {string} directory Directory of the file being parsed.
	 */
	parseAnim(layers, result, directory) {
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
			} else if (l.name.includes('Labels Layer')) {
				let idx = 0;
				for (const f of this.toArray(l.frames.DOMFrame)) {
					const duration = f.duration ?? 1;
					for (let i = 0; i < duration; ++i) {
						if (animations[idx] && animations[idx].name) {
							if (f.name) {
								animations[idx].name += ', ' + f.name;
							}
						} else {
							animations[idx] = { name: f.name || '' };
						}
						idx++;
					}
				}
			} else if (l.name === 'Layer 1' || l.name === 'Layer 2') {
				for (const f of l.frames.DOMFrame) {
					const idx = Number.parseInt(f.index);
					const symbolInstance = f.elements.DOMSymbolInstance;
					if (!symbolInstance) continue;
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
			if (anim.name !== '' && anim.data) {
				if (result.anims[anim.name]) {
					throw new Error(
						`Animation ${anim.name} already exists, cannot have two animation with the same name.`
					);
				}
				result.anims[anim.name] = anim.data;
				console.log(anim.data?.item);
				this.parse(path.join(directory, anim.data?.item + '.xml'), anim.data?.itemType, {
					name: anim.name,
					transform: anim.data?.transform
				});
			} else if (anim.name !== '') {
				console.log(`${anim.name} does not have data`);
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
	multiplyMatrixStep(x1, x2, y1, y2, t2) {
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
		return c1 === undefined && c2 === undefined ? undefined : (c1 ?? 1) * (c2 ?? 1);
	}

	/**
	 * Multiply two matrixes together.
	 * @param {object} m1 First matrix.
	 * @param {object} m2 Second matrix.
	 * @returns {object} The resulting matrix following the multiplication.
	 */
	multiplyMatrix(m1, m2) {
		const matrix = {
			tx: this.multiplyMatrixStep(m1.tx, m2.a ?? 1, m1.ty, m2.c, m2.tx),
			ty: this.multiplyMatrixStep(m1.tx, m2.b, m1.ty, m2.d ?? 1, m2.ty),
			a: this.multiplyMatrixStep(m1.a ?? 1, m2.a ?? 1, m1.b, m2.c, 0),
			b: this.multiplyMatrixStep(m1.a ?? 1, m2.b, m1.b, m2.d ?? 1, 0),
			c: this.multiplyMatrixStep(m1.c, m2.a ?? 1, m1.d ?? 1, m2.c, 0),
			d: this.multiplyMatrixStep(m1.c, m2.b, m1.d ?? 1, m2.d ?? 1, 0),
			alpha: this.multiplyColors(m2.alpha, m1.alpha),
			or: this.multiplyColors(m2.or, m1.or),
			og: this.multiplyColors(m2.og, m1.og),
			ob: this.multiplyColors(m2.ob, m1.ob),
			mr: this.multiplyColors(m2.mr, m1.mr),
			mg: this.multiplyColors(m2.mg, m1.mg),
			mb: this.multiplyColors(m2.mb, m1.mb),
			blx: this.multiplyColors(m2.blx, m1.blx),
			bly: this.multiplyColors(m2.bly, m1.bly),
			blq: this.multiplyColors(m2.blq, m1.blq),
			acb: this.multiplyColors(m2.acb, m1.acb),
			acc: this.multiplyColors(m2.acc, m1.acc),
			acs: this.multiplyColors(m2.acs, m1.acs),
			ach: this.multiplyColors(m2.ach, m1.ach),
			glx: this.multiplyColors(m2.glx, m1.glx),
			gly: this.multiplyColors(m2.gly, m1.gly),
			glc: m1.glc ?? m2.glc,
			glq: this.multiplyColors(m2.glq, m1.glq),
			gls: this.multiplyColors(m2.gls, m1.gls),
			l: m1.l ?? m2.l
		};
		matrix.a = matrix.a === 1 ? undefined : matrix.a;
		matrix.b = matrix.b === 0 ? undefined : matrix.b;
		matrix.c = matrix.c === 0 ? undefined : matrix.c;
		matrix.d = matrix.d === 1 ? undefined : matrix.d;
		return matrix;
	}

	/**
	 * Parse the DOMTimeline.layers for the type "_sub"
	 * @param {*} layers The DOMTimeline.layers to parse.
	 * @param {object} result Object containing the result of the parsing.
	 * @param {object | undefined} parentTransform Transform of the parent container, if any. Applied to each frame.
	 */
	parseSub(layers, result, parentTransform = undefined) {
		result.elementsCheck = [];
		result.elements = {};
		result.callbacks = {};
		result.frames = [];
		let layer = 0;
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
					// Elements to ignore.
					// 225 Seems like a mistake from MT
					if (['225'].includes(elementNb)) {
						continue;
					}
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
						or: this.parseFloat(symbolInstance.color?.Color?.redOffset),
						og: this.parseFloat(symbolInstance.color?.Color?.greenOffset),
						ob: this.parseFloat(symbolInstance.color?.Color?.blueOffset),
						mr: this.parseFloat(symbolInstance.color?.Color?.redMultiplier),
						mg: this.parseFloat(symbolInstance.color?.Color?.greenMultiplier),
						mb: this.parseFloat(symbolInstance.color?.Color?.blueMultiplier),
						blx: this.parseFloat(symbolInstance.filters?.BlurFilter?.blurX),
						bly: this.parseFloat(symbolInstance.filters?.BlurFilter?.blurY),
						blq: this.parseFloat(symbolInstance.filters?.BlurFilter?.quality),
						acb: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.brightness),
						acc: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.contrast),
						acs: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.saturation),
						ach: this.parseFloat(symbolInstance.filters?.AdjustColorFilter?.hue),
						glx: this.parseFloat(symbolInstance.filters?.GlowFilter?.blurX),
						gly: this.parseFloat(symbolInstance.filters?.GlowFilter?.blurY),
						glc: symbolInstance.filters?.GlowFilter?.color,
						glq: this.parseFloat(symbolInstance.filters?.GlowFilter?.quality),
						gls: this.parseFloat(symbolInstance.filters?.GlowFilter?.strength),
						l: layer
					};
					frameData.tx = frameData.tx === 0 ? undefined : frameData.tx;
					frameData.ty = frameData.ty === 0 ? undefined : frameData.ty;
					if (FLAG_NO_RGB || ELEM_IGNORE_RGB.includes(elementNb)) {
						frameData.or = frameData.og = frameData.ob = undefined;
						frameData.mr = frameData.mg = frameData.mb = undefined;
					}
					for (let i = 0; i < duration; ++i) {
						// Frame data has to be a copy each frame in order to not fucked up the layer sorting later on.
						const frameDataCpy = JSON.parse(JSON.stringify(frameData));
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
						result.frames[idx + i][elemName] = frameDataCpy;
						if (parentTransform && result.frames[idx + i][elemName]) {
							result.frames[idx + i][elemName] = this.multiplyMatrix(
								result.frames[idx + i][elemName],
								parentTransform
							);
						}
					}
				}
			}
			++layer;
		}
		// Clean up layers so element on the higher layer number becomes 0
		// Trying to get as many edge cases as possible (missing layers, multiple item on same layer or other)
		for (const f of result.frames) {
			/**
			 * @type {String[][]}
			 */
			let order = [];
			for (const k in f) {
				if (!order[f[k].l]) {
					order[f[k].l] = [];
				}
				order[f[k].l].push(k);
			}
			order = order.filter(function (e) {
				return e !== undefined;
			});
			for (let i = 0; i < order.length; ++i) {
				for (const k of order[i]) {
					f[k].l = order.length - 1 - i;
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
	 * @param {string} filename Name of the file trying to be validated.
	 * @param {string} xflContent XFL document in string format.
	 * @throws The validation errors in case the document does not match the known schema.
	 */
	validate(filename, xflContent) {
		const schemaContent = fs.readFileSync('./src/xfl/xfl-schema.xsd');
		const xflDoc = libxmljs.parseXml(xflContent);
		const xflSchema = libxmljs.parseXml(schemaContent.toString());
		if (!xflDoc.validate(xflSchema)) {
			throw new Error(`${filename}: ${xflDoc.validationErrors}`);
		}
	}
}
