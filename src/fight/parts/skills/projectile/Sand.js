// @ts-check

import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Fighter } from '../../../Fighter.js';
import { IScene } from '../../../IScene.js';
import { AProjectile } from './AProjectile.js';

// GFX 680
/**
 * The Sand projectile.
 */
export class Sand extends AProjectile {
	/**
	 * Creates a projectile of type Sand.
	 * @param {IScene} scene The Scene where the projectile is instantiated.
	 * @param {number} x The initial x position.
	 * @param {number} y The initial y position.
	 * @param {number} z The initial z position.
	 * @param {number} side The side the projectile is coming from. -1 left, 1 right.
	 * @param {Fighter} target The target of the projectile.
	 */
	constructor(scene, x, y, z, side, target) {
		super(scene, x, y, z, side, target);

		this._root.addChild(new Asset(ref.fx.projectile.sand));
	}
}
