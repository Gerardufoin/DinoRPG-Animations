// @ts-check

import { BlurFilter, Container } from 'pixi.js';
import { IScene, SCENE_WIDTH } from '../../IScene.js';
import { Phys } from '../../Phys.js';
import { Animator } from '../../../display/Animator.js';
import { fx_tornado } from '../../../gfx/fx/tornado.js';
import { Timer } from '../../Timer.js';

/**
 * Creates a Tornado in the middle of the screen.
 * The tornado slowly moves left, until "escape" is called, where it moves faster and despawn.
 */
export class Tornado extends Phys {
	/**
	 * The BlurFilter of the tornado.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {BlurFilter}
	 */
	static BlurFilter;

	/**
	 * The tornado animator.
	 * @type {Animator}
	 */
	_animator;
	/**
	 * If true, the Tornado is escaping the scene and speeds up over time.
	 * @type {boolean}
	 */
	_escaping = false;

	/**
	 * Creates a Tornado in the middle of the Scene, moving from the given caster side.
	 * @param {IScene} scene The Scene where the Tornado is spawned in.
	 * @param {number} side The side of the caster (-1 left, 1 right).
	 */
	constructor(scene, side) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_tornado);
		this._root.addChild(this._animator);

		if (!Tornado.BlurFilter) {
			Tornado.BlurFilter = new BlurFilter();
			Tornado.BlurFilter.blurX = 5;
			Tornado.BlurFilter.blurY = 0;
		}
		this._animator.filters = [Tornado.BlurFilter];

		this._x = SCENE_WIDTH * 0.5 + side * (SCENE_WIDTH * 0.25 - 50);
		this._y = this._scene.getPYMiddle();
		this._vx = side * 0.5;
		this._ray = 30;

		this.dropShadow();
		this.updatePos();
	}

	/**
	 * Updates the Tornado animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._animator.update(timer.deltaTimeMS);
		if (this._escaping) {
			this._vx += this._vx * 0.1 * timer.tmod;
		}
		const w = SCENE_WIDTH * 0.5;
		if (Math.abs(this._x - w) > w + 100) {
			this.kill();
		}
	}

	/**
	 * Speeds up the Tornado movement over time.
	 */
	escape() {
		this._escaping = true;
	}
}
