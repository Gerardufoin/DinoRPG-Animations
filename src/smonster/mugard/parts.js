// @ts-check
import { ref } from '../references.js';
import { leaf } from './animations/leaf.js';

export const parts = {
	// 31
	top_segment: [
		{
			ref: ref.mugard.top_segment
		}
	],
	// 33
	hand: [
		{
			ref: ref.mugard.hand
		}
	],
	// 35
	bottom_arm: [
		{
			ref: ref.mugard.bottom_arm
		}
	],
	// 37
	attack_leaf: [
		{
			ref: ref.vegetox.leaf
		}
	],
	// 38
	leaves: [
		{
			ref: ref.vegetox.leaf,
			transform: {
				tx: -3.35,
				ty: -2.75,
				a: 0.966,
				d: 0.966,
				b: 0.259,
				c: -0.259
			},
			colorMultiplier: {
				r: 0.8,
				g: 0.8,
				b: 0.8
			}
		},
		{
			ref: ref.vegetox.leaf,
			transform: {
				tx: -0.8,
				ty: -1.55,
				a: -0.679,
				d: 0.966,
				b: 0.259,
				c: 0.182
			},
			colorMultiplier: {
				r: 0.8,
				g: 0.8,
				b: 0.8
			}
		},
		{
			ref: ref.vegetox.leaf,
			transform: {
				tx: -1.5,
				ty: -1.45,
				a: -0.661,
				d: 0.94,
				b: -0.339,
				c: -0.238
			}
		},
		{
			ref: ref.vegetox.leaf,
			transform: {
				tx: -2.3,
				ty: -2.65,
				a: 0.94,
				d: 0.94,
				b: -0.339,
				c: 0.339
			}
		}
	],
	// 40
	neck: [
		{
			ref: ref.mugard.neck
		}
	],
	// 42
	foot: [
		{
			ref: ref.mugard.foot
		}
	],
	// 44
	bottom_leg: [
		{
			ref: ref.mugard.bottom_leg
		}
	],
	// 46
	butt: [
		{
			ref: ref.mugard.butt
		}
	],
	// 48
	body: [
		{
			ref: ref.mugard.body
		}
	],
	// 50
	head: [
		{
			ref: ref.vegetox.head
		}
	],
	// 1513
	leaf: [leaf],
	// 1517
	attack_smear_1: [
		{
			ref: ref.mugard.attack_smear_1
		}
	],
	// 1518
	attack_smear_2: [
		{
			ref: ref.mugard.attack_smear_2
		}
	],
	// 1519
	attack_smear_3: [
		{
			ref: ref.mugard.attack_smear_3
		}
	],
	// 1520
	attack_smear_4: [
		{
			ref: ref.mugard.attack_smear_4
		}
	],
	// 1521
	attack_smear_5: [
		{
			ref: ref.mugard.attack_smear_5
		}
	]
};
