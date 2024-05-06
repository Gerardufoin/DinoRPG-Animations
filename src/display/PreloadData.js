// @ts-check

import { Graphics, RenderTexture, Renderer } from 'pixi.js';
import { decompressFromBase64 } from 'lz-string';

import { fx_bubble } from '../gfx/fx/bubble.js';
import { fx_bolt } from '../gfx/fx/bolt.js';
import { fx_onde_focus } from '../gfx/fx/onde_focus.js';
import { fx_survivor } from '../gfx/fx/survivor.js';
import { fx_fireball } from '../gfx/fx/fireball.js';
import { fx_meteor_fire } from '../gfx/fx/meteor_fire.js';
import { fx_meteor_trail } from '../gfx/fx/meteor_trail.js';
import { Animator } from './Animator.js';
import { fx_braise_explo } from '../gfx/fx/braise_explo.js';
import { fx_flameche } from '../gfx/fx/flameche.js';
import { fx_lava_end } from '../gfx/fx/lava_end.js';
import { fx_petal } from '../gfx/fx/petal.js';
import { fx_tornado } from '../gfx/fx/tornado.js';
import { fx_slash } from '../gfx/fx/attach/slash.js';
import { fx_vine_shadow } from '../gfx/fx/vine_shadow.js';
import { fx_vine } from '../gfx/fx/vine.js';
import { fx_water_canon_end } from '../gfx/fx/water_canon_end.js';
import { fx_detonation } from '../gfx/fx/detonation.js';
import { ref } from '../gfx/references.js';
import { SkillAura } from '../fight/actions/skills/SkillAura.js';
import { GlowFilter } from '@pixi/filter-glow';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../fight/IScene.js';
import { ConstantShaderManager } from './ConstantShaderManager.js';
import { glow_attack_1, glow_attack_2 } from '../smonster/wolf/parts.js';
import { Acorn } from '../fight/parts/skills/projectile/Acorn.js';
import { FxFocus } from '../fight/actions/skills/fx/FxFocus.js';
import { fx_endurance_off } from '../gfx/fx/endurance_off.js';
import { fx_qigong } from '../gfx/fx/qigong.js';
import { GrSpeed } from '../fight/actions/skills/group/GrSpeed.js';
import { Environment } from '../fight/parts/skills/env/Environment.js';
import { WoodEnvironment } from '../fight/parts/skills/env/wood/WoodEnvironment.js';

/**
 * Class used to preload part of the assets.
 * TODO: To improve with targeted loading.
 */
export class PreloadData {
	/**
	 * List of animations to preload.
	 */
	static ANIMATIONS = [
		fx_bolt,
		fx_braise_explo,
		fx_bubble,
		fx_detonation,
		fx_fireball,
		fx_flameche,
		fx_lava_end,
		fx_meteor_fire,
		fx_meteor_trail,
		fx_onde_focus,
		fx_petal,
		fx_slash,
		fx_survivor,
		fx_tornado,
		fx_vine_shadow,
		fx_vine,
		fx_water_canon_end,
		fx_endurance_off,
		fx_qigong
	];

	/**
	 * List of glow filters to preload.
	 * @type {GlowFilter[]}
	 */
	static GLOW_FILTERS = [
		SkillAura.FirstAura,
		SkillAura.SecondAura,
		SkillAura.ThirdAura,
		Acorn.GlowFilter,
		ConstantShaderManager.getGlowFilter({
			distance: glow_attack_1.distance,
			color: glow_attack_1.color,
			quality: glow_attack_1.quality,
			outerStrength: glow_attack_1.strength
		}),
		ConstantShaderManager.getGlowFilter({
			distance: glow_attack_2.distance,
			color: glow_attack_2.color,
			quality: glow_attack_2.quality,
			outerStrength: glow_attack_2.strength
		}),
		FxFocus.GlowFilter,
		GrSpeed.GlowFilter,
		WoodEnvironment.TreesGlow
	];

	/**
	 * Preload a chosen set of assets/animations, creating them and rendering them once.
	 * @param {Renderer} renderer The Fight's renderer.
	 * @returns {Promise} A promise triggering once everything is loaded.
	 */
	static async preload(renderer) {
		const preloadTexture = RenderTexture.create({
			width: 100,
			height: 100
		});
		// Preload animations
		const animator = new Animator(false);
		for (const a of PreloadData.ANIMATIONS) {
			animator.loadAnimation(a);
			renderer.render(animator, { renderTexture: preloadTexture });
		}

		// Preload Environment mask filter
		Environment.createMaskFilter();
		renderer.render(Environment.MaskAnimator, { renderTexture: preloadTexture });

		// Preload glow filters
		const grph = new Graphics().beginFill(0xffffff).drawRect(25, 25, 50, 50);
		for (const gl of PreloadData.GLOW_FILTERS) {
			grph.filters = [gl];
			renderer.render(grph, { renderTexture: preloadTexture });
		}

		preloadTexture.destroy();

		// Preload fonts
		return new Promise((resolve) => {
			const promises = [];
			for (const family in ref.fonts) {
				for (const weight in ref.fonts[family]) {
					const font = new FontFace(
						family,
						`url(data:${ref.fonts[family][weight].type};charset=utf-8;base64,${decompressFromBase64(
							ref.fonts[family][weight].data
						)})`,
						{
							weight: weight
						}
					);
					document.fonts.add(font);
					promises.push(font.load());
				}
			}
			Promise.all(promises).then(() => resolve());
		});
	}
}
