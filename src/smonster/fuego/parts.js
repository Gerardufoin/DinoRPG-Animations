// @ts-check
import { ref } from '../references.js';

const skin_color = {
	r: -41,
	g: -57,
	b: -82
};

export const parts = {
	// 2586
	right_hand: [
		// 256
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15
			},
			colorOffset: skin_color
		}
	],
	// 2589
	left_foot: [
		{
			ref: ref.fuego.left_foot,
			transform: {
				a: 1.165,
				d: 1.165
			}
		}
	],
	// 2592
	segment: [
		{
			ref: ref.fuego.segment,
			transform: {
				ty: 3.15,
				a: 1.2,
				d: 1
			}
		}
	],
	// 2595
	right_foot: [
		{
			ref: ref.fuego.right_foot
		}
	],
	// 2598
	pants: [
		{
			ref: ref.fuego.pants,
			transform: {
				a: 1.579,
				d: 1.966,
				b: 0.192,
				c: -0.239
			}
		}
	],
	// 2601
	body: [
		{
			ref: ref.fuego.body,
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
	// 2606
	head: [
		// 2603
		{
			ref: ref.fuego.head,
			transform: {
				tx: 0.25,
				ty: -1,
				a: 0.898,
				d: 0.898
			},
			colorOffset: skin_color
		},
		// 277
		{
			ref: ref.goblin.head_highlight
		},
		// 2605
		{
			ref: ref.fuego.hair,
			transform: {
				tx: 0.8,
				ty: -4.05,
				a: 0.778,
				d: 0.778,
				b: -0.449,
				c: 0.449
			}
		}
	],
	// 2608
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
		// 2607
		{
			ref: ref.fuego.katana
		}
	]
};
