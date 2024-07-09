// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 978
const right_hand = {
	partIdx: 8,
	frames: [0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 3],
	parts: [
		[
			// 964
			{
				colorIdx: 0,
				ref: ref.rocky.right_hand
			}
		],
		[
			// 964
			{
				colorIdx: 0,
				ref: ref.rocky.right_hand
			},
			// 970
			{
				transform: {
					tx: 10.7,
					ty: 7.7,
					a: 0.839,
					d: 0.839,
					b: 0.839,
					c: -0.839
				},
				parts: [
					[
						// 966
						{
							colorIdx: 0,
							ref: ref.rocky.right_hand_gold_shadow,
							glow: {
								distance: 5,
								color: 0xffff00,
								quality: 1,
								strength: 1
							}
						},
						// 967
						{
							ref: ref.rocky.right_hand_gold
						},
						// 969
						{
							ref: ref.rocky.right_hand_gold_highlight,
							transform: {
								tx: -1.6,
								ty: -0.9
							},
							blend: BLEND_MODES.ADD
						}
					]
				]
			}
		],
		[
			// 971
			{
				colorIdx: 0,
				ref: ref.rocky.right_hand_arm,
				transform: {
					tx: 29.65,
					ty: -5.1
				}
			},
			// 975
			{
				partIdx: 7,
				frames: [0, 1, 1, 2, 2],
				transform: {
					tx: 29.65,
					ty: -5.1
				},
				parts: [
					// 972
					{
						colorIdx: 0,
						ref: ref.rocky.right_hand_arm_cross
					},
					// 973
					{
						colorIdx: 0,
						ref: ref.rocky.right_hand_arm_spiral
					},
					// 974
					{
						colorIdx: 0,
						ref: ref.rocky.right_hand_arm_flower
					}
				]
			}
		],
		[
			// 977
			{
				colorIdx: 0,
				ref: ref.rocky.right_hand_sun,
				transform: {
					tx: 19.2,
					ty: -10.15
				}
			}
		]
	]
};

// 989
const top = {
	partIdx: 4,
	frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, -1, -1, -1],
	parts: [
		// 988
		{
			partIdx: 6,
			frames: [0, 0, 0, 0, 1, 0, 0, 0],
			transform: {
				tx: 0.95,
				ty: 2.1
			},
			parts: [
				// 980
				{
					partIdx: 7,
					frames: [0, -1, -1, -1, -1],
					transform: {
						tx: -0.8,
						ty: -6.5
					},
					parts: [
						// 979
						{
							colorIdx: 0,
							ref: ref.rocky.top_cross
						}
					]
				},
				// 987
				{
					partIdx: 8,
					frames: [0, -1],
					parts: [
						[
							// 982
							{
								ref: ref.rocky.top_fountain_water_back,
								transform: {
									tx: -4.4,
									ty: 4.05
								},
								alpha: 0.35
							},
							// 984
							{
								colorIdx: 0,
								ref: ref.rocky.top_fountain,
								transform: {
									tx: 0,
									ty: 0.05
								}
							},
							// 985
							{
								ref: ref.rocky.top_fountain_water
							}
						]
					]
				}
			]
		}
	]
};

// 995
const body_rip = {
	partIdx: 7,
	frames: [0, -1, -1, -1, -1],
	parts: [
		// 994
		[
			{
				colorIdx: 0,
				ref: ref.rocky.body_rip,
				flippable: 1
			},
			{
				colorIdx: 0,
				ref: ref.rocky.body_rip_flip,
				flippable: -1
			}
		]
	]
};

// 996
const body_rip_alt = {
	partIdx: 6,
	frames: [0, 0, 0, 0, -1, 0, 0, 0],
	parts: [
		{
			...body_rip,
			transform: {
				tx: -0.25,
				ty: -0.25
			}
		}
	]
};

