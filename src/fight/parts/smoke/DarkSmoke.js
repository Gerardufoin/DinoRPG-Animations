// @ts-check
// 661

import { Filter } from 'pixi.js';
import { Dirt } from './Dirt.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene } from '../../IScene.js';
import { Layers } from '../../DepthManager.js';

/**
 * Creates a big puff of corrupted smoke at the given location.
 */
export class DarkSmoke {
	/**
	 * Offset the Smoke by a random amount at spawn.
	 * @type {number}
	 */
	static RANDOM_OFFSET = 5;
	/**
	 * The ColorOffsetFilter of the Smoke.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {Filter}
	 */
	static ColorOffsetFilter;

	/**
	 * Spawn three big clouds of dark smoke at the given coordinates.
	 * @param {IScene} scene The Scene where the dirt is spawned.
	 * @param {number} x The initial x coordinates.
	 * @param {number} y The initial y coordinates.
	 */
	static spawn(scene, x, y) {
		scene.dm.addSprite(DarkSmoke.createSmoke(scene, x - 10.45, y - 1.85, -0.6, -1.5, 3), Layers.Scene.FIGHTERS);
		scene.dm.addSprite(DarkSmoke.createSmoke(scene, x + 12.6, y + 6.5, 0.4, -1.3, 3), Layers.Scene.FIGHTERS);
		scene.dm.addSprite(DarkSmoke.createSmoke(scene, x + 41, y + 2, -0.15, -1.4, 3), Layers.Scene.FIGHTERS);
	}

	/**
	 * Creates a puff of dark smoke at the given coordinates, with the given velocity.
	 * @param {IScene} scene The Scene where the smoke is spawned in.
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
			x + (DarkSmoke.RANDOM_OFFSET * Math.random() - DarkSmoke.RANDOM_OFFSET / 2) * scale,
			y + (DarkSmoke.RANDOM_OFFSET * Math.random() - DarkSmoke.RANDOM_OFFSET / 2) * scale,
			vx,
			vz
		);
		if (!DarkSmoke.ColorOffsetFilter) {
			DarkSmoke.ColorOffsetFilter = PixiHelper.colorOffsetFilter(-180, -200, -200);
		}
		smoke._dust.filters.push(DarkSmoke.ColorOffsetFilter);
		smoke.setAlpha(0.5);
		smoke._fadeoutTimer = 30;
		smoke._fadeLimit = 30 - Math.random() * 5;
		smoke._rotationTimer = Math.random() * Dirt.LOOP_TIME;
		smoke.setScale(scale);
		smoke.updatePos();
		return smoke;
	}
}
