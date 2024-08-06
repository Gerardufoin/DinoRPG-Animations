// @ts-check
import { ref } from '../references.js';
import { sofia_deco, sofia_deco_hit } from './animations/deco.js';
import { sofia_head, sofia_head_bump } from './animations/head.js';

const atk_fx_filters = {
	blur: {
		x: 1,
		y: 1
	},
	glow: {
		distance: 3,
		color: 0xcc3399,
		quality: 0.5,
		strength: 3
	}
};

export const parts = {
	// 3002
	right_scarf: [
		{
			ref: ref.sofia.right_scarf
		}
	],
	// 3004
	right_top_arm: [
		{
			ref: ref.sofia.right_top_arm
		}
	],
	// 3006
	right_hand: [
		{
			ref: ref.sofia.right_hand
		}
	],
	// 3008
	right_bottom_arm: [
		{
			ref: ref.sofia.right_bottom_arm
		}
	],
	// 3010
	legs: [
		{
			ref: ref.sofia.legs
		}
	],
	// 3012
	right_top_scarf: [
		{
			ref: ref.sofia.right_top_scarf
		}
	],
	// 3014
	body: [
		{
			ref: ref.sofia.body
		}
	],
	// 3016
	left_scarf: [
		{
			ref: ref.sofia.left_scarf
		}
	],
	// 3021
	deco: [sofia_deco],
	// 3021
	deco_hit: [sofia_deco_hit],
	// 3023
	left_hand: [
		{
			ref: ref.sofia.left_hand
		}
	],
	// 3025
	left_arm: [
		{
			ref: ref.sofia.left_arm
		}
	],
	// 3034
	head: [sofia_head],
	// 3034
	head_bump: [sofia_head_bump],
	// 3034
	head_hit: [
		// 3027
		{
			ref: ref.sofia.right_hair,
			transform: {
				tx: 19.05,
				ty: 1.6,
				a: 0.619,
				b: 0.357,
				c: -0.5,
				d: 0.866
			}
		},
		// 3032
		{
			ref: ref.sofia.head_hit
		},
		// 3030
		{
			ref: ref.sofia.left_hair,
			transform: {
				tx: -2.4,
				ty: 13.85,
				a: 1.001,
				b: -0.625,
				c: 0.529,
				d: 0.848
			}
		}
	],
	// 3038
	attack_right_bottom_arm: [
		{
			ref: ref.sofia.attack_right_bottom_arm
		}
	],
	// 3040
	attack_right_hand: [
		{
			ref: ref.sofia.attack_right_hand
		}
	],
	// 3041
	attack_fx_1: [
		{
			ref: ref.sofia.attack_fx_1,
			...atk_fx_filters
		}
	],
	// 3042
	attack_fx_2: [
		{
			ref: ref.sofia.attack_fx_2,
			...atk_fx_filters
		}
	],
	// 3043
	attack_fx_3: [
		{
			ref: ref.sofia.attack_fx_3,
			...atk_fx_filters
		}
	],
	// 3047
	attack_ball: [
		{
			ref: ref.sofia.attack_ball,
			glow: {
				distance: 5,
				color: 0xcc3399,
				quality: 1,
				strength: 1
			}
		}
	]
};
