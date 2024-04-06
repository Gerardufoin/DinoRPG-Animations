// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Fighter } from '../../../Fighter.js';
import { IScene } from '../../../IScene.js';
import { AProjectile } from './AProjectile.js';
import { Timer } from '../../../Timer.js';
import { RockShard } from './RockShard.js';
import { Layers } from '../../../DepthManager.js';

// GFX 689
/**
 * The Rock projectile.
 */
export class Rock extends AProjectile {
	/**
	 * Timer for the shard particles.
	 * When reaching 1, the shards are spawned in.
	 * @type {number}
	 */
	_shardTimer = 0;

	/**
	 * Creates a projectile of type Rock.
	 * @param {IScene} scene The Scene where the projectile is instantiated.
	 * @param {number} x The initial x position.
	 * @param {number} y The initial y position.
	 * @param {number} z The initial z position.
	 * @param {number} side The side the projectile is coming from. -1 left, 1 right.
	 * @param {Fighter} target The target of the projectile.
	 */
	constructor(scene, x, y, z, side, target) {
		super(scene, x, y, z, side, target);

		const rock = new Container();
		rock.addChild(new Asset(ref.fx.projectile.rock));
		rock.x = -18.2;
		rock.y = -14.35;
		this._root.addChild(rock);
	}

	/**
	 * Creates wind particles behind the stinger.
	 * @param {number} coef The coefficient between 0 and 1.
	 */
	setCoefficient(coef) {
		super.setCoefficient(coef);

		if (coef < 0.8) {
			this._shardTimer = 0;
		} else {
			this._root.visible = false;
		}
		if (this._shardTimer >= 1) {
			this._shardTimer -= 1;
			for (let i = 0; i < 5; ++i) {
				this._scene.dm.addSprite(new RockShard(this._scene, this._x, this._y), Layers.Scene.FIGHTERS);
			}
		}
	}

	/**
	 * Update the spawn timer for the wind.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._shardTimer += timer.tmod;
	}
}
