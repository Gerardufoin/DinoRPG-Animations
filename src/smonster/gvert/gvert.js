// @ts-check

import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 180
export const gvert = {
	name: 'gvert',
	// Symbol 82
	width: 1.649,
	height: 1.407,
	transforms: [
		// 4089
		{
			tx: 1.2,
			ty: -7.5
		},
		// 180
		{
			tx: -1.5,
			ty: -1.4,
			a: 0.905,
			d: 0.905
		},
		// Adjust
		{
			ty: -7.15
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
			a: 2.182,
			d: 1.974
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
		upper_body: parts.body,
		lower_body: parts.body,
		head: parts.head,
		r_b_upper_leg: parts.leg_2,
		l_b_upper_leg: parts.leg_2,
		sleep_bubble: parts.sleep_bubble,
		attack_1: parts.attack_1,
		attack_2: parts.attack_2,
		attack_3: parts.attack_3,
		attack_4: parts.attack_4
	},
	animations: {
		// guard, release, ill, and cast same as stand
		// 168
		stand: stand,
		// 169
		walk: walk,
		// 170
		run: run,
		// 171
		hit: hit,
		// 172
		jump: jump,
		dodge: jump,
		jumpDown: jump,
		fall: jump,
		// 173
		attack: attack,
		big: attack,
		counter: attack,
		// 174
		land: land,
		// 175
		dead: dead,
		// 176
		sleep: sleep,
		// 178
		fly: fly
	}
};
