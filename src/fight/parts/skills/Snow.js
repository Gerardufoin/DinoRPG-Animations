// @ts-check
import { Animator } from '../../../display/Animator.js';
import { fx_petal } from '../../../gfx/fx/petal.js';
import { PixiHelper } from '../../../display/PixiHelper.js';
import { IScene } from '../../IScene.js';
import { ConstantShaderManager } from '../../../display/ConstantShaderManager.js';
import { Phys2D } from '../Phys2D.js';
import { Timer } from '../../Timer.js';

// 961 partAuraSnow
/**
 * Creates a snow particle which flutters toward a given height.
 */
export class Snow extends Phys2D {
	/**
	 * Instantiate a new snow particle at the given coordinates.
	 * @param {IScene} scene The Scene where the Snow is spawned.
	 * @param {number} type If 0, the base is a yellow leaf. Otherwise, it is a smaller green leaf.
	 * @param {number} color The color of the glow.
	 * @param {number} rainbowPercent Apply a percentage of a random color from the rainbow.
	 * @param {number} x The initial x coordinate.
	 * @param {number} y The initial y coordinate.
	 */
	constructor(scene, type, color, rainbowPercent, x, y) {
		const animator = new Animator(false).loadAnimation(fx_petal);
		super(animator, scene);

		this._animator = animator;

		this._x = x;
		this._y = y;

		this._vy = Math.random() * 2;
		this._weight = 0.1 + Math.random() * 0.2;
		this._fadeoutTimer = 10 + Math.random() * 20;
		this._root.angle = Math.random() * 360;
		this._fadeScale = true;

		this._root.filters = [];
		// Color swap and scale if type 1
		if (type > 0) {
			this._root.filters.push(ConstantShaderManager.getAdjustColorFilter(0, -10, -45, 49));
			this.setScale(0.7);
		}

		// Rainbow color
		if (rainbowPercent > 0) {
			const c = PixiHelper.getRainbow();
			const filter = PixiHelper.colorOffsetFilter(0, 0, 0);
			PixiHelper.setPercentColor(filter, rainbowPercent, c);
			this._root.filters.push(filter);
		}

		// Glow color
		this._root.filters.push(
			ConstantShaderManager.getGlowFilter({
				distance: 4,
				color: color,
				quality: 0.5,
				outerStrength: 2
			})
		);
	}

	/**
	 * Stops the snow once it reaches a specific height.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._y > 8) {
			this._y = 8;
			this._vx = 0;
			this._vy = 0;
			this._weight = 0;
			this._animator.playing = false;
		}
	}
}
