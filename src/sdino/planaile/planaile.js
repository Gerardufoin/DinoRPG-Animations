// @ts-check

import { ref } from '../references.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';

export let planaile = {
	name: 'planaile',
	transforms: [
		// 336
		{
			partIdx: 1,
			transforms: [
				{
					tx: 11.45,
					ty: 14.65,
					a: 0.868,
					d: 0.868,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 11.45,
					ty: 14.55,
					a: 0.883,
					d: 0.883,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 11.45,
					ty: 14.45,
					a: 0.897,
					d: 0.897,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 11.45,
					ty: 14.4,
					a: 0.912,
					d: 0.912,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 11.4,
					ty: 14.3,
					a: 0.927,
					d: 0.927,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 11.4,
					ty: 14.2,
					a: 0.941,
					d: 0.941,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 11.45,
					ty: 14.1,
					a: 0.956,
					d: 0.956,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 11.45,
					ty: 14.05,
					a: 0.971,
					d: 0.971,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 11.45,
					ty: 13.95,
					a: 0.985,
					d: 0.985,
					brightness: 1
				},
				{
					tx: 11.45,
					ty: 13.85
				},
				{
					tx: 11.45,
					ty: 13.45,
					a: 1.159,
					d: 1.159,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -12.35,
			ty: -11.65
		}
	],
	glow: {
		distance: 1,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: [
		[
			// col0
			[
				'#FFB0B0',
				'#FA8177',
				'#E28B8B',
				'#FF996F',
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
			['#FFDDDD', '#FBCCC8', '#FCE1C7', '#F3CEB6', '#EAC49D', '#EAC49D'],
			// col2
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15'],
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
		],
		[
			// col0
			['#8A6464', '#73648A', '#64868A'],
			// col1
			['#A87D7D', '#908EAD', '#82AAAF'],
			// col2
			['#F5A2A2', '#9993FF', '#91ECF7'],
			// col3
			['#C49595', '#9A98BD', '#A5BFC2']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -1.25,
			ty: 8.9,
			a: 0.917,
			d: 0.917
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 288
		right_arm: [
			// 287
			{
				colorIdx: 1,
				ref: ref.planaile.right_arm
			}
		],
		// 294
		body: [
			{
				// 291
				special: true,
				colorIdx: 2,
				ref: ref.planaile.body_special,
				transform: {
					tx: -2.0,
					ty: -14.0
				}
			},
			{
				partIdx: 9,
				frames: [0, 0, 1],
				parts: [
					// 293
					{
						colorIdx: 2,
						ref: ref.planaile.body
					},
					// 293
					{
						colorIdx: 1,
						ref: ref.planaile.body
					}
				]
			}
		],
		// 297
		head: [
			// 296
			{
				colorIdx: 1,
				ref: ref.planaile.head,
				transform: {
					tx: -0.55,
					ty: 0.1
				}
			}
		],
		// 305
		ears: [
			{
				partIdx: 4,
				frames: [0, 1, 1, 2],
				parts: [
					// 299
					{
						colorIdx: 0,
						ref: ref.planaile.ears_round,
						transform: {
							tx: -0.9,
							ty: 0.9
						}
					},
					// 304
					{
						colorIdx: 0,
						ref: ref.planaile.ears_pointy
					},
					// 304
					{
						colorIdx: 0,
						ref: ref.planaile.ears_pointy,
						transform: {
							tx: 0.0,
							ty: -0.6,
							a: 0.891,
							d: 1.128
						}
					}
				]
			},
			// 302
			{
				special: true,
				colorIdx: 2,
				ref: ref.planaile.ears_special,
				transform: {
					tx: -9.35,
					ty: -10.25
				}
			}
		],
		// 308
		left_leg: [
			// 307
			{
				colorIdx: 0,
				ref: ref.planaile.left_leg,
				transform: {
					tx: 0.0,
					ty: 0.05
				}
			}
		],
		// 310
		left_foot: [
			{
				ref: ref.planaile.left_foot
			}
		],
		// 312
		left_hand: [
			{
				ref: ref.planaile.left_hand
			}
		],
		// 315
		left_arm: [
			// 314
			{
				colorIdx: 0,
				ref: ref.planaile.left_arm
			}
		],
		// 317
		right_hand: [
			{
				ref: ref.planaile.right_hand
			}
		],
		// 323
		right_eye: [
			// 319
			{
				special: true,
				ref: ref.planaile.eye_special,
				transform: {
					tx: -2.3,
					ty: -4.3,
					a: 0.403,
					d: 0.907
				}
			},
			{
				partIdx: 8,
				frames: [
					0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
				],
				parts: [
					// 321
					{
						ref: ref.planaile.nose,
						colorOffset: {
							r: -108,
							g: -148,
							b: -153
						}
					},
					// 321
					{
						ref: ref.planaile.nose,
						colorOffset: {
							r: -133,
							g: -87,
							b: 20
						}
					}
				]
			},
			// 322
			{
				ref: ref.planaile.nose_highlight
			}
		],
		// 326
		left_eye: [
			{
				partIdx: 1,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				parts: [
					// 324
					{
						ref: ref.planaile.left_eye_white
					},
					// 325
					{
						ref: ref.planaile.left_eye_red
					}
				]
			},
			// 319
			{
				special: true,
				ref: ref.planaile.eye_special,
				transform: {
					tx: -3.5,
					ty: -2.85
				}
			}
		],
		// 146
		fx_impact_1: [
			{
				ref: ref.fx.impact_1
			}
		],
		// 147
		fx_impact_2: [
			{
				ref: ref.fx.impact_2
			}
		],
		// 148
		fx_impact_3: [
			{
				ref: ref.fx.impact_3
			}
		],
		// 149
		fx_impact_4: [
			{
				ref: ref.fx.impact_4
			}
		],
		// 150
		fx_impact_5: [
			{
				ref: ref.fx.impact_5
			}
		]
	},
	animations: {
		// missing cast, release
		// 327
		stand: stand,
		// 328
		walk: walk,
		// 329
		run: fly,
		// 330
		hit: hit,
		// 331 but same as 329
		jump: fly,
		// 332
		attack: attack,
		// 333
		land: land,
		// 334
		dead: dead,
		// 334 idx 5
		sleep: { offset: 5, anim: dead },
		// 334 idx 10
		ill: { offset: 10, anim: dead },
		// 329
		fly: fly
	}
};
