// @ts-check

import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 644
export const efire = {
	name: 'efire',
	// Symbol 82
	width: 1.647,
	height: 1.592,
	light: true,
	transforms: [
		// 4089
		{
			tx: -25.35,
			ty: -33.8
		},
		// 644
		{
			tx: 21.4,
			ty: -14
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 6,
		color: 0xff9900,
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
		r_b_arm: parts.right_bottom_arm,
		r_hand: parts.right_hand,
		r_t_arm: parts.right_top_arm,
		body: parts.body,
		legs: parts.legs,
		l_t_arm: parts.left_top_arm,
		l_b_arm: parts.left_bottom_arm,
		l_hand: parts.left_hand,
		l_eye: parts.eye,
		r_eye: parts.eye,
		head: parts.head,
		fx_burst_1: parts.fx_burst_1,
		fx_burst_1a: parts.fx_burst_1,
		fx_burst_2: parts.fx_burst_2,
		fx_burst_2a: parts.fx_burst_2,
		fx_burst_3: parts.fx_burst_3,
		fx_burst_3a: parts.fx_burst_3,
		fx_burst_4: parts.fx_burst_4,
		fx_burst_4a: parts.fx_burst_4,
		fx_burst_5: parts.fx_burst_5,
		fx_burst_5a: parts.fx_burst_5,
		fx_burst_6: parts.fx_burst_6,
		fx_burst_6a: parts.fx_burst_6,
		fx_burst_7: parts.fx_burst_7,
		fx_burst_7a: parts.fx_burst_7,
		fx_burst_8: parts.fx_burst_8,
		fx_burst_8a: parts.fx_burst_8,
		fx_burst_9: parts.fx_burst_9,
		fx_burst_9a: parts.fx_burst_9,
		fx_burst_10: parts.fx_burst_10,
		fx_burst_10a: parts.fx_burst_10,
		fx_burst_11: parts.fx_burst_11,
		fx_burst_11a: parts.fx_burst_11,
		fx_burst_12: parts.fx_burst_12,
		fx_burst_12a: parts.fx_burst_12,
		fx_burst_13: parts.fx_burst_13,
		fx_burst_13a: parts.fx_burst_13,
		fx_burst_14: parts.fx_burst_14,
		fx_burst_14a: parts.fx_burst_14,
		fx_burst_15: parts.fx_burst_15,
		fx_burst_15a: parts.fx_burst_15,
		fx_burst_16: parts.fx_burst_16,
		fx_burst_16a: parts.fx_burst_16,
		fx_burst_17: parts.fx_burst_17,
		fx_burst_17a: parts.fx_burst_17,
		fx_burst_18: parts.fx_burst_18,
		fx_burst_18a: parts.fx_burst_18
	},
	animations: {
		// walk, run, sleep, fly, release, ill, and cast same as stand
		// 638
		stand: stand,
		// 639
		hit: hit,
		jump: hit,
		jumpDown: hit,
		dodge: hit,
		fall: hit,
		// 640
		attack: attack,
		big: attack,
		counter: attack,
		// 641
		land: land,
		// 642
		dead: dead
	}
};
