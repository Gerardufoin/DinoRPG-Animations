// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../../Part.js';
import { IScene } from '../../../IScene.js';
import { Fighter } from '../../../Fighter.js';

// GFX 690 mcProjectile
/**
 * Abstract class to create a projectile for the GrProjectile skill.
 */
export class AProjectile extends Part {
	/**
	 * The target of the projectile.
	 * @type {Fighter}
	 */
	_target;

	/**
	 * Starting position of the projectile.
	 * @type {{x: number, y: number, z: number}}
	 */
	_from;

	/**
	 * Creates a projectile at the given position, coming from the given side.
	 * @param {IScene} scene The Scene where the projectile is instantiated.
	 * @param {number} x The initial x position.
	 * @param {number} y The initial y position.
	 * @param {number} z The initial z position.
	 * @param {number} side The side the projectile is coming from. -1 left, 1 right.
	 * @param {Fighter} target The target of the projectile.
	 */
	constructor(scene, x, y, z, side, target) {
		super(new Container(), scene);
		this._target = target;
		this._from = {
			x: x,
			y: y,
			z: z
		};

		this._x = x;
		this._y = y;
		this._z = z;

		this._root.scale.x = side;
		this._ray = 6;
		this.dropShadow();
		this.updatePos();
	}

	/**
	 * Sets the coefficient of the projectile, between 0 and 1.
	 * This determines the position of the projectile between its starting position and the target.
	 * Once the coefficient reaches 1, the fadeoutTimer is set to 1 (the projectile is not immediatly destroyed in case a child wants to do something else).
	 * @param {number} coef The coefficient between 0 and 1.
	 */
	setCoefficient(coef) {
		this._x = this._from.x * (1 - coef) + this._target.position.x * coef;
		this._y = this._from.y * (1 - coef) + this._target.position.y * coef;
		this._z = this._from.z * (1 - coef) + (this._target.position.z - this._target.height) * 0.5 * coef;

		if (coef === 1) {
			this._fadeoutTimer = 1;
		}
	}
}
