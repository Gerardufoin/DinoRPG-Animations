// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Rafale.hx

import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { MistralFx } from '../../../parts/skills/MistralFx.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster runs in the middle of the screen and creates a rafale of wind which damage the targets.
 */
export class GrRafale extends GroupEffect {
	/**
	 * The horizontal speed of the particles.
	 * @type {number}
	 */
	_speed;
	/**
	 * The number of wind particles instantiated each frame.
	 * @type {number}
	 */
	_power;

	/**
	 * The caster runs in the middle of the screen and creates a rafale of wind damaging the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 * @param {number} power The number of particles instantiated each frame. 10 by default.
	 * @param {number} speed The horizontal speed of the particles. 2.5 by default.
	 */
	constructor(scene, endCall, caster, targets, power = 10, speed = 2.5) {
		super(scene, endCall, caster, targets);
		this._caster.playAnim('cast');
		this._coefSpeed = 0.03;
		this.goto(this._caster.position.x, this._scene.getPYMiddle());
		this._power = power;
		this._speed = speed;
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Update the caster movement
			case 0:
				this._caster.updateMove(this._coef);
				if (this._coef === 1) {
					this.nextStep();
					this._coefSpeed = 0.05;
					this._caster.backToDefault();
					this.addSkillAura(SkillType.Air);
				}
				break;
			// Update the caster aura
			case 1:
				if (this._coef === 1) {
					this.nextStep();
					this._coefSpeed = 0.015;
					this._caster.playAnim('release');
				}
				break;
			// Create the wind particles
			case 2:
				if (this._coef < 0.8 && timer.frameElapsed) {
					for (let i = 0; i < this._power; ++i) {
						this._scene.dm.addSprite(
							new MistralFx(this._scene, this._caster.intSide, 40, this._speed, false),
							Layers.Scene.FIGHTERS
						);
					}
				}
				if (this._coef === 1) {
					this.damageAll();
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}
}
