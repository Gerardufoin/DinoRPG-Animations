// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// TODO: See if there is a better alternative for the cracks
// All the cracks have overlay as blend mode, but it does not exist in WebGL so we increase the alpha instead.
const cracks_alpha = 0.35;

const body = [
	// 510
	{
		colorIdx: 0,
		ref: ref.winks.body
	},
	// 511
	{
		ref: ref.winks.body_highlight
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
						tx: 11.65,
						ty: -8.55
					}
				},
				// 513
				{
					ref: ref.winks.body_hurt_cracks_small,
					alpha: cracks_alpha,
					transform: {
						tx: 8.3,
						ty: -8.05
					}
				}
			],
			[
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: 9.75,
						ty: -10.45,
						a: 1.438,
						d: 1.438
					}
				},
				// 515
				{
					ref: ref.winks.body_hurt_cracks_big,
					alpha: cracks_alpha,
					transform: {
						tx: 10.4,
						ty: -3.55
					}
				}
			]
		]
	}
];
// 555
const body_round = [
	// 548
	{
		colorIdx: 0,
		ref: ref.winks.body_round,
		transform: {
			tx: 2.4,
			ty: -2.7
		}
	},
	// 550
	{
		ref: ref.winks.body_round_highlight,
		transform: {
			tx: -13.1,
			ty: -11.2
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
						tx: 17.5,
						ty: -9.1,
						a: 1.425,
						d: 1.425
					}
				},
				// 552
				{
					ref: ref.winks.body_round_hurt_cracks_small,
					alpha: cracks_alpha,
					transform: {
						tx: -2.5,
						ty: -6.3
					}
				}
			],
			[
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: 17.5,
						ty: -9.1,
						a: 2.244,
						d: 2.244
					}
				},
				// 318
				{
					ref: ref.hurt.scratch_small,
					transform: {
						tx: -18.4,
						ty: 3.9,
						a: 1.889,
						d: 1.889
					}
				},
				// 554
				{
					ref: ref.winks.body_round_hurt_cracks_big,
					alpha: cracks_alpha,
					transform: {
						tx: -0.45,
						ty: -6.2
					}
				}
			]
		]
	}
];
// 569
const eyes = {
	partIdx: 1,
	frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
	parts: [
		[
			// 562
			{
				ref: ref.winks.eyes_back
			},
			// 563
			{
				ref: ref.winks.eyes_young
			},
			// 564
			{
				ref: ref.winks.eyes_highlight
			},
			// 566
			{
				colorIdx: 0,
				ref: ref.winks.eyes_sockets
			}
		],
		[
			// 562
			{
				ref: ref.winks.eyes_back
			},
			// 567
			{
				ref: ref.winks.eyes_adult
			},
			// 564
			{
				ref: ref.winks.eyes_highlight
			},
			// 566
			{
				colorIdx: 0,
				ref: ref.winks.eyes_sockets
			}
		],
		[
			// 568
			{
				ref: ref.winks.eyes_demon
			},
			// 566
			{
				colorIdx: 0,
				ref: ref.winks.eyes_sockets
			}
		]
	]
};

