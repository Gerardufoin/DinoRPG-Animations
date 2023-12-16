// @ts-check
import { ref } from '../references.js';

// 1302
const flames = {
	ref: ref.quetzu.back_flame,
	glow: {
		distance: 2,
		color: '#ff0000',
		quality: 1,
		strength: 0.7 //1.47
	},
	blur: {
		x: 0.8, //3
		y: 0.8, //3
		quality: 1
	}
};

// 1303 p2
const back_flames = {
	partIdx: 2,
	frames: [0, 1, 2],
	transform: {
		tx: 1.0,
		ty: -5.7,
		a: 0.268,
		d: 0.268
	},
	parts: [
		// 1302
		{
			...flames,
			transform: {
				tx: 0.0,
				ty: 3.7,
				a: 0.896,
				d: 0.904
			}
		},
		// 1302
		{
			...flames,
			transform: {
				tx: 0.0,
				ty: 7.45,
				a: 0.801,
				d: 0.808
			}
		},
		// 1302
		{
			...flames,
			transform: {
				tx: 0.0,
				ty: 16.4,
				a: 0.571,
				d: 0.576
			}
		}
	]
};

// 1039 special
const arm_top_special = {
	partIdx: 15,
	frames: [-1, 0],
	parts: [
		// 1038
		{
			colorIdx: 2,
			ref: ref.quetzu.arm_top_special,
			transform: {
				a: 1.162,
				d: 1.162
			}
		}
	]
};

// 1359 special
const body_special = {
	partIdx: 15,
	frames: [-1, 0],
	parts: [
		[
			// 1357
			{
				colorIdx: 2,
				ref: ref.quetzu.body_special,
				transform: {
					tx: 0.15,
					ty: 0.35,
					a: 1.19,
					d: 1.19
				}
			},
			// 1358
			{
				ref: ref.quetzu.body_special_belt
			}
		]
	]
};

