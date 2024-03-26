// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Mistral.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { MistralFx } from '../../../parts/skills/MistralFx.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * Creates a gush of wind which damages the targets.
 */
export class GrMistral extends GroupEffect {
	/**
	 * The caster runs in the middle of the screen and creates a gush of wind which damages the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.goto(this._caster.position.x, this._scene.getPYMiddle());
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				this._caster.updateMove(this._coef);
				if (this._coef === 1) {
					this.nextStep();
					this._coefSpeed = 0.03;
					this.addSkillAura(SkillType.Air);
					this._caster.backToDefault();
				}
				break;
			case 1:
				if (this._coef == 1) {
					this.nextStep();
					this._coefSpeed = 0.015;
					this._caster.playAnim('release');
				}
				break;
			case 2:
				if (this._coef < 0.8 && this._frameTimer >= 1) {
					this._frameTimer -= 1;
					for (let i = 0; i < 3; ++i) {
						this._scene.dm.addSprite(
							new MistralFx(this._scene, this._caster.intSide),
							Layers.Scene.FIGHTERS
						);
					}
				}
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.damageAll();
					this.end();
				}
				break;
		}
	}
}
