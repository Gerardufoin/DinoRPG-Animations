// @ts-check

import { fx_dust } from '../../sdino/fx/dust.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 498

// Symbol 546
export const bat = {
	name: 'bat',
	// Symbol 82
	width: 0.697,
	height: 0.589,
	transforms: [
		// 4089
		{
			tx: 1.25,
			ty: -24.05
		},
		// 546
		{
			tx: -1
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
		l_b_wing: parts.left_bottom_wing,
		r_b_wing: parts.right_bottom_wing,
		l_t_wing: parts.left_top_wing,
		r_t_wing: parts.right_top_wing,
		l_leg: parts.leg,
		r_leg: parts.leg,
		body: parts.body,
		head: parts.head,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// walk, run, release, ill, cast, jump, land, sleep, dodge, jump, fall, and jumpDown same as stand
		// 540
		stand: stand,
		// 541
		hit: hit,
		// 542
		attack: attack,
		big: attack,
		counter: attack,
		// 543
		dead: dead,
		// 544 (same as 540 without callback)
		fly: fly
	}
};
