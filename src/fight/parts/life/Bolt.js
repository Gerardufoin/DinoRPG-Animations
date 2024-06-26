// @ts-check
import { GlowFilter } from '@pixi/filter-glow';
import { Animator } from '../../../display/Animator.js';
import { fx_bolt } from '../../../gfx/fx/bolt.js';
import { Phys2D } from '../Phys2D.js';
import { IScene } from '../../IScene.js';
import { ConstantShaderManager } from '../../../display/ConstantShaderManager.js';

/**
 * Creates a bolt of lightning at the desired position.
 */
export class Bolt extends Phys2D {
	/**
	 * The GlowFilter of the bolts.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter = ConstantShaderManager.getGlowFilter({
		distance: 10,
		color: 0xffff00,
		outerStrength: 2
	});

	/**
	 * Instantiate a new Bolt of lightning at the given coordinates.
	 *
	 * The Bolt will appear after a random short delay and disappear after 5 frames.
	 * @param {IScene} scene The Scene where the Bolt is spawned.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 */
	constructor(scene, x, y) {
		const animator = new Animator(false).loadAnimation(fx_bolt);
		super(animator, scene);

		this._animator = animator;
		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this._x = x;
		this._y = y;
		// The scale is not applied to the SVG for optimization. Does not make a difference visually for the bolt.
		this.setScale(1 + Math.random());
		this._root.angle = Math.random() * 360;
		this._root.filters = [Bolt.GlowFilter];

		this.sleep(Math.random() * 20);
		this.updatePos();
	}
}
