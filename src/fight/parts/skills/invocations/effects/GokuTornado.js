// @ts-check
import { Container } from 'pixi.js';
import { Phys } from '../../../../Phys.js';
import { Animator } from '../../../../../display/Animator.js';
import { IScene, SCENE_WIDTH } from '../../../../IScene.js';
import { fx_tornado } from '../../../../../gfx/fx/tornado.js';
import { ConstantShaderManager } from '../../../../../display/ConstantShaderManager.js';
import { Timer } from '../../../../Timer.js';

/**
 * Creates a Tornado in the middle of the screen which stays in place until removed.
 */
export class GokuTornado extends Phys {
	/**
	 * The tornado animator.
	 * @type {Animator}
	 */
	_animator;

	/**
	 * Creates a Tornado in the middle of the Scene.
	 * @param {IScene} scene The Scene where the Tornado is spawned in.
	 */
	constructor(scene) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_tornado, 3);
		this._animator.filters = [ConstantShaderManager.getBlurFilter(5, 0)];
		this._root.addChild(this._animator);

		this._x = SCENE_WIDTH * 0.5;
		this._y = this._scene.getPYMiddle();
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
	}
}
