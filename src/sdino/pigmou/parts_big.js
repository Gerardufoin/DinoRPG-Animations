// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';
import { demon_glow } from '../moueffe/parts_big.js';

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
// 478
const horns_fire = {
	partIdx: 7,
	frames: [-1, -1, -1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
	parts: [
		[
			{
				ref: ref.pigmou.horn_fire,
				transform: {
					tx: -0.3,
					ty: 0.5
				},
				glow: {
					distance: 10,
					color: '#FF8800',
					quality: 1,
					strength: 2
				},
				blur: {
					x: 0.5,
					y: 0.5
				}
			},
			{
				ref: ref.pigmou.horn_fire,
				transform: {
					ty: -0.05
				},
				blur: {
					x: 0.5,
					y: 0.5
				},
				glow: {
					distance: 10,
					color: '#FF8800',
					quality: 1,
					strength: 2
				}
			}
		]
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
						[
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
					]
				},
				{
					transform: {
						tx: -10.8,
						ty: -23.35
					},
					parts: [
						[
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
				[
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
					// 378
					spikes,
					// 404
					{
						colorIdx: 1,
						ref: ref.pigmou.head_left_sideburn,
						transform: {
							tx: -10.0,
							ty: 26.75
						}
					}
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
					// 378
					spikes,
					// 413
					{
						colorIdx: 1,
						ref: ref.pigmou.head_left_sideburn_long,
						transform: {
							tx: -10.0,
							ty: 26.75
						}
					}
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
	eyes: [
		{
			partIdx: 3,
			frames: [0, 1, 2, 3],
			parts: [
				// 426
				{
					transform: {
						tx: 7.4,
						ty: -4.95
					},
					parts: [
						[
							// 422
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									b: 0.081,
									c: -0.048
								},
								parts: [
									[
										// 415
										{
											ref: ref.pigmou.eyes_young
										},
										// 417
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_sockets
										}
									],
									[
										// 418
										{
											ref: ref.pigmou.eyes_adult
										},
										// 417
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_sockets
										}
									],
									[
										// 420
										{
											ref: ref.pigmou.eyes_demon,
											transform: {
												tx: -1.6,
												ty: 4.4
											},
											glow: demon_glow
										},
										// 421
										{
											ref: ref.pigmou.eyes_demon_highlight
										},
										// 417
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_sockets
										}
									]
								]
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
											tx: 12.8,
											ty: -0.1
										}
									},
									[
										// 424
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_hurt_swelling,
											transform: {
												tx: 9.65,
												ty: 5.15
											}
										},
										// 425
										{
											ref: ref.pigmou.eyes_hurt_blood
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 10.85,
												ty: 1.5,
												a: 0.372,
												d: 0.372,
												b: -1.387,
												c: 1.387
											}
										}
									]
								]
							}
						]
					]
				},
				// 434
				{
					transform: {
						tx: 7.05,
						ty: -6.35
					},
					parts: [
						[
							// 432
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									tx: 1.95,
									ty: -6.65
								},
								parts: [
									[
										// 427
										{
											ref: ref.pigmou.eyes_small_young
										},
										// 429
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_small_sockets,
											transform: {
												tx: -1.95,
												ty: 7.15
											}
										}
									],
									[
										// 430
										{
											ref: ref.pigmou.eyes_small_adult
										},
										// 429
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_small_sockets,
											transform: {
												tx: -1.95,
												ty: 7.15
											}
										}
									],
									[
										// 431
										{
											ref: ref.pigmou.eyes_small_demon,
											glow: demon_glow
										},
										// 429
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_small_sockets,
											transform: {
												tx: -1.95,
												ty: 7.15
											}
										}
									]
								]
							},
							// hurt
							{
								partIdx: 2,
								frames: [-1, 0, 1],
								parts: [
									[
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: 7.1,
												ty: 4.0,
												a: 1.44,
												d: 1.44
											}
										}
									],
									[
										// 424
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_hurt_swelling,
											transform: {
												tx: 6.6,
												ty: 7.75,
												a: 1.298,
												d: 1
											}
										},
										// 433
										{
											ref: ref.pigmou.eyes_small_hurt_blood
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 8.35,
												ty: 4.8,
												a: 0.311,
												d: 0.386,
												b: -1.159,
												c: 1.44
											}
										},
										// 155
										{
											ref: ref.hurt.scratch,
											tx: -10.8,
											ty: -8.9
										}
									]
								]
							}
						]
					]
				},
				// 444
				{
					transform: {
						tx: 7.9,
						ty: -6.3
					},
					parts: [
						[
							// 442
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								parts: [
									[
										// 435
										{
											ref: ref.pigmou.eyes_big_back
										},
										// 436
										{
											ref: ref.pigmou.eyes_big_young
										},
										// 437
										{
											ref: ref.pigmou.eyes_big_highlight
										},
										// 438
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_big_sockets
										}
									],
									[
										// 435
										{
											ref: ref.pigmou.eyes_big_back
										},
										// 440
										{
											ref: ref.pigmou.eyes_big_adult
										},
										// 437
										{
											ref: ref.pigmou.eyes_big_highlight
										},
										// 438
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_big_sockets
										}
									],
									[
										// 441
										{
											ref: ref.pigmou.eyes_big_demon,
											glow: demon_glow
										},
										// 438
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_big_sockets
										}
									]
								]
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
											tx: 10.55,
											ty: 3.35,
											a: 1.239,
											d: 1.239
										}
									},
									[
										// 424
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_hurt_swelling,
											transform: {
												tx: 5.9,
												ty: 7.35,
												a: 1.008,
												d: 0.712,
												b: 0.455,
												c: -0.321
											}
										},
										// 443
										{
											ref: ref.pigmou.eyes_big_hurt_blood
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 7.8,
												ty: 6.8,
												a: 0.691,
												d: 0.691,
												b: -0.849,
												c: 0.849
											}
										},
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: -11.2,
												ty: -9.9
											}
										}
									]
								]
							}
						]
					]
				},
				// 454
				{
					transform: {
						tx: 9.65,
						ty: -7.9
					},
					parts: [
						[
							// 452
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									tx: -1.2
								},
								parts: [
									[
										// 445
										{
											ref: ref.pigmou.eyes_weird_back
										},
										// 446
										{
											ref: ref.pigmou.eyes_weird_young
										},
										// 449
										{
											ref: ref.pigmou.eyes_weird_highlight
										},
										// 448
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_weird_sockets
										}
									],
									[
										// 445
										{
											ref: ref.pigmou.eyes_weird_back
										},
										// 450
										{
											ref: ref.pigmou.eyes_weird_adult
										},
										// 449
										{
											ref: ref.pigmou.eyes_weird_highlight
										},
										// 448
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_weird_sockets
										}
									],
									[
										// 451
										{
											ref: ref.pigmou.eyes_weird_demon
										},
										// 449
										{
											ref: ref.pigmou.eyes_weird_highlight
										},
										// 448
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_weird_sockets
										}
									]
								]
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
											tx: 11.85,
											ty: 0.0,
											a: 1.131,
											d: 1.131
										}
									},
									[
										// 424
										{
											colorIdx: 0,
											ref: ref.pigmou.eyes_hurt_swelling,
											transform: {
												tx: 6.35,
												ty: 6.8,
												a: 1.086,
												d: 0.994,
												b: 0.12,
												c: -0.11
											}
										},
										// 453
										{
											ref: ref.pigmou.eyes_weird_hurt_blood
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 7.8,
												ty: 6.3,
												a: 0.615,
												d: 0.615,
												b: -1.065,
												c: 1.065
											}
										},
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: -17.2,
												ty: -8.05
											}
										}
									]
								]
							}
						]
					]
				}
			]
		}
	],
	// 473_p4
	mouth: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			parts: [
				[
					// 457
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth,
						transform: {
							tx: 5.75,
							ty: -33.8
						}
					}
				],
				[
					// 457
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth,
						transform: {
							tx: 5.75,
							ty: -33.8
						}
					},
					// 459
					{
						colorIdx: 1,
						ref: ref.pigmou.mouth_beard,
						transform: {
							tx: 0.95,
							ty: -30.65
						}
					}
				],
				[
					// 461
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_grit,
						transform: {
							tx: 5.15,
							ty: -35.5,
							a: 0.991,
							d: 0.991,
							b: 0.131,
							c: -0.131
						}
					},
					// 462
					{
						ref: ref.pigmou.mouth_grit_teeth
					}
				],
				[
					// 461
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_grit,
						transform: {
							tx: 5.15,
							ty: -35.5,
							a: 0.991,
							d: 0.991,
							b: 0.131,
							c: -0.131
						}
					},
					// 462
					{
						ref: ref.pigmou.mouth_grit_teeth
					},
					// 459
					{
						colorIdx: 1,
						ref: ref.pigmou.mouth_beard,
						transform: {
							tx: -1.35,
							ty: -26.3,
							a: 0.864,
							d: 0.864,
							b: -0.005,
							c: 0.005
						}
					}
				],
				[
					// 464
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_closed,
						transform: {
							tx: 5.2,
							ty: -34.0
						}
					},
					// 467
					{
						partIdx: 1,
						frames: [-1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: 0.55,
							ty: -34.15
						},
						parts: [
							// 465
							{
								ref: ref.pigmou.mouth_closed_fangs
							},
							// 466
							{
								ref: ref.pigmou.mouth_closed_fangs_demon
							}
						]
					}
				],
				[
					// 464
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_closed,
						transform: {
							tx: 5.2,
							ty: -34.0
						}
					},
					// 459
					{
						colorIdx: 1,
						ref: ref.pigmou.mouth_beard,
						transform: {
							tx: -1.35,
							ty: -28.05,
							a: 1.026,
							d: 1.034,
							b: -0.063,
							c: -0.056
						}
					},
					// 467
					{
						partIdx: 1,
						frames: [-1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1],
						transform: {
							tx: 0.55,
							ty: -34.15
						},
						parts: [
							// 465
							{
								ref: ref.pigmou.mouth_closed_fangs
							},
							// 466
							{
								ref: ref.pigmou.mouth_closed_fangs_demon
							}
						]
					}
				],
				[
					// 470
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_small,
						transform: {
							tx: 4.0,
							ty: -34.85
						}
					}
				],
				[
					// 470
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_small,
						transform: {
							tx: 4.0,
							ty: -34.85
						}
					},
					// 459
					{
						colorIdx: 1,
						ref: ref.pigmou.mouth_beard,
						transform: {
							tx: -0.8,
							ty: -29.45,
							a: 0.708,
							d: 0.713,
							b: -0.044,
							c: -0.038
						}
					}
				],
				[
					// 472
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_kiss,
						transform: {
							tx: 2.85,
							ty: -33.9
						}
					}
				],
				[
					// 459
					{
						colorIdx: 1,
						ref: ref.pigmou.mouth_beard,
						transform: {
							tx: 0.05,
							ty: -26.6,
							a: 0.588,
							d: 0.624,
							b: -0.317,
							c: 0.249
						}
					},
					// 472
					{
						colorIdx: 0,
						ref: ref.pigmou.mouth_kiss,
						transform: {
							tx: 2.85,
							ty: -33.9
						}
					}
				]
			]
		}
	],
	// 478
	horns_fire: [
		{
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			transform: {
				ty: -40.5
			},
			parts: [
				{
					...horns_fire,
					transform: {
						tx: 5.45,
						ty: 12.65,
						a: 0.836,
						d: 0.487,
						b: 0.117,
						c: -0.16
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 5.2,
						ty: 12.1,
						a: 0.858,
						d: 0.5,
						b: 0.118,
						c: -0.163
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 4.9,
						ty: 11.6,
						a: 0.879,
						b: 0.121,
						c: -0.167,
						d: 0.512
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 4.65,
						ty: 11.05,
						a: 0.9,
						b: 0.123,
						c: -0.171,
						d: 0.524
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 4.4,
						ty: 10.45,
						a: 0.921,
						b: 0.126,
						c: -0.175,
						d: 0.536
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 4.2,
						ty: 10,
						a: 0.942,
						b: 0.129,
						c: -0.179,
						d: 0.549
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 3.9,
						ty: 9.45,
						a: 0.963,
						b: 0.132,
						c: -0.183,
						d: 0.561
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 3.65,
						ty: 8.85,
						a: 0.984,
						b: 0.135,
						c: -0.187,
						d: 0.573
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 3.45,
						ty: 8.35,
						a: 1.006,
						b: 0.138,
						c: -0.191,
						d: 0.586
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 3.2,
						ty: 7.7,
						a: 1.027,
						b: 0.144,
						c: -0.197,
						d: 0.598
					}
				},
				{
					...horns_fire,
					transform: {
						tx: 2.1
					}
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
