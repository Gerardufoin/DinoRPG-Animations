// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 3050
export const sofia = {
	name: 'sofia',
	// Symbol 2750
	width: 1.217,
	height: 2.08,
	transforms: [
		// 4089
		{
			tx: -29.7,
			ty: -70.9
		},
		// 3050
		{
			tx: 57.1,
			ty: -9,
			a: -1,
			d: 1
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.9,
			a: 1.703,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// Animations needs to stay there so reset children works as expected
		head: parts.head,
		head_bump: parts.head_bump,
		deco: parts.deco,
		deco_hit: parts.deco_hit,
		head_hit: parts.head_hit,
		// 3002
		r_scarf: parts.right_scarf,
		// 3004
		r_t_arm: parts.right_top_arm,
		// 3006
		r_hand: parts.right_hand,
		// 3008
		r_b_arm: parts.right_bottom_arm,
		// 3010
		legs: parts.legs,
		// 3012
		r_t_scarf: parts.right_top_scarf,
		// 3014
		body: parts.body,
		// 3016
		l_scarf: parts.left_scarf,
		// 3023
		l_hand: parts.left_hand,
		// 3025
		l_arm: parts.left_arm,
		// 3038
		atk_r_b_arm: parts.attack_right_bottom_arm,
		// 3040
		atk_r_hand: parts.attack_right_hand,
		// 3041
		atk_fx_1_1: parts.attack_fx_1,
		// 3041
		atk_fx_1_2: parts.attack_fx_1,
		// 3041
		atk_fx_1_3: parts.attack_fx_1,
		// 3041
		atk_fx_1_4: parts.attack_fx_1,
		// 3042
		atk_fx_2_1: parts.attack_fx_2,
		// 3042
		atk_fx_2_2: parts.attack_fx_2,
		// 3042
		atk_fx_2_3: parts.attack_fx_2,
		// 3042
		atk_fx_2_4: parts.attack_fx_2,
		// 3043
		atk_fx_3_1: parts.attack_fx_3,
		// 3043
		atk_fx_3_2: parts.attack_fx_3,
		// 3043
		atk_fx_3_3: parts.attack_fx_3,
		// 3043
		atk_fx_3_4: parts.attack_fx_3,
		// 3047
		atk_ball: parts.attack_ball
	},
	animations: {
		// ill, cast, walk, run, dodge, jumpDown, fall, jump, land, dead, sleep, release same as stand
		// 3035
		stand: stand,
		// 3036
		hit: hit,
		// 3048
		attack: attack,
		big: attack,
		counter: attack,
		superattack: attack
	}
};
