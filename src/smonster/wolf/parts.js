// @ts-check
import { ref } from '../references.js';

const color = {
	r: -82,
	g: -97,
	b: -82
};

/**
 * @type {{distance: number, color: number, quality: number, strength: number}}
 */
export const glow_attack_1 = {
	distance: 8,
	color: 0xffffff,
	quality: 0.5,
	strength: 0.84
};

/**
 * @type {{distance: number, color: number, quality: number, strength: number}}
 */
export const glow_attack_2 = {
	distance: 7,
	color: 0xffff00,
	quality: 0.5,
	strength: 1.4
};

/**
 * @type {{distance: number, color: number, quality: number, strength: number}}
 */
export const glow_attack_3 = {
	distance: 4,
	color: 0xff0000,
	quality: 0.5,
	strength: 0.76
};

export const parts = {
	// 84
	paw: [
		{
			ref: ref.wolf.paw,
			colorOffset: color
		}
	],
	// 86
	leg_1: [
		{
			ref: ref.wolf.leg_1,
			colorOffset: color
		}
	],
	// 88
	tail: [
		{
			ref: ref.wolf.tail,
			colorOffset: color
		}
	],
	// 90
	leg_2: [
		{
			ref: ref.wolf.leg_2,
			colorOffset: color
		}
	],
	// 92
	body: [
		{
			ref: ref.wolf.body,
			colorOffset: color
		}
	],
	// 94
	head: [
		{
			ref: ref.wolf.head,
			colorOffset: color
		}
	],
	// 111
	head_dead: [
		{
			ref: ref.wolf.head_dead,
			colorOffset: color
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
