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

export const mugard_parts = {
	// 31
	l_t_arm: parts.top_segment,
	// 31-1
	l_t_leg: parts.top_segment,
	// 31-2
	r_t_arm: parts.top_segment,
	// 31-3
	r_t_leg: parts.top_segment,
	// 33
	l_hand: parts.hand,
	// 33-1
	r_hand: parts.hand,
	// 35
	l_b_arm: parts.bottom_arm,
	// 35-1
	r_b_arm: parts.bottom_arm,
	// 37
	atk_leaf_1: parts.attack_leaf,
	// 37-1
	atk_leaf_2: parts.attack_leaf,
	// 38
	leaves: parts.leaves,
	// 40
	neck: parts.neck,
	// 42
	l_foot: parts.foot,
	// 42-1
	r_foot: parts.foot,
	// 44
	l_b_leg: parts.bottom_leg,
	// 44-1
	r_b_leg: parts.bottom_leg,
	// 46
	butt: parts.butt,
	// 48
	body: parts.body,
	// 50
	head: parts.head,
	// 1513
	leaf_1: parts.leaf,
	// 1513-1
	leaf_2: parts.leaf,
	// 1513-2
	leaf_3: parts.leaf,
	// 1517
	atk_smear_1: parts.attack_smear_1,
	// 1518
	atk_smear_2: parts.attack_smear_2,
	// 1519
	atk_smear_3: parts.attack_smear_3,
	// 1520
	atk_smear_4: parts.attack_smear_4,
	// 1521
	atk_smear_5: parts.attack_smear_5
};

export const mugard_animations = {
	// guard, release, ill, cast, sleep same as stand
	// 1511
	stand: stand,
	// 1512
	walk: walk,
	// 1514
	run: run,
	// 1515
	hit: hit,
	// 1516
	jump: jump,
	jumpDown: jump,
	fall: jump,
	fly: jump,
	dodge: jump,
	// 1522
	attack: attack,
	big: attack,
	counter: attack,
	// 1523
	land: land,
	// 51
	dead: dead
};

// Symbol 1525
export const mugard = {
	name: 'mugard',
	// Symbol 82
	width: 0.832,
	height: 1.131,
	transforms: [
		// 4089
		{
			tx: -2.25,
			ty: -4,
			a: 0.629,
			d: 0.438,
			brightness: -15,
			contrast: 11
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
	parts: mugard_parts,
	animations: mugard_animations
};
