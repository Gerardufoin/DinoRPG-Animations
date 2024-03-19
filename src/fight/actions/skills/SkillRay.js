// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../../parts/Phys2D.js';
import { IScene } from '../../IScene.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';

/**
 * The rays generated around a Fighter when casting a skill.
 * The rays spawn with a random rotation and shrink over time, before vanishing.
 */
export class SkillRay extends Phys2D {
	/**
	 * Number of frames it takes to the ray to do its animation.
	 * @type {number}
	 */
	static DURATION = 11;

	/**
	 * Spawn a single ray on x 0 at the given y coordinate.
	 * The ray will shrink and vanish over time.
	 * @param {IScene} scene The Scene where the ray is spawned.
	 * @param {number} y The y coordinate of the ray.
	 */
	constructor(scene, y) {
		super(new Container(), scene);

		const ray = new Asset(ref.fx.ray);
		ray.x += 34;
		this._root.addChild(ray);
		this._y = y;

		this._root.angle = Math.random() * 360;

		this._fadeoutTimer = SkillRay.DURATION;
		this._fadeType = -1;
	}

	/**
	 * Update the ray's size.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._root.scale.set(
			(0.5 * this._fadeoutTimer) / SkillRay.DURATION,
			1 - this._fadeoutTimer / SkillRay.DURATION
		);
	}
}
