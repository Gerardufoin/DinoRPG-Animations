// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/libs-haxe2/mt/bumdum/Phys.hx

import { Container } from 'pixi.js';
import { Timer } from '../Timer.js';
import { Animator } from '../../display/Animator.js';
import { Entity } from '../Entity.js';
import { IScene } from '../IScene.js';

/**
 * Create a Sprite impacted with a 2D physic.
 * The 2D physic Sprite will ignore the scene Y restrictions.
 */
export class Phys2D extends Entity {
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
	 * The velocity of the rotation.
	 * @type {number}
	 */
	_vr = 0;
	/**
	 * The friction for the rotation, reducing the rotation's velocity over time.
	 * @type {number}
	 */
	_rFriction = 0;

	/**
	 * Pause the process for the given number of frames.
	 * @type {number}
	 */
	_sleep = 0;
	/**
	 * Checks if the entity is asleep.
	 * Asleep entities are not updated.
	 * @type {boolean}
	 */
	get asleep() {
		return this._sleep > 0;
	}
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
	 * Decides if the Part fades out through its alpha or through its scale.
	 * @type {boolean}
	 */
	_fadeScale = false;

	/**
	 * If the Phys2D is linked to an animator.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Create a Sprite impacted by 2D physic.
	 * This will unset the z coordinate of the Sprite.
	 * @param {Container} container The display for the Sprite.
	 * @param {IScene} scene The Scene containing the Sprite.
	 */
	constructor(container, scene) {
		super(container, scene);
		this._z = undefined;
	}

	/**
	 * Sets the alpha of the container.
	 * @param {number} n Value of the alpha.
	 */
	setAlpha(n) {
		this._alpha = n;
		this._root.alpha = this._alpha;
	}

	/**
	 * Update the 2D physic of the object.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		if (this.asleep) {
			this._sleep -= timer.tmod;
			if (this._sleep <= 0) {
				this._root.visible = true;
				if (this._animator) {
					this._animator.playing = true;
				}
			}
			return;
		}

		this._vy += this._weight * timer.tmod;

		if (this._friction) {
			var f = Math.pow(this._friction, timer.tmod);
			this._vx *= f;
			this._vy *= f;
		}

		this._x += this._vx * timer.tmod;
		this._y += this._vy * timer.tmod;

		this._root.angle += this._vr * timer.tmod;
		if (this._rFriction) {
			this._vr *= Math.pow(this._rFriction, timer.tmod);
		}

		if (this._fadeoutTimer > 0) {
			this._fadeoutTimer -= timer.tmod;
			if (this._fadeoutTimer < this._fadeLimit) {
				var c = this._fadeoutTimer / this._fadeLimit;
				if (this._fadeScale) {
					this._root.scale.set(c * this._scale);
				} else {
					this._root.alpha = c * this._alpha;
				}
			}
			if (this._fadeoutTimer <= 0) {
				this.kill();
			}
		}
		super.update(timer);
		if (this._animator) {
			this._animator.update(timer.deltaTimeMS);
		}
	}

	/**
	 * Pause the entity for the given duration.
	 * @param {number} duration The duration of the pause.
	 */
	sleep(duration) {
		this._sleep = duration;
		this._root.visible = duration == 0;
		if (this._animator) {
			this._animator.playing = duration == 0;
		}
	}
}
