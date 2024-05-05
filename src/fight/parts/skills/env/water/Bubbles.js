// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/part/Bubbles.hx

import { Container } from 'pixi.js';
import { Part } from '../../../../Part.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { IScene, SCENE_WIDTH } from '../../../../IScene.js';
import { Timer } from '../../../../Timer.js';

/**
 * A wobbling bubble which goes up with increased speed.
 */
export class Bubbles extends Part {
	/**
	 * The default weight of the Bubble.
	 * The weight will be reinitialized to this value once the limit is reached.
	 * @type {number}
	 */
	_defaultWeight = 0;
	/**
	 * The weight modifier, which modifies the weight every frame.
	 * @type {number}
	 */
	_weightCoef = 0;
	/**
	 * The vertical limit for the bubble.
	 * Once reached, the bubble is reset.
	 * @type {number}
	 */
	_limitY = 0;

	/**
	 * Creates a bubble which goes up with increasing speed based on the given weight coefficient.
	 * Once the bubble reaches the given vertical limit, it is reset at another position and goes up again.
	 * @param {IScene} scene The Scene where the bubble is instantiated.
	 * @param {number} scale The size of the bubble.
	 * @param {number} weight The default weight of the bubble.
	 * @param {number} weightCoef The weight modifier for the bubble.
	 * @param {number} limitY The vertical limit where the bubble is reset.
	 */
	constructor(scene, scale = 0.3, weight = -0.003, weightCoef = 0.003, limitY = 50) {
		super(new Container(), scene);
		this._root.addChild(new Asset(ref.fx.env.water.bubble, Math.floor(scale * 10) * 0.1));
		this._defaultWeight = weight;
		this._weightCoef = weightCoef;
		this._limitY = limitY;

		this._sleep = Math.random() * 40;
		this._root.visible = false;

		this.init();
	}

	/**
	 * Initialize the parameters for the bubble.
	 */
	init() {
		this._x = Math.random() * SCENE_WIDTH;
		this._y = this._scene.getRandomPYPos();
		this._z = 0;

		this._weight = this._defaultWeight;
		this._vz = 0;
		this._vy = 2 * this._weight;

		this.updatePos();
	}

	/**
	 * Updates the bubble weight and position.
	 * Once the vertical limit is reached, reset the bubble.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._x += (Math.random() * 2 - 1) * 2 * timer.tmod;
		this._weight -= this._weightCoef * timer.tmod;
		if (this._root.y <= this._limitY) {
			this.init();
		}
	}
}
