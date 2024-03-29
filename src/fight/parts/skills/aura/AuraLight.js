// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../../Phys2D.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_aura_light } from '../../../../gfx/fx/aura_light.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { IScene } from '../../../IScene.js';

/**
 * Create a particle of light of the given color at the given position.
 * The particle floats up and vanishes.
 */
export class AuraLight extends Phys2D {
	/**
	 * Instantiate a particle of light which is part of an aura.
	 * @param {IScene} scene The Scene where the particle is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} color The color of the particle.
	 */
	constructor(scene, x, y, color) {
		super(new Container(), scene);

		const light = new Container();
		this._animator = new Animator(false).loadAnimation(fx_aura_light, 2);
		light.addChild(this._animator);
		light.x = Math.random() * 12;
		light.scale.set(0.5 + Math.random() * 0.5);
		light.filters = [
			ConstantShaderManager.getGlowFilter({
				distance: 6,
				color: color,
				quality: 0.5,
				outerStrength: 2
			})
		];
		this._root.addChild(light);
		this.setAlpha(0.6);

		this._x = x;
		this._y = y;

		this._weight = -(0.1 + Math.random() * 0.2);
		this._friction = 0.95;

		this._vr = (Math.random() * 2 - 1) * 20;
		this._root.angle = Math.random() * 360;

		this._fadeoutTimer = 10 + Math.random() * 10;
		this._fadeType = 0;
	}
}
