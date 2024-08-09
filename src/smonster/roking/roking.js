// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { parts } from './parts.js';

// Symbol 3306
export const roking = {
	name: 'roking',
	// Symbol 2750
	width: 2.268,
	height: 1.721,
	transforms: [
		// 4089
		{
			tx: -32,
			ty: -62,
			a: 0.7,
			d: 0.7,
			brightness: -20,
			contrast: 31,
			saturation: 20
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 1.25,
			a: 2.942,
			d: 1.328
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3256
		body: parts.body,
		// 3258
		shadow: parts.shadow,
		// 3267
		head: parts.head,
		// 3267head
		head_hit: parts.head_hit,
		// 3267head
		head_sleep: parts.head_sleep,
		// 3267head
		head_dead: parts.head_dead,
		// 3273
		atk_smear_1: parts.attack_smear_1,
		// 3274
		atk_smear_2: parts.attack_smear_2,
		// 3275
		atk_smear_3: parts.attack_smear_3,
		// 3276
		atk_smear_4: parts.attack_smear_4,
		// 3277
		atk_smear_5: parts.attack_smear_5,
		// 3278
		atk_smear_6: parts.attack_smear_6,
		// 3281
		crack_1: parts.crack_1,
		// 3282
		crack_2: parts.crack_2,
		// 3283
		crack_3: parts.crack_3,
		// 3284
		crack_4: parts.crack_4,
		// 3285
		crack_5: parts.crack_5,
		// 3286
		crack_6: parts.crack_6,
		// 3287
		crack_7: parts.crack_7,
		// 3289
		r_body: parts.right_body,
		// 3292
		r_inside: parts.inside,
		// 3292-1
		l_inside: parts.inside,
		// 3294
		l_body: parts.left_body,
		// 3295
		crack_8: parts.crack_8,
		// 3296
		crack_9: parts.crack_9,
		// 3297
		crack_10: parts.crack_10,
		// 3298
		crack_11: parts.crack_11,
		// 3299
		crack_12: parts.crack_12,
		// 3300
		crack_13: parts.crack_13,
		// 3301
		crack_14: parts.crack_14,
		// 3302
		crack_15: parts.crack_15
	},
	animations: {
		// release same as stand
		// 3268
		stand: stand,
		// 3269
		walk: walk,
		// 3270
		run: run,
		// 3271
		hit: hit,
		// 3272
		jump: jump,
		fly: jump,
		// 3279
		attack: attack,
		big: attack,
		counter: attack,
		// 3280
		land: land,
		// 3303
		dead: dead,
		// 3304
		sleep: sleep,
		ill: sleep
	}
};
