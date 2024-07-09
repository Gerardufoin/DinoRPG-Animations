// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { parts } from './parts.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { dodge } from './animations/dodge.js';

// Symbol 116
export const wolf = {
	name: 'wolf',
	// Symbol 82
	width: 0.84,
	height: 0.713,
	transforms: [
		// 4089
		{
			tx: 1.2,
			ty: -1.2
		},
		// 116
		{
			tx: -1.5,
			ty: -1.4,
			a: 0.905,
			d: 0.905
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
		l_f_paw: parts.paw,
		l_b_paw: parts.paw,
		r_b_paw: parts.paw,
		r_f_paw: parts.paw,
		l_f_upper_leg: parts.leg_1,
		l_f_lower_leg: parts.leg_1,
		l_b_lower_leg: parts.leg_1,
		r_b_lower_leg: parts.leg_1,
		r_f_upper_leg: parts.leg_1,
		r_f_lower_leg: parts.leg_1,
		tail: parts.tail,
		l_b_upper_leg: parts.leg_2,
		r_b_upper_leg: parts.leg_2,
		upper_body: parts.body,
		lower_body: parts.body,
		head: parts.head,
		head_dead: parts.head_dead,
		attack_1: parts.attack_1,
		attack_2: parts.attack_2,
		attack_3: parts.attack_3,
		attack_4: parts.attack_4,
		sleep_bubble: parts.sleep_bubble,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
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
		// guard, release, ill, and cast same as stand
		// 95
		stand: stand,
		// 96
		walk: walk,
		// 97
		run: run,
		// 98
		hit: hit,
		// 99
		jump: jump,
		jumpDown: jump,
		fly: jump,
		fall: jump,
		// 108
		attack: attack,
		counter: attack,
		big: attack,
		// 109
		land: land,
		// 112
		dead: dead,
		// 113
		sleep: sleep,
		// 114
		dodge: dodge
	}
};
