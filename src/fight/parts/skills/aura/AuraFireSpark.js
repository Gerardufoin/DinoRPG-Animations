// @ts-check

import { Container } from 'pixi.js';
import { IScene } from '../../../IScene.js';
import { Part } from '../../../Part.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_fire_spark } from '../../../../gfx/fx/fire_spark.js';

/**
 * Creates an aura fire spark at the given coordinates, flying away at the given speed.
 * The spark start burning once it hits the ground.
 */
export class AuraFireSpark extends Part {
	/**
	 * Creates a new spark of fire, which goes from white to red to black over time.
	 * @param {IScene} scene The Scene where the Spark is instantiated.
	 * @param {number} x The intial x coordinate.
	 * @param {number} y The intial y coordinate.
	 * @param {number} z The intial y coordinate.
	 * @param {number} speed The speed of the Spark.
	 */
	constructor(scene, x, y, z, speed) {
		super(new Container(), scene);
		this._animator = new Animator(false).loadAnimation(fx_fire_spark);
		this._root.addChild(this._animator);

		const ray = 20;
		const cx = Math.random() * 2 - 1;
		const cy = Math.random() * 2 - 1;
		this._x = x + cx * ray;
		this._y = y + cy * ray;
		this._z = z;
		this._vx = cx * speed;
		this._vy = cy * speed;
		this._vz = -(5 + Math.random() * 10);

		this._weight = 0.5 + Math.random() * 0.5;
		this._groundFrict = 0.5;
		this._fadeoutTimer = 20 + Math.random() * 80;
		this._fadeScale = true;

		this._animator.playing = false;
		/**
		 * Starts the combustion of the spark when hitting the ground.
		 */
		this.onBounce = () => {
			if (!this._animator.playing) {
				this._animator.setFrame(10);
				this._animator.playing = true;
			}
		};
	}
}
