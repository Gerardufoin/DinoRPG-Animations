// @ts-check
import { ref } from '../references.js';

export let transforms = [
	// 1033
	{
		partIdx: 1,
		transforms: [
			{
				tx: 0.35,
				ty: 1.7,
				a: 1.007,
				d: 1.007,
				brightness: 10,
				contrast: 5
			},
			{
				tx: 0.5,
				ty: 1.45,
				a: 1.038,
				b: -0.005,
				c: 0.005,
				d: 1.038,
				brightness: 9,
				contrast: 5
			},
			{
				tx: 0.6,
				ty: 1.2,
				a: 1.068,
				b: -0.015,
				c: 0.015,
				d: 1.068,
				brightness: 8,
				contrast: 3
			},
			{
				tx: 0.75,
				ty: 0.95,
				a: 1.099,
				b: -0.024,
				c: 0.024,
				d: 1.099,
				brightness: 7,
				contrast: 3
			},
			{
				tx: 0.9,
				ty: 0.75,
				a: 1.129,
				b: -0.035,
				c: 0.035,
				d: 1.129,
				brightness: 6,
				contrast: 2
			},
			{
				tx: 1,
				ty: 0.5,
				a: 1.16,
				b: -0.042,
				c: 0.042,
				d: 1.16,
				brightness: 4,
				contrast: 2
			},
			{
				tx: 1.15,
				ty: 0.25,
				a: 1.19,
				b: -0.053,
				c: 0.053,
				d: 1.19,
				brightness: 3,
				contrast: 1
			},
			{
				tx: 1.2,
				ty: 0,
				a: 1.22,
				b: -0.064,
				c: 0.064,
				d: 1.22,
				brightness: 2,
				contrast: 1
			},
			{
				tx: 1.4,
				ty: -0.3,
				a: 1.251,
				b: -0.077,
				c: 0.077,
				d: 1.251,
				brightness: 1
			},
			{
				tx: 1.5,
				ty: -0.65,
				a: 1.281,
				b: -0.09,
				c: 0.09,
				d: 1.281
			}
		]
	},
	// 1642
	{
		tx: -2.4,
		ty: 1.25
	}
];

export let palette = [
	[
		// col0
		['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82'],
		// col1
		['#FFAA1E', '#DF7E37', '#D1F49B', '#BBDB71', '#9273DB', '#71ECDF', '#FFFF5E', '#FF9191', '#D6FF61'],
		// col2
		['#DF7E37', '#B85F1D', '#CC5858', '#97CBFF', '#9273DB', '#CC7695', '#FFFF5E', '#FF9191', '#D6FF61'],
		// col3
		['#FFCC79', '#DBB576', '#FFF9AE', '#F0DC99']
	]
];

// 1047 p4
const stinger = {
	partIdx: 4,
	frames: [0, 1, 1],
	parts: [
		// 1046
		{
			colorIdx: 0,
			ref: ref.soufflet.butt_stinger
		},
		// 1046
		{
			colorIdx: 0,
			ref: ref.soufflet.butt_stinger,
			transform: {
				tx: 0.3,
				ty: 0.4,
				a: 1.472,
				d: 1.472
			}
		}
	]
};

// 1085 p5b
const right_antennae = {
	partIdx: 5,
	frames: [0, 1, 2, 3],
	parts: [
		// 1078
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae,
			transform: {
				tx: -4.85,
				ty: -2.8
			}
		},
		// 1080
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae_straight,
			transform: {
				tx: -3.5,
				ty: -1.7
			}
		},
		// 1082
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae_big,
			transform: {
				tx: -1.65,
				ty: -3.75,
				a: 0.966,
				d: 0.966,
				b: 0.259,
				c: -0.259
			}
		},
		// 1084
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae_broken,
			transform: {
				tx: -4.55,
				ty: -2.25,
				a: -0.644,
				d: 0.644,
				b: -0.763,
				c: -0.763
			}
		}
	]
};

// 1089 p5b
const left_antennae = {
	partIdx: 5,
	frames: [0, 1, 2, 3],
	parts: [
		// 1078
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae,
			transform: {
				tx: -5.25,
				ty: -2.1
			}
		},
		// 1080
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae_straight,
			transform: {
				tx: -3.9,
				ty: -1.0
			}
		},
		// 1082
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae_big,
			transform: {
				tx: -1.05,
				ty: -2.85
			}
		},
		// 1088
		{
			colorIdx: 0,
			ref: ref.soufflet.antennae_side,
			transform: {
				tx: 3.5,
				ty: 2.1
			}
		}
	]
};

