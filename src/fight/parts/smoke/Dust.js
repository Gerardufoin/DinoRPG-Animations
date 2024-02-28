// @ts-check
// 645

import { Part } from '../../Part.js';
import { ref } from '../../../sdino/references.js';
import { Container } from 'pixi.js';
import { Asset } from '../../../display/Asset.js';
import { IScene } from '../../IScene.js';

/**
 * Create a Dust particle at the given coordinates.
 */
export class Dust extends Part {
	/**
	 * Creates a Dust particle at the given coordinates.
	 * @param {IScene} scene The Scene where the Dust is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);
		this._root.addChild(new Asset(ref.fx.dust));

		this._x = x;
		this._y = y;
	}
}
