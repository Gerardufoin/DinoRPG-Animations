// @ts-check
import { ref } from '../references.js';
import { febrez_head_sleep } from './animations/head_sleep.js';
import { febrez_head_talk } from './animations/head_talk.js';
import { febrez_legs } from './animations/legs.js';
import { febrez_wings } from './animations/wings.js';

const circle_glow = {
	distance: 5,
	color: 0x00ff00,
	quality: 0.5,
	strength: 1
};

export const parts = {
	// 1838
	smoke: [
		{
			ref: ref.febrez.smoke,
			blur: {
				x: 1,
				y: 1
			}
		}
	],
	// 2388
	wings: [febrez_wings],
	// 2390
	top_arm: [
		{
			ref: ref.febrez.top_arm
		}
	],
	// 2392
	bottom_arm: [
		{
			ref: ref.febrez.bottom_arm
		}
	],
	// 2394
	wand: [
		{
			ref: ref.febrez.wand
		}
	],
	// 2409
	legs: [febrez_legs],
	// 2411
	head: [
		{
			ref: ref.febrez.head
		}
	],
	// 2414
	head_hit: [
		{
			ref: ref.febrez.head_hit
		}
	],
	// 2416
	face_hit: [
		{
			ref: ref.febrez.face_hit
		}
	],
	// 2419
	attack_circle: [
		{
			ref: ref.febrez.attack_circle,
			glow: circle_glow
		}
	],
	// 2420
	attack_cir_mv_1: [
		{
			ref: ref.febrez.attack_cir_mv_1,
			glow: circle_glow
		}
	],
	// 2421
	attack_cir_mv_2: [
		{
			ref: ref.febrez.attack_cir_mv_2,
			glow: circle_glow
		}
	],
	// 2422
	attack_cir_mv_3: [
		{
			ref: ref.febrez.attack_cir_mv_3,
			glow: circle_glow
		}
	],
	// 2423
	attack_cir_mv_4: [
		{
			ref: ref.febrez.attack_cir_mv_4,
			glow: circle_glow
		}
	],
	// 2424
	attack_cir_mv_5: [
		{
			ref: ref.febrez.attack_cir_mv_5,
			glow: circle_glow
		}
	],
	// 2425
	attack_cir_mv_6: [
		{
			ref: ref.febrez.attack_cir_mv_6,
			glow: circle_glow
		}
	],
	// 2426
	attack_cir_mv_7: [
		{
			ref: ref.febrez.attack_cir_mv_7,
			glow: circle_glow
		}
	],
	// 2427
	attack_cir_mv_8: [
		{
			ref: ref.febrez.attack_cir_mv_8,
			glow: circle_glow
		}
	],
	// 2428
	attack_cir_mv_9: [
		{
			ref: ref.febrez.attack_cir_mv_9,
			glow: circle_glow
		}
	],
	// 2429
	attack_cir_mv_10: [
		{
			ref: ref.febrez.attack_cir_mv_10,
			glow: circle_glow
		}
	],
	// 2430
	attack_cir_mv_11: [
		{
			ref: ref.febrez.attack_cir_mv_11,
			glow: circle_glow
		}
	],
	// 2431
	attack_cir_mv_12: [
		{
			ref: ref.febrez.attack_cir_mv_12,
			glow: circle_glow
		}
	],
	// 2432
	attack_cir_mv_13: [
		{
			ref: ref.febrez.attack_cir_mv_13,
			glow: circle_glow
		}
	],
	// 2433
	attack_cir_mv_14: [
		{
			ref: ref.febrez.attack_cir_mv_14,
			glow: circle_glow
		}
	],
	// 2434
	attack_cir_mv_15: [
		{
			ref: ref.febrez.attack_cir_mv_15,
			glow: circle_glow
		}
	],
	// 2435
	attack_cir_mv_16: [
		{
			ref: ref.febrez.attack_cir_mv_16,
			glow: circle_glow
		}
	],
	// 2436
	attack_cir_mv_17: [
		{
			ref: ref.febrez.attack_cir_mv_17,
			glow: circle_glow
		}
	],
	// 2437
	attack_cir_mv_18: [
		{
			ref: ref.febrez.attack_cir_mv_18,
			glow: circle_glow
		}
	],
	// 2438
	attack_cir_mv_19: [
		{
			ref: ref.febrez.attack_cir_mv_19,
			glow: circle_glow
		}
	],
	// 2439
	attack_cir_mv_20: [
		{
			ref: ref.febrez.attack_cir_mv_20,
			glow: circle_glow
		}
	],
	// 2440
	attack_cir_mv_21: [
		{
			ref: ref.febrez.attack_cir_mv_21,
			glow: circle_glow
		}
	],
	// 2441
	attack_cir_mv_22: [
		{
			ref: ref.febrez.attack_cir_mv_22,
			glow: circle_glow
		}
	],
	// 2442
	attack_cir_mv_23: [
		{
			ref: ref.febrez.attack_cir_mv_23,
			glow: circle_glow
		}
	],
	// 2443
	attack_cir_mv_24: [
		{
			ref: ref.febrez.attack_cir_mv_24,
			glow: circle_glow
		}
	],
	// 2444
	attack_cir_mv_25: [
		{
			ref: ref.febrez.attack_cir_mv_25,
			glow: circle_glow
		}
	],
	// 2445
	attack_cir_mv_26: [
		{
			ref: ref.febrez.attack_cir_mv_26,
			glow: circle_glow
		}
	],
	// 2446
	attack_cir_mv_27: [
		{
			ref: ref.febrez.attack_cir_mv_27,
			glow: circle_glow
		}
	],
	// 2447
	attack_cir_mv_28: [
		{
			ref: ref.febrez.attack_cir_mv_28,
			glow: circle_glow
		}
	],
	// 2448
	attack_cir_mv_29: [
		{
			ref: ref.febrez.attack_cir_mv_29,
			glow: circle_glow
		}
	],
	// 2449
	attack_cir_mv_30: [
		{
			ref: ref.febrez.attack_cir_mv_30,
			glow: circle_glow
		}
	],
	// 2450
	attack_cir_mv_31: [
		{
			ref: ref.febrez.attack_cir_mv_31,
			glow: circle_glow
		}
	],
	// 2451
	attack_cir_mv_32: [
		{
			ref: ref.febrez.attack_cir_mv_32,
			glow: circle_glow
		}
	],
	// 2452
	attack_cir_mv_33: [
		{
			ref: ref.febrez.attack_cir_mv_33,
			glow: circle_glow
		}
	],
	// 2453
	attack_cir_mv_34: [
		{
			ref: ref.febrez.attack_cir_mv_34,
			glow: circle_glow
		}
	],
	// 2454
	attack_cir_mv_35: [
		{
			ref: ref.febrez.attack_cir_mv_35,
			glow: circle_glow
		}
	],
	// 2455
	attack_cir_mv_36: [
		{
			ref: ref.febrez.attack_cir_mv_36,
			glow: circle_glow
		}
	],
	// 2456
	attack_cir_mv_37: [
		{
			ref: ref.febrez.attack_cir_mv_37,
			glow: circle_glow
		}
	],
	// 2457
	attack_cir_mv_38: [
		{
			ref: ref.febrez.attack_cir_mv_38,
			glow: circle_glow
		}
	],
	// 2458
	attack_cir_mv_39: [
		{
			ref: ref.febrez.attack_cir_mv_39,
			glow: circle_glow
		}
	],
	// 2463
	head_talk: [febrez_head_talk],
	// 2465
	speech: [
		{
			ref: ref.febrez.bubble
		}
	],
	// 2469
	head_turn: [
		// 2467
		{
			ref: ref.febrez.head_turn,
			transform: {
				tx: 6.5,
				ty: -0.1
			},
			blur: {
				x: 1,
				y: 0
			}
		},
		// 2468
		{
			ref: ref.febrez.head_turn_smear
		}
	],
	// 2471
	head_angry: [
		{
			ref: ref.febrez.head_angry
		}
	],
	// 2476
	head_sleep: [febrez_head_sleep]
};
