// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { jump } from './animations/jump.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';

export let sirain = {
	name: 'sirain',
	width: 0.59,
	height: 0.66,
	transforms: [
		// 600
		{
			partIdx: 1,
			transforms: [
				{
					tx: 3,
					ty: -0.8,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 3,
					ty: -0.85,
					a: 1.017,
					d: 1.017,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 3,
					ty: -0.95,
					a: 1.033,
					d: 1.033,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 3.05,
					ty: -1,
					a: 1.05,
					d: 1.05,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 3.05,
					ty: -1.1,
					a: 1.066,
					d: 1.066,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 3.05,
					ty: -1.15,
					a: 1.083,
					d: 1.083,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 3.05,
					ty: -1.25,
					a: 1.099,
					d: 1.099,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 3.1,
					ty: -1.3,
					a: 1.116,
					d: 1.116,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 3.1,
					ty: -1.4,
					a: 1.132,
					d: 1.132,
					brightness: 1
				},
				{
					tx: 3.1,
					ty: -1.5,
					a: 1.149,
					d: 1.149
				},
				{
					tx: 3.2,
					ty: -2.8,
					a: 1.317,
					d: 1.317,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -0.8,
			ty: 0.9
		},
		// adjust
		{
			ty: -8.55
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
		],
		[
			// col0
			['#A9D9DB', '#CC8AE5', '#EC9EC0'],
			// col1
			['#73A4A6', '#945FA8', '#D0769D'],
			// col2
			['#52CFD4', '#FFD035', '#FFD035'],
			// col3
			['#329498', '#FFDB64', '#FFDB64']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -0.8,
			ty: 0,
			a: 0.612,
			d: 0.612
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 559
		tail: [
			{
				partIdx: 8,
				frames: [0, 1, 2, 3, 4, 5, 6],
				parts: [
					// 548
					{
						ref: ref.sirain.tail_bubble
					},
					// 550
					{
						colorIdx: 0,
						ref: ref.sirain.tail_thin,
						transform: {
							tx: 0.75,
							ty: -1.6
						}
					},
					// 552
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fan,
						transform: {
							tx: -0.05,
							ty: 2.35
						}
					},
					[
						// 554
						{
							colorIdx: 0,
							ref: ref.sirain.tail_fat,
							transform: {
								tx: 0.4,
								ty: 1.05
							}
						}
					],
					[
						// 556
						{
							colorIdx: 1,
							ref: ref.sirain.tail_fin,
							transform: {
								tx: 3.8,
								ty: -0.45,
								a: 0.52,
								d: -0.866,
								b: -0.3,
								c: -0.5
							}
						},
						// 554
						{
							colorIdx: 0,
							ref: ref.sirain.tail_fat,
							transform: {
								tx: 1.75,
								ty: 1.05,
								a: 1.644,
								d: 1.0
							}
						},
						// 556
						{
							colorIdx: 1,
							ref: ref.sirain.tail_fin,
							transform: {
								tx: 5.9,
								ty: 0.5
							}
						}
					],
					[
						// 556
						{
							colorIdx: 0,
							ref: ref.sirain.tail_fin,
							transform: {
								tx: 4.9,
								ty: 1.1,
								a: 0.644,
								d: 0.928,
								b: 0.172,
								c: -0.249
							}
						},
						// 554
						{
							colorIdx: 0,
							ref: ref.sirain.tail_fat,
							transform: {
								tx: 1.75,
								ty: 1.05,
								a: 1.644,
								d: 1.0
							}
						},
						// 556
						{
							colorIdx: 1,
							ref: ref.sirain.tail_fin,
							transform: {
								tx: 4.9,
								ty: -1.35,
								a: 0.571,
								d: -0.68,
								b: -0.571,
								c: -0.68
							}
						}
					],
					[
						// 558
						{
							colorIdx: 0,
							ref: ref.sirain.tail_dry,
							transform: {
								tx: 1.75,
								ty: 1.05,
								a: 1.644,
								d: 1.0
							}
						}
					]
				]
			}
		],
		// 565
		right_leg: [
			// 561
			{
				colorIdx: 0,
				ref: ref.sirain.leg
			},
			// 564
			{
				special: true,
				colorIdx: 0,
				ref: ref.sirain.leg_special,
				transform: {
					tx: -2.85,
					ty: -2.5
				}
			}
		],
		// 571
		body: [
			// 570
			{
				colorIdx: 0,
				ref: ref.sirain.body
			},
			// 569
			{
				special: true,
				colorIdx: 3,
				ref: ref.sirain.body_special,
				transform: {
					tx: -5.75,
					ty: -17.05
				}
			}
		],
		// 578
		right_ear: [
			{
				partIdx: 5,
				frames: [0, 1, 2, 3, 4],
				parts: [
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear
					},
					[
						// 573
						{
							colorIdx: 0,
							ref: ref.sirain.ear,
							transform: {
								tx: 0.45,
								ty: 0.95,
								a: 0.933,
								d: 1.239,
								b: 0.217,
								c: 0.0
							}
						},
						// 575
						{
							colorIdx: 1,
							ref: ref.sirain.ear_inside,
							transform: {
								tx: -0.15,
								ty: 1.0
							}
						}
					],
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear,
						transform: {
							tx: -1.45,
							ty: 0.7,
							a: 0.775,
							d: 0.579
						}
					},
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear,
						transform: {
							tx: -2.25,
							ty: 2.4,
							a: 0.52,
							d: 0.389,
							b: 0.342,
							c: -0.256
						}
					},
					[
						// 577
						{
							colorIdx: 1,
							ref: ref.sirain.ear_bat
						},
						// 573
						{
							colorIdx: 0,
							ref: ref.sirain.ear,
							transform: {
								tx: -2.1,
								ty: 0.4,
								a: 0.556,
								d: 0.445,
								b: -0.149,
								c: 0.119
							}
						}
					]
				]
			}
		],
		// 585
		head: [
			// 580
			{
				colorIdx: 0,
				ref: ref.sirain.head
			},
			// 581
			{
				ref: ref.sirain.head_highlight
			},
			// 584
			{
				special: true,
				colorIdx: 0,
				blend: [BLEND_MODES.MULTIPLY],
				ref: ref.sirain.head_special,
				transform: {
					tx: -2.8,
					ty: -2.9
				}
			}
		],
		// 578
		left_ear: [
			{
				partIdx: 5,
				frames: [0, 1, 2, 3, 4],
				parts: [
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear
					},
					[
						// 573
						{
							colorIdx: 0,
							ref: ref.sirain.ear,
							transform: {
								tx: 0.45,
								ty: 0.95,
								a: 0.933,
								d: 1.239,
								b: 0.217,
								c: 0.0
							}
						},
						// 575
						{
							colorIdx: 1,
							ref: ref.sirain.ear_inside,
							transform: {
								tx: -0.15,
								ty: 1.0
							}
						}
					],
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear,
						transform: {
							tx: -1.45,
							ty: 0.7,
							a: 0.775,
							d: 0.579
						}
					},
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear,
						transform: {
							tx: -2.25,
							ty: 2.4,
							a: 0.52,
							d: 0.389,
							b: 0.342,
							c: -0.256
						}
					},
					[
						// 577
						{
							colorIdx: 1,
							ref: ref.sirain.ear_bat
						},
						// 573
						{
							colorIdx: 0,
							ref: ref.sirain.ear,
							transform: {
								tx: -2.1,
								ty: 0.4,
								a: 0.556,
								d: 0.445,
								b: -0.149,
								c: 0.119
							}
						}
					]
				]
			}
		],
		// 565
		left_leg: [
			// 561
			{
				colorIdx: 0,
				ref: ref.sirain.leg
			},
			// 564
			{
				special: true,
				colorIdx: 0,
				ref: ref.sirain.leg_special,
				transform: {
					tx: -2.85,
					ty: -2.5
				}
			}
		],
		// 589
		eye: [
			// 586
			{
				ref: ref.sirain.eye
			},
			// 588
			{
				colorIdx: 2,
				ref: ref.sirain.eye_pupil,
				transform: {
					tx: 0.2,
					ty: -0.3,
					a: 0.72,
					d: 0.72
				}
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
		// sleep same as stand
		// 591
		stand: stand,
		// 592
		walk: walk,
		// 593
		run: run,
		// 594
		hit: hit,
		// 595
		jump: jump,
		// 596
		attack: attack,
		// 597
		land: land,
		// 598
		dead: dead,
		// 591 idx 5
		ill: { offset: 5, anim: stand },
		// 595
		fly: jump
	}
};
