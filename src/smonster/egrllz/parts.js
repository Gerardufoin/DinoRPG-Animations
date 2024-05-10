// @ts-check
import { ref as ref_sdino } from '../../sdino/references_small.js';

export const parts = {
	// 924
	hand: [
		// 668
		{
			ref: ref_sdino.gorilloz.hand
		}
	],
	// 929 p8a + p8b
	arm: [
		// 671
		{
			ref: ref_sdino.gorilloz.arm,
			transform: {
				tx: -0.1,
				ty: 0.2
			}
		},
		// 673
		{
			ref: ref_sdino.gorilloz.arm_fur,
			transform: {
				tx: -0.35,
				ty: -2.5
			}
		}
	],
	// 932
	body: [
		// 676
		{
			ref: ref_sdino.gorilloz.body
		}
	],
	// 937 p7a
	head: [
		// 679
		{
			ref: ref_sdino.gorilloz.head,
			transform: {
				a: 1.0,
				d: 0.851,
				b: 0.0,
				c: -0.079
			}
		},
		// 689
		{
			ref: ref_sdino.gorilloz.hair_fur,
			transform: {
				tx: 2.75,
				ty: -1.45
			}
		}
	],
	// 940 p3
	face: [
		// 692
		{
			ref: ref_sdino.gorilloz.face
		}
	],
	// 943 p5a
	ear: [
		// 695
		{
			ref: ref_sdino.gorilloz.ear_pointy,
			transform: {
				tx: 0,
				ty: -1
			}
		}
	],
	// 160
	open_hand: [
		{
			// 159
			ref: ref_sdino.shared.hand,
			transform: {
				tx: -2.75,
				ty: -2.15
			}
		}
	]
};
