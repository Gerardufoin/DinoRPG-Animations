// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../../../Part.js';
import { Animator } from '../../../../../display/Animator.js';
import { fx_sylphide } from '../../../../../gfx/fx/sylphide.js';
import { IScene, SCENE_FULL_WIDTH, SCENE_WIDTH } from '../../../../IScene.js';
import { ConstantShaderManager } from '../../../../../display/ConstantShaderManager.js';
import { PixiHelper } from '../../../../../display/PixiHelper.js';
import { Timer } from '../../../../Timer.js';

/**
 * Creates a soldier for the Beehive Queen.
 * The soldier flies from one side of the screen to the other, and gets teleported back once done to do it again.
 * Has to be removed manually from the Scene.
 */
export class QueenSoldier extends Part {
	/**
	 * The side where the solder flies from, 0 for left, 1 for right.
	 * @type {number}
	 */
	_side;

	/**
	 * Creates a Beehive Queen soldier, which will fly from the given side to the opposite side.
	 * Once the opposite side has been reached, the solider teleports back with a different Y and do it again.
	 * @param {IScene} scene The Scene where the soldier is instantiated.
	 * @param {number} side The side the soldier flies from, 0 for left, 1 for right.
	 */
	constructor(scene, side) {
		super(new Container(), scene);

		this._side = PixiHelper.mm(0, Math.round(side), 1);

		this._animator = new Animator(false).loadAnimation(fx_sylphide, 1 + Math.round(3 * Math.random()) / 10);
		this._animator.filters = [ConstantShaderManager.getAdjustColorFilter(0, 0, 0, 120)];
		this._animator.angle = 15 * (this._side ? -1 : 1);
		this._root.addChild(this._animator);

		this._vx = 20 * (this._side ? -1 : 1);
		this.init();
	}

	/**
	 * Reinitialize the position of the soldier.
	 */
	init() {
		this._x = SCENE_FULL_WIDTH * this._side + Math.random() * SCENE_WIDTH * (this._side ? 1 : -1);
		this._y = this._scene.getRandomPYPos();
	}

	/**
	 * If the soldier exit the screen, reinitialize it.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if ((this._side && this._x < 0) || (!this._side && this._x > SCENE_FULL_WIDTH)) {
			this.init();
		}
	}
}
