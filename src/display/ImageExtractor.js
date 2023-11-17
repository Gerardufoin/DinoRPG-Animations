// @ts-check

import { Rectangle, Renderer } from 'pixi.js';
import { Animator } from './Animator';

/**
 * Allow the transformation from an Animator into an image which can then be displayed in an <img> tag.
 */
export class ImageExtractor {
	/**
	 * Entity queue to extract.
	 * @type {{entity: Animator, callback: any, animation?: boolean, frame?: Rectangle, format: string, html:boolean}[]}}
	 */
	static _queue = [];
	/**
	 * Rendering context.
	 * @type {Renderer}
	 */
	static _renderer;
	/**
	 * Is the converting process currently ongoing.
	 * @type {boolean}
	 */
	static _converting = false;

	/**
	 * Start the conversion by emptying the conversion queue.
	 * Will run until the queue is empty.
	 *
	 * Only one instance should run at a time.
	 *
	 * Should not be called outside of ImageExtractor.
	 */
	static async _convert() {
		if (ImageExtractor._converting) {
			return;
		}
		ImageExtractor._converting = true;
		if (!ImageExtractor._renderer) {
			ImageExtractor._renderer = new Renderer({
				backgroundAlpha: 0,
				width: 100,
				height: 100
			});
			// If rendered at the first frame, image sometimes comes out empty. Dirty hack to prevent it.
			await new Promise((r) => setTimeout(r, 1));
		}
		while (ImageExtractor._queue.length) {
			const elem = ImageExtractor._queue.shift();
			if (elem && elem.entity && elem.callback) {
				elem.entity.playing = false;
				if (elem.animation) {
					elem.callback(
						await (elem.html
							? ImageExtractor._renderToAnimation(elem.entity, elem.frame, elem.format)
							: ImageExtractor._renderAnimationAsRawImages(elem.entity, elem.frame, elem.format))
					);
				} else {
					elem.callback(
						await (elem.html
							? ImageExtractor._renderToImage(elem.entity, elem.frame, elem.format)
							: ImageExtractor._renderAsRawImage(elem.entity, elem.frame, elem.format))
					);
				}
			}
		}
		ImageExtractor._converting = false;
	}

	/**
	 * Render the Animator to an img tag.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<HTMLImageElement>} The new div containing the animation.
	 */
	static async _renderToImage(entity, frame, format) {
		ImageExtractor._renderer.render(entity);
		return ImageExtractor._renderer.extract.image(entity, format, undefined, frame);
	}

	/**
	 * Render the Animator as a raw image.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<string>} The new div containing the animation.
	 */
	static async _renderAsRawImage(entity, frame, format) {
		const img = await ImageExtractor._renderToImage(entity, frame, format);
		return img.getAttribute('src') ?? '';
	}

	/**
	 * Render the Animator as an animation.
	 * The animation is a div tag with a 'DinoRPG-Animation' class comprised of multiple img tags.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<HTMLDivElement>} The new div containing the animation.
	 */
	static async _renderToAnimation(entity, frame, format) {
		let ret = document.createElement('div');
		ret.className = 'DinoRPG-Animation';
		ret.setAttribute('data-length', entity.getCurrentAnimationLength().toString());
		ret.setAttribute('data-idx', '0');
		for (let i = 0; i < entity.getCurrentAnimationLength(); ++i) {
			entity.setFrame(i);
			const img = await ImageExtractor._renderToImage(entity, frame, format);
			img.hidden = i != 0;
			ret.appendChild(img);
		}
		return ret;
	}

	/**
	 * Render the Animator as an animation.
	 * The animation is an array containing all the raw image of the animation in order.
	 * @param {Animator} entity The Animator to render.
	 * @param {Rectangle | undefined} frame The size of the output if any.
	 * @param {string} format Format of the output.
	 * @returns {Promise<string[]>} The array containing the animation.
	 */
	static async _renderAnimationAsRawImages(entity, frame, format) {
		const ret = [];
		for (let i = 0; i < entity.getCurrentAnimationLength(); ++i) {
			entity.setFrame(i);
			ret.push(await ImageExtractor._renderAsRawImage(entity, frame, format));
		}
		return ret;
	}

	/**
	 * Convert a DinoRPG Animator into an image data, then send it to the callback if one was provided.
	 * @param {Animator} entity The Animator to convert into an image.
	 * @param {*} callback The callback where to send the result.
	 * @param {number | undefined} width The width of the resulting image.
	 * @param {number | undefined} height The height of the resulting image.
	 * @param {boolean} html If true, the output will be an img tag. Otherwise output will be the image data.
	 * @param {string} format Format of the image. 'image/png' by default.
	 */
	static convertToImage(entity, callback, width = undefined, height = undefined, html = true, format = 'image/png') {
		if (!entity) {
			return;
		}
		let rect = undefined;
		if (width && height) {
			rect = new Rectangle(entity.x - width / 2, entity.y - height / 2, width, height);
		}
		ImageExtractor._queue.push({
			entity: entity,
			callback: callback,
			animation: false,
			frame: rect,
			format: format,
			html: html
		});
		ImageExtractor._convert();
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
	 * @param {boolean} html If true, the output will be an img tag. Otherwise output will be the image data.
	 * @param {string} format Format of the image. 'image/png' by default.
	 */
	static convertToAnimation(
		entity,
		callback,
		width = undefined,
		height = undefined,
		html = true,
		format = 'image/png'
	) {
		if (!entity) {
			return;
		}
		let rect = undefined;
		if (width && height) {
			rect = new Rectangle(entity.x - width / 2, entity.y - height / 2, width, height);
		}
		ImageExtractor._queue.push({
			entity: entity,
			callback: callback,
			animation: true,
			frame: rect,
			format: format,
			html: html
		});
		ImageExtractor._convert();
	}
}
