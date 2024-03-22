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
import { SkillAura } from '../SkillAura.js';
import { GlowFilter } from '@pixi/filter-glow';

/**
 * Create a column of lava on each target.
 */
export class GrLava extends GroupEffect {
	/**
	 * The ColorMatrixFilter for the black shader.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {ColorMatrixFilter}
	 */
	static BlackFilter;
	/**
	 * The GlowFilter for the red outline.
	 * Storing it to prevent WebGL to create it each time.
	 * @type {GlowFilter}
	 */
	static BurnFilter;

	/**
	 * Aura around the caster while casting the skill.
	 * @type {SkillAura}
	 */
	_aura;
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
		this._aura = new SkillAura(SkillType.Fire, this._caster.skin);
		if (!GrLava.BlackFilter) {
			GrLava.BlackFilter = new ColorMatrixFilter();
			GrLava.BlackFilter.matrix[0] = 0;
			GrLava.BlackFilter.matrix[6] = 0;
			GrLava.BlackFilter.matrix[12] = 0;
		}
		if (!GrLava.BurnFilter) {
			GrLava.BurnFilter = new GlowFilter({
				quality: 1,
				color: 0xbb0000,
				distance: 2
			});
		}
	}

	/**
	 * Update the skill effets.
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
					GrLava.BurnFilter.outerStrength = 0;
					for (const t of this._targets) {
						if (t.life !== null) {
							const lava = new Lava();
							t.fighter.dm.addSprite(lava, Layers.Fighter.BACK);
							t.fighter.setShake(20);
							t.fighter.skin.filters = [GrLava.BlackFilter, GrLava.BurnFilter];
							this._lavas.push(lava);
						}
					}
					this._caster.skin.filters = [];
					this._caster.playAnim('release');
					this.nextStep();
				}
				break;
			case 1:
				GrLava.BurnFilter.outerStrength = (0.5 + this._coef) * 3;
				if (this._coef == 1) {
					this._lavas.map((l) => l.close());
					for (const t of this._targets) {
						if (t.life !== null) {
							t.fighter.damages(t.life, 30);
							t.fighter.skin.filters = [];
						}
					}
					this._caster.playAnim('stand');
					this.end();
				}
				break;
		}
	}
}
