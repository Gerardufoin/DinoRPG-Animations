// @ts-check
import { ref } from '../references.js';

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
	body: [],
	// 985 _p6
	back: [],
	// 992
	right_tusk: [],
	// 995
	tusk_fur: [],
	// 999 p3
	eye: [],
	// 1002
	head: [],
	// 1005 special
	special: [],
	// 1017
	hair: [],
	// 1021
	trunk: [],
	// 1024
	trunk_end: [],
	// 1031
	left_tusk: []
};
