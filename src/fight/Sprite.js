// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Sprite.hx

import { Container } from 'pixi.js';
import { Timer } from './Timer.js';

/**
 * Sprite class of DinoRPG, main component to display entities.
 */
export class Sprite {
	/**
	 * Allows the attribution of an unique ID for each Sprite.
	 * Increased after each new State instantiation.
	 * @type {number}
	 */
	static CURRENT_ID = 0;

	/**
	 * Each Sprite needs to be identifiable to be removed from the Scene.
	 * As such, each state is given a unique id.
	 */
	spriteId;

	_x = 0.0;
	_y = 0.0;
	_z = 0.0;

	/**
	 * Reach of the sprite. Can be understood as half its width.
	 * @type {number}
	 */
	_ray = 0.0;
	/**
	 * Get the ray of the Sprite.
	 * @type {number}
	 */
	get ray() {
		return this._ray;
	}
	/**
	 * Actual scale of the Sprite.
	 * Can be used for animation if the Sprite has to grow/shrink over time.
	 * @type {number}
	 */
	_scale = 1;

	/**
	 * Visual representation of the object.
	 * Root container.
	 * @type {Container}
	 */
	_root;

	/**
	 * If true, the Sprite will be removed from its containers.
	 * @type {boolean}
	 */
	_toDelete = false;

	/**
	 * Show if the Sprite has been killed.
	 * If so, it has to be removed from its containers.
	 * @type {boolean}
	 */
	get isDeleted() {
		return this._toDelete;
	}

	/**
	 * Current position of the Sprite.
	 * @type {{x: number, y: number, z: number}}
	 */
	get position() {
		return { x: this._x, y: this._y, z: this._z };
	}

	/**
	 * Create a new Sprite.
	 * @param {Container} container PixiJS Container, which will become the root container.
	 */
	constructor(container) {
		this.spriteId = Sprite.CURRENT_ID++;
		this._root = container;
	}

	/**
	 * Set the scale of the Sprite.
	 * @param {number} scale The new scale.
	 */
	setScale(scale) {
		this._scale = scale;
		this._root.scale.set(scale);
	}

	/**
	 * Update method of the Sprite. Logic was moved to Entity class.
	 * @param {Timer} timer The Timer managing the elapsed time. Unused for Sprite but used of its children.
	 */
	update(timer) {}

	/**
	 * Get the distance between the Sprite and a given set of xy coordinates.
	 * @param {{x: number, y: number}} o The coordinates to get the distance to.
	 * @returns {number} The distance between the Sprite and the given coordinates.
	 */
	getDist(o) {
		const dx = this._x - o.x;
		const dy = this._y - o.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 * Get the angle between the coordinates of the Sprite and a given set of coordinates.
	 * @param {{x: number, y: number}} o The coordinates to get the angle from.
	 * @returns {number} The angle between the coordinates of the Sprite and the given coordinates.
	 */
	getAng(o) {
		const dx = this._x - o.x;
		const dy = this._y - o.y;
		return Math.atan2(dy, dx);
	}

	/**
	 * Remove the Sprite from the Scene.
	 */
	kill() {
		this._toDelete = true;
	}

	/**
	 * Get the PixiJS Container of the Sprite.
	 * @returns {Container} The root container of the Sprite.
	 */
	getRootContainer() {
		return this._root;
	}

	/**
	 * Set the position of the Sprite.
	 * @param {number} x Set the x position of the sprite. Keep the current position if undefined.
	 * @param {number} y Set the y position of the sprite. Keep the current position if undefined.
	 */
	setPosition(x, y) {
		this._x = x !== undefined ? x : this._x;
		this._y = y !== undefined ? y : this._y;
	}
}
