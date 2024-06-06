// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// hurt
const body_hurt = {
	partIdx: 2,
	frames: [-1, 0, 1],
	parts: [
		[
			// 155
			{
				ref: ref.hurt.scratch,
				transform: {
					tx: -6.85,
					ty: 3.25,
					a: 1.722,
					d: 1.722
				}
			},
			// 354
			{
				ref: ref.hurt.scratch_blood_small,
				transform: {
					tx: -12.45,
					ty: -1.45
				}
			}
		],
		[
			// 657
			{
				ref: ref.planaile.body_hurt_blood
			},
			// 155
			{
				ref: ref.hurt.scratch,
				transform: {
					tx: -6.85,
					ty: 3.25,
					a: 1.722,
					d: 1.722
				}
			},
			// 354
			{
				ref: ref.hurt.scratch_blood_small,
				transform: {
					tx: -12.45,
					ty: -1.45
				}
			}
		]
	]
};
// 658
const body = {
	parts: [
		[
			// 656
			{
				colorIdx: 2,
				ref: ref.planaile.body,
				transform: {
					tx: -50.05,
					ty: 3.2
				}
			},
			body_hurt
		]
	]
};
// 687
const left_ear_special = {
	partIdx: 15,
	frames: [-1, 0],
	parts: [
		[
			// 686
			{
				ref: ref.planaile.left_ear_special,
				transform: {
					tx: 12.5,
					ty: 0,
					a: 0.825,
					d: 0.825
				}
			},
			// 686
			{
				ref: ref.planaile.left_ear_special,
				transform: {
					ty: 7.45
				}
			}
		]
	]
};
// 767
const cheeks = [
	{
		colorIdx: 1,
		ref: ref.planaile.cheeks
	},
	// hurt
	{
		partIdx: 2,
		frames: [-1, 0, 1],
		transform: {
			tx: 76.4,
			ty: 3.5
		},
		parts: [
			[
				// 318
				{
					ref: ref.hurt.scratch_small,
					transform: {
						tx: 12.2,
						ty: -1.2,
						a: 1.816,
						d: 1.816
					}
				}
			],
			[
				// 766
				{
					ref: ref.planaile.cheeks_hurt_blood
				},
				// 357
				{
					ref: ref.hurt.bruise_purple,
					transform: {
						tx: 12.5,
						ty: -3.35,
						a: 1.577,
						d: 0.778,
						b: 0.078,
						c: 0
					}
				},
				// 359
				{
					ref: ref.hurt.scratch_blood,
					transform: {
						tx: -21.7,
						ty: -0.7
					}
				}
			]
		]
	},
	// 768
	{
		ref: ref.planaile.cheeks_highlight
	}
];

