// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx
// Cendre

import { BLEND_MODES, Container, SpriteMaskFilter } from 'pixi.js';
import { Animator } from '../../../../display/Animator.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { env_fire_flames } from '../../../../gfx/fx/env/fire/flames.js';
import { env_mask } from '../../../../gfx/fx/env/mask.js';
import { Timer } from '../../../Timer.js';
import { Environment } from './Environment.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';

/**
 * Creates an environment for the fire type.
 */
export class FireEnvironment extends Environment {
	/**
	 * The Glow parameters for the flames.
	 */
	static GlowFilterParameters = { distance: 5, color: 0x902626, quality: 0.5, outerStrength: 1 };
	/**
	 * The transforms for all the flames in the scene, and their position.
	 * @type {{ transform: object, colorSwap?: boolean }[]}
	 */
	static FLAMES_POSITIONS = [
		// Back flames
		{
			transform: {
				tx: 118.25,
				ty: -15.8,
				a: -0.819,
				b: 0.075,
				c: 0.072,
				d: 0.787
			},
			colorSwap: true
		},
		{
			transform: {
				tx: 136.45,
				ty: -23.8,
				a: 1,
				b: 0.004,
				c: -0.003,
				d: 0.961
			},
			colorSwap: true
		},
		{
			transform: {
				tx: 402.3,
				ty: -4.15,
				a: -0.819,
				b: -0.075,
				c: -0.072,
				d: 0.787
			},
			colorSwap: true
		},
		// Middle flames
		{
			transform: {
				tx: 280.45,
				ty: -1.55,
				a: -1.041,
				d: 1
			}
		},
		{
			transform: {
				tx: -3.7,
				ty: 6.65,
				a: 1.039,
				b: -0.064,
				c: 0.062,
				d: 0.998
			}
		},
		{
			transform: {
				tx: 278.75,
				ty: -2.65,
				a: 1.104,
				b: 0.096,
				c: -0.086,
				d: 0.996
			}
		},
		// Front flames
		{
			transform: {
				tx: -41.05,
				ty: 155.35,
				a: 1.742,
				b: -0.002,
				c: 0.002,
				d: 1.674
			}
		},
		{
			transform: {
				tx: 193,
				ty: 155.35,
				a: 1.742,
				b: -0.002,
				c: 0.002,
				d: 1.674
			}
		}
	];

	/**
	 * Fires in the environment.
	 * @type {Animator[]}
	 */
	_flames = [];

	/**
	 * Creates an environment for the fire type.
	 */
	constructor() {
		super(env_mask);

		this._root.x = -0.25;
		this._root.y = 38;

		/*for( i in 0...15 ){
			var p = new part.Ashes2( Scene.me.dm.attach("animcendres", Scene.DP_FIGHTER) );
			p.x = Math.random()*Scene.WIDTH;
			p.y = Scene.getRandomPYPos();
			p.z = 0;
			p.updatePos();
			parts.push(p);
		}*/

		// Creates the masked container, which is masked by the env_mask animation.
		// TODO: Move to Environment and preload to prevent issue when applying it.
		const masked = new Container();
		const maskFiler = new SpriteMaskFilter();
		maskFiler.maskSprite = this._animator._body.getPartSprite('mask');
		maskFiler.blendMode = BLEND_MODES.MULTIPLY;
		masked.filters = [maskFiler];
		this._root.addChild(masked);

		// Background
		const bg = new Asset(ref.fx.env.fire.background);
		bg.x = 0.45;
		bg.y = -38.85;
		masked.addChild(bg);
		masked.addChild(new Asset(ref.fx.env.fire.gradient));

		// Create the flames.
		// As WebGL does not have the same blend modes than Flash,
		// the flames have to be created outside of the animation in order to be modified through shaders.
		const flameContainer = new Container();
		for (const pos of FireEnvironment.FLAMES_POSITIONS) {
			const flames = new Animator(false).loadAnimation(env_fire_flames);
			this._flames.push(flames);
			flames.transform.setFromMatrix(PixiHelper.matrixFromObject(pos.transform));
			// This should be BLEND_MODE.HARD_LIGHT if it was working
			if (pos.colorSwap) {
				flames.filters = [ConstantShaderManager.getColorOffsetFilter(0, 0, 0, 1, 0.3, 1)];
			}
			flameContainer.addChild(flames);
		}
		flameContainer.filters = [ConstantShaderManager.getGlowFilter(FireEnvironment.GlowFilterParameters)];
		masked.addChild(flameContainer);
	}

	/**
	 * Updates the flames in the environment.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._flames.map((f) => f.update(timer.deltaTimeMS));
	}
}
