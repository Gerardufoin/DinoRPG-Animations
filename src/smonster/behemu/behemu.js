// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 3187
export const behemu = {
	name: 'behemu',
	// Symbol 2750
	width: 5.101,
	height: 4.932,
	transforms: [
		// 4089
		{
			tx: -110,
			ty: -188.8,
			a: 0.863,
			d: 0.863,
			brightness: -10,
			contrast: 31
		}
	],
	glow: {
		distance: 5,
		color: 0x5a3f80,
		quality: 1,
		strength: 2
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 24.3,
			a: 6.684,
			d: 3.018
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3165
		l_f_b_leg: parts.front_bottom_leg,
		// 3165-1
		r_f_b_leg: parts.front_bottom_leg,
		// 3167
		tail: parts.tail,
		// 3171
		l_f_t_leg: parts.front_top_leg,
		// 3171-1
		r_f_t_leg: parts.front_top_leg,
		// 3173
		body: parts.body,
		// 3175
		l_b_leg: parts.back_leg,
		// 3175-1
		r_b_leg: parts.back_leg,
		// 3178
		head: parts.head,
		// 3178head
		head_hit: parts.head_hit
	},
	animations: {
		// release, fly, jump, land,  same as stand
		// 3179
		stand: stand,
		// 3180
		walk: walk,
		// 3181
		run: run,
		// 3182
		hit: hit,
		// 3183
		attack: attack,
		big: attack,
		counter: attack,
		// 3184
		dead: dead,
		// 3185
		sleep: sleep,
		ill: sleep
	}
};
