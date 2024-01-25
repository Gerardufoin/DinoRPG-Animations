// @ts-check
// 645

import { Part } from '../../Part.js';
import { ref } from '../../../sdino/references.js';
import { TextureManager } from '../../../display/TextureManager.js';
import { Container, Sprite } from 'pixi.js';
import { Scene } from '../../Scene.js';

/**
 * Create a Dust particle at the given coordinates.
 */
export class Dust extends Part {
	/**
	 * Creates a Dust particle at the given coordinates.
	 * @param {Scene} scene The Scene where the Dust is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		const dustText = TextureManager.getTextureFromCompressedReference(ref.fx.dust);
		const dustSp = new Sprite(dustText);
		dustSp.x = -ref.fx.dust.offset.x;
		dustSp.y = -ref.fx.dust.offset.y;
		const dust = new Container();
		dust.addChild(dustSp);
		super(dust, scene);

		this._x = x;
		this._y = y;
	}
}
