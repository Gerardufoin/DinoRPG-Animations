// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/sp/Acid.hx + _LAcid in Fighter

import { Container } from 'pixi.js';
import { IScene } from '../../IScene.js';
import { Phys2D } from '../Phys2D.js';
import { Animator } from '../../../display/Animator.js';
import { fx_light_heal } from '../../../gfx/fx/light_heal.js';

// GFX 710
/**
 * Instantiate a heal particle, which sparkles.
 */
export class Heal extends Phys2D {
	/**
	 * Create a healing spark at the given coordinates.
	 * @param {IScene} scene The Scene where the acid is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);
		this._animator = new Animator(false).loadAnimation(fx_light_heal);
		this._animator.playing = false;
		this._root.addChild(this._animator);

		this._x = x;
		this._y = y;
		this.sleep(Math.random() * 20);

		this.setScale(0.5 + Math.random());
		this._weight = -(0.02 + Math.random() * 0.1);
		this._fadeoutTimer = 10 + Math.random() * 20;
		this.updatePos();
	}
}
