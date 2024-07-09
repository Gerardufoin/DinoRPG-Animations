// @ts-check

import { ref } from './references_small.js';

export const bad = {
	name: 'bad',
	big: {
		transforms: [
			// 3577
			{
				tx: -26.7,
				ty: -1.85
			},
			// 3576
			{
				tx: 27.45,
				ty: 4.5,
				a: 2.43,
				d: 2.43
			}
		],
		glow: {
			distance: 10,
			color: 0x000000,
			quality: 1,
			strength: 1
		},
		parts: {
			// 3575
			bad: [
				{
					ref: ref.bad
				}
			]
		}
	},
	small: {
		transforms: [
			{
				ty: -13,
				a: 0.706,
				d: 0.706
			}
		],
		glow: {
			distance: 5,
			color: 0x000000,
			quality: 1,
			strength: 0.54
		},
		parts: {
			// 1640
			bad: [
				{
					ref: ref.bad
				}
			]
		}
	}
};
