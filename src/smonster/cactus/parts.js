// @ts-check
import { ref } from '../references.js';
import { eye } from './animations/eye.js';

export const parts = {
	// 1276
	tail: [
		{
			ref: ref.cactus.tail
		}
	],
	// 1278
	right_legs: [
		{
			ref: ref.cactus.right_legs
		}
	],
	// 1280
	right_pincer: [
		{
			ref: ref.cactus.right_pincer
		}
	],
	// 1282
	body: [
		{
			ref: ref.cactus.body
		}
	],
	// 1294
	head: [
		// 1283
		{
			ref: ref.cactus.head
		},
		// 1292
		{
			...eye,
			transform: {
				tx: -4.85,
				ty: 1
			}
		},
		// 1293
		{
			ref: ref.cactus.head_highlight
		}
	],
	// 1296
	left_legs: [
		{
			ref: ref.cactus.left_legs
		}
	],
	// 1298
	left_pincer: [
		{
			ref: ref.cactus.left_pincer
		}
	],
	// 1300
	ball: [
		{
			ref: ref.cactus.ball
		}
	],
	// 1311
	head_dead: [
		// 1283
		{
			ref: ref.cactus.head
		},
		// 1292
		{
			ref: ref.cactus.eye_closed,
			transform: {
				tx: -4.85,
				ty: 1
			}
		},
		// 1293
		{
			ref: ref.cactus.head_highlight
		}
	]
};
