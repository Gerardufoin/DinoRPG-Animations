// @ts-check
import { ref } from '../references_big.js';

const eyes_highlight = {
	ref: ref.toufufu.eyes_highlight,
	glow: {
		distance: 2,
		color: 0xffffff,
		quality: 0.5,
		strength: 1
	}
};

// 2731
const arm_hand = {
	partIdx: 9,
	frames: [0, 1, 2, 3, 4],
	parts: [
		// 2722
		{
			colorIdx: 0,
			ref: ref.toufufu.arm_hand,
			transform: {
				tx: -5.15,
				ty: -2,
				a: 1.251,
				d: 1.251
			}
		},
		// 2724
		{
			colorIdx: 0,
			ref: ref.toufufu.arm_hand_fist,
			transform: {
				tx: -6.95,
				ty: 14.45,
				a: 1.084,
				d: -1.084,
				b: 0.432,
				c: 0.432
			}
		},
		// 2726
		{
			colorIdx: 0,
			ref: ref.toufufu.arm_hand_spock,
			transform: {
				tx: -15.3,
				ty: 0.85,
				a: 1.499,
				d: 1.155,
				b: -0.039,
				c: 0.31
			}
		},
		// 2728
		{
			colorIdx: 0,
			ref: ref.toufufu.arm_hand_flip,
			transform: {
				tx: -5.55,
				ty: -13.95,
				a: 1.297,
				d: 1.297,
				b: 0.205,
				c: -0.205
			}
		},
		// 2730
		{
			colorIdx: 0,
			ref: ref.toufufu.arm_hand_metal,
			transform: {
				tx: -15.9,
				ty: -3.9,
				a: 1.268,
				d: 1.268,
				b: -0.189,
				c: 0.189
			}
		}
	]
};

// 2747
const arm_fur = {
	partIdx: 4,
	frames: [0, 1, 2, 3, 4, 5],
	parts: [
		// 2736
		{
			colorIdx: 1,
			ref: ref.toufufu.arm_fur,
			transform: {
				tx: 14,
				ty: -0.25,
				a: 0.247,
				d: 0.285,
				b: 0.679,
				c: -0.782
			}
		},
		// 2738
		{
			colorIdx: 1,
			ref: ref.toufufu.arm_fur_star,
			transform: {
				tx: -3,
				ty: -5.15
			}
		},
		// 2740
		{
			colorIdx: 1,
			ref: ref.toufufu.arm_fur_round,
			transform: {
				tx: -3.2,
				ty: -1.4
			}
		},
		// 2742
		{
			colorIdx: 1,
			ref: ref.toufufu.arm_fur_arc,
			transform: {
				tx: 5.8,
				ty: -1.6,
				a: 0.754,
				d: 0.744,
				b: 0.384,
				c: -0.549
			}
		},
		// 2744
		{
			colorIdx: 1,
			ref: ref.toufufu.arm_fur_leaf,
			transform: {
				tx: 0.9,
				ty: -5.1,
				a: 0.966,
				d: 0.966,
				b: 0.259,
				c: -0.259
			}
		},
		// 2746
		{
			colorIdx: 1,
			ref: ref.toufufu.arm_fur_fire,
			transform: {
				tx: 6,
				ty: -4.3,
				a: 0.752,
				d: 0.781,
				b: 0.398,
				c: -0.327
			}
		}
	]
};

