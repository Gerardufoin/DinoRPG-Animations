// @ts-check
import { ref } from '../references.js';

export const parts = {
	// 3165
	front_bottom_leg: [
		{
			ref: ref.behemu.front_bottom_leg
		}
	],
	// 3167
	tail: [
		{
			ref: ref.behemu.tail
		}
	],
	// 3171
	front_top_leg: [
		// 3168
		{
			ref: ref.behemu.front_top_leg
		},
		// 3170
		{
			ref: ref.behemu.front_leg_fur,
			transform: {
				tx: -7.25,
				ty: -19.1
			}
		}
	],
	// 3173
	body: [
		{
			ref: ref.behemu.body
		}
	],
	// 3175
	back_leg: [
		{
			ref: ref.behemu.back_leg
		}
	],
	// 3178
	head: [
		{
			ref: ref.behemu.head
		}
	],
	// 3178head
	head_hit: [
		{
			ref: ref.behemu.head_hit
		}
	]
};
