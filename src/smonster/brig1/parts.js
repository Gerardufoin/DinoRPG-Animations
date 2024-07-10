// @ts-check
import { ref } from '../references.js';

const skin_color = {
	r: -41,
	g: -57,
	b: -82
};

const cloth_color = {
	r: -108,
	g: -102,
	b: -87
};

export const parts = {
	// 978
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
	// 981
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
	// 982
	segment: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: skin_color
		}
	],
	// 983
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
	// 986
	pants: [
		{
			ref: ref.brigand.pants,
			transform: {
				tx: -0.05,
				a: 1.579,
				d: 1.966,
				b: 0.192,
				c: -0.239
			},
			colorOffset: cloth_color
		}
	],
	// 987
	body: [
		// 270
		{
			ref: ref.goblin.body,
			transform: {
				tx: 0.4,
				ty: 0.6,
				a: 0.866,
				d: 0.866,
				b: -0.5,
				c: 0.5
			},
			colorOffset: cloth_color
		}
	],
	// 992
	head: [
		// 988
		{
			ref: ref.brigand.head,
			transform: {
				tx: 0.1
			},
			colorOffset: skin_color
		},
		// 277
		{
			ref: ref.goblin.head_highlight,
			transform: {
				tx: -0.15,
				ty: 1,
				a: 1.125,
				d: 1.087
			}
		},
		// 991
		{
			ref: ref.brigand.head_hood,
			transform: {
				tx: 0.7,
				ty: -3.4,
				a: 0.866,
				d: 0.866,
				b: -0.5,
				c: 0.5
			},
			colorOffset: cloth_color
		}
	],
	// 994
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
		// 993
		{
			ref: ref.brigand.club
		}
	]
};
