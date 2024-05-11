// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 360
const head = [
	{
		transform: {
			tx: -32.05,
			ty: 6.25
		},
		parts: [
			[
				// 351 + 408
				{
					partIdx: 7,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
					transform: {
						tx: 0.3,
						ty: -0.35
					},
					parts: [
						// 351
						{
							colorIdx: 0,
							ref: ref.pigmou.head
						},
						// 406
						{
							colorIdx: 0,
							ref: ref.pigmou.head_simpson
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
									tx: -11.35,
									ty: -4.25,
									a: 1.305,
									d: 1.305
								}
							},
							// 318
							{
								ref: ref.hurt.scratch_small,
								transform: {
									tx: 3.8,
									ty: 29.75
								}
							},
							// 354
							{
								ref: ref.hurt.scratch_blood_small,
								transform: {
									tx: 5.5,
									ty: -10.1,
									a: 0.707,
									d: 0.707,
									b: -0.707,
									c: 0.707
								}
							},
							// 318
							{
								ref: ref.hurt.scratch_small,
								transform: {
									tx: -1.65,
									ty: -26.55
								}
							},
							// 354
							{
								ref: ref.hurt.scratch_blood_small,
								transform: {
									tx: 24.55,
									ty: 0.9,
									a: -0.511,
									d: -0.511,
									b: 0.511,
									c: -0.511
								}
							}
						],
						[
							// 355
							{
								ref: ref.pigmou.head_hurt_blood_1
							},
							// 357
							{
								ref: ref.hurt.bruise_purple,
								transform: {
									tx: 4.35,
									ty: 27.55,
									a: 0.323,
									d: 0.323,
									b: -1.205,
									c: 1.205
								}
							},
							// 359
							{
								ref: ref.hurt.scratch_blood,
								transform: {
									tx: -10.8,
									ty: -5.6,
									a: 1.299,
									d: 1.299
								}
							},
							// 357
							{
								ref: ref.hurt.bruise_purple,
								transform: {
									tx: -2.75,
									ty: -26.15,
									a: -0.624,
									d: -0.624,
									b: -1.08,
									c: 1.08
								}
							}
						]
					]
				}
			]
		]
	},
	// 363
	{
		partIdx: 15,
		frames: [-1, 0],
		parts: [
			// 362
			{
				colorIdx: 0,
				ref: ref.pigmou.head_special,
				blend: BLEND_MODES.MULTIPLY,
				transform: {
					tx: -63.05,
					ty: -27.65
				}
			}
		]
	}
];
const head_fins = [
	// 382
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		transform: {
			tx: -50.45,
			ty: -1.15
		},
		parts: [
			// 379
			{
				colorIdx: 0,
				ref: ref.pigmou.head_right_fin
			},
			// 380
			{
				colorIdx: 0,
				ref: ref.pigmou.head_right_fin_demon
			}
		]
	},
	...head,
	// 387
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		transform: {
			tx: -1.5,
			ty: 9.8
		},
		parts: [
			// 384
			{
				colorIdx: 0,
				ref: ref.pigmou.head_left_fin
			},
			// 385
			{
				colorIdx: 0,
				ref: ref.pigmou.head_left_fin_demon
			}
		]
	}
];
const head_sideburns = [
	// 402
	{
		colorIdx: 1,
		ref: ref.pigmou.head_right_sideburn,
		transform: {
			tx: -58.8,
			ty: 6.2
		}
	},
	...head,
	// 404
	{
		colorIdx: 1,
		ref: ref.pigmou.head_left_sideburn,
		transform: {
			tx: -10.0,
			ty: 26.75
		}
	}
];
const head_sideburns_long = [
	// 411
	{
		colorIdx: 1,
		ref: ref.pigmou.head_right_sideburn_long,
		transform: {
			tx: -58.8,
			ty: 6.2
		}
	},
	...head,
	// 413
	{
		colorIdx: 1,
		ref: ref.pigmou.head_left_sideburn_long,
		transform: {
			tx: -10.0,
			ty: 26.75
		}
	}
];
// 373
const horns = {
	transform: {
		tx: -28.65,
		ty: -12.5
	},
	parts: [
		{
			partIdx: 1,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
			parts: [
				// 368
				{
					colorIdx: 0,
					ref: ref.pigmou.head_horns_growing,
					transform: {
						tx: 0.5,
						ty: 0.9
					}
				},
				[
					// 370
					{
						colorIdx: 0,
						ref: ref.pigmou.head_horns_hole,
						transform: {
							tx: 0.95,
							ty: 2.3
						}
					},
					// 371
					{
						ref: ref.pigmou.head_horns_small
					}
				],
				[
					// 370
					{
						colorIdx: 0,
						ref: ref.pigmou.head_horns_hole,
						transform: {
							tx: 0.95,
							ty: 2.3
						}
					},
					// 372
					{
						ref: ref.pigmou.head_horns_big
					}
				]
			]
		}
	]
};
// 378
const spikes = {
	partIdx: 1,
	frames: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2],
	transform: {
		tx: -26.0,
		ty: -6.45
	},
	parts: [
		// 374
		{
			colorIdx: 0,
			ref: ref.pigmou.head_spikes_growing
		},
		// 375
		{
			colorIdx: 0,
			ref: ref.pigmou.head_spikes_small
		},
		// 376
		{
			colorIdx: 0,
			ref: ref.pigmou.head_spikes
		}
	]
};
// 395
const horns_close = {
	transform: {
		tx: -27.7,
		ty: -4.8
	},
	parts: [
		{
			partIdx: 1,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2],
			parts: [
				// 390
				{
					colorIdx: 0,
					ref: ref.pigmou.head_horns_close_growing,
					transform: {
						tx: -2.05,
						ty: 0.9
					}
				},
				[
					// 392
					{
						colorIdx: 0,
						ref: ref.pigmou.head_horns_close_hole,
						transform: {
							tx: -0.15,
							ty: -5.15
						}
					},
					// 393
					{
						ref: ref.pigmou.head_horns_close_small
					}
				],
				[
					// 392
					{
						colorIdx: 0,
						ref: ref.pigmou.head_horns_close_hole,
						transform: {
							tx: -0.15,
							ty: -5.15
						}
					},
					// 394
					{
						ref: ref.pigmou.head_horns_close_big
					}
				]
			]
		}
	]
};

