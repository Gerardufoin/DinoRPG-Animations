// @ts-check
import { ref } from '../references.js';

const skin_color = {
	r: -41,
	g: -57,
	b: -82
};

export const parts = {
	// 1007
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
	// 1010
	left_foot: [
		// 980
		{
			ref: ref.goblin.l_foot,
			transform: {
				ty: 0.05,
				a: 1.165,
				d: 1.165
			},
			colorOffset: skin_color
		}
	],
	// 1012
	segment: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15,
				a: 1.2,
				d: 1
			},
			colorOffset: skin_color
		}
	],
	// 1015
	right_foot: [
		// 265
		{
			ref: ref.goblin.r_foot,
			transform: {
				ty: 0.05
			},
			colorOffset: skin_color
		}
	],
	// 1018
	pants: [
		{
			ref: ref.brigand.pants,
			transform: {
				tx: -0.05,
				a: 1.579,
				d: 1.966,
				b: 0.192,
				c: -0.239
			}
		}
	],
	// 1021
	body: [
		// 270
		{
			ref: ref.goblin.body,
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
	// 1026
	head: [
		// 988
		{
			ref: ref.brigand.head,
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
		// 991
		{
			ref: ref.brigand.head_hood,
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
	// 1028
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
		// 1027
		{
			ref: ref.brigand.stick
		}
	]
};