export const parts_big = {
	// 486_p5f
	right_leg_3: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, -1, -1, -1, -1],
			parts: [
				[
					// 482
					{
						colorIdx: 0,
						ref: ref.winks.right_leg_3,
						transform: {
							tx: -6.75,
							ty: 9.25
						}
					},
					// 483
					{
						ref: ref.winks.right_leg_3_claws
					},
					// 484
					{
						ref: ref.winks.right_leg_3_speks
					}
				],
				[
					// 482
					{
						colorIdx: 0,
						ref: ref.winks.right_leg_3,
						transform: {
							tx: -6.75,
							ty: 9.25
						}
					},
					// 483
					{
						ref: ref.winks.right_leg_3_claws
					},
					// 485
					{
						ref: ref.winks.right_leg_3_highlight
					}
				],
				[
					// 482
					{
						colorIdx: 1,
						ref: ref.winks.right_leg_3,
						transform: {
							tx: -6.75,
							ty: 9.25
						}
					},
					// 483
					{
						ref: ref.winks.right_leg_3_claws
					},
					// 485
					{
						ref: ref.winks.right_leg_3_highlight
					}
				]
			]
		}
	],
	// 500_p5d
	right_leg_1: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
			parts: [
				[
					// 487
					{
						ref: ref.winks.right_leg_1_claws
					},
					// 488
					{
						colorIdx: 0,
						ref: ref.winks.right_leg_1
					},
					// 490
					{
						ref: ref.winks.right_leg_1_speks
					}
				],
				[
					// 487
					{
						ref: ref.winks.right_leg_1_claws
					},
					// 488
					{
						colorIdx: 0,
						ref: ref.winks.right_leg_1
					},
					// 491
					{
						ref: ref.winks.right_leg_1_highlight
					}
				],
				[
					// 487
					{
						ref: ref.winks.right_leg_1_claws
					},
					// 488
					{
						colorIdx: 1,
						ref: ref.winks.right_leg_1
					},
					// 491
					{
						ref: ref.winks.right_leg_1_highlight
					}
				],
				[
					// 493
					{
						colorIdx: 1,
						ref: ref.winks.right_leg_1_tube,
						transform: {
							tx: -5.05,
							ty: -4.25
						}
					},
					// 494
					{
						ref: ref.winks.right_leg_1_tube_claws
					}
				],
				[
					// 496
					{
						colorIdx: 0,
						ref: ref.winks.leg_pincer,
						transform: {
							tx: 1.35,
							ty: -1.4,
							a: 0.638,
							d: 0.638
						}
					},
					// 498
					{
						colorIdx: 1,
						ref: ref.winks.leg_pincer_inside,
						transform: {
							tx: 1.35,
							ty: -1.4,
							a: 0.638,
							d: 0.638
						}
					},
					// 499
					{
						ref: ref.winks.right_leg_1_pincer_highlight
					}
				]
			]
		}
	],
	// 508_p5e
	right_leg_2: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
			parts: [
				[
					// 502
					{
						colorIdx: 0,
						ref: ref.winks.right_leg_2,
						transform: {
							tx: -6.75,
							ty: 9.25
						}
					},
					// 503
					{
						ref: ref.winks.right_leg_2_speks
					}
				],
				[
					// 502
					{
						colorIdx: 0,
						ref: ref.winks.right_leg_2,
						transform: {
							tx: -6.75,
							ty: 9.25
						}
					},
					// 504
					{
						ref: ref.winks.right_leg_2_highlight
					}
				],
				[
					// 502
					{
						colorIdx: 1,
						ref: ref.winks.right_leg_2,
						transform: {
							tx: -6.75,
							ty: 9.25
						}
					},
					// 504
					{
						ref: ref.winks.right_leg_2_highlight
					}
				],
				[
					// 506
					{
						colorIdx: 1,
						ref: ref.winks.right_leg_2_tube,
						transform: {
							tx: -4.2,
							ty: 7.25
						}
					},
					// 507
					{
						ref: ref.winks.right_leg_2_tube_highlight,
						transform: {
							tx: -0.85,
							ty: -0.45
						}
					}
				],
				[
					// 506
					{
						colorIdx: 1,
						ref: ref.winks.right_leg_2_tube,
						transform: {
							tx: -3.35,
							ty: 7.7
						}
					},
					// 507
					{
						ref: ref.winks.right_leg_2_tube_highlight
					}
				]
			]
		}
	],
	// 561_p3
	body: [
		{
			partIdx: 3,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
			parts: [
				[
					// 516
					{
						transform: {
							tx: 0.1,
							ty: 0.05
						},
						parts: [body]
					}
				],
				[
					// 516
					{
						transform: {
							tx: 0.1,
							ty: 0.05
						},
						parts: [body]
					},
					// 524
					{
						transform: {
							tx: 1.3,
							ty: -15.8
						},
						parts: [
							[
								// 518
								{
									colorIdx: 0,
									ref: ref.winks.body_big_fold,
									transform: {
										ty: 0.05
									}
								},
								// 519
								{
									ref: ref.winks.body_big_fold_highlight
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
													tx: 13.1,
													ty: -6.2,
													a: 1.673,
													d: 1.673
												}
											},
											// 521
											{
												ref: ref.winks.body_big_fold_hurt_cracks_small,
												alpha: cracks_alpha,
												transform: {
													tx: 3.05,
													ty: 0.65
												}
											}
										],
										[
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: 11.7,
													ty: -10.65,
													a: 1.976,
													d: 0.898,
													b: 0.529,
													c: -0.241
												}
											},
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: -15.75,
													ty: -4.8
												}
											},
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: -4.9,
													ty: 9.3,
													a: 0.7,
													d: 0.684,
													b: -1.176,
													c: 1.185
												}
											},
											// 523
											{
												ref: ref.winks.body_big_fold_hurt_cracks_big,
												alpha: cracks_alpha,
												transform: {
													tx: 1.8,
													ty: 0.6
												}
											}
										]
									]
								}
							]
						]
					}
				],
				[
					// 516
					{
						transform: {
							tx: 0.1,
							ty: 0.05
						},
						parts: [body]
					},
					// 531
					{
						transform: {
							tx: 14.65,
							ty: -19.15
						},
						parts: [
							[
								// 525
								{
									colorIdx: 0,
									ref: ref.winks.body_small_fold,
									transform: {
										tx: -0.8,
										ty: 0,
										a: 1.068,
										d: 1
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
													tx: -2.4,
													ty: -11,
													a: 1.208,
													d: 0.81
												}
											},
											// 528
											{
												ref: ref.winks.body_small_fold_hurt_cracks_small,
												alpha: cracks_alpha,
												transform: {
													tx: -5.15,
													ty: -4.75
												}
											}
										],
										[
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: -1.35,
													ty: -8.05,
													a: 1.737,
													d: 1.737
												}
											},
											// 530
											{
												ref: ref.winks.body_small_fold_hurt_cracks_big,
												alpha: cracks_alpha,
												transform: {
													tx: -5.35,
													ty: -2.55
												}
											}
										]
									]
								}
							]
						]
					},
					// 532
					{
						ref: ref.winks.body_small_fold_highlight
					}
				],
				[
					// 516
					{
						transform: {
							tx: 0.1,
							ty: 0.05
						},
						parts: [body]
					},
					// 537
					{
						transform: {
							tx: 1.4,
							ty: -5.05
						},
						parts: [
							[
								// 534
								{
									colorIdx: 0,
									ref: ref.winks.body_spike_holder,
									transform: {
										tx: 1.95,
										ty: -1.1,
										a: 1.005,
										d: 1.005
									}
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, -1, 0],
									parts: [
										// 536
										{
											ref: ref.winks.body_spike_holder_hurt_cracks,
											alpha: cracks_alpha,
											transform: {
												tx: 10.65,
												ty: -0.05
											}
										}
									]
								}
							]
						]
					},
					// 539
					{
						ref: ref.winks.body_spike,
						transform: {
							tx: -7.2,
							ty: -17.5
						},
						colorOffset: {
							r: -123,
							g: -143,
							b: -215
						}
					},
					// 540
					{
						ref: ref.winks.body_mono_spike_highlight
					}
				],
				[
					// 516
					{
						transform: {
							tx: 0.1,
							ty: 0.05
						},
						parts: [body]
					},
					// 534
					{
						colorIdx: 0,
						ref: ref.winks.body_spike_holder,
						transform: {
							tx: 7.75,
							ty: -9.55,
							a: 0.797,
							d: 0.797
						}
					},
					// 534
					{
						colorIdx: 0,
						ref: ref.winks.body_spike_holder,
						transform: {
							tx: -10.8,
							ty: 2,
							a: 0.49,
							d: 0.49,
							b: 0.073,
							c: -0.073
						}
					},
					// 545
					{
						transform: {
							tx: -5.7,
							ty: -12.75
						},
						parts: [
							[
								// 539
								{
									colorIdx: 0,
									ref: ref.winks.body_spike,
									transform: {
										tx: 6.05,
										ty: -4.95,
										a: 0.696,
										d: 0.696
									}
								},
								// 539
								{
									colorIdx: 0,
									ref: ref.winks.body_spike,
									transform: {
										tx: -9,
										ty: 8.5,
										a: 0.469,
										d: 0.469,
										b: 0.07,
										c: -0.07
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
													tx: 3.85,
													ty: -4.85
												}
											},
											// 542
											{
												ref: ref.winks.body_spike_hurt_cracks_small,
												alpha: cracks_alpha,
												transform: {
													tx: -3.35,
													ty: 2.05
												}
											}
										],
										[
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: 2.95,
													ty: -5.05,
													a: 0,
													d: 0,
													b: -1.406,
													c: 1.406
												}
											},
											// 544
											{
												ref: ref.winks.body_spike_hurt_cracks_big,
												alpha: cracks_alpha,
												transform: {
													tx: -1.85,
													ty: 2.05
												}
											}
										]
									]
								}
							]
						]
					},
					// 546
					{
						ref: ref.winks.body_dual_spikes_highlight
					}
				],
				[
					// 555
					{
						transform: {
							tx: 0.3,
							ty: -6.8
						},
						parts: [body_round]
					}
				],
				[
					// 555
					{
						transform: {
							tx: 0.3,
							ty: -6.8
						},
						parts: [body_round]
					},
					// 557
					{
						colorIdx: 2,
						ref: ref.winks.body_round_dots,
						blend: BLEND_MODES.MULTIPLY,
						transform: {
							tx: 1.15,
							ty: -15.15
						}
					}
				],
				[
					// 555
					{
						transform: {
							tx: 0.3,
							ty: -6.8
						},
						parts: [body_round]
					},
					// 558
					{
						ref: ref.winks.body_round_speks
					}
				],
				[
					// 555
					{
						transform: {
							tx: -0.3,
							ty: 0.2,
							a: 1,
							d: 0.603
						},
						parts: [body_round]
					},
					// 560
					{
						colorIdx: 0,
						ref: ref.winks.body_small_spikes,
						transform: {
							tx: -7.95,
							ty: -10.15
						}
					}
				]
			]
		}
	],
	// 590_p4
	eyes: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 569
					{
						...eyes,
						transform: {
							tx: -0.55,
							ty: 8.35,
							a: 0.98,
							d: 0.98,
							b: 0.195,
							c: -0.195
						}
					},
					// 570
					{
						ref: ref.winks.eyes_sockets_highlight
					}
				],
				[
					// 578
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: -7.65,
							ty: 11.35,
							a: 0.98,
							d: 0.98,
							b: 0.195,
							c: -0.195
						},
						parts: [
							[
								// 571
								{
									ref: ref.winks.eyes_small_back
								},
								// 572
								{
									ref: ref.winks.eyes_small_young
								},
								// 573
								{
									ref: ref.winks.eyes_small_highlight
								},
								// 575
								{
									colorIdx: 0,
									ref: ref.winks.eyes_small_sockets
								}
							],
							[
								// 571
								{
									ref: ref.winks.eyes_small_back
								},
								// 576
								{
									ref: ref.winks.eyes_small_adult
								},
								// 573
								{
									ref: ref.winks.eyes_small_highlight
								},
								// 575
								{
									colorIdx: 0,
									ref: ref.winks.eyes_small_sockets
								}
							],
							[
								// 577
								{
									ref: ref.winks.eyes_small_demon
								},
								// 575
								{
									colorIdx: 0,
									ref: ref.winks.eyes_small_sockets
								}
							]
						]
					},
					// 579
					{
						ref: ref.winks.eyes_small_sockets_highlight
					}
				],
				[
					// 586
					{
						partIdx: 1,
						frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
						transform: {
							tx: -2.7,
							ty: 10.4,
							a: 0.98,
							d: 0.98,
							b: 0.195,
							c: -0.195
						},
						parts: [
							[
								// 580
								{
									ref: ref.winks.eyes_bored_back
								},
								// 581
								{
									ref: ref.winks.eyes_bored_young
								},
								// 583
								{
									colorIdx: 0,
									ref: ref.winks.eyes_bored_sockets,
									transform: {
										tx: -2.5,
										ty: -0.05
									}
								}
							],
							[
								// 580
								{
									ref: ref.winks.eyes_bored_back
								},
								// 584
								{
									ref: ref.winks.eyes_bored_adult
								},
								// 583
								{
									colorIdx: 0,
									ref: ref.winks.eyes_bored_sockets,
									transform: {
										tx: -2.5,
										ty: -0.05
									}
								}
							],
							[
								// 585
								{
									ref: ref.winks.eyes_bored_demon
								},
								// 583
								{
									colorIdx: 0,
									ref: ref.winks.eyes_bored_sockets,
									transform: {
										tx: -2.5,
										ty: -0.05
									}
								}
							]
						]
					},
					// 587
					{
						ref: ref.winks.eyes_bored_sockets_highlight
					}
				],
				[
					// 569
					{
						...eyes,
						transform: {
							tx: -0.55,
							ty: 8.35,
							a: 0.98,
							d: 0.98,
							b: 0.195,
							c: -0.195
						}
					},
					// 570
					{
						ref: ref.winks.eyes_sockets_highlight
					},
					// 589
					{
						colorIdx: 0,
						ref: ref.winks.eyes_spikes,
						transform: {
							tx: -1,
							ty: 2.45
						}
					}
				]
			]
		}
	],
	// 593_special
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 592
				{
					colorIdx: 0,
					ref: ref.winks.special,
					transform: {
						tx: -0.45,
						ty: 13.8
					}
				}
			]
		}
	],
	// 605_p6
	mouth: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 595
					{
						colorIdx: 0,
						ref: ref.winks.mouth,
						transform: {
							tx: -1.2,
							ty: 7.15,
							a: 0.949,
							d: 0.949,
							b: 0.311,
							c: -0.311
						}
					}
				],
				[
					// 597
					{
						colorIdx: 0,
						ref: ref.winks.mouth_bumpy,
						transform: {
							tx: 0.05,
							ty: 4.7,
							a: 0.998,
							d: 0.998,
							b: 0.052,
							c: -0.052
						}
					},
					// 578
					{
						ref: ref.winks.mouth_bumpy_highlight
					}
				],
				[
					// 600
					{
						colorIdx: 0,
						ref: ref.winks.mouth_fat,
						transform: {
							tx: -0.1,
							ty: 8.1,
							a: 0.977,
							d: 0.977,
							b: 0.207,
							c: -0.207
						}
					},
					// 601
					{
						ref: ref.winks.mouth_fat_highlight
					}
				],
				[
					// 600
					{
						colorIdx: 0,
						ref: ref.winks.mouth_fat,
						transform: {
							tx: -0.1,
							ty: 8.1,
							a: 0.977,
							d: 0.977,
							b: 0.207,
							c: -0.207
						}
					},
					// 601
					{
						ref: ref.winks.mouth_fat_highlight
					},
					// 603
					{
						colorIdx: 0,
						ref: ref.winks.mouth_spikes,
						transform: {
							tx: -26.15,
							ty: 12.6
						}
					},
					// 604
					{
						ref: ref.winks.mouth_spikes_highlight
					}
				]
			]
		}
	],
	// 614_p5a
	left_leg_1: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, -1],
			parts: [
				[
					// 607
					{
						colorIdx: 0,
						ref: ref.winks.left_leg_1,
						transform: {
							tx: -22.85,
							ty: 3.5
						}
					},
					// 608
					{
						ref: ref.winks.left_leg_1_claws
					},
					// 609
					{
						ref: ref.winks.left_leg_1_speks
					}
				],
				[
					// 607
					{
						colorIdx: 0,
						ref: ref.winks.left_leg_1,
						transform: {
							tx: -22.85,
							ty: 3.5
						}
					},
					// 608
					{
						ref: ref.winks.left_leg_1_claws
					},
					// 610
					{
						ref: ref.winks.left_leg_1_highlight
					}
				],
				[
					// 607
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_1,
						transform: {
							tx: -22.85,
							ty: 3.5
						}
					},
					// 608
					{
						ref: ref.winks.left_leg_1_claws
					},
					// 610
					{
						ref: ref.winks.left_leg_1_highlight
					}
				],
				[
					// 612
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_1_tube,
						transform: {
							tx: -23.1,
							ty: 2.2
						}
					},
					// 613
					{
						ref: ref.winks.left_leg_1_tube_claws
					}
				]
			]
		}
	],
	// 623_p5c
	left_leg_3: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
			parts: [
				[
					// 615
					{
						ref: ref.winks.left_leg_3_claws
					},
					// 617
					{
						colorIdx: 0,
						ref: ref.winks.left_leg_3,
						transform: {
							tx: 13.5,
							ty: -16.55
						}
					},
					// 618
					{
						ref: ref.winks.left_leg_3_speks
					}
				],
				[
					// 615
					{
						ref: ref.winks.left_leg_3_claws
					},
					// 617
					{
						colorIdx: 0,
						ref: ref.winks.left_leg_3,
						transform: {
							tx: 13.5,
							ty: -16.55
						}
					},
					// 619
					{
						ref: ref.winks.left_leg_3_highlight
					}
				],
				[
					// 615
					{
						ref: ref.winks.left_leg_3_claws
					},
					// 617
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_3,
						transform: {
							tx: 13.5,
							ty: -16.55
						}
					},
					// 619
					{
						ref: ref.winks.left_leg_3_highlight
					}
				],
				[
					// 620
					{
						ref: ref.winks.left_leg_3_tube_claws,
						transform: {
							tx: -0.3,
							ty: 0.3
						}
					},
					// 622
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_3_tube,
						transform: {
							tx: 12.2,
							ty: -14.8
						}
					}
				],
				[
					// 620
					{
						ref: ref.winks.left_leg_3_tube_claws
					},
					// 622
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_3_tube,
						transform: {
							tx: 12.5,
							ty: -15.1
						}
					}
				]
			]
		}
	],
	// 639_p5b
	left_leg_2: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
			parts: [
				[
					// 630
					{
						transform: {
							tx: -0.85,
							ty: -7.55
						},
						parts: [
							[
								// 625
								{
									colorIdx: 0,
									ref: ref.winks.left_leg_2,
									transform: {
										tx: 0.6,
										ty: 2.9,
										a: 0.966,
										d: 0.966,
										b: -0.259,
										c: 0.259
									}
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 627
										{
											ref: ref.winks.left_leg_2_hurt_cracks_small,
											alpha: cracks_alpha,
											transform: {
												tx: 4.35,
												ty: -11.55
											}
										},
										// 629
										{
											ref: ref.winks.left_leg_2_hurt_cracks_big,
											alpha: cracks_alpha,
											transform: {
												tx: 1.95,
												ty: -2.8
											}
										}
									]
								}
							]
						]
					},
					// 631
					{
						ref: ref.winks.left_leg_2_claws
					},
					// 632
					{
						ref: ref.winks.left_leg_2_speks
					}
				],
				[
					// 630
					{
						transform: {
							tx: -0.85,
							ty: -7.55
						},
						parts: [
							[
								// 625
								{
									colorIdx: 0,
									ref: ref.winks.left_leg_2,
									transform: {
										tx: 0.6,
										ty: 2.9,
										a: 0.966,
										d: 0.966,
										b: -0.259,
										c: 0.259
									}
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 627
										{
											ref: ref.winks.left_leg_2_hurt_cracks_small,
											alpha: cracks_alpha,
											transform: {
												tx: 4.35,
												ty: -11.55
											}
										},
										// 629
										{
											ref: ref.winks.left_leg_2_hurt_cracks_big,
											alpha: cracks_alpha,
											transform: {
												tx: 1.95,
												ty: -2.8
											}
										}
									]
								}
							]
						]
					},
					// 631
					{
						ref: ref.winks.left_leg_2_claws
					},
					// 633
					{
						ref: ref.winks.left_leg_2_highlight
					}
				],
				[
					// 634
					{
						transform: {
							tx: -0.85,
							ty: -7.55
						},
						parts: [
							[
								// 625
								{
									colorIdx: 1,
									ref: ref.winks.left_leg_2,
									transform: {
										tx: 0.6,
										ty: 2.9,
										a: 0.966,
										d: 0.966,
										b: -0.259,
										c: 0.259
									}
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 627
										{
											ref: ref.winks.left_leg_2_hurt_cracks_small,
											alpha: cracks_alpha,
											transform: {
												tx: 4.35,
												ty: -11.55
											}
										},
										// 629
										{
											ref: ref.winks.left_leg_2_hurt_cracks_big,
											alpha: cracks_alpha,
											transform: {
												tx: 1.95,
												ty: -2.8
											}
										}
									]
								}
							]
						]
					},
					// 631
					{
						ref: ref.winks.left_leg_2_claws
					},
					// 633
					{
						ref: ref.winks.left_leg_2_highlight
					}
				],
				[
					// 635
					{
						ref: ref.winks.left_leg_2_tube_claws,
						transform: {
							tx: -4.25,
							ty: 3.05
						}
					},
					// 637
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_2_tube,
						transform: {
							tx: -1,
							ty: -2.05
						}
					},
					// 638
					{
						ref: ref.winks.left_leg_2_tube_highlight,
						transform: {
							tx: -4.25,
							ty: 3.05
						}
					}
				],
				[
					// 635
					{
						ref: ref.winks.left_leg_2_tube_claws
					},
					// 637
					{
						colorIdx: 1,
						ref: ref.winks.left_leg_2_tube,
						transform: {
							tx: 3.25,
							ty: -5.1
						}
					},
					// 638
					{
						ref: ref.winks.left_leg_2_tube_highlight
					}
				]
			]
		}
	],
	// 641_p5g
	left_pincer: [
		{
			partIdx: 5,
			frames: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
			parts: [
				[
					// 496
					{
						colorIdx: 0,
						ref: ref.winks.leg_pincer,
						transform: {
							tx: -0.75,
							ty: 2.55,
							a: 0.784,
							d: 0.784
						}
					},
					// 498
					{
						colorIdx: 1,
						ref: ref.winks.leg_pincer_inside,
						transform: {
							tx: -0.75,
							ty: 2.55,
							a: 0.784,
							d: 0.784
						}
					},
					// 640
					{
						ref: ref.winks.left_leg_1_pincer_highlight
					}
				]
			]
		}
	]
};
