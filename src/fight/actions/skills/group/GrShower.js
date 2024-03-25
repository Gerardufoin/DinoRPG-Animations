// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Shower.hx

import { GroupEffect } from '../GroupEffect.js';
import { Scene } from '../../../Scene.js';
import { Fighter } from '../../../Fighter.js';
import { Timer } from '../../../Timer.js';
import { SkillType } from '../../../Enums.js';
import { FireRain } from '../../../parts/skills/shower/FireRain.js';
import { Layers } from '../../../DepthManager.js';
import { WaterRain } from '../../../parts/skills/shower/WaterRain.js';

/**
 * Creates shower of a specific element which damages the targets.
 */
export class GrShower extends GroupEffect {
	/**
	 * Type of shower. Value from the SkillType enum.
	 * @type {number}
	 */
	_type;

	/**
	 * The caster creates a shower, harming the targets.
	 * The type of shower depends on the element passed as type.
	 * @param {Scene} scene The Scene where the skill is cast.
	 * @param {() => void} endCall Callback at the end of the State.
	 * @param {Fighter} caster The Fighter using the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 * @param {number} type The type of shower, value from SkillType.
	 */
	constructor(scene, endCall, caster, targets, type) {
		super(scene, endCall, caster, targets);
		this._type = type;
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(type);
	}

	/**
	 * Update the state.
	 * @param {Timer} timer The fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				if (this._coef == 1) {
					this._caster.playAnim('release');
					this.nextStep();
					this._coefSpeed = 0.015;
				}
				break;
			case 1:
				if (this._coef < 0.8 && this._frameTimer >= 1) {
					this._frameTimer -= 1;
					for (let i = 0; i < 2; ++i) {
						switch (this._type) {
							case SkillType.Fire:
								this._scene.dm.addSprite(
									new FireRain(this._scene, this._caster.intSide),
									Layers.Scene.FIGHTERS
								);
								break;
							case SkillType.Water:
								this._scene.dm.addSprite(
									new WaterRain(this._scene, this._caster.intSide),
									Layers.Scene.FIGHTERS
								);
								break;
						}
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
