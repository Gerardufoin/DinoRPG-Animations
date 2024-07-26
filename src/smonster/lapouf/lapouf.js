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
import { parts } from './parts.js';

// Symbol 2233
export const lapouf = {
	name: 'lapouf',
	// Symbol 82
	width: 1.204,
	height: 1.178,
	transforms: [
		// 4089
		{
			tx: -19.1,
			ty: -45.5,
			contrast: 10,
			saturation: 13,
			hue: -2
		},
		// Adjust
		{
			ty: -10
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2205
		l_arm: parts.arm,
		// 2205-1
		r_arm: parts.arm,
		// 2207
		tail: parts.tail,
		// 2209
		body: parts.body,
		// 2211
		navel: parts.navel,
		// 2213
		head: parts.head,
		// 2215
		l_ear: parts.left_ear,
		// 2215-1
		r_ear_alt: parts.left_ear,
		// 2217
		r_ear: parts.right_ear,
		// 2217-1
		l_ear_alt: parts.right_ear,
		// 2219
		l_foot: parts.foot,
		// 2219-1
		r_foot: parts.foot,
		// 2224
		atk_body_smear: parts.attack_body_smear,
		// 2046
		atk_smear_1: parts.attack_smear_1,
		// 2047
		atk_smear_2: parts.attack_smear_2,
		// 2048
		atk_smear_3: parts.attack_smear_3,
		// 2049
		atk_smear_4: parts.attack_smear_4,
		// 2050
		atk_smear_5: parts.attack_smear_5,
		// 2229
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, ill, walk same as stand
		// 2220
		stand: stand,
		// 2221
		run: run,
		// 2222
		hit: hit,
		// 2223
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 2226
		attack: attack,
		big: attack,
		// 2227
		land: land,
		// 2230
		dead: dead,
		// 2231
		sleep: sleep
	}
};
