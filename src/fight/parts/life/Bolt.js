// @ts-check
import { GlowFilter } from '@pixi/filter-glow';
import { Animator } from '../../../display/Animator.js';
import { fx_bolt } from '../../../gfx/fx/bolt.js';
import { Scene } from '../../Scene.js';
import { Phys2D } from '../Phys2D.js';

/**
 * Creates a bolt of lightning at the desired position.
 */
export class Bolt extends Phys2D {
	/**
	 * The GlowFilter of the bolts.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter;

	/**
	 * Instantiate a new Bolt of lightning at the given coordinates.
	 *
	 * The Bolt will appear after a random short delay and disappear after 5 frames.
	 * @param {Scene} scene The Scene where the Bolt is spawned.
	 * @param {number} x The initial X coordinate.
	 * @param {number} y The initial Y coordinate.
	 */
	constructor(scene, x, y) {
		// Round random scale to first digit to optimize SVG loading
		const animator = new Animator(false).loadAnimation(fx_bolt, Math.round((1 + Math.random()) * 10) / 10);
		super(animator, scene);

		this._animator = animator;
		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this._x = x;
		this._y = y;
		this._root.angle = Math.random() * 360;
		this._root.alpha = 0.8;

		if (!Bolt.GlowFilter) {
			Bolt.GlowFilter = new GlowFilter({
				distance: 10,
				color: 0xffff00,
				outerStrength: 2
			});
		}
		this._root.filters = [Bolt.GlowFilter];

		this._sleep = Math.random() * 20;
		this._animator.playing = false;
		this._root.visible = false;

		this.updatePos();
	}
}
