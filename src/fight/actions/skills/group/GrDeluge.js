// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Cloud.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Deluge } from '../../../parts/skills/Deluge.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster generates waves which damage the targets.
 */
export class GrDeluge extends GroupEffect {
	/**
	 * Has the damages already been applied to the targets.
	 * @type {boolean}
	 */
	_damaged = false;

	/**
	 * The caster generates multiple waves which damage the targets.
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
					this._coefSpeed = 0.01;
				}
				break;
			// Creates the waves
			case 1:
				if (timer.frameElapsed) {
					this._scene.dm.addSprite(new Deluge(this._scene, this._caster.intSide), Layers.Scene.FIGHTERS);
				}
				if (!this._damaged && this._coef > 0.85) {
					this._damaged = true;
					this.damageAll();
				}
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}
}