// 1015
const body_big = {
	partIdx: 4,
	frames: [0, 1, 0, 2, 3, 2, 4, 5, 4, 6, 6, 6, 7, 8, 9, 10, 10, 11],
	parts: [
		[
			// 991
			{
				colorIdx: 0,
				ref: ref.rocky.body_rect
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -54.5
				}
			}
		],
		[
			// 991
			{
				colorIdx: 0,
				ref: ref.rocky.body_rect
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -54.5
				}
			},
			// 997
			{
				ref: ref.rocky.body_rect_moss
			}
		],
		[
			// 999
			{
				colorIdx: 0,
				ref: ref.rocky.body_rect_old
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -54.5
				}
			}
		],
		[
			// 999
			{
				colorIdx: 0,
				ref: ref.rocky.body_rect_old
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -54.5
				}
			},
			// 1000
			{
				ref: ref.rocky.body_rect_old_moss
			}
		],
		[
			// 1002
			{
				colorIdx: 0,
				ref: ref.rocky.body_tombstone
			},
			// 995
			{
				...body_rip,
				transform: {
					tx: -6.65,
					ty: -49.3
				}
			}
		],
		[
			// 1002
			{
				colorIdx: 0,
				ref: ref.rocky.body_tombstone
			},
			// 995
			{
				...body_rip,
				transform: {
					tx: -6.65,
					ty: -49.3
				}
			},
			// 1003
			{
				ref: ref.rocky.body_tombstone_moss
			}
		],
		[
			// 1005
			{
				colorIdx: 0,
				ref: ref.rocky.body_egypt
			}
		],
		[
			// 1007
			{
				colorIdx: 0,
				ref: ref.rocky.body_tablet
			},
			// 995
			{
				...body_rip,
				transform: {
					tx: -7.55,
					ty: -47.75,
					b: -0.046,
					c: 0
				}
			}
		],
		[
			// 1007
			{
				colorIdx: 0,
				ref: ref.rocky.body_tablet
			},
			// 995
			{
				...body_rip,
				transform: {
					tx: -7.55,
					ty: -47.75,
					b: -0.046,
					c: 0
				}
			},
			// 1008
			{
				ref: ref.rocky.body_tablet_moss
			}
		],
		[
			// 1010
			{
				colorIdx: 0,
				ref: ref.rocky.body_tablet_hole
			},
			// 995
			{
				...body_rip,
				transform: {
					tx: -7.55,
					ty: -47.75,
					b: -0.046,
					c: 0
				}
			}
		],
		[
			// 1012
			{
				colorIdx: 0,
				ref: ref.rocky.body_pillar,
				transform: {
					tx: -0.15,
					ty: 7.15
				}
			}
		],
		[
			// 1012
			{
				colorIdx: 0,
				ref: ref.rocky.body_pillar,
				transform: {
					tx: -0.15,
					ty: 7.15
				}
			},
			// 1014
			{
				colorIdx: 0,
				ref: ref.rocky.body_pillar_top,
				transform: {
					tx: 3.45,
					ty: -58.85
				}
			}
		]
	]
};

// 1018
const eyes_default = [
	// 1018
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		transform: {
			tx: -2.85,
			ty: -5.2
		},
		parts: [
			// 1016
			{
				ref: ref.rocky.eyes
			},
			// 1017
			{
				ref: ref.rocky.eyes_demon
			}
		]
	},
	// 1020
	{
		colorIdx: 0,
		ref: ref.rocky.eyes_sockets
	}
];

// 1028
const eyes_serious = [
	// 1028
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		transform: {
			tx: -1.5,
			ty: -4.45
		},
		parts: [
			// 1026
			{
				ref: ref.rocky.eyes
			},
			// 1027
			{
				ref: ref.rocky.eyes_demon
			}
		]
	},
	// 1030
	{
		colorIdx: 0,
		ref: ref.rocky.eyes_serious_sockets,
		transform: {
			tx: -0.7,
			ty: -9.45
		}
	}
];

