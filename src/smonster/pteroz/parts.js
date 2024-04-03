// @ts-check
import { ref } from '../references.js';

export const parts = {
	// 886 p6d
	right_wing: [
		// 883
		{
			ref: ref.pteroz.right_wing,
			transform: {
				tx: -2.1,
				ty: -1.15,
				a: 1.179,
				d: 1.179
			}
		},
		// 885
		{
			ref: ref.pteroz.right_wing_bone,
			transform: {
				tx: 0.3,
				ty: -2.45,
				a: 1.179,
				d: 1.179
			}
		}
	],
	// 892 p6a + p6c
	hand: [
		// 888
		{
			ref: ref.pteroz.arm
		},
		// 890
		{
			ref: ref.pteroz.arm_shoulder,
			transform: {
				tx: 4.1,
				ty: -5.0
			},
			colorOffset: {
				r: -108,
				g: -103,
				b: -82
			}
		},
		// 891
		{
			ref: ref.pteroz.arm_claws
		}
	],
	// 895 p5col0
	fin: [
		{
			ref: ref.pteroz.fin
		}
	],
	// 898
	body: [
		{
			ref: ref.pteroz.body
		}
	],
	// 901 p3
	beak: [
		{
			ref: ref.pteroz.beak,
			transform: {
				tx: -2.85,
				ty: 1.35
			}
		}
	],
	// 903
	left_leg: [
		{
			ref: ref.pteroz.leg,
			colorOffset: {
				r: -108,
				g: -103,
				b: -82
			}
		}
	],
	// 907 p4
	eyes: [
		// 905
		{
			ref: ref.pteroz.eyes_mask,
			colorOffset: {
				r: -108,
				g: -113,
				b: -82
			}
		},
		// 906
		{
			ref: ref.pteroz.eyes
		}
	],
	// 912 p6b
	left_wing: [
		// 909
		{
			ref: ref.pteroz.left_wing,
			transform: {
				tx: 1.55,
				ty: -0.4,
				a: 1.377,
				d: 1.251
			}
		},
		// 911
		{
			ref: ref.pteroz.left_wing_bone,
			transform: {
				tx: -3.95,
				ty: 2.2,
				a: 0.827,
				d: 0.713,
				b: 0.0,
				c: 0.353
			}
		},
		// 911
		{
			ref: ref.pteroz.left_wing_bone,
			transform: {
				tx: 2.6,
				ty: -1.8,
				a: 1.377,
				d: 1.251
			}
		}
	]
};
