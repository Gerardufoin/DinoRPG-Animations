// @ts-check

import { DepthManager } from '../../../DepthManager.js';
import { LifeEffect } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { IScene, SCENE_WIDTH } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Bolt } from '../../life/Bolt.js';
import { Meteor } from './Meteor.js';

/**
 * The meteor for the skill Crepuscule. Goes vertically, is electrified and does not explode on impact with the ground.
 */
export class ElectrifiedMeteor extends Meteor {
	/**
	 * The depth manager for the bolts.
	 * @type {DepthManager}
	 */
	_depthManager;

	/**
	 * The target of the meteorite.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * The damages inflicted when the meteorite hits the target.
	 * @type {number | null}
	 */
	_life;
	/**
	 * Side of the caster spawning the meteorite (-1 left, 1 right).
	 * @type {number}
	 */
	_side;
	/**
	 * Timer for when to instantiate bolts.
	 * @type {number}
	 */
	_boltTimer = 0;

	/**
	 * Creates an eletrified meteor which moves toward a target and strikes it.
	 * @param {IScene} scene The Scene where the meteorite is instantiated.
	 * @param {Fighter} target The target of the meteorite.
	 * @param {number | null} life The damage inflicted to the target.
	 * @param {number} side The side of the caster of the skill (-1 left, 1 right).
	 */
	constructor(scene, target, life, side) {
		super(scene, side);

		this._groundImpact = false;
		this._target = target;
		this._life = life;
		this._side = side;
		this._depthManager = new DepthManager(1);
		this._root.addChild(this._depthManager);

		const w = SCENE_WIDTH * 0.5;
		this._x = w - (w + 50) * side;
		this._y = this._target.position.y;
		this._z = -20;
		this._vx = 22 * side;
		this.setScale(1.3);
		this._root.scale.x *= side;

		this._vz = 0;
		this._ray = 0;
		this._root.angle = 0;
		this.updatePos();
	}

	/**
	 * Update the depth manager of the meteorite.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._depthManager.update(timer);

		this._boltTimer += timer.tmod;
		if (this._boltTimer >= 1) {
			this._boltTimer -= 1;
			for (let i = 0; i < 2; ++i) {
				const bolt = new Bolt(this._scene, (Math.random() * 2 - 1) * 16, (Math.random() * 2 - 1) * 16);
				bolt._vx = -Math.random() * this._vx * this._side;
				this._depthManager.addSprite(bolt, 0);
			}
		}
		// Check collision
		if ((this._x - this._target.position.x) * this._side > 0) {
			this._target.fxBurst(12);
			if (this._life != null) {
				this._target.damages(this._life, 30, { fx: LifeEffect.Lightning });
			}
			this.kill();
		}
	}
}
