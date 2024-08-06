// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from '../towgrd/animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { guard } from '../towgrd/animations/guard.js';
import { land } from '../towgrd/animations/land.js';
import { stand } from '../towgrd/animations/stand.js';
import { parts as parts_towgrd } from '../towgrd/parts.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 2881
export const upgrd = {
	name: 'upgrd',
	// Symbol 82
	width: 2.406,
	height: 1.804,
	transforms: [
		// 4089
		{
			tx: 8.15,
			ty: -29.75,
			brightness: 1,
			contrast: 15,
			saturation: 16
		},
		// 2881
		{
			tx: -8,
			ty: -20
		}
	],
	glow: {
		distance: 3,
		color: 0xccffcc,
		quality: 1,
		strength: 1.5
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2842
		legs: parts.legs,
		// 2844
		r_b_arm: parts.right_bottom_arm,
		// 2846
		r_hand: parts.right_hand,
		// 2848
		r_t_arm: parts.right_top_arm,
		// 2854
		body: parts.body,
		// 2856
		l_t_arm: parts.left_top_arm,
		// 2858
		l_b_arm: parts.left_bottom_arm,
		// 2860
		l_hand: parts.left_hand,
		// 2862
		head: parts.head,
		// 2864
		l_eye: parts.eye,
		// 2864-1
		r_eye: parts.eye,
		// 2867
		atk_smear: parts.attack_smear,
		// 2871
		spirit: parts.spirit,
		// 1216 morphshape
		shield: parts_towgrd.shield,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_dust_4: fx_dust,
		fx_dust_5: fx_dust,
		fx_dust_6: fx_dust
	},
	animations: {
		// release, ill, cast, walk, run, dodge, jumpDown, fall, jump, sleep, fly same as stand
		// 2865
		stand: stand,
		// 2866
		hit: hit,
		// 2868
		attack: attack,
		big: attack,
		counter: attack,
		// 2869
		land: land,
		// 2874
		dead: dead,
		// 2879
		guard: guard
	}
};
