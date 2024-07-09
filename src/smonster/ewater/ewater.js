// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 595
export const ewater = {
	name: 'ewater',
	// Symbol 82
	width: 1.647,
	height: 1.592,
	transforms: [
		// 4089
		{
			tx: 9.6,
			ty: -46.85
		},
		// 595
		{
			tx: -14.6,
			ty: -0.95
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 6,
		color: 0xccffff,
		quality: 0.5,
		strength: 1
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
		legs: parts.legs,
		r_b_arm: parts.right_bottom_arm,
		r_hand: parts.right_hand,
		r_t_arm: parts.right_top_arm,
		body: parts.body,
		l_t_arm: parts.left_top_arm,
		l_b_arm: parts.left_bottom_arm,
		head: parts.head,
		l_eye: parts.eye,
		r_eye: parts.eye,
		l_hand: parts.left_hand,
		puddle: parts.puddle
	},
	animations: {
		// walk, run, fly, release, ill, and cast same as stand
		// 584
		stand: stand,
		// 585
		hit: hit,
		jump: hit,
		jumpDown: hit,
		dodge: hit,
		fall: hit,
		// 586
		attack: attack,
		big: attack,
		counter: attack,
		// 587
		land: land,
		// 593
		dead: dead
	}
};
