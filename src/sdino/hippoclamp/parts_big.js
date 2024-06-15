// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_big.js';

// 1575 p7
const back_fin = {
	partIdx: 7,
	frames: [0, -1, -1],
	parts: [
		[
			// 1571
			{
				transform: {
					tx: 14,
					ty: 12.15,
					a: 0.636,
					d: 0.636
				},
				parts: [
					[
						// 1569
						{
							colorIdx: 1,
							ref: ref.hippoclamp.back_fin_reflection,
							transform: {
								tx: -22.1,
								ty: -8.7
							},
							blur: {
								x: 2,
								y: 2
							}
						},
						// 1570
						{
							colorIdx: 1,
							ref: ref.hippoclamp.back_fin
						}
					]
				]
			},
			// 1573
			{
				ref: ref.hippoclamp.back_fin_shine,
				transform: {
					tx: 1.35,
					ty: -4.45
				},
				alpha: 0.21,
				blur: { x: 2, y: 2 },
				blend: BLEND_MODES.ADD
			},
			// 1574
			{
				ref: ref.hippoclamp.back_fin_highlight
			}
		]
	]
};

export const parts_big = {
	// 1414 p6b
	right_front_fin: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, -1, 4],
			parts: [
				[
					// 1407
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_fin_fold,
						transform: {
							tx: 5.3,
							ty: -1.1
						}
					}
				],
				[
					// 1409
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_fin
					}
				],
				[
					// 1409
					{
						colorIdx: 1,
						ref: ref.hippoclamp.right_fin
					}
				],
				[
					// 1411
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_fin_dry,
						transform: {
							tx: 2.35,
							ty: -0.3
						}
					}
				],
				[
					// 1413
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_fin_small,
						transform: {
							tx: 0.55,
							ty: -0.75
						}
					}
				]
			]
		}
	],
	// 1425 p7
	body: [
		// 1416
		{
			colorIdx: 0,
			ref: ref.hippoclamp.body,
			transform: {
				tx: 0,
				ty: 0
			}
		},
		// body_glow had a glow filter (dist 5 col #ff0000) but it cannot be combined with blend add
		{
			partIdx: 7,
			frames: [0, 1, 2],
			parts: [
				[
					// 1418
					{
						ref: ref.hippoclamp.body_glow,
						transform: {
							tx: 9.15,
							ty: 3.85
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1419
					{
						ref: ref.hippoclamp.body_highlight,
						transform: {
							tx: 1.5,
							ty: 3
						}
					}
				],
				[
					// 1422
					{
						colorIdx: 0,
						ref: ref.hippoclamp.body_tail,
						transform: {
							tx: 30.4,
							ty: 0.45
						}
					},
					// 1423
					{
						ref: ref.hippoclamp.body_tail_glow,
						transform: {
							tx: 9.15,
							ty: 3.85
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1419
					{
						ref: ref.hippoclamp.body_highlight
					}
				],
				[
					// 1418
					{
						ref: ref.hippoclamp.body_glow,
						transform: {
							tx: 9.15,
							ty: 3.85
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1419
					{
						ref: ref.hippoclamp.body_highlight
					}
				]
			]
		},
		// 1420 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -0.35,
				ty: -6.95
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 18,
							ty: 5.55,
							a: 1.761,
							d: 1.761
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: -5.6,
							ty: 9.45,
							a: 1.341,
							d: 1.503
						}
					}
				],
				[
					// 357
					{
						ref: ref.hurt.bruise_purple,
						transform: {
							tx: -5.6,
							ty: 8.95,
							a: 0.155,
							d: 0.155,
							b: -1.409,
							c: 1.409
						}
					},
					// 259
					{
						ref: ref.hurt.scratch_blood,
						transform: {
							tx: 20.25,
							ty: 2.4,
							a: 1.388,
							d: 0.98
						}
					}
				]
			]
		}
	],
	// 1440 p8
	neck: [
		// 1428
		{
			colorIdx: 0,
			ref: ref.hippoclamp.neck
		},
		{
			partIdx: 8,
			frames: [-1, 0, 1],
			parts: [
				[
					// 1436
					{
						colorIdx: 1,
						ref: ref.hippoclamp.neck_dots
					}
				],
				[
					// 1439
					{
						colorIdx: 1,
						ref: ref.hippoclamp.neck_lines
					}
				]
			]
		},
		// 1429
		{
			ref: ref.hippoclamp.neck_highlight
		},
		// 1431
		// neck_glow had a glow filter (dist 5 col #ff0000) but it cannot be combined with blend add
		{
			ref: ref.hippoclamp.neck_glow,
			transform: {
				tx: 7.55,
				ty: 0.05
			},
			alpha: 0.41,
			blend: BLEND_MODES.ADD
		},
		// 1433 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -3.25,
				ty: 7.25
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 11.9,
							ty: -21.1
						}
					}
				],
				[
					// 1432
					{
						ref: ref.hippoclamp.neck_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 2.25,
							ty: -0.6
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 5.15,
							ty: -36.6
						}
					},
					// 359
					{
						ref: ref.hurt.scratch_blood,
						transform: {
							tx: 10.95,
							ty: -19.6
						}
					}
				]
			]
		}
	],
	// 1446 p4b
	right_eye: [
		{
			partIdx: 4,
			frames: [0, 1, 0, 2, 3],
			parts: [
				[
					// 1441
					{
						ref: ref.hippoclamp.right_eye_back,
						transform: {
							tx: -0.9,
							ty: -0.05,
							a: 1.287,
							d: 1.297
						}
					},
					// 1443
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_eye_border,
						transform: {
							tx: -0.65,
							ty: -0.25
						}
					}
				],
				[
					// 1441
					{
						ref: ref.hippoclamp.right_eye_back,
						transform: {
							tx: -0.9,
							ty: -0.05,
							a: 1.287,
							d: 1.297
						}
					},
					// 1443
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_eye_border,
						transform: {
							tx: -0.65,
							ty: -0.25
						}
					},
					// 1444
					{
						ref: ref.hippoclamp.right_eye_pupil
					}
				],
				[
					// 1445
					{
						ref: ref.hippoclamp.right_eye_black
					}
				],
				[
					// 1441
					{
						ref: ref.hippoclamp.right_eye_back
					},
					// 1443
					{
						colorIdx: 0,
						ref: ref.hippoclamp.right_eye_border,
						transform: {
							tx: 0.2,
							ty: -0.15,
							a: 0.776,
							d: 0.776
						}
					}
				]
			]
		}
	],
	// 1455 p5b
	right_ear: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				// 1448
				{
					colorIdx: 0,
					ref: ref.hippoclamp.right_ear
				},
				// 1450
				{
					colorIdx: 0,
					ref: ref.hippoclamp.right_ear_square,
					transform: {
						tx: -1.05,
						ty: 0.5
					}
				},
				// 1452
				{
					colorIdx: 0,
					ref: ref.hippoclamp.right_ear_long,
					transform: {
						tx: 18.05,
						ty: -0.45
					}
				},
				// 1454
				{
					colorIdx: 0,
					ref: ref.hippoclamp.right_ear_stub,
					transform: {
						tx: 1.15,
						ty: 2.35
					}
				}
			]
		}
	],
	// 1482 p6a
	// glow had a glow filter (dist 5 color 0xff0000) but it cannot be combined with blend add
	left_fins: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 1457
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_fins_fold,
						transform: {
							tx: -8.9,
							ty: -3.05
						}
					},
					// 1458
					{
						ref: ref.hippoclamp.left_fins_fold_highlight
					}
				],
				[
					// 1460
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_fins
					},
					// 1461
					{
						ref: ref.hippoclamp.left_fins_glow,
						transform: {
							tx: -11.85,
							ty: -13
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1463
					{
						ref: ref.hippoclamp.left_fins_highlight
					}
				],
				[
					// 1460
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_fins
					},
					// 1469
					{
						colorIdx: 1,
						ref: ref.hippoclamp.left_fins_color
					},
					// 1461
					{
						ref: ref.hippoclamp.left_fins_glow,
						transform: {
							tx: -11.85,
							ty: -13
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1470 / 1463
					{
						ref: ref.hippoclamp.left_fins_highlight
					}
				],
				[
					// 1472
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_fins_dry,
						transform: {
							tx: -6,
							ty: -1.75
						}
					},
					// 1473
					{
						ref: ref.hippoclamp.left_fins_dry_highlight
					}
				],
				[
					// 1475
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_fins_slug,
						transform: {
							tx: -6,
							ty: -1.75
						}
					},
					// 1477
					{
						ref: ref.hippoclamp.left_fins_slug_glow,
						transform: {
							tx: -11.85,
							ty: -13
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1478
					{
						ref: ref.hippoclamp.left_fins_slug_highlight
					}
				],
				[
					// 1480
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_fins_small,
						transform: {
							tx: -6,
							ty: 1.1
						}
					},
					// 1481
					{
						ref: ref.hippoclamp.left_fins_small_highlight
					}
				]
			]
		}
	],
	// 1488
	// glow had a glow filter (dist 5 color 0xff0000) but it cannot be combined with blend add
	head: [
		// 1484
		{
			colorIdx: 0,
			ref: ref.hippoclamp.head
		},
		// 1485
		{
			ref: ref.hippoclamp.head_highlight
		},
		// 1487
		{
			ref: ref.hippoclamp.head_glow,
			transform: {
				tx: 2.2,
				ty: 4.25
			},
			alpha: 0.41,
			blend: BLEND_MODES.ADD
		}
	],
	// 1541 p3
	snout: [
		{
			partIdx: 3,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
			parts: [
				[
					// 1490
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout,
						transform: {
							tx: 0,
							ty: -0.65
						}
					},
					// 1491
					{
						ref: ref.hippoclamp.snout_highlight
					},
					// 1493
					{
						ref: ref.hippoclamp.snout_glow,
						transform: {
							tx: 11.65,
							ty: 4.15
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					}
				],
				[
					// 1494
					{
						ref: ref.hippoclamp.snout_plunger_teeth
					},
					// 1496
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_plunger,
						transform: {
							tx: 0,
							ty: -0.65
						}
					},
					// 1497
					{
						ref: ref.hippoclamp.snout_plunger_highlight
					},
					// 1499
					{
						ref: ref.hippoclamp.snout_plunger_glow,
						transform: {
							tx: -2.9,
							ty: 2.5
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					}
				],
				[
					// 1500
					{
						ref: ref.hippoclamp.snout_predator_teeth
					},
					// 1504
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_predator,
						transform: {
							tx: 3.7,
							ty: -5.15
						}
					},
					// 1505
					{
						ref: ref.hippoclamp.snout_predator_highlight
					},
					// 1507
					{
						ref: ref.hippoclamp.snout_predator_glow,
						transform: {
							tx: 0.2,
							ty: 5.55
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					}
				],
				[
					// 1508
					{
						ref: ref.hippoclamp.snout_curved_mouth
					},
					// 1510
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_curved,
						transform: {
							tx: -10.1,
							ty: -8.25
						}
					},
					// 1511
					{
						ref: ref.hippoclamp.snout_curved_highlight
					},
					// 1513
					{
						ref: ref.hippoclamp.snout_curved_glow,
						transform: {
							tx: -5.4,
							ty: 10.8
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					}
				],
				[
					// 1515
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_trunk,
						transform: {
							tx: 1,
							ty: 10
						}
					},
					// 1516
					{
						ref: ref.hippoclamp.snout_trunk_highlight
					},
					// 1518
					{
						ref: ref.hippoclamp.snout_trunk_glow,
						transform: {
							tx: 2.8,
							ty: 8.6
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					}
				],
				[
					// 1520
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_mouth,
						transform: {
							tx: -2.3,
							ty: -2
						}
					},
					// 1522
					{
						colorIdx: 1,
						ref: ref.hippoclamp.snout_mouth_lips,
						transform: {
							tx: -8.15,
							ty: 4.85,
							a: 0.995,
							d: 0.995,
							b: 0.1,
							c: -0.1
						}
					},
					// 1523
					{
						ref: ref.hippoclamp.snout_mouth_highlight
					},
					// 1525
					{
						ref: ref.hippoclamp.snout_mouth_glow,
						transform: {
							tx: -5.4,
							ty: 10.8
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					}
				],
				[
					// 1527
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_whistle,
						transform: {
							tx: -2.3,
							ty: -2
						}
					},
					// 1529
					{
						ref: ref.hippoclamp.snout_whistle_glow,
						transform: {
							tx: -5.4,
							ty: 10.8
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1530
					{
						ref: ref.hippoclamp.snout_whistle_highlight
					}
				],
				[
					// 1532
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_cannon,
						transform: {
							tx: -2.3,
							ty: -2
						}
					},
					// 1534
					{
						ref: ref.hippoclamp.snout_cannon_glow,
						transform: {
							tx: -5.4,
							ty: 10.8
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1535
					{
						ref: ref.hippoclamp.snout_cannon_highlight
					}
				],
				[
					// 1537
					{
						colorIdx: 0,
						ref: ref.hippoclamp.snout_curled,
						transform: {
							tx: -2.3,
							ty: -2
						}
					},
					// 1539
					{
						ref: ref.hippoclamp.snout_curled_glow,
						transform: {
							tx: -5.4,
							ty: 10.8
						},
						alpha: 0.41,
						blend: BLEND_MODES.ADD
					},
					// 1540
					{
						ref: ref.hippoclamp.snout_curled_highlight
					}
				]
			]
		}
	],
	// 1556 p4a
	left_eye: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 1548
				[
					// 1542
					{
						ref: ref.hippoclamp.left_eye_back
					},
					// 1544
					{
						colorIdx: 2,
						ref: ref.hippoclamp.left_eye,
						transform: {
							tx: 0.8,
							ty: 0.95
						}
					},
					// 1545
					{
						ref: ref.hippoclamp.left_eye_highlight
					},
					// 1547
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_eye_socket
					}
				],
				// 1550
				[
					// 1549
					{
						ref: ref.hippoclamp.left_eye_shocked
					},
					// 1547
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_eye_socket
					}
				],
				// 1552
				[
					// 1551
					{
						ref: ref.hippoclamp.left_eye_fool
					},
					// 1547
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_eye_socket
					}
				],
				[
					// 1553
					{
						ref: ref.hippoclamp.left_eye_black
					}
				],
				// 1555
				[
					// 1554
					{
						ref: ref.hippoclamp.left_eye_small,
						transform: {
							tx: 0.05,
							ty: 0.95,
							a: 0.754,
							d: 0.754,
							b: -0.151,
							c: 0.151
						}
					},
					// 1547
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_eye_socket,
						transform: {
							tx: 0.05,
							ty: 0.95,
							a: 0.754,
							d: 0.754,
							b: -0.151,
							c: 0.151
						}
					}
				]
			]
		}
	],
	// 1566 p5a
	left_ear: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				[
					// 1558
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_ear
					}
				],
				[
					// 1560
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_ear_square,
						transform: {
							tx: -1.55,
							ty: -0.1
						}
					}
				],
				[
					// 1562
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_ear_long,
						transform: {
							tx: 14.45,
							ty: -1.9
						}
					},
					// 1563
					{
						ref: ref.hippoclamp.left_ear_long_highlight
					}
				],
				[
					// 1565
					{
						colorIdx: 0,
						ref: ref.hippoclamp.left_ear_stub,
						transform: {
							tx: -2.25,
							ty: 1.75
						}
					}
				]
			]
		}
	],
	// 1576
	back_fin: [
		{
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			transform: {
				tx: 9.7,
				ty: 13.1
			},
			parts: [
				{
					...back_fin,
					transform: {
						tx: 2.05,
						ty: 1.4
					}
				},
				{
					...back_fin,
					transform: {
						tx: 2.35,
						ty: 0.1,
						a: 1.053,
						d: 1.058
					}
				},
				{
					...back_fin,
					transform: {
						tx: 2.65,
						ty: -1.25,
						a: 1.106,
						d: 1.116
					}
				},
				{
					...back_fin,
					transform: {
						tx: 2.95,
						ty: -2.55,
						a: 1.158,
						d: 1.174
					}
				},
				{
					...back_fin,
					transform: {
						tx: 3.25,
						ty: -3.85,
						a: 1.211,
						d: 1.232
					}
				},
				{
					...back_fin,
					transform: {
						tx: 3.55,
						ty: -5.2,
						a: 1.264,
						d: 1.29
					}
				},
				{
					...back_fin,
					transform: {
						tx: 3.85,
						ty: -6.5,
						a: 1.317,
						d: 1.348
					}
				},
				{
					...back_fin,
					transform: {
						tx: 4.15,
						ty: -7.8,
						a: 1.37,
						d: 1.406
					}
				},
				{
					...back_fin,
					transform: {
						tx: 4.45,
						ty: -9.15,
						a: 1.423,
						d: 1.464
					}
				},
				{
					...back_fin,
					transform: {
						tx: 4.75,
						ty: -10.45,
						a: 1.475,
						d: 1.522
					}
				},
				{
					...back_fin,
					transform: {
						tx: 4.9,
						ty: -15.6,
						a: 1.732,
						d: 1.809
					}
				}
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
