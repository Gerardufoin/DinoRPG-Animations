// @ts-check

import { Container } from 'pixi.js';
import { IScene, SCENE_WIDTH } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Faller } from '../../Faller.js';

/**
 * Abstract class allowing to create a rain drop with the desired skin.
 */
export class ARain extends Faller {
	/**
	 * Trail part of the drop, scaling and rotating over time.
	 * @type {Container}
	 */
	_trail;

	/**
	 * Position at the previous update.
	 * @type {{x: number, y: number}}
	 */
	_prevPos;

	/**
	 * Abstract class to create a rain drop.
	 * The method "burst" will be called once the drop hits the ground.
	 * @param {IScene} scene The Scene where the rain is happening.
	 * @param {number} side The side of the Scene where the rain is happening (0 left, 1 right).
	 */
	constructor(scene, side) {
		super(new Container(), scene);

		const w = SCENE_WIDTH * 0.5;
		this._x = w + (Math.random() * w - 50) * side;
		this._y = scene.getRandomPYPos();
		this._z = -500;
		this._vz = 50 + Math.random() * 20;
		this._vx = (5 + Math.random()) * side;
		this.updatePos();
		this._prevPos = {
			x: this._root.x,
			y: this._root.y
		};
	}

	/**
	 * Checks if the drop has hit the ground.
	 * If so, delete the drop and call burst.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._trail) {
			const dx = this._root.x - this._prevPos.x;
			const dy = this._root.y - this._prevPos.y;
			this._trail.angle = Math.atan2(dy, dx) / 0.0174;
			this._prevPos.x = this._root.x;
			this._prevPos.y = this._root.y;
		}
	}
}
