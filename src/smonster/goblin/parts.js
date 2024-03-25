// @ts-check

import { ref } from '../references.js';

export const parts = {
	// 257
	fist: [
		{
			ref: ref.goblin.fist,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		}
	],
	// 260
	l_foot: [
		{
			ref: ref.goblin.l_foot,
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		}
	],
	// 263
	segment: [
		{
			ref: ref.goblin.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		}
	],
	// 266
	r_foot: [
		{
			ref: ref.goblin.r_foot,
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		}
	],
	// 268
	pants: [
		{
			ref: ref.goblin.pants,
			colorOffset: {
				r: -36,
				g: -113,
				b: -164
			}
		}
	],
	// 271
	body: [
		{
			ref: ref.goblin.body,
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		}
	],
	// 274
	ear: [
		{
			ref: ref.goblin.ear,
			transform: {
				tx: 4.1
			},
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		}
	],
	// 278
	head: [
		// 276
		{
			ref: ref.goblin.head,
			transform: {
				tx: 0.1
			},
			colorOffset: {
				r: -51,
				g: -57,
				b: -169
			}
		},
		// 277
		{
			ref: ref.goblin.head_highlight,
			transform: {
				tx: -0.15,
				ty: 1.0,
				a: 1.125,
				d: 1.087
			}
		}
	]
};
