// @ts-check

import { ref } from '../references.js';

export const parts = {
	// 531
	left_bottom_wing: [
		{
			ref: ref.bat.bottom_wing
		}
	],
	right_bottom_wing: [
		{
			ref: ref.bat.bottom_wing,
			colorOffset: {
				r: 18
			},
			colorMultiplier: {
				r: 0.816,
				g: 0.816,
				b: 0.816
			}
		}
	],
	// 533
	left_top_wing: [
		{
			ref: ref.bat.top_wing
		}
	],
	right_top_wing: [
		{
			ref: ref.bat.top_wing,
			colorOffset: {
				r: 18
			},
			colorMultiplier: {
				r: 0.816,
				g: 0.816,
				b: 0.816
			}
		}
	],
	// 535
	leg: [
		{
			ref: ref.bat.leg
		}
	],
	// 537
	body: [
		{
			ref: ref.bat.body
		}
	],
	// 539
	head: [
		{
			ref: ref.bat.head
		}
	]
};
