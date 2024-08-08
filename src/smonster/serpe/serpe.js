// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 3254
export const serpe = {
	name: 'serpe',
	// Symbol 2750
	width: 4.185,
	height: 5.343,
	transforms: [
		// 4089
		{
			tx: -61,
			ty: -195,
			a: 1.023,
			d: 1.023,
			brightness: -20,
			contrast: 30,
			hue: 37
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.05,
			a: 4.061,
			d: 3.018
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3198
		puddle: parts.puddle,
		// 3200
		l_ear: parts.fin,
		// 3200-1
		l_fin: parts.fin,
		// 3200-2
		r_ear: parts.fin,
		// 3200-3
		r_fin: parts.fin,
		// 3202
		tail: parts.tail,
		// 3204ikNode_7-1
		body_1: parts.segment,
		// 3204ikNode_7
		body_2: parts.segment,
		// 3204ikNode_8
		body_3: parts.segment,
		// 3204ikNode_9
		body_4: parts.segment,
		// 3204ikNode_10
		body_5: parts.segment,
		// 3204ikNode_11
		body_6: parts.segment,
		// 3204ikNode_12
		body_7: parts.segment,
		// 3204ikNode_13
		body_8: parts.segment,
		// 3217head
		head: parts.head,
		// 3217head
		head_hit: parts.head_hit,
		// 3217head
		head_open: parts.head_open,
		// 3217head
		head_close: parts.head_close,
		// 3220
		body_dead_1: parts.body_dead_1,
		// 3221
		body_dead_2: parts.body_dead_2,
		// 3222
		body_dead_3: parts.body_dead_3,
		// 3223
		body_dead_4: parts.body_dead_4,
		// 3224
		body_dead_5: parts.body_dead_5,
		// 3225
		body_dead_6: parts.body_dead_6,
		// 3226
		body_dead_7: parts.body_dead_7,
		// 3227
		body_dead_8: parts.body_dead_8,
		// 3228
		body_dead_9: parts.body_dead_9,
		// 3229
		body_dead_10: parts.body_dead_10,
		// 3231
		atk_1: parts.attack_1,
		// 3232
		atk_2: parts.attack_2,
		// 3233
		atk_3: parts.attack_3,
		// 3234
		atk_4: parts.attack_4,
		// 3235
		atk_5: parts.attack_5,
		// 3236
		atk_6: parts.attack_6,
		// 3237
		atk_7: parts.attack_7,
		// 3238
		atk_8: parts.attack_8,
		// 3239
		atk_9: parts.attack_9,
		// 3240
		atk_10: parts.attack_10,
		// 3241
		atk_11: parts.attack_11,
		// 3242
		atk_12: parts.attack_12,
		// 3243
		atk_13: parts.attack_13,
		// 3244
		atk_14: parts.attack_14,
		// 3245
		atk_15: parts.attack_15,
		// 3246
		atk_16: parts.attack_16,
		// 3247
		atk_17: parts.attack_17,
		// 3248
		atk_18: parts.attack_18,
		// 3249
		atk_19: parts.attack_19,
		// 3250
		atk_20: parts.attack_20,
		// 3251
		atk_21: parts.attack_21
	},
	animations: {
		// release, walk, run, fly, jump, land, ill, sleep same as stand
		// 3218
		stand: stand,
		// 3219
		hit: hit,
		// 3252
		attack: attack,
		big: attack,
		counter: attack,
		superattack: attack,
		// 3230
		dead: dead
	}
};
