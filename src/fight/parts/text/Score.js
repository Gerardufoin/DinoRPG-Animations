// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Score.hx

import { Text } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { Timer } from '../../Timer.js';
import { IScene } from '../../IScene.js';

/**
 * Instantiate a Score text, displaying it at the given coordinates.
 *
 * The Score will float up and disappear over time.
 */
export class Score extends Phys2D {
	/**
	 * Y limit for the Score.
	 * @type {number}
	 */
	_limitY;

	/**
	 * Create a Score value which will spawn at the given coordinates and fadeout over time.
	 * @param {IScene} scene The Scene where the Score will be spawned.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 * @param {number} value The value to display.
	 * @param {boolean} hurt If true, the Score will be red, otherwise it will be green.
	 */
	constructor(scene, x, y, value, hurt = true) {
		const txt = new Text(value, {
			fontFamily: 'drpg-arial',
			fontSize: Math.floor(14 * (1 + (Math.abs(value) / 100) * 2)),
			fontWeight: 'bold',
			align: 'center',
			fill: 0xffffff,
			stroke: hurt ? 0xaa0000 : 0x00aa00,
			strokeThickness: 2
		});
		txt.resolution = 2;
		txt.anchor.set(0.5);
		super(txt, scene);
		this._x = x;
		this._y = y;
		this._limitY = y - 25;

		this._fadeoutTimer = 40;
		this._fadeScale = true;

		if (hurt) {
			this._vy = -8;
			this._weight = 0.8;
		} else {
			this._vy = -1.5;
			this._friction = 0.95;
		}
	}

	/**
	 * Update the Score position and checks if the Y limit is not crossed.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._vy > 0 && this._y > this._limitY) {
			this._y = this._limitY;
			this._vy *= -0.8;
		}
	}
}
