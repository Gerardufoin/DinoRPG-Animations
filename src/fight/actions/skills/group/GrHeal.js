// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Heal.hx

import { LifeEffect, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster heals the targets for the given amount of life.
 */
export class GrHeal extends GroupEffect {
	/**
	 * The type of healing. If 1, no leaves are instantiated.
	 * @type {number}
	 */
	_type;

	/**
	 * The caster heals the targets for the given amount of life.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 * @param {number} type If 1, does not instantiate the leaves. 0 by default.
	 */
	constructor(scene, endCall, caster, targets, type = 0) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.02;
		this.addSkillAura(SkillType.Wood);
		this._type = type;
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Creates the leaves on the targets
			case 0:
				if (timer.frameElapsed && this._type !== 1) {
					for (const t of this._targets) {
						if (Math.random() < this._coef) {
							t.fighter.fxLeaf(1, (Math.random() * 2 - 1) * 1.2, -Math.random() * 8);
						}
					}
				}
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');
					this._coefSpeed = 0.03;
					for (const t of this._targets) {
						t.fighter.gainLife(t.life, { fx: LifeEffect.Heal });
					}
				}
				break;
			// End the state once enough time has passed.
			case 1:
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
		}
	}
}
