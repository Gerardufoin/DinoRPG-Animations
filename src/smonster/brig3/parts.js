// @ts-check
import { ref } from '../references.js';

const skin_color = {
	r: -41,
	g: -57,
	b: -82
};

const cloth_color = {
	r: -36,
	g: -123,
	b: -146
};

export const parts = {
	// 1041
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
	// 1044
	left_foot: [
		// 1043
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
	// 1046
	segment: [
		// 262
		{
			ref: ref.goblin.segment,
			transform: {
				tx: 0,
				ty: 3.15,
				a: 0.36,
				d: 1
			},
			colorOffset: skin_color
		}
	],
	// 1049
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
	// 1052
	pants: [
		{
			ref: ref.brigand.pants,
			transform: {
				tx: 0.15,
				ty: -0.45,
				a: 1.167,
				d: 1.966,
				b: 0.142,
				c: -0.239
			},
			colorOffset: cloth_color
		}
	],
	// 1055
	body: [
		// 270
		{
			ref: ref.goblin.body,
			transform: {
				tx: 0.65,
				ty: 0.25,
				a: 0.603,
				d: 0.698,
				b: -0.348,
				c: 0.743
			},
			colorOffset: cloth_color
		}
	],
	// 1060
	head: [
		// 1057
		{
			ref: ref.brigand.head,
			transform: {
				tx: 0.75,
				ty: -1,
				a: 0.72,
				d: 0.898,
				b: 0,
				c: -0.009
			},
			colorOffset: skin_color
		},
		// 277
		{
			ref: ref.goblin.head_highlight,
			transform: {
				tx: 0.6,
				ty: 0,
				a: 0.786,
				d: 1
			}
		},
		// 991
		{
			ref: ref.brigand.head_hood,
			transform: {
				tx: 1.25,
				ty: -4.05,
				a: 0.628,
				d: 0.778,
				b: -0.449,
				c: 0.352
			},
			colorOffset: cloth_color
		}
	],
	// 1061
	left_hand: [
		// 256
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: skin_color
		}
	]
};
