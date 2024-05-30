// @ts-check
import { BLEND_MODES, SpriteMaskFilter } from 'pixi.js';
import { Animator } from '../../../../display/Animator.js';
import { Asset } from '../../../../display/Asset.js';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { invoc_ifrit_fire } from '../../../../gfx/invocations/ifrit_fire.js';
import { ref } from '../../../../gfx/references.js';
import { IScene } from '../../../IScene.js';
import { Timer } from '../../../Timer.js';
import { Invocation } from './Invocation.js';

/**
 * Invokes Ifrit upon the Scene.
 */
export class Ifrit extends Invocation {
	/**
	 * The tatoo's mask.
	 * @type {Asset}
	 */
	_mask;

	/**
	 * The animation for the fire.
	 * @type {Animator}
	 */
	_fire;

	/**
	 * Invokes Ifrit upon the Scene.
	 * @param {IScene} scene The scene where Ifrit is invoked.
	 */
	constructor(scene) {
		super(scene);

		this._fire = new Animator(false).loadAnimation(invoc_ifrit_fire);
		this._fire.filters = [ConstantShaderManager.getBlurFilter(1)];
		this._fire.x = 72;
		this._fire.y = 39;
		this._fire.alpha = 0;
		this._body.addChild(this._fire);

		this._body.addChild(new Asset(ref.invocations.ifrit.body));

		const tatoo = new Asset(ref.invocations.ifrit.tatoo, 1.05);
		tatoo.x += 68;
		tatoo.y += 76;
		this._body.addChild(tatoo);

		this._mask = new Asset(ref.invocations.ifrit.tatoo_mask);
		this._mask.anchor.set(0.5, 0.5);
		this._mask.x = 220;
		this._body.addChild(this._mask);

		const filter = new SpriteMaskFilter();
		filter.maskSprite = this._mask;
		filter.blendMode = BLEND_MODES.MULTIPLY;
		tatoo.filters = [filter];

		this._body.x = -225;
		this._body.y = -284;
	}

	/**
	 * Show Ifrit fire once the descend is over.
	 * @param {number} coef The descent coefficient, between 0 and 1.
	 */
	descend(coef) {
		super.descend(coef);

		this._fire.alpha = Math.max(coef - 0.9, 0) * 10;
	}

	/**
	 * Updates the head animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		this._fire.update(timer.deltaTimeMS);

		this._mask.y += (430 / 8) * timer.tmod;
		while (this._mask.y > 430) {
			this._mask.y -= 430;
		}
	}
}
