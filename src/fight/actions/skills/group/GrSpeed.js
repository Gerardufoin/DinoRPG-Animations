// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Speed.hx

import { GlowFilter } from '@pixi/filter-glow';
import { ConstantShaderManager } from '../../../../display/ConstantShaderManager.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { GroupEffect } from '../GroupEffect.js';
import { SpeedLine } from '../../../parts/skills/SpeedLine.js';
import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Filter } from 'pixi.js';

/**
 * The caster speeds up the targets.
 */
export class GrSpeed extends GroupEffect {
	/**
	 * The glow filter for the lines and fighters.
	 * Static to prevent WebGL from creating a new shader each time.
	 * @type {GlowFilter}
	 */
	static GlowFilter = ConstantShaderManager.getGlowFilter({
		distance: 7,
		outerStrength: 1,
		quality: 0.5,
		color: 0xffff00
	});
	/**
	 * The color filter allowing to change the color of the targets to white.
	 * Static to prevent WebGL from creating a new shader each time.
	 * @type {Filter}
	 */
	static ColorFilter;

	/**
	 * The speed build-up of the skill.
	 * @type {number}
	 */
	_speed = 0;
	/**
	 * The speed lines instantiated in the scene.
	 * @type {SpeedLine[]}
	 */
	_lines = [];

	/**
	 * The caster speeds up the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);

		if (!GrSpeed.ColorFilter) {
			GrSpeed.ColorFilter = PixiHelper.colorOffsetFilter(0, 0, 0);
		}
		for (const t of this._targets) {
			t.fighter.addFilters(GrSpeed.GlowFilter, GrSpeed.ColorFilter);
		}
		for (let i = 0; i < 20; ++i) {
			const sl = new SpeedLine(this._scene);
			this._scene.dm.addSprite(sl, Layers.Scene.FIGHTERS);
			this._lines.push(sl);
		}
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Increase the speed
			case 0:
				this._speed += timer.tmod;
				this._lines.map((l) => l.move(this._speed, timer.tmod, true));
				PixiHelper.setPercentColor(GrSpeed.ColorFilter, PixiHelper.mm(0, this._speed * 2, 100), 0xffffff);
				if (this._speed >= 100) {
					this.nextStep();
				}
				break;
			// Decrease the speed then wraps up once it reaches 0
			case 1:
				this._speed -= 1.5 * timer.tmod;
				this._lines.map((l) => l.move(this._speed, timer.tmod, false));
				PixiHelper.setPercentColor(GrSpeed.ColorFilter, PixiHelper.mm(0, this._speed * 2, 100), 0xffffff);
				if (this._speed <= 0) {
					this._lines.map((l) => l.kill());
					this._lines = [];
					// Remove the 2 filters from the targets
					for (const t of this._targets) {
						t.fighter.removeFilters(2);
					}
					this.end();
				}
				break;
		}
	}
}
