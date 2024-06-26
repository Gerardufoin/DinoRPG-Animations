// @ts-check
import { GlowFilter } from '@pixi/filter-glow';
import { Animator } from '../../../display/Animator.js';
import { Faller } from '../effects/Faller.js';
import { fx_petal } from '../../../gfx/fx/petal.js';
import { ColorMatrixFilter } from 'pixi.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene } from '../../IScene.js';
import { ConstantShaderManager } from '../../../display/ConstantShaderManager.js';

// 961
/**
 * Creates a leaf which flutters toward the ground.
 */
export class Leaf extends Faller {
	/**
	 * The GlowFilter creating the outline.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GreenOutlineFilter;

	/**
	 * Instantiate a new leaf at the given coordinates.
	 * @param {IScene} scene The Scene where the Leaf is spawned.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} z The initial z coordinate.
	 * @param {number} vx The initial x velocity.
	 * @param {number} vz The initial z velocity.
	 */
	constructor(scene, x, y, z, vx, vz) {
		const animator = new Animator(false).loadAnimation(fx_petal);
		super(animator, scene);

		this._animator = animator;

		this._x = x;
		this._y = y;
		this._z = z;
		this._vx = vx;
		this._vz = vz;
		this._root.angle = Math.random() * 360;
		this.setScale(0.7 - Math.random() * 0.2);
		this._weight = 0.1 + Math.random() * 0.15;
		this._fadeoutTimer = 10 + Math.random() * 30;
		this._animator.setFrame(Math.round(Math.random() * 10 + 1));

		if (!Leaf.GreenOutlineFilter) {
			Leaf.GreenOutlineFilter = new GlowFilter({
				distance: 2,
				color: 0x227700,
				outerStrength: 12,
				quality: 0.5
			});
		}
		this._root.filters = [ConstantShaderManager.getAdjustColorFilter(0, -10, -45, 49), Leaf.GreenOutlineFilter];

		this._fadeLimit = 5;

		this.updatePos();
	}
}
