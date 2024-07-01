// @ts-check
import { ref } from '../references_small.js';
import { head_special } from './animations/head_special.js';

// 1154
const fur = {
	partIdx: 4,
	frames: [0, 1, 2, 3, 4, 5],
	parts: [
		// 1143
		{
			colorIdx: 1,
			ref: ref.toufufu.fur,
			transform: {
				tx: -0.5,
				ty: 0.1
			}
		},
		// 1145
		{
			colorIdx: 1,
			ref: ref.toufufu.fur_star,
			transform: {
				tx: -0.3,
				ty: -0.65,
				a: 1.157,
				d: 1.157
			}
		},
		// 1147
		{
			colorIdx: 1,
			ref: ref.toufufu.fur_round,
			transform: {
				tx: -0.25,
				ty: 0.15,
				a: 1.16,
				d: 1.16
			}
		},
		// 1149
		{
			colorIdx: 1,
			ref: ref.toufufu.fur_arc,
			transform: {
				tx: -0.2,
				ty: 0.8,
				a: 1.303,
				d: 1.303
			}
		},
		// 1151
		{
			colorIdx: 1,
			ref: ref.toufufu.fur_leaf,
			transform: {
				tx: -0.55,
				ty: 0.75,
				a: 1.24,
				d: 1.24
			}
		},
		// 1153
		{
			colorIdx: 1,
			ref: ref.toufufu.fur_fire,
			transform: {
				tx: 2.55,
				ty: -0.2,
				a: -0.913,
				d: 0.913,
				b: 0.527,
				c: 0.527
			}
		}
	]
};

