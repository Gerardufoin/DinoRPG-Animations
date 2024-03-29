// @ts-check

import { fx_dust } from '../../sdino/fx/dust.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 679
export const eearth = {
	name: 'eearth',
	// Symbol 82
	width: 1.647,
	height: 1.592,
	transforms: [
		// 4089
		{
			tx: 9.6,
			ty: -46.85
		},
		// 679
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
		r_b_arm: parts.r_b_arm,
		r_hand: parts.r_hand,
		r_t_arm: parts.r_t_arm,
		body: parts.body,
		legs: parts.legs,
		l_t_arm: parts.l_t_arm,
		l_b_arm: parts.l_b_arm,
		l_hand: parts.l_hand,
		head: parts.head,
		head_dead: parts.head_dead,
		l_eye: parts.eye,
		r_eye: parts.eye,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_dust_4: fx_dust,
		fx_dust_5: fx_dust,
		fx_dust_6: fx_dust
	},
	animations: {
		// walk, run, fly, sleep, release, ill, and cast same as stand
		// 672
		stand: stand,
		// 673
		hit: hit,
		jump: hit,
		jumpDown: hit,
		fall: hit,
		dodge: hit,
		// 674
		attack: attack,
		big: attack,
		counter: attack,
		// 675
		land: land,
		// 677
		dead: dead
	}
};
