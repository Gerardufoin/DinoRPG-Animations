// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';
import { taurus_tail } from './animations/tail.js';

export const parts = {
	// 2883
	r_back_spike: [
		{
			ref: ref.taurus.r_back_spike
		}
	],
	// 2885
	mane: [
		{
			ref: ref.taurus.mane
		}
	],
	// 2887
	l_back_spike: [
		{
			ref: ref.taurus.l_back_spike
		}
	],
	// 2891 p6b
	r_forearm: [
		// 2888
		{
			ref: ref.taurus.r_arm_spike
		},
		// 2890
		{
			ref: ref.taurus.r_arm,
			transform: {
				tx: 11.95,
				ty: 8.2,
				a: -0.682,
				d: 0.682,
				b: -0.492,
				c: -0.492
			}
		}
	],
	// 2895 p3f
	r_foot: [
		// 2893
		{
			ref: ref.taurus.foot,
			transform: {
				tx: -5.15,
				ty: -3.55
			}
		},
		// 2894
		{
			ref: ref.taurus.r_foot_claws
		}
	],
	// 2898
	connector_1: [
		// 2897
		{
			ref: ref.taurus.connector,
			transform: {
				tx: 3.35,
				ty: 1.85
			}
		}
	],
	// 2899
	connector_2: [
		{
			ref: ref.taurus.connector
		}
	],
	// 2903 p3b
	r_leg: [
		// 2901
		{
			ref: ref.taurus.r_leg,
			transform: {
				tx: 3.75,
				ty: 2.0
			}
		},
		// 2902
		{
			ref: ref.taurus.r_leg_spike
		}
	],
	// 2913 p7
	body: [
		// 2908
		{
			...taurus_tail,
			transform: {
				tx: -4.0,
				ty: 5.0,
				a: 0.986,
				d: 0.985,
				b: -0.161,
				c: 0.161
			}
		},
		// 2910
		{
			ref: ref.taurus.body
		},
		// 2912
		{
			ref: ref.taurus.body_belly,
			transform: {
				tx: -1.4,
				ty: -1.3,
				a: 0.866,
				d: 0.866,
				b: -0.5,
				c: 0.5
			},
			blend: BLEND_MODES.ADD,
			alpha: 0.238
		}
	],
	// 2920 p5
	head: [
		// 2914
		{
			ref: ref.taurus.r_horn
		},
		// 2916
		{
			ref: ref.taurus.head,
			transform: {
				tx: 9.45,
				ty: -9.45,
				a: 0.795,
				d: 0.795
			}
		},
		// 2918
		{
			ref: ref.taurus.hair,
			transform: {
				tx: 7.6,
				ty: -15.45,
				a: 0.795,
				d: 0.795
			}
		},
		// 2920
		{
			ref: ref.taurus.l_horn
		}
	],
	// 2922 p3c
	l_foot: [
		// 2893
		{
			ref: ref.taurus.foot,
			transform: {
				tx: -5.15,
				ty: -3.55
			}
		},
		// 2921
		{
			ref: ref.taurus.l_foot_claws
		}
	],
	// 2926 p3a
	l_leg: [
		// 2924
		{
			ref: ref.taurus.l_leg,
			transform: {
				tx: 3.75,
				ty: 2.0
			}
		},
		// 2925
		{
			ref: ref.taurus.l_leg_spike
		}
	],
	// 2933 p6a
	l_forearm: [
		// 2928
		{
			ref: ref.taurus.l_arm,
			transform: {
				tx: 3.6,
				ty: 7.9,
				a: 0.963,
				d: 0.963,
				b: -0.258,
				c: 0.258
			}
		},
		// 2931
		{
			ref: ref.taurus.arm_tatoo,
			transform: {
				tx: 5.75,
				ty: 4.15
			},
			blend: BLEND_MODES.SCREEN,
			alpha: 0.65
		},
		// 2932
		{
			ref: ref.taurus.l_arm_spike
		}
	],
	// 2935
	sideburn: [
		{
			ref: ref.taurus.sideburn
		}
	],
	// 2947
	hand: [
		{
			ref: ref.taurus.hand,
			transform: {
				tx: -2.75,
				ty: -2.15
			}
		}
	]
};
