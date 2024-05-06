// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx
// Abysse

import { Timer } from '../../../../Timer.js';
import { Environment } from '../Environment.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { IScene } from '../../../../IScene.js';
import { Container } from 'pixi.js';
import { Animator } from '../../../../../display/Animator.js';
import { Layers } from '../../../../DepthManager.js';
import { env_water_light_movement } from '../../../../../gfx/fx/env/water/lights_movement.js';
import { env_water_ocean } from '../../../../../gfx/fx/env/water/ocean.js';
import { Bubbles } from './Bubbles.js';

/**
 * Creates an environment for the water type.
 */
export class WaterEnvironment extends Environment {
	/**
	 * The background layer.
	 * @type {Container}
	 */
	_background;
	/**
	 * The lights layer.
	 * @type {Container}
	 */
	_lights;
	/**
	 * The animator for the light movement.
	 * @type {Animator}
	 */
	_lightsAnim;
	/**
	 * The ocean layer.
	 * @type {Container}
	 */
	_ocean;
	/**
	 * The animator for the ocean movement.
	 * @type {Animator}
	 */
	_oceanAnim;

	/**
	 * Creates an environment for the fire type.
	 * @param {IScene} scene The Scene where the environment is spawned in.
	 */
	constructor(scene) {
		super();

		this._root.x = scene.dm.getLayer(Layers.Scene.PARTS).x;

		for (let i = 0; i < 15; ++i) {
			const bubble = new Bubbles(scene, 0.3);
			scene.dm.addSprite(bubble, Layers.Scene.FIGHTERS);
			this._parts.push(bubble);
		}

		// Background
		this._background = new Container();
		this._background.addChild(new Asset(ref.fx.env.water.background));
		this._background.x = -10;
		this._background.y = -10;
		this._background.filters = [Environment.MaskFilterSubstract];
		this._root.addChild(this._background);

		// Lights
		this._lights = new Container();
		this._lights.y = 42;
		this._lightsAnim = new Animator(false).loadAnimation(env_water_light_movement);
		this._lights.addChild(this._lightsAnim);
		this._lights.filters = [Environment.MaskFilterAdd];
		this._root.addChild(this._lights);

		// Ocean
		this._ocean = new Container();
		this._ocean.y = 42;
		this._ocean.addChild(new Asset(ref.fx.env.water.gradient));
		this._oceanAnim = new Animator(false).loadAnimation(env_water_ocean);
		this._ocean.addChild(this._oceanAnim);
		this._ocean.filters = [Environment.MaskFilter];
		this._root.addChild(this._ocean);
	}

	/**
	 * Updates the flames in the environment.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._lightsAnim.update(timer.deltaTimeMS);
		this._oceanAnim.update(timer.deltaTimeMS);
	}

	/**
	 * Replaces the blend mode filter of the environment as the mask will be reset.
	 */
	dispose() {
		super.dispose();
		this._background.filters = [Environment.FilterSubstract];
		this._lights.filters = [Environment.FilterAdd];
		this._ocean.filters = [];
	}
}
