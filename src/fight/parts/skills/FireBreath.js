// @ts-check

import { Container } from 'pixi.js';
import { IScene } from '../../IScene.js';
import { Part } from '../../Part.js';
import { Asset } from '../../../display/Asset.js';
import { ref } from '../../../gfx/references.js';
import { Timer } from '../../Timer.js';
import { PixiHelper } from '../../../display/PixiHelper.js';

/**
 * A single particle of a fire breath.
 */
export class FireBreath extends Part {
	/**
	 * Time taken for the particle to change color and die.
	 * @type {number}
	 */
	static PARTICLE_DURATION = 16;
	/**
	 * The increase in size of the particle over the duration.
	 * @type {number}
	 */
	static PARTICLE_SIZE_INC = 7;
	/**
	 * The resolution of the SVG.
	 * @type {number}
	 */
	static PARTICLE_RESOLUTION = 5;

	/**
	 * Reference to the particle to change its color.
	 * @type {Asset}
	 */
	_particle;
	/**
	 * Timer for the color change.
	 * @type {number}
	 */
	_colorTimer = 0;

	/**
	 * Instantiate a fire breath particle at the given coordinates, going in the given direction.
	 * @param {IScene} scene The Scene where the particle is instantiated.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} sens The direction the breath is coming from (1 from left, -1 from right).
	 */
	constructor(scene, x, y, z, sens) {
		super(new Container(), scene);

		this._particle = new Asset(ref.fx.fire_breath, FireBreath.PARTICLE_RESOLUTION);
		this._root.addChild(this._particle);

		this._x = x;
		this._y = y;
		this._z = z;

		this._vx = (4 + Math.random() * 7) * sens;
		this._vy = (Math.random() * 2 - 1) * 3;

		this._fadeoutTimer = 15 + Math.random() * 5;

		this._vr = (Math.random() * 2 - 1) * 8;
		this._root.angle = Math.random() * 360;
	}

	/**
	 * Updates the timer of the color change.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._colorTimer < FireBreath.PARTICLE_DURATION) {
			this._colorTimer = Math.min(this._colorTimer + timer.tmod, FireBreath.PARTICLE_DURATION);
			this._particle.tint = PixiHelper.getFireColorGradient(
				this._colorTimer / FireBreath.PARTICLE_DURATION,
				1.5,
				3,
				4
			);
			this._root.scale.set(
				(1.5 + (this._colorTimer / FireBreath.PARTICLE_DURATION) * FireBreath.PARTICLE_SIZE_INC) /
					FireBreath.PARTICLE_RESOLUTION
			);
		}
	}
}
