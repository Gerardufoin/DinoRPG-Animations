// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Tornade.hx

import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Layers } from '../../../DepthManager.js';
import { LifeEffect, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Tornado } from '../../../parts/skills/Tornado.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster creates a tornado in the middle of the Scene, which damages the targets.
 */
export class GrTornado extends GroupEffect {
	/**
	 * Speed of the targets caught in the Tornado.
	 * @type {number}
	 */
	static FLYING_SPEED = 8;

	/**
	 * Reference to the Tornado.
	 * @type {Tornado}
	 */
	_tornado;
	/**
	 * The list of the targets getting flung around by the Tornado.
	 * @type {{fighter: Fighter, angle: number, vr: number, vz: number, flFall: boolean, life: number}[]}
	 */
	_flyers = [];

	/**
	 * The caster spawns in a tornado which damages the targets.
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
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			case 0:
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');
					this._coefSpeed = 0;
					this.initTornado();
				}
				break;
			case 1:
				// Updates the flying targets. Once high enough, they are dropped to the ground and removed from the list.
				this._flyers = this._flyers.filter((f) => {
					f.fighter.getRootContainer().angle += f.vr * timer.tmod;
					if (!f.flFall) {
						f.fighter._z += f.vz * timer.tmod;
						f.fighter._vx = Math.cos(f.angle) * GrTornado.FLYING_SPEED * timer.tmod;
						f.fighter._vy = Math.sin(f.angle) * GrTornado.FLYING_SPEED * timer.tmod;
						const ta = this._tornado.getAng(f.fighter.position);
						const lim = 0.1;
						const da = PixiHelper.mm(-lim, PixiHelper.hMod(ta - f.angle, 3.14) * 0.1, lim);
						f.angle = PixiHelper.hMod(f.angle + da * timer.tmod, 3.14);
						if (f.fighter._z < -300) {
							f.flFall = true;
							f.fighter._weight = 2;
						}
					} else {
						if (f.fighter._z == 0) {
							f.fighter.getRootContainer().angle = 0;
							f.fighter.backToDefault();
							f.fighter._weight = 0;
							f.fighter._vx = 0;
							f.fighter._vy = 0;
							f.fighter._vz = 0;
							f.fighter.damages(f.life, 20, { fx: LifeEffect.Air });
							f.fighter.pauseFlying = false;
							return false;
						}
					}
					return true;
				});
				// Once all targets have hit the ground, we go to the last step.
				if (this._flyers.length == 0) {
					this.nextStep();
					this._tornado.escape();
				}
				break;
			case 2:
				// Once the tornado has despawned, we end the State.
				if (this._tornado.isDeleted) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}

	/**
	 * Creates the tornado and setup the flying targets.
	 */
	initTornado() {
		this._tornado = new Tornado(this._scene, this._caster.intSide);
		this._scene.dm.addSprite(this._tornado, Layers.Scene.FIGHTERS);
		for (const t of this._targets) {
			if (t.life !== null) {
				t.fighter.pauseFlying = true;
				this._flyers.push({
					fighter: t.fighter,
					angle: t.fighter.getAng(this._tornado.position),
					vr: 10 + Math.random() * 30,
					vz: -(1 + Math.random() * 0.5),
					flFall: false,
					life: t.life
				});
			}
		}
	}
}
