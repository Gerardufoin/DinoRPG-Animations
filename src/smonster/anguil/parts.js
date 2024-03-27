// @ts-check

import { ref } from '../references.js';
import { anguil_eye } from './animations/eye.js';
import { anguil_whisker } from './animations/whisker.js';

export const parts = {
	// 395
	l_t_arm: [
		{
			ref: ref.anguil.arm_top
		}
	],
	r_t_arm: [
		{
			ref: ref.anguil.arm_top,
			colorOffset: {
				r: -31,
				g: -36,
				b: -26
			}
		}
	],
	// 397
	l_b_arm: [
		{
			ref: ref.anguil.arm_bottom
		}
	],
	r_b_arm: [
		{
			ref: ref.anguil.arm_bottom,
			colorOffset: {
				r: -31,
				g: -36,
				b: -26
			}
		}
	],
	// 399
	l_scythe: [
		{
			ref: ref.anguil.scythe
		}
	],
	r_scythe: [
		{
			ref: ref.anguil.scythe,
			colorOffset: {
				r: -31,
				g: -36,
				b: -26
			}
		}
	],
	// 401
	b_tail: [
		{
			ref: ref.anguil.tail_bottom
		}
	],
	// 403
	t_tail: [
		{
			ref: ref.anguil.tail_top
		}
	],
	// 405
	t_body: [
		{
			ref: ref.anguil.body_top
		}
	],
	// 407
	b_body: [
		{
			ref: ref.anguil.body_bottom
		}
	],
	// 416
	mouth: [
		// 414
		{
			...anguil_whisker,
			transform: {
				tx: -10.65,
				ty: -0.25,
				a: -0.445,
				d: 0.648,
				b: -0.338,
				c: -0.492
			}
		},
		// 415
		{
			ref: ref.anguil.mouth
		},
		// 414
		{
			...anguil_whisker,
			transform: {
				tx: 6.55,
				ty: 3.75,
				a: 0.806,
				d: 0.806,
				b: 0.11,
				c: -0.11
			}
		}
	],
	// 418
	head_dead: [
		// 417
		{
			ref: ref.anguil.head
		},
		// 419
		{
			ref: ref.anguil.head_spikes
		}
	],
	// 420
	head: [
		// 414
		{
			...anguil_whisker,
			transform: {
				tx: -6.0,
				ty: -0.3,
				a: -0.153,
				d: 0.259,
				b: -0.571,
				c: -0.966
			}
		},
		// 418
		{
			ref: ref.anguil.head
		},
		// 419
		{
			ref: ref.anguil.head_spikes
		},
		// 414
		{
			...anguil_whisker,
			transform: {
				tx: 10.0,
				ty: 3.7
			}
		}
	],
	// 424
	l_eye: [anguil_eye],
	l_eye_dead: [
		{
			ref: ref.anguil.eye_closed
		}
	],
	// 432
	mouth_dead: [
		{
			ref: ref.anguil.mouth
		}
	]
};
