// @ts-check

import { Container } from 'pixi.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Part } from '../../../Part.js';
import { Timer } from '../../../Timer.js';

// GFX 797
/**
 * A fire wave which grows and fades out over time.
 */
export class FireWave extends Part {
	/**
	 * Time (in frames) taken for the wave to grows and fade out.
	 * @type {number}
	 */
	static WAVE_DURATION = 9;
	/**
	 * Base size of the wave. Doubles over time.
	 * @type {number}
	 */
	static WAVE_BASE_SIZE = 1.5;

	/**
	 * Spawns in a fire wave at the given coordinates, which grows and fades out.
	 * @param {IScene} scene The Scene where the fire wave is instantiated.
	 * @param {number} x The x coordinate.
	 * @param {number} y The y coordinate.
	 */
	constructor(scene, x, y) {
		super(new Container(), scene);

		const wave = new Asset(ref.fx.meteor.wave, 3, false);
		wave.anchor.set(0.5, 0.5);
		wave.scale.set(1 / 3, 0.5 / 3);
		this._root.addChild(wave);

		this._x = x;
		this._y = y;
		this._root.scale.set(FireWave.WAVE_BASE_SIZE);

		this._fadeoutTimer = FireWave.WAVE_DURATION;
		this._fadeLimit = FireWave.WAVE_DURATION;
	}

	/**
	 * Update the fire wave animation.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		const coef = 1 - this._fadeoutTimer / FireWave.WAVE_DURATION;
		this._root.scale.set(FireWave.WAVE_BASE_SIZE + FireWave.WAVE_BASE_SIZE * coef);
	}
}
