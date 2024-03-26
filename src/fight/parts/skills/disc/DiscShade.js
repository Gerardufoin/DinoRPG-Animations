// @ts-check

import { Container, Graphics } from 'pixi.js';
import { Phys2D } from '../../Phys2D.js';
import { IScene } from '../../../IScene.js';

// GFX 739
/**
 * Creates a disc shade at the given position, which fades out rapidly.
 */
export class DiscShade extends Phys2D {
	/**
	 * Creates a shade in a disc form at the given coordinates.
	 * @param {IScene} scene The Scene where the shade is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		const shade = new Graphics().beginFill(0xffffff).drawCircle(0, 0, 29);
		shade.scale.set(1.1, 0.4);
		this._root.addChild(shade);

		this._x = x;
		this._y = y;
		this._fadeoutTimer = this._fadeLimit = 7;
	}
}
