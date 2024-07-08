// @ts-check

import { Container } from 'pixi.js';
import { Leaf } from '../effects/Leaf.js';
import { IScene, SCENE_HEIGHT } from '../../IScene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';

/**
 * Creates a feather a the given coordinates.
 * The feather falls toward the ground while moving back and forth.
 */
export class Feather extends Leaf {
	/**
	 * Creates a feather a the given coordinates.
	 * The feather falls toward the ground wile moving back and forth.
	 * @param {IScene} scene The Scene where the feather is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		this._root.addChild(new Asset(ref.fx.feather));

		this._x = x;
		this._y = y;
		this._z = -1.5 * SCENE_HEIGHT;

		this._defaultVx = 0;
		this._defaultVy = 0.1 * (Math.random() * 2 - 1);
		this._defaultVz = 1 + 2 * Math.random() + Math.random();
		this.init();
	}

	/**
	 * Makes the feather slowly vanish over time.
	 */
	dispose() {
		this._fadeoutTimer = 20;
		this._fadeLimit = 20;
	}

	/**
	 * Overrides the fall ending method to do nothing.
	 */
	onEnd() {}
}