const eyes_big = [
	// 1039
	{
		partIdx: 1,
		frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		transform: {
			tx: -0.3,
			ty: -19.05
		},
		parts: [
			// 1037
			{
				ref: ref.rocky.eyes_big
			},
			// 1038
			{
				ref: ref.rocky.eyes_big_demon
			}
		]
	},
	// 1042
	{
		partIdx: 3,
		frames: [0, 1],
		transform: {
			tx: 1.5,
			ty: -7.2,
			a: 0.997,
			d: 1,
			b: 0.089,
			c: -0.031
		},
		parts: [
			// 1040
			{
				colorIdx: 0,
				ref: ref.rocky.eyes_big_sockets_long_nose
			},
			// 1041
			{
				colorIdx: 0,
				ref: ref.rocky.eyes_big_sockets_small_nose
			}
		]
	}
];

// 1044
const eyes = {
	partIdx: 5,
	frames: [0, 1, 2, 3, 3, 4, 5, 6, 7],
	parts: [
		eyes_default,
		[
			...eyes_default,
			// 1021
			{
				ref: ref.rocky.eyes_sockets_moss
			}
		],
		[
			...eyes_default,
			// 1023
			{
				colorIdx: 0,
				ref: ref.rocky.eyes_sockets_leaves_shadow,
				transform: {
					tx: 16.25,
					ty: -20.15
				}
			},
			// 1025
			{
				colorIdx: 2,
				ref: ref.rocky.eyes_sockets_leaves,
				transform: {
					tx: 19.95,
					ty: -26.6
				}
			}
		],
		eyes_serious,
		[
			...eyes_serious,
			// 1031
			{
				ref: ref.rocky.eyes_serious_sockets_moss
			}
		],
		[
			// 1034
			{
				partIdx: 1,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				transform: {
					tx: 0.35,
					ty: -9.6
				},
				parts: [
					// 1032
					{
						ref: ref.rocky.eyes_cyclop
					},
					// 1033
					{
						ref: ref.rocky.eyes_cyclop_demon
					}
				]
			},
			// 1036
			{
				colorIdx: 0,
				ref: ref.rocky.eyes_cyclop_sockets,
				transform: {
					tx: -32.65,
					ty: 2.95,
					b: -0.041,
					c: 0
				}
			}
		],
		eyes_big,
		[
			...eyes_big,
			// 1043
			{
				ref: ref.rocky.eyes_big_sockets_moss
			}
		]
	]
};

