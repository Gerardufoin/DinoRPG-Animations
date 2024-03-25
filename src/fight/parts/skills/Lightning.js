// @ts-check

import { BLEND_MODES, Container, Graphics } from 'pixi.js';
import { Entity } from '../../Entity.js';
import { IScene } from '../../IScene.js';
import { Bolt } from '../life/Bolt.js';
import { Fighter } from '../../Fighter.js';

/**
 * Creates a lightning striking the given target. The strike can be updated to have a random look.
 */
export class Lightning extends Entity {
	/**
	 * The lightning strike.
	 * @type {Graphics}
	 */
	_lightning;
	/**
	 * The target of the strike.
	 * @type {Fighter}
	 */
	_target;

	/**
	 * Instantiates the lightning strike on the given target.
	 * @param {IScene} scene The Scene where the lightning strike is happening.
	 * @param {Fighter} target The target of the lightning strike.
	 */
	constructor(scene, target) {
		super(new Container(), scene);

		this._target = target;
		this._x = this._target.position.x;
		this._y = this._target.position.y - 0.5;

		this._lightning = new Graphics();
		this._lightning.blendMode = BLEND_MODES.ADD;
		this._lightning.filters = [Bolt.GlowFilter];
		this._root.addChild(this._lightning);
		this.updatePos();
		this.updateDisplay();
	}

	/**
	 * Updates the display of the lightning strike to have a random appearance.
	 */
	updateDisplay() {
		this._lightning.clear();
		for (let i = 0; i < 3; ++i) {
			let y = 0;
			let ec = 20;
			this._lightning.lineStyle(i + 1, 0xffffff);
			this._lightning.moveTo((Math.random() * 2 - 1) * this._target.ray, 0);
			while (this._root.y + y >= 0) {
				y -= 30 + Math.random() * 30;
				const x = (Math.random() * 2 - 1) * ec;
				this._lightning.lineTo(x, y);
				ec *= 0.5;
			}
		}
	}
}
