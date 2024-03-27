// @ts-check

import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 435
export const anguil = {
	name: 'anguil',
	// Symbol 82
	width: 1.5,
	height: 1.633,
	transforms: [
		// 4089
		{
			tx: -3.8,
			ty: -22.05,
			a: 0.83,
			d: 0.83
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 2.8,
			a: 1.754,
			d: 1.588
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		l_t_arm: parts.l_t_arm,
		r_t_arm: parts.r_t_arm,
		l_b_arm: parts.l_b_arm,
		r_b_arm: parts.r_b_arm,
		l_scythe: parts.l_scythe,
		r_scythe: parts.r_scythe,
		b_tail: parts.b_tail,
		t_tail: parts.t_tail,
		t_body: parts.t_body,
		b_body: parts.b_body,
		mouth: parts.mouth,
		head_dead: parts.head_dead,
		head: parts.head,
		l_eye: parts.l_eye,
		l_eye_dead: parts.l_eye_dead,
		mouth_dead: parts.mouth_dead,
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		]
	},
	animations: {
		// release, ill, cast, hit, and sleep same as stand
		// 425
		stand: stand,
		// 426
		walk: walk,
		// 427
		run: run,
		// 429
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 430
		attack: attack,
		big: attack,
		counter: attack,
		// 431
		land: land,
		// 433
		dead: dead
	}
};
