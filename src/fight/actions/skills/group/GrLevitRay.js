// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/LevitRay.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Ecume } from '../../../parts/skills/waterray/Ecume.js';
import { WaterRay } from '../../../parts/skills/waterray/WaterRay.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster start levitating and fires a water ray to the targets.
 */
export class GrLevitRay extends GroupEffect {
	/**
	 * Levitation displacement.
	 * @type {number}
	 */
	_ldec = 0;

	/**
	 * The Fighters starts levitating and fires a water ray toward the targets, damaging them.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.02;
		this.addSkillAura(SkillType.Water);
	}

	/**
	 * Update the fighter running and firing the skill.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);
		if (this._castingWait) return;

		switch (this._step) {
			case 0:
				this.levitation(this._coef, 160);
				if (this._coef === 1) {
					this._caster.playAnim('release');
					this._coefSpeed = 0.2;
					this.nextStep();

					for (const t of this._targets) {
						this._scene.dm.addSprite(
							new WaterRay(this._scene, this._caster, t.fighter),
							Layers.Scene.FIGHTERS
						);
					}
				}
				break;
			case 1:
				if (this._coef == 1) {
					for (const t of this._targets) {
						for (let i = 0; i < 10; ++i) {
							t.fighter.dm.addSprite(new Ecume(this._scene, t.fighter), Layers.Fighter.BODY);
						}
					}
					this.damageAll();
					this.nextStep(), (this._coefSpeed = 0.03);
				}
				break;
			case 2:
				this.levitation(1 - this._coef, 160);
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}

	/**
	 * Makes the caster levitate to the given height.
	 * @param {number} coef The current coefficient of the animation.
	 * @param {number} height The desired height to reach.
	 */
	levitation(coef, height) {
		this._ldec = (this._ldec + 24) % 628;
		const cc = (1 - Math.cos(coef * 3.14)) * 0.5;
		this._caster._z = Math.sin(this._ldec * 0.01) * 2 - cc * height;
	}
}
