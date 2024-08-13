// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';
import { shield } from '../towgrd/animations/shield.js';
import { rhubar_head, rhubar_head_dead } from './animations/head.js';
import { rhubar_attack_smear } from './animations/attack_smear.js';

export const parts = {
	// 3792
	right_top_arm: [
		{
			ref: ref.rhubar.right_top_arm
		}
	],
	// 3794
	right_bottom_arm: [
		{
			ref: ref.rhubar.right_bottom_arm
		}
	],
	// 3796
	back: [
		{
			ref: ref.rhubar.back
		}
	],
	// 3825pnj
	head: [rhubar_head],
	// 3827
	lower_body: [
		{
			ref: ref.rhubar.lower_body
		}
	],
	// 3829
	middle_body: [
		{
			ref: ref.rhubar.middle_body
		}
	],
	// 3834
	upper_body: [
		// 3830
		{
			ref: ref.rhubar.upper_body
		},
		// 3832
		{
			ref: ref.rhubar.upper_body_cracks,
			transform: {
				tx: 54.3,
				ty: 16.45
			},
			blend: BLEND_MODES.OVERLAY
		},
		// 3833
		{
			ref: ref.rhubar.upper_body_vines
		}
	],
	// 3837
	left_bottom_arm: [
		{
			ref: ref.rhubar.left_bottom_arm
		}
	],
	// 3839
	left_top_arm: [
		{
			ref: ref.rhubar.left_top_arm
		}
	],
	// 3844
	hit_fx_1: [
		{
			ref: ref.rhubar.hit_fx_1
		}
	],
	// 3845
	hit_fx_2: [
		{
			ref: ref.rhubar.hit_fx_2
		}
	],
	// 3846
	hit_fx_3: [
		{
			ref: ref.rhubar.hit_fx_3
		}
	],
	// 3847
	hit_fx_4: [
		{
			ref: ref.rhubar.hit_fx_4
		}
	],
	// 3848
	hit_fx_5: [
		{
			ref: ref.rhubar.hit_fx_5
		}
	],
	// 3858
	attack_smear: [
		{
			...rhubar_attack_smear,
			glow: {
				distance: 22,
				color: 0xff9900,
				quality: 0.5,
				strength: 2
			}
		}
	],
	// 3861pnj
	head_dead: [rhubar_head_dead],
	// 3867
	shield: [
		{
			...shield,
			transform: {
				ty: -70,
				a: 1.5,
				d: 1.5
			},
			colorOffset: {
				r: 171,
				g: 42,
				b: 11
			},
			colorMultiplier: {
				r: 0.328,
				g: 0.328,
				b: 0.328
			}
		}
	]
};
