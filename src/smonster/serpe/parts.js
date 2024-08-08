// @ts-check
import { ref } from '../references.js';
import { serpe_head, serpe_head_close, serpe_head_hit, serpe_head_open } from './animations/head.js';
import { serpe_puddle } from './animations/puddle.js';

export const parts = {
	// 3198
	puddle: [serpe_puddle],
	// 3200
	fin: [
		{
			ref: ref.serpe.fin
		}
	],
	// 3202
	tail: [
		{
			ref: ref.serpe.tail
		}
	],
	// 3204
	segment: [
		{
			ref: ref.serpe.segment,
			glow: {
				distance: 5,
				color: 0x63bc92,
				quality: 0.5,
				strength: 2
			}
		}
	],
	// 3217head
	head: [serpe_head],
	// 3217head
	head_hit: [serpe_head_hit],
	// 3217head
	head_open: [serpe_head_open],
	// 3217head
	head_close: [serpe_head_close],
	// 3220
	body_dead_1: [
		{
			ref: ref.serpe.body_dead_1
		}
	],
	// 3221
	body_dead_2: [
		{
			ref: ref.serpe.body_dead_2
		}
	],
	// 3222
	body_dead_3: [
		{
			ref: ref.serpe.body_dead_3
		}
	],
	// 3223
	body_dead_4: [
		{
			ref: ref.serpe.body_dead_4
		}
	],
	// 3224
	body_dead_5: [
		{
			ref: ref.serpe.body_dead_5
		}
	],
	// 3225
	body_dead_6: [
		{
			ref: ref.serpe.body_dead_6
		}
	],
	// 3226
	body_dead_7: [
		{
			ref: ref.serpe.body_dead_7
		}
	],
	// 3227
	body_dead_8: [
		{
			ref: ref.serpe.body_dead_8
		}
	],
	// 3228
	body_dead_9: [
		{
			ref: ref.serpe.body_dead_9
		}
	],
	// 3229
	body_dead_10: [
		{
			ref: ref.serpe.body_dead_10
		}
	],
	// 3231
	attack_1: [
		{
			ref: ref.serpe.attack_1
		}
	],
	// 3232
	attack_2: [
		{
			ref: ref.serpe.attack_2
		}
	],
	// 3233
	attack_3: [
		{
			ref: ref.serpe.attack_3
		}
	],
	// 3234
	attack_4: [
		{
			ref: ref.serpe.attack_4
		}
	],
	// 3235
	attack_5: [
		{
			ref: ref.serpe.attack_5
		}
	],
	// 3236
	attack_6: [
		{
			ref: ref.serpe.attack_6
		}
	],
	// 3237
	attack_7: [
		{
			ref: ref.serpe.attack_7
		}
	],
	// 3238
	attack_8: [
		{
			ref: ref.serpe.attack_8
		}
	],
	// 3239
	attack_9: [
		{
			ref: ref.serpe.attack_9
		}
	],
	// 3240
	attack_10: [
		{
			ref: ref.serpe.attack_10
		}
	],
	// 3241
	attack_11: [
		{
			ref: ref.serpe.attack_11
		}
	],
	// 3242
	attack_12: [
		{
			ref: ref.serpe.attack_12
		}
	],
	// 3243
	attack_13: [
		{
			ref: ref.serpe.attack_13
		}
	],
	// 3244
	attack_14: [
		{
			ref: ref.serpe.attack_14
		}
	],
	// 3245
	attack_15: [
		{
			ref: ref.serpe.attack_15
		}
	],
	// 3246
	attack_16: [
		{
			ref: ref.serpe.attack_16
		}
	],
	// 3247
	attack_17: [
		{
			ref: ref.serpe.attack_17
		}
	],
	// 3248
	attack_18: [
		{
			ref: ref.serpe.attack_18
		}
	],
	// 3249
	attack_19: [
		{
			ref: ref.serpe.attack_19
		}
	],
	// 3250
	attack_20: [
		{
			ref: ref.serpe.attack_20
		}
	],
	// 3251
	attack_21: [
		{
			ref: ref.serpe.attack_21
		}
	]
};
