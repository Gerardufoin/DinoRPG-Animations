// @ts-check
import { ref } from '../references_big.js';

export const parts_big = {
	// 1760 p7
	tail: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 1748
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_thin
				},
				// 1753
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_multiple,
					transform: {
						tx: 21.15,
						ty: -9.2
					}
				},
				// 1755
				{
					colorIdx: 1,
					ref: ref.wanwan.tail,
					transform: {
						tx: 2.85,
						ty: -7.9
					}
				},
				// 1757
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_down,
					transform: {
						tx: 2.85,
						ty: -7.9
					}
				},
				// 1759
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_spike,
					transform: {
						tx: 8.2,
						ty: -7.75,
						a: 1.135,
						d: 1.135
					}
				}
			]
		},
		// 1751 special
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 1750
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_special,
					transform: {
						tx: -57.7,
						ty: -77.65
					}
				}
			]
		}
	],
	// 1767 p8c
	right_front_leg: [
		// 1762
		{
			colorIdx: 1,
			ref: ref.wanwan.right_front_leg
		},
		// 1766
		{
			partIdx: 8,
			frames: [0, -1],
			parts: [
				// 1765 + 1763
				{
					colorIdx: 2,
					ref: ref.wanwan.right_front_leg_fur,
					transform: {
						tx: -4.1,
						ty: 6.15
					}
				}
			]
		}
	],
	// 1770
	right_front_paw: [
		{
			colorIdx: 1,
			ref: ref.wanwan.right_front_paw
		}
	],
	// 1773 p8b
	left_back_lower_leg: [
		{
			partIdx: 8,
			frames: [0, 1],
			parts: [
				// 1772
				{
					colorIdx: 2,
					ref: ref.wanwan.left_back_lower_leg,
					transform: {
						a: 1.211,
						d: 1
					}
				},
				// 1772
				{
					colorIdx: 1,
					ref: ref.wanwan.left_back_lower_leg
				}
			]
		}
	],
	// 1776
	left_back_paw: [
		{
			colorIdx: 1,
			ref: ref.wanwan.left_back_paw
		}
	],
	// 1779
	left_back_upper_leg: [
		{
			colorIdx: 1,
			ref: ref.wanwan.left_back_upper_leg
		}
	],
	// 1783
	lower_body: [
		// 1781
		{
			colorIdx: 1,
			ref: ref.wanwan.lower_body
		},
		// 1782 hurt
		{
			partIdx: 2,
			frames: [-1, -1, 0],
			transform: {
				tx: -7.4,
				ty: 1.7
			},
			parts: [
				// 155
				{
					ref: ref.hurt.scratch,
					transform: {
						tx: 12.95,
						ty: -7.1,
						a: 1.216,
						d: 1.216
					}
				}
			]
		}
	],
	// 1786
	upper_body: [
		{
			colorIdx: 1,
			ref: ref.wanwan.upper_body
		}
	],
	// 1795 p8a
	left_front_leg: [
		// 1788
		{
			colorIdx: 1,
			ref: ref.wanwan.left_front_leg,
			transform: {
				tx: 0,
				ty: 1.95
			}
		},
		// 1792 (1789 + 1791)
		{
			partIdx: 8,
			frames: [0, -1],
			transform: {
				tx: -3.1,
				ty: 8.65
			},
			parts: [
				{
					colorIdx: 2,
					ref: ref.wanwan.left_front_leg_fur
				}
			]
		},
		// 1794 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -3.75,
				ty: 8.65
			},
			parts: [
				[
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 2.25,
							ty: 0.05,
							a: 1.404,
							d: 1.404
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 4.2,
							ty: -17.1
						}
					}
				],
				[
					// 1793
					{
						ref: ref.wanwan.left_front_leg_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 1.75,
							ty: 0.6
						}
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 3.8,
							ty: -18.3,
							a: 0.805,
							d: 0.805,
							b: -1.053,
							c: 1.053
						}
					}
				]
			]
		}
	],
	// 1798
	left_front_paw: [
		{
			colorIdx: 1,
			ref: ref.wanwan.left_front_paw
		}
	],
	// 1813 p6b
	right_ear: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				[
					// 1800
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear,
						transform: {
							tx: -3.65,
							ty: -0.05,
							a: 0.878,
							d: 0.878
						}
					}
				],
				[
					// 1802
					{
						colorIdx: 0,
						ref: ref.wanwan.right_ear_up_inside,
						transform: {
							tx: -3.05,
							ty: -2.1
						}
					},
					// 1804
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_up,
						transform: {
							tx: -3.65,
							ty: -0.05,
							a: 0.878,
							d: 0.878
						}
					}
				],
				[
					// 1806
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_round,
						transform: {
							tx: -3.65,
							ty: -0.05,
							a: 0.878,
							d: 0.878
						}
					}
				],
				[
					// 1808
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_pointy,
						transform: {
							tx: -3.5,
							ty: -0.05
						}
					}
				],
				[
					// 1810
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_sharp,
						transform: {
							tx: -4.95,
							ty: -2.4,
							a: 0.91,
							d: 0.91,
							b: -0.411,
							c: 0.411
						}
					}
				],
				[
					// 1812
					{
						colorIdx: 1,
						ref: ref.wanwan.right_ear_lynx,
						transform: {
							tx: -1.05,
							ty: -6.1,
							a: 1,
							d: 1.102
						}
					}
				]
			]
		}
	],
	// 1818
	head: [
		// 1815
		{
			colorIdx: 1,
			ref: ref.wanwan.head,
			transform: {
				tx: 1.05,
				ty: -1.3
			}
		},
		// 1817 hurt
		{
			partIdx: 2,
			frames: [-1, 0, 1],
			transform: {
				tx: -11.55,
				ty: -2.05
			},
			parts: [
				[
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 2.5,
							ty: -5.65,
							a: 1.511,
							d: 1.511
						}
					},
					// 318
					{
						ref: ref.hurt.scratch_small,
						transform: {
							tx: 25,
							ty: 9.2
						}
					}
				],
				[
					// 1816
					{
						ref: ref.wanwan.head_hurt_blood
					},
					// 155
					{
						ref: ref.hurt.scratch,
						transform: {
							tx: 26.15,
							ty: 9.35,
							a: 1.261,
							d: 1.261
						}
					}
				]
			]
		}
	],
	// 1843 p3
	eyes: [],
	// 1851 p4
	nose: [],
	// 1872 p6a
	left_ear: [],
	// 1885 p9
	hair: [],
	// 1896 p5
	mouth: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
