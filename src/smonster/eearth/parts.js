// @ts-check

import { ewater_eye } from '../ewater/animations/eye.js';
import { ref } from '../references.js';
import { eearth_head } from './animations/head.js';
import { eearth_legs } from './animations/legs.js';

export const parts = {
	// 581
	eye: [ewater_eye],
	// 646
	r_b_arm: [
		{
			ref: ref.eearth.right_bottom_arm
		}
	],
	// 648
	r_hand: [
		{
			ref: ref.eearth.right_hand
		}
	],
	// 650
	r_t_arm: [
		{
			ref: ref.eearth.right_top_arm
		}
	],
	// 652
	body: [
		{
			ref: ref.eearth.body
		}
	],
	// 660
	legs: [eearth_legs],
	// 663
	l_t_arm: [
		// 661
		{
			ref: ref.eearth.left_top_arm
		},
		// 662
		{
			ref: ref.grdien.pebble,
			transform: {
				tx: -8.3,
				ty: -0.7,
				a: 0.507,
				d: 0.507,
				b: 0.507,
				c: -0.507
			}
		}
	],
	// 665
	l_b_arm: [
		{
			ref: ref.eearth.left_bottom_arm
		}
	],
	// 667
	l_hand: [
		{
			ref: ref.eearth.left_hand
		}
	],
	// 671
	head: [eearth_head],
	head_dead: [
		{
			ref: ref.eearth.head
		}
	]
};
