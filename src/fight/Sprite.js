// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Sprite.hx

import { Container } from 'pixi.js';
import { Scene } from './Scene.js';

export class Sprite {
	_x = 0.0;
	_y = 0.0;
	_z = 0.0;
	_ray = 0.0;
	force = 0.0;
	scale = 100;
	/**
	 * @type {Container}
	 */
	_shade;
	/**
	 * Visual representation of the object.
	 * @type {Container}
	 */
	_root;
	/**
	 * Scene where the sprite is instantiated.
	 * @type {Scene}
	 */
	_scene;

	/*public var root : flash.MovieClip ;
	public var shade : flash.MovieClip ;*/

	constructor(container, scene) {
		this._root = container;
		this._scene = scene;
		//spriteList.push(this) ;
	}

	setScale(n) {
		this.scale = n;
		this._root.scale = n;
	}

	update() {
		this.updatePos();
	}

	updatePos() {
		const sceneY = this._scene.getY(this._y);
		this._root.x = this._x;
		this._root.y = sceneY + this._z * 0.5;
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
		this._shade.scale.x = this._ray * s * 5;
		this._shade.scale.y = this._ray * s * 5 * 0.5;
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

	/*public function kill() {
		spriteList.remove(this) ;
		if(force != null)forceList.remove(this) ;
		shade.removeMovieClip() ;
		root.removeMovieClip() ;
	}*/
}
