// @ts-check
import { Rectangle } from 'pixi.js';
import { ADino } from './ADino.js';

/**
 * Conversion of the dino.swf file of the web game "Dino RPG".
 * Allows you to instantiate a dino in its big format using the string describing its features.
 *
 * If the aim is to generate a big still pictures of standing dinos, the class should be used to generate an image to display in an <img> tag.
 * Filling the webpage with webgl canvas will send it straight to hell.
 */
export class dino extends ADino {
	/**
	 * Create a dino based on the data parameter.
	 * @param {object} data Object containing the data describing a dino.
	 */
	constructor(data) {
		super(data, true);
	}

	/**
	 * Get the bounds of the rectangle for the big dino. This is used to position the texture in the Slots.
	 * @returns {Rectangle} The bounds of the view sprite or an empty rectangle if no view sprite is found.
	 */
	getView() {
		const view = this._body.getPartSprite('view');
		return view ? view.getBounds() : new Rectangle();
	}
}
