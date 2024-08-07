// @ts-check

import { ref } from '../references.js';
import { chima_eye } from './animations/eye.js';
import { chima_tongue, chima_tongue_fast } from './animations/tongue.js';

export const parts = {
	// 3052
	bottom_arm: [
		{
			ref: ref.chima.bottom_arm
		}
	],
	// 3054
	top_arm: [
		{
			ref: ref.chima.top_arm
		}
	],
	// 3056
	foot: [
		{
			ref: ref.chima.foot
		}
	],
	// 3058
	body: [
		{
			ref: ref.chima.body
		}
	],
	// 3069
	head: [
		// 3059
		{
			ref: ref.chima.head
		},
		// 3067
		{
			...chima_eye,
			transform: {
				tx: 13.45,
				ty: 11.65
			}
		},
		// 3068
		{
			ref: ref.chima.head_left_fur
		}
	],
	// 3069
	head_hit: [
		// 3059
		{
			ref: ref.chima.head
		},
		// 3067
		{
			ref: ref.chima.eye_hit,
			transform: {
				tx: 13.45,
				ty: 11.65
			}
		},
		// 3068
		{
			ref: ref.chima.head_left_fur
		}
	],
	// 3069
	head_sleep: [
		// 3059
		{
			ref: ref.chima.head
		},
		// 3067
		{
			ref: ref.chima.eye_closed,
			transform: {
				tx: 13.45,
				ty: 11.65
			}
		},
		// 3068
		{
			ref: ref.chima.head_left_fur
		}
	],
	// 3071
	mouth: [
		{
			ref: ref.chima.mouth
		}
	],
	// 3079
	tongue: [chima_tongue],
	// 3079
	tongue_fast: [chima_tongue_fast],
	// 3085
	attack_smear: [
		{
			ref: ref.chima.attack_smear
		}
	]
};
