// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1491
export const mantoo = {
	name: 'mantoo',
	// Symbol 82
	width: 2.029,
	height: 1.238,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: 0,
			a: 1.003,
			d: 1.003,
			brightness: -15,
			contrast: 11
		},
		// Adjust
		{
			ty: -7.7
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
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1456
		l_f_b_leg: parts.bottom_leg,
		// 1456-1
		l_b_b_leg: parts.bottom_leg,
		// 1456-2
		r_f_b_leg: parts.bottom_leg,
		// 1456-3
		r_b_b_leg: parts.bottom_leg,
		// 1458
		l_b_arm: parts.arm,
		// 1458-1
		l_t_arm: parts.arm,
		// 1458-2
		r_b_arm: parts.arm,
		// 1458-3
		r_t_arm: parts.arm,
		// 1460
		l_f_t_leg: parts.top_leg,
		// 1460-1
		l_b_t_leg: parts.top_leg,
		// 1460-2
		r_b_t_leg: parts.top_leg,
		// 1460-3
		r_f_t_leg: parts.top_leg,
		// 1462
		butt: parts.butt,
		// 1464
		b_body: parts.bottom_body,
		// 1466
		t_body: parts.top_body,
		// 1467
		leaves: parts.leaves,
		// 1469
		r_b_maw: parts.right_bottom_maw,
		// 1469-1
		l_b_maw_atk: parts.right_bottom_maw,
		// 1471
		r_t_maw: parts.right_top_maw,
		// 1471-1
		l_t_maw_atk: parts.right_top_maw,
		// 1473
		l_b_maw: parts.left_bottom_maw,
		// 1475
		l_t_maw: parts.left_top_maw,
		// 1481
		atk_smear_1: parts.attack_smear_1,
		// 1482
		atk_smear_2: parts.attack_smear_2,
		// 1483
		atk_smear_3: parts.attack_smear_3,
		// 1484
		atk_smear_4: parts.attack_smear_4,
		// 1485
		atk_smear_5: parts.attack_smear_5,
		// 1486
		atk_smear_6: parts.attack_smear_6,
		// 50
		head: parts.head
	},
	animations: {
		// guard, release, ill, cast, sleep same as stand
		// 1476
		stand: stand,
		// 1477
		walk: walk,
		// 1478
		run: run,
		// 1479
		hit: hit,
		// 1480
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1487
		attack: attack,
		big: attack,
		counter: attack,
		// 1488
		land: land,
		// 1489
		dead: dead
	}
};
