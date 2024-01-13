// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Tween.hx

import { Sprite } from './Sprite.js';

/**
 * Simple linear Tween between a start position and an end position.
 *
 * On update, the linked Sprite will move linearly between those two points based on a coefficient between 0 and 1.
 */
export class SimpleTween {
	/**
	 * Start coordinates.
	 * @type {{x: number, y: number}}
	 */
	_start;
	/**
	 * End coordinates.
	 * @type {{x: number, y: number}}
	 */
	_end;
	/**
	 * The Sprite entity moved by the simple tween.
	 * @type {Sprite}
	 */
	_sprite;

	/**
	 * Create a simple tween animation between the start position and the end position.
	 * @param {Sprite} sprite The Sprite entity to move around.
	 * @param {{x: number, y: number}} start The start position.
	 * @param {{x: number, y: number}} end The destination.
	 */
	constructor(sprite, start, end) {
		this._sprite = sprite;
		this._start = {
			x: start.x ?? 0,
			y: start.y ?? 0
		};
		this._end = {
			x: end.x ?? 0,
			y: end.y ?? 0
		};
	}

	/**
	 * Update the linked Sprite position between the start and end position based on the coefficient passed as parameter.
	 * @param {number} c The coefficient between 0 and 1.
	 */
	update(c) {
		this._sprite.setPosition(this._start.x * (1 - c) + this._end.x * c, this._start.y * (1 - c) + this._end.y * c);
	}
}
