// @ts-check
import { ref } from '../references.js';

export const parts = {
	// 2842
	legs: [
		{
			ref: ref.upgrd.legs
		}
	],
	// 2844
	right_bottom_arm: [
		{
			ref: ref.upgrd.right_bottom_arm
		}
	],
	// 2846
	right_hand: [
		{
			ref: ref.upgrd.right_hand
		}
	],
	// 2848
	right_top_arm: [
		{
			ref: ref.upgrd.right_top_arm
		}
	],
	// 2854
	body: [
		// 2850
		{
			ref: ref.upgrd.body_right_plate,
			transform: {
				tx: -26.15,
				ty: 6.9
			}
		},
		// 2850
		{
			ref: ref.upgrd.body_right_plate,
			transform: {
				tx: -28,
				ty: -0.35,
				a: 0.966,
				d: 0.966,
				b: 0.259,
				c: -0.259
			}
		},
		// 2851
		{
			ref: ref.upgrd.body
		},
		// 2853
		{
			ref: ref.upgrd.body_left_plate,
			transform: {
				tx: 5.65,
				ty: 15.1,
				a: 0.984,
				d: 0.984,
				b: 0.177,
				c: -0.177
			}
		},
		// 2853
		{
			ref: ref.upgrd.body_left_plate,
			transform: {
				tx: 8.85,
				ty: 11.75
			}
		}
	],
	// 2856
	left_top_arm: [
		{
			ref: ref.upgrd.left_top_arm
		}
	],
	// 2858
	left_bottom_arm: [
		{
			ref: ref.upgrd.left_bottom_arm
		}
	],
	// 2860
	left_hand: [
		{
			ref: ref.upgrd.left_hand
		}
	],
	// 2862
	head: [
		{
			ref: ref.upgrd.head
		}
	],
	// 2864
	eye: [
		{
			ref: ref.upgrd.eye
		}
	],
	// 2867
	attack_smear: [
		{
			ref: ref.upgrd.attack_smear
		}
	],
	// 2871
	spirit: [
		{
			ref: ref.upgrd.spirit
		}
	]
};
