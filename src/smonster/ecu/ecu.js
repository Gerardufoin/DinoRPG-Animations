// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { land } from './animations/land.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 2265
export const ecu = {
	name: 'ecu',
	// Symbol 82
	width: 0.87,
	height: 0.68,
	transforms: [
		// 4089
		{
			tx: -15.85,
			ty: -17.5,
			a: 0.677,
			d: 0.677,
			brightness: 5,
			contrast: -3,
			saturation: -3,
			hue: -17
		},
		// Adjust
		{
			ty: -17
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 14.55,
			a: 2.312,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2235
		l_leg: parts.leg,
		// 2235-1
		r_leg: parts.leg,
		// 2237
		tail_end: parts.tail_end,
		// 2239
		tail: parts.tail,
		// 2241
		body: parts.body,
		// 2243
		l_horn: parts.horn,
		// 2243-1
		r_horn: parts.horn,
		// 2245
		teeth: parts.teeth,
		// 2247
		head: parts.head,
		// 2253
		atk_body_smear: parts.attack_body_smear,
		// 2254
		atk_smear_1: parts.attack_smear_1,
		// 2255
		atk_smear_2: parts.attack_smear_2,
		// 2256
		atk_smear_3: parts.attack_smear_3,
		// 2257
		atk_smear_4: parts.attack_smear_4,
		// 2261
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, ill same as stand
		// 2248
		stand: stand,
		// 2249
		walk: walk,
		// 2250
		run: run,
		// 2251
		hit: hit,
		// 2252
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 2258
		attack: attack,
		big: attack,
		// 2259
		land: land,
		// 2262
		dead: dead,
		// 2263
		sleep: sleep
	}
};
