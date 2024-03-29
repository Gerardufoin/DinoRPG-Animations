// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Vigne.hx

import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Layers } from '../../../DepthManager.js';
import { FighterStatus, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { MovingVine } from '../../../parts/skills/vine/MovingVine.js';
import { StaticVine } from '../../../parts/skills/vine/StaticVine.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster spawns vines which crawls toward their target.
 */
export class GrVines extends GroupEffect {
	/**
	 * List of the vines positions.
	 * @type {{sx: number, sy: number, ex: number, ey: number, t: Fighter, life: number}[]}
	 */
	_vines = [];

	/**
	 * The caster spawns in vines which crawls toward the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(SkillType.Wood);

		for (const t of this._targets) {
			if (t.life !== null) {
				this._vines.push({
					sx: this._caster.position.x,
					sy: this._caster.position.y,
					ex: t.fighter.position.x,
					ey: t.fighter.position.y,
					t: t.fighter,
					life: t.life ?? 0
				});
			}
		}
	}

	/**
	 * Update the skill effets.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				if (this._coef === 1) {
					this._caster.playAnim('release');
					this.nextStep();
				}
				break;
			case 1:
				for (const v of this._vines) {
					if (this._coef == 1) {
						if (!v.t.haveStatus(FighterStatus.Fly)) {
							v.t.setShake(40);
							v.t.setLockTimer(50);
							if (v.life) {
								v.t.damages(v.life, 20);
							}
							for (let i = 0; i < 7; ++i) {
								this._scene.dm.addSprite(
									new StaticVine(this._scene, v.t.position.x, v.t.position.y, v.t.ray),
									Layers.Scene.FIGHTERS
								);
							}
						}
					} else if (PixiHelper.tmodRandom(1 / 3, timer.tmod)) {
						this._scene.dm.addSprite(
							new MovingVine(
								this._scene,
								v.sx * (1 - this._coef) + v.ex * this._coef,
								v.sy * (1 - this._coef) + v.ey * this._coef,
								this._caster.intSide
							),
							Layers.Scene.FIGHTERS
						);
					}
				}
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}
}
