// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Ice.hx

import { fx_charge_impact } from '../../../../gfx/fx/charge_impact.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { QuickAnim } from '../../../parts/QuickAnim.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster charges at each targets and damage them.
 */
export class GrCharge extends GroupEffect {
	/**
	 * The index of the current target of the attack.
	 * @type {number}
	 */
	_targetIdx = -1;
	/**
	 * Has the target been hit yet.
	 * @type {boolean}
	 */
	_hit = false;

	/**
	 * The caster charges at each target and damage them.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		this._caster.saveCurrentCoords();
		if (!this.nextTarget()) {
			this.end();
		}
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Makes the fighter runs to the target
			case 0:
				this._caster.updateMove(this._coef);
				if (this._coef === 1) {
					this.nextStep();
					this._coefSpeed = 0.1;
					this._caster.backToDefault();
				}
				break;
			// The caster attacks the target and creates an impact
			case 1:
				if (!this._hit) {
					const target = this._targets[this._targetIdx];
					this._hit = true;
					this._caster.playAnim('attack');
					// The impact only triggers on hit
					this._caster.registerCallback('hit', (_anim, _args) => {
						if (target.life !== null) {
							target.fighter.damages(target.life, 20);
						}
						target.fighter._vx = this._caster.intSide * 6;
						target.fighter._vz = -14;
						target.fighter._weight = 1.5;
						target.fighter._mode = Fighter.Mode.Dodge;

						this._scene.dm.addSprite(
							new QuickAnim(
								this._scene,
								fx_charge_impact,
								this._caster.position.x + 46 * this._caster.intSide,
								target.fighter.position.y + 1,
								-30,
								this._caster.intSide
							),
							Layers.Scene.FIGHTERS
						);

						for (let i = 0; i < 20; ++i) {
							const p = this._scene.genGroundPart(
								(target.fighter.position.x + this._caster.position.x) * 0.5 + Math.random() * 20,
								(target.fighter.position.y + this._caster.position.y) * 0.5 +
									(Math.random() * 2 - 1) * 20
							);
							if (p) {
								p._vx = this._caster.intSide * (Math.random() * 6);
								p._z = -Math.random() * 40;
								p._vr = (Math.random() * 2 - 1) * 10;
								p._fadeoutTimer += p._fadeoutTimer > 0 ? Math.random() * 5 : 0;
								p._friction = 0.97;
								p.setScale(p._scale * 1.5);
							}
						}
						this._scene.fxShake(8);
						this.nextStep();
						this._coefSpeed = 0.1;
					});
				}
				break;
			// The caster checks if there is a next target
			case 2:
				if (this._coef == 1) {
					if (!this.nextTarget()) {
						this.nextStep();
						this._coefSpeed = this._caster.initReturn();
					}
				}
				break;
			// The caster goes back to its original position
			case 3:
				this._caster.updateMove(this._coef);
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}

	/**
	 * Set the next target of the attack and reset the state.
	 * @returns {boolean} True if there is a next target, false otherwise.
	 */
	nextTarget() {
		this._targetIdx++;
		if (this._targetIdx >= this._targets.length) {
			return false;
		}
		this._hit = false;
		this._step = 0;
		this._coef = 0;

		const pos = this._caster.getBrawlPos(this._targets[this._targetIdx].fighter);
		this._coefSpeed = this._caster.runSpeed / this._caster.getDist(pos);
		this._caster.moveTo(pos.x, pos.y);
		return true;
	}

	/**
	 * End the State and clear any callbacks registered on hit.
	 */
	end() {
		super.end();
		this._caster.clearCallback('hit');
	}
}
