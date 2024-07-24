// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from '../doro/animations/dead.js';
import { fall } from '../doro/animations/fall.js';
import { jump } from '../doro/animations/jump.js';
import { run } from '../doro/animations/run.js';
import { land } from '../doro/animations/land.js';
import { sleep } from '../doro/animations/sleep.js';
import { stand } from '../doro/animations/stand.js';
import { walk } from '../doro/animations/walk.js';
import { parts } from './parts.js';

// Symbol 2155
export const dorou = {
	name: 'dorou',
	// Symbol 82
	width: 1.797,
	height: 2.154,
	transforms: [
		// 4089
		{
			tx: -34.4,
			ty: -73.05,
			a: 0.904,
			d: 0.904,
			brightness: -20,
			contrast: 31,
			saturation: -31
		},
		// 2155
		{
			tx: 1.9
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 3.8,
			a: 1.832,
			d: 1.658
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2121
		l_t_arm: parts.top_arm,
		// 2121-1
		r_t_arm: parts.top_arm,
		// 2123
		l_b_arm: parts.bottom_arm,
		// 2123-1
		r_b_arm: parts.bottom_arm,
		// 2125
		l_hand: parts.hand,
		// 2125-1
		r_hand: parts.hand,
		// 2127
		b_armor: parts.back_armor,
		// 2129
		l_foot: parts.foot,
		// 2129-1
		r_foot: parts.foot,
		// 2131
		l_leg: parts.leg,
		// 2131-1
		r_leg: parts.leg,
		// 2133
		tail: parts.tail,
		// 2135
		body: parts.body,
		// 2137
		f_armor: parts.front_armor,
		// 2139
		head: parts.head,
		// 2146
		atk_body_smear: parts.attack_body_smear,
		// 2085
		atk_smear_1: parts.attack_smear_1,
		// 2086
		atk_smear_2: parts.attack_smear_2,
		// 2087
		atk_smear_3: parts.attack_smear_3,
		// 2088
		atk_smear_4: parts.attack_smear_4,
		// 2089
		atk_smear_5: parts.attack_smear_5,
		// 2151
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, ill same as stand
		// 2140
		stand: stand,
		// 2141
		walk: walk,
		// 2142
		run: run,
		// 2143
		hit: hit,
		// 2144
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 2145
		fall: fall,
		// 2148
		attack: attack,
		big: attack,
		// 2149
		land: land,
		// 2152
		dead: dead,
		// 2153
		sleep: sleep
	}
};
