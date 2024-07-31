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

// Symbol 2543
export const marca = {
	name: 'marca',
	// Symbol 82
	width: 1.418,
	height: 0.713,
	transforms: [
		// 4089
		{
			tx: -25.4,
			ty: -22.1,
			contrast: 14,
			saturation: 24
		},
		// Adjust
		{
			ty: -10
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -2.25,
			a: 1.012,
			d: 0.457
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2481
		l_f_leg: parts.front_leg,
		// 2481-1
		r_f_leg: parts.front_leg,
		// 2483
		l_b_leg: parts.back_leg,
		// 2483-1
		r_b_leg: parts.back_leg,
		// 2489
		hair: parts.hair,
		// 2491
		l_body: parts.lower_body,
		// 2493
		u_body: parts.upper_body,
		// 2495
		mouth: parts.mouth,
		// 2497
		nose: parts.nose,
		// 2498
		snort_1: parts.snort_1,
		// 2502
		snort_2: parts.snort_2,
		// 2503
		snort_3: parts.snort_3,
		// 2504
		snort_4: parts.snort_4,
		// 2505
		snort_5: parts.snort_5,
		// 2506
		snort_6: parts.snort_6,
		// 2507
		snort_7: parts.snort_7,
		// 2508
		snort_8: parts.snort_8,
		// 2509
		snort_9: parts.snort_9,
		// 2515
		u_body_hit: parts.upper_body_hit,
		// 2519
		atk_smear_1: parts.attack_smear_1,
		// 2520
		atk_smear_2: parts.attack_smear_2,
		// 2521
		atk_smear_3: parts.attack_smear_3,
		// 2522
		atk_smear_4: parts.attack_smear_4,
		// 2523
		atk_smear_5: parts.attack_smear_5,
		// 2524
		atk_smear_6: parts.attack_smear_6,
		// 2527
		hair_dead_1: parts.hair_dead_1,
		// 2528
		hair_dead_2: parts.hair_dead_2,
		// 2529
		hair_dead_3: parts.hair_dead_3,
		// 2530
		hair_dead_4: parts.hair_dead_4,
		// 2531
		hair_dead_5: parts.hair_dead_5,
		// 2532
		hair_dead_6: parts.hair_dead_6,
		// 2533
		hair_dead_7: parts.hair_dead_7,
		// 2534
		hair_dead_8: parts.hair_dead_8,
		// 2535
		hair_dead_9: parts.hair_dead_9,
		// 2536
		hair_dead_10: parts.hair_dead_10,
		// 2537
		hair_dead_11: parts.hair_dead_11,
		// 2538
		hair_dead_12: parts.hair_dead_12,
		// 2539
		hair_dead_13: parts.hair_dead_13,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// guard, release, ill same as stand
		// 2511
		stand: stand,
		// 2512
		walk: walk,
		// 2513
		run: run,
		// 2516
		hit: hit,
		// 2517
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 2525
		attack: attack,
		big: attack,
		// 2526
		land: land,
		// 2540
		dead: dead,
		// 2541
		sleep: sleep
	}
};
