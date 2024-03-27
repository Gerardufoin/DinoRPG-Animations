// @ts-check

import { ref } from '../references.js';
import { ewater_body } from './animations/body.js';
import { ewater_drips } from './animations/drips.js';
import { ewater_eye } from './animations/eye.js';
import { ewater_head } from './animations/head.js';
import { ewater_left_bottom_arm } from './animations/left_bottom_arm.js';
import { ewater_left_top_arm } from './animations/left_top_arm.js';
import { ewater_puddle } from './animations/puddle.js';

export const parts = {
	// 548
	legs: [
		{
			ref: ref.ewater.legs
		}
	],
	// 550
	right_bottom_arm: [
		{
			ref: ref.ewater.right_bottom_arm
		}
	],
	// 552
	right_hand: [
		{
			ref: ref.ewater.right_hand
		}
	],
	// 554
	right_top_arm: [
		{
			ref: ref.ewater.right_top_arm
		}
	],
	// 561
	body: [
		ewater_body,
		{
			...ewater_drips,
			transform: {
				tx: -12.15,
				ty: 24.8,
				a: -1.398,
				d: 1.397,
				b: -0.005,
				c: -0.025
			}
		}
	],
	// 564
	left_top_arm: [ewater_left_top_arm],
	// 568
	left_bottom_arm: [ewater_left_bottom_arm],
	// 577
	head: [
		ewater_head,
		{
			...ewater_drips,
			transform: {
				tx: 0.1,
				ty: 20.35,
				a: 0.992,
				d: 0.992,
				b: -0.126,
				c: 0.126
			}
		}
	],
	// 581
	eye: [ewater_eye],
	// 583
	left_hand: [
		{
			ref: ref.ewater.left_hand
		}
	],
	// 592
	puddle: [ewater_puddle]
};
