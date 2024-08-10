// @ts-check
import { ref } from '../references.js';

const skin_color = {
	r: -30,
	g: -60,
	b: -100
};

export const parts = {
	// 3487
	right_hand: [
		// 256
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: skin_color
		}
	],
	// 3490
	left_foot: [
		{
			ref: ref.rodeur.left_foot,
			transform: {
				a: 1.165,
				d: 1.165
			}
		}
	],
	// 3493
	segment: [
		{
			ref: ref.rodeur.segment,
			transform: {
				ty: 3.15,
				a: 1.2,
				d: 1
			}
		}
	],
	// 3496
	right_foot: [
		{
			ref: ref.rodeur.right_foot
		}
	],
	// 3499
	pants: [
		{
			ref: ref.rodeur.pants,
			transform: {
				a: 1.579,
				d: 1.966,
				b: 0.192,
				c: -0.239
			}
		}
	],
	// 3502
	body: [
		{
			ref: ref.rodeur.body,
			transform: {
				tx: 0.65,
				ty: 0.9,
				a: 0.935,
				d: 0.935,
				b: -0.54,
				c: 0.54
			}
		}
	],
	// 3504
	head: [
		{
			ref: ref.rodeur.head
		}
	],
	// 3506
	left_hand: [
		// 256
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: skin_color
		},
		// 3505
		{
			ref: ref.rodeur.axe
		}
	],
	// 3512
	attack_smear_1: [
		{
			ref: ref.rodeur.attack_smear_1
		}
	],
	// 3513
	attack_body_smear: [
		{
			ref: ref.rodeur.attack_body_smear
		}
	],
	// 3514
	attack_smear_2: [
		{
			ref: ref.rodeur.attack_smear_2
		}
	],
	// 3515
	attack_smear_3: [
		{
			ref: ref.rodeur.attack_smear_3
		}
	],
	// 3516
	attack_smear_4: [
		{
			ref: ref.rodeur.attack_smear_4
		}
	],
	// 3517
	attack_smear_5: [
		{
			ref: ref.rodeur.attack_smear_5
		}
	]
};
