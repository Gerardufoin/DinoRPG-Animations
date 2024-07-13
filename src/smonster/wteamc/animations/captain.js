// @ts-check
import { ref } from '../../references.js';

const skin_color_dark = {
	r: -41,
	g: -57,
	b: -82
};

const skin_color = {
	r: -16,
	g: -51,
	b: -67
};

const captain_parts = {
	// 1152
	shadow_stand: [
		{
			ref: ref.wteamc.shadow_stand
		}
	],
	// 1155
	cape: [
		{
			ref: ref.wteamc.cape,
			colorOffset: {
				r: -62,
				g: -77
			}
		}
	],
	// 982
	l_t_leg: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color_dark
		}
	],
	// 982-1
	r_t_leg: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color_dark
		}
	],
	// 1156
	r_foot: [
		// 265
		{
			ref: ref.goblin.r_foot,
			transform: {
				ty: 0.05
			},
			colorOffset: skin_color
		}
	],
	// 1157
	l_b_leg: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color
		}
	],
	// 1157-1
	r_b_leg: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color
		}
	],
	// 1160
	l_foot: [
		// 265
		{
			ref: ref.goblin.l_foot,
			transform: {
				ty: 0.05,
				a: 1.165,
				d: 1.165
			},
			colorOffset: skin_color
		}
	],
	// 1161
	pants: [
		{
			ref: ref.brigand.pants,
			transform: {
				tx: -0.15,
				ty: 0.35,
				a: 1.607,
				d: 1.966,
				b: -0.041,
				c: -0.239
			}
		}
	],
	// 1162
	l_t_arm: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			}
		}
	],
	// 1162-1
	r_t_arm: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			}
		}
	],
	// 1163
	body: [
		// 270
		{
			ref: ref.goblin.body,
			transform: {
				tx: 0.4,
				ty: 0.6,
				a: 0.866,
				d: 0.866,
				b: -0.5,
				c: 0.5
			}
		}
	],
	// 1164
	r_hand: [
		// 256
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: skin_color
		}
	],
	// 1164-1
	l_hand: [
		// 256
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: skin_color
		}
	],
	// 1165
	l_b_arm: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color
		}
	],
	// 1165-1
	r_b_arm: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color
		}
	],
	// 1168
	shoulders: [
		{
			ref: ref.wteamc.shoulders,
			colorOffset: {
				r: -6,
				g: -72,
				b: -148
			}
		}
	],
	// 1171
	head: [
		// 988
		{
			ref: ref.brigand.head,
			transform: {
				tx: 0.1
			},
			colorOffset: skin_color
		},
		// 277
		{
			ref: ref.goblin.head_highlight,
			transform: {
				tx: -0.15,
				ty: 1,
				a: 1.125,
				d: 1.087
			}
		}
	],
	// 1174
	hair: [
		{
			ref: ref.wteamc.hair
		}
	],
	// 1180
	shadow_down: [
		{
			ref: ref.wteamc.shadow_down
		}
	]
};

