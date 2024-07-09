// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 2473
const left_ear_special = {
	partIdx: 15,
	frames: [-1, 0],
	parts: [
		[
			// 2470
			{
				ref: ref.mahamuti.left_ear_special_big,
				transform: {
					tx: 10.05,
					ty: 3.25
				}
			},
			// 2472
			{
				ref: ref.mahamuti.left_ear_special_small
			}
		]
	]
};

export const parts_big = {
	// 2360
	hooves: [
		{
			ref: ref.mahamuti.hooves,
			colorOffset: {
				r: 26
			},
			colorMultiplier: {
				r: 0.5,
				g: 0.5,
				b: 0.5
			}
		}
	],
	// 2365 p6b
	back_legs: [
		{
			partIdx: 6,
			frames: [0, 1, 1, 1, 1, 2, 2, 2, 2],
			parts: [
				// 2362
				{
					colorIdx: 2,
					ref: ref.mahamuti.back_legs
				},
				// 2362
				{
					colorIdx: 1,
					ref: ref.mahamuti.back_legs
				},
				// 2364
				{
					colorIdx: 1,
					ref: ref.mahamuti.back_legs_tall
				}
			]
		}
	],
	// 2369 p2
	body: [
		// 2366
		{
			colorIdx: 1,
			ref: ref.mahamuti.body
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
							tx: -21.15,
							ty: 6.3
						}
					}
				],
				[
					// 2368
					{
						ref: ref.mahamuti.body_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -22.15,
							ty: 4.4
						}
					}
				]
			]
		}
	],
	// 2382 p6a
	front_leg: [
		{
			partIdx: 6,
			frames: [0, 1, 1, 1, 1, 2, 2, 2, 2],
			parts: [
				// 2375
				{
					colorIdx: 2,
					ref: ref.mahamuti.front_leg_alt
				},
				// 2379
				{
					colorIdx: 1,
					ref: ref.mahamuti.front_leg
				},
				// 2381
				{
					colorIdx: 1,
					ref: ref.mahamuti.front_leg_tall
				}
			]
		},
		// 2377 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -1.6,
				ty: 1.8
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -0.05,
							ty: 0,
							a: 1.246,
							d: 1.246
						}
					}
				],
				[
					// 2376
					{
						ref: ref.mahamuti.front_leg_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -0.05,
							ty: 0,
							a: 1.246,
							d: 1.246
						}
					}
				]
			]
		}
	],
	// 2385 p5
	back: [
		{
			colorIdx: 2,
			ref: ref.mahamuti.back
		}
	],
	// 2393 p7b
	right_tusk: [
		{
			partIdx: 7,
			frames: [
				0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4, 4, 4, 4
			],
			parts: [
				[
					// 2386
					{
						ref: ref.mahamuti.right_tusk_gold
					},
					// 2388
					{
						ref: ref.mahamuti.tusk_reflection,
						transform: {
							tx: 20.1,
							ty: 13.15,
							a: 1.328,
							d: 0.469,
							b: 0.176,
							c: -0.067
						},
						alpha: 0.359,
						blend: BLEND_MODES.ADD
					},
					// 2388
					{
						ref: ref.mahamuti.tusk_reflection,
						transform: {
							tx: 53.8,
							ty: -25.95,
							a: 0.426,
							d: 0.158,
							b: 0.318,
							c: -0.105
						},
						alpha: 0.359,
						blend: BLEND_MODES.ADD
					}
				],
				// 2389
				{
					ref: ref.mahamuti.right_tusk
				},
				// 2390
				{
					ref: ref.mahamuti.right_tusk_long
				},
				[
					// 2391
					{
						ref: ref.mahamuti.right_tusk_silver
					},
					// 2388
					{
						ref: ref.mahamuti.tusk_reflection,
						transform: {
							tx: 38.9,
							ty: -3.85,
							a: -0.618,
							d: -0.299,
							b: 0.302,
							c: -0.142
						},
						alpha: 0.359,
						blend: BLEND_MODES.ADD
					},
					// 2388
					{
						ref: ref.mahamuti.tusk_reflection,
						transform: {
							tx: 1.35,
							ty: -0.9,
							a: -0.849,
							d: -0.28,
							b: -0.518,
							c: 0.175
						},
						alpha: 0.359,
						blend: BLEND_MODES.ADD
					}
				],
				// 2392
				{
					ref: ref.mahamuti.right_tusk_bent
				}
			]
		}
	],
	// 2396
	right_tusk_fur: [
		{
			colorIdx: 1,
			ref: ref.mahamuti.right_tusk_fur
		}
	],
	// 2407 p4b
	right_ear: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 2398
				{
					colorIdx: 1,
					ref: ref.mahamuti.right_ear
				},
				// 2400
				{
					colorIdx: 1,
					ref: ref.mahamuti.right_ear_big
				},
				// 2402
				{
					colorIdx: 1,
					ref: ref.mahamuti.right_ear_long
				},
				// 2404
				{
					colorIdx: 1,
					ref: ref.mahamuti.right_ear_slant
				},
				// 2406
				{
					colorIdx: 1,
					ref: ref.mahamuti.right_ear_small
				}
			]
		}
	],
	// 2412 p3b
	hair_shadow: [
		{
			partIdx: 3,
			frames: [-1, -1, -1, -1, -1, 0, 0, 0, 0, 1, 1, 1, 1, -1, -1, -1, -1],
			parts: [
				// 2409
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_strands_shadow
				},
				// 2411
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_split_shadow
				}
			]
		}
	],
	// 2415
	head: [
		{
			colorIdx: 1,
			ref: ref.mahamuti.head
		}
	],
	// 2453 p8
	eyes: [
		{
			partIdx: 8,
			frames: [0, 0, 1, 1, 2],
			parts: [
				// 2426
				[
					// 2416
					{
						ref: ref.mahamuti.eyes_back
					},
					// 2418
					{
						colorIdx: 1,
						ref: ref.mahamuti.eyes_sockets
					},
					// 2424
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 4],
						transform: {
							tx: 4.45,
							ty: -0.1
						},
						parts: [
							[
								// 2419
								{
									ref: ref.mahamuti.eyes_young
								},
								// 2420
								{
									ref: ref.mahamuti.eyes_highlight
								}
							],
							[
								// 2421
								{
									ref: ref.mahamuti.eyes_adolescent
								},
								// 2420
								{
									ref: ref.mahamuti.eyes_highlight
								}
							],
							// 2421
							{
								ref: ref.mahamuti.eyes_adolescent
							},
							// 2422
							{
								ref: ref.mahamuti.eyes_adult
							},
							// 2423
							{
								ref: ref.mahamuti.eyes_demon
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
										tx: -0.15,
										ty: -6.95,
										a: 1.284,
										d: 1.284,
										b: 0,
										c: 0.496
									}
								}
							],
							[
								// 2425
								{
									ref: ref.mahamuti.eyes_sockets_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -0.15,
										ty: -6.95,
										a: 1.284,
										d: 1.284,
										b: 0,
										c: 0.496
									}
								},
								// 357
								{
									ref: ref.hurt.bruise_purple,
									transform: {
										tx: -16.45,
										ty: -5.5,
										a: 1.022,
										d: 1.108,
										b: 0.343,
										c: -0.372
									}
								}
							]
						]
					},
					// 2429
					{
						partIdx: 15,
						frames: [-1, 0],
						transform: {
							tx: -16.65,
							ty: -7.4
						},
						parts: [
							// 2428
							{
								colorIdx: 1,
								ref: ref.mahamuti.eyes_special
							}
						]
					}
				],
				// 2440
				[
					// 2430
					{
						ref: ref.mahamuti.eyes_serious_back
					},
					// 2435
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2],
						transform: {
							tx: 3.7,
							ty: -1.3
						},
						parts: [
							// 2431
							{
								ref: ref.mahamuti.eyes_serious_young
							},
							// 2432
							{
								ref: ref.mahamuti.eyes_serious_adolescent
							},
							// 2433 / 2434
							{
								ref: ref.mahamuti.eyes_serious_adult
							}
						]
					},
					// 2436
					{
						ref: ref.mahamuti.eyes_serious_highlight
					},
					// 2438
					{
						colorIdx: 1,
						ref: ref.mahamuti.eyes_serious_sockets
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
										tx: -0.15,
										ty: -6.95,
										a: 1.284,
										d: 1.284,
										b: 0,
										c: 0.496
									}
								}
							],
							[
								// 2437
								{
									ref: ref.mahamuti.eyes_serious_sockets_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -0.15,
										ty: -6.95,
										a: 1.284,
										d: 1.284,
										b: 0,
										c: 0.496
									}
								},
								// 357
								{
									ref: ref.hurt.bruise_purple,
									transform: {
										tx: -13.55,
										ty: -6.1,
										a: 1.022,
										d: 1.108,
										b: 0.343,
										c: -0.372
									}
								}
							]
						]
					},
					// 2443
					{
						partIdx: 15,
						frames: [-1, 0],
						transform: {
							tx: -15.35,
							ty: -8.65
						},
						parts: [
							// 2442
							{
								colorIdx: 1,
								ref: ref.mahamuti.eyes_serious_special,
								transform: {
									ty: -0.25
								}
							}
						]
					}
				],
				// 2452
				[
					// 2444
					{
						ref: ref.mahamuti.eyes_silly_back
					},
					// 2447
					{
						transform: {
							tx: 3.2,
							ty: -2.25,
							a: 0.992,
							d: 0.992,
							b: -0.126,
							c: 0.126
						},
						parts: [
							[
								// 2445
								{
									colorIdx: 3,
									ref: ref.mahamuti.eyes_silly,
									transform: {
										tx: 4.95,
										ty: -1.25,
										a: 0.515,
										d: 0.515
									},
									colorAdjust: {
										brightness: -51,
										contrast: 16
									}
								},
								// 2445
								{
									colorIdx: 3,
									ref: ref.mahamuti.eyes_silly,
									transform: {
										tx: -12.65,
										ty: 4.6,
										a: 0.678,
										d: 0.678
									},
									colorAdjust: {
										brightness: -51,
										contrast: 16
									}
								}
							]
						]
					},
					// 2448
					{
						ref: ref.mahamuti.eyes_silly_highlight
					},
					// 2450
					{
						colorIdx: 1,
						ref: ref.mahamuti.eyes_silly_sockets,
						transform: {
							tx: -0.3,
							ty: -0.5,
							a: 0.992,
							d: 0.992,
							b: -0.126,
							c: 0.126
						}
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
										tx: -0.15,
										ty: -6.95,
										a: 1.284,
										d: 1.284,
										b: 0,
										c: 0.496
									}
								}
							],
							[
								// 2451
								{
									ref: ref.mahamuti.eyes_silly_sockets_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -0.15,
										ty: -6.95,
										a: 1.284,
										d: 1.284,
										b: 0,
										c: 0.496
									}
								},
								// 357
								{
									ref: ref.hurt.bruise_purple,
									transform: {
										tx: -13.55,
										ty: -6.1,
										a: 1.022,
										d: 1.108,
										b: 0.343,
										c: -0.372
									}
								}
							]
						]
					},
					// 2429
					{
						partIdx: 15,
						frames: [-1, 0],
						transform: {
							tx: -20.85,
							ty: -6.4,
							a: 1.247,
							d: 1.247
						},
						parts: [
							// 2428
							{
								colorIdx: 1,
								ref: ref.mahamuti.eyes_special
							}
						]
					}
				]
			]
		}
	],
	// 2466 p3
	hair: [
		{
			partIdx: 3,
			frames: [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
			parts: [
				// 2455
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_poop,
					transform: {
						ty: -0.15
					}
				},
				// 2459
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair
				},
				// 2461
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_strands,
					transform: {
						tx: 0.1,
						ty: -0.3
					}
				},
				// 2463
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_split
				},
				// 2465
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_flat
				}
			]
		}
	],
	// 2482 p4a
	left_ear: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 2468
					{
						colorIdx: 1,
						ref: ref.mahamuti.left_ear,
						transform: {
							tx: -0.05,
							ty: 0.05
						}
					},
					// 2473
					{
						...left_ear_special,
						transform: {
							tx: -15,
							ty: 14
						}
					}
				],
				[
					// 2475
					{
						colorIdx: 1,
						ref: ref.mahamuti.left_ear_big,
						transform: {
							tx: -0.05,
							ty: 0.05
						}
					},
					// 2473
					{
						...left_ear_special,
						transform: {
							tx: -6.25,
							ty: 14,
							a: 0.914,
							d: 0.914,
							b: 0.406,
							c: -0.406
						}
					}
				],
				[
					// 2477
					{
						colorIdx: 1,
						ref: ref.mahamuti.left_ear_long,
						transform: {
							tx: -0.05,
							ty: 0.05
						}
					},
					// 2473
					{
						...left_ear_special,
						transform: {
							tx: -12.75,
							ty: 6.65,
							a: 0.999,
							d: 1,
							b: -0.041,
							c: 0.021
						}
					}
				],
				[
					// 2479
					{
						colorIdx: 1,
						ref: ref.mahamuti.left_ear_slant,
						transform: {
							tx: -0.05,
							ty: 0.05
						}
					},
					// 2473
					{
						...left_ear_special,
						transform: {
							tx: -7.85,
							ty: 21.15,
							a: 0.999,
							d: 1,
							b: -0.041,
							c: 0.021
						}
					}
				],
				[
					// 2481
					{
						colorIdx: 1,
						ref: ref.mahamuti.left_ear_small,
						transform: {
							tx: -0.05,
							ty: 0.05
						}
					},
					// 2473
					{
						...left_ear_special,
						transform: {
							tx: -9.15,
							ty: 2.4,
							a: 0.78,
							d: 0.781,
							b: -0.083,
							c: 0.067
						}
					}
				]
			]
		}
	],
	// 2502 p9
	trunk: [
		{
			partIdx: 9,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 2484
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk,
						colorAdjust: {
							brightness: 16
						}
					},
					// 2486
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_shadow
					},
					// 2487
					{
						ref: ref.mahamuti.trunk_highlight
					}
				],
				[
					// 2489
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_down,
						colorAdjust: {
							brightness: 16
						}
					},
					// 2491
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_down_shadow
					},
					// 2492
					{
						ref: ref.mahamuti.trunk_down_highlight
					}
				],
				[
					// 2494
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_hug,
						colorAdjust: {
							brightness: 16
						}
					},
					// 2496
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_hug_shadow
					},
					// 2497
					{
						ref: ref.mahamuti.trunk_hug_highlight
					}
				],
				[
					// 2499
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_knot,
						colorAdjust: {
							brightness: 16
						}
					},
					// 2501
					{
						colorIdx: 1,
						ref: ref.mahamuti.trunk_knot_shadow,
						transform: {
							tx: 0,
							ty: 0,
							a: 1.273,
							d: 1
						}
					}
				]
			]
		}
	],
	// 2508 p7a
	left_tusk_back: [
		{
			partIdx: 7,
			frames: [
				0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4, 4, 4, 4
			],
			parts: [
				// 2503
				{
					ref: ref.mahamuti.left_tusk_back_gold
				},
				// 2504
				{
					ref: ref.mahamuti.left_tusk_back
				},
				// 2505
				{
					ref: ref.mahamuti.left_tusk_back_long
				},
				[
					// 2506
					{
						ref: ref.mahamuti.left_tusk_back_silver
					},
					// 2388
					{
						ref: ref.mahamuti.tusk_reflection,
						transform: {
							tx: 28.4,
							ty: -2.1,
							a: -0.917,
							d: -0.296,
							b: 0.394,
							c: -0.123
						},
						alpha: 0.359,
						blend: BLEND_MODES.ADD
					}
				],
				// 2507
				{
					ref: ref.mahamuti.left_tusk_back_bent
				}
			]
		}
	],
	// 2511
	left_tusk_fur: [
		{
			colorIdx: 1,
			ref: ref.mahamuti.left_tusk_fur
		}
	],
	// 2515 p7c
	left_tusk_front: [
		{
			partIdx: 7,
			frames: [
				0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
				-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
			],
			parts: [
				[
					// 2512
					{
						ref: ref.mahamuti.left_tusk_front_gold
					},
					// 2388
					{
						ref: ref.mahamuti.tusk_reflection,
						transform: {
							tx: 2,
							ty: -0.15,
							a: -0.176,
							d: -0.066,
							b: 0.92,
							c: -0.325
						},
						alpha: 0.359,
						blend: BLEND_MODES.ADD
					}
				],
				// 2513
				{
					ref: ref.mahamuti.left_tusk_front
				},
				// 2514
				{
					ref: ref.mahamuti.left_tusk_front_long
				}
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
