// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Ice.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { MistralFx } from '../../../parts/skills/MistralFx.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * Creates a gush of wind which freeze the targets.
 */
export class GrIce extends GroupEffect {
	/**
	 * The caster invokes a gush of cold wind which freeze the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(SkillType.Water);
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Makes the fighter glow
			case 0:
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');
					this._coefSpeed = 0.015;
				}
				break;
			// Creates wind in the scene
			case 1:
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
					this.nextStep();
					for (const t of this._targets) {
						if (t.life !== null) {
							t.fighter.fxAddIceBlock();
						}
					}
					this._caster.backToDefault();
					this._coefSpeed = 0.04;
				}
				break;
			// Remove the ice block and damages the targets once done
			case 2:
				if (this._coef == 1) {
					for (const t of this._targets) {
						if (t.life !== null) {
							t.fighter.fxRemoveIceBlock(16);
						}
					}
					this.damageAll();
					this.end();
				}
				break;
		}
	}
}
