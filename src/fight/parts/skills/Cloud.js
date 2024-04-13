// @ts-check
import { Color, Container } from 'pixi.js';
import { Part } from '../../Part.js';
import { Timer } from '../../Timer.js';
import { Animator } from '../../../display/Animator.js';
import { fx_cloud } from '../../../gfx/fx/cloud.js';
import { IScene, SCENE_WIDTH } from '../../IScene.js';
import { ConstantShaderManager } from '../../../display/ConstantShaderManager.js';

/**
 * Creates a colored cloud which fades out over time.
 */
export class Cloud extends Part {
	/**
	 * The rotation speed of the cloud.
	 * @type {number}
	 */
	_rotSpeed = 0;
	/**
	 * The container of the cloud inside the animation.
	 * @type {Container}
	 */
	_smc;

	/**
	 * A moving colored cloud which fades out over time.
	 * @param {IScene} scene The Scene where the cloud is instantiated.
	 * @param {number} side The side of the caster. -1 left, 1 right.
	 * @param {number} color The color of the cloud.
	 */
	constructor(scene, side, color) {
		super(new Container(), scene);

		const cloud = new Animator(false).loadAnimation(fx_cloud);
		this._animator = cloud;
		this._smc = cloud.getChildByName('smc', true);
		this._root.addChild(cloud);

		const w = SCENE_WIDTH * 0.5;
		this._x = w + (Math.random() * w - 20) * side;
		this._y = this._scene.getRandomPYPos();
		this._vx = (5 + Math.random() * 10) * side;

		this._fadeoutTimer = 40;
		this._rotSpeed = (3 + Math.random() * 10) * side;
		this.updatePos();

		// Set the color of the cloud
		const col = new Color(color);
		const decal = Math.floor(Math.random() * 50);
		cloud.filters = [
			ConstantShaderManager.getColorOffsetFilter(
				col.red * 255 + decal,
				col.green * 255 + decal,
				col.blue * 255 + decal,
				0,
				0,
				0
			)
		];
	}

	/**
	 * Update the rotation of the cloud.
	 * @param {Timer} timer The fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._smc) {
			this._smc.angle += this._rotSpeed * timer.tmod;
		}
	}
}
