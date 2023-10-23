// @ts-check
import { ref } from '../references.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { jump } from './animations/jump.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';

export let rocky = {
	name: 'rocky',
	transforms: [
		// 468
		{
			partIdx: 1,
			transforms: [
				{
					tx: -2.65,
					ty: 2.55,
					a: 0.882,
					d: 0.882,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -2.6,
					ty: 2.45,
					a: 0.895,
					d: 0.895,
					brightness: 9,
					contrast: 5
				},
				{
					tx: -2.55,
					ty: 2.35,
					a: 0.908,
					d: 0.908,
					brightness: 8,
					contrast: 3
				},
				{
					tx: -2.5,
					ty: 2.3,
					a: 0.922,
					d: 0.922,
					brightness: 7,
					contrast: 3
				},
				{
					tx: -2.45,
					ty: 2.2,
					a: 0.935,
					d: 0.935,
					brightness: 6,
					contrast: 2
				},
				{
					tx: -2.45,
					ty: 2.1,
					a: 0.948,
					d: 0.948,
					brightness: 4,
					contrast: 2
				},
				{
					tx: -2.4,
					ty: 2,
					a: 0.961,
					d: 0.961,
					brightness: 3,
					contrast: 1
				},
				{
					tx: -2.35,
					ty: 1.95,
					a: 0.974,
					d: 0.974,
					brightness: 2,
					contrast: 1
				},
				{
					tx: -2.3,
					ty: 1.85,
					a: 0.987,
					d: 0.987,
					brightness: 1
				},
				{
					tx: -2.25,
					ty: 1.75
				},
				{
					tx: -2.25,
					ty: 1.75,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 2.15,
			ty: 0.4,
			a: 0.953,
			d: 0.953
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
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#DACBBE',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#DCCCBC',
				'#DDB4AA'
			],
			// col1
			[
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#DACBBE',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#DCCCBC',
				'#DDB4AA'
			],
			// col2
			['#C8E063', '#D5EB7A', '#9AB45C', '#B9E27A', '#B4AA5C', '#D7745B', '#74BEB7'],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#EEFFD7', '#CBFF97', '#D5EAFF']
		],
		[
			// col0
			['#8A6060', '#F0CD56'],
			// col1
			['#8A6060', '#F0CD56'],
			// col2
			['#C8E063', '#D5EB7A', '#9AB45C', '#B9E27A', '#B4AA5C', '#D7745B', '#74BEB7'],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#EEFFD7', '#CBFF97', '#D5EAFF']
		],
		[
			// col0
			['#95B895', '#B3D3D7'],
			// col1
			['#95B895', '#B3D3D7'],
			// col2
			['#C8E063', '#D5EB7A', '#9AB45C', '#B9E27A', '#B4AA5C', '#D7745B', '#74BEB7'],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#EEFFD7', '#CBFF97', '#D5EAFF']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -0.2,
			ty: 11.5,
			a: 1.351,
			d: 1.129
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 404
		right_hand: [
			{
				partIdx: 8,
				frames: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2],
				parts: [
					// 399
					{
						colorIdx: 0,
						ref: ref.rocky.right_hand,
						transform: {
							tx: 1.95,
							ty: 19.25
						}
					},
					// 401
					{
						colorIdx: 0,
						ref: ref.rocky.right_hand_column,
						transform: {
							tx: 1.35,
							ty: 13.0
						}
					},
					// 403
					{
						colorIdx: 0,
						ref: ref.rocky.right_hand_sun,
						transform: {
							tx: 3.1,
							ty: 13.4
						}
					}
				]
			}
		],
		// 420
		body: [
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 0, 0, 4, 5, 5, 5],
				parts: [
					// 406 + 413
					{
						colorIdx: 0,
						ref: ref.rocky.body_block_slim
					},
					// 408
					{
						colorIdx: 0,
						ref: ref.rocky.body_block,
						transform: {
							tx: 1.55,
							ty: -0.45
						}
					},
					// 410
					{
						colorIdx: 0,
						ref: ref.rocky.body_tomb,
						transform: {
							tx: -0.65,
							ty: 0.85
						}
					},
					// 412
					{
						colorIdx: 0,
						ref: ref.rocky.body_pointy,
						transform: {
							tx: -0.9,
							ty: -0.3
						}
					},
					// 415
					{
						colorIdx: 0,
						ref: ref.rocky.body_hole
					},
					// 417 + 419
					{
						colorIdx: 0,
						ref: ref.rocky.body_column,
						transform: {
							tx: 1.55,
							ty: 0.0
						}
					}
				]
			}
		],
		// 437
		mouth: [
			{
				partIdx: 6,
				frames: [0, 1, 1, 2, 3, 4, 5, 2],
				parts: [
					// 422
					{
						partIdx: 4,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
						parts: [
							// 421
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_lower_lip,
								transform: {
									tx: -0.25,
									ty: 3.2
								}
							}
						]
					},
					// 427
					{
						partIdx: 4,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
						parts: [
							// 424
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_block,
								transform: {
									tx: -0.75,
									ty: 2.95
								}
							},
							// 426
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_hole,
								transform: {
									tx: -0.35,
									ty: -1.2,
									a: 1.253,
									d: 1.253
								}
							}
						]
					},
					// 422
					{
						partIdx: 4,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
						parts: [
							// 421
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_lower_lip,
								transform: {
									tx: -0.4,
									ty: 4.234,
									a: 0.584,
									d: 0.819
								}
							}
						]
					},
					// 431
					{
						partIdx: 4,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, -1, 2, 2, 2],
						parts: [
							// 428 + 430
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_basin,
								transform: {
									tx: -0.8,
									ty: 3.3
								}
							},
							// 429
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_slit,
								transform: {
									tx: -0.8,
									ty: 3.3
								}
							},
							// 422
							{
								partIdx: 4,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
								parts: [
									// 421
									{
										colorIdx: 0,
										ref: ref.rocky.mouth_lower_lip,
										transform: {
											tx: -0.8,
											ty: 3.3
										}
									}
								]
							}
						]
					},
					[
						// 433
						{
							colorIdx: 2,
							ref: ref.rocky.mouth_beard,
							transform: {
								tx: -1.6,
								ty: 6.45
							}
						},
						// 422
						{
							partIdx: 4,
							frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
							parts: [
								{
									colorIdx: 0,
									ref: ref.rocky.mouth_lower_lip,
									transform: {
										tx: -0.25,
										ty: 3.2
									}
								}
							]
						}
					],
					// 436 -- Same mouth as 427 + leaves
					{
						partIdx: 4,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
						parts: [
							[
								// 424
								{
									colorIdx: 0,
									ref: ref.rocky.mouth_block,
									transform: {
										tx: -0.75,
										ty: 2.95
									}
								},
								// 435
								{
									colorIdx: 2,
									ref: ref.rocky.mouth_moustache,
									transform: {
										tx: 0.0,
										ty: -1.65
									}
								}
							],
							// 426
							{
								colorIdx: 0,
								ref: ref.rocky.mouth_hole,
								transform: {
									tx: -0.35,
									ty: -1.2,
									a: 1.253,
									d: 1.253
								}
							}
						]
					}
				]
			}
		],
		// 447
		eyes: [
			{
				partIdx: 5,
				frames: [0, 0, 0, 0, 0, 0, 1, 2, 2],
				parts: [
					[
						// 438
						{
							ref: ref.rocky.eyes
						},
						// 440
						{
							colorIdx: 0,
							ref: ref.rocky.eyebrow
						}
					],
					// 443
					{
						ref: ref.rocky.eyes_cyclop
					},
					[
						// 444
						{
							ref: ref.rocky.eyes_round
						},
						// 446
						{
							colorIdx: 0,
							ref: ref.rocky.nose,
							transform: {
								tx: -1.6,
								ty: 4.6
							}
						}
					]
				]
			},
			{
				partIdx: 5,
				frames: [-1, -1, 0, -1, -1, -1, -1, -1, -1],
				parts: [
					// 442
					{
						colorIdx: 2,
						ref: ref.rocky.eyes_moss,
						transform: {
							tx: 4.8,
							ty: -1.1
						}
					}
				]
			}
		],
		// 450
		top: [
			// 449
			{
				partIdx: 4,
				frames: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
				parts: [
					{
						colorIdx: 0,
						ref: ref.rocky.top_column,
						transform: {
							tx: -1.25,
							ty: 0.2,
							a: 0.948,
							d: 0.809
						}
					}
				]
			}
		],
		// 457
		left_hand: [
			{
				partIdx: 8,
				frames: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2],
				parts: [
					// 452
					{
						colorIdx: 0,
						ref: ref.rocky.left_hand,
						transform: {
							tx: -8.05,
							ty: 16.85,
							a: 0.981,
							d: 0.981,
							b: 0.191,
							c: -0.191
						}
					},
					// 454
					{
						colorIdx: 0,
						ref: ref.rocky.left_hand_column,
						transform: {
							tx: -5.8,
							ty: 11.7
						}
					},
					// 456
					{
						colorIdx: 0,
						ref: ref.rocky.left_hand_sun,
						transform: {
							tx: -1.45,
							ty: 9.75
						}
					}
				]
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
		// 458
		stand: stand,
		// 460
		walk: walk,
		// 461
		run: run,
		// 462
		hit: hit,
		// 463
		jump: jump,
		// 464
		attack: attack,
		// 465
		land: land,
		// 466
		dead: dead,
		// 466 idx 5
		sleep: { offset: 5, anim: dead },
		// 466 idx 10
		ill: { offset: 10, anim: dead },
		// 463
		fly: jump
	}
};
