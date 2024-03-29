// @ts-check

import { Renderer } from 'pixi.js';
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
import { fx_slash } from '../gfx/fx/slash.js';
import { fx_vine_shadow } from '../gfx/fx/vine_shadow.js';
import { fx_vine } from '../gfx/fx/vine.js';
import { fx_water_canon_end } from '../gfx/fx/water_canon_end.js';
import { fx_detonation } from '../gfx/fx/detonation.js';

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
		fx_water_canon_end
	];

	/**
	 * Preload a chosen set of assets/animations, creating them and rendering them once.
	 * @param {Renderer} renderer The Fight's renderer.
	 */
	static preload(renderer) {
		const animator = new Animator(false);
		for (const a of PreloadData.ANIMATIONS) {
			animator.loadAnimation(a);
			renderer.render(animator);
		}
	}
}