// 1092
const mouth = {
	partIdx: 6,
	frames: [0, 1, 2, 3, 4, 5, 6, 3],
	parts: [
		[
			// 1048
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				parts: [
					// 1045
					{
						colorIdx: 0,
						ref: ref.rocky.mouth
					},
					// 1046
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_open
					}
				]
			}
		],
		[
			// 1052
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				transform: {
					tx: 1.9,
					ty: 9.45
				},
				parts: [
					// 1049
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_square
					},
					// 1050
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_square_open
					}
				]
			}
		],
		[
			// 1058
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				transform: {
					tx: 1.6,
					ty: 15.95
				},
				parts: [
					// 1054
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_square_2,
						transform: {
							tx: 1.4,
							ty: 3.05
						}
					},
					[
						// 1056
						{
							colorIdx: 0,
							ref: ref.rocky.mouth_square_2_open,
							transform: {
								tx: 1.6,
								ty: -10.65
							}
						},
						// 1057
						{
							ref: ref.rocky.mouth_square_2_open_teeth
						}
					]
				]
			}
		],
		[
			// 1062
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				transform: {
					tx: 1.65,
					ty: 14
				},
				parts: [
					// 1059
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_big
					},
					// 1060
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_big_open
					}
				]
			}
		],
		[
			// 1080
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, -1, 2, 2, 2],
				transform: {
					tx: -7.95,
					ty: 3.35
				},
				parts: [
					// 1076
					[
						// 1064
						{
							ref: ref.rocky.mouth_fountain_moss,
							transform: {
								tx: 9.6,
								ty: -10.6
							},
							blur: {
								x: 0,
								y: 2,
								quality: 1
							}
						},
						// 1064
						{
							ref: ref.rocky.mouth_fountain_moss,
							transform: {
								tx: 9.6,
								ty: -10.6
							},
							alpha: 0.36,
							blend: BLEND_MODES.MULTIPLY
						},
						{
							partIdx: 3,
							frames: [0, 1],
							parts: [
								[
									// 1066
									{
										colorIdx: 0,
										ref: ref.rocky.mouth_fountain_for_faucet,
										transform: {
											tx: 0.05,
											ty: 11.05
										}
									},
									// 1068
									{
										ref: ref.rocky.mouth_fountain_faucet,
										transform: {
											tx: 6.55,
											ty: -27.4
										},
										colorOffset: {
											r: -36,
											g: -41,
											b: -41
										}
									},
									// 1070
									{
										ref: ref.rocky.mouth_fountain_water,
										transform: {
											tx: -2.4,
											ty: -8.15
										},
										alpha: 0.78
									},
									// 1071
									{
										ref: ref.rocky.mouth_fountain_water_highlight,
										transform: {
											tx: -2.4,
											ty: -8.15
										},
										alpha: 0.17,
										blend: BLEND_MODES.ADD
									},
									// 1073
									{
										ref: ref.rocky.mouth_fountain_faucet_highlight
									}
								],
								[
									// 1075
									{
										colorIdx: 0,
										ref: ref.rocky.mouth_fountain,
										transform: {
											tx: 0.05,
											ty: 11.05
										}
									},
									// 1070
									{
										ref: ref.rocky.mouth_fountain_water,
										transform: {
											tx: -2.4,
											ty: -8.15
										}
									},
									// 1071
									{
										ref: ref.rocky.mouth_fountain_water_highlight,
										transform: {
											tx: -2.4,
											ty: -8.15
										},
										alpha: 0.17,
										blend: BLEND_MODES.ADD
									}
								]
							]
						}
					],
					// 1077
					{
						ref: ref.rocky.mouth_crack
					},
					// 1079
					{
						colorIdx: 0,
						ref: ref.rocky.mouth_alt,
						transform: {
							tx: 7.3
						}
					}
				]
			}
		],
		[
			// 1087
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				parts: [
					[
						// 1079
						{
							colorIdx: 0,
							ref: ref.rocky.mouth_alt
						},
						// 1082
						{
							colorIdx: 2,
							ref: ref.rocky.mouth_alt_leaves,
							transform: {
								tx: -3.8,
								ty: 23.45
							}
						}
					],
					[
						// 1084
						{
							colorIdx: 2,
							ref: ref.rocky.mouth_open_alt_leaves,
							transform: {
								tx: -0.9,
								ty: 24.2
							}
						},
						// 1086
						{
							colorIdx: 0,
							ref: ref.rocky.mouth_open_alt,
							transform: {
								tx: 1.85,
								ty: -18.1
							}
						}
					]
				]
			}
		],
		[
			// 1091
			{
				partIdx: 4,
				frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				transform: {
					tx: 1.6,
					ty: 15.95
				},
				parts: [
					[
						// 1054
						{
							colorIdx: 0,
							ref: ref.rocky.mouth_square_2,
							transform: {
								tx: 1.4,
								ty: 3.05
							}
						},
						// 1089
						{
							colorIdx: 2,
							ref: ref.rocky.mouth_square_2_leaves,
							transform: {
								tx: 5.55,
								ty: -14.7
							}
						}
					],
					[
						// 1056
						{
							colorIdx: 0,
							ref: ref.rocky.mouth_square_2_open,
							transform: {
								tx: 1.6,
								ty: -10.65
							}
						},
						// 1057
						{
							ref: ref.rocky.mouth_square_2_open_teeth
						}
					]
				]
			}
		]
	]
};

