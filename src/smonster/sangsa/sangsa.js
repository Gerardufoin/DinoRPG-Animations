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

// Symbol 4029
export const sangsa = {
	name: 'sangsa',
	// Symbol 82
	width: 0.767,
	height: 1.33,
	transforms: [
		// 4089
		{
			tx: -0.9,
			ty: -15.6
		},
		// 4029
		{
			tx: 2.1,
			ty: 8,
			a: 0.407,
			d: 0.407
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.082,
			d: 0.979
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 4011
		tail: parts.tail,
		// 4013
		l_body: parts.lower_body,
		// 4015
		m_body: parts.upper_body,
		// 4016
		u_body: parts.upper_body,
		// 4018
		head: parts.head,
		// 4020
		tooth: parts.tooth
	},
	animations: {
		// ill, cast, release same as stand
		// 4021
		stand: stand,
		// 4022
		walk: walk,
		run: walk,
		// 4023
		hit: hit,
		// 4024
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 4025
		attack: attack,
		big: attack,
		counter: attack,
		// 4026
		land: land,
		// 4027
		dead: dead,
		sleep: dead
	}
};
