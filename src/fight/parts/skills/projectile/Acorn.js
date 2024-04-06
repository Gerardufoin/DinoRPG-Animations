// @ts-check

import { Container } from 'pixi.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Fighter } from '../../../Fighter.js';
import { IScene } from '../../../IScene.js';
import { AProjectile } from './AProjectile.js';
import { GlowFilter } from '@pixi/filter-glow';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';

// GFX 682
/**
 * The Acorn projectile.
 */
export class Acorn extends AProjectile {
	/**
	 * The glow for the acorn. Stored here to preload.
	 * @type {GlowFilter}
	 */
	static GlowFilter = ConstantShaderManager.getGlowFilter({
		distance: 2,
		color: 0x000000,
		quality: 0.8,
		outerStrength: 2
	});

	/**
	 * Side the acorn is fired from. -1 left, 1 right.
	 * @type {number}
	 */
	_side;

	/**
	 * Creates a projectile of type Acorn.
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

		const acorn = new Container();
		acorn.addChild(new Asset(ref.fx.projectile.acorn, 1.4));
		acorn.x = 0.05;
		acorn.y = 0.15;
		acorn.filters = [Acorn.GlowFilter];
		this._root.addChild(acorn);
	}

	/**
	 * Once the acorn reaches coefficient 1, its bounces off the target and vanishes.
	 * @param {number} coef The coefficient between 0 and 1.
	 */
	setCoefficient(coef) {
		super.setCoefficient(coef);

		// The acorn bounces from the target and disappear.
		if (coef == 1) {
			this._vx = this._side * (1 + Math.random());
			this._vz = -(1.5 + Math.random()) * 7;
			this._vr = (Math.random() * 2 - 1) * 15;

			this._weight = 0.75;
			this._fadeoutTimer = 140;
			this._fadeScale = true;
		}
	}
}
