// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';
import { guard } from './animations/guard.js';

// Symbol 3870
export const rhubar = {
	name: 'rhubar',
	// Symbol 82
	width: 2.192,
	height: 1.815,
	transforms: [
		// 4089
		{
			tx: -101,
			ty: -115.1
		},
		// 3870
		{
			tx: 103.8,
			ty: 136.05
		},
		// Adjust
		{
			ty: -7.65
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.85,
			a: 3.05,
			d: 1.994
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3792
		r_t_arm: parts.right_top_arm,
		// 3794
		r_b_arm: parts.right_bottom_arm,
		// 3796
		back: parts.back,
		// 3825pnj
		head: parts.head,
		// 3827
		l_body: parts.lower_body,
		// 3829
		m_body: parts.middle_body,
		// 3834
		u_body: parts.upper_body,
		// 3837
		l_b_arm: parts.left_bottom_arm,
		// 3839
		l_t_arm: parts.left_top_arm,
		// 3844
		hit_fx_1: parts.hit_fx_1,
		// 3845
		hit_fx_2: parts.hit_fx_2,
		// 3846
		hit_fx_3: parts.hit_fx_3,
		// 3847
		hit_fx_4: parts.hit_fx_4,
		// 3848
		hit_fx_5: parts.hit_fx_5,
		// 3858
		atk_smear: parts.attack_smear,
		// 3861pnj
		head_dead: parts.head_dead,
		// 3867
		shield: parts.shield
	},
	animations: {
		// release, ill, cast, sleep, fly same as stand
		// 3841
		stand: stand,
		// 3842
		walk: walk,
		// 3843
		run: run,
		// 3849
		hit: hit,
		// 3850
		jump: jump,
		jumpDown: jump,
		fall: jump,
		dodge: jump,
		// 3859
		attack: attack,
		big: attack,
		counter: attack,
		// 3860
		land: land,
		// 3862
		dead: dead,
		// 3868
		guard: guard
	}
};
