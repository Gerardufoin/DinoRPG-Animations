// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Env.hx

import { Container } from 'pixi.js';
import { Leaf } from '../../../effects/Leaf.js';
import { Asset } from '../../../../../display/Asset.js';
import { ref } from '../../../../../gfx/references.js';
import { IScene, SCENE_HEIGHT, SCENE_WIDTH } from '../../../../IScene.js';

/**
 * Creates a falling leaf for Yggdrasil, which will respawn somewhere else once reaching the ground.
 * Code is similar to the falling leaf for the wood environment (14x faster), but split it apart in case it needs to be tweaked in the future.
 */
export class YggdraLeaf extends Leaf {
	/**
	 * Creates a falling leaf randomly on the scene.
	 * Once the leaf touches the ground, it respawns somewhere else.
	 * @param {IScene} scene The Scene where the leaf is instantiated.
	 */
	constructor(scene) {
		super(new Container(), scene);

		const scaling = new Container();
		scaling.addChild(new Asset(ref.fx.env.wood.falling_leaf, 4));
		scaling.scale.set(1 / 4);
		this._root.addChild(scaling);

		this._x = Math.random() * SCENE_WIDTH;
		this._y = this._scene.getRandomPYPos();
		this._z = -1.5 * SCENE_HEIGHT;

		this._defaultVx = 0;
		this._defaultVy = 0.1 * (Math.random() * 2 - 1);
		this._defaultVz = (1 + 1.5 * Math.random()) * 14;

		this.init();
	}
}
