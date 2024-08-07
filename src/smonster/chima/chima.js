// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
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

// Symbol 3092
export const chima = {
	name: 'chima',
	// Symbol 2750
	width: 1.879,
	height: 2.2,
	transforms: [
		// 4089
		{
			tx: -31.8,
			ty: -72,
			a: 0.796,
			d: 0.796,
			contrast: 30,
			saturation: 30
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 3.5,
			a: 1.703,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3052
		l_b_arm: parts.bottom_arm,
		// 3052-1
		r_b_arm: parts.bottom_arm,
		// 3054
		l_t_arm: parts.top_arm,
		// 3054-1
		r_t_arm: parts.top_arm,
		// 3056
		l_foot: parts.foot,
		// 3056-1
		r_foot: parts.foot,
		// 3058
		body: parts.body,
		// 3069
		head: parts.head,
		// 3069
		head_hit: parts.head_hit,
		// 3069
		head_sleep: parts.head_sleep,
		// 3071
		mouth: parts.mouth,
		// 3079
		tongue: parts.tongue,
		// 3079
		tongue_fast: parts.tongue_fast,
		// 3085
		atk_smear_1: parts.attack_smear,
		// 3086
		atk_smear_2: parts.attack_smear
	},
	animations: {
		// release same as stand
		// 3080
		stand: stand,
		// 3081
		walk: walk,
		// 3082
		run: run,
		// 3083
		hit: hit,
		// 3084
		jump: jump,
		fly: jump,
		// 3087
		attack: attack,
		big: attack,
		counter: attack,
		// 3088
		land: land,
		// 3089
		dead: dead,
		// 3090
		sleep: sleep,
		ill: sleep
	}
};
