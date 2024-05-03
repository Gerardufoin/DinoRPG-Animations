// @ts-check

import { Container } from 'pixi.js';
import { IScene, SCENE_WIDTH } from '../../IScene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Phys } from '../../Phys.js';
import { GrSpeed } from '../../actions/skills/group/GrSpeed.js';
import { PixiHelper } from '../../../display/PixiHelper.js';

/**
 * Creates a speed line, which can be scaled and moved through the scene based on a given speed.
 */
export class SpeedLine extends Phys {
	/**
	 * The coefficient used to move the line, between 0.5 and 1.
	 * @type {number}
	 */
	_coef;

	/**
	 * Creates a speed line, which can be scaled and moved through the scene based on a given speed.
	 * @param {IScene} scene The Scene where the speed line is instantiated.
	 */
	constructor(scene) {
		super(new Container(), scene);

		this._root.addChild(new Asset(ref.parts.ghost_tail));
		this._root.filters = [GrSpeed.GlowFilter];

		this._x = Math.random() * SCENE_WIDTH;
		this._y = this._scene.getRandomPYPos();
		this._z = -20;

		this._coef = 0.5 + Math.random() * 0.5;
	}

	/**
	 * Moves the line based on the given speed.
	 * @param {number} speed The speed used to move the line, between 0 and 100.
	 * @param {number} tmod The current Timer.tmod.
	 * @param {boolean} grow If true, scales up the line with the speed.
	 */
	move(speed, tmod, grow) {
		this._x += speed * this._coef * tmod;
		if (this._x > SCENE_WIDTH) {
			this._x = -this._root.scale.x * 100;
			this._y = this._scene.getRandomPYPos();
		}
		this._root.scale.y = PixiHelper.mm(0, (speed / 100) * this._coef, 1);
		if (grow) {
			this._root.scale.x = (speed / 100) * this._coef * 8;
		}
	}
}
