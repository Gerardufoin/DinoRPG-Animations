// @ts-check

import { Container, Graphics } from 'pixi.js';
import { Part } from '../../../Part.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Animator } from '../../../../display/Animator.js';
import { fx_vine } from '../../../../gfx/fx/vine.js';
import { Timer } from '../../../Timer.js';

// GFX 9
/**
 * Creates a static vine at the given position, which grows up and disappear.
 */
export class StaticVine extends Part {
	/**
	 * The border for the vines.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter = new GlowFilter({
		quality: 0.5,
		color: 0x382914,
		distance: 1,
		outerStrength: 8
	});

	/**
	 * The vine animation.
	 * @type {Animator}
	 */
	_vine;

	/**
	 * Creates a static vine in the scene.
	 * @param {IScene} scene The Scene where the vine is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 * @param {number} ray The spawn radius.
	 */
	constructor(scene, x, y, ray) {
		super(new Container(), scene);

		this._vine = new Animator(false).loadAnimation(fx_vine);
		this._vine.scale.x = Math.floor(Math.random() * 2) * 2 - 1;
		this._vine.filters = [StaticVine.GlowFilter];
		this._root.addChild(this._vine);

		const mask = new Graphics().beginFill(0xff0000).drawRect(-15, -60, 30, 60);
		this._root.addChild(mask);
		this._root.mask = mask;

		this._x = x + (Math.random() * 2 - 1) * ray;
		this._y = y + (Math.random() * 2 - 1) * ray * 0.5;
		this.updatePos();

		this._vine.setFrame(Math.floor(Math.random() * 15));
		this._fadeoutTimer = 100 + Math.random() * 30;
		this._fadeScale = true;
	}

	/**
	 * Updates the vine animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._vine.update(timer.deltaTimeMS);
	}
}
