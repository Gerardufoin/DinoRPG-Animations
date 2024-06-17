// @ts-check
import { Animator } from '../../../../display/Animator.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';
import { Asset } from '../../../../display/Asset.js';
import { ref } from '../../../../gfx/references_invocations.js';
import { invoc_ondine_water } from '../../../../gfx/invocations/ondine_water.js';
import { invoc_ondine_water_mask } from '../../../../gfx/invocations/ondine_water_mask.js';
import { SpriteMaskFilter } from 'pixi.js';

/**
 * Invokes Ondine upon the Scene.
 */
export class Ondine extends Invocation {
	/**
	 * Animator for Ondine's water.
	 * @type {Animator}
	 */
	_waterAnim;
	/**
	 * Animator for Ondine's water mask.
	 * @type {Animator}
	 */
	_waterMaskAnim;

	/**
	 * Filter used to mask the water animation using the water mask animation.
	 * @type {SpriteMaskFilter}
	 */
	_waterMask;

	/**
	 * Invokes Ondine upon the Scene.
	 * @param {IScene} scene The scene where Ondine is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._body.addChild(new Asset(ref.ondine.body));

		this._waterAnim = new Animator(false).loadAnimation(invoc_ondine_water);
		this._waterAnim.playing = false;
		this._waterAnim.visible = false;
		this._waterMask = new SpriteMaskFilter();
		this._waterAnim.filters = [this._waterMask];
		this._body.addChild(this._waterAnim);

		this._waterMaskAnim = new Animator(false).loadAnimation(invoc_ondine_water_mask);
		this._waterMaskAnim.playing = false;
		this._waterMaskAnim.visible = false;
		this._body.addChild(this._waterMaskAnim);

		this._body.x = -215;
		this._body.y = -275;
	}

	/**
	 * Start Ondine water related animations once descended.
	 */
	descended() {
		this._waterAnim.playing = true;
		this._waterAnim.visible = true;
		this._waterMaskAnim.playing = true;
		this._waterMaskAnim.visible = true;
	}

	/**
	 * Updates the animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._waterAnim.update(timer.deltaTimeMS);
		this._waterMaskAnim.update(timer.deltaTimeMS);
		// Hacky, but we're dealing with an animation masked by another animation, so that's a bit of a no no in PixiJS.
		// Get the visible part of the mask animation, get its sprite, and apply it to the mask filter.
		for (const pName in this._waterMaskAnim._body._parts) {
			const part = this._waterMaskAnim._body._parts[pName];
			if (part.visible) {
				this._waterMask.maskSprite = this._waterMaskAnim.getPartSprite(pName);
				break;
			}
		}
	}
}
