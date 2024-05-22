// @ts-check

import { Rectangle, Renderer } from 'pixi.js';
import { Animator } from './Animator.js';

/**
 * Allow the transformation from an Animator into an image which can then be displayed in an <img> tag.
 */
export class ImageExtractor {
	/**
	 * Number of rendering contexts to instantiate.
	 */
	static RENDERING_CNTX_COUNT = 3;
	/**
	 * Entity queue to extract.
	 * @type {{entity: Animator, callback: any, animation?: boolean, frame?: Rectangle, format: string, html:boolean}[]}}
	 */
	static _queue = [];
	/**
	 * Rendering contexts.
	 * @type {{instance: Renderer, busy: boolean}[]}
	 */
	static _renderers = [];

	/**
	 * Start the conversion by emptying the conversion queue.
	 * Will run until the queue is empty.
	 *
	 * Only one instance should run at a time.
	 *
	 * Should not be called outside of ImageExtractor.
	 */
	static async _convert() {
		if (ImageExtractor._queue.length == 0) return;
		while (ImageExtractor._renderers.length < ImageExtractor.RENDERING_CNTX_COUNT) {
			ImageExtractor._renderers.push({
				instance: new Renderer({
					backgroundAlpha: 0,
					width: 100,
					height: 100
				}),
				busy: false
			});
		}
		for (const r of ImageExtractor._renderers) {
			if (ImageExtractor._queue.length > 0 && !r.busy) {
				ImageExtractor.dispatch(r, ImageExtractor._queue.shift());
			}
		}
	}

	/**
	 * Dispatch an element to render to a free renderer. Call _convert once done.
	 * @param {{instance: Renderer, busy: boolean}} renderer The renderer to use for the process.
	 * @param {object} element The element to render.
	 */
	static async dispatch(renderer, element) {
		if (element && element.entity && element.callback) {
			element.entity.playing = false;
			renderer.busy = true;
			if (element.animation) {
				if (element.html) {
					element.callback(
						await ImageExtractor._renderToAnimation(
							renderer.instance,
							element.entity,
							element.frame,
							element.format
						)
					);
				} else {
					element.callback(
						await ImageExtractor._renderAnimationAsRawImages(
							renderer.instance,
							element.entity,
							element.frame,
							element.format
						)
					);
				}
			} else {
				if (element.html) {
					element.callback(
						await ImageExtractor._renderToImage(
							renderer.instance,
							element.entity,
							element.frame,
							element.format
						)
					);
				} else {
					element.callback(
						await ImageExtractor._renderAsRawImage(
							renderer.instance,
							element.entity,
							element.frame,
							element.format
						)
					);
				}
			}
			renderer.busy = false;
		}
		ImageExtractor._convert();
	}

	/**
	 * Render the Animator to an img tag.
	 * @param {Renderer} renderer The renderer to use.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<HTMLImageElement>} The new div containing the animation.
	 */
	static async _renderToImage(renderer, entity, frame, format) {
		return renderer.extract.image(entity, format, undefined, frame);
	}

	/**
	 * Render the Animator as a raw image.
	 * @param {Renderer} renderer The renderer to use.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<string>} The new div containing the animation.
	 */
	static async _renderAsRawImage(renderer, entity, frame, format) {
		const img = await ImageExtractor._renderToImage(renderer, entity, frame, format);
		return img.getAttribute('src') ?? '';
	}

	/**
	 * Render the Animator as an animation.
	 * The animation is a div tag with a 'DinoRPG-Animation' class comprised of multiple img tags.
	 * @param {Renderer} renderer The renderer to use.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<HTMLDivElement>} The new div containing the animation.
	 */
	static async _renderToAnimation(renderer, entity, frame, format) {
		let ret = document.createElement('div');
		ret.className = 'DinoRPG-Animation';
		ret.setAttribute('data-length', entity.getCurrentAnimationLength().toString());
		ret.setAttribute('data-idx', '0');
		for (let i = 0; i < entity.getCurrentAnimationLength(); ++i) {
			entity.setFrame(i);
			const img = await ImageExtractor._renderToImage(renderer, entity, frame, format);
			img.hidden = i != 0;
			ret.appendChild(img);
		}
		return ret;
	}

	/**
	 * Render the Animator as an animation.
	 * The animation is an array containing all the raw image of the animation in order.
	 * @param {Renderer} renderer The renderer to use.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<string[]>} The array containing the animation.
	 */
	static async _renderAnimationAsRawImages(renderer, entity, frame, format) {
		const ret = [];
		for (let i = 0; i < entity.getCurrentAnimationLength(); ++i) {
			entity.setFrame(i);
			ret.push(await ImageExtractor._renderAsRawImage(renderer, entity, frame, format));
		}
		return ret;
	}

	/**
	 * Convert a DinoRPG Animator into an image data, then send it to the callback if one was provided.
	 * @param {Animator} entity The Animator to convert into an image.
	 * @param {*} callback The callback where to send the result.
	 * @param {number | undefined} width The width of the resulting image.
	 * @param {number | undefined} height The height of the resulting image.
	 * @param {number | undefined} x The offset x position based on the center of the image.
	 * @param {number | undefined} y The offset y position based on the center of the image.
	 * @param {boolean} html If true, the output will be an img tag. Otherwise output will be the image data.
	 * @param {string} format Format of the image. 'image/png' by default.
	 */
	static convertToImage(
		entity,
		callback,
		width = undefined,
		height = undefined,
		x = undefined,
		y = undefined,
		html = true,
		format = 'image/png'
	) {
		if (!entity) {
			return;
		}
		let rect = undefined;
		if (width && height) {
			rect = new Rectangle(
				Math.round(entity.x - width / 2 + (x ?? 0)),
				Math.round(entity.y - height / 2 + (y ?? 0)),
				width,
				height
			);
		}
		entity.onLoad = () => {
			ImageExtractor._queue.push({
				entity: entity,
				callback: callback,
				animation: false,
				frame: rect,
				format: format,
				html: html
			});
			ImageExtractor._convert();
		};
	}

	/**
	 * Convert a DinoRPG Animator into multiple images forming an animation, then send it to the callback if one was provided.
	 *
	 * If the html parameter is true, the result is an HTML animation consisting of a DIV with a class 'DinoRPG-Animation' attached to it.
	 * Multiple child images are parented to the div and will be displayed in order.
	 *
	 * If html is false, the result is an array containing the image data of each frame.
	 * @param {Animator} entity The Animator to convert into an image.
	 * @param {*} callback The callback where to send the result.
	 * @param {number | undefined} width The width of the resulting image.
	 * @param {number | undefined} height The height of the resulting image.
	 * @param {number | undefined} x The offset x position based on the center of the image.
	 * @param {number | undefined} y The offset y position based on the center of the image.
	 * @param {boolean} html If true, the output will be an img tag. Otherwise output will be the image data.
	 * @param {string} format Format of the image. 'image/png' by default.
	 */
	static convertToAnimation(
		entity,
		callback,
		width = undefined,
		height = undefined,
		x = undefined,
		y = undefined,
		html = true,
		format = 'image/png'
	) {
		if (!entity) {
			return;
		}
		let rect = undefined;
		if (width && height) {
			rect = new Rectangle(
				Math.round(entity.x - width / 2 + (x ?? 0)),
				Math.round(entity.y - height / 2 + (y ?? 0)),
				width,
				height
			);
		}
		entity.onLoad = () => {
			ImageExtractor._queue.push({
				entity: entity,
				callback: callback,
				animation: true,
				frame: rect,
				format: format,
				html: html
			});
			ImageExtractor._convert();
		};
	}
}