export let parts = {
	// 1304 p5
	back: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			parts: [
				// 1292
				{
					colorIdx: 1,
					ref: ref.quetzu.back_spike,
					transform: {
						tx: -1.15
					}
				},
				// 1294
				{
					colorIdx: 1,
					ref: ref.quetzu.back_fur,
					transform: {
						tx: -0.15,
						ty: -1.1
					},
					resolution: 2.5
				},
				// 1296
				{
					colorIdx: 1,
					ref: ref.quetzu.back_small_wing,
					transform: {
						tx: -0.4,
						ty: -1.75
					},
					resolution: 2.5
				},
				// 1298
				{
					colorIdx: 1,
					ref: ref.quetzu.back_wing,
					transform: {
						tx: -0.9,
						ty: 2.4
					}
				},
				// 1300
				{
					colorIdx: 1,
					ref: ref.quetzu.back_stump,
					transform: {
						tx: 0.15,
						ty: 2.7
					}
				},
				// 1303
				[back_flames, back_flames]
			]
		}
	],
	// 1310
	right_arm_top: [
		// 1306
		{
			colorIdx: 0,
			ref: ref.quetzu.r_arm_top,
			transform: {
				tx: 1.1
			}
		},
		// 1039 special
		{
			...arm_top_special,
			transform: {
				tx: 1.5,
				ty: 0.5,
				a: -0.778,
				d: 0.778
			}
		}
	],
	// 1335 p4
	right_arm_bottom: [
		// 1312
		{
			colorIdx: 0,
			ref: ref.quetzu.r_arm_bottom,
			transform: {
				tx: 0.2,
				ty: -1.25
			}
		},
		// claws
		{
			partIdx: 4,
			frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
			parts: [
				// 1314
				{
					ref: ref.quetzu.r_claws_tri_big,
					transform: {
						tx: 0.2,
						ty: 6.25
					}
				},
				// 1330
				{
					ref: ref.quetzu.r_claws_tri_small,
					transform: {
						tx: -0.9,
						ty: 6.05
					}
				},
				// 1332
				{
					ref: ref.quetzu.r_claws_single,
					transform: {
						tx: 0.85,
						ty: 7.55
					}
				},
				// 1334
				{
					ref: ref.quetzu.r_claws_double,
					transform: {
						tx: 0.45,
						ty: 7.05
					}
				}
			]
		},
		// tatoos
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6],
			parts: [
				// 1316
				{
					colorIdx: 0,
					ref: ref.quetzu.r_mark_dot,
					transform: {
						tx: 0.35,
						ty: 1.95
					}
				},
				// 1318
				{
					colorIdx: 0,
					ref: ref.quetzu.r_mark_spiral,
					transform: {
						tx: 0.3,
						ty: 1.6
					}
				},
				// 1320,
				{
					colorIdx: 0,
					ref: ref.quetzu.r_mark_triangles,
					transform: {
						tx: 0.35,
						ty: 2.85
					}
				},
				// 1322
				{
					colorIdx: 0,
					ref: ref.quetzu.r_mark_circle,
					transform: {
						tx: 0.25,
						ty: 2.1
					}
				},
				// 1324
				{
					ref: ref.quetzu.r_arm_spike,
					transform: {
						tx: -2.25,
						ty: -0.2
					}
				},
				// 1326
				{
					colorIdx: 0,
					ref: ref.quetzu.r_mark_waves,
					transform: {
						tx: 0.2,
						ty: 3.05
					}
				},
				// 1328
				{
					ref: ref.quetzu.r_arm_spike_small,
					transform: {
						tx: -1.2,
						ty: 4.3
					}
				}
			]
		}
	],
	// 1348 p6
	tail_end: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 1337
				{
					colorIdx: 0,
					ref: ref.quetzu.tail_end
				},
				// 1339
				{
					colorIdx: 0,
					ref: ref.quetzu.tail_end_curl,
					transform: {
						tx: -2.9,
						ty: -0.5
					}
				},
				// 1341
				{
					colorIdx: 0,
					ref: ref.quetzu.tail_end_double,
					transform: {
						tx: -1,
						ty: 0.2
					}
				},
				// 1343
				{
					colorIdx: 0,
					ref: ref.quetzu.tail_end_dot,
					transform: {
						tx: -2.55,
						ty: -0.2
					}
				},
				// 1345
				{
					colorIdx: 0,
					ref: ref.quetzu.tail_end_wave,
					transform: {
						tx: -2.6,
						ty: -1.8
					}
				},
				// 1347
				{
					colorIdx: 0,
					ref: ref.quetzu.tail_end_hook,
					transform: {
						tx: -0.1,
						ty: 0.8
					}
				}
			]
		}
	],
	// 1351
	tail: [
		// 1350
		{
			colorIdx: 0,
			ref: ref.quetzu.tail,
			transform: {
				tx: 0.1,
				ty: -2.8
			}
		}
	],
	// 1368 p3
	body: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				[
					// 1353
					{
						colorIdx: 0,
						ref: ref.quetzu.body,
						transform: {
							tx: 0.15,
							ty: 0.2
						}
					},
					// 1355
					{
						colorIdx: 1,
						ref: ref.quetzu.body_tummy,
						transform: {
							tx: 0.2,
							ty: 3.9
						}
					},
					// 1359
					{
						...body_special,
						transform: {
							tx: 5.3,
							ty: 10.3
						}
					}
				],
				[
					// 1361
					{
						colorIdx: 0,
						ref: ref.quetzu.body_crook,
						transform: {
							tx: -1.85,
							ty: -0.05
						}
					},
					// 1363
					{
						colorIdx: 1,
						ref: ref.quetzu.body_crook_tummy,
						transform: {
							tx: -0.2,
							ty: 6.8
						}
					},
					// 1359
					{
						...body_special,
						transform: {
							tx: 3.8,
							ty: 11.2,
							a: 0.839,
							d: 0.839,
							b: 0.0,
							c: 0.053
						}
					}
				],
				[
					// 1365
					{
						colorIdx: 0,
						ref: ref.quetzu.body_buff,
						transform: {
							tx: -1.7,
							ty: -0.05,
							a: 1.0,
							d: 1.042,
							b: 0.0,
							c: -0.047
						}
					},
					// 1367
					{
						colorIdx: 1,
						ref: ref.quetzu.body_buff_tummy,
						transform: {
							tx: -1.8,
							ty: 3.05,
							a: 1.0,
							d: 1.042,
							b: 0.0,
							c: -0.047
						}
					},
					// 1359
					{
						...body_special,
						transform: {
							tx: 3.8,
							ty: 11.2,
							a: 0.839,
							d: 0.839,
							b: 0.0,
							c: 0.053
						}
					}
				]
			]
		}
	],
	// 1371
	left_arm_top: [
		// 1370
		{
			colorIdx: 0,
			ref: ref.quetzu.l_arm_top,
			transform: {
				tx: 1.25
			}
		},
		// 1039 special
		{
			...arm_top_special,
			transform: {
				tx: 5.8,
				ty: 0.6
			}
		}
	],
	// 1396 p4
	left_arm_bottom: [
		// 1373
		{
			colorIdx: 0,
			ref: ref.quetzu.l_arm_bottom,
			transform: {
				tx: 0.4,
				ty: -0.5
			}
		},
		// claws
		{
			partIdx: 4,
			frames: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
			parts: [
				// 1375
				{
					ref: ref.quetzu.l_claws_tri_big,
					transform: {
						tx: -1.1,
						ty: 7.7
					}
				},
				// 1391
				{
					ref: ref.quetzu.l_claws_tri_small,
					transform: {
						tx: -1.0,
						ty: 8.25
					}
				},
				// 1393
				{
					ref: ref.quetzu.l_claws_single,
					transform: {
						tx: 1.4,
						ty: 10.15
					}
				},
				// 1395
				{
					ref: ref.quetzu.l_claws_double,
					transform: {
						tx: 0.85,
						ty: 10.0
					}
				}
			]
		},
		// tatoos
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6],
			parts: [
				// 1377
				{
					colorIdx: 0,
					ref: ref.quetzu.l_mark_dot,
					transform: {
						tx: 2.2,
						ty: 3.15
					}
				},
				// 1379
				{
					colorIdx: 0,
					ref: ref.quetzu.l_mark_spiral,
					transform: {
						tx: 3.55,
						ty: 4.9
					}
				},
				// 1381
				{
					colorIdx: 0,
					ref: ref.quetzu.l_mark_triangles,
					transform: {
						tx: 2.35,
						ty: 6.6
					}
				},
				// 1383
				{
					colorIdx: 0,
					ref: ref.quetzu.l_mark_circle,
					transform: {
						tx: 2.95,
						ty: 5.2
					}
				},
				// 1385
				{
					ref: ref.quetzu.l_arm_spike,
					transform: {
						tx: 5.0,
						ty: 3.05
					}
				},
				// 1387
				{
					colorIdx: 0,
					ref: ref.quetzu.l_mark_waves,
					transform: {
						tx: 3.6,
						ty: 5.9
					}
				},
				// 1389
				{
					ref: ref.quetzu.l_arm_spike_small,
					transform: {
						tx: 3.25,
						ty: 6.45
					}
				}
			]
		}
	],
	// 1441 p7
	head: [
		// 1400
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: 1.4,
				ty: 7.2
			},
			parts: [
				// 1399 -> 1398
				{
					colorIdx: 2,
					ref: ref.quetzu.head_special,
					transform: {
						a: -1.0,
						d: 1.0
					}
				}
			]
		},
		// head
		{
			partIdx: 7,
			frames: [
				0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
				5, 5, 5, 5, 5, 5, 5
			],
			parts: [
				// 1402
				{
					colorIdx: 0,
					ref: ref.quetzu.head,
					transform: {
						tx: 0.65,
						ty: 2.9
					}
				},
				// 1424
				{
					colorIdx: 0,
					ref: ref.quetzu.head_bored,
					transform: {
						ty: 3.2
					}
				},
				// 1428
				{
					colorIdx: 0,
					ref: ref.quetzu.head_trunk,
					transform: {
						tx: 0.5,
						ty: 3.15
					}
				},
				// 1432
				{
					colorIdx: 0,
					ref: ref.quetzu.head_cat,
					transform: {
						ty: 3.15
					}
				},
				// 1435
				{
					colorIdx: 0,
					ref: ref.quetzu.head_dog,
					transform: {
						tx: -0.25,
						ty: 3.2
					}
				},
				// 1439
				{
					colorIdx: 0,
					ref: ref.quetzu.head_smug,
					transform: {
						tx: 0.15,
						ty: 3.15
					}
				}
			]
		},
		// horns
		{
			partIdx: 7,
			frames: [
				0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6,
				0, 1, 2, 3, 4, 5, 6
			],
			parts: [
				// 1404
				{
					colorIdx: 0,
					ref: ref.quetzu.head_horn,
					transform: {
						tx: 1.25
					}
				},
				// 1406
				{
					colorIdx: 0,
					ref: ref.quetzu.head_ghost,
					transform: {
						tx: 1.2,
						ty: -1.75
					}
				},
				// 1408
				{
					colorIdx: 0,
					ref: ref.quetzu.head_rabbit,
					transform: {
						tx: 1.15,
						ty: -2.35
					}
				},
				[
					// 1410
					{
						colorIdx: 0,
						ref: ref.quetzu.head_goat_horns_mask,
						transform: {
							tx: 1.1,
							ty: 0.55
						}
					},
					// 1411
					{
						ref: ref.quetzu.head_goat_horns
					}
				],
				[
					// 1413
					{
						colorIdx: 0,
						ref: ref.quetzu.head_triple_horns_mask,
						transform: {
							tx: 0.3,
							ty: -0.55
						}
					},
					// 1414
					{
						ref: ref.quetzu.head_triple_horns
					}
				],
				[
					// 1416
					{
						colorIdx: 0,
						ref: ref.quetzu.head_hair_mask,
						transform: {
							tx: 1.15,
							ty: 1.6
						}
					},
					// 1418
					{
						colorIdx: 2,
						ref: ref.quetzu.head_hair,
						transform: {
							tx: 1.85,
							ty: -3.3
						}
					}
				],
				[
					// 1420
					{
						colorIdx: 0,
						ref: ref.quetzu.head_unicorn,
						transform: {
							tx: -1.3,
							ty: -1.75
						}
					},
					// 1422
					{
						colorIdx: 2,
						ref: ref.quetzu.head_unicorn_hair,
						transform: {
							tx: 3.7,
							ty: -2.55
						}
					}
				]
			]
		},
		// 1399
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 1398
				{
					colorIdx: 2,
					ref: ref.quetzu.head_special,
					transform: {
						tx: 7.45,
						ty: 7.2
					}
				}
			]
		}
	]
};
