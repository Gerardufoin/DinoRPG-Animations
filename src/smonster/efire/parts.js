// @ts-check

import { ewater_eye } from '../ewater/animations/eye.js';
import { flam_body } from '../flam/animations/body.js';
import { ref } from '../references.js';
import { efire_body } from './animations/body.js';
import { efire_fire } from './animations/fire.js';
import { efire_left_bottom_arm } from './animations/left_bottom_arm.js';
import { efire_left_hand } from './animations/left_hand.js';
import { efire_left_top_arm } from './animations/left_top_arm.js';
import { efire_legs } from './animations/legs.js';
import { efire_right_bottom_arm } from './animations/right_bottom_arm.js';
import { efire_right_hand } from './animations/right_hand.js';
import { efire_right_top_arm } from './animations/right_top_arm.js';

export const parts = {
	// 606
	right_bottom_arm: [
		efire_right_bottom_arm,
		{
			...efire_fire,
			transform: {
				tx: 1.15,
				ty: -0.85,
				a: 0.283,
				d: 0.417,
				b: -0.713,
				c: 1.05
			}
		}
	],
	// 609
	right_hand: [efire_right_hand],
	// 613
	right_top_arm: [
		efire_right_top_arm,
		{
			...efire_fire,
			transform: {
				tx: 1.5,
				ty: 1.7,
				a: 0.519,
				d: 1.529,
				b: 0.06,
				c: -0.178
			}
		}
	],
	// 618
	body: [
		efire_body,
		{
			...efire_fire,
			transform: {
				tx: -2.6,
				ty: -3.5,
				a: -1.692,
				d: -3.184,
				b: 0.063,
				c: -0.119
			}
		}
	],
	// 624
	legs: [
		efire_legs,
		{
			...efire_fire,
			transform: {
				tx: -16.95,
				ty: -3.05,
				a: 0.922,
				d: 1.135,
				b: -0.386,
				c: 0.476
			}
		}
	],
	// 628
	left_top_arm: [
		efire_left_top_arm,
		{
			...efire_fire,
			transform: {
				tx: -0.4,
				ty: -0.9,
				a: -0.696,
				d: -1.025,
				b: -0.879,
				c: 1.295
			}
		}
	],
	// 632
	left_bottom_arm: [
		efire_left_bottom_arm,
		{
			...efire_fire,
			transform: {
				tx: 0.1,
				ty: 0.3,
				a: 0.922,
				d: 1.135,
				b: -0.386,
				c: 0.476
			}
		}
	],
	// 637
	left_hand: [efire_left_hand],
	// 581
	eye: [ewater_eye],
	// 215
	head: [flam_body],
	// 6
	fx_burst_1: [
		{
			ref: ref.fx.burst_1
		}
	],
	// 7
	fx_burst_2: [
		{
			ref: ref.fx.burst_2
		}
	],
	// 8
	fx_burst_3: [
		{
			ref: ref.fx.burst_3
		}
	],
	// 9
	fx_burst_4: [
		{
			ref: ref.fx.burst_4
		}
	],
	// 10
	fx_burst_5: [
		{
			ref: ref.fx.burst_5
		}
	],
	// 11
	fx_burst_6: [
		{
			ref: ref.fx.burst_6
		}
	],
	// 12
	fx_burst_7: [
		{
			ref: ref.fx.burst_7
		}
	],
	// 13
	fx_burst_8: [
		{
			ref: ref.fx.burst_8
		}
	],
	// 14
	fx_burst_9: [
		{
			ref: ref.fx.burst_9
		}
	],
	// 15
	fx_burst_10: [
		{
			ref: ref.fx.burst_10
		}
	],
	// 16
	fx_burst_11: [
		{
			ref: ref.fx.burst_11
		}
	],
	// 17
	fx_burst_12: [
		{
			ref: ref.fx.burst_12
		}
	],
	// 18
	fx_burst_13: [
		{
			ref: ref.fx.burst_13
		}
	],
	// 19
	fx_burst_14: [
		{
			ref: ref.fx.burst_14
		}
	],
	// 20
	fx_burst_15: [
		{
			ref: ref.fx.burst_15
		}
	],
	// 21
	fx_burst_16: [
		{
			ref: ref.fx.burst_16
		}
	],
	// 22
	fx_burst_17: [
		{
			ref: ref.fx.burst_17
		}
	],
	// 23
	fx_burst_18: [
		{
			ref: ref.fx.burst_18
		}
	]
};
