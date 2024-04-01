// @ts-check

import { ref as ref_sdino } from '../../sdino/references.js';
import { dead } from '../anguil/animations/dead.js';
import { jump } from '../anguil/animations/jump.js';
import { land } from '../anguil/animations/land.js';
import { run } from '../anguil/animations/run.js';
import { stand } from '../anguil/animations/stand.js';
import { walk } from '../anguil/animations/walk.js';
import { attack } from './animations/attack.js';
import { parts } from './parts.js';

// Symbol 818
export const cobra = {
	name: 'cobra',
	// Symbol 82
	width: 1.107,
	height: 1.411,
	transforms: [
		// 4089
		{
			tx: -5.8,
			ty: -15.8,
			a: 0.705,
			d: 0.705,
			or: 40,
			og: -21,
			ob: -82
		},
		// Adjust
		{
			ty: -17.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		b_tail: parts.b_tail,
		t_tail: parts.t_tail,
		t_body: parts.t_body,
		b_body: parts.b_body,
		head_dead: parts.head,
		head: parts.head,
		l_eye: parts.l_eye,
		l_eye_dead: parts.l_eye_dead,
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		],
		l_t_arm: [],
		r_t_arm: [],
		l_b_arm: [],
		r_b_arm: [],
		l_scythe: [],
		r_scythe: [],
		mouth: [],
		mouth_dead: []
	},
	animations: {
		// Most animations are the same as anguilloz but with less parts
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
		// 813
		attack: attack,
		big: attack,
		counter: attack,
		// 431
		land: land,
		// 433
		dead: dead
	}
};
