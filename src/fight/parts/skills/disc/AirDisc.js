// @ts-check

import { ColorMatrixFilter, Container } from 'pixi.js';
import { Phys2D } from '../../Phys2D.js';
import { IScene } from '../../../IScene.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { Timer } from '../../../Timer.js';
import { GlowFilter } from '@pixi/filter-glow';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Fighter } from '../../../Fighter.js';
import { DiscShade } from './DiscShade.js';
import { Layers } from '../../../DepthManager.js';

// GFX 737
/**
 * Creates an air disc which homes toward a target.
 */
export class AirDisc extends Phys2D {
	/**
	 * The inner glow of the disc.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static InnerGlow;
	/**
	 * The outer glow of the disc.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static OuterGlow;

	/**
	 * Reference to the disc part of the entity to make it spin.
	 * @type {Asset}
	 */
	_disc;
	/**
	 * The Fighter which fired the disc.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The target of the disc.
	 * @type {Fighter}
	 */
	_target;
	/**
	 * The vertical offset of the disc.
	 * @type {number}
	 */
	_offset;

	/**
	 * If released, the target rushes toward the target.
	 * Otherwise, it hovers in place and grows.
	 * @type {boolean}
	 */
	_released = false;
	/**
	 * The timer used to spawn disc shades when needed.
	 * @type {number}
	 */
	_shadeTimer = 0;

	/**
	 * Creates an air disc above the caster which then homes toward the target.
	 * @param {IScene} scene The Scene where the disc is instantiated.
	 * @param {Fighter} caster The Fighter creating the disc.
	 * @param {Fighter} target The target of the disc.
	 * @param {number} offset The vertical offset of the disc, when multiple discs are created at once.
	 */
	constructor(scene, caster, target, offset) {
		super(new Container(), scene);

		this._caster = caster;
		this._target = target;
		this._offset = offset;

		this._disc = new Asset(ref.fx.air.disc);
		this._disc.anchor.set(0.5, 0.5);

		const shape = new Container();
		shape.addChild(this._disc);
		shape.scale.set(0.64, 0.23);
		if (!AirDisc.InnerGlow) {
			AirDisc.InnerGlow = new GlowFilter({
				quality: 0.5,
				color: 0xffffff,
				distance: 6,
				innerStrength: 2,
				outerStrength: 0
			});
		}
		if (!AirDisc.OuterGlow) {
			AirDisc.OuterGlow = new GlowFilter({
				quality: 0.5,
				color: 0x66bbff,
				distance: 8,
				outerStrength: 3
			});
		}
		shape.filters = [AirDisc.InnerGlow, AirDisc.OuterGlow];
		this._root.addChild(shape);

		this._x = this._caster.position.x;
		this._y = this._caster.position.y + 0.2 * this._offset;
		this._z = -(this._caster.height - this._caster._z + 30);

		this.setScale(0);
		this._ray = 25;
	}

	/**
	 * Updates the disc position and rotation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._disc.angle += 23 * timer.tmod;
		// Spawns shades if released
		if (this._released) {
			this._shadeTimer += timer.tmod;
			if (this._shadeTimer >= 1) {
				this._shadeTimer -= 1;
				this._scene.dm.addSprite(new DiscShade(this._scene, this._root.x, this._root.y), Layers.Scene.SHADE);
			}
		}
	}

	/**
	 * Update the disc based on the current progress of the State which spawned it.
	 * @param {number} coef The coefficient of the State, between 0 and 1.
	 */
	updateCoef(coef) {
		const dh = this.getHeight();
		if (this._released) {
			const th = this._target.position.z - this._target.height * 0.5;

			this._x = this._caster.position.x * (1 - coef) + this._target.position.x * coef;
			this._y = this._caster.position.y * (1 - coef) + this._target.position.y * coef;
			this._z = th * coef - (dh + 25 * this._offset) * (1 - coef);
		} else {
			// Grows in place.
			this._z = -(dh + 25 * this._offset * coef);
			this.setScale(coef);
		}
	}

	/**
	 * Releases the disc toward its target.
	 */
	release() {
		this._released = true;
		this.dropShadow();
		this.updatePos();
	}

	/**
	 * Gets the expected height of the disc compared to the Fighter which casted it.
	 * @returns {number} The computed height.
	 */
	getHeight() {
		return this._caster.height - this._caster.position.z + 30;
	}
}
