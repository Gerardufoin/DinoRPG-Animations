// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { release } from './animations/release.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { fly } from './animations/fly.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 3000
export const bao = {
	name: 'bao',
	// Symbol 82
	width: 2.406,
	height: 3.359,
	transforms: [
		// 4089
		{
			tx: -42.95,
			ty: -45.65
		},
		// 3000
		{
			tx: 61.2,
			a: 4.081,
			d: 4.081
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.95,
			a: 3.498,
			d: 1.897
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2952_p6a
		r_ear: parts.ear,
		// 2952_p6b
		l_ear: parts.ear,
		// 2954
		butt: parts.butt,
		// 2956_p4b
		l_f_leg: parts.leg,
		// 2956_p4c
		l_b_leg: parts.leg,
		// 2956_p4d
		r_f_leg: parts.leg,
		// 2961_p7
		body: parts.body,
		// 2963
		chair: parts.chair,
		// 2965
		bao: parts.bao,
		// 2967
		r_leash: parts.right_leash,
		// 2969_p8
		head: parts.head,
		// 2971_p5
		horn: parts.horn,
		// 2973_p4
		l_nostril: parts.nostril,
		// 2979_p3
		l_eye: parts.eye,
		// 2981
		l_leash: parts.left_leash,
		// 2986
		bao_hit: parts.bao_hit,
		// 2993
		bao_r_arm_release_1: parts.bao_right_arm_release_1,
		// 2995
		bao_body_release: parts.bao_body_release,
		// 2997
		bao_r_arm_release_2: parts.bao_right_arm_release_2
	},
	animations: {
		// dead, sleep, ill same as stand
		// 2982
		stand: stand,
		// 2983
		walk: walk,
		// 2984
		run: run,
		// 2987
		hit: hit,
		// 2988
		jump: jump,
		// 2989
		attack: attack,
		big: attack,
		// 2990
		land: land,
		// 2991
		fly: fly,
		// 2998
		release: release
	}
};
