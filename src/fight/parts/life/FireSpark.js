// @ts-check

import { Color, Container, Graphics } from 'pixi.js';
import { IScene } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Timer } from '../../Timer.js';
import { PixiHelper } from '../../../display/PixiHelper.js';

/**
 * Creates a fire spark in at the given coordinates, flying away at the given angle.
 */
export class FireSpark extends Part {
	/**
	 * Number of frames to complete the whole color change.
	 * @type {number}
	 */
	static COLOR_CHANGE_TIME = 15;

	/**
	 * Fire spark changing color over time.
	 * @type {Graphics}
	 */
	_spark;

	/**
	 * Number of tmod frames before the spark start changing color.
	 * @type {number}
	 */
	_delay = 0;
	/**
	 * Timer to change the color of the spark from white-yellow-red-black.
	 */
	_colorTimer = 0;

	/**
	 * Creates a new spark of fire, which goes from white to red to black over time.
	 * @param {IScene} scene The Scene where the Spark is instantiated.
	 * @param {number} angle The angle where the Spark flies.
	 * @param {number} x The intial x coordinate.
	 * @param {number} y The intial y coordinate.
	 */
	constructor(scene, angle, x, y) {
		super(new Container(), scene);
		this._spark = new Graphics().beginFill(0xffffff).drawRect(-1, -1, 2, 2);
		this._root.addChild(this._spark);

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

		this._delay = Math.random() * 10;
	}

	/**
	 * Update the spark color.
	 * @param {Timer} timer The Fight's Timer, containing the Elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._delay > 0) {
			this._delay -= timer.tmod;
			return;
		}
		if (this._colorTimer < FireSpark.COLOR_CHANGE_TIME) {
			this._colorTimer = Math.min(this._colorTimer + timer.tmod, FireSpark.COLOR_CHANGE_TIME);
			this._spark.tint = PixiHelper.getFireColorGradient(this._colorTimer / FireSpark.COLOR_CHANGE_TIME);
		}
	}
}
