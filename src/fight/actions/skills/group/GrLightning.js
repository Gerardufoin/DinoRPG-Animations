// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Lightning.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Bolt } from '../../../parts/life/Bolt.js';
import { Lightning } from '../../../parts/skills/Lightning.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster strike the targets with a lightning strike.
 */
export class GrLightning extends GroupEffect {
	/**
	 * The lightning strikes instantiated in the Scene.
	 * @type {Lightning[]}
	 */
	_strikes = [];

	/**
	 * The caster strikes each target with a lightning strike.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.addSkillAura(SkillType.Lightning);
	}

	/**
	 * Update skill display.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				if (this._coef === 1) {
					this._caster.playAnim('release');
					this._coefSpeed = 0.025;
					this.nextStep();

					for (const t of this._targets) {
						const l = new Lightning(this._scene, t.fighter);
						this._scene.dm.addSprite(l, Layers.Scene.FIGHTERS);
						this._strikes.push(l);
						t.fighter.setShake(40);
						if (t.life !== null) {
							t.fighter.skin.filters = [GroupEffect.BlackFilter];
						}
					}
				}
				break;
			case 1:
				if (this._frameTimer >= 1) {
					this._frameTimer -= 1;
					for (const t of this._targets) {
						if (t.life !== null) {
							t.fighter.dm.addSprite(
								new Bolt(
									this._scene,
									(Math.random() * 2 - 1) * t.fighter.ray,
									-Math.random() * t.fighter.height
								),
								Layers.Fighter.FRONT
							);
						}
					}
					this._strikes.map((l) => l.updateDisplay());
				}
				if (this._coef == 1) {
					this._strikes.map((l) => l.kill());
					for (const t of this._targets) {
						t.fighter.skin.filters = [];
					}
					this._caster.backToDefault();
					this.damageAll();
					this.end();
				}
				break;
		}
	}
}
