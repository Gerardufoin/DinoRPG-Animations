// @ts-check
import { ref } from '../references_small.js';

export const parts_small = {
	// 921
	shoulder: [
		// 920 _p5
		{
			partIdx: 5,
			frames: [0, 1, 2, 0],
			parts: [
				// 915
				{
					colorIdx: 2,
					ref: ref.kabuki.shoulder_top,
					transform: {
						ty: -0.05
					}
				},
				// 917
				{
					colorIdx: 2,
					ref: ref.kabuki.shoulder_middle,
					transform: {
						ty: -0.05
					}
				},
				// 919
				{
					colorIdx: 2,
					ref: ref.kabuki.shoulder_right,
					transform: {
						ty: -0.05
					}
				}
			]
		}
	],
	// 931
	back: [
		// 930 _p8
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 0],
			parts: [
				// 923
				{
					colorIdx: 1,
					ref: ref.kabuki.back
				},
				// 925
				{
					colorIdx: 1,
					ref: ref.kabuki.back_smooth,
					transform: {
						tx: 0.4,
						ty: -0.85,
						a: 0.916,
						d: 0.916
					}
				},
				// 927
				{
					colorIdx: 1,
					ref: ref.kabuki.back_messy,
					transform: {
						tx: -0.15,
						ty: 0.0,
						a: 0.925,
						d: 0.925
					}
				},
				// 929
				{
					colorIdx: 1,
					ref: ref.kabuki.back_pointy
				}
			]
		}
	],
	// 933
	hand: [
		{
			ref: ref.kabuki.hand
		}
	],
	// 936
	leg: [
		// 935
		{
			colorIdx: 1,
			ref: ref.kabuki.leg
		}
	],
	// 939
	arm: [
		// 935
		{
			colorIdx: 1,
			ref: ref.kabuki.leg
		},
		// 938
		{
			colorIdx: 2,
			ref: ref.kabuki.leg
		}
	],
	// 943
	body: [
		// 941
		{
			colorIdx: 1,
			ref: ref.kabuki.body
		},
		// 942
		{
			colorIdx: 2,
			ref: ref.kabuki.body
		}
	],
	// 945
	head: [
		{
			ref: ref.kabuki.head
		}
	],
	// 948 _p1
	eyes: [
		{
			partIdx: 1,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			parts: [
				// 946
				{
					ref: ref.kabuki.eyes
				},
				// 947
				{
					ref: ref.kabuki.eyes_red
				}
			]
		}
	],
	// 951
	hair: [
		// 950
		{
			colorIdx: 1,
			ref: ref.kabuki.hair
		}
	],
	// 953 special
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					ref: ref.kabuki.special
				}
			]
		}
	]
};
