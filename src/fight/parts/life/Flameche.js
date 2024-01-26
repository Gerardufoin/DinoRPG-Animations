// @ts-check
import { Animator } from '../../../display/Animator.js';
import { fx_flameche } from '../../../gfx/fx/flameche.js';
import { Scene } from '../../Scene.js';
import { Phys2D } from '../Phys2D.js';

/**
 * Creates a small burst of flames at the desired position.
 */
export class Flameche extends Phys2D {
	/**
	 * Instantiate a new small burst of flames at the given coordinates.
	 *
	 * The flames will disappear at the end of their animation, based on their Destroy callback.
	 * @param {Scene} scene The Scene where the Bolt is spawned.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 * @param {number} intSide The side where the flames points toward, either 1 or -1.
	 * @param {number} sleep Random amount of time before the flame appears.
	 */
	constructor(scene, x, y, intSide, sleep) {
		const animator = new Animator(false).loadAnimation(fx_flameche);
		super(animator, scene);

		this._animator = animator;
		this._animator.registerCallback('destroy', () => {
			this.kill();
		});

		this._x = x;
		this._y = y;
		this._vx = -Math.random() * 2 * intSide;
		this._sleep = sleep;

		this._root.angle = -intSide * 30;
		this._animator.playing = false;
		this._root.visible = false;

		this.updatePos();
	}
}
