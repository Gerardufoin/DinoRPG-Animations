// @ts-check

import { Container } from 'pixi.js';
import { IScene } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Animator } from '../../../display/Animator.js';
import { fx_fire_spark } from '../../../gfx/fx/fire_spark.js';

/**
 * Creates a fire spark in at the given coordinates, flying away at the given angle.
 */
export class FireSpark extends Part {
	/**
	 * Creates a new spark of fire, which goes from white to red to black over time.
	 * @param {IScene} scene The Scene where the Spark is instantiated.
	 * @param {number} angle The angle where the Spark flies.
	 * @param {number} x The intial x coordinate.
	 * @param {number} y The intial y coordinate.
	 */
	constructor(scene, angle, x, y) {
		super(new Container(), scene);
		this._animator = new Animator(false).loadAnimation(fx_fire_spark);
		this._root.addChild(this._animator);

		const radius = 3;
		const speed = 0.5 + Math.random() * 3;
		this._vx = Math.cos(angle) * speed;
		this._vy = Math.sin(angle) * speed;
		this._vz = -Math.random() * 8;
		this._friction = 0.98;

		this._x = x + this._vx * radius;
		this._y = y + this._vy * radius;

		this._fadeoutTimer = 50 + Math.random() * 10;
		this._weight = 0.2 + Math.random() * 0.2;

		this._animator.setFrame(Math.floor(Math.random() * 10));
	}
}
