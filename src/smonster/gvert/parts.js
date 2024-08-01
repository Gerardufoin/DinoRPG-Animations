// @ts-check
import { ref } from '../references.js';
import { glow_attack_1, glow_attack_2, glow_attack_3 } from '../wolf/parts.js';

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
			glow: glow_attack_1
		}
	],
	// 103
	attack_2: [
		{
			ref: ref.wolf.attack_2,
			glow: glow_attack_2
		}
	],
	// 105
	attack_3: [
		{
			ref: ref.wolf.attack_3,
			glow: glow_attack_3
		}
	],
	// 107
	attack_4: [
		{
			ref: ref.wolf.attack_4
		}
	]
};
