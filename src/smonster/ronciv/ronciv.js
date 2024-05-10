// @ts-check

import { ref as ref_sdino } from '../../sdino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 498
export const ronciv = {
	name: 'ronciv',
	// Symbol 82
	width: 0.951,
	height: 1.417,
	transforms: [
		// 4089
		{
			tx: -4.6,
			ty: -3.45
		},
		// 498
		{
			ty: -4.5
		},
		// Adjust
		{
			ty: -7.7
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
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		body_1: parts.body_top,
		body_2: parts.body_middle,
		body_4: parts.body_bottom,
		body_3: parts.body_bottom,
		l_t_sp: parts.spike,
		l_m_sp: parts.spike,
		r_t_sp: parts.spike,
		r_m_sp: parts.spike,
		l_b_sp: parts.spike,
		tail: parts.tail,
		head: parts.head,
		mouth: parts.mouth,
		eyes: parts.eyes,
		hair: parts.hair
	},
	animations: {
		// release, ill, cast, and sleep same as stand
		// 490
		stand: stand,
		fly: { offset: 4, anim: stand },
		// 491/492
		walk: walk,
		run: walk,
		jump: walk,
		jumpDown: walk,
		dodge: walk,
		fall: walk,
		// 493
		hit: hit,
		// 494
		attack: attack,
		big: attack,
		counter: attack,
		// 495
		land: land,
		// 496
		dead: dead
	}
};
