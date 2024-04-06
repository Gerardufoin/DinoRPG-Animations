// @ts-check

import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { AProjectile } from './AProjectile.js';
import { StingerWind } from './StingerWind.js';

// GFX 683
/**
 * The Stinger projectile.
 */
export class Stinger extends AProjectile {
	/**
	 * The side the Stinger is coming from.
	 * @type {number}
	 */
	_side;
	/**
	 * The timer for the wind particles.
	 * Wind particles are spawned in when it reaches 1.
	 * @type {number}
	 */
	_windTimer = 0;

	/**
	 * Creates a projectile of type Stinger.
	 * @param {IScene} scene The Scene where the projectile is instantiated.
	 * @param {number} x The initial x position.
	 * @param {number} y The initial y position.
	 * @param {number} z The initial z position.
	 * @param {number} side The side the projectile is coming from. -1 left, 1 right.
	 * @param {Fighter} target The target of the projectile.
	 */
	constructor(scene, x, y, z, side, target) {
		super(scene, x, y, z, side, target);
		this._side = side;

		this._root.addChild(new Asset(ref.fx.projectile.stinger));
	}

	/**
	 * Creates wind particles behind the stinger.
	 * @param {number} coef The coefficient between 0 and 1.
	 */
	setCoefficient(coef) {
		super.setCoefficient(coef);

		if (this._windTimer >= 1) {
			this._windTimer -= 1;
			const max = 1 + Math.floor(5 * (1 - coef));
			for (let i = 0; i < max; ++i) {
				this._scene.dm.addSprite(
					new StingerWind(this._scene, this._x, this._y, this._z, this._side),
					Layers.Scene.FIGHTERS
				);
			}
		}
	}

	/**
	 * Update the spawn timer for the wind.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._windTimer += timer.tmod;
	}
}
