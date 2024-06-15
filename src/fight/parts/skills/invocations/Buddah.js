// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { Graphics } from 'pixi.js';
import { invoc_buddah_halo } from '../../../../gfx/invocations/buddah_halo.js';

/**
 * Invokes Buddah upon the Scene.
 */
export class Buddah extends Invocation {
	/**
	 * Number of frames needed for the halo to fully grow.
	 * @type {number}
	 */
	static HALO_GROWTH_TIMER = 20;

	/**
	 * Animator for Buddah's halo.
	 * @type {Animator}
	 */
	_halo;

	/**
	 * Mask for the halo.
	 * @type {Graphics}
	 */
	_haloMask;
	/**
	 * The timer to grow the halo once the descend is done.
	 * @type {number}
	 */
	_haloTimer = null;

	/**
	 * Invokes Buddah upon the Scene.
	 * @param {IScene} scene The scene where Buddah is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._halo = new Animator(false).loadAnimation(invoc_buddah_halo);
		this._halo.x = -99;
		this._halo.y = -137;
		this._body.addChild(this._halo);

		this._haloMask = new Graphics().beginFill(0xff0000).drawCircle(0, 0, 0);
		this._halo.mask = this._haloMask;
		this._body.addChild(this._haloMask);

		this._body.addChild(new Asset(ref.invocations.buddah.body));

		this._body.x = -215;
		this._body.y = -285;
	}

	/**
	 * Show Buddah halo once the descent is over.
	 */
	descended() {
		this._haloTimer = 0;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._halo.update(timer.deltaTimeMS);

		if (this._haloTimer !== null) {
			this._haloTimer += timer.tmod;
			this._haloMask.clear();
			this._haloMask
				.beginFill(0xff0000)
				.drawCircle(216, 170, Math.min(this._haloTimer / Buddah.HALO_GROWTH_TIMER, 1) * 300);
		}
	}
}
