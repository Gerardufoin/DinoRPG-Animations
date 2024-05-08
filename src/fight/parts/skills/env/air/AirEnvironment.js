// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx
// Ourano

import { Environment } from '../Environment.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { IScene } from '../../../../IScene.js';
import { Container } from 'pixi.js';
import { Animator } from '../../../../../display/Animator.js';
import { Layers } from '../../../../DepthManager.js';
import { ConstantShaderManager } from '../../../../../display/ConstantShaderManager.js';
import { Timer } from '../../../../Timer.js';
import { env_air_hurricane } from '../../../../../gfx/fx/env/air/hurricane.js';

/**
 * Creates an environment for the air type.
 */
export class AirEnvironment extends Environment {
	/**
	 * The background layer.
	 * @type {Container}
	 */
	_background;
	/**
	 * The hurricane layer.
	 * @type {Container}
	 */
	_hurricane;
	/**
	 * The hurricane animator.
	 * @type {Animator}
	 */
	_hurricaneAnim;

	/**
	 * Creates an environment for the air type.
	 * @param {IScene} scene The Scene where the environment is spawned in.
	 */
	constructor(scene) {
		super();

		this._root.x = scene.dm.getLayer(Layers.Scene.PARTS).x;

		// Background
		this._background = new Container();
		this._background.addChild(new Asset(ref.fx.env.air.background));
		this._background.x = -10;
		this._background.y = -10;
		this._background.filters = [Environment.MaskFilterSubstract];
		this._root.addChild(this._background);

		// Hurricane
		this._hurricane = new Container();
		this._hurricaneAnim = new Animator(false).loadAnimation(env_air_hurricane);
		this._hurricaneAnim.filters = [ConstantShaderManager.getBlurFilter(1, 1, 1)];
		this._hurricane.addChild(this._hurricaneAnim);
		this._hurricane.x = -13;
		this._hurricane.y = -16;
		this._hurricane.filters = [Environment.MaskFilterHardLight];
		this._root.addChild(this._hurricane);
	}

	/**
	 * Updates the storm animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._hurricaneAnim.update(timer.deltaTimeMS);
	}

	/**
	 * Replaces the blend mode filter of the environment as the mask will be reset.
	 */
	dispose() {
		super.dispose();
		this._background.filters = [Environment.FilterSubstract];
		this._hurricane.filters = [Environment.FilterHardLight];
	}
}
