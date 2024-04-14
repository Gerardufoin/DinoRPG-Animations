// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Attach.hx

import { GlowFilter } from '@pixi/filter-glow';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Focus } from '../../../parts/skills/Focus.js';
import { Timer } from '../../../Timer.js';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Layers } from '../../../DepthManager.js';
import { SkillRay } from '../SkillRay.js';

/**
 * The given Fighter starts focusing its power.
 */
export class FxFocus extends State {
	static GlowFilter = new GlowFilter({
		distance: 10,
		outerStrength: 1,
		quality: 0.5
	});

	/**
	 * The Fighter casting the aura.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The focus animation.
	 * @type {Focus}
	 */
	_ball;

	/**
	 * The given Fighter focuses its power and creates an aura of the given color.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The target of the attachement.
	 * @param {number} color The color of the aura.
	 */
	constructor(scene, endCall, fighter, color) {
		super(scene, endCall);
		this._caster = fighter;
		this._coefSpeed = 0.025;

		this._caster.playAnim('cast');
		this._ball = new Focus(0, -this._caster.height * 0.5);
		this._caster.dm.addSprite(this._ball, Layers.Fighter.FRONT);
		FxFocus.GlowFilter.color = color;
		this._ball.getRootContainer().filters = [FxFocus.GlowFilter];
	}

	/**
	 * Update the ball and rays animations.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef < 0.9 && PixiHelper.tmodRandom(0.5, timer.tmod)) {
			for (let i = 0; i < 3; ++i) {
				const ray = new SkillRay(this._scene, -this._caster.height * 0.5);
				ray.getRootContainer().filters = [FxFocus.GlowFilter];
				this._caster.dm.addSprite(ray, Math.random() <= 0.66 ? Layers.Fighter.BACK : Layers.Fighter.FRONT);
			}
			this._ball.setSize(this._coef);
		}

		if (this._coef === 1) {
			this._ball.burst();
			this.end();
		}
	}
}
