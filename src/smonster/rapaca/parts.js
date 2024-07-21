// @ts-check
import { ref } from '../references.js';
import { head, head_hit } from './animations/head.js';

export const parts = {
	// 1751
	tail_end: [
		{
			ref: ref.rapaca.tail_end
		}
	],
	// 1753
	tail: [
		{
			ref: ref.rapaca.tail
		}
	],
	// 1755
	body: [
		{
			ref: ref.rapaca.body
		}
	],
	// 1757
	right_leg: [
		{
			ref: ref.rapaca.right_leg
		}
	],
	// 1759
	left_leg: [
		{
			ref: ref.rapaca.left_leg
		}
	],
	// 1761
	right_top_wing: [
		{
			ref: ref.rapaca.right_top_wing
		}
	],
	// 1763
	right_bottom_wing: [
		{
			ref: ref.rapaca.right_bottom_wing
		}
	],
	// 1765
	left_top_wing: [
		{
			ref: ref.rapaca.left_top_wing
		}
	],
	// 1767
	left_bottom_wing: [
		{
			ref: ref.rapaca.left_bottom_wing
		}
	],
	// 1781
	head_sleep: [
		// 1780
		{
			ref: ref.rapaca.head_top_sleep
		},
		// 1770
		{
			ref: ref.rapaca.head_jaw,
			transform: {
				tx: 19.7,
				ty: 43.4,
				a: 0.998,
				d: 0.998,
				b: -0.061,
				c: 0.061
			}
		}
	],
	// 1771
	head: [head],
	// 1771
	head_stand: [
		// 1768
		{
			ref: ref.rapaca.head_top
		},
		// 1770
		{
			ref: ref.rapaca.head_jaw,
			transform: {
				tx: 19.7,
				ty: 43.4,
				a: 0.998,
				b: -0.061,
				c: 0.061,
				d: 0.998
			}
		}
	],
	// 1771
	head_hit: [head_hit],
	// 1771
	head_dead: [
		// 1768
		{
			ref: ref.rapaca.head_top
		},
		// 1770
		{
			ref: ref.rapaca.head_jaw,
			transform: {
				tx: 23.3,
				ty: 56,
				a: 0.737,
				b: -0.676,
				c: 0.676,
				d: 0.737
			}
		}
	]
};
