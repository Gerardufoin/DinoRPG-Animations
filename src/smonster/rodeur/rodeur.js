// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from '../brig1/animations/hit.js';
import { dead } from './animations/dead.js';
import { jump } from '../brig1/animations/jump.js';
import { land } from '../brig1/animations/land.js';
import { run } from '../brig1/animations/run.js';
import { stand } from '../brig1/animations/stand.js';
import { walk } from '../brig1/animations/walk.js';
import { attack } from './animations/attack.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 3522
export const rodeur = {
	name: 'rodeur',
	// Symbol 2750
	width: 1.318,
	height: 1.472,
	transforms: [
		// 4089
		{
			tx: -2.85,
			ty: -1,
			a: 1.076,
			d: 1.256,
			brightness: -12,
			contrast: 20
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -0.7,
			a: 1.703,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3487
		r_hand: parts.right_hand,
		// 3490
		l_foot: parts.left_foot,
		// 3493
		l_b_arm: parts.segment,
		// 3493-1
		l_t_arm: parts.segment,
		// 3493-2
		r_b_arm: parts.segment,
		// 3493-3
		r_t_arm: parts.segment,
		// 3493-4
		l_t_leg: parts.segment,
		// 3493-5
		r_t_leg: parts.segment,
		// 3493-6
		r_b_leg: parts.segment,
		// 3493-7
		l_b_leg: parts.segment,
		// 3496
		r_foot: parts.right_foot,
		// 3499
		pants: parts.pants,
		// 3502
		body: parts.body,
		// 3504
		head: parts.head,
		// 3506
		l_hand: parts.left_hand,
		// 3512
		atk_smear_1: parts.attack_smear_1,
		// 3513
		atk_body_smear: parts.attack_body_smear,
		// 3514
		atk_smear_2: parts.attack_smear_2,
		// 3515
		atk_smear_3: parts.attack_smear_3,
		// 3516
		atk_smear_4: parts.attack_smear_4,
		// 3517
		atk_smear_5: parts.attack_smear_5,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// release, ill, cast, sleep same as stand
		// 3507
		stand: stand,
		// 3508
		walk: walk,
		dodge: walk,
		// 3509
		run: run,
		// 3510
		hit: hit,
		// 3511
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		// 3518
		attack: attack,
		big: attack,
		counter: attack,
		// 3519
		land: land,
		// 3520
		dead: dead
	}
};
