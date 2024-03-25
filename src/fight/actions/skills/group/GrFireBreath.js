// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Blow.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { FireBreath } from '../../../parts/skills/FireBreath.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * Creates a fire breath which hits all the targets.
 */
export class GrFireBreath extends GroupEffect {
	/**
	 * The caster runs to the average y of the ennemies and fires a breath at them, damaging them for the given amount of damages.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		if (this._targets.length == 0) {
			this.end();
			return;
		}
		this.goto(
			this._scene.width * 0.5,
			this._targets.reduce((acc, obj) => acc + obj.fighter.position.y, 0) / this._targets.length
		);
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
				this._caster.updateMove(this._coef);
				if (this._coef === 1) {
					this._caster.playAnim('release');
					this._coefSpeed = 0.04;
					this.nextStep();
				}
				break;
			case 1:
				if (this._frameTimer >= 1) {
					this._frameTimer -= 1;
					for (let i = 0; i < 2; ++i) {
						this._scene.dm.addSprite(
							new FireBreath(
								this._scene,
								this._caster.position.x + this._caster.intSide * 20,
								this._caster.position.y - 5,
								this._caster.position.z - this._caster.height * 0.5,
								this._caster.intSide
							),
							Layers.Scene.FIGHTERS
						);
					}
				}
				if (this._coef == 1) {
					this.nextStep();
					this._caster.playAnim('run');
					this._coefSpeed = this._caster.initReturn();
					this.damageAll();
				}
				break;
			case 2:
				this._caster.updateMove(this._coef);
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}
}
