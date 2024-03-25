// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Meteor.hx

import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Meteor } from '../../../parts/skills/meteor/Meteor.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * Creates a meteor rain which falls on the targets.
 */
export class GrMeteor extends GroupEffect {
	/**
	 * List of all the instantiated lava pillars.
	 * @type {Meteor[]}
	 */
	_meteors = [];

	/**
	 * The caster spawns in a a rain of meteors which falls upon the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(SkillType.Fire);
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
					this._coefSpeed = 0.015;
				}
				break;
			case 1:
				if (this._coef < 0.7 && PixiHelper.tmodRandom(1 / 3, timer.tmod)) {
					const meteor = new Meteor(this._scene, this._caster.intSide);
					this._scene.dm.addSprite(meteor, Layers.Scene.FIGHTERS);
					this._meteors.push(meteor);
				}
				this._meteors = this._meteors.filter((m) => !m.isDeleted);
				if (this._coef == 1 && this._meteors.length == 0) {
					this._caster.backToDefault();
					this.damageAll();
					this.end();
				}
				break;
		}
	}
}
