// @ts-check

import { Container } from 'pixi.js';
import { Homing } from './Homing.js';
import { IScene } from '../../IScene.js';
import { Fighter } from '../../Fighter.js';
import { Animator } from '../../../display/Animator.js';
import { fx_fireball } from '../../../gfx/fx/fireball.js';
import { Timer } from '../../Timer.js';

// GFX 870
/**
 * Creates a Fireball homing toward a target.
 */
export class Fireball extends Homing {
	/**
	 * Time take for the Fireball to grow from 0 to 1 (in frames).
	 * @type {number}
	 */
	static GROWTH_TIMER = 10;

	/**
	 * The timer for the growth animation.
	 * @type {number}
	 */
	_growthTimer = 0;

	/**
	 * Target data given at initialization.
	 * Contains the Fighter and the damages the Fireball will do.
	 * @type {{fighter: Fighter, life?: number}}
	 */
	_targetData;

	/**
	 * Creates a new Fireball which homes toward the given Fighter.
	 * @param {IScene} scene The Scene where the Fireball is instantiated.
	 * @param {{fighter: Fighter, life?: number}} targetData The target of the Fireball.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} side The side of the Fighter creating the Fireball (1 left, -1 right).
	 */
	constructor(scene, targetData, x, y, z, side) {
		super(new Container(), scene, targetData.fighter);
		this._targetData = targetData;
		this._x = x;
		this._y = y;
		this._z = z;

		this._animator = new Animator(false).loadAnimation(fx_fireball);
		this._root.addChild(this._animator);

		this._angle = 1.57 - side * 1.57;
		this._speed = 15;
		this._speedFriction = 0.98;
		this._flOrient = true;
		this.updatePos();
		this._jumper = {
			max: this.getDist(this._target.position),
			z: -80,
			bz: this._z
		};
		this._root.scale.set(0);
	}

	/**
	 * Update the scale of the Fireball.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._growthTimer < Fireball.GROWTH_TIMER) {
			this._growthTimer = Math.min(this._growthTimer + timer.tmod, Fireball.GROWTH_TIMER);
			this._root.scale.set(this._growthTimer / Fireball.GROWTH_TIMER);
		}
	}

	/**
	 * Returns the target data given at initialization.
	 * @returns {{fighter: Fighter, life?: number}} The data given at initialization.
	 */
	getTargetData() {
		return this._targetData;
	}
}
