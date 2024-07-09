// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 821
const left_side_fur_straight = {
	transform: {
		tx: -8.65,
		ty: -0.7
	},
	parts: [
		[
			// 819
			{
				colorIdx: 1,
				ref: ref.castivore.left_side_fur_staight
			},
			//hurt
			{
				partIdx: 2,
				frames: [-1, 0, 1],
				parts: [
					[
						// 155
						{
							ref: ref.hurt.scratch,
							transform: {
								tx: 18.2,
								ty: -9.15,
								a: 2.409,
								d: 2.409
							}
						},
						// 155
						{
							ref: ref.hurt.scratch,
							transform: {
								tx: 48.45,
								ty: -13.05,
								a: -1.073,
								d: -0.879,
								b: -1.729,
								c: 1.416
							}
						},
						// 318
						{
							ref: ref.hurt.scratch_small,
							transform: {
								tx: 43.2,
								ty: -4.05,
								a: 1.893,
								d: 1.893
							}
						}
					],
					[
						// 820
						{
							ref: ref.castivore.body_hurt_blood
						},
						// 155
						{
							ref: ref.hurt.scratch,
							transform: {
								tx: 16.95,
								ty: -4.55,
								a: 2.023,
								d: 2.023
							}
						},
						// 318
						{
							ref: ref.hurt.scratch_small,
							transform: {
								tx: 51.5,
								ty: -14.45,
								a: 2.246,
								d: 2.246,
								b: -1.286,
								c: 1.286
							}
						}
					]
				]
			}
		]
	]
};

