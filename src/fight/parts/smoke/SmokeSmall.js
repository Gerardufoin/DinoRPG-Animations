// @ts-check
// 661

import { Filter } from 'pixi.js';
import { Scene } from '../../Scene.js';
import { Dirt } from './Dirt.js';
import { offsetShader } from '../../../display/shaders/ColorOffsetShader.js';

/**
 * Creates a puff smoke at the given location.
 */
export class SmokeSmall {
	/**
	 * Spawn three clouds of dirt at the given coordinates.
	 * @param {Scene} scene The Scene where the dirt is spawned.
	 * @param {number} x The initial x coordinates.
	 * @param {number} y The initial y coordinates.
	 */
	static spawn(scene, x, y) {
		scene.addSprite(SmokeSmall.createSmoke(scene, x - 5.25, y - 1, -0.35, -0.9), Scene.LAYERS.FIGHTERS);
		scene.addSprite(SmokeSmall.createSmoke(scene, x + 6.35, y + 3.25, 0.2, -0.8), Scene.LAYERS.FIGHTERS);
		scene.addSprite(SmokeSmall.createSmoke(scene, x + 21, y + 1, 0.15, -0.9), Scene.LAYERS.FIGHTERS);
	}

	/**
	 * Creates a puff of smoke at the given coordinates, with the given velocity.
	 * @param {Scene} scene The Scene where the smoke is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vz The initial z velocity.
	 * @returns {Dirt} The created Dirt object.
	 */
	static createSmoke(scene, x, y, vx, vz) {
		const smoke = new Dirt(scene, x, y, vx, vz);
		smoke._dust.filters.push(
			new Filter(undefined, offsetShader, {
				offset: new Float32Array([-11, -51, -92]),
				mult: new Float32Array([1, 1, 1])
			})
		);
		smoke._fadeoutTimer = 40;
		smoke._fadeLimit = 40 - Math.random() * 5;
		smoke._sleep = 5 * Math.random();
		smoke.setScale(1.4);
		smoke.updatePos();
		return smoke;
	}
}
