// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Fireball.hx

import { Layers } from '../../../DepthManager.js';
import { LifeEffect, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Fireball } from '../../../parts/skills/Fireball.js';
import { GroupEffect } from '../GroupEffect.js';
import { SkillAura } from '../SkillAura.js';

/**
 * Creates one Fireball for each enemy, which will home toward their target.
 */
export class GrFireball extends GroupEffect {
	/**
	 * Aura around the caster while casting the skill.
	 * @type {SkillAura}
	 */
	_aura;
	/**
	 * The Fireballs in the Scene.
	 * @type {Fireball[]}
	 */
	_fireballs = [];

	/**
	 * The caster invoke a homing Fireball for each target.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this._aura = new SkillAura(SkillType.Fire, this._caster.skin);
	}

	/**
	 * Creates and updates the Fireballs.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				this._aura.update(this._coef);
				if (this._frameTimer >= 1) {
					this._frameTimer -= 1;
					this.genRayConcentrate();
				}
				if (this._coef === 1) {
					this.initFireballs();
					this._caster.skin.filters = [];
					this._caster.playAnim('release');
					this.nextStep();
				}
				break;
			case 1:
				this._fireballs = this._fireballs.filter((f) => {
					if (f.getTargetDistance() < 30) {
						const target = f.getTargetData();
						target.fighter.fxBurst(24);
						if (target.life) {
							target.fighter.damages(target.life, 30, { fx: LifeEffect.Burn, amount: 12 });
						}
						f.kill();
						return false;
					}
					return true;
				});
				if (this._fireballs.length == 0) {
					this._caster.playAnim('stand');
					this.end();
				}
		}
	}

	/**
	 * Creates all the Fireball in the Scene.
	 */
	initFireballs() {
		for (const t of this._targets) {
			const fb = new Fireball(
				this._scene,
				t,
				this._caster.position.x,
				this._caster.position.y,
				this._caster.position.z - this._caster.height * 0.5,
				this._caster.intSide
			);
			this._fireballs.push(fb);
			this._scene.dm.addSprite(fb, Layers.Scene.FIGHTERS);
		}
	}
}
