// @ts-check
import { ref } from '../references.js';

export let parts = {
	// 1569 p8
	tail: [
		{
			partIdx: 8,
			frames: [0, 1, 2],
			parts: [
				// 1564
				{
					colorIdx: 0,
					ref: ref.triceragon.tail_curl
				},
				// 1566
				{
					colorIdx: 0,
					ref: ref.triceragon.tail_wave
				},
				// 1568
				{
					colorIdx: 0,
					ref: ref.triceragon.tail
				}
			]
		}
	],
	// 1573
	leg: [
		// 1571
		{
			colorIdx: 0,
			ref: ref.triceragon.leg,
			transform: {
				tx: -0.1,
				ty: -1.3
			}
		},
		// 1572
		{
			ref: ref.triceragon.leg_nails
		}
	],
	// 1575
	body: [
		// 1574 -> 780
		{
			colorIdx: 1,
			ref: ref.shared.body,
			transform: {
				tx: 0.05
			}
		}
	],
	// 1582 p6
	back: [
		// 1577
		{
			colorIdx: 0,
			ref: ref.triceragon.back
		},
		// 1581
		{
			partIdx: 15,
			frames: [-1, 0],
			transform: {
				tx: -0.5,
				ty: -2.4
			},
			parts: [
				// 1581
				[
					// 1578
					{
						ref: ref.triceragon.saddle
					},
					// 1580
					{
						ref: ref.triceragon.handle,
						transform: {
							tx: -3.15,
							ty: -5.15,
							a: 0.735,
							d: 0.735,
							b: -0.446,
							c: 0.446
						}
					},
					// 1580
					{
						ref: ref.triceragon.handle,
						transform: {
							tx: 3.55,
							ty: -3.2
						}
					}
				]
			]
		}
	],
	// 1590 p3
	eye: [
		{
			partIdx: 3,
			frames: [0, 1, 2],
			parts: [
				[
					// 1583
					{
						ref: ref.triceragon.eye
					},
					// 1585
					{
						colorIdx: 0,
						ref: ref.triceragon.eye_skin,
						transform: {
							tx: -0.35,
							ty: 0.1
						}
					},
					// 1587
					{
						colorIdx: 2,
						ref: ref.triceragon.eye_pupil,
						transform: {
							tx: -0.1,
							ty: 0.4
						}
					}
				],
				[
					// 1588
					{
						ref: ref.triceragon.eye_wide
					},
					// 1585
					{
						colorIdx: 0,
						ref: ref.triceragon.eye_skin,
						transform: {
							tx: -0.35,
							ty: 0.55,
							a: 1.186,
							d: 0.681,
							b: -0.198,
							c: 0.0
						}
					},
					// 1587
					{
						colorIdx: 2,
						ref: ref.triceragon.eye_pupil,
						transform: {
							tx: -0.1,
							ty: 0.4
						}
					}
				],
				[
					// 1589
					{
						ref: ref.triceragon.eye_big
					},
					// 1585
					{
						colorIdx: 0,
						ref: ref.triceragon.eye_skin,
						transform: {
							tx: -0.35,
							ty: 0.1
						}
					},
					// 1587
					{
						colorIdx: 2,
						ref: ref.triceragon.eye_pupil,
						transform: {
							tx: 0.9,
							ty: 0.25,
							a: 0.563,
							d: 0.563
						}
					}
				]
			]
		}
	],
	// 1595 p4
	head: [
		{
			partIdx: 4,
			frames: [0, 1, 1],
			parts: [
				// 1594
				{
					colorIdx: 0,
					ref: ref.triceragon.head,
					transform: {
						tx: -0.2,
						ty: 0.8
					}
				},
				// 1592
				{
					colorIdx: 0,
					ref: ref.triceragon.head_long,
					transform: {
						tx: -0.2,
						ty: 0.8
					}
				}
			]
		}
	],
	// 1602 p6
	nose: [
		// 1597
		{
			colorIdx: 0,
			ref: ref.triceragon.nose,
			transform: {
				tx: -0.3,
				ty: -0.05
			}
		},
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				// 1598
				{
					ref: ref.triceragon.nose_horn
				},
				// 1599
				{
					ref: ref.triceragon.nose_horn_fat
				},
				// 1600
				{
					ref: ref.triceragon.nose_horn_twirl
				},
				// 1601
				{
					ref: ref.triceragon.nose_horn_round
				}
			]
		}
	],
	// 1620 p5
	frill: [
		{
			partIdx: 5,
			frames: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
			parts: [
				// 1604
				{
					colorIdx: 0,
					ref: ref.triceragon.frill
				},
				[
					// 1606
					{
						colorIdx: 0,
						ref: ref.triceragon.frill
					},
					// 1607
					{
						ref: ref.triceragon.frill_bones
					}
				],
				// 1609
				{
					colorIdx: 0,
					ref: ref.triceragon.frill_broken
				},
				// 1611
				{
					colorIdx: 0,
					ref: ref.triceragon.frill_square
				},
				[
					// 1612
					{
						ref: ref.triceragon.frill_right_bone
					},
					// 1614
					{
						colorIdx: 0,
						ref: ref.triceragon.frill
					},
					// 1615
					{
						ref: ref.triceragon.frill_left_bone
					}
				],
				// 1617
				{
					colorIdx: 0,
					ref: ref.triceragon.frill_strong
				},
				// 1619
				{
					colorIdx: 0,
					ref: ref.triceragon.frill_bumpy
				}
			]
		}
	],
	// 1626 p6
	horn: [
		// 1621
		{
			colorIdx: 0,
			ref: ref.triceragon.horn_skin
		},
		{
			partIdx: 6,
			frames: [0, 1, 2, 3],
			parts: [
				// 1622
				{
					ref: ref.triceragon.horn
				},
				// 1623
				{
					ref: ref.triceragon.horn_fat
				},
				// 1624
				{
					ref: ref.triceragon.horn_twirl
				},
				// 1625
				{
					ref: ref.triceragon.horn_round
				}
			]
		}
	]
};
