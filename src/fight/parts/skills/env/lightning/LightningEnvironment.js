// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx
// Stelme

import { Environment } from '../Environment.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { IScene } from '../../../../IScene.js';
import { Container } from 'pixi.js';
import { Animator } from '../../../../../display/Animator.js';
import { Layers } from '../../../../DepthManager.js';
import { ConstantShaderManager } from '../../../../../display/ConstantShaderManager.js';
import { env_lightning_storm } from '../../../../../gfx/fx/env/lightning/storm.js';
import { Timer } from '../../../../Timer.js';
import { FallingLightning } from './FallingLightning.js';

/**
 * Creates an environment for the lightning type.
 */
export class LightningEnvironment extends Environment {
	/**
	 * The background layer.
	 * @type {Container}
	 */
	_background;
	/**
	 * The storm layer.
	 * @type {Container}
	 */
	_storm;
	/**
	 * The storm animator.
	 * @type {Animator}
	 */
	_stormAnim;

	/**
	 * Creates an environment for the lightning type.
	 * @param {IScene} scene The Scene where the environment is spawned in.
	 */
	constructor(scene) {
		super();

		this._root.x = scene.dm.getLayer(Layers.Scene.PARTS).x;

		const fl = new FallingLightning(scene);
		scene.dm.addSprite(fl, Layers.Scene.FIGHTERS);
		this._parts.push(fl);

		// Background
		this._background = new Container();
		this._background.addChild(new Asset(ref.fx.env.lightning.background));
		this._background.x = -10;
		this._background.y = -10;
		this._background.filters = [Environment.MaskFilterSubstract];
		this._root.addChild(this._background);

		// Storm
		this._storm = new Container();
		this._stormAnim = new Animator(false).loadAnimation(env_lightning_storm);
		this._stormAnim.filters = [
			ConstantShaderManager.getAdjustColorFilter(-15, 10, 65, 0),
			ConstantShaderManager.getBlurFilter(1, 1, 1)
		];
		this._storm.addChild(this._stormAnim);
		this._storm.x = -15;
		this._storm.y = -11;
		this._storm.filters = [Environment.MaskFilterHardLight];
		this._root.addChild(this._storm);
	}

	/**
	 * Updates the storm animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._stormAnim.update(timer.deltaTimeMS);
	}

	/**
	 * Replaces the blend mode filter of the environment as the mask will be reset.
	 */
	dispose() {
		super.dispose();
		this._background.filters = [Environment.FilterSubstract];
		this._storm.filters = [Environment.FilterHardLight];
	}
}
