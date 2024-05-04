// @ts-check

import { Container } from 'pixi.js';
import { Phys2D } from '../Phys2D.js';
import { IScene } from '../../IScene.js';
import { Animator } from '../../../display/Animator.js';
import { fx_ray_concentrate } from '../../../gfx/fx/ray_concentrate.js';
import { fx_ray_generate } from '../../../gfx/fx/ray_generate.js';

/**
 * The rays generated around a Fighter when casting a skill.
 * The rays spawn with a random rotation and expands over time, before vanishing.
 */
export class RayGenerate extends Phys2D {
	/**
	 * Spawn a single ray on x 0 at the given y coordinate.
	 * The ray will expand and vanish over time.
	 * @param {IScene} scene The Scene where the ray is spawned.
	 * @param {number} y The y coordinate of the ray.
	 * @param {number} scale The size of the ray.
	 */
	constructor(scene, y, scale) {
		super(new Container(), scene);

		this._animator = new Animator(false).loadAnimation(fx_ray_generate, Math.floor(scale * 10) * 0.1);
		this._root.addChild(this._animator);

		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this._y = y;
		this._root.angle = Math.random() * 360;
	}
}
