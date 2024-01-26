// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Score.hx

import { Text } from 'pixi.js';
import { Scene } from '../../Scene.js';
import { Phys2D } from '../Phys2D.js';

/**
 * Instantiate a Title text, displaying it at the given coordinates.
 *
 * The Title will float up and disappear over time.
 */
export class Title extends Phys2D {
	/**
	 * Create a Title which will spawn at the given coordinates and fade out over time.
	 * @param {Scene} scene The Scene where the Title will be spawned.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 * @param {string} text The text to display.
	 */
	constructor(scene, x, y, text) {
		const txt = new Text(text, {
			fontFamily: 'Verdana',
			fontSize: 10,
			fontWeight: 'bold',
			align: 'center',
			fill: 0xffffff,
			stroke: 0x000000,
			strokeThickness: 2
		});
		txt.resolution = 2;
		txt.anchor.set(0.5);
		super(txt, scene);
		this._x = x;
		this._y = y;
		this._vy = -3;
		this._fadeoutTimer = 40;
		this._friction = 0.8;
	}
}
