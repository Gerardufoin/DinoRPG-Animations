// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';
import { demon_glow } from '../moueffe/parts_big.js';

// 3478
const eye = {
	partIdx: 1,
	frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	parts: [
		// 3356
		{
			colorIdx: 2,
			ref: ref.triceragon.eye,
			transform: {
				tx: -0.05
			}
		},
		// 3358
		{
			ref: ref.triceragon.eye_demon,
			glow: demon_glow
		}
	]
};

export const parts_big = {
	// 3397 p8
	tail: [
		{
			partIdx: 8,
			frames: [0, 1, 2],
			parts: [
				[
					// 3383
					{
						colorIdx: 0,
						ref: ref.triceragon.tail_curled,
						transform: {
							tx: 28.35,
							ty: 20.45
						}
					},
					// 3385
					{
						colorIdx: 1,
						ref: ref.triceragon.tail_curled_mark,
						transform: {
							tx: 20.55,
							ty: 17.05
						},
						blend: BLEND_MODES.SOFT_LIGHT
					},
					// 3394
					{
						ref: ref.triceragon.tail_curled_highlight
					}
				],
				[
					// 3388
					{
						colorIdx: 0,
						ref: ref.triceragon.tail_wave,
						transform: {
							tx: 28.35,
							ty: 20.45
						}
					},
					// 3390
					{
						colorIdx: 1,
						ref: ref.triceragon.tail_wave_mark,
						transform: {
							tx: 20.55,
							ty: 17.05
						},
						blend: BLEND_MODES.SOFT_LIGHT
					},
					// 3391
					{
						ref: ref.triceragon.tail_wave_highlight
					}
				],
				[
					// 3393
					{
						colorIdx: 0,
						ref: ref.triceragon.tail,
						transform: {
							tx: 28.35,
							ty: 20.45
						}
					},
					// 3395
					{
						colorIdx: 1,
						ref: ref.triceragon.tail_mark,
						transform: {
							tx: 20.55,
							ty: 17.05
						},
						blend: BLEND_MODES.SOFT_LIGHT
					},
					// 3396
					{
						ref: ref.triceragon.tail_highlight
					}
				]
			]
		}
	],
	// 3415
	body: [
		// 3402
		{
			transform: {
				tx: 19.25,
				ty: 35.15
			},
			parts: [
				[
					// 3399
					{
						colorIdx: 0,
						ref: ref.triceragon.body
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						parts: [
							// 3400
							{
								ref: ref.triceragon.body_hurt_scratch
							},
							// 3401
							{
								ref: ref.triceragon.body_hurt_scratches
							}
						]
					}
				]
			]
		},
		// 3409
		{
			colorIdx: 2,
			ref: ref.triceragon.body_bottom
		},
		// 3410
		{
			ref: ref.triceragon.body_toes
		},
		// 3412
		{
			colorIdx: 1,
			ref: ref.triceragon.body_mark,
			transform: {
				tx: 40.65,
				ty: 23.65
			},
			blend: BLEND_MODES.SOFT_LIGHT
		},
		// 3413
		{
			ref: ref.triceragon.body_highlight
		}
	],
	// 3434
	sp_saddle: [
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				ty: -0.6
			},
			parts: [
				[
					// 3417
					{
						ref: ref.triceragon.special_saddle_back,
						transform: {
							tx: 16.95,
							ty: -13.4
						},
						colorOffset: {
							r: -78,
							g: -111,
							b: -167
						}
					},
					// 3419
					{
						ref: ref.triceragon.special_saddle_seat,
						transform: {
							tx: 6.85,
							ty: -23.75
						},
						colorOffset: {
							r: -132,
							g: -163,
							b: -167
						}
					},
					// 3421
					{
						ref: ref.triceragon.special_saddle_cover,
						transform: {
							tx: 0.2,
							ty: 0.45
						},
						colorOffset: {
							r: -36,
							g: -93,
							b: -132
						}
					},
					// 3423
					{
						ref: ref.triceragon.special_saddle_cover_highlight,
						transform: {
							tx: 12.15,
							ty: -1.05
						},
						blend: BLEND_MODES.OVERLAY,
						alpha: 0.76
					},
					// 3425
					{
						ref: ref.triceragon.special_saddle,
						transform: {
							tx: -2,
							ty: -23.65
						},
						colorOffset: {
							r: -78,
							g: -111,
							b: -167
						}
					},
					// 3427
					{
						ref: ref.triceragon.special_saddle_stirrup,
						transform: {
							tx: 10.25,
							ty: 21.55
						},
						colorOffset: {
							r: -78,
							g: -111,
							b: -167
						}
					},
					// 3429
					{
						ref: ref.triceragon.special_saddle_stirrup_highlight,
						transform: {
							tx: 22.35,
							ty: 27.25
						},
						blend: BLEND_MODES.OVERLAY,
						alpha: 0.35
					},
					// 3431
					{
						ref: ref.triceragon.special_saddle_highlight,
						transform: {
							tx: 22.35,
							ty: 27.25
						},
						blend: BLEND_MODES.OVERLAY,
						alpha: 0.47
					},
					// 3432
					{
						ref: ref.triceragon.special_saddle_seat_highlight
					}
				]
			]
		}
	],
	// 3437
	sp_handles: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.triceragon.special_handles,
					transform: {
						tx: 1.85,
						ty: -2.65
					},
					colorOffset: {
						g: -19,
						b: -31
					}
				}
			]
		}
	],
	// 3476 p5
	frill: [
		// frill
		{
			partIdx: 5,
			frames: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
			parts: [
				[
					// 3439
					{
						colorIdx: 0,
						ref: ref.triceragon.frill
					},
					// 3440
					{
						ref: ref.triceragon.frill_highlight
					}
				],
				[
					// 3444
					{
						ref: ref.triceragon.frill_tri_bones_back
					},
					// 3446
					{
						colorIdx: 0,
						ref: ref.triceragon.frill_tri_bones,
						transform: {
							tx: 1.6,
							ty: -2.05
						}
					},
					// 3447
					{
						ref: ref.triceragon.frill_tri_bones_front
					}
				],
				[
					// 3450
					{
						colorIdx: 0,
						ref: ref.triceragon.frill_broken,
						transform: {
							tx: 1.6,
							ty: -2.05
						}
					},
					// 3452
					{
						ref: ref.triceragon.frill_broken_highlight
					}
				],
				[
					// 3456
					{
						colorIdx: 0,
						ref: ref.triceragon.frill_square,
						transform: {
							tx: 1.6,
							ty: -2.05
						}
					},
					// 3457
					{
						ref: ref.triceragon.frill_square_highlight
					}
				],
				[
					// 3460
					{
						ref: ref.triceragon.frill_bi_bones_back
					},
					// 3462
					{
						colorIdx: 0,
						ref: ref.triceragon.frill_bi_bones,
						transform: {
							tx: 1.6,
							ty: -2.05
						}
					},
					// 3463
					{
						ref: ref.triceragon.frill_bi_bones_front
					}
				],
				[
					// 3467
					{
						colorIdx: 0,
						ref: ref.triceragon.frill_strong
					},
					// 3468
					{
						ref: ref.triceragon.frill_strong_highlight
					}
				],
				[
					// 3472
					{
						colorIdx: 0,
						ref: ref.triceragon.frill_bumpy
					},
					// 3473
					{
						ref: ref.triceragon.frill_bumpy_highlight
					}
				]
			]
		},
		// marks
		{
			partIdx: 5,
			frames: [-1, 0, -1, 1, -1, 2, -1, 3, -1, 4, -1, 5, -1, 6],
			parts: [
				// 3443
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_mark,
					transform: {
						tx: -1.9,
						ty: -1.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				},
				// 3449
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_tri_bones_mark,
					transform: {
						tx: -1.9,
						ty: -1.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				},
				// 3454
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_broken_mark,
					transform: {
						tx: -1.9,
						ty: -1.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				},
				// 3459
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_square_mark,
					transform: {
						tx: -1.9,
						ty: -1.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				},
				// 3465
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_bi_bones_mark,
					transform: {
						tx: -1.9,
						ty: -1.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				},
				// 3470
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_strong_mark,
					transform: {
						tx: -2.4,
						ty: -14.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				},
				// 3475
				{
					colorIdx: 1,
					ref: ref.triceragon.frill_bumpy_mark,
					transform: {
						tx: -2.4,
						ty: -14.65
					},
					blend: BLEND_MODES.SOFT_LIGHT
				}
			]
		},
		// hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -14.15,
							ty: -16.95,
							a: 1.305,
							d: 1.305
						}
					}
				],
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -14.15,
							ty: -16.95,
							a: 1.305,
							d: 1.305
						}
					},
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: -7.25,
							ty: -19.65,
							a: -0.512,
							d: -0.512,
							b: -0.887,
							c: 0.887
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 12.2,
							ty: 4.35,
							a: 0.904,
							d: 0.904,
							b: -0.522,
							c: 0.522
						}
					}
				]
			]
		}
	],
	// 3487 p3b
	right_eye: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				[
					// 3477
					{
						ref: ref.triceragon.right_eye_back
					},
					// 3478
					{
						...eye,
						transform: {
							tx: -2.7,
							ty: 2.7,
							a: 0.22,
							d: 0.378,
							b: 0.047,
							c: -0.08
						}
					},
					// 3480
					{
						colorIdx: 0,
						ref: ref.triceragon.right_eye_socket,
						transform: {
							tx: 6.05,
							ty: -2.55
						}
					}
				],
				[
					// 3481
					{
						ref: ref.triceragon.right_eye_wide_back
					},
					// 3478
					{
						...eye,
						transform: {
							tx: 4.3,
							ty: -0.15,
							a: 0.573,
							d: 0.695
						}
					},
					// 3483
					{
						colorIdx: 0,
						ref: ref.triceragon.right_eye_wide_socket,
						transform: {
							tx: 6.05,
							ty: -2.55
						}
					}
				],
				[
					// 3484
					{
						ref: ref.triceragon.right_eye_big_back
					},
					// 3478
					{
						...eye,
						transform: {
							tx: 0.4,
							ty: 3.2,
							a: 0.661,
							d: 0.604
						}
					},
					// 3486
					{
						colorIdx: 0,
						ref: ref.triceragon.right_eye_big_socket
					}
				]
			]
		}
	],
	// 3504 p6b
	right_horn: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				// 3490
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: 3.4,
						ty: 1.05
					},
					parts: [
						// 3488
						{
							ref: ref.triceragon.right_horn_young
						},
						// 3489
						{
							ref: ref.triceragon.right_horn_adult
						}
					]
				},
				// 3497
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: 8.3,
						ty: 10.15
					},
					parts: [
						// 3495
						{
							ref: ref.triceragon.right_horn_fat_young
						},
						// 3496
						{
							ref: ref.triceragon.right_horn_fat_adult
						}
					]
				},
				// 3500
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: -2.8,
						ty: -0.25
					},
					parts: [
						// 3498
						{
							ref: ref.triceragon.right_horn_twirl_young
						},
						// 3499
						{
							ref: ref.triceragon.right_horn_twirl_adult
						}
					]
				},
				// 3503
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: -0.4,
						ty: 5.45
					},
					parts: [
						// 3501
						{
							ref: ref.triceragon.right_horn_round_young
						},
						// 3502
						{
							ref: ref.triceragon.right_horn_round_adult
						}
					]
				}
			]
		},
		// 3492
		{
			colorIdx: 0,
			ref: ref.triceragon.right_horn_socket,
			transform: {
				tx: 9.7,
				ty: 12.4
			}
		},
		// 3493
		{
			ref: ref.triceragon.right_horn_socket_highlight
		}
	],
	// 3518 p4
	mouth: [
		{
			partIdx: 4,
			frames: [0, 1, 2],
			parts: [
				[
					// 3506
					{
						colorIdx: 0,
						ref: ref.triceragon.mouth,
						transform: {
							tx: 57.8,
							ty: 17.9
						}
					},
					// 3508
					{
						colorIdx: 1,
						ref: ref.triceragon.mouth_mark,
						transform: {
							tx: 61.05,
							ty: 16.35
						},
						blend: BLEND_MODES.SOFT_LIGHT
					}
				],
				[
					// 3510
					{
						colorIdx: 0,
						ref: ref.triceragon.mouth_beak,
						transform: {
							tx: 57.8,
							ty: 17.9
						}
					},
					// 3512
					{
						colorIdx: 1,
						ref: ref.triceragon.mouth_beak_mark,
						transform: {
							tx: 61.05,
							ty: 16.35
						},
						blend: BLEND_MODES.SOFT_LIGHT
					}
				],
				[
					// 3515
					{
						colorIdx: 0,
						ref: ref.triceragon.mouth_upset,
						transform: {
							tx: 57.8,
							ty: 17.9
						}
					},
					// 3517
					{
						colorIdx: 1,
						ref: ref.triceragon.mouth_upset_mark,
						transform: {
							tx: 61.05,
							ty: 16.35
						},
						blend: BLEND_MODES.SOFT_LIGHT
					}
				]
			]
		}
	],
	// 3538 p6a
	left_horn: [
		// 3520
		{
			colorIdx: 0,
			ref: ref.triceragon.left_horn_socket,
			transform: {
				tx: -227.3,
				ty: 63.35,
				a: 0.99,
				d: 0.99,
				b: 0.14,
				c: -0.14
			}
		},
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				// 3523
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: -228.2,
						ty: 49.25
					},
					parts: [
						// 3521
						{
							ref: ref.triceragon.left_horn_young
						},
						// 3522
						{
							ref: ref.triceragon.left_horn_adult
						}
					]
				},
				[
					// 3527
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
						transform: {
							tx: -226.8,
							ty: 59.7
						},
						parts: [
							// 3525
							{
								ref: ref.triceragon.left_horn_fat_young
							},
							// 3526
							{
								ref: ref.triceragon.left_horn_fat_adult
							}
						]
					},
					// 3528
					{
						ref: ref.triceragon.left_horn_fat_highlight
					}
				],
				[
					// 3531
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
						transform: {
							tx: -226.3,
							ty: 45.5,
							a: 0.99,
							d: 0.99,
							b: 0.138,
							c: -0.138
						},
						parts: [
							// 3529
							{
								ref: ref.triceragon.left_horn_twirl_young
							},
							// 3530
							{
								ref: ref.triceragon.left_horn_twirl_adult
							}
						]
					},
					// 3532
					{
						ref: ref.triceragon.left_horn_twirl_highlight
					}
				],
				[
					// 3536
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
						transform: {
							tx: -225.85,
							ty: 45.8,
							a: 0.989,
							d: 0.989,
							b: 0.147,
							c: -0.147
						},
						parts: [
							// 3534
							{
								ref: ref.triceragon.left_horn_round_young
							},
							// 3535
							{
								ref: ref.triceragon.left_horn_round_adult
							}
						]
					},
					// 3537
					{
						ref: ref.triceragon.left_horn_round_highlight
					}
				]
			]
		}
	],
	// 3557 p6c
	middle_horn: [
		// 3540
		{
			colorIdx: 0,
			ref: ref.triceragon.middle_horn_socket,
			transform: {
				tx: 18.7,
				ty: 2.5
			}
		},
		// 3542
		{
			colorIdx: 1,
			ref: ref.triceragon.middle_horn_socket_mark,
			transform: {
				tx: 32.25,
				ty: -7.9
			},
			blend: BLEND_MODES.SOFT_LIGHT
		},
		// 3543
		{
			ref: ref.triceragon.middle_horn_socket_highlight
		},
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				// 3546
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: 15.65,
						ty: -0.9
					},
					parts: [
						// 3544
						{
							ref: ref.triceragon.middle_horn_young
						},
						// 3545
						{
							ref: ref.triceragon.middle_horn_adult
						}
					]
				},
				// 3549
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: 17.1,
						ty: 1.1
					},
					parts: [
						// 3547
						{
							ref: ref.triceragon.middle_horn_fat_young
						},
						// 3548
						{
							ref: ref.triceragon.middle_horn_fat_adult
						}
					]
				},
				// 3553
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: 11.55,
						ty: 0.25
					},
					parts: [
						// 3551
						{
							ref: ref.triceragon.middle_horn_twirl_young
						},
						// 3552
						{
							ref: ref.triceragon.middle_horn_twirl_adult
						}
					]
				},
				// 3556
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
					transform: {
						tx: 16.85,
						ty: -0.35
					},
					parts: [
						// 3554
						{
							ref: ref.triceragon.middle_horn_round_young
						},
						// 3555
						{
							ref: ref.triceragon.middle_horn_round_adult
						}
					]
				}
			]
		}
	],
	// 3572 p3a
	left_eye: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				[
					// 3558
					{
						ref: ref.triceragon.left_eye_back
					},
					// 3478
					{
						...eye,
						transform: {
							tx: 4.3,
							ty: 2.05,
							a: 0.54,
							d: 0.494
						}
					},
					// 3559
					{
						ref: ref.triceragon.left_eye_highlight
					},
					// 3560
					{
						colorIdx: 0,
						ref: ref.triceragon.left_eye_socket,
						transform: {
							tx: 0.2
						}
					},
					// 3562
					{
						ref: ref.triceragon.left_eye_socket_highlight
					}
				],
				[
					// 3563
					{
						ref: ref.triceragon.left_eye_wide_back
					},
					// 3478
					{
						...eye,
						transform: {
							tx: -2.9,
							ty: -1.5,
							a: 0.861,
							d: 0.788
						}
					},
					// 3564
					{
						ref: ref.triceragon.left_eye_wide_highlight,
						transform: {
							tx: -2.15,
							ty: -3.5
						}
					},
					// 3565
					{
						colorIdx: 0,
						ref: ref.triceragon.left_eye_wide_socket,
						transform: {
							tx: 0.25,
							ty: -5.05
						}
					},
					// 3567
					{
						ref: ref.triceragon.left_eye_wide_socket_highlight
					}
				],
				[
					// 3568
					{
						ref: ref.triceragon.left_eye_big_back
					},
					// 3478
					{
						...eye,
						transform: {
							tx: -0.45,
							ty: -0.2,
							a: 0.861,
							d: 0.788
						}
					},
					// 3564
					{
						ref: ref.triceragon.left_eye_wide_highlight
					},
					// 3569
					{
						colorIdx: 0,
						ref: ref.triceragon.left_eye_big_socket,
						transform: {
							tx: 0.2
						}
					},
					// 3571
					{
						ref: ref.triceragon.left_eye_big_socket_highlight
					}
				]
			]
		}
	],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
