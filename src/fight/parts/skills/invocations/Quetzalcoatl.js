// @ts-check
import { Asset } from '../../../../display/Asset.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { AlphaFilter, Graphics } from 'pixi.js';

/**
 * Invokes Quetzalcoatl upon the Scene.
 */
export class Quetzalcoatl extends Invocation {
	/**
	 * Number of frames needed for the aura to fully grow.
	 * @type {number}
	 */
	static AURA_GROWTH_TIMER = 20;

	/**
	 * Mask for the aura.
	 * @type {Graphics}
	 */
	_auraMask;
	/**
	 * The timer to grow the aura once the descend is done.
	 * @type {number}
	 */
	_auraTimer = null;

	/**
	 * Invokes Quetzalcoatl upon the Scene.
	 * @param {IScene} scene The scene where Quetzalcoatl is invoked.
	 */
	constructor(scene) {
		super(scene);

		const aura = new Asset(ref.quetzalcoatl.aura);
		aura.filters = [
			ConstantShaderManager.getGlowFilter({
				distance: 5,
				color: 0xadf0c2,
				quality: 0.5,
				outerStrength: 2
			}),
			ConstantShaderManager.getBlurFilter(1, 1),
			new AlphaFilter(0.41)
		];
		aura.x -= 27;
		this._body.addChild(aura);

		this._auraMask = new Graphics().beginFill(0xff0000).drawCircle(0, 0, 0);
		aura.mask = this._auraMask;
		this._body.addChild(this._auraMask);

		this._body.addChild(new Asset(ref.quetzalcoatl.body));

		this._body.x = -210;
		this._body.y = -290;
	}

	/**
	 * Show Quetzalcoatl aura once the descend is over.
	 */
	descended() {
		this._auraTimer = 0;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._auraTimer !== null) {
			this._auraTimer += timer.tmod;
			this._auraMask.clear();
			this._auraMask
				.beginFill(0xff0000)
				.drawCircle(216, 170, Math.min(this._auraTimer / Quetzalcoatl.AURA_GROWTH_TIMER, 1) * 300);
		}
	}
}
