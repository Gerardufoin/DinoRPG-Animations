// @ts-check
import { ref } from '../references.js';
import { feufol_attack_fx } from './animations/attack_fx.js';
import { feufol_aura, feufol_aura_fly } from './animations/aura.js';
import { feufol_hit_fx } from './animations/hit_fx.js';

const aura_filters = {
	glow: [
		{
			distance: 17,
			color: 0x40ffff,
			innerStrength: 2,
			quality: 0.5
		},
		{
			distance: 5,
			color: 0x6699ff,
			strength: 1.5,
			quality: 0.5
		}
	],
	blur: {
		x: 1,
		y: 2
	}
};

const eye_filters = {
	glow: {
		distance: 5,
		color: 0xff3300,
		quality: 0.5,
		strength: 3
	},
	blur: {
		x: 1,
		y: 0
	}
};

export const parts = {
	// 3668
	aura: [
		{
			...feufol_aura,
			...aura_filters
		}
	],
	// 3672
	eye: [
		{
			ref: ref.feufol.eye,
			...eye_filters
		}
	],
	// 3673
	body: [
		// 3668
		{
			...feufol_aura,
			transform: {
				tx: 184.65,
				ty: 105.1
			},
			...aura_filters
		},
		// 3670
		{
			ref: ref.feufol.head,
			transform: {
				tx: 13.85,
				ty: 115.2
			},
			colorOffset: {
				r: 25,
				g: 51,
				b: 51
			},
			colorMultiplier: {
				r: 0.797,
				g: 0.797,
				b: 0.797
			}
		},
		// 3672
		{
			ref: ref.feufol.eye,
			transform: {
				tx: 38.6,
				ty: 144.25,
				a: 0.725,
				d: 0.725
			},
			...eye_filters
		}
	],
	// 3676
	aura_fly: [
		{
			...feufol_aura_fly,
			transform: {
				tx: 184.65,
				ty: 105.1
			},
			...aura_filters
		}
	],
	// 3678
	head_fly: [
		// 3677
		{
			ref: ref.feufol.head_fly,
			colorOffset: {
				r: 25,
				g: 51,
				b: 51
			},
			colorMultiplier: {
				r: 0.797,
				g: 0.797,
				b: 0.797
			}
		},
		// 3672
		{
			ref: ref.feufol.eye,
			transform: {
				tx: 26.85,
				ty: 30.45,
				a: 0.725,
				d: 0.725
			},
			...eye_filters
		}
	],
	// 3691
	hit_fx: [
		{
			...feufol_hit_fx,
			...aura_filters
		}
	],
	// 3706
	attack_fx: [
		{
			...feufol_attack_fx,
			glow: [
				{
					distance: 7,
					color: 0x8ce8ff,
					innerStrength: 2,
					quality: 0.5
				},
				{
					distance: 14,
					color: 0x0033ff,
					strength: 2,
					quality: 0.5
				}
			]
		}
	],
	// 3709
	head_dead: [
		{
			ref: ref.feufol.head_dead
		}
	]
};