// 1175
export const captain_stand = {
	parts: captain_parts,
	animation: {
		id: 'wteamc_captain_stand',
		callbacks: {
			0: [['stop']]
		},
		expectedScaling: {
			l_b_arm: 1.5,
			r_b_arm: 1.5
		},
		frames: [
			{
				hair: {
					tx: 2.75,
					ty: -45.45,
					l: 18
				},
				r_hand: {
					tx: 1.3,
					ty: -27.8,
					a: -0.857,
					b: 0.23,
					c: 0.23,
					d: 0.857,
					l: 17
				},
				l_b_arm: {
					tx: 4.6,
					ty: -25.55,
					a: -0.383,
					b: 1.915,
					c: -1.256,
					d: -0.237,
					l: 16
				},
				head: {
					tx: 3.35,
					ty: -43.9,
					a: 1.332,
					b: -0.185,
					c: 0.185,
					d: 1.332,
					l: 15
				},
				shoulders: {
					tx: 3.55,
					ty: -35.65,
					l: 14
				},
				l_t_arm: {
					tx: 7.45,
					ty: -32.05,
					a: -1.289,
					b: -0.552,
					c: -0.461,
					d: 1.076,
					l: 13
				},
				r_b_arm: {
					tx: -9.4,
					ty: -30.7,
					a: -0.171,
					b: 1.983,
					c: 1.232,
					d: 0.12,
					l: 12
				},
				l_hand: {
					tx: -7.2,
					ty: -34.35,
					a: -0.771,
					b: 0.485,
					c: -0.485,
					d: -0.771,
					l: 11
				},
				body: {
					tx: 3.7,
					ty: -31.45,
					a: 0.557,
					b: 1.565,
					c: -1.565,
					d: 0.557,
					l: 10
				},
				r_t_arm: {
					tx: -3.3,
					ty: -34.9,
					a: -0.651,
					b: -1.249,
					c: -1.042,
					d: 0.543,
					l: 9
				},
				pants: {
					tx: 1.45,
					ty: -17.25,
					a: 1.109,
					b: 0,
					c: 0.35,
					d: 2.849,
					l: 8
				},
				l_t_leg: {
					tx: 2.45,
					ty: -15.05,
					a: 2.193,
					b: -0.19,
					c: 0.214,
					d: 1.403,
					l: 7
				},
				l_b_leg: {
					tx: 4.1,
					ty: -5.65,
					a: -1.887,
					b: 0.329,
					c: 0.125,
					d: 1.246,
					l: 6
				},
				l_foot: {
					tx: 3.1,
					ty: 5.65,
					a: -1.089,
					b: -0.139,
					c: -0.226,
					d: 1.1,
					l: 5
				},
				r_t_leg: {
					tx: 0.05,
					ty: -18.8,
					a: -2.166,
					b: -0.273,
					c: -0.115,
					d: 1.336,
					l: 4
				},
				r_b_leg: {
					tx: -0.45,
					ty: -10.35,
					a: -1.82,
					b: -0.183,
					c: -0.032,
					d: 1.39,
					l: 3
				},
				r_foot: {
					tx: -2.5,
					ty: 0.7,
					a: 1.094,
					b: 0.287,
					c: -0.202,
					d: 1.071,
					l: 2
				},
				cape: {
					tx: 5.1,
					ty: -16.4,
					l: 1
				},
				shadow_stand: {
					l: 0
				}
			}
		]
	}
};