export const parts_big = {
	// 2684 p7b
	right_sideburn: [
		{
			partIdx: 7,
			frames: [0, -1, 1, 2, -1, -1, -1, -1, 3, 4, 5],
			parts: [
				// 2673
				{
					colorIdx: 1,
					ref: ref.toufufu.right_sideburn
				},
				// 2675
				{
					colorIdx: 1,
					ref: ref.toufufu.right_sideburn_master,
					transform: {
						tx: 0.25,
						ty: 1.65,
						a: 0.633,
						d: 0.633
					}
				},
				// 2677
				{
					colorIdx: 1,
					ref: ref.toufufu.right_sideburn_wolverine,
					transform: {
						tx: 10.5,
						ty: -3.15,
						a: 0.746,
						d: 0.58
					}
				},
				// 2679
				{
					colorIdx: 1,
					ref: ref.toufufu.right_sideburn_side,
					transform: {
						tx: 9.85,
						ty: -7.4
					}
				},
				// 2681
				{
					colorIdx: 1,
					ref: ref.toufufu.right_sideburn_flat,
					transform: {
						tx: 6.9,
						ty: 1.9
					}
				},
				// 2683
				{
					colorIdx: 1,
					ref: ref.toufufu.right_sideburn_elvis,
					transform: {
						tx: 2.1,
						ty: -0.8
					}
				}
			]
		}
	],
	// 2697 p6a
	right_leg: [
		{
			partIdx: 6,
			frames: [0, 1, 0, 0, 0, 0, 0, 0, 0],
			parts: [
				[
					// 2686
					{
						colorIdx: 0,
						ref: ref.toufufu.right_leg_foot,
						transform: {
							tx: 2.15
						}
					},
					// 2690
					{
						transform: {
							tx: 9.65,
							ty: -10.75
						},
						parts: [
							[
								// 2687
								{
									colorIdx: 2,
									ref: ref.toufufu.right_leg
								},
								// 2689
								{
									colorIdx: [2, 1],
									ref: ref.toufufu.right_leg_fur,
									transform: {
										tx: 2.45,
										ty: 12.35
									}
								}
							]
						]
					}
				],
				[
					// 2692
					{
						colorIdx: 0,
						ref: ref.toufufu.leg_folded_foot,
						transform: {
							tx: 4.65,
							ty: 0.85,
							a: 1.207,
							d: 1.208,
							b: -0.036,
							c: -0.027
						}
					},
					// 2696
					{
						transform: {
							tx: 3.9,
							ty: -12.4,
							a: 1,
							d: 1.073,
							b: 0,
							c: -0.122
						},
						parts: [
							[
								// 2693
								{
									colorIdx: 2,
									ref: ref.toufufu.right_leg_folded
								},
								// 2695
								{
									colorIdx: [2, 1],
									ref: ref.toufufu.leg_fur,
									transform: {
										tx: 22.35,
										ty: 8.35,
										a: -1.119,
										d: 0.744,
										b: 0.485,
										c: 0.41
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 2702
	body: [
		// 2701
		{
			transform: {
				tx: 18.6,
				ty: 37.2
			},
			parts: [
				[
					// 2699
					{
						colorIdx: 2,
						ref: ref.toufufu.body
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
										tx: 20.45,
										ty: 20.3,
										a: 0.845,
										d: 1.376,
										b: 0.074
									}
								}
							],
							[
								// 2700
								{
									ref: ref.toufufu.body_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 20.45,
										ty: 20.3,
										a: 0.845,
										d: 1.376,
										b: 0.074
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 2705
	navel: [
		{
			colorIdx: 0,
			ref: ref.toufufu.navel
		}
	],
	// 2716 p6b
	left_leg: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 0, 0, 0, 0, 0, 0],
			parts: [
				[
					// 2707
					{
						colorIdx: 0,
						ref: ref.toufufu.left_leg_foot,
						transform: {
							tx: -0.2,
							ty: -0.5
						}
					},
					// 2709
					{
						transform: {
							tx: -3.25,
							ty: -17.95,
							a: 1.018,
							d: 0.936,
							b: 0,
							c: 0.004
						},
						parts: [
							[
								// 2708
								{
									colorIdx: 2,
									ref: ref.toufufu.left_leg
								},
								// 2695
								{
									colorIdx: [2, 1],
									ref: ref.toufufu.leg_fur,
									transform: {
										tx: 0.25,
										ty: 18.55,
										a: 1.127,
										d: 1.127
									}
								}
							]
						]
					}
				],
				[
					// 2692
					{
						colorIdx: 0,
						ref: ref.toufufu.leg_folded_foot,
						transform: {
							tx: 14.35,
							ty: 0.1,
							a: -1.199,
							d: 1.212,
							b: 0,
							c: 0.184
						}
					},
					// 2711
					{
						transform: {
							tx: 20.05,
							ty: -14.65,
							a: -1.199,
							d: 1.212,
							b: 0,
							c: 0.184
						},
						parts: [
							[
								// 2710
								{
									colorIdx: 2,
									ref: ref.toufufu.left_leg_folded
								},
								// 2695
								{
									colorIdx: [2, 1],
									ref: ref.toufufu.leg_fur,
									transform: {
										tx: 15.3,
										ty: 7.85,
										a: 0.286,
										d: -0.152,
										b: 0.854,
										c: 1.006
									}
								}
							]
						]
					}
				],
				[
					// 2713
					{
						colorIdx: 0,
						ref: ref.toufufu.left_leg_closed_foot,
						transform: {
							tx: -7.5,
							ty: 1.8,
							a: 0.939,
							d: 0.939,
							b: 0,
							c: -0.004
						}
					},
					// 2715
					{
						transform: {
							tx: -10.45,
							ty: -20.7,
							a: 1,
							d: 1.071
						},
						parts: [
							[
								// 2714
								{
									colorIdx: 2,
									ref: ref.toufufu.left_leg_closed
								},
								// 2695
								{
									colorIdx: 1,
									ref: ref.toufufu.leg_fur,
									transform: {
										tx: 26.6,
										ty: 16.2,
										a: -1.236,
										d: 1.051,
										b: 0.252,
										c: 0.269
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 2720 special
	special_outfit: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				[
					// 2718
					{
						colorIdx: 3,
						ref: ref.toufufu.special_outfit,
						transform: {
							tx: 14.2,
							ty: 0.25
						},
						colorAdjust: {
							brightness: 8,
							contrast: 11
						}
					},
					// 2719
					{
						ref: ref.toufufu.special_outfit_shoulders
					}
				]
			]
		}
	],
	// 2760 p5b
	right_arm: [
		{
			partIdx: 5,
			frames: [0, 0, 1, 2, 2, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1],
			parts: [
				[
					// 2731
					{
						...arm_hand,
						transform: {
							tx: -18.45,
							ty: 0.7,
							a: 0.952,
							d: 0.949,
							b: 0.304,
							c: -0.312
						}
					},
					// 2734
					{
						colorIdx: 2,
						ref: ref.toufufu.right_arm
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: -10.1,
							ty: 10.05,
							a: 0.482,
							d: -0.482,
							b: 1.11,
							c: 1.11
						}
					}
				],
				[
					// 2749
					{
						colorIdx: 0,
						ref: ref.toufufu.right_arm_chop_hand,
						transform: {
							tx: 19.25,
							ty: 11.4,
							a: 0.993,
							d: 0.993,
							b: 0.117,
							c: -0.117
						}
					},
					// 2752
					{
						colorIdx: 2,
						ref: ref.toufufu.right_arm_chop,
						transform: {
							tx: -0.4,
							ty: 2.6
						}
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 31.05,
							ty: 17.3,
							a: -0.482,
							d: -0.482,
							b: 1.11,
							c: -1.11
						}
					}
				],
				[
					// 2731
					{
						...arm_hand,
						transform: {
							tx: -19.95,
							ty: 0.2,
							a: 0.975,
							d: 0.973,
							b: 0.22,
							c: -0.229
						}
					},
					// 2734
					{
						colorIdx: 2,
						ref: ref.toufufu.right_arm
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: -10.1,
							ty: 10.05,
							a: 0.482,
							d: -0.482,
							b: 1.11,
							c: 1.11
						}
					}
				],
				[
					// 2755
					{
						colorIdx: 2,
						ref: ref.toufufu.arm_down,
						transform: {
							tx: 20.9,
							ty: 4.9,
							a: 1.029,
							d: 0.986,
							b: 0,
							c: -0.297
						}
					},
					// 2759
					{
						transform: {
							tx: -0.35,
							ty: 46.5,
							a: 1.139,
							d: 1.332,
							b: 0,
							c: -0.119
						},
						parts: [
							[
								{
									colorIdx: 0,
									ref: ref.toufufu.arm_down_hand,
									transform: {
										a: 1.168,
										d: 1.168
									}
								}
							]
						]
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 18.05,
							ty: 60.65,
							a: -1.102,
							d: -1.046,
							b: -0.454,
							c: 0.589
						}
					}
				]
			]
		}
	],
	// 2768 p2
	head: [
		// 2762
		{
			colorIdx: 0,
			ref: ref.toufufu.head,
			transform: {
				tx: 0.95,
				ty: 0.8
			}
		},
		// hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			parts: [
				// 2766
				{
					ref: ref.toufufu.head_hurt_blood
				},
				// 2767
				{
					ref: ref.toufufu.head_hurt_hemorrhage
				}
			]
		},
		// 2765
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 3.25,
				ty: 2.6
			},
			parts: [
				// 2764
				{
					colorIdx: 3,
					ref: ref.toufufu.head_special,
					transform: {
						tx: 0.9,
						ty: -12.5
					},
					colorAdjust: {
						brightness: 8,
						contrast: 11
					}
				}
			]
		}
	],
	// 2809 p3
	eyes: [
		{
			partIdx: 3,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 2770
					{
						colorIdx: 1,
						ref: ref.toufufu.eyes_eyebrows,
						transform: {
							tx: -1.15,
							ty: -0.75
						}
					},
					// 2776 hurt
					{
						partIdx: 2,
						frames: [0, 1, 2],
						transform: {
							tx: 0.25,
							ty: 4.2
						},
						parts: [
							[
								// 2771
								{
									ref: ref.toufufu.eyes
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 13.25,
										ty: 4.35,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.75,
										ty: 4.4,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							[
								// 2774
								{
									ref: ref.toufufu.eyes_hurt_1
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.75,
										ty: 4.4,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							// 2775
							{
								ref: ref.toufufu.eyes_hurt_2
							}
						]
					}
				],
				[
					// 2778
					{
						colorIdx: 1,
						ref: ref.toufufu.eyes_silly_eyebrows,
						transform: {
							tx: -0.95,
							ty: -6.75
						}
					},
					// 2782 hurt
					{
						partIdx: 2,
						frames: [0, 1, 2],
						transform: {
							tx: 0.6,
							ty: 2.95
						},
						parts: [
							[
								// 2779
								{
									ref: ref.toufufu.eyes_silly
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 12.95,
										ty: 5,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.85,
										ty: 6.2,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							[
								// 2780
								{
									ref: ref.toufufu.eyes_silly_hurt_1
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 12.95,
										ty: 5,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.85,
										ty: 6.2,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							[
								// 2781
								{
									ref: ref.toufufu.eyes_silly_hurt_2
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 12.95,
										ty: 5,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.85,
										ty: 6.2,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							]
						]
					}
				],
				[
					// 2784
					{
						colorIdx: 1,
						ref: ref.toufufu.eyes_master_eyebrows_1,
						transform: {
							tx: -1.65,
							ty: -1
						}
					},
					// 2788 hurt
					{
						partIdx: 2,
						frames: [0, 1, 2],
						transform: {
							tx: 0.6,
							ty: 5.75
						},
						parts: [
							[
								// 2785
								{
									ref: ref.toufufu.eyes_master
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 13.55,
										ty: 3.6,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								}
							],
							// 2786
							{
								ref: ref.toufufu.eyes_master_hurt_1
							},
							// 2787
							{
								ref: ref.toufufu.eyes_master_hurt_2
							}
						]
					},
					// 2773
					{
						...eyes_highlight,
						transform: {
							tx: 2.45,
							ty: 9.7,
							a: 0.512,
							d: 0.349,
							b: -0.266,
							c: 0.182
						}
					},
					// 2790
					{
						colorIdx: 0,
						ref: ref.toufufu.eyes_master_eyebrows_2,
						transform: {
							tx: 1.55,
							ty: 2.7
						}
					}
				],
				[
					// 2792
					{
						colorIdx: 1,
						ref: ref.toufufu.eyes_serious_eyebrows,
						transform: {
							tx: -2.75,
							ty: -0.75,
							a: 1.144,
							d: 1
						}
					},
					// 2796 hurt
					{
						partIdx: 2,
						frames: [0, 1, 2],
						transform: {
							tx: 1.85,
							ty: 8.2,
							a: 1.144,
							d: 1
						},
						parts: [
							[
								// 2793
								{
									ref: ref.toufufu.eyes_serious
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 13.05,
										ty: 1,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.95,
										ty: 2.2,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							[
								// 2794
								{
									ref: ref.toufufu.eyes_serious_hurt_1
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.95,
										ty: 2.2,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							// 2795
							{
								ref: ref.toufufu.eyes_serious_hurt_2
							}
						]
					}
				],
				[
					// 2800 hurt
					{
						partIdx: 2,
						frames: [0, 1, 2],
						transform: {
							tx: 2,
							ty: 8,
							a: 1.434,
							d: 1.282
						},
						parts: [
							[
								// 2797
								{
									ref: ref.toufufu.eyes_bored
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 9.75,
										ty: 0.5,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.45,
										ty: 1.15,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							[
								// 2798
								{
									ref: ref.toufufu.eyes_bored_hurt_1
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 1.45,
										ty: 1.15,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							// 2799
							{
								ref: ref.toufufu.eyes_bored_hurt_2
							}
						]
					},
					// 2802
					{
						colorIdx: 1,
						ref: ref.toufufu.eyes_bored_eyebrows,
						transform: {
							tx: 2.95,
							ty: 0.2,
							a: 0.919,
							d: 0.822
						}
					}
				],
				[
					// 2804
					{
						colorIdx: 1,
						ref: ref.toufufu.eyes_manga_eyebrows,
						transform: {
							tx: -1.65,
							ty: 1.1,
							a: 1.132,
							d: 1
						}
					},
					// 2808 hurt
					{
						partIdx: 2,
						frames: [0, 1, 2],
						transform: {
							tx: 1.3,
							ty: 5.1,
							a: 1.132,
							d: 1
						},
						parts: [
							[
								// 2805
								{
									ref: ref.toufufu.eyes_manga
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 12,
										ty: 4.4,
										a: 0.827,
										d: 0.564,
										b: 0.179,
										c: -0.122
									}
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 2.25,
										ty: 5.05,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							[
								// 2806
								{
									ref: ref.toufufu.eyes_manga_hurt_1
								},
								// 2773
								{
									...eyes_highlight,
									transform: {
										tx: 2.25,
										ty: 5.05,
										a: 0.512,
										d: 0.349,
										b: -0.266,
										c: 0.182
									}
								}
							],
							// 2807
							{
								ref: ref.toufufu.eyes_manga_hurt_2
							}
						]
					}
				]
			]
		}
	],
	// 2837 p8
	mouth: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			parts: [
				[
					// 2811
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_whistle,
						transform: {
							tx: 5.25,
							ty: 1
						}
					}
				],
				[
					// 2815
					{
						transform: {
							tx: 2.85,
							ty: -4.8
						},
						parts: [
							[
								// 2813
								{
									colorIdx: 0,
									ref: ref.toufufu.mouth_caveman,
									transform: {
										tx: 1.35,
										ty: 3.6
									}
								},
								// 2814
								{
									ref: ref.toufufu.mouth_caveman_teeth
								}
							]
						]
					}
				],
				[
					// 2817
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_smile,
						transform: {
							tx: 9.85,
							ty: 1.9
						}
					},
					// 2818
					{
						ref: ref.toufufu.mouth_smile_teeth
					}
				],
				[
					// 2820
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_surprised,
						transform: {
							tx: 6.25,
							ty: 1.45
						}
					},
					// 2821
					{
						ref: ref.toufufu.mouth_surprised_teeth
					}
				],
				[
					// 2822
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_grin,
						transform: {
							tx: 9.4,
							ty: 2.8
						}
					},
					// 2824
					{
						ref: ref.toufufu.mouth_grin_tooth
					}
				],
				[
					// 2826
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_master,
						transform: {
							tx: 11.35,
							ty: 6.05
						}
					},
					// 2828
					{
						colorIdx: 1,
						ref: ref.toufufu.mouth_master_beard,
						transform: {
							tx: 5.5,
							ty: -10.7
						}
					}
				],
				[
					// 2830
					{
						colorIdx: 1,
						ref: ref.toufufu.mouth_old,
						transform: {
							tx: 7.75,
							ty: 2.3
						}
					}
				],
				[
					// 2832
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth,
						transform: {
							tx: 11.1,
							ty: 6.65
						}
					},
					// 2834
					{
						colorIdx: 1,
						ref: ref.toufufu.mouth_beard_side,
						transform: {
							tx: 4.85,
							ty: 0.5
						}
					}
				],
				[
					// 2832
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth,
						transform: {
							tx: 10.75,
							ty: 5.95
						}
					},
					// 2836
					{
						colorIdx: 1,
						ref: ref.toufufu.mouth_whiskers,
						transform: {
							tx: 2.85,
							ty: 3.1
						}
					}
				]
			]
		}
	],
	// 2886 p7a
	hair: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			parts: [
				// 2843
				[
					// 2839
					{
						colorIdx: 1,
						ref: ref.toufufu.hair
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
										tx: 28.1,
										ty: 18.9,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 35.4,
										ty: 9.1
									}
								}
							],
							[
								// 2842
								{
									ref: ref.toufufu.hair_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 28.1,
										ty: 18.9,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 35.4,
										ty: 9.1
									}
								}
							]
						]
					}
				],
				// 2848
				[
					// 2846
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_casu,
						transform: {
							tx: -2.45,
							ty: -3
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -2.45,
							ty: -3
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 27.7,
										ty: 18.8,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 42.65,
										ty: 8.3,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							],
							[
								// 2847
								{
									ref: ref.toufufu.hair_casu_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 27.7,
										ty: 18.8,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 42.65,
										ty: 8.3,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							]
						]
					}
				],
				// 2852
				[
					// 2850
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_master,
						transform: {
							tx: 15.25,
							ty: -13
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 15.25,
							ty: -13
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 30.1,
										ty: 28.6,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 2.55,
										ty: 28.9,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							],
							[
								// 2851
								{
									ref: ref.toufufu.hair_master_hurt_blood,
									transform: {
										tx: -12.25,
										ty: 7.5
									}
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 30.1,
										ty: 28.6,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 2.55,
										ty: 28.9,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							]
						]
					}
				],
				// 2856
				[
					// 2855
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_wolverine,
						transform: {
							tx: 15.15,
							ty: 1.85
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 15.15,
							ty: 1.85
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 35,
										ty: 13.85,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 15.75,
										ty: 2.65,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							],
							[
								// 2855
								{
									ref: ref.toufufu.hair_wolverine_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 35,
										ty: 13.85,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 15.75,
										ty: 2.65,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							]
						]
					}
				],
				// 2859
				[
					// 2858
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_fang,
						transform: {
							tx: 7.6,
							ty: -14.05
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 7.6,
							ty: -14.05
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 30.1,
										ty: 28.6,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 2.55,
										ty: 28.9,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							],
							[
								// 2851
								{
									ref: ref.toufufu.hair_master_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 37.2,
										ty: 27.05,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 14.85,
										ty: 20.8,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							]
						]
					}
				],
				// 2863
				[
					// 2862
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_anime,
						transform: {
							tx: 11.65,
							ty: -10.5
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 11.65,
							ty: -10.5
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 30.1,
										ty: 28.6,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 2.55,
										ty: 28.9,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							],
							[
								// 2862
								{
									ref: ref.toufufu.hair_anime_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 15.85,
										ty: 24.8,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 36.5,
										ty: 21.3,
										a: 0.707,
										d: 0.707,
										b: 0.707,
										c: -0.707
									}
								}
							]
						]
					}
				],
				// 2867
				[
					// 2865
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_forward,
						transform: {
							tx: 5.55,
							ty: -0.75
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 5.55,
							ty: -0.75
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 34.15,
										ty: 19.35,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 6.8,
										ty: 23.4,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							],
							[
								// 2866
								{
									ref: ref.toufufu.hair_forward_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 34.15,
										ty: 19.35,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 6.8,
										ty: 23.4,
										a: 0.707,
										d: 0.707,
										b: -0.707,
										c: 0.707
									}
								}
							]
						]
					}
				],
				// 2871
				[
					// 2869
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_hat_hair,
						transform: {
							tx: 2.7,
							ty: -11.35
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 2.7,
							ty: -11.35
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 35.4,
										ty: 28.9,
										a: -0.671,
										d: -0.949,
										b: 0.958,
										c: -1.643
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 35.35,
										ty: 27.75,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							],
							[
								// 2870
								{
									ref: ref.toufufu.hair_hat_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 29.25,
										ty: 29.4,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 35.3,
										ty: 27.85,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							]
						]
					},
					// 2873
					{
						ref: ref.toufufu.hair_hat,
						transform: {
							tx: 17.45,
							ty: 9.7
						}
					}
				],
				// 2877
				[
					// 2875
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_side,
						transform: {
							tx: 18.35,
							ty: -7.6
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 18.35,
							ty: -7.6
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 12.45,
										ty: 21.1,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 20.45,
										ty: 17.15,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							],
							[
								// 2876
								{
									ref: ref.toufufu.hair_side_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 12.45,
										ty: 21.1,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 20.45,
										ty: 17.15,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							]
						]
					}
				],
				// 2881
				[
					// 2879
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_flat,
						transform: {
							tx: -6.4,
							ty: -3.65
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: -6.4,
							ty: -3.65
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 33.2,
										ty: 21.1,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 46.9,
										ty: 11.25,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							],
							[
								// 2880
								{
									ref: ref.toufufu.hair_flat_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 33.2,
										ty: 21.1,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 46.9,
										ty: 11.25,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							]
						]
					}
				],
				// 2885
				[
					// 2883
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_elvis,
						transform: {
							tx: 8.4,
							ty: 1.35
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 8.4,
							ty: 1.35
						},
						parts: [
							[
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 20.55,
										ty: 15.85,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 37.5,
										ty: 5.35,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							],
							[
								// 2884
								{
									ref: ref.toufufu.hair_elvis_hurt_blood
								},
								// 155
								{
									ref: ref.hurt.scratch,
									transform: {
										tx: 20.55,
										ty: 15.85,
										a: 0.958,
										d: 1.643,
										b: 0.671,
										c: -0.949
									}
								},
								// 2841
								{
									colorIdx: 0,
									ref: ref.toufufu.hair_hurt_bump,
									transform: {
										tx: 37.5,
										ty: 5.35,
										a: 0.966,
										d: 0.966,
										b: 0.259,
										c: -0.259
									}
								}
							]
						]
					}
				]
			]
		}
	],
	// 2892 p5
	left_arm: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 2731
					{
						...arm_hand,
						transform: {
							tx: 32.9,
							ty: 14.45,
							a: 0.6,
							d: -0.604,
							b: 0.462,
							c: 0.457
						}
					},
					// 2890
					{
						transform: {
							tx: 46.5,
							ty: 18.85,
							a: 0.923,
							d: 0.779,
							b: -0.064,
							c: 0.052
						},
						parts: [
							{
								colorIdx: 2,
								ref: ref.toufufu.left_arm,
								transform: {
									tx: -0.6,
									ty: 1.05
								}
							}
						]
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 41.3,
							ty: 12.55
						}
					}
				],
				[
					// 2731
					{
						...arm_hand,
						transform: {
							tx: 24.15,
							ty: 21.15,
							a: 0.721,
							d: -0.723,
							b: 0.23,
							c: 0.223
						}
					},
					// 2890
					{
						transform: {
							tx: 37.85,
							ty: 21.45,
							a: 0.845,
							d: 0.714,
							b: -0.375,
							c: 0.315
						},
						parts: [
							{
								colorIdx: 2,
								ref: ref.toufufu.left_arm,
								transform: {
									tx: -0.6,
									ty: 1.05
								}
							}
						]
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 30.8,
							ty: 17.3,
							a: 0.94,
							d: 0.94,
							b: -0.341,
							c: 0.341
						}
					}
				],
				[
					// 2731
					{
						...arm_hand,
						transform: {
							tx: 15.6,
							ty: 40.25,
							a: 0.729,
							d: -0.727,
							b: -0.203,
							c: -0.209
						}
					},
					// 2890
					{
						transform: {
							tx: 27.4,
							ty: 31.95,
							a: 0.502,
							d: 0.425,
							b: -0.777,
							c: 0.654
						},
						parts: [
							{
								colorIdx: 2,
								ref: ref.toufufu.left_arm,
								transform: {
									tx: -0.6,
									ty: 1.05
								}
							}
						]
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 19.2,
							ty: 32.3,
							a: 0.6,
							d: 0.6,
							b: -0.8,
							c: 0.8
						}
					}
				],
				[
					// 2731
					{
						...arm_hand,
						transform: {
							tx: 16.35,
							ty: 42.1,
							a: 0.71,
							d: -0.708,
							b: -0.263,
							c: -0.269
						}
					},
					// 2890
					{
						transform: {
							tx: 26.65,
							ty: 33.95,
							a: 0.436,
							d: 0.369,
							b: -0.816,
							c: 0.687
						},
						parts: [
							{
								colorIdx: 2,
								ref: ref.toufufu.left_arm,
								transform: {
									tx: -0.6,
									ty: 1.05
								}
							}
						]
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 18.45,
							ty: 34.95,
							a: 0.531,
							d: 0.531,
							b: -0.847,
							c: 0.847
						}
					}
				],
				[
					// 2890
					{
						transform: {
							tx: 26.3,
							ty: 56,
							a: -0.298,
							d: -0.25,
							b: -0.875,
							c: 0.739
						},
						parts: [
							{
								colorIdx: 2,
								ref: ref.toufufu.left_arm,
								transform: {
									tx: -0.6,
									ty: 1.05
								}
							}
						]
					},
					// 2731
					{
						...arm_hand,
						transform: {
							tx: 25.6,
							ty: 69.25,
							a: 0.293,
							d: -0.286,
							b: -0.698,
							c: -0.701
						}
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 21.45,
							ty: 62.6,
							a: -0.257,
							d: -0.257,
							b: -0.966,
							c: 0.966
						}
					}
				],
				[
					// 2755
					{
						colorIdx: 2,
						ref: ref.toufufu.arm_down,
						transform: {
							tx: 44.75,
							ty: 39.7,
							a: 0.352,
							d: -0.342,
							b: 0.66,
							c: 0.637
						}
					},
					// 2759
					{
						transform: {
							tx: 69.95,
							ty: 18.85,
							a: 0.362,
							d: -0.513,
							b: 0.727,
							c: 0.717
						},
						parts: [
							[
								{
									colorIdx: 0,
									ref: ref.toufufu.arm_down_hand,
									transform: {
										a: 1.168,
										d: 1.168
									}
								}
							]
						]
					},
					// 2747
					{
						...arm_fur,
						transform: {
							tx: 80.95,
							ty: 18.9,
							a: 0.117,
							d: 0.191,
							b: 0.968,
							c: -0.906
						}
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
