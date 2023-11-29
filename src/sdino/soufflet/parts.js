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
			parts: [
				[
					// 1047 p4
					{
						partIdx: 4,
						frames: [0, 1, 1],
						parts: [
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 6.719,
									ty: 5.527,
									a: 0.802,
									b: 0.272,
									c: -0.272,
									d: 0.802
								}
							},
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 6.851,
									ty: 5.929,
									a: 1.18,
									b: 0.401,
									c: -0.401,
									d: 1.18
								}
							}
						]
					},
					// 1048
					{
						ref: ref.soufflet.butt_end,
						transform: {
							tx: -4.3,
							ty: -0.4,
							a: 0.831,
							d: 0.831,
							b: -0.165,
							c: 0.165
						}
					},
					// 1050
					{
						colorIdx: 1,
						ref: ref.soufflet.butt,
						transform: {
							tx: -0.73,
							ty: 0.186,
							a: 0.963,
							b: -0.191,
							c: 0.191,
							d: 0.963
						}
					},
					// 1051
					{
						ref: ref.soufflet.butt_markings,
						transform: {
							tx: -4.3,
							ty: -0.4,
							a: 0.831,
							d: 0.831,
							b: -0.165,
							c: 0.165
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: -3.098,
							ty: -5.215,
							a: -1.039,
							b: -0.695,
							c: 0.695,
							d: -1.039
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 1.803,
							ty: -6.404,
							a: -0.72,
							b: -1.46,
							c: 1.46,
							d: -0.72
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 5.471,
							ty: -4.888,
							a: 0.065,
							b: -0.984,
							c: 0.984,
							d: 0.065
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 5.233,
							ty: -0.869,
							a: 0.506,
							b: -0.757,
							c: 0.757,
							d: 0.506
						}
					},
					// 1055
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_sac,
						transform: {
							tx: 1.264,
							ty: -0.642,
							a: 0.831,
							b: -0.165,
							c: 0.165,
							d: 0.831
						}
					},
					// 1056
					{
						ref: ref.soufflet.butt_sac_highlight,
						transform: {
							tx: -4.3,
							ty: -0.4,
							a: 0.831,
							d: 0.831,
							b: -0.165,
							c: 0.165
						}
					}
				],
				[
					// 1047 p4
					{
						partIdx: 4,
						frames: [0, 1, 1],
						parts: [
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 5.19,
									ty: 0.219,
									a: 0.64,
									b: 0.553,
									c: 0.553,
									d: -0.64
								}
							},
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 5.603,
									ty: 0.129,
									a: 0.941,
									b: 0.814,
									c: 0.814,
									d: -0.941
								}
							}
						]
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 0.849,
							ty: -0.991,
							a: 0.851,
							b: 0.242,
							c: -0.242,
							d: 0.851
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -1.575,
							ty: -1.243,
							a: 1.046,
							b: 0.125,
							c: -0.125,
							d: 1.046
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -4.068,
							ty: 0.115,
							a: 0.84,
							b: 0.101,
							c: -0.101,
							d: 0.84
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 3.327,
							ty: 2.79,
							a: 0.78,
							b: 0.051,
							c: -0.051,
							d: 0.78
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: -1.607,
							ty: 3.598,
							a: 0.831,
							b: -0.165,
							c: 0.165,
							d: 0.831
						}
					},
					// 1053
					{
						ref: ref.soufflet.butt_spike,
						transform: {
							tx: 1.276,
							ty: 2.896,
							a: 0.958,
							b: -0.19,
							c: 0.19,
							d: 0.958
						}
					},
					// 1059
					{
						ref: ref.soufflet.butt_segment_highlight,
						transform: {
							tx: -4.3,
							ty: -0.4,
							a: 0.831,
							d: 0.831,
							b: -0.165,
							c: 0.165
						}
					},
					// 1061
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_markings_dots,
						transform: {
							tx: -2.768,
							ty: -3.553,
							a: 0.831,
							b: -0.165,
							c: 0.165,
							d: 0.831
						}
					}
				],
				[
					// 1047 p4
					{
						partIdx: 4,
						frames: [0, 1, 1],
						parts: [
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 6.008,
									ty: -2.62,
									a: 0.637,
									b: -0.558,
									c: 0.558,
									d: 0.637
								}
							},
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 6.422,
									ty: -2.533,
									a: 0.937,
									b: -0.821,
									c: 0.821,
									d: 0.937
								}
							}
						]
					},
					// 1063
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_big_segment,
						transform: {
							tx: 1.107,
							ty: -1.647,
							a: 1.046,
							b: 0.125,
							c: -0.125,
							d: 1.046
						}
					},
					// 1058
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -1.244,
							ty: -0.446,
							a: 0.538,
							b: 0.064,
							c: -0.064,
							d: 0.538
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -4.493,
							ty: 1.451,
							a: 0.825,
							b: 0.099,
							c: -0.099,
							d: 0.825
						}
					},
					// 1064
					{
						ref: ref.soufflet.butt_big_highlight,
						transform: {
							tx: -4.3,
							ty: -0.4,
							a: 0.831,
							d: 0.831,
							b: -0.165,
							c: 0.165
						}
					}
				],
				[
					// 1047 p4
					{
						partIdx: 4,
						frames: [0, 1, 1],
						parts: [
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 6.493,
									ty: 0.694,
									a: 0.831,
									b: -0.165,
									c: 0.165,
									d: 0.831
								}
							},
							// 1046
							{
								colorIdx: 0,
								ref: ref.soufflet.butt_stinger,
								transform: {
									tx: 6.808,
									ty: 0.976,
									a: 1.222,
									b: -0.243,
									c: 0.243,
									d: 1.222
								}
							}
						]
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: 3.373,
							ty: -0.888,
							a: 0.648,
							b: -0.006,
							c: -0.093,
							d: 0.779
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -0.811,
							ty: -1.309,
							a: 0.886,
							b: 0.122,
							c: -0.033,
							d: 1.078
						}
					},
					// 1058
					{
						colorIdx: 1,
						ref: ref.soufflet.butt_segment,
						transform: {
							tx: -4.101,
							ty: 0.165,
							a: 0.925,
							b: -0.008,
							c: -0.101,
							d: 0.84
						}
					},
					// 1066
					{
						colorIdx: 2,
						ref: ref.soufflet.butt_markings_segments,
						transform: {
							tx: -0.753,
							ty: -1.45,
							a: 0.831,
							b: -0.165,
							c: 0.165,
							d: 0.831
						}
					},
					// 1067
					{
						ref: ref.soufflet.butt_segment_highlight_big,
						transform: {
							tx: -4.3,
							ty: -0.4,
							a: 0.831,
							d: 0.831,
							b: -0.165,
							c: 0.165
						}
					}
				]
			]
		}
	],
	// 1093
	eyes: [],
	// 1094
	left_antennae: [],
	// 1095
	right_antennae: [],
	// 1119
	arm: [],
	// 1122
	body: []
};
