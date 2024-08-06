// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 2840
export const amanpe = {
	name: 'amanpe',
	// Symbol 2750
	width: 0.707,
	height: 1.406,
	transforms: [
		// 4089
		{
			tx: -12.85,
			ty: -60.75,
			a: 0.641,
			d: 0.617
		},
		// 2840
		{
			ty: -5.8
		},
		// Adjust
		{
			ty: -13
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -0.05,
			a: 1.044,
			d: 0.471
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2810
		l_leg: parts.leg,
		// 2810-1
		r_leg: parts.leg,
		// 2812
		l_hand: parts.hand,
		// 2812-1
		r_hand: parts.hand,
		// 2814
		l_arm: parts.arm,
		// 2814-1
		r_arm: parts.arm,
		// 2816
		body: parts.body,
		// 2824
		head: parts.head,
		// 2828
		atk_smear: parts.attack_smear,
		// 2830
		head_dead_1: parts.head_dead_1,
		// 2831
		head_dead_2: parts.head_dead_2,
		// 2832
		head_dead_3: parts.head_dead_3,
		// 2833
		head_dead_4: parts.head_dead_4,
		// 2834
		head_dead_5: parts.head_dead_5,
		// 2835
		head_dead_6: parts.head_dead_6,
		// 2836
		head_dead_7: parts.head_dead_7
	},
	animations: {
		// guard, release, ill, walk, dodge, jumpDown, fly, jump, fall, land same as stand
		// 2825
		stand: stand,
		// 2826
		run: run,
		// 2827
		hit: hit,
		// 2829
		attack: attack,
		big: attack,
		// 2837
		dead: dead,
		// 2838
		sleep: sleep
	}
};