// 1181
export const captain_down = {
	parts: captain_parts,
	animation: {
		id: 'wteamc_captain_down',
		callbacks: {
			1: [['stop']]
		},
		expectedScaling: {
			l_b_arm: 1.5,
			r_b_arm: 1.5
		},
		frames: [
			{
				hair: {
					tx: 2.2,
					ty: -33.85,
					l: 17
				},
				r_hand: {
					tx: -4.5,
					ty: -24.95,
					a: -0.856,
					b: 0.23,
					c: 0.23,
					d: 0.856,
					l: 16
				},
				l_b_arm: {
					tx: 2,
					ty: -13.2,
					a: 0.803,
					b: 1.776,
					c: -1.156,
					d: 0.54,
					l: 15
				},
				head: {
					tx: 2.8,
					ty: -32.35,
					a: 1.332,
					b: -0.182,
					c: 0.182,
					d: 1.332,
					l: 14
				},
				shoulders: {
					tx: 4.05,
					ty: -24.7,
					a: 1.02,
					d: 1.02,
					l: 13
				},
				l_t_arm: {
					tx: 5.7,
					ty: -20.05,
					a: -1.27,
					b: -0.587,
					c: -0.49,
					d: 1.06,
					l: 12
				},
				r_b_arm: {
					tx: -5.9,
					ty: -29.6,
					a: -1.911,
					b: 0.532,
					c: 0.32,
					d: 1.192,
					l: 11
				},
				l_hand: {
					tx: -6.55,
					ty: -13.45,
					a: -0.72,
					b: -0.55,
					c: 0.55,
					d: -0.72,
					l: 10
				},
				body: {
					tx: 4.75,
					ty: -24.25,
					a: 0.555,
					b: 1.563,
					c: -1.625,
					d: 0.577,
					l: 9
				},
				r_t_arm: {
					tx: -0.6,
					ty: -27.85,
					a: 0.287,
					b: -1.375,
					c: -1.147,
					d: -0.24,
					l: 8
				},
				pants: {
					tx: 3.5,
					ty: -13.95,
					a: 1.148,
					b: 0.183,
					c: 0.363,
					d: 2.847,
					l: 7
				},
				l_t_leg: {
					tx: 2.45,
					ty: -15,
					a: 2.193,
					b: -0.184,
					c: 0.21,
					d: 1.402,
					l: 6
				},
				l_b_leg: {
					tx: 6.55,
					ty: -4.35,
					a: -1.578,
					b: 1.077,
					c: 0.626,
					d: 1.082,
					l: 5
				},
				l_foot: {
					tx: 10.2,
					ty: 3.85,
					a: -1.058,
					b: 0.285,
					c: 0.21,
					d: 1.101,
					l: 4
				},
				r_t_leg: {
					tx: 1.4,
					ty: -17.5,
					a: -2.165,
					b: -0.267,
					c: -0.112,
					d: 1.335,
					l: 3
				},
				r_b_leg: {
					tx: -2.9,
					ty: -10.35,
					a: -1.819,
					b: -0.183,
					c: -0.031,
					d: 1.39,
					l: 2
				},
				r_foot: {
					tx: -5.05,
					ty: 0.65,
					a: 1.093,
					b: 0.284,
					c: -0.199,
					d: 1.071,
					l: 1
				},
				shadow_down: {
					l: 0
				}
			},
			{
				hair: {
					tx: 1.25,
					ty: -21.7,
					l: 17
				},
				r_hand: {
					tx: -10.15,
					ty: -22,
					a: -0.857,
					b: 0.23,
					c: 0.23,
					d: 0.857,
					l: 16
				},
				l_b_arm: {
					tx: -0.35,
					ty: -0.65,
					a: 1.692,
					b: 0.972,
					c: -0.624,
					d: 1.115,
					l: 15
				},
				head: {
					tx: 1.85,
					ty: -20.15,
					a: 1.332,
					b: -0.185,
					c: 0.185,
					d: 1.332,
					l: 14
				},
				shoulders: {
					tx: 4.4,
					ty: -13.6,
					l: 13
				},
				l_t_arm: {
					tx: 3.9,
					ty: -7.95,
					a: -1.289,
					b: -0.552,
					c: -0.461,
					d: 1.076,
					l: 12
				},
				r_b_arm: {
					tx: -2.1,
					ty: -28.45,
					a: -1.169,
					b: -1.599,
					c: -1.003,
					d: 0.717,
					l: 11
				},
				l_hand: {
					tx: -5.55,
					ty: 7.5,
					a: 0.261,
					b: -0.868,
					c: 0.868,
					d: 0.261,
					l: 10
				},
				body: {
					tx: 6.4,
					ty: -16.8,
					a: 0.557,
					b: 1.565,
					c: -1.565,
					d: 0.557,
					l: 9
				},
				r_t_arm: {
					tx: 1.9,
					ty: -20.8,
					a: 1.098,
					b: -0.875,
					c: -0.73,
					d: -0.916,
					l: 8
				},
				pants: {
					tx: 5.8,
					ty: -10.6,
					a: 1.156,
					b: 0.384,
					c: 0.35,
					d: 2.849,
					l: 7
				},
				l_t_leg: {
					tx: 2.45,
					ty: -15.05,
					a: 2.193,
					b: -0.19,
					c: 0.214,
					d: 1.403,
					l: 6
				},
				l_b_leg: {
					tx: 9.2,
					ty: -3.1,
					a: -0.992,
					b: 1.635,
					c: 1.019,
					d: 0.725,
					l: 5
				},
				l_foot: {
					tx: 17.05,
					ty: 2.05,
					a: -0.868,
					b: 0.668,
					c: 0.615,
					d: 0.937,
					l: 4
				},
				r_t_leg: {
					tx: 2.6,
					ty: -16.25,
					a: -2.166,
					b: -0.273,
					c: -0.115,
					d: 1.336,
					l: 3
				},
				r_b_leg: {
					tx: -5.55,
					ty: -10.35,
					a: -1.82,
					b: -0.183,
					c: -0.032,
					d: 1.39,
					l: 2
				},
				r_foot: {
					tx: -7.6,
					ty: 0.7,
					a: 1.094,
					b: 0.287,
					c: -0.202,
					d: 1.071,
					l: 1
				},
				shadow_down: {
					l: 0
				}
			}
		]
	}
};
