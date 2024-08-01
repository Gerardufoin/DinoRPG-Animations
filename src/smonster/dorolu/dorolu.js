// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 2583
export const dorolu = {
	name: 'dorolu',
	// Symbol 82
	width: 2.254,
	height: 0.992,
	transforms: [
		// 4089
		{
			tx: -39.75,
			ty: -51.3,
			a: 0.695,
			d: 0.695,
			brightness: -5,
			contrast: 19,
			saturation: -17
		},
		// Adjust
		{
			ty: -11.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 7.75,
			a: 2.487,
			d: 1.123
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		atk_smear_1: parts.attack_1,
		atk_smear_2: parts.attack_2,
		atk_smear_3: parts.attack_3,
		atk_smear_4: parts.attack_4,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		// 2545
		l_f_t_leg: parts.front_top_leg,
		// 2545-1
		r_f_t_leg: parts.front_top_leg,
		// 2547
		l_f_b_leg: parts.front_bottom_leg,
		// 2547-1
		r_f_b_leg: parts.front_bottom_leg,
		// 2549
		l_f_foot: parts.foot,
		// 2549-1
		l_b_foot: parts.foot,
		// 2549-2
		r_b_foot: parts.foot,
		// 2549-3
		r_f_foot: parts.foot,
		// 2551
		l_b_leg: parts.back_leg,
		// 2551-1
		r_b_leg: parts.back_leg,
		// 2553
		tail_3: parts.tail_3,
		// 2555
		tail_2: parts.tail_2,
		// 2557
		tail_1: parts.tail_1,
		// 2559
		l_body: parts.lower_body,
		// 2561
		u_body: parts.upper_body,
		// 2563
		head: parts.head,
		// 2565
		collar: parts.collar,
		// 2571
		atk_body_smear: parts.attack_body_smear,
		// 2575
		l_b_t_leg_dead: parts.back_top_leg_dead,
		// 2577
		l_b_b_leg_dead: parts.back_bottom_leg_dead,
		// 2579
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, ill same as stand
		// 2566
		stand: stand,
		// 2567
		walk: walk,
		// 2568
		run: run,
		// 2569
		hit: hit,
		// 2570
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		fall: jump,
		// 2572
		attack: attack,
		big: attack,
		// 2573
		land: land,
		// 2580
		dead: dead,
		// 2581
		sleep: sleep
	}
};
