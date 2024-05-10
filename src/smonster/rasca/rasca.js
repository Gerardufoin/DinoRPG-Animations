// @ts-check

import { ref as ref_sdino } from '../../sdino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 704
export const rasca = {
	name: 'rasca',
	// Symbol 82
	width: 2.61,
	height: 1.459,
	transforms: [
		// 4089
		{
			tx: 0.9,
			ty: -3.7
		},
		// 704
		{
			tx: -6.65,
			ty: -2.9
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
		r_eye: parts.right_eye,
		mouth_b: parts.mouth_back,
		body: parts.body,
		head: parts.head,
		mouth_f: parts.mouth_front,
		l_eye: parts.left_eye,
		fin: parts.fin,
		l_foot: parts.foot,
		r_foot: parts.foot
	},
	animations: {
		// release, ill, sleep, and cast same as stand
		// 696
		stand: stand,
		// 697
		walk: walk,
		// 698
		run: run,
		jump: run,
		jumpDown: run,
		dodge: run,
		fall: run,
		fly: run,
		// 699
		hit: hit,
		// 700
		attack: attack,
		big: attack,
		counter: attack,
		// 701
		land: land,
		// 702
		dead: dead
	}
};
