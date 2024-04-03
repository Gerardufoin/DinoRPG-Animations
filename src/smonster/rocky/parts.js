// @ts-check
import { ref } from '../references.js';

export const parts = {
	// 857 p8b
	right_hand: [
		{
			ref: ref.rocky.right_hand,
			transform: {
				tx: 1.35,
				ty: 13.0
			}
		}
	],
	// 860 p4
	body: [
		{
			ref: ref.rocky.body
		}
	],
	// 863 p6
	mouth: [
		{
			ref: ref.rocky.mouth,
			transform: {
				tx: -0.85,
				ty: -0.2
			}
		}
	],
	// 867 p5
	eyes: [
		{
			ref: ref.rocky.eyes
		},
		{
			ref: ref.rocky.eyebrows
		}
	],
	// 870 p8a
	left_hand: [
		{
			ref: ref.rocky.left_hand,
			transform: {
				tx: -5.8,
				ty: 11.7
			}
		}
	]
};
