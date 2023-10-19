// @ts-check
import { hit } from './animations/hit.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { ref } from '../references.js';

export let castivore = {
	name: 'castivore',
	transforms: [
		// 163
		{
			partIdx: 1,
			transforms: [
				{
					tx: 13.45,
					ty: 1.35,
					a: 0.888,
					d: 0.888,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 13.45,
					ty: 1.3,
					a: 0.901,
					d: 0.901,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 13.45,
					ty: 1.3,
					a: 0.913,
					d: 0.913,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 13.45,
					ty: 1.2,
					a: 0.926,
					d: 0.926,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 13.45,
					ty: 1.2,
					a: 0.938,
					d: 0.938,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 13.45,
					ty: 1.15,
					a: 0.95,
					d: 0.95,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 13.45,
					ty: 1.1,
					a: 0.963,
					d: 0.963,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 13.45,
					ty: 1.1,
					a: 0.975,
					d: 0.975,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 13.45,
					ty: 1,
					a: 0.988,
					d: 0.988,
					brightness: 1
				},
				{
					tx: 13.45,
					ty: 0.95
				},
				{
					tx: 13.85,
					ty: 0.55,
					a: 1.109,
					d: 1.109,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -14.85,
			ty: 4.05
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
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82', '#B85F1D'],
			// col1
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D'],
			// col2
			[
				'#FFF2DF',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
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
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82', '#B85F1D'],
			// col1
			['#FFF0F0', '#6B8D8E', '#807CA3'],
			// col2
			[
				'#FFF2DF',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
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
			['#F59D89', '#F589AC', '#FF7ECB'],
			// col1
			['#FACFC5', '#E26E94', '#E067AF'],
			// col2
			['#FFC2B4', '#FFA8C4', '#FF98D5'],
			// col3
			['#FFC2B4', '#FFA8C4', '#FF98D5']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -0.8,
			ty: 11.1,
			a: 1.351,
			d: 1.129
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 339
		right_ear: [
			// 338
			{
				colorIdx: 0,
				ref: ref.castivore.right_ear
			}
		],
		// 346
		body_back: [
			{
				partIdx: 3,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
				parts: [
					// 341
					{
						colorIdx: 1,
						ref: ref.castivore.body_smooth_end,
						transform: {
							tx: 7.5,
							ty: 2.8
						}
					},
					// 345
					{
						colorIdx: 1,
						ref: ref.castivore.body_curl_end,
						transform: {
							tx: 7.5,
							ty: 2.8
						}
					}
				]
			},
			{
				partIdx: 3,
				frames: [-1, -1, 0, 0, 0, -1, -1, -1, -1, -1],
				parts: [
					// 343
					{
						colorIdx: 1,
						ref: ref.castivore.body_hair_straight,
						transform: {
							tx: 13.75,
							ty: 8.0,
							a: 0.988,
							d: 1.189,
							b: -0.148,
							c: 0.605
						}
					}
				]
			}
		],
		// 353
		body_front: [
			{
				partIdx: 3,
				frames: [0, 0, 1, 1, 1, -1, -1, -1, 2, 2],
				parts: [
					// 348
					{
						colorIdx: 1,
						ref: ref.castivore.hair_roll,
						transform: {
							tx: 3.9,
							ty: 1.1,
							a: 1.252,
							d: 1.252,
							b: 0.223,
							c: -0.223
						}
					},
					// 343
					{
						colorIdx: 1,
						ref: ref.castivore.body_hair_straight,
						transform: {
							tx: 1.3,
							ty: 4.95,
							a: -0.728,
							d: 0.984,
							b: -0.129,
							c: -0.175
						}
					},
					// 352
					{
						colorIdx: 1,
						ref: ref.castivore.body_curl,
						transform: {
							tx: 7.5,
							ty: 2.8
						}
					}
				]
			},
			{
				partIdx: 3,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, -1, -1],
				parts: [
					// 350
					{
						colorIdx: 1,
						ref: ref.castivore.body_smooth,
						transform: {
							tx: 7.5,
							ty: 2.8
						}
					}
				]
			},
			{
				partIdx: 3,
				frames: [0, 0, 1, 1, 1, -1, -1, -1, -1, -1],
				parts: [
					// 348
					{
						colorIdx: 1,
						ref: ref.castivore.hair_roll,
						transform: {
							tx: 13.7,
							ty: 6.7,
							a: 1.252,
							d: 1.252,
							b: 0.223,
							c: -0.223
						}
					},
					// 343
					{
						colorIdx: 1,
						ref: ref.castivore.body_hair_straight,
						transform: {
							tx: 12.5,
							ty: 8.95
						}
					}
				]
			}
		],
		// 353
		body_middle: [
			{
				partIdx: 3,
				frames: [0, 0, 1, 1, 1, -1, -1, -1, 2, 2],
				parts: [
					// 348
					{
						colorIdx: 1,
						ref: ref.castivore.hair_roll,
						transform: {
							tx: 3.9,
							ty: 1.1,
							a: 1.252,
							d: 1.252,
							b: 0.223,
							c: -0.223
						}
					},
					// 343
					{
						colorIdx: 1,
						ref: ref.castivore.body_hair_straight,
						transform: {
							tx: 1.3,
							ty: 4.95,
							a: -0.728,
							d: 0.984,
							b: -0.129,
							c: -0.175
						}
					},
					// 352
					{
						colorIdx: 1,
						ref: ref.castivore.body_curl,
						transform: {
							tx: 7.5,
							ty: 2.8
						}
					}
				]
			},
			{
				partIdx: 3,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, -1, -1],
				parts: [
					// 350
					{
						colorIdx: 1,
						ref: ref.castivore.body_smooth,
						transform: {
							tx: 7.5,
							ty: 2.8
						}
					}
				]
			},
			{
				partIdx: 3,
				frames: [0, 0, 1, 1, 1, -1, -1, -1, -1, -1],
				parts: [
					// 348
					{
						colorIdx: 1,
						ref: ref.castivore.hair_roll,
						transform: {
							tx: 13.7,
							ty: 6.7,
							a: 1.252,
							d: 1.252,
							b: 0.223,
							c: -0.223
						}
					},
					// 343
					{
						colorIdx: 1,
						ref: ref.castivore.body_hair_straight,
						transform: {
							tx: 12.5,
							ty: 8.95
						}
					}
				]
			}
		],
		// 356
		back: [
			{
				partIdx: 8,
				frames: [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
				parts: [
					// 355
					{
						colorIdx: 0,
						ref: ref.castivore.back_hairless,
						transform: {
							tx: 0.1,
							ty: 0.0
						}
					}
				]
			}
		],
		// 358
		nose: [
			{
				ref: ref.castivore.nose
			}
		],
		// 367
		hair: [
			{
				partIdx: 6,
				frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
				parts: [
					// 360
					{
						colorIdx: 1,
						ref: ref.castivore.eyes_hair,
						transform: {
							tx: 0.0,
							ty: 0.05
						}
					},
					// 362
					{
						colorIdx: 0,
						ref: ref.castivore.eyes,
						transform: {
							tx: -0.4,
							ty: 0.15
						}
					}
				]
			},
			{
				partIdx: 6,
				frames: [-1, -1, -1, -1, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3],
				parts: [
					// 364
					{
						colorIdx: 1,
						ref: ref.castivore.hair_spikes,
						transform: {
							tx: 0.2,
							ty: -2.2,
							a: 1.109,
							d: 1.109
						}
					},
					// 364
					{
						colorIdx: 2,
						ref: ref.castivore.hair_spikes,
						transform: {
							tx: 0.2,
							ty: -2.2,
							a: 1.122,
							d: 1.122
						}
					},
					// 366
					{
						colorIdx: 1,
						ref: ref.castivore.hair_smooth,
						transform: {
							tx: 1.05,
							ty: -0.1
						}
					},
					// 348
					{
						colorIdx: 1,
						ref: ref.castivore.hair_roll,
						transform: {
							tx: 0.4,
							ty: -1.6,
							a: 0.48,
							d: 0.504,
							b: 0.04,
							c: -0.042
						}
					}
				]
			}
		],
		// 370
		left_ear: [
			// 369
			{
				colorIdx: 0,
				ref: ref.castivore.left_ear
			}
		],
		// 383
		mouth: [
			{
				partIdx: 4,
				frames: [0, 0, 1, 2, -1, 3, 4, 5, 6, 7, 3],
				parts: [
					// 371
					{
						ref: ref.castivore.mouth_pointy_teeth,
						transform: {
							tx: 0.2,
							ty: -0.5
						}
					},
					// 371
					{
						ref: ref.castivore.mouth_pointy_teeth
					},
					// 375
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_moustache,
						transform: {
							tx: 0.35,
							ty: -0.4
						}
					},
					// 377
					{
						ref: ref.castivore.mouth_two_teeth,
						transform: {
							tx: -0.35,
							ty: 0.3
						}
					},
					// 378
					{
						ref: ref.castivore.mouth_four_teeth
					},
					// 380
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_lips,
						transform: {
							tx: 0.2,
							ty: 0.15
						}
					},
					// 382
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_deadpan,
						transform: {
							tx: 0.0,
							ty: 1.1
						}
					},
					// 375
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_moustache,
						transform: {
							tx: 0.35,
							ty: -0.4,
							a: 1.486,
							d: 0.99,
							b: 0.203,
							c: -0.135
						}
					}
				]
			},
			{
				partIdx: 4,
				frames: [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
				parts: [
					// 373
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_base,
						transform: {
							tx: 0.0,
							ty: -0.25
						}
					}
				]
			}
		],
		// 387
		special: [
			{
				special: true,
				colorIdx: 1,
				ref: ref.castivore.special_hair
			},
			{
				special: true,
				ref: ref.castivore.special_bow
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
		// 388
		stand: stand,
		// 389
		walk: walk,
		// 390
		run: run,
		// 391
		hit: hit,
		// 392
		jump: jump,
		// 393
		attack: attack,
		// 394
		land: land,
		// 395
		dead: dead,
		// 395 idx 5
		sleep: { offset: 5, anim: dead },
		// 395 idx 10
		ill: { offset: 10, anim: dead },
		// 392
		fly: jump
	}
};
