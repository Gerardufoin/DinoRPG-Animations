// @ts-check
import { ref } from '../references.js';
import { shield } from '../towgrd/animations/shield.js';

export const parts = {
	// 3742
	right_foot_back: [
		{
			ref: ref.updwn.right_foot_back
		}
	],
	// 3744
	top_leg: [
		{
			ref: ref.updwn.top_leg
		}
	],
	// 3747
	right_bottom_leg: [
		{
			ref: ref.updwn.right_bottom_leg,
			transform: {
				tx: -18.75,
				ty: -9.65
			}
		}
	],
	// 3749
	right_foot: [
		{
			ref: ref.updwn.right_foot
		}
	],
	// 3755
	body: [
		// 3752
		{
			ref: ref.updwn.body,
			transform: {
				tx: -21.25,
				ty: -33.75,
				a: 1.503,
				d: 1.503,
				b: 0.403,
				c: -0.403
			}
		},
		// 3754
		{
			ref: ref.updwn.body_decoration,
			transform: {
				tx: -8.65,
				ty: -12,
				a: -1.487,
				d: 1.487,
				b: 0.15,
				c: 0.15
			}
		}
	],
	// 3758
	left_bottom_leg: [
		{
			ref: ref.updwn.left_bottom_leg,
			transform: {
				tx: -17.05,
				ty: -10.9
			}
		}
	],
	// 3760
	left_foot: [
		{
			ref: ref.updwn.left_foot
		}
	],
	// 3768
	shield: [
		{
			...shield,
			transform: {
				ty: 45
			}
		}
	]
};
