// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/bumdum/Phys.hx

import { Container } from 'pixi.js';
import { Sprite } from '../Sprite.js';
import { Timer } from '../Timer.js';
import { Scene } from '../Scene.js';

/**
 * Create a Sprite impacted with a 2D physic.
 * The 2D physic Sprite will ignore the scene Y restrictions.
 */
export class Phys2D extends Sprite {
	/**
	 * The X velocity.
	 * @type {number}
	 */
	_vx = 0;
	/**
	 * The Y velocity.
	 * @type {number}
	 */
	_vy = 0;
	/**
	 * The friction, reducing velocity over time.
	 * @type {number}
	 */
	_friction = 0;
	/**
	 * The fadeout time. When it reaches 0, the Sprite fades out depending on its fade type.
	 * @type {number}
	 */
	_fadeoutTimer = 0;
	/**
	 * Alpha of the Sprite, used when fading out through transparency.
	 * @type {number}
	 */
	_alpha = 1;
	/**
	 * The weight of the object, impacting the Y velocity over time.
	 * @type {number}
	 */
	_weight = 0;
	/**
	 * Once the fadeout timer reaches the fade limit, the Sprite starts fading out.
	 * @type {number}
	 */
	_fadeLimit = 10;
	/**
	 * Type of fadeout used.
	 * @type {number}
	 */
	_fadeType;

	/**
	 * Create a Sprite impacted by 2D physic.
	 * This will unset the z coordinate of the Sprite.
	 * @param {Container} container The display for the Sprite.
	 * @param {Scene} scene The Scene containing the Sprite.
	 * @param {number} layer The layer on the Scene where the Sprite will be added.
	 */
	constructor(container, scene, layer) {
		super(container, scene, layer);
		this._z = undefined;
	}
	/**
	 * Update the 2D physic of the object.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		this._vy += this._weight * timer.tmod;

		if (this._friction != 0) {
			var f = Math.pow(this._friction, timer.tmod);
			this._vx *= f;
			this._vy *= f;
		}

		this._x += this._vx * timer.tmod;
		this._y += this._vy * timer.tmod;

		// TODO: Clean the fadeout types if the others are not used.
		if (this._fadeoutTimer != null) {
			this._fadeoutTimer -= timer.tmod;
			if (this._fadeoutTimer < this._fadeLimit) {
				var c = this._fadeoutTimer / this._fadeLimit;
				switch (this._fadeType) {
					case -1:
					case 2:
					case 4:
						break;
					case 0:
						this._root.scale.x = this._root.scale.y = c * this._scale;
						break;
					case 1:
						this._root.visible = Math.round(this._fadeoutTimer) % 4 > 1;
						break;
					case 3:
						this._root.scale.y = c * this._scale;
						break;
					case 5:
						this._root.scale.x = c * this._scale;
						break;
					default:
						this._root.alpha = c * this._alpha;
				}
				if (this._fadeoutTimer <= 0) {
					this.kill();
				}
			}
		}
		super.update(timer);
	}
}
