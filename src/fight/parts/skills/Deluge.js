// @ts-check

import { Container } from 'pixi.js';
import { Part } from '../../Part.js';
import { IScene, SCENE_WIDTH } from '../../IScene.js';
import { Animator } from '../../../display/Animator.js';
import { fx_wave } from '../../../gfx/fx/wave.js';
import { ConstantShaderManager } from '../../../display/ConstantShaderManager.js';

/**
 * Creates a wave which fades out over time.
 */
export class Deluge extends Part {
	/**
	 * Creates a wave which fades out over time and goes on the opposite of the given side.
	 * @param {IScene} scene The Scene where the wave is instantiated.
	 * @param {number} side The side of the caster of the wave. -1 for left, 1 for right.
	 */
	constructor(scene, side) {
		super(new Container(), scene);

		const scale = 1.5;
		const wave = new Animator(false).loadAnimation(fx_wave, scale);
		wave.scale.set(1 / scale);
		this._animator = wave;
		this._root.addChild(wave);

		// Increase the whiteness of some of the waves
		const o = Math.floor(Math.random() * 0.5 * 150);
		wave.filters = [ConstantShaderManager.getColorOffsetFilter(o, o, o)];

		this.setScale(0.5 + Math.random() * 0.8);
		this._root.scale.x *= side;

		const w = SCENE_WIDTH * 0.5;
		this._x = w + (Math.random() * w - 20 - 80) * side;
		this._y = this._scene.getRandomPYPos();
		this._vx = side * (5 + Math.random() * 10) * 0.8;

		this._fadeoutTimer = 40;
	}
}
