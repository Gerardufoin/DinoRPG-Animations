// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { Graphics } from 'pixi.js';
import { invoc_salamander_explosion } from '../../../../gfx/invocations/salamander_explosion.js';

/**
 * Invokes Salamander upon the Scene.
 */
export class Salamander extends Invocation {
	/**
	 * Number of frames needed for the explosion to fully grow.
	 * @type {number}
	 */
	static EXPLOSION_GROWTH_TIMER = 5;

	/**
	 * Animator for Salamander's explosion.
	 * @type {Animator}
	 */
	_explosion;

	/**
	 * Mask for the explosion.
	 * @type {Graphics}
	 */
	_explosionMask;
	/**
	 * The timer to grow the explosion once the descend is done.
	 * @type {number}
	 */
	_explosionTimer = null;

	/**
	 * Invokes Salamander upon the Scene.
	 * @param {IScene} scene The scene where Salamander is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._explosion = new Animator(false).loadAnimation(invoc_salamander_explosion, 0.92);
		this._explosion.filters = [ConstantShaderManager.getBlurFilter(1, 1)];
		this._explosion.x = 10;
		this._explosion.y = 7;
		this._explosion.playing = false;
		this._body.addChild(this._explosion);

		this._explosionMask = new Graphics().beginFill(0xff0000).drawCircle(0, 0, 0);
		this._explosion.mask = this._explosionMask;
		this._body.addChild(this._explosionMask);

		this._body.addChild(new Asset(ref.salamander.body));

		this._body.x = -215;
		this._body.y = -285;
	}

	/**
	 * Show Salamander explosion once the descent is over.
	 */
	descended() {
		this._explosionTimer = 0;
		this._explosion.playing = true;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._explosion.update(timer.deltaTimeMS);

		if (this._explosionTimer !== null) {
			this._explosionTimer += timer.tmod;
			this._explosionMask.clear();
			this._explosionMask
				.beginFill(0xff0000)
				.drawCircle(170, 270, Math.min(this._explosionTimer / Salamander.EXPLOSION_GROWTH_TIMER, 1) * 400);
		}
	}
}
