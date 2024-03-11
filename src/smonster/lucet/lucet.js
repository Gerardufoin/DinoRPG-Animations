// @ts-check
import { ref as ref_sdino } from '../../sdino/references.js';
import { parts } from './parts.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { attack } from './animations/attack.js';
import { cast } from './animations/cast.js';
import { fall } from './animations/fall.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';

// Symbol 2203
export const lucet = {
	name: 'lucet',
	// Symbol 82
	width: 2.417,
	height: 3.666,
	transforms: [
		// 4089
		{
			tx: 81.6,
			ty: -150.4,
			a: -1,
			d: 1,
			brightness: -20,
			contrast: 24,
			saturation: 16,
			hue: -11
		},
		// Adjust
		{
			ty: 5.6
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.45,
			a: 3.562,
			d: 2.756
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		r_claws: parts.claws,
		l_claws: parts.claws,
		r_forearm: parts.forearm,
		l_forearm: parts.forearm,
		r_arm: parts.arm,
		l_arm: parts.arm,
		r_wing: parts.wing,
		l_wing: parts.wing,
		tail_end: parts.tail_end,
		tail: parts.tail,
		lower_body: parts.lower_body,
		body: parts.body,
		l_ear: parts.l_ear,
		head: parts.head,
		r_ear: parts.r_ear,
		r_light: parts.light,
		l_light: parts.light,
		attack: parts.attack,
		slash_1: parts.slash,
		slash_2: parts.slash,
		slash_3: parts.slash,
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, dead, and ill same as stand
		// 2181
		stand: stand,
		// 2182
		walk: walk,
		// 2183
		run: run,
		// 2184
		hit: hit,
		// 2187
		jump: jump,
		jumpDown: jump,
		dodge: jump,
		fly: jump,
		// 2188
		fall: fall,
		// 2196
		attack: attack,
		big: attack,
		counter: attack,
		// 2197
		land: land,
		// 2200
		sleep: sleep,
		// 2201
		cast: cast,
		shoot: cast
	}
};