// 1102
const left_hand = {
	partIdx: 8,
	frames: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2],
	parts: [
		[
			// 1094
			{
				colorIdx: 0,
				ref: ref.rocky.left_hand,
				transform: {
					tx: 18.05,
					ty: 64.2
				}
			}
		],
		[
			// 1095
			{
				colorIdx: 0,
				ref: ref.rocky.left_hand_arm,
				transform: {
					tx: 3.45,
					ty: 53.25
				}
			},
			// 1099
			{
				partIdx: 7,
				frames: [0, 1, 1, 2, 2],
				transform: {
					tx: 3.45,
					ty: 53.25
				},
				parts: [
					// 1096
					{
						colorIdx: 0,
						ref: ref.rocky.left_hand_arm_cross
					},
					// 1097
					{
						colorIdx: 0,
						ref: ref.rocky.left_hand_arm_spiral
					},
					// 1098
					{
						colorIdx: 0,
						ref: ref.rocky.left_hand_arm_flower
					}
				]
			}
		],
		[
			// 1101
			{
				colorIdx: 0,
				ref: ref.rocky.left_hand_sun,
				transform: {
					tx: 9.4,
					ty: 50.9
				}
			}
		]
	]
};

// 1115
const body_small = {
	partIdx: 4,
	frames: [0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 6, 6, 7],
	parts: [
		[
			// 1103
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_rect,
				transform: {
					tx: -0.4,
					ty: 9.1
				}
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -36.35
				}
			}
		],
		[
			// 1106
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_rect_old,
				transform: {
					tx: -0.4,
					ty: 9.1
				}
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -36.35
				}
			}
		],
		[
			// 1108
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_tombstone,
				transform: {
					tx: -1.35,
					ty: 11.15
				}
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -7,
					ty: -30.65
				}
			}
		],
		[
			// 1110
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_egypt
			}
		],
		[
			// 1104
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_rect,
				transform: {
					tx: -0.4,
					ty: 9.1
				}
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -36.35
				}
			}
		],
		[
			// 1112
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_tablet_hole,
				transform: {
					tx: -0.4,
					ty: 9.1
				}
			},
			// 996
			{
				...body_rip_alt,
				transform: {
					tx: -5.8,
					ty: -36.35
				}
			}
		],
		[
			// 1114
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_pillar,
				transform: {
					tx: -0.15,
					ty: 7.15
				}
			}
		],
		[
			// 1114
			{
				colorIdx: 0,
				ref: ref.rocky.body_small_pillar,
				transform: {
					tx: -0.15,
					ty: 7.15
				}
			},
			// 1014
			{
				colorIdx: 0,
				ref: ref.rocky.body_pillar_top,
				transform: {
					tx: 2.05,
					ty: -40.45
				}
			}
		]
	]
};

export const parts_big = {
	// 1116 p3
	body: [
		{
			partIdx: 3,
			frames: [0, 1],
			parts: [
				[
					// 978
					{
						...right_hand,
						transform: {
							tx: -70.4,
							ty: 5.9
						}
					},
					// 989
					{
						...top,
						transform: {
							tx: 1.15,
							ty: -69.25
						}
					},
					// 1115
					{
						...body_big,
						transform: {
							tx: -3
						}
					},
					// 1044
					{
						...eyes,
						transform: {
							tx: -11,
							ty: -17.05
						}
					},
					// 1092
					{
						...mouth,
						transform: {
							tx: -19.8,
							ty: 24.5
						}
					},
					// 1102
					{
						...left_hand,
						transform: {
							tx: 43.8,
							ty: -48.85
						}
					}
				],
				[
					// 978
					{
						...right_hand,
						transform: {
							tx: -62.8,
							ty: 9.7,
							a: 0.858,
							d: 0.858
						}
					},
					// 989
					{
						...top,
						transform: {
							tx: -0.35,
							ty: -50.65
						}
					},
					// 1015
					{
						...body_small,
						transform: {
							tx: -3
						}
					},
					// 1044
					{
						...eyes,
						transform: {
							tx: -11,
							ty: 2.75
						}
					},
					// 1092
					{
						...mouth,
						transform: {
							tx: -19.8,
							ty: 24.5
						}
					},
					// 1102
					{
						...left_hand,
						transform: {
							tx: 38.35,
							ty: -34.65,
							a: 0.847,
							d: 0.847
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
