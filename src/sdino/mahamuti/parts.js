// @ts-check
import { ref } from '../references_small.js';

export let parts = {
	// 968
	leg: [
		// 776
		{
			ref: ref.shared.hoof
		},
		// 967 p6
		{
			partIdx: 6,
			frames: [0, 1, 1, 1, 1, 1, 1, 1, 1],
			parts: [
				// 966
				{
					colorIdx: 2,
					ref: ref.shared.leg,
					transform: {
						ty: -0.5
					}
				},
				// 966
				{
					colorIdx: 1,
					ref: ref.shared.leg,
					transform: {
						ty: -0.5
					}
				}
			]
		}
	],
	// 983
	ear: [
		// 982 p4
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 970
					{
						colorIdx: 1,
						ref: ref.mahamuti.ear
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: 2.25,
							ty: 2.35,
							a: 0.866,
							b: -0.5,
							c: 0.5,
							d: 0.866
						}
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: -0.55,
							ty: 3.05
						}
					}
				],
				[
					// 975
					{
						colorIdx: 1,
						ref: ref.mahamuti.ear_big
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: 2.608,
							ty: 3.556,
							a: 0.419,
							b: -0.908,
							c: 0.908,
							d: 0.419
						}
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: 0.725,
							ty: 5.743,
							a: 0.817,
							b: -0.577,
							c: 0.577,
							d: 0.817
						}
					}
				],
				[
					// 977
					{
						colorIdx: 1,
						ref: ref.mahamuti.ear_long
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: 1.247,
							ty: 1.807,
							a: 0.938,
							b: -0.346,
							c: 0.346,
							d: 0.938
						}
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: -1.631,
							ty: 2.022,
							a: 0.985,
							b: 0.17,
							c: -0.17,
							d: 0.985
						}
					}
				],
				[
					// 979
					{
						colorIdx: 1,
						ref: ref.mahamuti.ear_slant
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: 1.463,
							ty: 3.315,
							a: 0.943,
							b: -0.374,
							c: 0.348,
							d: 0.922
						}
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: -1.431,
							ty: 3.622,
							a: 0.991,
							b: 0.137,
							c: -0.17,
							d: 0.985
						}
					}
				],
				[
					// 981
					{
						colorIdx: 1,
						ref: ref.mahamuti.ear_small
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: 0.144,
							ty: 0.567,
							a: 0.624,
							b: -0.247,
							c: 0.23,
							d: 0.609
						}
					},
					// 973
					{
						special: true,
						ref: ref.mahamuti.earring,
						transform: {
							tx: -1.769,
							ty: 0.77,
							a: 0.655,
							b: 0.09,
							c: -0.112,
							d: 0.651
						}
					}
				]
			]
		}
	],
	// 984
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
	// 985 _p6
	back: [
		// 784
		{
			colorIdx: 2,
			ref: ref.shared.back
		}
	],
	// 992
	tusk_side: [
		// 991 p7
		{
			partIdx: 7,
			frames: [
				0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4, 4, 4, 4
			],
			parts: [
				// 986
				{
					ref: ref.mahamuti.r_tusk_gold
				},
				// 987
				{
					ref: ref.mahamuti.r_tusk
				},
				// 988
				{
					ref: ref.mahamuti.r_tusk_long
				},
				// 989
				{
					ref: ref.mahamuti.r_tusk_bent
				},
				// 990
				{
					ref: ref.mahamuti.r_tusk_bent_white
				}
			]
		}
	],
	// 995
	tusk_fur: [
		// 994
		{
			colorIdx: 1,
			ref: ref.mahamuti.tusk_fur
		}
	],
	// 999 p3
	eye: [
		// 997
		{
			colorIdx: 1,
			ref: ref.mahamuti.eye,
			transform: {
				tx: -0.35,
				ty: -0.5
			}
		},
		// 998
		{
			ref: ref.mahamuti.eye_pupil
		}
	],
	// 1002
	head: [
		// 1001
		{
			colorIdx: 1,
			ref: ref.mahamuti.head,
			transform: {
				tx: -0.2,
				ty: 0.8
			}
		}
	],
	// 1005 special
	special: [
		// 1004
		{
			special: true,
			colorIdx: 1,
			ref: ref.mahamuti.special
		}
	],
	// 1017
	hair: [
		// 1016 p3
		{
			partIdx: 3,
			frames: [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4],
			parts: [
				// 1007
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_poop,
					transform: {
						a: 1.226,
						d: 1.226,
						b: 0.201,
						c: -0.201
					}
				},
				// 1009
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair,
					transform: {
						a: 1.226,
						d: 1.226,
						b: 0.201,
						c: -0.201
					}
				},
				// 1011
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_strands,
					transform: {
						a: 1.226,
						d: 1.226,
						b: 0.201,
						c: -0.201
					}
				},
				// 1013
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_split,
					transform: {
						a: 1.226,
						d: 1.226,
						b: 0.201,
						c: -0.201
					}
				},
				// 1015
				{
					colorIdx: 2,
					ref: ref.mahamuti.hair_flat,
					transform: {
						a: 1.226,
						d: 1.226,
						b: 0.201,
						c: -0.201
					}
				}
			]
		}
	],
	// 1021
	trunk: [
		// 1020
		{
			colorIdx: 1,
			ref: ref.mahamuti.trunk
		}
	],
	// 1024
	trunk_end: [
		// 1023
		{
			colorIdx: 1,
			ref: ref.mahamuti.trunk_end,
			transform: {
				ty: -0.15
			}
		}
	],
	// 1031
	tusk_front: [
		// 1030 p7
		{
			partIdx: 7,
			frames: [
				0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4, 4, 4, 4, 4, 4, 4, 4, 4, 4
			],
			parts: [
				// 1025
				{
					ref: ref.mahamuti.l_tusk_gold
				},
				// 1026
				{
					ref: ref.mahamuti.l_tusk
				},
				// 1027
				{
					ref: ref.mahamuti.l_tusk_long
				},
				// 1028
				{
					ref: ref.mahamuti.l_tusk_bent
				},
				// 1029
				{
					ref: ref.mahamuti.l_tusk_bent_white
				}
			]
		}
	]
};
