// @ts-check
// 661

import { Filter } from 'pixi.js';
import { Dirt } from './Dirt.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene } from '../../IScene.js';
import { Layers } from '../../DepthManager.js';

export const SmokeType = {
	Dirt: 0,
	Steam: 1,
	Burn: 2
};

/**
 * Creates a big puff smoke at the given location.
 */
export class Smoke {
	/**
	 * Offset the Smoke by a random amount at spawn.
	 * @type {number}
	 */
	static RANDOM_OFFSET = 5;
	/**
	 * The ColorOffsetFilter of dirt.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {Filter}
	 */
	static DirtFilter;
	/**
	 * The ColorOffsetFilter of burn.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {Filter}
	 */
	static BurnFilter;

	// GFX 679
	// GFX 650 (if steam)
	// GFX 648 (if burn)
	/**
	 * Spawn three big clouds of dirt at the given coordinates.
	 * @param {IScene} scene The Scene where the dirt is spawned.
	 * @param {number} x The initial x coordinates.
	 * @param {number} y The initial y coordinates.
	 * @param {number} alpha The alpha of the smoke. 0.8 by default.
	 * @param {number} type The type of smoke, a value from SmokeType. Dirt by default.
	 */
	static spawn(scene, x, y, alpha = 0.8, type = SmokeType.Dirt) {
		scene.dm.addSprite(
			Smoke.createSmoke(scene, x - 10.45, y - 1.85, -0.6, -1.5, 3, alpha, type),
			Layers.Scene.FIGHTERS
		);
		scene.dm.addSprite(
			Smoke.createSmoke(scene, x + 12.6, y + 6.5, 0.4, -1.3, 3, alpha, type),
			Layers.Scene.FIGHTERS
		);
		scene.dm.addSprite(Smoke.createSmoke(scene, x + 41, y + 2, -0.15, -1.4, 3, alpha, type), Layers.Scene.FIGHTERS);
	}

	// GFX 661
	// GFX 649 (if steam)
	/**
	 * Spawn three clouds of dirt at the given coordinates.
	 * @param {IScene} scene The Scene where the dirt is spawned.
	 * @param {number} x The initial x coordinates.
	 * @param {number} y The initial y coordinates.
	 * @param {number} alpha The alpha of the smoke. 0.8 by default.
	 * @param {number} type The type of smoke, a value from SmokeType. Dirt by default.
	 */
	static spawnSmall(scene, x, y, alpha = 0.8, type = SmokeType.Dirt) {
		scene.dm.addSprite(
			Smoke.createSmoke(scene, x - 9.25, y - 1, -0.9, -1.3, 1.4, alpha, type),
			Layers.Scene.FIGHTERS
		);
		scene.dm.addSprite(
			Smoke.createSmoke(scene, x + 2, y + 1.5, 0.2, -1.4, 1.4, alpha, type),
			Layers.Scene.FIGHTERS
		);
		scene.dm.addSprite(Smoke.createSmoke(scene, x + 12, y + 1, 0.7, -1.3, 1.4, alpha, type), Layers.Scene.FIGHTERS);
	}

	/**
	 * Creates a puff of smoke at the given coordinates, with the given velocity.
	 * @param {IScene} scene The Scene where the smoke is spawned in.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vz The initial z velocity.
	 * @param {number} scale The scale of the smoke. 1 by default.
	 * @param {number} alpha The alpha of the smoke. 0.8 by default.
	 * @param {number} type The type of smoke, a value from SmokeType. Dirt by default.
	 * @returns {Dirt} The created smoke.
	 */
	static createSmoke(scene, x, y, vx, vz, scale = 1, alpha = 0.8, type = SmokeType.Dirt) {
		const smoke = new Dirt(
			scene,
			x + (Smoke.RANDOM_OFFSET * Math.random() - Smoke.RANDOM_OFFSET / 2) * scale,
			y + (Smoke.RANDOM_OFFSET * Math.random() - Smoke.RANDOM_OFFSET / 2) * scale,
			vx,
			vz
		);

		switch (type) {
			case SmokeType.Dirt:
				if (!Smoke.DirtFilter) {
					Smoke.DirtFilter = PixiHelper.colorOffsetFilter(-11, -51, -92);
				}
				smoke._dust.filters.push(Smoke.DirtFilter);
				break;
			case SmokeType.Burn:
				if (!Smoke.BurnFilter) {
					Smoke.BurnFilter = PixiHelper.colorOffsetFilter(-210, -255, -255);
				}
				smoke._dust.filters.push(Smoke.BurnFilter);
				break;
		}
		smoke.setAlpha(alpha);
		smoke._fadeoutTimer = 30;
		smoke._fadeLimit = 30 - Math.random() * 5;
		smoke._rotationTimer = Math.random() * Dirt.LOOP_TIME;
		smoke.setScale(scale);
		smoke.updatePos();
		return smoke;
	}
}
