// @ts-check

import { Container, Graphics } from 'pixi.js';
import { Entity } from '../../../Entity.js';
import { IScene } from '../../../IScene.js';
import { Fighter } from '../../../Fighter.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { GlowFilter } from '@pixi/filter-glow';
import { Timer } from '../../../Timer.js';

// GFX 759
/**
 * Creates a ray of water going from the caster position to the target position.
 */
export class WaterRay extends Entity {
	/**
	 * Time taken in frames for the ray to hit the target.
	 * @type {number}
	 */
	static DURATION = 13;
	/**
	 * The border for the ray.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Timer of the ray movement.
	 * @type {number}
	 */
	_movTimer = 0;
	/**
	 * Reference to the ray object to displace.
	 * @type {Container}
	 */
	_waterRay;

	/**
	 * Fire a water ray from the caster position to the target position.
	 * @param {IScene} scene The Scene where the ray is instantiated.
	 * @param {Fighter} caster The Fighter firing the ray.
	 * @param {Fighter} target The target of the ray.
	 */
	constructor(scene, caster, target) {
		super(new Container(), scene);

		const ray = new Container();
		this._waterRay = new Container();
		this._waterRay.addChild(new Asset(ref.fx.water.ray));
		this._waterRay.x = -100;
		ray.addChild(this._waterRay);

		const mask = new Graphics().beginFill(0xff0000).drawRect(-100, -10, 100, 20);
		ray.addChild(mask);
		ray.mask = mask;

		if (!WaterRay.GlowFilter) {
			WaterRay.GlowFilter = new GlowFilter({
				quality: 0.5,
				color: 0xffffff,
				distance: 4,
				outerStrength: 1
			});
		}
		ray.filters = [WaterRay.GlowFilter];
		this._root.addChild(ray);

		this._x = target.getRootContainer().x;
		this._y = this._scene.getGY(target.getRootContainer().y);

		const dx = target.getRootContainer().x - caster.getRootContainer().x;
		const dy = target.getRootContainer().y - caster.getRootContainer().y;
		this._root.angle = Math.atan2(dy, dx) / 0.0174;
		this._root.scale.x = Math.sqrt(dx ** 2 + dy ** 2) / 100;
		this.updatePos();
	}

	/**
	 * Updates the ray movement.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._movTimer < WaterRay.DURATION) {
			this._movTimer = Math.min(this._movTimer + timer.tmod, WaterRay.DURATION);
			const coef = (this._movTimer / WaterRay.DURATION) * 2 - 1;
			this._waterRay.x = 100 * coef;
			if (coef == 1) {
				this.kill();
			}
		}
	}
}
