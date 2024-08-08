// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 3163
export const groule = {
	name: 'groule',
	// Symbol 2750
	width: 1.078,
	height: 1.753,
	transforms: [
		// 4089
		{
			tx: -30.65,
			ty: -52.8
		},
		// adjust
		{
			tx: -5,
			ty: -9.95
		}
	],
	glow: {
		distance: 3,
		color: 0xffff00,
		quality: 1,
		strength: 1
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -0.05,
			a: 1.703,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3099
		orb: parts.orb,
		// 3108
		aura: parts.aura,
		// 3113
		stone_1: parts.stone_1,
		// 3113
		stone_dead_1: parts.stone_dead_1,
		// 3113
		stone_dead_nr_1: parts.stone_dead_nr_1,
		// 3118
		stone_2: parts.stone_2,
		// 3118
		stone_dead_2: parts.stone_dead_nr_2,
		// 3118
		stone_dead_nr_2: parts.stone_dead_nr_2,
		// 3124
		stone_3_1: parts.stone_3,
		// 3124
		stone_dead_3_1: parts.stone_dead_3,
		// 3124
		stone_dead_nr_3_1: parts.stone_dead_nr_3,
		// 3124-1
		stone_3_2: parts.stone_3,
		// 3124-1
		stone_dead_3_2: parts.stone_dead_3,
		// 3124-1
		stone_dead_nr_3_2: parts.stone_dead_nr_3,
		// 3129
		stone_4: parts.stone_4,
		// 3129
		stone_dead_4: parts.stone_dead_4,
		// 3129
		stone_dead_nr_4: parts.stone_dead_nr_4,
		// 3134
		stone_5: parts.stone_5,
		// 3134
		stone_dead_5: parts.stone_dead_5,
		// 3134
		stone_dead_nr_5: parts.stone_dead_nr_5,
		// 3139
		stone_6: parts.stone_6,
		// 3139
		stone_dead_6: parts.stone_dead_6,
		// 3139
		stone_dead_nr_6: parts.stone_dead_nr_6,
		// 3144
		stone_7: parts.stone_7,
		// 3144
		stone_dead_7: parts.stone_dead_7,
		// 3144
		stone_dead_nr_7: parts.stone_dead_nr_7,
		// 3151
		head: parts.head,
		// 3151
		head_dead: parts.head_dead,
		// 3151
		head_dead_nr: parts.head_dead_nr,
		// 3159
		atk_1: parts.attack,
		// 3159-1
		atk_2: parts.attack,
		// 3159-2
		atk_3: parts.attack,
		// 3159-3
		atk_4: parts.attack,
		// 3159-4
		atk_5: parts.attack,
		// 3159-5
		atk_6: parts.attack,
		// 3159-6
		atk_7: parts.attack
	},
	animations: {
		// release, walk, run, fly, jump, land, ill, sleep same as stand
		// 3152
		stand: stand,
		// 3153
		hit: hit,
		// 3160
		attack: attack,
		big: attack,
		counter: attack,
		// 3161
		dead: dead
	}
};
