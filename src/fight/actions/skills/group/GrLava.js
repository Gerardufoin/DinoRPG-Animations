// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Lava.hx

import { ColorMatrixFilter } from 'pixi.js';
import { Layers } from '../../../DepthManager.js';
import { SkillType } from '../../../Enums.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Lava } from '../../../parts/skills/Lava.js';
import { GroupEffect } from '../GroupEffect.js';
import { GlowFilter } from '@pixi/filter-glow';

/**
 * Create a column of lava on each target.
 */
export class GrLava extends GroupEffect {
	/**
	 * The GlowFilter for the red outline.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static BurnFilter = new GlowFilter({
		quality: 1,
		color: 0xbb0000,
		distance: 10,
		outerStrength: 0,
		innerStrength: 0
	});

	/**
	 * List of all the instantiated lava pillars.
	 * @type {Lava[]}
	 */
	_lavas = [];

	/**
	 * The caster spawns in a column of laval above each targets.
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
					GrLava.BurnFilter.innerStrength = 0;
					for (const t of this._targets) {
						if (t.life !== null) {
							const lava = new Lava();
							t.fighter.dm.addSprite(lava, Layers.Fighter.BACK);
							t.fighter.setShake(20);
							t.fighter.skin.filters = [GroupEffect.BlackFilter, GrLava.BurnFilter];
							this._lavas.push(lava);
						}
					}
					this._caster.playAnim('release');
					this.nextStep();
				}
				break;
			case 1:
				GrLava.BurnFilter.innerStrength = this._coef * 2;
				if (this._coef == 1) {
					this._lavas.map((l) => l.close());
					for (const t of this._targets) {
						if (t.life !== null) {
							t.fighter.damages(t.life, 30);
							t.fighter.skin.filters = [];
						}
					}
					this._caster.backToDefault();
					this.end();
				}
				break;
		}
	}
}
