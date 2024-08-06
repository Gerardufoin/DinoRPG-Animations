// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 2808
export const garouz = {
	name: 'garouz',
	// Symbol 2750
	width: 1.763,
	height: 2.08,
	transforms: [
		// 4089
		{
			tx: -26.6,
			ty: -55.25,
			contrast: 31
		},
		// Adjust
		{
			ty: -19
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -0.8,
			a: 2.024,
			d: 0.914
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2776
		body: parts.body,
		// 2778
		r_leg: parts.right_leg,
		// 2780
		r_foot: parts.right_foot,
		// 2782
		l_leg: parts.left_leg,
		// 2784
		l_foot: parts.left_foot,
		// 2786
		r_arm: parts.right_arm,
		// 2788
		l_arm: parts.left_arm,
		// 2790
		mouth: parts.mouth,
		// 2792
		face: parts.face,
		// 2794
		jaw: parts.jaw,
		// 2800
		atk_body_smear: parts.attack_body_smear,
		// 2804
		face_sleep: parts.face_sleep
	},
	animations: {
		// guard, release, ill same as stand
		// 2795
		stand: stand,
		// 2796
		walk: walk,
		// 2797
		run: run,
		// 2798
		hit: hit,
		// 2799
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		fall: jump,
		// 2801
		attack: attack,
		big: attack,
		// 2802
		land: land,
		// 2805
		dead: dead,
		// 2806
		sleep: sleep
	}
};
