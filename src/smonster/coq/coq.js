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

// Symbol 209
export const coq = {
	name: 'coq',
	// Symbol 82
	width: 2.128,
	height: 2.599,
	transforms: [
		// 4089
		{
			tx: 0.8,
			ty: -39.4
		},
		// 209
		{
			tx: -4.95,
			ty: 18.4
		},
		// Adjust
		{
			ty: -7.95
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.55,
			a: 2.488,
			d: 2.251
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		r_foot: parts.r_foot,
		l_foot: parts.l_foot,
		r_lower_leg: parts.lower_leg,
		l_lower_leg: parts.lower_leg,
		l_upper_leg: parts.upper_leg,
		r_upper_leg: parts.upper_leg,
		lower_body: parts.lower_body,
		upper_body: parts.upper_body,
		head: parts.head,
		head_hit: parts.head_hit,
		attack_1: parts.attack_1,
		attack_2: parts.attack_2,
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		]
	},
	animations: {
		// release, guard, ill, and cast same as stand
		// sleep and dodge was a single frame, replaced it by stand and jump
		// 195
		stand: stand,
		// 196
		walk: walk,
		// 197
		run: run,
		fly: run,
		// 200
		hit: hit,
		// 201
		jump: jump,
		jumpDown: jump,
		fall: jump,
		dodge: jump,
		// 204
		attack: attack,
		counter: attack,
		big: attack,
		// 205
		land: land,
		// 206
		dead: dead
	}
};
