/**
 * Conversion of the sdino.swf file of the web game "Dino RPG".
 * Allows you to instantiate a dino in its small format using the string describing its features.
 *
 * If the aim is to generate small still pictures of standing dinos, the class should be used to generate an image to display in an <img> tag.
 * Filling the webpage with webgl canvas will send it straight to hell.
 */
export class sdino extends Container<import('pixi.js').DisplayObject> {
	/**
	 * Create a dino based on the data parameter.
	 * @param {*} data Object containing the data describing a dino.
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	constructor(data: any);
	/**
	 * Object containing all the information relative to a sdino (name, parts, animations, etc).
	 * @type {object}
	 */
	_dinoInfos: object;
	/**
	 * Color palette of the dino.
	 * @type {Array}
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	_palette: any[];
	/**
	 * Scale of the dino.
	 * @type {number}
	 */
	_scale: number;
	/**
	 * Animator of the dino.
	 * Plays the animations and contain the body and its parts.
	 * @type {Animator}
	 */
	_animator: Animator;
	/**
	 * Raw code data received at init time.
	 * @type {string}
	 */
	_code: string;
	/**
	 * Convert a code to a specific number.
	 * Basically convert the ASCII code of [0-9A-Za-z] to a number between 0 to 62 or return 63 otherwise.
	 * @param {number} n The ASCII code of a character.
	 * @returns {number} A number between 0 and 63.
	 */
	decode62(n: number): number;
	/**
	 * Select the color palette based on the customization of the dino.
	 * @param {Array} dParts Array customizing the dino.
	 * @returns {void}
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	initPalette(dParts: any[]): void;
	/**
	 * Apply the customization to the sdino.
	 * Will select all the parts and subparts based on the given customization array.
	 * @param {Array} dParts The customization array given at the class creation.
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	apply(dParts: any[]): void;
	/**
	 * Apply status to the dino. Only the "congel" status exists to my knowledge.
	 */
	applyStatus(): void;
	/**
	 * Initialize the dino based on the data given at startup.
	 * @param {string} data Customization string for the dino. Will decide the species and the parts to display.
	 * @param {number} damage Amount of damage taken by the dino. Is useless for sdino.
	 * @param {boolean} pflag If false, the dino will not play its animation and stay at frame 0 of the "stand" animation.
	 * @param {number} scale Scale of the dino. Needed to correctly load the SVG.
	 * @returns {boolean} True if the dino has loaded correctly, false otherwise.
	 */
	init(data: string, damage: number, pflag?: boolean, scale?: number): boolean;
	/**
	 * Will play the given animation if the animation name represent a valid animation for the dino.
	 * @param {string} anim Name of the animation to play.
	 */
	playAnim(anim: string): void;
	/**
	 * Extract the visual data from the container into an image.
	 * Useful to display the dino without having to instanciate a WebGL context every time.
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	toImage(callback: any, width?: number | undefined, height?: number | undefined): void;
	/**
	 * Extract the visual data from the container into raw image data.
	 * Useful to display the dino without having to instanciate a WebGL context every time.
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 * @param {string} format Format of the output. 'image/png' by default.
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	toRawImage(callback: any, width?: number | undefined, height?: number | undefined, format?: string): void;
	/**
	 * Extract the visual data from the container into an animation.
	 * The animation is a div tag of class 'DinoRPG-Animation' comprised of multiple img tags.
	 * A timeout then goes through the classes DinoRPG-Animation and set the appropriate image.
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	toAnimation(callback: any, width?: number | undefined, height?: number | undefined): void;
	/**
	 * Extract the visual data from the container into an animation.
	 * The animation is an array comprised of multiple raw image data (one per frame, in order).
	 * @param {any} callback A callback receiving the resulting image as parameter.
	 * @param {number | undefined} width The width of the image. Needs both width and height to be taken into account.
	 * @param {number | undefined} height The height of the image. Needs width to be defined.
	 * @param {string} format Format of the output. 'image/png' by default.
	 */
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	toRawAnimation(callback: any, width?: number | undefined, height?: number | undefined, format?: string): void;
	/**
	 * Recreate the chk code needed to validate the parameters in Motion-Twin sdino.swf file.
	 * @returns {number} The chk code based on the initialization code of the dino.
	 */
	getChkCode(): number;
}
import { Container } from 'pixi.js';
import { Animator } from './display/Animator.js';

//# sourceMappingURL=sdino.d.ts.map

export type dataDisplayFight = {
	legacy_data?: string;
	bg?: string;
	history?: [];
	debug?: boolean;
};

export class Fight {
	constructor(data: any);

	get paused(): boolean;

	update(): void;

	getDisplay(): HTMLCanvasElement;

	pause(frames: number): void;

	getMTFormat(forceDAData?: boolean): string;

	destroy(): void;
}

// dino.d.ts

import { Rectangle } from 'pixi.js';
import { ADino } from './ADino';

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
	 * @param data Object containing the data describing a dino.
	 */
	constructor(data: Record<string, any>);

	/**
	 * Get the bounds of the rectangle for the big dino. This is used to position the texture in the Slots.
	 * @returns The bounds of the view sprite or an empty rectangle if no view sprite is found.
	 */
	getView(): Rectangle;
}
