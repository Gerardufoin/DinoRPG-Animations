// @ts-check
// 661

import { Filter } from 'pixi.js';
import { Scene } from '../../Scene.js';
import { Dirt } from './Dirt.js';
import { offsetShader } from '../../../display/shaders/ColorOffsetShader.js';

/**
 * Creates a big puff smoke at the given location.
 */
export class Smoke {
	static RANDOM_OFFSET = 5;
	// GFX 679
	/**
	 * Spawn three big clouds of dirt at the given coordinates.
	 * @param {Scene} scene The Scene where the dirt is spawned.
	 * @param {number} x The initial x coordinates.
	 * @param {number} y The initial y coordinates.
	 */
	static spawn(scene, x, y) {
		scene.addSprite(Smoke.createSmoke(scene, x - 10.45, y - 1.85, -0.6, -1.5, 3), Scene.LAYERS.FIGHTERS);
		scene.addSprite(Smoke.createSmoke(scene, x + 12.6, y + 6.5, 0.4, -1.3, 3), Scene.LAYERS.FIGHTERS);
		scene.addSprite(Smoke.createSmoke(scene, x + 41, y + 2, -0.15, -1.4, 3), Scene.LAYERS.FIGHTERS);
	}

	// GFX 661
	/**
	 * Spawn three clouds of dirt at the given coordinates.
	 * @param {Scene} scene The Scene where the dirt is spawned.
	 * @param {number} x The initial x coordinates.
	 * @param {number} y The initial y coordinates.
	 */
	static spawnSmall(scene, x, y) {
		scene.addSprite(Smoke.createSmoke(scene, x - 5.25, y - 1, -0.55, -0.9, 1.4), Scene.LAYERS.FIGHTERS);
		scene.addSprite(Smoke.createSmoke(scene, x + 2, y + 3.25, 0.2, -0.8, 1.4), Scene.LAYERS.FIGHTERS);
		scene.addSprite(Smoke.createSmoke(scene, x + 10, y + 1, 0.35, -0.9, 1.4), Scene.LAYERS.FIGHTERS);
	}

	/**
	 * Creates a puff of smoke at the given coordinates, with the given velocity.
	 * @param {Scene} scene The Scene where the smoke is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vz The initial z velocity.
	 * @param {number} scale The scale of the smoke.
	 * @returns {Dirt} The created Dirt object.
	 */
	static createSmoke(scene, x, y, vx, vz, scale = 1) {
		const smoke = new Dirt(
			scene,
			x + (Smoke.RANDOM_OFFSET * Math.random() - Smoke.RANDOM_OFFSET / 2) * scale,
			y + (Smoke.RANDOM_OFFSET * Math.random() - Smoke.RANDOM_OFFSET / 2) * scale,
			vx,
			vz
		);
		smoke._dust.filters.push(
			new Filter(undefined, offsetShader, {
				offset: new Float32Array([-11, -51, -92]),
				mult: new Float32Array([1, 1, 1])
			})
		);
		smoke.setAlpha(0.8);
		smoke._fadeoutTimer = 30;
		smoke._fadeLimit = 30 - Math.random() * 5;
		smoke._rotationTimer = Math.random() * Dirt.LOOP_TIME;
		smoke.setScale(scale);
		smoke.updatePos();
		return smoke;
	}
}