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

// Symbol 3362
export const cranit = {
	name: 'cranit',
	// Symbol 2750
	width: 1.217,
	height: 1.391,
	transforms: [
		// 4089
		{
			tx: -14.6,
			ty: -46,
			a: 0.78,
			d: 0.78,
			contrast: 21,
			saturation: 14
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 1.5,
			a: 1.703,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3308
		body: parts.body,
		// 3310
		skull: parts.skull,
		// 3312
		hair: parts.hair,
		// 3314
		l_moustache: parts.moustache,
		// 3314-1
		r_moustache: parts.moustache,
		// 3316
		r_eye: parts.right_eye,
		// 3318
		l_eye: parts.left_eye,
		// 3320
		trail_1: parts.trail_1,
		// 3321
		trail_2: parts.trail_2,
		// 3322
		trail_3: parts.trail_3,
		// 3323
		trail_4: parts.trail_4,
		// 3324
		trail_5: parts.trail_5,
		// 3329
		hit_1: parts.hit_1,
		// 3330
		hit_2: parts.hit_2,
		// 3331
		hit_3: parts.hit_3,
		// 3332
		hit_4: parts.hit_4,
		// 3335
		atk_1: parts.attack_1,
		// 3336
		atk_2: parts.attack_2,
		// 3337
		atk_3: parts.attack_3,
		// 3338
		atk_4: parts.attack_4,
		// 3339
		atk_5: parts.attack_5,
		// 3340
		atk_6: parts.attack_6,
		// 3341
		atk_7: parts.attack_7,
		// 3342
		atk_8: parts.attack_8,
		// 3343
		atk_9: parts.attack_9,
		// 3344
		atk_10: parts.attack_10,
		// 3345
		atk_11: parts.attack_11,
		// 3346
		atk_12: parts.attack_12,
		// 3347
		atk_13: parts.attack_13,
		// 3348
		atk_14: parts.attack_14,
		// 3349
		atk_15: parts.attack_15,
		// 3350
		atk_16: parts.attack_16,
		// 3353
		body_dead_1: parts.body_dead_1,
		// 3354
		body_dead_2: parts.body_dead_2,
		// 3355
		body_dead_3: parts.body_dead_3,
		// 3356
		body_dead_4: parts.body_dead_4,
		// 3357morphshape
		body_dead_5: parts.body_dead_5,
		// 3357morphshape
		body_dead_6: parts.body_dead_6,
		// 3357morphshape
		body_dead_7: parts.body_dead_7,
		// 3357morphshape
		body_dead_8: parts.body_dead_8,
		// 3357morphshape
		body_dead_9: parts.body_dead_9,
		// 3357morphshape
		body_dead_10: parts.body_dead_10,
		// 3357morphshape
		body_dead_11: parts.body_dead_11,
		// 3357morphshape
		body_dead_12: parts.body_dead_12
	},
	animations: {
		// release same as stand
		// 3319
		stand: stand,
		// 3325
		walk: walk,
		// 3328
		run: run,
		// 3333
		hit: hit,
		// 3334
		jump: jump,
		fly: jump,
		// 3351
		attack: attack,
		big: attack,
		counter: attack,
		// 3352
		land: land,
		// 3359
		dead: dead,
		// 3360
		sleep: sleep
	}
};
