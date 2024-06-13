// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 1321
const body_hurt = {
	partIdx: 2,
	frames: [-1, 0, 1],
	transform: {
		tx: 6.05,
		ty: 3.6
	},
	parts: [
		[
			// 155
			{
				ref: ref.hurt.scratch,
				transform: {
					tx: 0,
					ty: 0,
					a: 0.957,
					d: 1.506,
					b: 0.369,
					c: -0.581
				}
			}
		],
		[
			// 357
			{
				ref: ref.hurt.bruise_purple,
				transform: {
					tx: 3.45,
					ty: -0.15,
					a: 1.024,
					d: 1.024,
					b: -0.524,
					c: 0.524
				}
			},
			// 359
			{
				ref: ref.hurt.scratch_blood,
				transform: {
					tx: -14.6,
					ty: 3.6
				}
			}
		]
	]
};

// 1324
const body_special = {
	partIdx: 15,
	frames: [-1, 0],
	parts: [
		// 1322
		{
			colorIdx: 3,
			ref: ref.sirain.body_special
		}
	]
};

export const parts_big = {
	// 1278 p8a
	tail_bubble: [
		{
			partIdx: 8,
			frames: [0, -1, -1, -1, -1, -1, -1],
			transform: {
				tx: 27.35,
				ty: 9.6
			},
			parts: [
				// 1277
				{
					ref: ref.sirain.tail_bubble
				}
			]
		}
	],
	// 1289 p5b
	right_ear: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 1280
				{
					colorIdx: 0,
					ref: ref.sirain.ear
				},
				// 1282
				{
					colorIdx: 0,
					ref: ref.sirain.ear_up,
					transform: {
						tx: -8.1,
						ty: -6.75
					}
				},
				// 1284
				{
					colorIdx: 0,
					ref: ref.sirain.ear_down,
					transform: {
						tx: -1.5,
						ty: 2.3
					}
				},
				// 1286
				{
					colorIdx: 0,
					ref: ref.sirain.ear_twig,
					transform: {
						tx: -1.75,
						ty: 0.2
					}
				},
				// 1288
				{
					colorIdx: 0,
					ref: ref.sirain.ear_bat,
					transform: {
						tx: 0.4,
						ty: 1.25
					}
				}
			]
		}
	],
	// 1297 p7b
	right_leg: [
		// 1291
		{
			colorIdx: 0,
			ref: ref.sirain.right_leg
		},
		// 1293
		// leg_glow had a glow filter (dist 5 col 0xccff00) but it does not work with blend ADD
		{
			ref: ref.sirain.right_leg_glow,
			transform: {
				tx: 3.4,
				ty: -1.1
			},
			alpha: 0.3,
			blend: BLEND_MODES.ADD
		},
		// 1296
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 1295
				{
					colorIdx: 0,
					ref: ref.sirain.right_leg_special,
					transform: {
						tx: -10.8,
						ty: -10.9
					},
					blend: BLEND_MODES.MULTIPLY
				}
			]
		}
	],
	// 1312 p8
	tail: [
		{
			partIdx: 8,
			frames: [-1, 0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 1299
					{
						colorIdx: 0,
						ref: ref.sirain.tail_thin,
						transform: {
							tx: -11.7,
							ty: -4.5
						}
					}
				],
				[
					// 1301
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fan,
						transform: {
							tx: -10.05,
							ty: 10.05
						}
					},
					// 1303
					{
						colorIdx: 1,
						ref: ref.sirain.tail_fan_inside,
						transform: {
							tx: -10.05,
							ty: 10.05
						}
					}
				],
				[
					// 1305
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fat,
						transform: {
							tx: -12.4,
							ty: 2.3
						}
					}
				],
				[
					// 1305
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fat,
						transform: {
							tx: -12.4,
							ty: 2.3
						}
					},
					// 1307
					{
						colorIdx: 1,
						ref: ref.sirain.tail_fat_fins,
						transform: {
							tx: -0.55,
							ty: -3.15
						}
					}
				],
				[
					// 1309
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fish,
						transform: {
							tx: -18.4,
							ty: -2.7
						}
					}
				],
				[
					// 1311
					{
						colorIdx: 0,
						ref: ref.sirain.tail_dry,
						transform: {
							tx: -2.5,
							ty: 4.15
						}
					}
				]
			]
		}
	],
	// 1315 p4b
	right_eye: [
		{
			partIdx: 4,
			frames: [0, 0, 0, 0, 1, 1],
			parts: [
				// 1314
				{
					colorIdx: 0,
					ref: ref.sirain.right_eye
				},
				// 1314
				{
					colorIdx: 0,
					ref: ref.sirain.right_eye,
					transform: {
						tx: 1.5,
						ty: 0.5
					}
				}
			]
		}
	],
	// 1331 p6
	// body_glow had a glow filter (dist 5 col 0xccff00) but it does not work with the blend ADD
	body: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5, 6],
			parts: [
				[
					// 1316
					{
						colorIdx: 0,
						ref: ref.sirain.body
					},
					// 1318 p9
					{
						partIdx: 9,
						frames: [-1, 0],
						parts: [
							// 1317
							{
								colorIdx: 0,
								ref: ref.sirain.body_pocket
							}
						]
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -3.45,
							ty: 7.55
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -20.95,
							ty: -39.05,
							a: 0.917,
							d: 0.917
						}
					}
				],
				[
					// 1317
					{
						colorIdx: 0,
						ref: ref.sirain.body,
						transform: {
							tx: -1.65,
							ty: -1,
							a: 1.147,
							d: 1.147
						}
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -5.6,
							ty: 7.65,
							a: 1.147,
							d: 1.147
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight,
						transform: {
							tx: -1.55,
							ty: -0.95,
							a: 1.14,
							d: 1.16
						}
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -27.55,
							ty: -48.1,
							a: 1.12,
							d: 1.12
						}
					}
				],
				[
					// 1317
					{
						colorIdx: 0,
						ref: ref.sirain.body
					},
					// 1326
					{
						colorIdx: 1,
						ref: ref.sirain.body_mark_star,
						transform: {
							tx: -9,
							ty: 9.7
						}
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -3.45,
							ty: 7.55
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -20.95,
							ty: -39.05,
							a: 0.917,
							d: 0.917
						}
					}
				],
				[
					// 1317
					{
						colorIdx: 0,
						ref: ref.sirain.body,
						transform: {
							tx: 0.4,
							ty: 0,
							a: 0.899,
							d: 0.855
						}
					},
					// 1326
					{
						colorIdx: 1,
						ref: ref.sirain.body_mark_star,
						transform: {
							tx: -7.7,
							ty: 8.3,
							a: 0.899,
							d: 0.855
						}
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -2.7,
							ty: 6.45,
							a: 0.899,
							d: 0.855
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight,
						transform: {
							tx: 0.35,
							ty: -0.05,
							a: 0.9,
							d: 0.84
						}
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -20.95,
							ty: -39.25,
							a: 0.927,
							d: 0.927
						}
					}
				],
				[
					// 1317
					{
						colorIdx: 0,
						ref: ref.sirain.body
					},
					// 1328
					{
						colorIdx: 1,
						ref: ref.sirain.body_mark_dots,
						transform: {
							tx: -9.4,
							ty: 8.25
						}
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -3.45,
							ty: 7.55
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -22.15,
							ty: -42.85,
							a: 1.031,
							d: 1.031
						}
					}
				],
				[
					// 1317
					{
						colorIdx: 0,
						ref: ref.sirain.body,
						transform: {
							tx: -1.25,
							ty: -0.5,
							a: 1.088,
							d: 1.088
						}
					},
					// 1328
					{
						colorIdx: 1,
						ref: ref.sirain.body_mark_dots,
						transform: {
							tx: -11.5,
							ty: 8.5,
							a: 1.088,
							d: 1.088
						}
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -5,
							ty: 7.7,
							a: 1.088,
							d: 1.088
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight,
						transform: {
							tx: -1.15,
							ty: -0.55,
							a: 1.08,
							d: 1.08
						}
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -25.25,
							ty: -45.55,
							a: 1.069,
							d: 1.069
						}
					}
				],
				[
					// 1317
					{
						colorIdx: 0,
						ref: ref.sirain.body
					},
					// 1330
					{
						colorIdx: 1,
						ref: ref.sirain.body_mark_spiral,
						transform: {
							tx: -8.55,
							ty: 8.1
						}
					},
					// 1320
					{
						ref: ref.sirain.body_glow,
						transform: {
							tx: -3.45,
							ty: 7.55
						},
						alpha: 0.3,
						blend: BLEND_MODES.ADD
					},
					// 780
					{
						ref: ref.sirain.body_highlight
					},
					body_hurt,
					// 1324
					{
						...body_special,
						transform: {
							tx: -22.3,
							ty: -40.45,
							a: 0.966,
							d: 0.966
						}
					}
				]
			]
		}
	],
	// 1351 p3
	head: [],
	// 1363 p7a
	left_leg: [],
	// 1385 p4a
	left_eye: [],
	// 1404 p5a
	left_ear: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
