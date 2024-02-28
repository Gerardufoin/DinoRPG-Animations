// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Score.hx

import { Container } from 'pixi.js';
import { Phys2D } from './Phys2D.js';
import { ref } from '../../gfx/references.js';
import { Asset } from '../../display/Asset.js';
import { IScene } from '../IScene.js';

/**
 * Instantiate an Item, displaying it at the given coordinates.
 *
 * The Item will base its display on a key from gfx.items and float up before fading out.
 */
export class Item extends Phys2D {
	/**
	 * Create am Item which will spawn at the given coordinates and fade out over time.
	 * @param {IScene} scene The Scene where the Item will be spawned.
	 * @param {string} idx The reference to a gfx.items. If not found, UNK will be used instead.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 */
	constructor(scene, idx, x, y) {
		super(new Container(), scene);
		this._root.addChild(new Asset(ref.items[idx] ?? ref.items.unk));

		this._x = x;
		this._y = y;

		this._vy = -2;
		this._fadeoutTimer = 40;
		this._friction = 0.9;
		this._fadeLimit = 5;
	}
}
