// @ts-check
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';

// Symbol 3424
export const crokoc = {
	name: 'crokoc',
	// Symbol 2750
	width: 1.905,
	height: 0.491,
	transforms: [
		// 4089
		{
			tx: -34.9,
			ty: -10,
			contrast: 11,
			saturation: 20
		}
	],
	masks: {
		l_maw: 'mask',
		r_maw: 'mask'
	},
	parts: {
		// 3366
		puddle: parts.puddle,
		// 3368
		back: parts.back,
		// 3370
		body: parts.body,
		// 3372
		mask: parts.mask,
		// 3374
		l_maw: parts.left_maw,
		// 3376
		r_maw: parts.right_maw,
		// 3378
		trail_1: parts.trail_1,
		// 3379
		trail_2: parts.trail_2,
		// 3380
		trail_3: parts.trail_3,
		// 3381
		trail_4: parts.trail_4,
		// 3384
		hit_trail_1: parts.hit_trail_1,
		// 3385
		hit_trail_2: parts.hit_trail_2,
		// 3386
		hit_trail_3: parts.hit_trail_3,
		// 3387
		hit_trail_4: parts.hit_trail_4,
		// 3388
		hit_trail_5: parts.hit_trail_5,
		// 3389
		hit_trail_6: parts.hit_trail_6,
		// 3391
		atk_trail_1: parts.attack_trail_1,
		// 3392
		atk_trail_2: parts.attack_trail_2,
		// 3393
		atk_trail_3: parts.attack_trail_3,
		// 3394
		atk_trail_4: parts.attack_trail_4,
		// 3395
		atk_trail_5: parts.attack_trail_5,
		// 3396
		atk_trail_6: parts.attack_trail_6,
		// 3397
		atk_trail_7: parts.attack_trail_7,
		// 3398
		atk_smear_1: parts.attack_smear_1,
		// 3399
		atk_smear_2: parts.attack_smear_2,
		// 3400
		atk_trail_8: parts.attack_trail_8,
		// 3401
		atk_smear_3: parts.attack_smear_3,
		// 3402
		atk_smear_4: parts.attack_smear_4,
		// 3403
		atk_trail_9: parts.attack_trail_9,
		// 3404
		atk_smear_5: parts.attack_smear_5,
		// 3405
		atk_smear_6: parts.attack_smear_6,
		// 3406
		atk_smear_7: parts.attack_smear_7,
		// 3407
		atk_smear_8: parts.attack_smear_8,
		// 3408
		atk_trail_10: parts.attack_trail_10,
		// 3409
		atk_trail_11: parts.attack_trail_11,
		// 3410
		atk_trail_12: parts.attack_trail_12,
		// 3411
		atk_trail_13: parts.attack_trail_13,
		// 3412
		atk_trail_14: parts.attack_trail_14,
		// 3413
		atk_trail_15: parts.attack_trail_15,
		// 3414
		atk_trail_16: parts.attack_trail_16,
		// 3415
		atk_trail_17: parts.attack_trail_17,
		// 3416
		atk_trail_18: parts.attack_trail_18,
		// 3417
		atk_trail_19: parts.attack_trail_19,
		// 3418
		atk_trail_20: parts.attack_trail_20,
		// 3419
		atk_trail_21: parts.attack_trail_21
	},
	animations: {
		// release, fly, jump, land, ill, sleep same as stand
		// 3377
		stand: stand,
		// 3382
		walk: walk,
		// 3383
		run: run,
		// 3390
		hit: hit,
		// 3420
		attack: attack,
		big: attack,
		counter: attack,
		// 3422
		dead: dead
	}
};
