// @ts-check

import { ref } from '../references_small.js';

export let parts = {
	// 779
	leg: [
		// 776
		{
			ref: ref.shared.hoof,
			transform: {
				ty: 0.6
			}
		},
		// 778
		{
			colorIdx: 1,
			ref: ref.shared.leg,
			transform: {
				ty: -0.5
			}
		}
	],
	// 782
	body: [
		// 781
		{
			colorIdx: 1,
			ref: ref.shared.body,
			transform: {
				tx: 0.05
			}
		}
	],
	// 787 p6
	back: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 784
				{
					colorIdx: 2,
					ref: ref.shared.back
				},
				// 784
				{
					colorIdx: 2,
					ref: ref.shared.back,
					transform: {
						tx: 0.0,
						ty: 0.3,
						a: 1.0,
						d: 1.156
					}
				},
				// 786
				{
					colorIdx: 2,
					ref: ref.santaz.back_bristly,
					transform: {
						tx: 0.0,
						ty: 0.3,
						a: 1.0,
						d: 1.156
					}
				},
				// 784
				{
					colorIdx: 2,
					ref: ref.shared.back,
					transform: {
						tx: 0.0,
						ty: 1.3,
						a: 1.089,
						d: 1.361
					}
				},
				// 786
				{
					colorIdx: 2,
					ref: ref.santaz.back_bristly,
					transform: {
						tx: 0.0,
						ty: 0.3,
						a: 1.0,
						d: 1.513
					}
				}
			]
		}
	],
	// 794 special
	special: [
		// 789
		{
			special: true,
			colorIdx: 2,
			ref: ref.santaz.special_fluff
		},
		// 791
		{
			special: true,
			ref: ref.santaz.special_collar,
			transform: {
				tx: 4.4,
				ty: 9.15,
				a: 0.192,
				d: 0.192
			}
		},
		// 793
		{
			special: true,
			ref: ref.santaz.special_bell,
			transform: {
				tx: 3.55,
				ty: 13.55,
				a: 0.28,
				d: 0.28
			}
		}
	],
	// 798 p3
	eye: [
		// 795
		{
			ref: ref.santaz.eye
		},
		// 797
		{
			colorIdx: 0,
			ref: ref.santaz.eye_skin,
			transform: {
				tx: -0.35,
				ty: 0.1
			}
		}
	],
	// 817 p8
	antler: [
		// 800
		{
			colorIdx: 1,
			ref: ref.santaz.antler_base
		},
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5, 6, 7],
			parts: [
				// 802
				{
					colorIdx: 3,
					ref: ref.santaz.antler_split,
					transform: {
						tx: 3.65,
						ty: -4.55
					}
				},
				// 804
				{
					colorIdx: 3,
					ref: ref.santaz.antler,
					transform: {
						tx: 4.0,
						ty: -4.5
					}
				},
				// 806
				{
					colorIdx: 3,
					ref: ref.santaz.antler_dot,
					transform: {
						tx: 3.65,
						ty: -4.55
					}
				},
				// 808
				{
					colorIdx: 3,
					ref: ref.santaz.antler_wave,
					transform: {
						tx: 3.9,
						ty: -4.8
					}
				},
				// 810
				{
					colorIdx: 3,
					ref: ref.santaz.antler_goat,
					transform: {
						tx: 3.85,
						ty: -4.7
					}
				},
				// 812
				{
					colorIdx: 3,
					ref: ref.santaz.antler_small,
					transform: {
						tx: 3.85,
						ty: -4.7
					}
				},
				// 814
				{
					colorIdx: 3,
					ref: ref.santaz.antler_hook,
					transform: {
						tx: 3.85,
						ty: -4.7
					}
				},
				// 816
				{
					colorIdx: 3,
					ref: ref.santaz.antler_spiral,
					transform: {
						tx: 3.85,
						ty: -4.7
					}
				}
			]
		}
	],
	// 820
	head: [
		// 819
		{
			colorIdx: 1,
			ref: ref.santaz.head,
			transform: {
				tx: -0.2,
				ty: 0.8
			}
		}
	],
	// 823
	ear: [
		// 822
		{
			colorIdx: 1,
			ref: ref.santaz.ear,
			transform: {
				tx: -2.3,
				ty: -1.75
			}
		}
	],
	// 831 p4
	nose: [
		{
			partIdx: 4,
			frames: [
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4
			],
			parts: [
				[
					// 825
					{
						colorIdx: 0,
						ref: ref.santaz.nose,
						transform: {
							tx: 0.15,
							ty: 0.25
						}
					},
					// 826
					{
						ref: ref.santaz.nose_highlight
					}
				],
				[
					// 825
					{
						colorIdx: 0,
						ref: ref.santaz.nose,
						transform: {
							tx: 0.15,
							ty: 0.25,
							a: 0.586,
							d: 1.0
						}
					},
					// 827
					{
						ref: ref.santaz.nose_flat_highlight
					}
				],
				[
					// 825
					{
						colorIdx: 0,
						ref: ref.santaz.nose,
						transform: {
							tx: 0.15,
							ty: 0.25,
							a: 0.759,
							d: 0.759
						}
					},
					// 828
					{
						ref: ref.santaz.nose_small_highlight
					}
				],
				[
					// 825
					{
						colorIdx: 0,
						ref: ref.santaz.nose,
						transform: {
							tx: 0.25,
							ty: 0.25,
							a: 1.414,
							d: 1.0
						}
					},
					// 829
					{
						ref: ref.santaz.nose_wide_highlight
					}
				],
				[
					// 825
					{
						ref: ref.santaz.nose,
						transform: {
							tx: 0.15,
							ty: 0.25,
							a: 0.862,
							d: 0.862
						},
						colorOffset: {
							r: -108,
							g: -57,
							b: 20
						}
					},
					// 830
					{
						ref: ref.santaz.nose_blue_highlight
					}
				]
			]
		}
	],
	// 844 p9
	hair: [
		{
			partIdx: 9,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 833
				{
					colorIdx: 2,
					ref: ref.santaz.hair
				},
				// 835
				{
					colorIdx: 2,
					ref: ref.santaz.hair_lock
				},
				// 837
				{
					colorIdx: 2,
					ref: ref.santaz.hair_split
				},
				// 839
				{
					colorIdx: 2,
					ref: ref.santaz.hair_back
				},
				// 841
				{
					colorIdx: 2,
					ref: ref.santaz.hair_front
				},
				// 843
				{
					colorIdx: 2,
					ref: ref.santaz.hair_spike
				}
			]
		}
	]
};
