// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 2479
export const febrez = {
	name: 'febrez',
	// Symbol 82
	width: 0.983,
	height: 1.046,
	transforms: [
		// 4089
		{
			tx: -33.3,
			ty: -66.7
		},
		// Adjust
		{
			ty: -12.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 2.1,
			a: 1.012,
			d: 0.457
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1838
		smoke_1: parts.smoke,
		// 1838-1
		smoke_2: parts.smoke,
		// 1838-2
		smoke_3: parts.smoke,
		// 1838-3
		smoke_4: parts.smoke,
		// 1838-4
		smoke_5: parts.smoke,
		// 1838-5
		smoke_6: parts.smoke,
		// 1838-6
		smoke_7: parts.smoke,
		// 1838-7
		smoke_8: parts.smoke,
		// 1838-8
		smoke_9: parts.smoke,
		// 1838-9
		smoke_10: parts.smoke,
		// 1838-10
		smoke_11: parts.smoke,
		// 1838-11
		smoke_12: parts.smoke,
		// 2388
		wings: parts.wings,
		// 2390
		r_t_arm: parts.top_arm,
		// 2390-1
		l_t_arm: parts.top_arm,
		// 2392
		r_b_arm: parts.bottom_arm,
		// 2392-1
		l_b_arm: parts.bottom_arm,
		// 2394
		wand: parts.wand,
		// 2409
		legs: parts.legs,
		// 2411
		head: parts.head,
		// 2414
		head_hit: parts.head_hit,
		// 2416
		face_hit: parts.face_hit,
		// 2419
		atk_circle_1: parts.attack_circle,
		// 2419-1
		atk_circle_2: parts.attack_circle,
		// 2420
		atk_cir_mv_1: parts.attack_cir_mv_1,
		// 2421
		atk_cir_mv_2: parts.attack_cir_mv_2,
		// 2422
		atk_cir_mv_3: parts.attack_cir_mv_3,
		// 2423
		atk_cir_mv_4: parts.attack_cir_mv_4,
		// 2424
		atk_cir_mv_5: parts.attack_cir_mv_5,
		// 2425
		atk_cir_mv_6: parts.attack_cir_mv_6,
		// 2426
		atk_cir_mv_7: parts.attack_cir_mv_7,
		// 2427
		atk_cir_mv_8: parts.attack_cir_mv_8,
		// 2428
		atk_cir_mv_9: parts.attack_cir_mv_9,
		// 2429
		atk_cir_mv_10: parts.attack_cir_mv_10,
		// 2430
		atk_cir_mv_11: parts.attack_cir_mv_11,
		// 2431
		atk_cir_mv_12: parts.attack_cir_mv_12,
		// 2432
		atk_cir_mv_13: parts.attack_cir_mv_13,
		// 2433
		atk_cir_mv_14: parts.attack_cir_mv_14,
		// 2434
		atk_cir_mv_15: parts.attack_cir_mv_15,
		// 2435
		atk_cir_mv_16: parts.attack_cir_mv_16,
		// 2436
		atk_cir_mv_17: parts.attack_cir_mv_17,
		// 2437
		atk_cir_mv_18: parts.attack_cir_mv_18,
		// 2438
		atk_cir_mv_19: parts.attack_cir_mv_19,
		// 2439
		atk_cir_mv_20: parts.attack_cir_mv_20,
		// 2440
		atk_cir_mv_21: parts.attack_cir_mv_21,
		// 2441
		atk_cir_mv_22: parts.attack_cir_mv_22,
		// 2442
		atk_cir_mv_23: parts.attack_cir_mv_23,
		// 2443
		atk_cir_mv_24: parts.attack_cir_mv_24,
		// 2444
		atk_cir_mv_25: parts.attack_cir_mv_25,
		// 2445
		atk_cir_mv_26: parts.attack_cir_mv_26,
		// 2446
		atk_cir_mv_27: parts.attack_cir_mv_27,
		// 2447
		atk_cir_mv_28: parts.attack_cir_mv_28,
		// 2448
		atk_cir_mv_29: parts.attack_cir_mv_29,
		// 2449
		atk_cir_mv_30: parts.attack_cir_mv_30,
		// 2450
		atk_cir_mv_31: parts.attack_cir_mv_31,
		// 2451
		atk_cir_mv_32: parts.attack_cir_mv_32,
		// 2452
		atk_cir_mv_33: parts.attack_cir_mv_33,
		// 2453
		atk_cir_mv_34: parts.attack_cir_mv_34,
		// 2454
		atk_cir_mv_35: parts.attack_cir_mv_35,
		// 2455
		atk_cir_mv_36: parts.attack_cir_mv_36,
		// 2456
		atk_cir_mv_37: parts.attack_cir_mv_37,
		// 2457
		atk_cir_mv_38: parts.attack_cir_mv_38,
		// 2458
		atk_cir_mv_39: parts.attack_cir_mv_39,
		// 2463
		head_talk: parts.head_talk,
		// 2465
		speech: parts.speech,
		// 2469
		head_turn: parts.head_turn,
		// 2471
		head_angry: parts.head_angry,
		// 2476
		head_sleep: parts.head_sleep
	},
	animations: {
		// release, ill, walk, run, jump, jumpDown, fall, fly, dodge, land same stand
		// 2412
		stand: stand,
		// 2417
		hit: hit,
		// 2459
		attack: attack,
		big: attack,
		counter: attack,
		cast: attack,
		shoot: attack,
		// 2472
		dead: dead,
		// 2477
		sleep: sleep
	}
};