export const parts_big = {
	// 650 p7b
	right_arm: [
		// 645
		{
			colorIdx: 1,
			ref: ref.planaile.right_wing,
			transform: {
				tx: -1.65,
				ty: 0.9,
				a: 1.038,
				d: 1.038,
				b: 0,
				c: 0.021
			}
		},
		// 648
		{
			colorIdx: 0,
			ref: ref.planaile.right_wing_front,
			transform: {
				tx: 21.85,
				ty: 2.5,
				a: 1.038,
				d: 1.038,
				b: 0,
				c: 0.021
			}
		},
		// 649
		{
			ref: ref.planaile.right_hand
		}
	],
	// 652 p8b
	right_foot: [
		{
			ref: ref.planaile.right_foot
		}
	],
	// 654 col0
	face: [
		{
			colorIdx: 0,
			ref: ref.planaile.face
		}
	],
	// 665 p9
	body: [
		{
			partIdx: 9,
			frames: [0, 1, 2],
			parts: [
				// 658
				{
					...body,
					transform: {
						tx: 50.05,
						ty: -3.2
					}
				},
				// 658
				{
					...body,
					transform: {
						tx: 49.55,
						ty: -0.35,
						a: 1.152,
						d: 1.152
					}
				},
				// 664
				{
					transform: {
						tx: 49.7,
						ty: -0.7,
						a: 1.045,
						d: 0.85
					},
					parts: [
						[
							// 663
							{
								colorIdx: 1,
								ref: ref.planaile.body_naked,
								transform: {
									tx: -50.05,
									ty: 3.2
								}
							},
							body_hurt
						]
					]
				}
			]
		},
		// 661
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 2.65,
				ty: -82.85
			},
			parts: [
				// 660
				{
					colorIdx: 2,
					ref: ref.planaile.tail_special,
					transform: {
						tx: 28.05,
						ty: 3.65
					}
				}
			]
		}
	],
	// 674 p4b
	right_ear: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3],
			parts: [
				// 667
				{
					colorIdx: 0,
					ref: ref.planaile.right_ear
				},
				// 669
				{
					colorIdx: 0,
					ref: ref.planaile.right_ear_long,
					transform: {
						tx: 5.2,
						ty: -3.85
					}
				},
				// 671
				{
					colorIdx: 0,
					ref: ref.planaile.right_ear_bat,
					transform: {
						tx: 3.7,
						ty: -2.95
					}
				},
				// 673
				{
					colorIdx: 0,
					ref: ref.planaile.right_ear_pointy,
					transform: {
						tx: 3.7,
						ty: -2.95
					}
				}
			]
		}
	],
	// 711 p4a
	left_ear: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 684
					{
						transform: {
							tx: 54.55,
							ty: 0.15
						},
						parts: [
							[
								// 676
								{
									colorIdx: 0,
									ref: ref.planaile.left_ear,
									transform: {
										tx: -54.55,
										ty: -0.15
									}
								},
								// 677
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_hole,
									transform: {
										tx: -0.05
									}
								},
								// 679
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_skin_1,
									transform: {
										tx: -2.05,
										ty: -7
									},
									alpha: 0.45
								},
								// 681
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_skin_2,
									transform: {
										tx: -4.9,
										ty: -4.05
									},
									alpha: 0.75
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
												tx: -4.45,
												ty: -1.65,
												a: 1.827,
												d: 1.827
											}
										},
										[
											// 683
											{
												ref: ref.planaile.left_ear_hurt_blood
											},
											// 359
											{
												ref: ref.hurt.scratch_blood,
												transform: {
													tx: -8,
													ty: 1.95,
													a: 1.267,
													d: 0.945
												}
											},
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: 5.75,
													ty: -8.25,
													a: 2.013,
													d: 2.013
												}
											}
										]
									]
								}
							]
						]
					},
					// special
					{
						...left_ear_special,
						transform: {
							tx: 41.3,
							ty: -6.5
						}
					}
				],
				[
					// 696
					{
						transform: {
							tx: 68.8,
							ty: -0.15
						},
						parts: [
							[
								// 689
								{
									colorIdx: 0,
									ref: ref.planaile.left_ear_long
								},
								// 690
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_long_hole
								},
								// 692
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_long_skin_1,
									transform: {
										tx: 2.8,
										ty: -2.75
									},
									alpha: 0.25
								},
								// 694
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_long_skin_2,
									transform: {
										tx: 1.45,
										ty: -8.1
									},
									alpha: 0.6
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 318
										{
											ref: ref.hurt.scratch_small,
											transform: {
												tx: -4.85,
												ty: -7.4,
												a: 2.493,
												d: 2.493
											}
										},
										[
											// 357
											{
												ref: ref.hurt.bruise_purple,
												transform: {
													tx: 0.3,
													ty: -9.95,
													a: -0.513,
													d: -0.786,
													b: -1.3,
													c: 1.993
												}
											},
											// 358
											{
												ref: ref.hurt.scratch_blood,
												transform: {
													tx: -24.05,
													ty: 0.85,
													a: 0.714,
													d: 0.714,
													b: 0.698,
													c: -0.698
												}
											}
										]
									]
								}
							]
						]
					},
					// special
					{
						...left_ear_special,
						transform: {
							tx: 47.35,
							ty: -10.75,
							a: 0.966,
							d: 0.966,
							b: 0.259,
							c: -0.259
						}
					}
				],
				[
					// 705
					{
						transform: {
							tx: 64.9,
							ty: -3.05
						},
						parts: [
							[
								// 698
								{
									colorIdx: 0,
									ref: ref.planaile.left_ear_bat,
									transform: {
										tx: -0.05
									}
								},
								// 699
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_bat_hole,
									transform: {
										tx: -0.05
									}
								},
								// 701
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_bat_skin_1,
									transform: {
										tx: 11.4,
										ty: -7.2
									},
									alpha: 0.25
								},
								// 703
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_bat_skin_2,
									transform: {
										tx: 1.2,
										ty: -5.65
									},
									alpha: 0.6
								},
								// hurt
								{
									partIdx: 2,
									frames: [-1, 0, 1],
									parts: [
										// 354
										{
											ref: ref.hurt.scratch_blood_small,
											transform: {
												tx: -2.65,
												ty: -2.5,
												a: 1.49,
												d: 1.49
											}
										},
										[
											// 359
											{
												ref: ref.hurt.scratch_blood,
												transform: {
													tx: 3.8,
													ty: -6.3,
													a: 1.236,
													d: 1.236,
													b: 0.687,
													c: -0.687
												}
											},
											// 155
											{
												ref: ref.hurt.scratch,
												transform: {
													tx: -17.15,
													ty: -1.4,
													a: 1.705,
													d: 1.705
												}
											}
										]
									]
								}
							]
						]
					},
					// special
					{
						...left_ear_special,
						transform: {
							tx: 47.35,
							ty: -10.75,
							a: 0.966,
							d: 0.966,
							b: 0.259,
							c: -0.259
						}
					}
				],
				[
					// 710
					{
						transform: {
							tx: 54.55,
							ty: 0.15
						},
						parts: [
							[
								// 707
								{
									colorIdx: 0,
									ref: ref.planaile.left_ear_pointy,
									transform: {
										tx: -54.55,
										ty: -0.15
									}
								},
								// 709
								{
									colorIdx: 1,
									ref: ref.planaile.left_ear_pointy_inside,
									transform: {
										tx: -0.05
									}
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
												tx: -4.45,
												ty: -1.65,
												a: 1.827,
												d: 1.827
											}
										},
										[
											// 683
											{
												ref: ref.planaile.left_ear_hurt_blood
											},
											// 359
											{
												ref: ref.hurt.scratch_blood,
												transform: {
													tx: -8,
													ty: 1.95,
													a: 1.267,
													d: 0.945
												}
											},
											// 318
											{
												ref: ref.hurt.scratch_small,
												transform: {
													tx: 5.75,
													ty: -8.25,
													a: 2.013,
													d: 2.013
												}
											}
										]
									]
								}
							]
						]
					},
					// special
					{
						...left_ear_special,
						transform: {
							tx: 39.8,
							ty: -4.8,
							a: 0.966,
							d: 0.966,
							b: -0.259,
							c: 0.259
						}
					}
				]
			]
		}
	],
	// 753 p3
	head: [
		// 714
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 10.8,
				ty: -36.8
			},
			parts: [
				{
					colorIdx: 2,
					ref: ref.planaile.hair
				}
			]
		},
		{
			partIdx: 3,
			frames: [0, 1, 2, 3],
			parts: [
				// 730
				{
					transform: {
						tx: 46,
						ty: 3.75
					},
					parts: [
						[
							// 725
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									tx: -46,
									ty: -3.75
								},
								parts: [
									[
										// 715
										{
											ref: ref.planaile.eyes_white
										},
										// 716
										{
											ref: ref.planaile.eyes_young
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 719
										{
											ref: ref.planaile.eyes_highlight
										},
										// 721
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 715
										{
											ref: ref.planaile.eyes_white
										},
										// 722
										{
											ref: ref.planaile.eyes_adult
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 719
										{
											ref: ref.planaile.eyes_highlight
										},
										// 721
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 723
										{
											ref: ref.planaile.eyes_demon
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 724
										{
											ref: ref.planaile.eyes_demon_highlight
										},
										// 721
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
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
									// 155
									{
										ref: ref.hurt.scratch,
										transform: {
											tx: 4.35,
											ty: -11.95,
											a: 2.152,
											d: 0.604,
											b: -0.209,
											c: 0.014
										}
									},
									[
										// 726
										{
											ref: ref.planaile.eyes_hurt_bruise
										},
										// 728
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_hurt_swelling,
											transform: {
												tx: 5.25,
												ty: -6.7
											}
										},
										// 729
										{
											ref: ref.planaile.eyes_hurt_bruise_under
										},
										// 354
										{
											ref: ref.hurt.scratch_blood_small,
											transform: {
												tx: -24.65,
												ty: -7.8,
												a: 0.873,
												d: 0.873,
												b: 0.485,
												c: -0.485
											}
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 9.4,
												ty: -5.1,
												a: 2.253,
												d: 0.967,
												b: -0.586,
												c: 0.251
											}
										}
									]
								]
							}
						]
					]
				},
				// 741
				{
					transform: {
						tx: 46.25,
						ty: 0.65
					},
					parts: [
						[
							// 739
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									tx: -46.25,
									ty: -0.65
								},
								parts: [
									[
										// 731
										{
											ref: ref.planaile.eyes_big_white
										},
										// 732
										{
											ref: ref.planaile.eyes_big_young
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 733
										{
											ref: ref.planaile.eyes_big_highlight
										},
										// 735
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_big_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 731
										{
											ref: ref.planaile.eyes_big_white
										},
										// 736
										{
											ref: ref.planaile.eyes_big_adult
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 733
										{
											ref: ref.planaile.eyes_big_highlight
										},
										// 735
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_big_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 737
										{
											ref: ref.planaile.eyes_big_demon
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 738
										{
											ref: ref.planaile.eyes_big_demon_highlight
										},
										// 735
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_big_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
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
									// 155
									{
										ref: ref.hurt.scratch,
										transform: {
											tx: 4.35,
											ty: -11.95,
											a: 2.152,
											d: 0.604,
											b: -0.209,
											c: 0.014
										}
									},
									[
										// 740/726
										{
											ref: ref.planaile.eyes_hurt_bruise
										},
										// 728
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_hurt_swelling,
											transform: {
												tx: 1.65,
												ty: -6.55,
												a: 1.202,
												d: 1.296,
												b: 0.16,
												c: -0.172
											}
										},
										// 729
										{
											ref: ref.planaile.eyes_hurt_bruise_under
										},
										// 354
										{
											ref: ref.hurt.scratch_blood_small,
											transform: {
												tx: -24.65,
												ty: -7.8,
												a: 0.873,
												d: 0.873,
												b: 0.485,
												c: -0.485
											}
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 6.35,
												ty: -3.75,
												a: 2.81,
												d: 1.293,
												b: -0.399,
												c: 0.136
											}
										}
									]
								]
							}
						]
					]
				},
				// 748
				{
					transform: {
						tx: 46,
						ty: 3.75
					},
					parts: [
						[
							// 747
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									tx: -46,
									ty: -3.75
								},
								parts: [
									[
										// 742
										{
											ref: ref.planaile.eyes_small_white
										},
										// 743
										{
											ref: ref.planaile.eyes_small_young
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 744
										{
											ref: ref.planaile.eyes_small_highlight
										},
										// 721
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 742
										{
											ref: ref.planaile.eyes_small_white
										},
										// 745
										{
											ref: ref.planaile.eyes_small_adult
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 744
										{
											ref: ref.planaile.eyes_small_highlight
										},
										// 721
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 746
										{
											ref: ref.planaile.eyes_small_demon
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 724
										{
											ref: ref.planaile.eyes_demon_highlight
										},
										// 721
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
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
									// 155
									{
										ref: ref.hurt.scratch,
										transform: {
											tx: 4.35,
											ty: -11.95,
											a: 2.152,
											d: 0.604,
											b: -0.209,
											c: 0.014
										}
									},
									[
										// 740/726
										{
											ref: ref.planaile.eyes_hurt_bruise
										},
										// 728
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_hurt_swelling,
											transform: {
												tx: 5.25,
												ty: -6.7
											}
										},
										// 729
										{
											ref: ref.planaile.eyes_hurt_bruise_under
										},
										// 354
										{
											ref: ref.hurt.scratch_blood_small,
											transform: {
												tx: -24.65,
												ty: -7.8,
												a: 0.873,
												d: 0.873,
												b: 0.485,
												c: -0.485
											}
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 9.4,
												ty: -5.1,
												a: 2.253,
												d: 0.967,
												b: -0.586,
												c: 0.251
											}
										}
									]
								]
							}
						]
					]
				},
				// 752
				{
					transform: {
						tx: 46.25,
						ty: 0.65
					},
					parts: [
						[
							// 751
							{
								partIdx: 1,
								frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
								transform: {
									tx: -46.25,
									ty: -0.65
								},
								parts: [
									[
										// 749
										{
											ref: ref.planaile.eyes_small_big_white
										},
										// 743
										{
											ref: ref.planaile.eyes_small_young
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 744
										{
											ref: ref.planaile.eyes_small_highlight
										},
										// 735
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_big_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 749
										{
											ref: ref.planaile.eyes_small_big_white
										},
										// 745
										{
											ref: ref.planaile.eyes_small_adult
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 744
										{
											ref: ref.planaile.eyes_small_highlight
										},
										// 735
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_big_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
											}
										}
									],
									[
										// 750
										{
											ref: ref.planaile.eyes_small_big_demon
										},
										// 717
										{
											colorIdx: 1,
											ref: ref.planaile.eyes_skin,
											transform: {
												tx: 47.35,
												ty: 6.4
											}
										},
										// 724
										{
											ref: ref.planaile.eyes_demon_highlight
										},
										// 735
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_big_eyebrows,
											transform: {
												tx: 45.95,
												ty: 2.75
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
									// 155
									{
										ref: ref.hurt.scratch,
										transform: {
											tx: 4.35,
											ty: -11.95,
											a: 2.152,
											d: 0.604,
											b: -0.209,
											c: 0.014
										}
									},
									[
										// 740/726
										{
											ref: ref.planaile.eyes_hurt_bruise
										},
										// 728
										{
											colorIdx: 0,
											ref: ref.planaile.eyes_hurt_swelling,
											transform: {
												tx: 1.65,
												ty: -6.55,
												a: 1.202,
												d: 1.296,
												b: 0.16,
												c: -0.172
											}
										},
										// 729
										{
											ref: ref.planaile.eyes_hurt_bruise_under
										},
										// 354
										{
											ref: ref.hurt.scratch_blood_small,
											transform: {
												tx: -24.65,
												ty: -7.8,
												a: 0.873,
												d: 0.873,
												b: 0.485,
												c: -0.485
											}
										},
										// 357
										{
											ref: ref.hurt.bruise_purple,
											transform: {
												tx: 6.35,
												ty: -3.75,
												a: 2.81,
												d: 1.293,
												b: -0.399,
												c: 0.136
											}
										}
									]
								]
							}
						]
					]
				}
			]
		},
		// 714
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 2,
					ref: ref.planaile.head_special,
					transform: {
						tx: 10.8,
						ty: -36.8
					}
				}
			]
		}
	],
	// 763 p7a
	left_arm: [
		// 755
		{
			colorIdx: 0,
			ref: ref.planaile.left_wing
		},
		// 757
		{
			colorIdx: 1,
			ref: ref.planaile.left_wing_front,
			transform: {
				tx: 43.3,
				ty: -10.15
			}
		},
		// 758
		{
			ref: ref.planaile.left_hand,
			transform: {
				tx: 42.55,
				ty: 8.35
			}
		},
		// 760
		{
			partIdx: 7,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 3,
					ref: ref.planaile.left_wing_spots,
					transform: {
						tx: 55.8,
						ty: 2.8
					}
				}
			]
		},
		// hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: 42.55,
				ty: 8.35
			},
			parts: [
				[
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: 8.55,
							ty: -1.1,
							a: 1.075,
							d: 0.852,
							b: 0.769,
							c: -1.08
						}
					},
					// 354
					{
						ref: ref.hurt.scratch_blood_small,
						transform: {
							tx: 18.7,
							ty: -7,
							a: 0.729,
							d: 0.729,
							b: -0.682,
							c: 0.682
						}
					}
				],
				[
					// 759
					{
						ref: ref.planaile.left_wing_hurt_blood
					},
					// 359
					{
						ref: ref.hurt.scratch_blood,
						transform: {
							tx: 4.75,
							ty: 0.25,
							a: 0.482,
							d: 0.363,
							b: -1.318,
							c: 0.993
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 17.35,
							ty: -5.7,
							a: 1.172,
							d: 1.172,
							b: -1.137,
							c: 1.137
						}
					}
				]
			]
		}
	],
	// 777 p5
	cheeks: [
		{
			partIdx: 5,
			frames: [0, 1, 1, 0],
			parts: [
				[...cheeks],
				[
					// 774
					{
						colorIdx: 2,
						ref: ref.planaile.cheeks_right_hair,
						transform: {
							tx: 49.8,
							ty: -0.4
						}
					},
					...cheeks,
					// 776
					{
						colorIdx: 2,
						ref: ref.planaile.cheeks_left_hair,
						transform: {
							tx: 100.75,
							ty: 1
						}
					}
				]
			]
		},
		// 772
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 45.3,
				ty: -22.7
			},
			parts: [
				[
					// 769
					{
						ref: ref.planaile.glasses
					},
					// 771
					{
						ref: ref.planaile.glasses_highlight,
						transform: {
							tx: 5.4,
							ty: 2.7
						},
						blend: BLEND_MODES.OVERLAY
					},
					// 771
					{
						ref: ref.planaile.glasses_highlight,
						transform: {
							tx: 5.4,
							ty: 2.7
						},
						blur: {
							x: 1,
							y: 1
						},
						blend: BLEND_MODES.ADD
					}
				]
			]
		}
	],
	// 791 p6
	mouth: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5, 6],
			parts: [
				[
					// 779
					{
						colorIdx: 1,
						ref: ref.planaile.mouth
					},
					// 780
					{
						ref: ref.planaile.mouth_highlight,
						transform: {
							tx: -10.15,
							ty: 0.85,
							a: 0.32,
							d: 0.64
						}
					}
				],
				[
					// 782
					{
						colorIdx: 2,
						ref: ref.planaile.mouth_beard,
						transform: {
							tx: -0.5,
							ty: 6.15,
							a: 0.759,
							d: 0.759
						}
					},
					// 779
					{
						colorIdx: 1,
						ref: ref.planaile.mouth
					},
					// 780
					{
						ref: ref.planaile.mouth_highlight,
						transform: {
							tx: -10.15,
							ty: 0.85,
							a: 0.32,
							d: 0.64
						}
					}
				],
				[
					// 784
					{
						colorIdx: 1,
						ref: ref.planaile.mouth_big,
						transform: {
							tx: -1.9,
							ty: -4.05
						}
					},
					// 785
					{
						ref: ref.planaile.mouth_big_highlight,
						transform: {
							tx: -31,
							ty: -9.25,
							a: 0.892,
							d: 1
						}
					}
				],
				[
					// 782
					{
						colorIdx: 2,
						ref: ref.planaile.mouth_beard,
						transform: {
							tx: -3.2,
							ty: 4.15
						}
					},
					// 784
					{
						colorIdx: 1,
						ref: ref.planaile.mouth_big,
						transform: {
							tx: -1.9,
							ty: -4.05
						}
					},
					// 785
					{
						ref: ref.planaile.mouth_big_highlight,
						transform: {
							tx: -31,
							ty: -9.25,
							a: 0.892,
							d: 1
						}
					}
				],
				[
					// 786
					{
						colorIdx: 1,
						ref: ref.planaile.mouth_doubt,
						transform: {
							tx: 0.05,
							ty: -4.2
						}
					},
					// 788
					{
						ref: ref.planaile.mouth_doubt_highlight
					}
				],
				[
					// 782
					{
						colorIdx: 2,
						ref: ref.planaile.mouth_beard,
						transform: {
							tx: -1.6,
							ty: 3.95,
							a: 0.759,
							d: 0.759
						}
					},
					// 786
					{
						colorIdx: 1,
						ref: ref.planaile.mouth_doubt,
						transform: {
							tx: 0.05,
							ty: -4.2
						}
					},
					// 788
					{
						ref: ref.planaile.mouth_doubt_highlight
					}
				],
				[
					// 790
					{
						colorIdx: 1,
						ref: ref.planaile.mouth_open,
						transform: {
							tx: 2,
							ty: -1.15
						}
					}
				]
			]
		}
	],
	// 795 p8
	nose: [
		{
			partIdx: 8,
			frames: [
				0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			parts: [
				[
					// 793
					{
						ref: ref.planaile.nose,
						transform: {
							tx: -8.6,
							ty: 0
						},
						colorOffset: {
							r: -108,
							g: -148,
							b: -153
						}
					},
					// 794
					{
						ref: ref.planaile.nose_highlight
					}
				],
				[
					// 793
					{
						ref: ref.planaile.nose,
						transform: {
							tx: -8.6,
							ty: 0
						},
						colorOffset: {
							r: -133,
							g: -87,
							b: 20
						}
					},
					// 794
					{
						ref: ref.planaile.nose_highlight
					}
				]
			]
		}
	],
	// 799 p8a
	left_foot: [
		// 796
		{
			ref: ref.planaile.left_foot
		},
		// 798
		{
			colorIdx: 0,
			ref: ref.planaile.left_leg
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
