// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Hole.hx

import { GlowFilter } from '@pixi/filter-glow';
import { Layers } from '../../../DepthManager.js';
import { FighterProperty, SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { BlackHoleContainer } from '../../../parts/skills/hole/BlackHoleContainer.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The caster invokes black holes which remove the targets from the fight.
 * Does not work on Fighter having the Boss property.
 */
export class GrBlackHole extends GroupEffect {
	/**
	 * The GlowFilter for the purple outline.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static VoidFilter = new GlowFilter({
		quality: 1,
		color: 0x53136f,
		distance: 20,
		outerStrength: 0,
		innerStrength: 0
	});
	/**
	 * The black hole container, containing all the instantiated black holes.
	 * @type {BlackHoleContainer}
	 */
	_blackHoles;

	/**
	 * The caster invokes black holes which absorb the targets and remove them from the fight.
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
	 * Update skill display.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Create the holes for each target.
			// If the target is a boss or dodge, it is ignored.
			case 0:
				if (this._coef === 1) {
					this.nextStep();
					this._caster.playAnim('release');
					this._coefSpeed = 0.05;

					this._blackHoles = new BlackHoleContainer(this._scene);
					this._scene.dm.addSprite(this._blackHoles, Layers.Scene.SHADE);
					this._targets = this._targets.filter((t) => {
						if (t.fighter.haveProp(FighterProperty.Boss) || t.life === null) {
							t.fighter.setShake(30);
							t.fighter.setLockTimer(40);
							return false;
						}
						this._blackHoles.addBlackHole(t.fighter);
						return true;
					});
					// If no more targets, we stop the State.
					if (this._targets.length == 0) {
						this.end();
					}
				}
				break;
			// Open the holes
			case 1:
				this._blackHoles.setOpeningCoef(this._coef);
				if (this._coef == 1) {
					this.nextStep();
					this._coefSpeed = 0.04;
					this._blackHoles.startFall(this._coefSpeed);
					GrBlackHole.VoidFilter.innerStrength = 0;
					this._targets.map((t) => (t.fighter.skin.filters = [GrBlackHole.VoidFilter]));
				}
				break;
			// The Fighters are falling and become purple
			case 2:
				GrBlackHole.VoidFilter.innerStrength = this._coef * 4;
				if (this._coef == 1 && this._blackHoles.haveFallen()) {
					this.nextStep();
				}
				break;
			// Close the holes and wraps up.
			case 3:
				this._blackHoles.setOpeningCoef(1 - this._coef);
				if (this._coef == 1) {
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}

	/**
	 * Removes the black holes before ending.
	 */
	end() {
		super.end();
		this._targets.map((t) => (t.fighter.skin.filters = undefined));
		if (this._blackHoles) {
			this._blackHoles.kill();
		}
	}
}
