// @ts-check

import { ref } from '../references.js';

export let parts = {
	// 721 p7
	tail: [
		{
			partIdx: 7,
			frames: [0, 1, 2, 2, 3],
			parts: [
				// 711
				{
					ref: ref.wanwan.tail_thin
				},
				// 716
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_multiple,
					transform: {
						tx: -1.9,
						ty: 0.45
					}
				},
				// 718
				{
					colorIdx: 1,
					ref: ref.wanwan.tail,
					transform: {
						tx: -1.9,
						ty: 0.45
					}
				},
				// 720
				{
					colorIdx: 1,
					ref: ref.wanwan.tail_spike,
					transform: {
						tx: -1.9,
						ty: 0.45
					}
				}
			]
		},
		// 714
		{
			special: true,
			colorIdx: 1,
			ref: ref.wanwan.tail_special,
			transform: {
				tx: -8.0,
				ty: -12.3,
				a: 1.281,
				d: 1.281,
				b: -0.191,
				c: 0.191
			}
		}
	],
	// 730 p6
	ear: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 1, 1],
			parts: [
				// 723
				{
					colorIdx: 1,
					ref: ref.wanwan.ear,
					transform: {
						tx: 0.25
					}
				},
				// 725
				{
					colorIdx: 1,
					ref: ref.wanwan.ear_up,
					transform: {
						tx: 0.25
					}
				},
				// 727
				{
					colorIdx: 1,
					ref: ref.wanwan.ear_round,
					transform: {
						tx: 0.25
					}
				},
				// 729
				{
					colorIdx: 1,
					ref: ref.wanwan.ear_pointy,
					transform: {
						tx: 0.75
					}
				}
			]
		}
	],
	// 735 p8
	leg: [
		// 732
		{
			colorIdx: 1,
			ref: ref.wanwan.leg,
			transform: {
				tx: 0.05
			}
		},
		// 734
		{
			partIdx: 8,
			frames: [0, 1],
			parts: [
				{
					colorIdx: 2,
					ref: ref.wanwan.leg_fur,
					transform: {
						tx: 0.75,
						ty: 1.0
					}
				}
			]
		}
	],
	// 738
	lower_body: [
		{
			colorIdx: 1,
			ref: ref.wanwan.lower_body
		}
	],
	// 741
	upper_body: [
		{
			colorIdx: 1,
			ref: ref.wanwan.upper_body,
			transform: {
				tx: 16.45,
				ty: 1.45
			}
		}
	],
	// 744
	head: [
		{
			colorIdx: 1,
			ref: ref.wanwan.head
		}
	],
	// 753 p3
	eye: [
		// 750 p1
		{
			partIdx: 1,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			parts: [
				[
					// 745
					{
						ref: ref.wanwan.eye
					},
					// 747
					{
						colorIdx: 3,
						ref: ref.wanwan.eyeball,
						transform: {
							tx: -0.05,
							ty: -0.1
						}
					},
					// 748
					{
						ref: ref.wanwan.eye_pupil
					}
				],
				// 749
				{
					ref: ref.wanwan.eye_red
				}
			]
		},
		// 752
		{
			special: true,
			ref: ref.wanwan.eye_special,
			transform: {
				tx: -3.8,
				ty: -2.7
			}
		}
	],
	// 762 p9
	hair: [
		// 755
		{
			colorIdx: 3,
			ref: ref.wanwan.head_markings
		},
		{
			partIdx: 9,
			frames: [-1, 0, 1, 2],
			parts: [
				// 757
				{
					colorIdx: 1,
					ref: ref.wanwan.hair,
					transform: {
						tx: 2.35,
						ty: -5.3
					}
				},
				// 759
				{
					colorIdx: 1,
					ref: ref.wanwan.hair_flow,
					transform: {
						tx: 2.35,
						ty: -5.3
					}
				},
				// 761
				{
					colorIdx: 1,
					ref: ref.wanwan.hair_back,
					transform: {
						tx: 2.35,
						ty: -5.3
					}
				}
			]
		}
	],
	// 764 p1
	nose: [
		{
			ref: ref.wanwan.nose
		}
	]
};
