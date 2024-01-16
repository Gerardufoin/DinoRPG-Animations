// @ts-check
import { ref } from '../references.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';

export let pteroz = {
	name: 'pteroz',
	width: 0.707,
	height: 0.663,
	transforms: [
		// 517
		{
			partIdx: 1,
			transforms: [
				{
					tx: -4.65,
					ty: 0.6,
					a: 0.822,
					d: 0.822,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -4.75,
					ty: 0.5,
					a: 0.842,
					d: 0.842,
					brightness: 9,
					contrast: 5
				},
				{
					tx: -4.8,
					ty: 0.5,
					a: 0.862,
					d: 0.862,
					brightness: 8,
					contrast: 3
				},
				{
					tx: -4.9,
					ty: 0.4,
					a: 0.882,
					d: 0.882,
					brightness: 7,
					contrast: 3
				},
				{
					tx: -5,
					ty: 0.3,
					a: 0.901,
					d: 0.901,
					brightness: 6,
					contrast: 2
				},
				{
					tx: -5.05,
					ty: 0.25,
					a: 0.921,
					d: 0.921,
					brightness: 4,
					contrast: 2
				},
				{
					tx: -5.15,
					ty: 0.25,
					a: 0.941,
					d: 0.941,
					brightness: 3,
					contrast: 1
				},
				{
					tx: -5.25,
					ty: 0.15,
					a: 0.961,
					d: 0.961,
					brightness: 2,
					contrast: 1
				},
				{
					tx: -5.3,
					ty: 0.05,
					a: 0.98,
					d: 0.98,
					brightness: 1
				},
				{
					tx: -5.4,
					ty: 0.05
				},
				{
					tx: -6,
					ty: 0.05,
					a: 1.166,
					d: 1.166,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 1.9,
			ty: 1.25,
			a: 1.117,
			d: 1.117
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: [
		[
			// col0
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			],
			// col1
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			],
			// col2
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			],
			// col3
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			]
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -1.7,
			ty: 8.55,
			a: 0.917,
			d: 0.917
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
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
		right_hand: [
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
		// 479
		left_hand: [
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
		],
		// 154
		fx_dust_1: [
			{
				ref: ref.fx.dust,
				colorOffset: {
					r: -11,
					g: -51,
					b: -92
				}
			}
		],
		// 154
		fx_dust_2: [
			{
				ref: ref.fx.dust,
				colorOffset: {
					r: -11,
					g: -51,
					b: -92
				}
			}
		],
		// 154
		fx_dust_3: [
			{
				ref: ref.fx.dust,
				colorOffset: {
					r: -11,
					g: -51,
					b: -92
				}
			}
		]
	},
	animations: {
		// missing cast, release
		// hit same as stand
		// 509
		stand: stand,
		// 510
		walk: walk,
		// 511
		run: run,
		// 511
		jump: run,
		// 512
		attack: attack,
		// 513
		land: land,
		// 514
		dead: dead,
		// 514 idx 5
		sleep: { offset: 5, anim: dead },
		// 514 idx 10
		ill: { offset: 10, anim: dead },
		// 515
		fly: fly
	}
};
