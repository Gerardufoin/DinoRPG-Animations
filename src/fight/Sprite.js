// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Sprite.hx

import { Container } from 'pixi.js';
import { Scene } from './Scene.js';
import { Timer } from './Timer.js';
import { Shade, ShadeType } from './parts/Shade.js';
import { Animator } from '../display/Animator.js';

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
	 * Force of the Sprite against other Sprite.
	 * Sprite with forces push against each other.
	 * Update the position in Scene.
	 * @type {number | null}
	 */
	_force = null;
	/**
	 * Get the current force of the Sprite.
	 * @type {number | null}
	 */
	get force() {
		return this._force;
	}
	/**
	 * Actual scale of the Sprite.
	 * Can be used for animation if the Sprite has to grow/shrink over time.
	 * @type {number}
	 */
	_scale = 1;

	/**
	 * The shadow of the Sprite.
	 * @type {Animator}
	 */
	_shade;
	/**
	 * Visual representation of the object.
	 * Root container.
	 * @type {Container}
	 */
	_root;
	/**
	 * Scene where the sprite is instantiated.
	 * @type {Scene}
	 */
	_scene;

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

	/*public var root : flash.MovieClip ;
	public var shade : flash.MovieClip ;*/

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
	 * @param {Scene} scene The Scene where the Sprite is instantiated.
	 */
	constructor(container, scene) {
		this.spriteId = Sprite.CURRENT_ID++;
		this._root = container;
		this._scene = scene;
	}

	/**
	 * Set the scale of the Sprite.
	 * @param {number} scale The new scale.
	 */
	setScale(scale) {
		this._scale = scale;
		this._root.scale.x = this._root.scale.y = scale;
	}

	/**
	 * Update method of the Sprite. Will udpate its position.
	 * @param {Timer} timer The Timer managing the elapsed time. Unused for Sprite but used of its children.
	 */
	update(timer) {
		this.updatePos();
		if (this._shade) {
			this._shade.update(timer.deltaTimeMS);
		}
	}

	/**
	 * Update the position of the sprite based on its internal xyz coordinates.
	 */
	updatePos() {
		const sceneY = this._scene.getY(this._y);
		this._root.x = this._x;
		if (this._z !== undefined) {
			this._root.y = sceneY + this._z * 0.5;
			this._root.zIndex = sceneY;
		} else {
			this._root.y = this._y;
		}
		if (this._shade) {
			this._shade.x = this._x;
			this._shade.y = sceneY;
		}
	}

	/**
	 * Set the ray of the sprite, which is half its width.
	 * @param {number} r The new ray.
	 */
	setRay(r) {
		this._ray = r;
		if (this._shade) {
			this.updateShadeSize();
		}
	}

	/**
	 * Create a new shadow for the Sprite and adds it the the Shade layer of the Scene.
	 * @param {number} shadeType Which type of shade should be instantiated.
	 */
	dropShadow(shadeType = ShadeType.Normal) {
		if (this._shade) return;
		this._shade = new Shade(shadeType);
		this._shade.x = -10000;
		this._shade.alpha = 0.45;
		this._scene.addContainer(this._shade, Scene.LAYERS.SHADE);
		this.updateShadeSize();
	}

	/**
	 * Remove the shade from the Sprite, if any.
	 */
	removeShadow() {
		if (this._shade) {
			this._scene.removeContainer(this._shade, Scene.LAYERS.SHADE);
			this._shade = undefined;
		}
	}

	/**
	 * Update the scale of the Sprite's shadow.
	 * @param {number} scale The new scale of the shadow.
	 */
	updateShadeSize(scale = 1) {
		if (this._shade) {
			this._shade.scale.x = (this._ray * scale * 5) / 100;
			this._shade.scale.y = (this._ray * scale * 5 * 0.5) / 100;
		}
	}

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
	 * Sets the force of the Sprite in the Scene.
	 * @param {number | null} force New force value.
	 */
	setForce(force) {
		this._force = force;
		if (this._force !== null) {
			this._scene.addForceSprite(this);
		} else {
			this._scene.removeForceSprite(this);
		}
	}

	/**
	 * Remove the Sprite from the Scene.
	 */
	kill() {
		this._toDelete = true;
		this._scene.removeForceSprite(this);
		this.removeShadow();
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
