// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { invoc_raijin_drums } from '../../../../gfx/invocations/raijin_drums.js';
import { invoc_raijin_body } from '../../../../gfx/invocations/raijin_body.js';
import { Graphics } from 'pixi.js';

/**
 * Invokes Raijin upon the Scene.
 */
export class Raijin extends Invocation {
	/**
	 * Number of frames needed for the aura to fully grow.
	 * @type {number}
	 */
	static AURA_GROWTH_TIMER = 20;

	/**
	 * Animator for Raijin's body.
	 * @type {Animator}
	 */
	_bodyAnim;
	/**
	 * Animator for Raijin's drums.
	 * @type {Animator}
	 */
	_drums;

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
	 * Invokes Raijin upon the Scene.
	 * @param {IScene} scene The scene where Raijin is invoked.
	 */
	constructor(scene) {
		super(scene);

		const bg = new Asset(ref.raijin.background);
		bg.filters = [
			ConstantShaderManager.getGlowFilter({
				distance: 5,
				color: 0xffff66,
				quality: 0.5,
				outerStrength: 2
			})
		];
		this._body.addChild(bg);

		this._auraMask = new Graphics().beginFill(0xff0000).drawCircle(0, 0, 0);
		bg.mask = this._auraMask;
		this._body.addChild(this._auraMask);

		this._drums = new Animator(false).loadAnimation(invoc_raijin_drums);
		this._drums.x = 119;
		this._drums.y = -4;
		this._body.addChild(this._drums);

		this._bodyAnim = new Animator(false).loadAnimation(invoc_raijin_body);
		this._body.addChild(this._bodyAnim);

		this._body.x = -210;
		this._body.y = -300;
	}

	/**
	 * Show Raijin aura once the descend is over.
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

		this._bodyAnim.update(timer.deltaTimeMS);
		this._drums.update(timer.deltaTimeMS);

		if (this._auraTimer !== null) {
			this._auraTimer += timer.tmod;
			this._auraMask.clear();
			this._auraMask
				.beginFill(0xff0000)
				.drawCircle(216, 170, Math.min(this._auraTimer / Raijin.AURA_GROWTH_TIMER, 1) * 300);
		}
	}
}
