// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Disc.hx

import { Layers } from '../../../DepthManager.js';
import { LifeEffect, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { AirDisc } from '../../../parts/skills/disc/AirDisc.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster creates discs of air which are thrown toward the targets.
 */
export class GrDisc extends GroupEffect {
	/**
	 * A reference to all the discs in the Scene.
	 * @type {AirDisc[]}
	 */
	_discs = [];

	/**
	 * The caster creates discs of air which are thrown toward the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(SkillType.Air);

		let offset = 0;
		for (const t of this._targets) {
			const disc = new AirDisc(this._scene, this._caster, t.fighter, offset++);
			this._scene.dm.addSprite(disc, Layers.Scene.FIGHTERS);
			this._discs.push(disc);
		}
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// The discs grow over the caster.
			case 0:
				this._discs.map((d) => d.updateCoef(this._coef));
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');
					this._coefSpeed = 0.07;
					// Release the discs.
					this._discs.map((d) => d.release());
				}
				break;
			// The discs move toward their target.
			case 1:
				this._discs.map((d) => d.updateCoef(this._coef));
				if (this._coef == 1) {
					this._discs.map((d) => d.kill());
					this._caster.backToDefault();
					this.damageAll({ fx: LifeEffect.Air });
					this.end();
				}
				break;
		}
	}
}