export let parts = {
	// 1071
	head: [
		// 1070
		{
			colorIdx: 0,
			ref: ref.soufflet.head
		}
	],
	// 1092
	butt: [
		// 1068 p3
		{
			partIdx: 3,
			frames: [0, 1, 2, 3],
			transform: {
				tx: -4.3,
				ty: -0.4,
				a: 0.831,
				d: 0.831,
				b: -0.165,
				c: 0.165
			},
			parts: [
				[
					// 1047 p4
					{
						...stinger,
						transform: {
							tx: 11.4,
							ty: 9.4,
							a: 0.866,
							d: 0.866,
							b: 0.5,
							c: -0.5
						}
					},
					// 1048
					{
						ref: ref.soufflet.butt_end
					},
					// 1050
					{
						colorIdx: 1,
						ref: ref.soufflet.butt,
						transform: {
							tx: 4.0,
							ty: 1.5,
							a: 1.159,
							d: 1.159
						}
					},
					// 1051
					{
						ref: ref.soufflet.butt_markings
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 2.5,
							ty: -5.3,
							a: -1.044,
							d: -1.044,
							b: -1.044,
							c: 1.044
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 8.45,
							ty: -5.55,
							a: -0.498,
							d: -0.498,
							b: -1.857,
							c: 1.857
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 12.35,
							ty: -2.95,
							a: 0.301,
							d: 0.301,
							b: -1.125,
							c: 1.125
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 11.15,
							ty: 1.65,
							a: 0.76,
							d: 0.76,
							b: -0.76,
							c: 0.76
						}
					},
					// 1055
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_sac,
						transform: {
							tx: 6.5,
							ty: 1.0
						}
					},
					// 1056
					{
						ref: ref.soufflet.butt_sac_highlight
					}
				],
				[
					// 1047 p4
					{
						...stinger,
						transform: {
							tx: 10.85,
							ty: 2.9,
							a: 0.614,
							d: -0.614,
							b: 0.788,
							c: 0.7881
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 6.1,
							ty: 0.5,
							a: 0.93,
							d: 0.93,
							b: 0.476,
							c: -0.476
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 3.35,
							ty: -0.35,
							a: 1.183,
							d: 1.183,
							b: 0.386,
							c: -0.386
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 0.15,
							ty: 0.65,
							a: 0.95,
							d: 0.95,
							b: 0.31,
							c: -0.31
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 8.1,
							ty: 5.45,
							a: 0.892,
							d: 0.892,
							b: 0.239,
							c: -0.239
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 2.2,
							ty: 5.25
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 5.7,
							ty: 5.1,
							a: 1.154,
							d: 1.154
						}
					},
					// 1059
					{
						ref: ref.soufflet.butt_segment_highlight
					},
					// 1061
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_markings_dots,
						transform: {
							tx: 2.5,
							ty: -3.3
						}
					}
				],
				[
					// 1047 p4
					{
						...stinger,
						transform: {
							tx: 12.45,
							ty: -0.2,
							a: 0.866,
							d: 0.866,
							b: -0.5,
							c: 0.5
						}
					},
					// 1063
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_big_segment,
						transform: {
							tx: 6.55,
							ty: -0.2,
							a: 1.183,
							d: 1.183,
							b: 0.386,
							c: -0.386
						}
					},
					// 1058
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 3.55,
							ty: 0.65,
							a: 0.608,
							d: 0.608,
							b: 0.198,
							c: -0.198
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -0.65,
							ty: 2.1,
							a: 0.933,
							d: 0.933,
							b: 0.304,
							c: -0.304
						}
					},
					// 1064
					{
						ref: ref.soufflet.butt_big_highlight
					}
				],
				[
					// 1047 p4
					{
						...stinger,
						transform: {
							tx: 12.25,
							ty: 3.75
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 9.0,
							ty: 1.2,
							a: 0.752,
							d: 0.881,
							b: 0.143,
							c: -0.287
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 4.25,
							ty: -0.25,
							a: 0.999,
							d: 1.241,
							b: 0.345,
							c: -0.286
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 0.1,
							ty: 0.7,
							a: 1.073,
							d: 0.95,
							b: 0.204,
							c: -0.31
						}
					},
					// 1066
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_markings_segments,
						transform: {
							tx: 4.35,
							ty: -0.4
						}
					},
					// 1067
					{
						ref: ref.soufflet.butt_segment_highlight_big
					}
				]
			]
		}
	],
	// 1093
	eyes: [
		// 1076 p6
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			transform: {
				a: 0.831,
				d: 0.831,
				b: -0.165,
				c: 0.165
			},
			parts: [
				// 1072
				{
					ref: ref.soufflet.eyes
				},
				// 1073
				{
					ref: ref.soufflet.eyes_big
				},
				// 1074
				{
					ref: ref.soufflet.eyes_black
				},
				// 1075
				{
					ref: ref.soufflet.eyes_white
				}
			]
		}
	],
	// 1094
	right_antennae: [
		// 1086 p1b
		{
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			transform: {
				tx: 2.45,
				a: 0.831,
				d: 0.831,
				b: -0.165,
				c: 0.165
			},
			parts: [
				{
					...right_antennae,
					transform: {
						tx: -0.1,
						ty: 0.1,
						a: 0.494,
						d: 0.461,
						b: -0.132,
						c: 0.123
					}
				},
				{
					...right_antennae,
					transform: {
						ty: 0.05,
						a: 0.541,
						d: 0.505,
						b: -0.145,
						c: 0.135
					}
				},
				{
					...right_antennae,
					transform: {
						ty: 0.1,
						a: 0.588,
						d: 0.549,
						b: -0.158,
						c: 0.147
					}
				},
				{
					...right_antennae,
					transform: {
						ty: 0.15,
						a: 0.636,
						d: 0.593,
						b: -0.17,
						c: 0.159
					}
				},
				{
					...right_antennae,
					transform: {
						tx: 0.1,
						ty: 0.15,
						a: 0.683,
						d: 0.638,
						b: -0.183,
						c: 0.171
					}
				},
				{
					...right_antennae,
					transform: {
						tx: 0.1,
						ty: 0.2,
						a: 0.731,
						d: 0.682,
						b: -0.196,
						c: 0.183
					}
				},
				{
					...right_antennae,
					transform: {
						tx: 0.15,
						ty: 0.2,
						a: 0.778,
						d: 0.726,
						b: -0.209,
						c: 0.195
					}
				},
				{
					...right_antennae,
					transform: {
						tx: 0.2,
						ty: 0.2,
						a: 0.826,
						d: 0.771,
						b: -0.221,
						c: 0.207
					}
				},
				{
					...right_antennae,
					transform: {
						tx: 0.2,
						ty: 0.3,
						a: 0.873,
						d: 0.815,
						b: -0.234,
						c: 0.219
					}
				},
				{
					...right_antennae,
					transform: {
						tx: -0.15,
						ty: 0.15,
						a: 0.921,
						d: 0.86,
						b: -0.247,
						c: 0.23
					}
				}
			]
		}
	],
	// 1095
	left_antennae: [
		// 1090 p1a
		{
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
			transform: {
				tx: 2.25,
				ty: 1.0,
				a: 0.831,
				d: 0.831,
				b: -0.165,
				c: 0.165
			},
			parts: [
				{
					...left_antennae,
					transform: {
						tx: 0.15,
						ty: -0.4,
						a: 0.502,
						d: 0.502,
						b: 0.044,
						c: -0.044
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 0.35,
						ty: -0.5,
						a: 0.555,
						d: 0.555,
						b: 0.049,
						c: -0.049
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 0.5,
						ty: -0.55,
						a: 0.609,
						d: 0.609,
						b: 0.053,
						c: -0.053
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 0.7,
						ty: -0.6,
						a: 0.662,
						d: 0.662,
						b: 0.058,
						c: -0.058
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 0.8,
						ty: -0.6,
						a: 0.716,
						d: 0.716,
						b: 0.063,
						c: -0.063
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 1.0,
						ty: -0.65,
						a: 0.769,
						d: 0.769,
						b: 0.067,
						c: -0.067
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 1.15,
						ty: -0.75,
						a: 0.823,
						d: 0.823,
						b: 0.072,
						c: -0.072
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 1.3,
						ty: -0.8,
						a: 0.876,
						d: 0.876,
						b: 0.077,
						c: -0.077
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 1.45,
						ty: -0.85,
						a: 0.93,
						d: 0.93,
						b: 0.082,
						c: -0.082
					}
				},
				{
					...left_antennae,
					transform: {
						tx: 0.15,
						ty: -0.4,
						a: 0.984,
						d: 0.984,
						b: 0.087,
						c: -0.087
					}
				}
			]
		}
	],
	// 1119
	arm: [
		// 1118 p7
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 3],
			parts: [
				[
					// 1105
					{
						ref: ref.soufflet.arm_ball
					},
					// 1107
					{
						colorIdx: 0,
						ref: ref.soufflet.arm
					},
					// 1108
					{
						ref: ref.soufflet.arm_spikes
					}
				],
				[
					// 1109
					{
						ref: ref.soufflet.arm_claw
					},
					// 1111
					{
						colorIdx: 0,
						ref: ref.soufflet.arm_long,
						transform: {
							tx: 1.45,
							ty: 0.6
						}
					},
					// 1112
					{
						ref: ref.soufflet.arm_joint
					}
				],
				[
					// 1113
					{
						ref: ref.soufflet.arm_end
					},
					// 1115
					{
						colorIdx: 0,
						ref: ref.soufflet.arm_slim,
						transform: {
							tx: -0.35,
							ty: 0.8
						}
					}
				],
				// 1117
				{
					colorIdx: 0,
					ref: ref.soufflet.arm_stiff,
					transform: {
						tx: 0.4,
						ty: 0.45
					}
				}
			]
		}
	],
	// 1122
	body: [
		// 1121
		{
			ref: ref.soufflet.body
		}
	]
};
