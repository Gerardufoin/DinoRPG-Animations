// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { ref } from '../../../../gfx/references.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { Graphics } from 'pixi.js';
import { invoc_golem_lightning } from '../../../../gfx/invocations/golem_lightning.js';

/**
 * Invokes Golem upon the Scene.
 */
export class Golem extends Invocation {
	/**
	 * Number of frames needed for the lightning to fully grow.
	 * @type {number}
	 */
	static LIGHTNING_GROWTH_TIMER = 20;

	/**
	 * Animator for Golem's lightning.
	 * @type {Animator}
	 */
	_lightning;

	/**
	 * Mask for the lightning.
	 * @type {Graphics}
	 */
	_lightningMask;
	/**
	 * The timer to grow the lightning once the descend is done.
	 * @type {number}
	 */
	_lightningTimer = null;

	/**
	 * Invokes Golem upon the Scene.
	 * @param {IScene} scene The scene where Golem is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._lightning = new Animator(false).loadAnimation(invoc_golem_lightning);
		this._lightning.filters = [
			ConstantShaderManager.getGlowFilter({
				distance: 5,
				color: 0xffff66,
				quality: 0.5,
				outerStrength: 2
			})
		];
		this._lightning.x = 21;
		this._lightning.y = -56;
		this._body.addChild(this._lightning);

		this._lightningMask = new Graphics().beginFill(0xff0000).drawCircle(0, 0, 0);
		this._lightning.mask = this._lightningMask;
		this._body.addChild(this._lightningMask);

		this._body.addChild(new Asset(ref.invocations.golem.body));

		this._body.x = -215;
		this._body.y = -290;
	}

	/**
	 * Show Golem lightning once the descent is over.
	 */
	descended() {
		this._lightningTimer = 0;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._lightning.update(timer.deltaTimeMS);

		if (this._lightningTimer !== null) {
			this._lightningTimer += timer.tmod;
			this._lightningMask.clear();
			this._lightningMask
				.beginFill(0xff0000)
				.drawCircle(216, 170, Math.min(this._lightningTimer / Golem.LIGHTNING_GROWTH_TIMER, 1) * 300);
		}
	}
}
