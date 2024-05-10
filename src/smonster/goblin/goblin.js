// @ts-check

import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../sdino/references_small.js';
import { ref } from '../references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 289
export const goblin = {
	name: 'goblin',
	// Symbol 82
	width: 0.887,
	height: 0.833,
	transforms: [
		// 4089
		{
			tx: -3.35,
			ty: 5.95
		},
		// Adjust
		{
			ty: -6.55
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
			tx: -2.4,
			a: 1.19,
			d: 1.077
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		l_fist: parts.fist,
		r_fist: parts.fist,
		l_foot: parts.l_foot,
		l_b_arm: parts.segment,
		l_t_arm: parts.segment,
		r_t_arm: parts.segment,
		r_b_arm: parts.segment,
		l_t_leg: parts.segment,
		r_t_leg: parts.segment,
		r_b_leg: parts.segment,
		l_b_leg: parts.segment,
		r_foot: parts.r_foot,
		pants: parts.pants,
		body: parts.body,
		r_ear: parts.ear,
		l_ear: parts.ear,
		head: parts.head,
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		],
		// 77
		sleep_bubble: [
			{
				ref: ref.shared.sleep_bubble
			}
		],
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// release, ill, and cast same as stand
		// 279
		stand: stand,
		// 280
		walk: walk,
		dodge: walk,
		// 281
		run: run,
		// 282
		hit: hit,
		// 283
		jump: jump,
		jumpDown: jump,
		fly: jump,
		fall: jump,
		// 284
		attack: attack,
		counter: attack,
		big: attack,
		// 285
		land: land,
		// 286
		dead: dead,
		// 287
		sleep: sleep
	}
};
