// @ts-check
import { ref } from '../references.js';

export const parts = {
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
	]
};
