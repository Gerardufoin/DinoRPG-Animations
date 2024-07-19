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

// Symbol 1562
export const singmu = {
	name: 'singmu',
	// Symbol 82
	width: 1.018,
	height: 1.004,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: 0,
			a: 1,
			d: 1.001,
			brightness: -15,
			contrast: 11
		},
		// 1562
		{
			tx: 0.6,
			ty: -10.4,
			a: 1.228,
			d: 1.228
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
		// 1527
		tail: parts.tail,
		// 1529
		r_foot: parts.right_foot,
		// 1531
		l_foot: parts.left_foot,
		// 1533
		l_leg: parts.leg,
		// 1533-1
		r_leg: parts.leg,
		// 1535
		r_arm: parts.right_arm,
		// 1537
		l_hand: parts.hand,
		// 1537-1
		r_hand: parts.hand,
		// 1539
		body: parts.body,
		// 1541
		neck: parts.neck,
		// 1543
		head: parts.head,
		// 1545
		l_arm: parts.left_arm,
		// 1551
		atk_smear_1: parts.attack_smear_1,
		// 1552
		atk_smear_2: parts.attack_smear_2,
		// 1553
		atk_smear_3: parts.attack_smear_3,
		// 1554
		atk_smear_4: parts.attack_smear_4,
		// 1555
		atk_smear_5: parts.attack_smear_5,
		// 1556
		atk_smear_6: parts.attack_smear_6,
		// 1557
		atk_smear_7: parts.attack_smear_7
	},
	animations: {
		// guard, release, ill, cast, sleep same stand
		// 1546
		stand: stand,
		// 1547
		walk: walk,
		// 1548
		run: run,
		// 1549
		hit: hit,
		// 1550
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1558
		attack: attack,
		big: attack,
		counter: attack,
		// 1559
		land: land,
		// 1560
		dead: dead
	}
};
