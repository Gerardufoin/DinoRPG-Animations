// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../../Phys2D.js';
import { Animator } from '../../../../display/Animator.js';
import { fx_aura } from '../../../../gfx/fx/aura.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { IScene } from '../../../IScene.js';

/**
 * Create part of an aura with the given color.
 */
export class AuraEffect extends Phys2D {
	/**
	 * Creates part of an aura with the given color.
	 * @param {IScene} scene The Scene where the aura is instantiated.
	 * @param {number} type The type of aura for the partIdx 0 of the fx_aura animation.
	 * @param {number} color The color of the aura.
	 * @param {number} alpha The alpha of the aura. Default to 1.
	 */
	constructor(scene, type, color, alpha = 1) {
		super(new Container(), scene);

		const fx = new Container();
		this._animator = new Animator(false).loadAnimation(fx_aura, 1, [type]);
		fx.addChild(this._animator);
		fx.scale.set((Math.floor(Math.random() * 2) * 2 - 1) * (0.5 + Math.random() * 0.5), 0.5 + Math.random() * 0.5);
		fx.filters = [ConstantShaderManager.getGlowFilter(2, color, 0.5, 2)];
		this._root.addChild(fx);

		this._y = -10;
		this._fadeoutTimer = 20;
		this._vr = (Math.random() * 2 - 1) * 2;
		fx.angle = -(this._vr * 10);
		this.setAlpha(alpha);
	}
}
