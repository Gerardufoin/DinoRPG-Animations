// @ts-check
import { ref } from '../references.js';

// 1495 (wingA, wingB)
const wings = {
	partIdx: 15,
	frames: [-1, -1, 0, -1],
	parts: [
		// 1494 -> 1493 -> 1492
		{
			colorIdx: 0,
			ref: ref.smog.wings,
			transform: {
				tx: -0.5,
				ty: -1.9
			},
			resolution: 0.5
		}
	]
};

export let parts = {
	// 1473 _p8
	tail: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 1464
				{
					colorIdx: 0,
					ref: ref.smog.tail,
					transform: {
						tx: 2.75,
						ty: -1.9,
						a: 0.877,
						d: 0.877
					}
				},
				// 1466
				{
					colorIdx: 0,
					ref: ref.smog.tail_curl,
					transform: {
						tx: 3.05,
						ty: -2.2
					}
				},
				// 1468
				{
					colorIdx: 0,
					ref: ref.smog.tail_bend,
					transform: {
						tx: 3.05,
						ty: -2.2
					}
				},
				// 1464
				{
					colorIdx: 0,
					ref: ref.smog.tail,
					transform: {
						tx: 3.15,
						ty: -2.15,
						a: 1.128,
						d: 1.128
					}
				},
				// 1470
				{
					colorIdx: 0,
					ref: ref.smog.tail_pig,
					transform: {
						tx: 3.05,
						ty: -2.2
					}
				},
				// 1472
				{
					colorIdx: 0,
					ref: ref.smog.tail_curve,
					transform: {
						tx: 3.05,
						ty: -2.2
					}
				}
			]
		}
	],
	// 1480
	foot: [
		// 1475
		{
			colorIdx: 0,
			ref: ref.smog.foot,
			transform: {
				tx: -2.9,
				ty: 1.25
			}
		},
		// 1479
		{
			partIdx: 15,
			frames: [-1, 0, -1],
			transform: {
				tx: -3.0,
				ty: 1.4
			},
			parts: [
				// 1478->1477
				{
					colorIdx: 2,
					ref: ref.smog.foot_special,
					transform: {
						tx: -4.45,
						ty: -2.45
					}
				}
			]
		}
	],
	// 1483
	leg: [
		// 1482
		{
			colorIdx: 0,
			ref: ref.smog.leg,
			transform: {
				tx: 1.2
			}
		}
	],
	// 1486
	foreleg: [
		// 1485
		{
			colorIdx: 0,
			ref: ref.smog.foreleg,
			transform: {
				tx: -1.5,
				ty: 0.1
			}
		}
	],
	// 1489
	arm: [
		// 1488
		{
			colorIdx: 0,
			ref: ref.smog.arm,
			transform: {
				tx: 0.45,
				ty: 1.75
			}
		}
	],
	// 1502 _p7
	body: [
		// 1491
		{
			colorIdx: 0,
			ref: ref.smog.body,
			transform: {
				tx: 0.15,
				ty: 0.25
			}
		},
		// 1495 wingB
		{
			...wings,
			transform: {
				tx: -5.95,
				ty: -12.25,
				a: 0.178,
				d: 0.201,
				b: 0.0,
				c: 0.063
			}
		},
		{
			partIdx: 7,
			frames: [0, 1, 2, -1],
			parts: [
				// 1497
				{
					colorIdx: 3,
					ref: ref.smog.body_fin,
					transform: {
						tx: 0.55,
						ty: -2.05
					}
				},
				// 1499
				{
					colorIdx: 3,
					ref: ref.smog.body_plates,
					transform: {
						tx: 0.55,
						ty: -2.05
					}
				},
				// 1501
				{
					colorIdx: 3,
					ref: ref.smog.body_small_plates,
					transform: {
						tx: -0.25,
						ty: -1.65
					}
				}
			]
		},
		// 1495 wingA
		{
			...wings,
			transform: {
				tx: 0.65,
				ty: -12.1,
				a: 0.201,
				d: 0.201
			}
		}
	],
	// 1511
	neck: [
		// 1504
		{
			colorIdx: 0,
			ref: ref.smog.neck,
			transform: {
				tx: -0.7,
				ty: -1.8
			}
		},
		// 1506
		{
			colorIdx: 1,
			ref: ref.smog.neck_throat,
			transform: {
				tx: -0.7,
				ty: -1.8
			}
		},
		// 1510
		{
			partIdx: 15,
			frames: [-1, 0, -1],
			transform: {
				tx: -0.8,
				ty: 0.5
			},
			parts: [
				// 1510 -> 1509 -> 1508 -> 1507
				{
					colorIdx: 3,
					ref: ref.smog.neck_special,
					transform: {
						tx: -1.3,
						ty: -2.25
					}
				}
			]
		}
	],
	// 1514
	jaw: [
		// 1513 -> 1512
		{
			colorIdx: 0,
			ref: ref.smog.jaw,
			transform: {
				tx: -2.5,
				ty: 0.75
			}
		}
	],
	// 1539 _p4
	head: [
		// 1516
		{
			colorIdx: 0,
			ref: ref.smog.head,
			transform: {
				tx: -3.15,
				ty: 0.2
			}
		},
		{
			partIdx: 4,
			frames: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			parts: [
				// 1518
				{
					colorIdx: 3,
					ref: ref.smog.head_hair,
					transform: {
						tx: 0.75,
						ty: -3.8
					}
				},
				// 1520
				{
					colorIdx: 0,
					ref: ref.smog.head_wave,
					transform: {
						tx: 0.35,
						ty: -4.1
					}
				},
				// 1522
				{
					colorIdx: 0,
					ref: ref.smog.head_axe,
					transform: {
						tx: -0.85,
						ty: -5.0
					}
				},
				// 1524
				{
					colorIdx: 0,
					ref: ref.smog.head_curl,
					transform: {
						tx: -0.1,
						ty: -4.55
					}
				},
				// 1526
				{
					colorIdx: 3,
					ref: ref.smog.head_hair_curl,
					transform: {
						tx: -2.35,
						ty: -3.85
					}
				},
				// 1528
				{
					colorIdx: 0,
					ref: ref.smog.head_bald,
					transform: {
						tx: -0.6,
						ty: -3.45
					}
				},
				// 1530
				{
					colorIdx: 0,
					ref: ref.smog.head_chicken,
					transform: {
						tx: 0.15,
						ty: -2.8
					}
				},
				// 1532
				{
					colorIdx: 0,
					ref: ref.smog.head_strong_curl,
					transform: {
						tx: 1.2,
						ty: -4.6
					}
				},
				// 1534
				{
					colorIdx: 3,
					ref: ref.smog.head_arc,
					transform: {
						tx: -1.0,
						ty: -2.1
					}
				},
				// 1536
				{
					colorIdx: 3,
					ref: ref.smog.head_dots,
					transform: {
						tx: -1.0,
						ty: -2.1
					}
				},
				// 1538
				{
					colorIdx: 3,
					ref: ref.smog.head_scales,
					transform: {
						tx: -1.0,
						ty: -2.1
					}
				}
			]
		}
	],
	// 1548 _p3
	eyes: [
		// 1540
		{
			ref: ref.smog.eye
		},
		// 1542
		{
			colorIdx: 2,
			ref: ref.smog.eye_pupil,
			transform: {
				tx: -0.45,
				ty: 0.05
			}
		},
		// 1543
		{
			partIdx: 3,
			frames: [0, -1, 0, -1],
			parts: [
				{
					ref: ref.smog.eyelid
				}
			]
		},
		// 1547
		{
			partIdx: 15,
			frames: [-1, -1, 0, 1],
			transform: {
				tx: -5.1,
				ty: -2.05,
				a: 0.167,
				d: 0.167
			},
			parts: [
				// 1544
				{
					ref: ref.smog.glasses,
					transform: {
						tx: 19.15,
						ty: 11.95
					},
					resolution: 0.5
				},
				// 1546 -> 1545
				{
					ref: ref.smog.headset,
					transform: {
						tx: 34.8,
						ty: -12.5,
						a: 1.322,
						d: 1.322
					},
					resolution: 0.5
				}
			]
		}
	]
};
