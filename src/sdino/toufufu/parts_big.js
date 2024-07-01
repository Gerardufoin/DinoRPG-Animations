// @ts-check
import { ref } from '../references_big.js';

// 2731
const right_arm_hand = {
	partIdx: 9,
	frames: [0, 1, 2, 3, 4],
	parts: [
		// 2722
		{
			colorIdx: 0,
			ref: ref.toufufu.right_arm_hand,
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
			ref: ref.toufufu.right_arm_hand_fist,
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
			ref: ref.toufufu.right_arm_hand_spock,
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
			ref: ref.toufufu.right_arm_hand_flip,
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
			ref: ref.toufufu.right_arm_hand_metal,
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
const right_arm_fur = {
	partIdx: 4,
	frames: [0, 1, 2, 3, 4, 5],
	parts: [
		// 2736
		{
			colorIdx: 1,
			ref: ref.toufufu.right_arm_fur,
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
			ref: ref.toufufu.right_arm_fur_star,
			transform: {
				tx: -3,
				ty: -5.15
			}
		},
		// 2740
		{
			colorIdx: 1,
			ref: ref.toufufu.right_arm_fur_round,
			transform: {
				tx: -3.2,
				ty: -1.4
			}
		},
		// 2742
		{
			colorIdx: 1,
			ref: ref.toufufu.right_arm_fur_arc,
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
			ref: ref.toufufu.right_arm_fur_leaf,
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
			ref: ref.toufufu.right_arm_fur_fire,
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
									colorIdx: 1,
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
									colorIdx: 1,
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
									colorIdx: 1,
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
						ref: ref.toufufu.folded_foot,
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
									colorIdx: 1,
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
						...right_arm_hand,
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
						...right_arm_fur,
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
						...right_arm_fur,
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
						...right_arm_hand,
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
						...right_arm_fur,
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
						ref: ref.toufufu.right_arm_down,
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
									ref: ref.toufufu.right_arm_down_hand,
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
						...right_arm_fur,
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
	eyes: [],
	// 2837 p8
	mouth: [],
	// 2886 p7a
	hair: [],
	// 2892 p5
	left_arm: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
