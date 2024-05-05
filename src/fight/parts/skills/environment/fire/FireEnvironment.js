// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx
// Cendre

import { BLEND_MODES, Container, Filter } from 'pixi.js';
import { Animator } from '../../../../../display/Animator.js';
import { ConstantShaderManager } from '../../../../../display/ConstantShaderManager.js';
import { PixiHelper } from '../../../../../display/PixiHelper.js';
import { env_fire_flames } from '../../../../../gfx/fx/env/fire/flames.js';
import { Timer } from '../../../../Timer.js';
import { Environment } from '../Environment.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { Ashes } from './Ashes.js';
import { IScene } from '../../../../IScene.js';
import { Layers } from '../../../../DepthManager.js';

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
	 * @param {IScene} scene The Scene where the environment is spawned in.
	 */
	constructor(scene) {
		super();

		// Adds MULTIPLY blend mode to mask
		Environment.MaskFilter.blendMode = BLEND_MODES.MULTIPLY;

		this._root.x = -0.25;
		this._root.y = 38;

		// Spawns in the ash particles
		for (let i = 0; i < 15; ++i) {
			const ash = new Ashes(scene);
			scene.dm.addSprite(ash, Layers.Scene.FIGHTERS);
			this._parts.push(ash);
		}

		// Background
		const bg = new Asset(ref.fx.env.fire.background);
		bg.x = 0.45;
		bg.y = -38.85;
		this._masked.addChild(bg);
		this._masked.addChild(new Asset(ref.fx.env.fire.gradient));

		// Creates the flames.
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
		this._masked.addChild(flameContainer);
	}

	/**
	 * Updates the flames in the environment.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._flames.map((f) => f.update(timer.deltaTimeMS));
	}

	/**
	 * Replaces the blend mode filter on the masked element once the MaskFilter has been removed by the parent dispose.
	 */
	dispose() {
		super.dispose();
		const fl = new Filter();
		fl.blendMode = BLEND_MODES.MULTIPLY;
		this._masked.filters = [fl];
	}
}
