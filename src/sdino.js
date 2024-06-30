// @ts-check
import { ADino } from './ADino.js';

/**
 * Conversion of the sdino.swf file of the web game "Dino RPG".
 * Allows you to instantiate a dino in its small format using the string describing its features.
 *
 * If the aim is to generate small still pictures of standing dinos, the class should be used to generate an image to display in an <img> tag.
 * Filling the webpage with webgl canvas will send it straight to hell.
 */
export class sdino extends ADino {
	/**
	 * The collider of the dinoz.
	 * @type {{width: number, height: number}}
	 */
	get collider() {
		return {
			width: 36 * (this.dinoInfos.width ?? 1),
			height: 39 * (this.dinoInfos.height ?? 1)
		};
	}

	/**
	 * Create a dino based on the data parameter.
	 * @param {object} data Object containing the data describing a dino.
	 */
	constructor(data) {
		super(data, false);
	}
}
