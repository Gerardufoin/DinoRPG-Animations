// @ts-check
// Half of https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Sprite.hx

import { Container } from 'pixi.js';
import { Timer } from './Timer.js';
import { Shade, ShadeType } from './parts/Shade.js';
import { Animator } from '../display/Animator.js';
import { Sprite } from './Sprite.js';
import { Layers } from './DepthManager.js';
import { IScene } from './IScene.js';

/**
 * An entity is a Sprite casting a shadow and containing a reference to the Scene.
 * Sprite needs to be abstracted from the Scene logic, so half the logic was moved here.
 * This is part of an attempt to clean the nonsense hierarchy found in MT code and their love for static variables.
 */
export class Entity extends Sprite {
	/**
	 * The shadow of the Entity.
	 * @type {Animator}
	 */
	_shade;
	/**
	 * Scene where the entity is instantiated.
	 * @type {IScene}
	 */
	_scene;

	/**
	 * Create a new Entity.
	 * @param {Container} container PixiJS Container, which will become the root container of the Sprite.
	 * @param {IScene} scene The Scene where the Entity is instantiated.
	 */
	constructor(container, scene) {
		super(container);
		this._scene = scene;
	}

	/**
	 * Udpate the entity position based on the Scene and update the animation of the shade if any.
	 * @param {Timer} timer The Timer managing the elapsed time. Unused for Sprite but used of its children.
	 */
	update(timer) {
		super.update(timer);
		this.updatePos();
		if (this._shade) {
			this._shade.update(timer.deltaTimeMS);
		}
	}

	/**
	 * Update the position of the Entity based on its internal xyz coordinates.
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
	 * Create a new shadow for the Entity and adds it the the Shade layer of the Scene.
	 * @param {number} shadeType Which type of shade should be instantiated.
	 */
	dropShadow(shadeType = ShadeType.Normal) {
		if (this._shade) return;
		this._shade = new Shade(shadeType);
		this._shade.x = -10000;
		this._shade.alpha = 0.45;
		this._scene.dm.addContainer(this._shade, Layers.Scene.SHADE);
		this.updateShadeSize();
	}

	/**
	 * Remove the shade from the Entity, if any.
	 */
	removeShadow() {
		if (this._shade) {
			this._scene.dm.removeContainer(this._shade, Layers.Scene.SHADE);
			this._shade = undefined;
		}
	}

	/**
	 * Update the scale of the Entity's shadow.
	 * @param {number} scale The new scale of the shadow.
	 */
	updateShadeSize(scale = 1) {
		if (this._shade) {
			this._shade.scale.x = (this._ray * scale * 5) / 100;
			this._shade.scale.y = (this._ray * scale * 5 * 0.5) / 100;
		}
	}

	/**
	 * Kill the Sprite and remove the shadow from the Scene.
	 */
	kill() {
		super.kill();
		this.removeShadow();
	}
}
