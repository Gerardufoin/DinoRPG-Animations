// @ts-check

import { BLEND_MODES, Container } from 'pixi.js';
import { Asset } from '../../display/Asset.js';
import { ref } from '../../gfx/references.js';
import { IScene } from '../IScene.js';
import { Phys2D } from './Phys2D.js';

/**
 * Spawns an asset from GFX and fades it out over the given number of frames.
 */
export class FadeFX extends Phys2D {
	/**
	 * Create a new asset with the given scale at the given coordinates.
	 * @param {IScene} scene The Scene where the asset is spawned in.
	 * @param {string} asset The reference to the gfx fx assets. Has to be an index from gfx.fx.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} direction The vertical scale, to choose the direction of the fx.
	 * @param {number} frames The number of frames needed to fade out.
	 * @param {number} delay The number of frames to wait before starting to fade out.
	 * @param {number} scale The scale of the fx.
	 */
	constructor(scene, asset, x, y, direction, frames, delay, scale) {
		super(new Container(), scene);
		if (!ref.fx[asset]) {
			this.kill();
			return;
		}
		const ast = new Asset(ref.fx[asset], scale);
		ast.blendMode = BLEND_MODES.MULTIPLY;
		this._root.addChild(ast);
		this._root.scale.x = direction;
		this._x = x;
		this._y = y;
		this._fadeoutTimer = frames;
		this._fadeLimit = frames - delay;
	}
}