export const parts_big = {
	// 811 p3b
	right_side_fur: [
		// 805
		{
			colorIdx: 1,
			ref: ref.castivore.right_side_fur_top,
			transform: {
				tx: 57.65,
				ty: -0.25
			}
		},
		// 807
		{
			partIdx: 3,
			frames: [0, 0, 0, 0, 0, -1, -1, -1, -1, -1],
			transform: {
				tx: -21.55,
				ty: 48.7
			},
			parts: [
				{
					colorIdx: 1,
					ref: ref.castivore.right_side_fur_bottom
				}
			]
		},
		// 810
		{
			partIdx: 3,
			frames: [0, 0, -1, -1, -1, -1, -1, -1, -1, -1],
			transform: {
				tx: 2,
				ty: 40.55
			},
			parts: [
				{
					colorIdx: 1,
					ref: ref.castivore.right_side_fur_roll,
					transform: {
						ty: -1.05,
						a: 0.87,
						d: 0.87,
						b: 0.127,
						c: 0
					}
				}
			]
		}
	],
	// 814 p7b
	right_ear: [
		{
			partIdx: 7,
			frames: [0, 1],
			parts: [
				// 813
				{
					colorIdx: 0,
					ref: ref.castivore.right_ear,
					transform: {
						tx: 0,
						ty: 1,
						a: 1,
						d: 0.853
					}
				},
				// 813
				{
					colorIdx: 0,
					ref: ref.castivore.right_ear,
					transform: {
						tx: -0.85,
						ty: -0.6,
						a: 1,
						d: 1.456
					}
				}
			]
		}
	],
	// 816 col0
	body: [
		{
			colorIdx: 0,
			ref: ref.castivore.body
		}
	],
	// 832 p3a
	left_side_fur: [
		{
			partIdx: 3,
			frames: [0, 0, 1, 1, 1, 2, 2, 2, 3, 3],
			parts: [
				[
					left_side_fur_straight,
					// 823
					{
						colorIdx: 1,
						ref: ref.castivore.left_side_fur_bottom,
						transform: {
							tx: 34.1,
							ty: 13.95
						}
					},
					// 826
					{
						colorIdx: 1,
						ref: ref.castivore.left_side_fur_roll,
						transform: {
							tx: 34.1,
							ty: 7
						}
					},
					// 827
					{
						ref: ref.castivore.left_side_fur_roll_highlight
					}
				],
				[
					left_side_fur_straight,
					// 823
					{
						colorIdx: 1,
						ref: ref.castivore.left_side_fur_bottom,
						transform: {
							tx: 34.1,
							ty: 13.95
						}
					},
					// 828
					{
						ref: ref.castivore.left_side_fur_bottom_highlight
					}
				],
				[
					left_side_fur_straight,
					// 829
					{
						ref: ref.castivore.left_side_fur_highlight
					}
				],
				[
					// 831
					{
						colorIdx: 1,
						ref: ref.castivore.left_side_fur_curly,
						transform: {
							tx: 12.4,
							ty: -3.2
						}
					}
				]
			]
		}
	],
	// 838 p4
	head: [
		// 835
		{
			colorIdx: 1,
			ref: ref.castivore.head,
			transform: {
				tx: -0.4,
				ty: 4.85
			}
		},
		// hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -0.4,
				ty: 4.85
			},
			parts: [
				[
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 14.45,
							ty: 0,
							a: 2.52,
							d: 2.52
						}
					}
				],
				[
					// 836
					{
						ref: ref.castivore.head_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: -19.85,
							ty: -6.35,
							a: 1.424,
							d: 2.045
						}
					}
				]
			]
		}
	],
	// 846 p5
	eyes: [
		// 842
		{
			partIdx: 1,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
			transform: {
				tx: -1.35,
				ty: 2.6
			},
			parts: [
				// 839
				{
					ref: ref.castivore.eyes_young
				},
				// 840
				{
					ref: ref.castivore.eyes_adult
				},
				// 841
				{
					ref: ref.castivore.eyes_demon
				}
			]
		},
		// 844
		{
			colorIdx: 0,
			ref: ref.castivore.eyes_eyebrows
		},
		// 845
		{
			ref: ref.castivore.eyes_eyebrows_highlight
		}
	],
	// 863 p8
	back_fur: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 5, 5],
			parts: [
				[
					// 848
					{
						colorIdx: 1,
						ref: ref.castivore.back_shaved
					}
				],
				[
					// 849
					{
						ref: ref.castivore.back_bald,
						blend: BLEND_MODES.ADD,
						alpha: 0.44,
						glow: {
							distance: 5,
							color: 0xff0000,
							quality: 0.5,
							strength: 2
						}
					}
				],
				[
					// 852
					{
						colorIdx: 1,
						ref: ref.castivore.back_fur,
						transform: {
							tx: 21.65,
							ty: 1.9
						}
					}
				],
				[
					// 852
					{
						colorIdx: 1,
						ref: ref.castivore.back_fur,
						transform: {
							tx: 21.65,
							ty: 1.9
						}
					},
					// 854
					{
						colorIdx: 1,
						ref: ref.castivore.back_fur_knot,
						transform: {
							tx: 11.2,
							ty: -17.65
						}
					},
					// 855
					{
						ref: ref.castivore.back_fur_knot_highlight
					}
				],
				[
					// 858
					{
						colorIdx: 1,
						ref: ref.castivore.back_fur_long,
						transform: {
							tx: 10.8,
							ty: 5.85
						}
					},
					// 859
					{
						ref: ref.castivore.back_fur_long_highlight
					}
				],
				[
					// 861
					{
						colorIdx: 1,
						ref: ref.castivore.back_fur_short,
						transform: {
							tx: 0.55,
							ty: 0.05
						}
					},
					// 862
					{
						ref: ref.castivore.back_fur_short_highlight
					}
				]
			]
		}
	],
	// 869 p7a
	left_ear: [
		{
			partIdx: 7,
			frames: [0, 1],
			parts: [
				[
					// 866
					{
						colorIdx: 0,
						ref: ref.castivore.left_ear,
						transform: {
							ty: 1.4,
							a: 1,
							d: 0.846
						}
					},
					// 868
					{
						colorIdx: 1,
						ref: ref.castivore.left_ear_fur,
						transform: {
							tx: -3.5,
							ty: 7.75
						}
					}
				],
				[
					// 866
					{
						colorIdx: 0,
						ref: ref.castivore.left_ear,
						transform: {
							tx: 0.2,
							ty: -1.65,
							a: 1,
							d: 1.201,
							b: -0.238,
							c: 0
						}
					},
					// 868
					{
						colorIdx: 1,
						ref: ref.castivore.left_ear_fur,
						transform: {
							tx: -4.1,
							ty: 7.95
						}
					}
				]
			]
		}
	],
	// 873 p9
	nose: [
		{
			partIdx: 9,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			parts: [
				[
					// 871
					{
						ref: ref.castivore.nose,
						transform: {
							tx: 0.05,
							ty: -0.35,
							a: 0.783,
							d: 0.783
						},
						colorOffset: {
							r: -46,
							g: -87,
							b: -82
						}
					},
					// 872
					{
						ref: ref.castivore.nose_highlight,
						transform: {
							tx: 0.05,
							ty: -0.3,
							a: 0.781,
							d: 0.791
						}
					}
				],
				[
					// 871
					{
						ref: ref.castivore.nose,
						colorOffset: {
							r: -46,
							g: -87,
							b: -82
						}
					},
					// 872
					{
						ref: ref.castivore.nose_highlight
					}
				]
			]
		}
	],
	// 878 special
	bow: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				[
					// 875
					{
						colorIdx: 1,
						ref: ref.castivore.bow_hair,
						transform: {
							tx: -5.05,
							ty: 19.1
						}
					},
					// 877
					{
						ref: ref.castivore.bow,
						transform: {
							tx: -1.05,
							ty: 29.4,
							a: 0.852,
							d: 0.852
						}
					}
				]
			]
		}
	],
	// 931 p4b
	mouth: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, -1, 4, 5, 6, 7, 8, 9],
			parts: [
				[
					// 879
					{
						ref: ref.castivore.mouth_fangs
					},
					// 881
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_fangs_lips,
						transform: {
							tx: 40.7,
							ty: 5.7
						}
					},
					// 884
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_fangs_lips,
						transform: {
							tx: 43.5,
							ty: 9.2
						}
					},
					// 785
					{
						ref: ref.castivore.mouth_fangs_lips_highlight
					}
				],
				[
					// 887
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_fangs_big_fur_bottom,
						transform: {
							tx: 42.6,
							ty: 22.25
						}
					},
					// 889
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_fangs_big_lips,
						transform: {
							tx: 40.9,
							ty: 10.95
						}
					},
					// 890
					{
						ref: ref.castivore.mouth_fangs_big
					}
				],
				[
					// 891
					{
						ref: ref.castivore.mouth_fangs_sharp
					},
					// 894
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_fangs_sharp_fur,
						transform: {
							tx: 40.25,
							ty: 14.55
						}
					}
				],
				[
					// 897
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_moustache,
						transform: {
							tx: 46.65,
							ty: 4.95
						}
					}
				],
				[
					// 900
					{
						ref: ref.castivore.mouth_teeth,
						transform: {
							tx: 42.55,
							ty: 6.7
						}
					},
					//hurt
					{
						partIdx: 2,
						frames: [-1, -1, 0],
						transform: {
							tx: 42.55,
							ty: 6.7
						},
						parts: [
							// 899
							{
								ref: ref.castivore.mouth_teeth_hurt_blood
							}
						]
					},
					// 903
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_teeth_fur,
						transform: {
							tx: 43.1,
							ty: 1.8
						}
					}
				],
				[
					// 905
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_teeth_big_fur_bottom,
						transform: {
							tx: 44.95,
							ty: 14.5
						}
					},
					// 908
					{
						partIdx: 2,
						frames: [0, 0, 1],
						transform: {
							tx: 44.5,
							ty: 7.85
						},
						parts: [
							// 906
							{
								ref: ref.castivore.mouth_teeth_big
							},
							// 907
							{
								ref: ref.castivore.mouth_teeth_big_hurt
							}
						]
					},
					// 911
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_teeth_big_fur,
						transform: {
							tx: 42.05,
							ty: 2.25
						}
					}
				],
				[
					// 913
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_lips_fur_bottom,
						transform: {
							tx: 46.45,
							ty: 19.75
						}
					},
					// 916
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_lips,
						transform: {
							tx: 45.7,
							ty: 6.85
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, -1, 0],
						transform: {
							tx: 45.7,
							ty: 6.85
						},
						parts: [
							// 354
							{
								ref: ref.hurt.scratch_blood_small,
								transform: {
									tx: 0.25,
									ty: 4.3,
									a: 0.684,
									d: 0.684,
									b: 0.28,
									c: -0.28
								}
							}
						]
					},
					// 917
					{
						ref: ref.castivore.mouth_lips_teeth
					},
					// 919
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_lips_fur,
						transform: {
							tx: 47.2,
							ty: 6.8
						}
					}
				],
				[
					// 921
					{
						colorIdx: 0,
						ref: ref.castivore.mouth_lips_small,
						transform: {
							tx: 43.3,
							ty: 7.9
						}
					},
					// 925
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_lips_small_fur,
						transform: {
							tx: 46.85,
							ty: 10.25
						}
					},
					// hurt
					{
						partIdx: 2,
						frames: [-1, 0, 1],
						transform: {
							tx: 46.85,
							ty: 10.25
						},
						parts: [
							[
								// 318
								{
									ref: ref.hurt.scratch_small,
									transform: {
										tx: 2.8,
										ty: -6.25,
										a: 1.37,
										d: 1.37,
										b: -1.045,
										c: 1.045
									}
								}
							],
							[
								// 924
								{
									ref: ref.castivore.mouth_lips_small_hurt_blood
								},
								// 357
								{
									ref: ref.hurt.bruise_purple,
									transform: {
										tx: 3.35,
										ty: -3.3,
										a: 1.289,
										d: 1.289
									}
								}
							]
						]
					}
				],
				[
					// 927
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_dandy_moustache,
						transform: {
							tx: 48.15,
							ty: -5.15
						}
					}
				],
				[
					// 928
					{
						ref: ref.castivore.mouth_dual_teeth
					},
					// 930
					{
						colorIdx: 1,
						ref: ref.castivore.mouth_dual_teeth_fur,
						transform: {
							tx: 42.4,
							ty: 0.95
						}
					}
				]
			]
		}
	],
	// 961 p6
	hair: [
		{
			partIdx: 6,
			frames: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
			parts: [
				[
					// 934
					{
						colorIdx: 1,
						ref: ref.castivore.hair,
						transform: {
							tx: 0.05,
							ty: -1.35
						}
					},
					// 935
					{
						ref: ref.castivore.hair_highlight
					}
				],
				[
					// 938
					{
						colorIdx: 1,
						ref: ref.castivore.hair_messy,
						transform: {
							tx: 4.3,
							ty: 2.95
						}
					},
					// 939
					{
						ref: ref.castivore.hair_messy_highlight
					}
				],
				[
					// 942
					{
						colorIdx: 1,
						ref: ref.castivore.hair_sides,
						transform: {
							tx: 5.85,
							ty: 11.85
						}
					},
					// 943
					{
						ref: ref.castivore.hair_spike_highlight
					}
				],
				[
					// 946
					{
						colorIdx: 1,
						ref: ref.castivore.hair_spike,
						transform: {
							tx: 7.1,
							ty: -24.05
						}
					}
				],
				[
					// 946
					{
						colorIdx: 1,
						ref: ref.castivore.hair_spike,
						transform: {
							tx: 7.1,
							ty: -24.05
						}
					},
					// 947
					{
						colorIdx: 2,
						ref: ref.castivore.hair_spike_highlight_1,
						transform: {
							tx: 7.1,
							ty: -24.05
						}
					},
					// 949
					{
						colorIdx: 2,
						ref: ref.castivore.hair_spike_highlight_2,
						transform: {
							tx: 7.45,
							ty: -15
						},
						alpha: 0.33
					},
					// 951
					{
						colorIdx: 2,
						ref: ref.castivore.hair_spike_highlight_3,
						transform: {
							tx: 3.15,
							ty: -18.85
						},
						alpha: 0.66
					}
				],
				[
					// 955
					{
						colorIdx: 1,
						ref: ref.castivore.hair_long,
						transform: {
							tx: 11.6,
							ty: 0.3
						}
					},
					// 956
					{
						ref: ref.castivore.hair_long_highlight
					}
				],
				[
					// 959
					{
						colorIdx: 1,
						ref: ref.castivore.hair_pompadour,
						transform: {
							tx: 1.95,
							ty: -6.05
						}
					},
					// 960
					{
						ref: ref.castivore.hair_pompadour_highlight
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
