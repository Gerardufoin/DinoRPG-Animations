// @ts-check
import { ref } from '../references_big.js';

export const parts_big = {
	// 650 p7b
	right_arm: [
		// 645
		{
			colorIdx: 1,
			ref: ref.planaile.right_wing,
			transform: {
				tx: -1.65,
				ty: 0.9,
				a: 1.038,
				d: 1.038,
				b: 0,
				c: 0.021
			}
		},
		// 648
		{
			colorIdx: 0,
			ref: ref.planaile.right_wing_front,
			transform: {
				tx: 21.85,
				ty: 2.5,
				a: 1.038,
				d: 1.038,
				b: 0,
				c: 0.021
			}
		},
		// 649
		{
			ref: ref.planaile.right_hand
		}
	],
	// 652 p8b
	right_foot: [
		{
			ref: ref.planaile.right_foot
		}
	],
	// 654 col0
	face: [
		{
			colorIdx: 0,
			ref: ref.planaile.face
		}
	],
	// 665 p9
	body: [],
	// 674 p4b
	right_ear: [],
	// 711 p4a
	left_ear: [],
	// 753 p3
	head: [],
	// 763 p7a
	left_arm: [],
	// 777 p5
	eyes: [],
	// 791 p6
	mouth: [],
	// 795 p8
	nose: [],
	// 799 p8a
	left_foot: [],
	// 293
	view: [
		{
			ref: ref.view,
			hidden: true
		}
	]
};
