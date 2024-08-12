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
import { parts } from './parts.js';

// Symbol 3740
export const becplu = {
	name: 'becplu',
	// Symbol 2750
	width: 3.106,
	height: 2.739,
	transforms: [
		// 4089
		{
			tx: 132.65,
			ty: -156.05
		},
		// 3740
		{
			tx: -131.95,
			ty: 130.4
		},
		// Adjust
		{
			ty: -7.65
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.85,
			a: 2.155,
			d: 1.409
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3715
		r_foot: parts.right_foot,
		// 3717
		l_foot: parts.left_foot,
		// 3719
		r_b_leg: parts.bottom_leg,
		// 3719-1
		l_b_leg: parts.bottom_leg,
		// 3721
		l_t_leg: parts.top_leg,
		// 3721-1
		r_t_leg: parts.top_leg,
		// 3723
		tail: parts.tail,
		// 3725
		body: parts.body,
		// 3727
		head: parts.head,
		// 3733
		atk_smear_1: parts.attack_smear_1,
		// 3734
		atk_smear_2: parts.attack_smear_2
	},
	animations: {
		// release, guard, ill, cast same as stand
		// sleep + dodge (3738) are a static frame from stand, so changed it to stand as well (looks better)
		// 3728
		stand: stand,
		// 3729
		walk: walk,
		// 3730
		run: run,
		fly: run,
		// 3731
		hit: hit,
		// 3732
		jump: jump,
		jumpDown: jump,
		fall: jump,
		// 3735
		attack: attack,
		big: attack,
		counter: attack,
		// 3736
		land: land,
		// 3737
		dead: dead
	}
};