export const parts_big = {
	// 307_p6b
	left_front_leg: [
		// 306
		{
			partIdx: 6,
			frames: [-1, 0],
			transform: {
				ty: -12.9,
				a: 1.407,
				d: 1.333
			},
			parts: [
				// 305
				{
					colorIdx: 1,
					ref: ref.pigmou.left_front_leg_fur
				}
			]
		},
		// 300
		{
			colorIdx: 0,
			ref: ref.pigmou.left_front_leg
		},
		// 301
		{
			ref: ref.pigmou.left_front_leg_claws
		},
		// 304
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 303
				{
					colorIdx: 0,
					ref: ref.pigmou.left_front_leg_special,
					blend: BLEND_MODES.MULTIPLY,
					transform: {
						tx: -12.45,
						ty: -11.25
					}
				}
			]
		}
	],
	// 323_p5
	tail: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 309
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_fur_small,
						transform: {
							tx: -6.75,
							ty: -12.35
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, -1, 0],
						parts: [
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -7.8,
									ty: -12.45
								}
							}
						]
					}
				],
				[
					// 312
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_long_fur,
						transform: {
							tx: -17.1,
							ty: -39.65
						}
					},
					// 314
					{
						colorIdx: 0,
						ref: ref.pigmou.tail_long,
						transform: {
							tx: -10.9,
							ty: -21.3
						}
					}
				],
				{
					transform: {
						tx: -7.65,
						ty: -19.25
					},
					parts: [
						// 316
						{
							colorIdx: 1,
							ref: ref.pigmou.tail_fur_big,
							transform: {
								a: 0.68,
								d: 0.68,
								b: 0.06,
								c: -0.06
							}
						},
						// hurt
						{
							partIdx: 2,
							frames: [-1, -1, 0],
							parts: [
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -1.0,
										ty: 4.7,
										a: 1.336,
										d: 1.336
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -4.15,
										ty: -6.9,
										a: 0.259,
										d: 0.259,
										b: -0.966,
										c: 0.966
									}
								}
							]
						}
					]
				},
				{
					transform: {
						tx: -10.8,
						ty: -23.35
					},
					parts: [
						// 316
						{
							colorIdx: 1,
							ref: ref.pigmou.tail_fur_big
						},
						// hurt
						{
							partIdx: 2,
							frames: [-1, -1, 0],
							parts: [
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: -0.35,
										ty: 9.65,
										a: 1.804,
										d: 1.804
									}
								},
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: -4.6,
										ty: -6.0,
										a: 0.35,
										d: 0.35,
										b: -1.304,
										c: 1.304
									}
								}
							]
						}
					]
				}
			]
		}
	],
	// 329
	body: [
		// 325
		{
			colorIdx: 0,
			ref: ref.pigmou.body,
			transform: {
				tx: 11.4,
				ty: 12.35
			}
		},
		// 328
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 327
				{
					colorIdx: 0,
					ref: ref.pigmou.body_special,
					blend: BLEND_MODES.MULTIPLY,
					transform: {
						tx: -13.1,
						ty: -7.45
					}
				}
			]
		}
	],
	// 338_p6c
	right_back_leg: [
		// 331
		{
			colorIdx: 0,
			ref: ref.pigmou.right_back_leg
		},
		// 332
		{
			ref: ref.pigmou.right_back_leg_claws
		},
		// 335
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 334
				{
					colorIdx: 0,
					ref: ref.pigmou.right_back_leg_special,
					blend: BLEND_MODES.MULTIPLY,
					transform: {
						tx: -10.2,
						ty: -11.7
					}
				}
			]
		},
		// 337
		{
			partIdx: 6,
			frames: [-1, 0],
			parts: [
				// 336
				{
					colorIdx: 1,
					ref: ref.pigmou.right_back_leg_fur,
					transform: {
						tx: -8.95,
						ty: -6.9
					}
				}
			]
		}
	],
	// 349_p6a
	right_front_leg: [
		// 342
		{
			transform: {
				tx: 32.25,
				ty: -0.6
			},
			parts: [
				// 340
				{
					colorIdx: 0,
					ref: ref.pigmou.right_front_leg
				},
				// hurt
				{
					partIdx: 2,
					frames: [-1, 0, 1],
					parts: [
						// 155
						{
							ref: ref.hurt.scratch,
							transform: {
								tx: -3.4,
								ty: 1.85,
								a: 1.38,
								d: 1.38
							}
						},
						[
							// 341
							{
								ref: ref.pigmou.right_front_leg_hurt_blood
							},
							// 155
							{
								ref: ref.hurt.scratch,
								transform: {
									tx: -3.4,
									ty: 1.85,
									a: 1.38,
									d: 1.38
								}
							}
						]
					]
				}
			]
		},
		// 343
		{
			ref: ref.pigmou.right_front_leg_claws
		},
		// 346
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 0,
					ref: ref.pigmou.right_front_leg_special,
					blend: BLEND_MODES.MULTIPLY,
					transform: {
						tx: 15.9,
						ty: -21.9
					}
				}
			]
		},
		// 348
		{
			partIdx: 6,
			frames: [-1, 0],
			parts: [
				// 347
				{
					colorIdx: 1,
					ref: ref.pigmou.right_front_leg_fur,
					transform: {
						tx: 20.85,
						ty: -13.05
					}
				}
			]
		}
	],
	// 414_p7
	head: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			parts: [
				[
					...head,
					// 364
					{
						ref: ref.pigmou.head_highlight
					}
				],
				[
					...head,
					// 366
					{
						colorIdx: 0,
						ref: ref.pigmou.head_spikes_small,
						transform: {
							tx: -26.0,
							ty: -6.45
						}
					},
					// 373
					horns
				],
				[
					...head,
					// 373
					horns
				],
				// Horns fire, added afterward to avoid body glow
				[...head],
				[...head, spikes],
				[
					...head_fins,
					// 388
					{
						ref: ref.pigmou.head_highlight_front
					}
				],
				[
					...head_fins,
					// 395
					horns_close
				],
				[
					...head,
					// 397
					{
						colorIdx: 2,
						ref: ref.pigmou.head_spots,
						blend: BLEND_MODES.MULTIPLY,
						transform: {
							tx: -25.1,
							ty: -6.05
						}
					},
					// 389
					{
						ref: ref.pigmou.head_highlight
					}
				],
				[
					...head,
					// 400
					{
						colorIdx: 2,
						ref: ref.pigmou.head_spots_scale,
						blend: BLEND_MODES.MULTIPLY,
						transform: {
							tx: -25.85,
							ty: -7.0
						}
					},
					// 389
					{
						ref: ref.pigmou.head_highlight
					}
				],
				[
					...head_sideburns,
					// 389
					{
						ref: ref.pigmou.head_highlight
					}
				],
				[
					...head_sideburns,
					// 373
					horns
				],
				[
					...head_sideburns,
					// 378
					spikes
				],
				[
					...head,
					// 409
					{
						ref: ref.pigmou.head_simpson_highlight
					}
				],
				[
					...head_sideburns_long,
					// 364
					{
						ref: ref.pigmou.head_highlight
					}
				],
				[
					...head_sideburns_long,
					// 378
					spikes
				],
				[
					...head_sideburns_long,
					// 373
					horns
				]
			]
		}
	],
	// 455_p3
	eyes: [],
	// 473_p4
	mouth: []
};
