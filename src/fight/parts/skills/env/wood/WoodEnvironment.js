// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx
// Abysse

import { Environment } from '../Environment.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { IScene } from '../../../../IScene.js';
import { Container } from 'pixi.js';
import { Animator } from '../../../../../display/Animator.js';
import { Layers } from '../../../../DepthManager.js';
import { ConstantShaderManager } from '../../../../../display/ConstantShaderManager.js';
import { env_wood_trees } from '../../../../../gfx/fx/env/wood/trees.js';
import { GlowFilter } from '@pixi/filter-glow';
import { FallingLeaf } from './FallingLeaf.js';

/**
 * Creates an environment for the wood type.
 */
export class WoodEnvironment extends Environment {
	/**
	 * The glow parameters for the trees.
	 * @type {GlowFilter}
	 */
	static TreesGlow = ConstantShaderManager.getGlowFilter({
		distance: 3,
		color: 0x66cc33,
		quality: 0.5,
		outerStrength: 1
	});

	/**
	 * The background layer.
	 * @type {Container}
	 */
	_background;
	/**
	 * The trees layer.
	 * @type {Container}
	 */
	_trees;

	/**
	 * Creates an environment for the fire type.
	 * @param {IScene} scene The Scene where the environment is spawned in.
	 */
	constructor(scene) {
		super();

		this._root.x = scene.dm.getLayer(Layers.Scene.PARTS).x;

		for (let i = 0; i < 20; ++i) {
			const leaf = new FallingLeaf(scene);
			scene.dm.addSprite(leaf, Layers.Scene.FIGHTERS);
			this._parts.push(leaf);
		}

		// Background
		this._background = new Container();
		this._background.addChild(new Asset(ref.fx.env.wood.background));
		this._background.x = -10;
		this._background.y = -10;
		this._background.filters = [Environment.MaskFilterSubstract];
		this._root.addChild(this._background);

		// Trees
		this._trees = new Container();
		const trees = new Animator(false).loadAnimation(env_wood_trees);
		trees.filters = [WoodEnvironment.TreesGlow, ConstantShaderManager.getAdjustColorFilter(-10, 15, 20, -1)];
		this._trees.addChild(trees);
		this._trees.y = 6;
		this._trees.filters = [Environment.MaskFilter];
		this._root.addChild(this._trees);
	}

	/**
	 * Replaces the blend mode filter of the environment as the mask will be reset.
	 */
	dispose() {
		super.dispose();
		this._background.filters = [Environment.FilterSubstract];
		this._trees.filters = [];
	}
}