export const parts_small = {
	// 1137
	right_foot: [
		// 1136
		{
			colorIdx: 0,
			ref: ref.toufufu.right_foot
		}
	],
	// 1140
	upper_leg: [
		// 1139
		{
			colorIdx: 2,
			ref: ref.toufufu.upper_leg
		}
	],
	// 1156
	lower_leg: [
		// 1141
		{
			colorIdx: 2,
			ref: ref.toufufu.lower_leg,
			transform: {
				ty: -0.45
			}
		},
		{
			...fur,
			transform: {
				tx: 2.2,
				ty: 7.45,
				a: -0.903,
				b: -0.43,
				c: 0.43,
				d: -0.903
			}
		}
	],
	// 1159
	upper_arm: [
		// 1158
		{
			colorIdx: 2,
			ref: ref.toufufu.upper_arm,
			transform: {
				ty: -0.1
			}
		}
	],
	// 1162
	tail: [
		// 1161
		{
			colorIdx: 2,
			ref: ref.toufufu.tail
		}
	],
	// 1171
	body: [
		// 1166
		{
			colorIdx: 2,
			ref: ref.toufufu.body,
			transform: {
				tx: -0.25,
				ty: -0.5
			}
		},
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: -0.5,
				ty: -0.2
			},
			parts: [
				[
					// 1168
					{
						colorIdx: 3,
						ref: ref.toufufu.body_special
					},
					// 1169
					{
						ref: ref.toufufu.body_special_sides
					}
				]
			]
		}
	],
	// 1174
	hand: [
		// 1173
		{
			colorIdx: 0,
			ref: ref.toufufu.hand
		},
		{
			...fur,
			transform: {
				tx: 2.65,
				ty: 1.1,
				a: 0.5,
				d: -0.5,
				b: 0.866,
				c: 0.866
			}
		}
	],
	// 1177
	lower_arm: [
		// 1176
		{
			colorIdx: 2,
			ref: ref.toufufu.lower_arm,
			transform: {
				ty: 0.7
			}
		}
	],
	// 1180
	left_foot: [
		// 1179
		{
			colorIdx: 0,
			ref: ref.toufufu.left_foot,
			transform: {
				ty: 0.55
			}
		}
	],
	// 1260
	head: [
		// 1193 p7b
		{
			partIdx: 7,
			frames: [0, -1, 1, 2, -1, -1, -1, -1, 3, 4, 5],
			transform: {
				tx: -2.2,
				ty: 5.25
			},
			parts: [
				// 1182
				{
					colorIdx: 1,
					ref: ref.toufufu.sideburn,
					transform: {
						ty: -0.6
					}
				},
				// 1184
				{
					colorIdx: 1,
					ref: ref.toufufu.sideburn_spiky,
					transform: {
						tx: -0.85,
						ty: 0.75
					}
				},
				// 1186
				{
					colorIdx: 1,
					ref: ref.toufufu.sideburn_long,
					transform: {
						tx: 1.55,
						ty: -0.05
					}
				},
				// 1188
				{
					colorIdx: 1,
					ref: ref.toufufu.sideburn_corner,
					transform: {
						tx: 1.25,
						ty: -2.05
					}
				},
				// 1190
				{
					colorIdx: 1,
					ref: ref.toufufu.sideburn_small,
					transform: {
						tx: 0.85,
						ty: 1.0
					}
				},
				// 1192
				{
					colorIdx: 1,
					ref: ref.toufufu.sideburn_forward,
					transform: {
						tx: 0.25,
						ty: 0.05
					}
				}
			]
		},
		// 1210 -> 1195
		{
			colorIdx: 0,
			ref: ref.toufufu.head,
			transform: {
				ty: 0.65
			}
		},
		// 1210 -> 1209
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: -0.1,
				ty: -1.9
			},
			parts: [head_special]
		},
		// 1235 p8
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			transform: {
				tx: 0.5,
				ty: 6.55,
				a: 1.365,
				d: 1.365
			},
			parts: [
				// 1212
				{
					colorIdx: 0,
					ref: ref.toufufu.face_smile
				},
				[
					// 1213
					{
						ref: ref.toufufu.face_chin_teeth
					},
					// 1215
					{
						colorIdx: 0,
						ref: ref.toufufu.face_chin,
						transform: {
							tx: -0.9,
							ty: 0.6
						}
					}
				],
				[
					// 1216
					{
						ref: ref.toufufu.face_open_mouth_teeth
					},
					// 1218
					{
						colorIdx: 0,
						ref: ref.toufufu.face_open_mouth,
						transform: {
							tx: -0.05,
							ty: 0.25
						}
					}
				],
				[
					// 1219
					{
						ref: ref.toufufu.face_smile_tongue
					},
					// 1221
					{
						colorIdx: 0,
						ref: ref.toufufu.face_smile_alpha,
						transform: {
							tx: -0.45,
							ty: -0.05
						}
					}
				],
				[
					// 1222
					{
						ref: ref.toufufu.mouth_smile_tooth
					},
					// 1224
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_smile,
						transform: {
							tx: 0.65,
							ty: 0.55
						}
					}
				],
				[
					// 1226
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_pout,
						tx: 0.6,
						ty: 0.7
					},
					// 1228
					{
						colorIdx: 1,
						ref: ref.toufufu.head_beard,
						transform: {
							tx: -0.25,
							ty: -1.2
						}
					}
				],
				// 1230
				{
					colorIdx: 1,
					ref: ref.toufufu.head_small_beard,
					transform: {
						tx: 0.1,
						ty: -0.3
					}
				},
				[
					// 1232
					{
						colorIdx: 1,
						ref: ref.toufufu.head_sideburns,
						transform: {
							tx: 0.05,
							ty: -0.05
						}
					},
					// 1226
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_pout,
						transform: {
							tx: 0.85,
							ty: 0.35
						}
					}
				],
				[
					// 1226
					{
						colorIdx: 0,
						ref: ref.toufufu.mouth_pout,
						transform: {
							tx: 0.65,
							ty: 0.35
						}
					},
					// 1232
					{
						colorIdx: 1,
						ref: ref.toufufu.head_whiskers,
						transform: {
							tx: -1.1,
							ty: 0.15
						}
					}
				]
			]
		},
		// 1259 p7a
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			transform: {
				tx: -6.9,
				ty: -3.25,
				a: 1.084,
				d: 1.084
			},
			parts: [
				// 1237
				{
					colorIdx: 1,
					ref: ref.toufufu.hair,
					transform: {
						tx: 1.75
					}
				},
				// 1239
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_casu,
					transform: {
						tx: 3.05,
						ty: 0.1
					}
				},
				// 1241
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_master,
					transform: {
						tx: 6.35,
						ty: -1.75
					}
				},
				// 1243
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_wolverine,
					transform: {
						tx: 6.1,
						ty: 0.85
					}
				},
				// 1245
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_fang,
					transform: {
						tx: 5.25,
						ty: -1.35
					}
				},
				// 1247
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_anime,
					transform: {
						tx: 5.65,
						ty: -2.5
					}
				},
				// 1249
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_forward,
					transform: {
						tx: 4.1,
						ty: -0.15,
						a: 0.99,
						d: 0.99,
						b: -0.143,
						c: 0.143
					}
				},
				[
					// 1250
					{
						ref: ref.toufufu.hair_hat
					},
					// 1252
					{
						colorIdx: 1,
						ref: ref.toufufu.hair_spike,
						transform: {
							tx: 3.8,
							ty: -1.9
						}
					}
				],
				// 1254
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_side,
					transform: {
						tx: 6.8,
						ty: -1.65
					}
				},
				// 1256
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_flat,
					transform: {
						tx: 2.75,
						ty: 0.05
					}
				},
				// 1258
				{
					colorIdx: 1,
					ref: ref.toufufu.hair_elvis,
					transform: {
						tx: 5.75,
						ty: 1.45
					}
				}
			]
		}
	]
};
