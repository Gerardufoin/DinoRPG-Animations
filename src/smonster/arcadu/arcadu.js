// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';
import { parts as parts_barche } from '../barche/parts.js';

// Symbol 3484
export const arcadu = {
	name: 'arcadu',
	// Symbol 2750
	width: 7.154,
	height: 3.976,
	transforms: [
		// 4089
		{
			tx: 24,
			ty: -38,
			a: 1.088,
			d: 1.171,
			brightness: -41,
			contrast: 20
		}
	],
	glow: {
		distance: 5,
		color: 0xff9900,
		quality: 1,
		strength: 2
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 16.2,
			a: 6.684,
			d: 3.018
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3426
		r_b_leg: parts.right_back_leg,
		// 3427
		sp_1: parts_barche.spike,
		// 3427-1
		sp_2: parts_barche.spike,
		// 3427-2
		sp_3: parts_barche.spike,
		// 3427-3
		sp_4: parts_barche.spike,
		// 3427-4
		sp_5: parts_barche.spike,
		// 3427-5
		sp_6: parts_barche.spike,
		// 3427-6
		sp_7: parts_barche.spike,
		// 3427-7
		sp_8: parts_barche.spike,
		// 3429
		body: parts.body,
		// 3431
		back: parts_barche.back,
		// 3433
		r_f_leg: parts_barche.right_leg,
		// 3435
		l_b_leg: parts.left_back_leg,
		// 3437
		l_f_leg: parts_barche.left_leg,
		// 3442
		mouth_b: parts_barche.mouth_back,
		// 3444
		mouth_f: parts_barche.mouth_front,
		// 3446
		head: parts_barche.head,
		// 3453
		atk_s: parts_barche.attack_start,
		// 3473coule
		atk: parts_barche.attack,
		// 3475
		atk_e_1: parts_barche.attack_end_1,
		// 3476
		atk_e_2: parts_barche.attack_end_2,
		// 3477
		atk_e_3: parts_barche.attack_end_3,
		// 3478
		atk_e_4: parts_barche.attack_end_4,
		// 3479
		atk_e_5: parts_barche.attack_end_5,
		// 797
		atk_e_6: parts_barche.attack_end_6,
		// 798
		atk_e_7: parts_barche.attack_end_7,
		// 799
		atk_e_8: parts_barche.attack_end_8
	},
	animations: {
		// release, ill, cast same as stand
		// 3447
		stand: stand,
		// 3448
		walk: walk,
		sleep: walk,
		// 3449
		run: run,
		// 3450
		hit: hit,
		// 3451
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 3480
		attack: attack,
		big: attack,
		counter: attack,
		// 3481
		land: land,
		// 3482
		dead: dead
	}
};
