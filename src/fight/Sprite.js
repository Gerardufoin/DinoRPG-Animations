// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Sprite.hx

import { Container } from 'pixi.js';
import { Scene } from './Scene.js';
import { Timer } from './Timer.js';

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
	_ray = 0.0;
	force = 0.0;
	_scale = 1;
	/**
	 * @type {Container}
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

	constructor(container, scene) {
		this.spriteId = Sprite.CURRENT_ID++;
		this._root = container;
		this._scene = scene;
	}

	setScale(n) {
		this._scale = n;
		this._root.scale.x = this._root.scale.y = n;
	}

	/**
	 * Update method of the Sprite. Will udpate its position.
	 * @param {Timer} _timer The Timer managing the elapsed time. Unused for Sprite but used of its children.
	 */
	update(_timer) {
		this.updatePos();
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

	setRay(r) {
		this._ray = r;
		if (this._shade) {
			this.updateShadeSize();
		}
	}

	dropShadow() {
		if (this._shade) return;
		// TODO when context is found
		/*shade = Main.me.scene.dm.attach("mcShade", Scene.DP_SHADE) ;
		shade._alpha = 40 ;
		updateShadeSize();
		shade._x = -10000;
		shade.gotoAndStop(shadeType+1);*/
	}

	updateShadeSize(s = 1) {
		if (this._shade) {
			this._shade.scale.x = this._ray * s * 5;
			this._shade.scale.y = this._ray * s * 5 * 0.5;
		}
	}

	/**
	 *
	 * @param {{x: number, y: number}} o
	 * @returns
	 */
	getDist(o) {
		const dx = this._x - o.x;
		const dy = this._y - o.y;
		return Math.sqrt(dx * dx + dy * dy);
	}

	/**
	 *
	 * @param {{x: number, y: number}} o
	 * @returns
	 */
	getAng(o) {
		const dx = this._x - o.x;
		const dy = this._y - o.y;
		return Math.atan2(dy, dx);
	}

	setForce(n) {
		this._force = n;
		//forceList.push(this) ;
	}

	/**
	 * Remove the Sprite from the Scene.
	 */
	kill() {
		this._toDelete = true;
		//if(force != null)forceList.remove(this) ; TODO
		//shade.removeMovieClip() ;
	}

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
