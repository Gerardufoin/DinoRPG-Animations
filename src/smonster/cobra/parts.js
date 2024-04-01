// @ts-check

import { anguil_eye } from '../anguil/animations/eye.js';
import { ref } from '../references.js';

export const parts = {
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
		// 805
		{
			ref: ref.cobra.head_front
		},
		// 418
		{
			ref: ref.anguil.head
		},
		// 806
		{
			ref: ref.cobra.head_back
		}
	],
	// 424
	l_eye: [anguil_eye],
	l_eye_dead: [
		{
			ref: ref.anguil.eye_closed
		}
	]
};
