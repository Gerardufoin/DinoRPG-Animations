// @ts-check
import { ref } from '../references.js';

export let parts = {
	// 500
	r_arm: [
		{
			ref: ref.grdien.r_arm
		}
	],
	// 502
	r_hand: [
		{
			ref: ref.grdien.r_hand
		}
	],
	// 504
	r_forearm: [
		{
			ref: ref.grdien.r_forearm
		}
	],
	// 506
	body: [
		{
			ref: ref.grdien.body
		}
	],
	// 508
	roots: [
		{
			ref: ref.grdien.roots
		}
	],
	// 512
	l_forearm: [
		// 509
		{
			ref: ref.grdien.l_forearm
		},
		// 511
		{
			ref: ref.grdien.pebble,
			transform: {
				tx: -8.3,
				ty: -0.7,
				a: 0.507,
				d: 0.507,
				b: 0.507,
				c: -0.507
			}
		}
	],
	// 514
	l_arm: [
		{
			ref: ref.grdien.l_arm
		}
	],
	// 516
	l_hand: [
		{
			ref: ref.grdien.l_hand
		}
	],
	// 518
	head: [
		{
			ref: ref.grdien.head
		}
	],
	// 522
	// TODO: Eye animation
	eye: [
		{
			ref: ref.grdien.eye
		}
	]
};
