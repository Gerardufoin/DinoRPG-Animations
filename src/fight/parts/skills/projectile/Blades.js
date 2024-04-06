// @ts-check

import { Animator } from '../../../../display/Animator.js';
import { fx_blades } from '../../../../gfx/fx/blade/blades.js';
import { Fighter } from '../../../Fighter.js';
import { IScene } from '../../../IScene.js';
import { AProjectile } from './AProjectile.js';

// GFX 687
/**
 * The Blades projectile.
 */
export class Blades extends AProjectile {
	/**
	 * Creates a projectile of type Blade.
	 * @param {IScene} scene The Scene where the projectile is instantiated.
	 * @param {number} x The initial x position.
	 * @param {number} y The initial y position.
	 * @param {number} z The initial z position.
	 * @param {number} side The side the projectile is coming from. -1 left, 1 right.
	 * @param {Fighter} target The target of the projectile.
	 */
	constructor(scene, x, y, z, side, target) {
		super(scene, x, y, z, side, target);

		this._animator = new Animator(false).loadAnimation(fx_blades);
		this._animator.x = -8.45;
		this._animator.y = -9.95;
		this._root.addChild(this._animator);
	}
}
