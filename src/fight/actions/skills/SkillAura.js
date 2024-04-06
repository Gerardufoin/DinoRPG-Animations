// @ts-check

import { GlowFilter } from '@pixi/filter-glow';
import { Container } from 'pixi.js';
import { SkillType } from '../../Enums.js';

/**
 * Creates an aura around a container which will grow depending of the given coefficient.
 * For optimisation, only one aura can be casted at a time (the shaders are shared between all auras).
 */
export class SkillAura {
	/**
	 * First layer of the aura.
	 * @type {GlowFilter}
	 */
	static FirstAura = new GlowFilter({
		quality: 1,
		color: 0xffffff,
		distance: 1
	});
	/**
	 * Second layer of the aura.
	 * @type {GlowFilter}
	 */
	static SecondAura = new GlowFilter({
		quality: 1,
		distance: 5
	});
	/**
	 * Third layer of the aura.
	 * @type {GlowFilter}
	 */
	static ThirdAura = new GlowFilter({
		quality: 1,
		distance: 25
	});

	/**
	 * Creates a new SkillAura. Requires the skill type and the targeted container.
	 * @param {number} type SkillType of the aura, deciding the colors used.
	 * @param {Container} target The target of the aura.
	 */
	constructor(type, target) {
		target.filters = [SkillAura.FirstAura, SkillAura.SecondAura, SkillAura.ThirdAura];
		switch (type) {
			case SkillType.Fire:
				SkillAura.SecondAura.color = 0xffcc00;
				SkillAura.ThirdAura.color = 0xff0000;
				break;
			case SkillType.Wood:
				SkillAura.SecondAura.color = 0xffff00;
				SkillAura.ThirdAura.color = 0x66ff00;
				break;
			case SkillType.Water:
				SkillAura.SecondAura.color = 0x00ffff;
				SkillAura.ThirdAura.color = 0x0000ff;
				break;
			case SkillType.Lightning:
				SkillAura.SecondAura.color = 0xffff00;
				SkillAura.ThirdAura.color = 0xffff00;
				break;
			case SkillType.Air:
				SkillAura.SecondAura.color = 0xccffff;
				SkillAura.ThirdAura.color = 0x22ffff;
				break;
		}

		this.update(0);
	}

	/**
	 * Update the aura around the target.
	 * @param {number} coef Current coefficient of the aura size.
	 */
	update(coef) {
		const c = 1 + (1 + Math.random()) * coef;
		SkillAura.FirstAura.outerStrength = c * 2;
		SkillAura.SecondAura.outerStrength = c * 1.5;
		SkillAura.ThirdAura.outerStrength = c * 1.2;
	}
}
