// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';
import { run } from './animations/run.js';

// Symbol 4088
export const sangs2 = {
	name: 'sangs2',
	// Symbol 82
	width: 1.678,
	height: 1.823,
	transforms: [
		// 4089
		{
			tx: 2.55,
			ty: -22.7
		},
		// 4088
		{
			tx: 79.1,
			ty: -25,
			a: 0.437,
			d: 0.437
		}
	],
	glow: {
		distance: 3,
		color: 0x181221,
		quality: 1,
		strength: 2
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.949,
			d: 1.764
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 4053
		tail: parts.tail,
		// 4055
		l_body: parts.lower_body,
		// 4057
		u_body: parts.upper_body,
		// 4059
		head: parts.head,
		// 4073
		head_attack: parts.head_attack,
		// 4074
		atk_1: parts.attack_1,
		// 4075
		atk_2: parts.attack_2,
		// 4076
		atk_3: parts.attack_3,
		// 4077
		atk_4: parts.attack_4,
		// 4078
		atk_5: parts.attack_5,
		// 4079
		atk_6: parts.attack_6,
		// 4080
		atk_7: parts.attack_7,
		// 4085
		u_body_dead: parts.upper_body_dead
	},
	animations: {
		// release, guard, ill, cast, sleep, dodge same as stand
		// 4060
		stand: stand,
		// 4068
		walk: walk,
		// 4069
		run: run,
		fly: run,
		// 4070
		hit: hit,
		// 4071
		jump: jump,
		jumpDown: jump,
		fall: jump,
		// 4081
		attack: attack,
		big: attack,
		counter: attack,
		// 4083
		land: land,
		// 4086
		dead: dead
	}
};
