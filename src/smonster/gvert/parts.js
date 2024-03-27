// @ts-check
import { ref } from '../references.js';

export const parts = {
	// 159
	paw: [
		{
			ref: ref.gvert.paw,
			colorOffset: {
				r: -72,
				g: -118,
				b: -235
			}
		}
	],
	/* l_b_paw
					or: -72,
				og: -118,
				ob: -255,
	*/
	// 161
	front_upper_leg: [
		{
			ref: ref.gvert.leg_1,
			colorOffset: {
				r: -67,
				g: -31,
				b: -179
			}
		}
	],
	lower_leg: [
		{
			ref: ref.gvert.leg_1,
			colorOffset: {
				r: -72,
				g: -118,
				b: -235
			}
		}
	],
	// 163
	body: [
		{
			ref: ref.gvert.body,
			colorOffset: {
				r: -67,
				g: -31,
				b: -179
			}
		}
	],
	// 165
	head: [
		{
			ref: ref.gvert.head,
			colorOffset: {
				r: -67,
				g: -31,
				b: -179
			}
		}
	],
	// 167
	back_upper_leg: [
		{
			ref: ref.gvert.leg_2,
			colorOffset: {
				r: -67,
				g: -31,
				b: -179
			}
		}
	],
	sleep_bubble: [
		{
			ref: ref.shared.sleep_bubble
		}
	],
	// 101
	attack_1: [
		{
			ref: ref.wolf.attack_1,
			glow: {
				distance: 8,
				color: 0xffffff,
				quality: 0.5,
				strength: 0.84
			}
		}
	],
	// 103
	attack_2: [
		{
			ref: ref.wolf.attack_2,
			glow: {
				distance: 6,
				color: 0xffff00,
				quality: 0.5,
				strength: 1.4
			}
		}
	],
	// 105
	attack_3: [
		{
			ref: ref.wolf.attack_3,
			glow: {
				distance: 4,
				color: 0xff0000,
				quality: 0.5,
				strength: 0.76
			}
		}
	],
	// 107
	attack_4: [
		{
			ref: ref.wolf.attack_4
		}
	]
};
