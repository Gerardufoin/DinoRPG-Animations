// @ts-check

import { ref } from './references.js';

export let bad = {
	name: 'bad',
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
};
