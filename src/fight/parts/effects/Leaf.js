// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Leaf.hx

import { Container } from 'pixi.js';
import { IScene, SCENE_HEIGHT, SCENE_WIDTH } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Timer } from '../../Timer.js';

/**
 * Allows for a part to fall back and forth like a leaf.
 */
export class Leaf extends Part {
	/**
	 * Value used to convert degrees to radians.
	 * @type {number}
	 */
	static TO_RAD = Math.PI / 180;

	/**
	 * Is the leaf currently falling.
	 * @type {boolean}
	 */
	_isFalling = true;
	/**
	 * Get the status of the leaf.
	 * If true, the leaf has finished falling, false otherwise.
	 * @type {boolean}
	 */
	get fallen() {
		return !this._isFalling;
	}

	/**
	 * Current angle of the fall.
	 * @type {number}
	 */
	_angle = 0;
	/**
	 * The maximum amplitude of the fall angle.
	 * If the angle is above, the direction changes to -1.
	 * @type {number}
	 */
	_maxAmpl = 0;
	/**
	 * The minimum amplitude of the fall angle.
	 * If the angle is below, the direction changes to 1.
	 * @type {number}
	 */
	_minAmpl = 0;

	/**
	 * The direction of the current movement of the leaf.
	 * 1 the leaf goes right, -1 the leaf goes left.
	 * @type {number}
	 */
	_direction = 1;
	/**
	 * The speed of the leaf movement.
	 * @type {number}
	 */
	_speed = 0;

	/**
	 * Default distance of the leaf back and forth.
	 * @type {number}
	 */
	_defaultWidth = 0;
	/**
	 * Default x velocity of the leaf.
	 * @type {number}
	 */
	_defaultVx = 0;
	/**
	 * Default y velocity of the leaf.
	 * @type {number}
	 */
	_defaultVy = 0;
	/**
	 * Default z velocity of the leaf.
	 * @type {number}
	 */
	_defaultVz = 0;

	/**
	 * Creates a leaf entity which moves back and forth over the given width while falling.
	 * @param {Container} container The visual representation of the entity.
	 * @param {IScene} scene The Scene where the entity is instantiated.
	 */
	constructor(container, scene) {
		super(container, scene);
		this.init();
	}

	/**
	 * Resets the leaf parameters, readying it for a fall.
	 */
	init() {
		this._vr = 0;
		this._bounceFrict = 0;
		this._groundFrict = 0;

		this._maxAmpl = 130 + Math.random() * 50;
		this._minAmpl = 180 - this._maxAmpl;
		this._angle = this._minAmpl + Math.random() * (this._maxAmpl - this._minAmpl);
		this._speed = 3 + (Math.random() * 3 * this._maxAmpl) / 180;
		this._direction = 1;
		this._isFalling = true;

		this._vx = this._defaultVx;
		this._vy = this._defaultVy;
		this._vz = this._defaultVz + 2;

		this.setScale(1 - (this._vz - 2) * 0.1);
		this.updatePos();
	}

	/**
	 * Resets the leaf position, readying it for another fall.
	 * Will be overriden if the inheriting class wishes to do something else on end.
	 */
	onEnd() {
		this._x = Math.random() * SCENE_WIDTH;
		this._y = this._scene.getRandomPYPos();
		this._z = -1.5 * SCENE_HEIGHT;
		this.init();
	}

	/**
	 * Updates the leaf movement.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._isFalling) {
			// Sets the fall direction based on the angle and the amplitude limits
			if (this._angle > this._maxAmpl) {
				this._direction = -1;
			}
			if (this._angle < this._minAmpl) {
				this._direction = 1;
			}

			this._angle += this._direction * this._speed * Math.sin(this._angle * Leaf.TO_RAD) * timer.tmod;
			this._root.angle = this._angle - 70;
		}

		// If the leaf touches the ground, it stops falling.
		if (this._isFalling && this._z >= 0) {
			this._isFalling = false;
			this._vx = this._vy = this._vz = 0;
			this.onEnd();
		}
	}
}
