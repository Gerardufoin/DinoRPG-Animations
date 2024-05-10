// @ts-check
import { ref } from '../references_small.js';

export const parts = {
	// 473
	right_wing: [
		{
			partIdx: 6,
			frames: [0, 1],
			parts: [
				[
					// 470
					{
						colorIdx: 1,
						ref: ref.pteroz.right_wing,
						transform: {
							tx: -2.1,
							ty: -1.15,
							a: 1.179,
							d: 1.179
						}
					},
					// 472
					{
						colorIdx: 0,
						ref: ref.pteroz.right_wing_bone,
						transform: {
							tx: 0.3,
							ty: -2.45,
							a: 1.179,
							d: 1.179
						}
					}
				],
				[
					// 470
					{
						colorIdx: 1,
						ref: ref.pteroz.right_wing,
						transform: {
							tx: -2.05,
							ty: 1.1
						}
					},
					// 472
					{
						colorIdx: 0,
						ref: ref.pteroz.right_wing_bone
					}
				]
			]
		}
	],
	// 479
	hand: [
		// 475
		{
			colorIdx: 0,
			ref: ref.pteroz.arm
		},
		// 477
		{
			ref: ref.pteroz.arm_shoulder,
			transform: {
				tx: 4.1,
				ty: -5.0
			},
			colorOffset: {
				r: -108,
				g: -103,
				b: -82
			}
		},
		// 478
		{
			ref: ref.pteroz.arm_claws
		}
	],
	// 482
	fin: [
		// 481
		{
			colorIdx: 0,
			ref: ref.pteroz.fin
		}
	],
	// 485
	body: [
		// 484
		{
			colorIdx: 0,
			ref: ref.pteroz.body
		}
	],
	// 494
	beak: [
		{
			partIdx: 3,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 3],
			parts: [
				// 487
				{
					colorIdx: 0,
					ref: ref.pteroz.beak,
					transform: {
						tx: -2.85,
						ty: 1.35
					}
				},
				// 489
				{
					colorIdx: 0,
					ref: ref.pteroz.beak_long,
					transform: {
						tx: -4.25,
						ty: 4.15
					}
				},
				// 491
				{
					colorIdx: 0,
					ref: ref.pteroz.beak_broken,
					transform: {
						tx: -3.65,
						ty: 1.95
					}
				},
				// 493
				{
					colorIdx: 0,
					ref: ref.pteroz.beak_broken,
					transform: {
						tx: -2.75,
						ty: 1.7
					}
				}
			]
		}
	],
	// 496
	left_leg: [
		{
			ref: ref.pteroz.leg
		}
	],
	// 503
	eyes: [
		// 498
		{
			ref: ref.pteroz.eyes_mask,
			colorOffset: {
				r: -108,
				g: -113,
				b: -82
			}
		},
		{
			partIdx: 4,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3],
			parts: [
				// 499
				{
					ref: ref.pteroz.eyes
				},
				// 500,
				{
					ref: ref.pteroz.eyes_small
				},
				// 501
				{
					ref: ref.pteroz.eyes_cyclop
				},
				// 502
				{
					ref: ref.pteroz.eyes_many
				}
			]
		}
	],
	// 508
	left_wing: [
		{
			partIdx: 6,
			frames: [0, 1],
			parts: [
				[
					// 505
					{
						colorIdx: 1,
						ref: ref.pteroz.left_wing,
						transform: {
							tx: 1.55,
							ty: -0.4,
							a: 1.377,
							d: 1.251
						}
					},
					// 507
					{
						colorIdx: 0,
						ref: ref.pteroz.left_wing_bone,
						transform: {
							tx: -3.95,
							ty: 2.2,
							a: 0.827,
							d: 0.713,
							b: 0.0,
							c: 0.353
						}
					},
					// 507
					{
						colorIdx: 0,
						ref: ref.pteroz.left_wing_bone,
						transform: {
							tx: 2.6,
							ty: -1.8,
							a: 1.377,
							d: 1.251
						}
					}
				],
				[
					// 505
					{
						colorIdx: 1,
						ref: ref.pteroz.left_wing,
						transform: {
							tx: -0.75,
							ty: 1.1
						}
					},
					// 507
					{
						colorIdx: 0,
						ref: ref.pteroz.left_wing_bone
					}
				]
			]
		}
	]
};
