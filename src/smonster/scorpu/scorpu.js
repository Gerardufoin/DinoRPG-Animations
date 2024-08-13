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
import { sleep } from './animations/sleep.js';
import { parts } from './parts.js';
import { release } from './animations/release.js';

// Symbol 4009
export const scorpu = {
	name: 'scorpu',
	// Symbol 82
	width: 2.941,
	height: 3.246,
	transforms: [
		// 4089
		{
			tx: 2.6,
			ty: -49.25
		},
		// 4009
		{
			tx: 0.4,
			ty: 21.15,
			a: 2.581,
			d: 2.581
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 2.775,
			d: 2.511
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3978_p6b
		r_hand: parts.right_hand,
		// 3980
		l_arm: parts.segment_1,
		// 3980-1
		r_leg: parts.segment_1,
		// 3980-2
		r_arm: parts.segment_1,
		// 3982_p3b
		r_foot: parts.right_foot,
		// 3988_p7
		body: parts.body,
		// 3990_p5
		head: parts.head,
		// 3991
		l_leg: parts.segment_2,
		// 3993_p3a
		l_foot: parts.left_foot,
		// 3995_p6a
		l_hand: parts.left_hand,
		// 3997
		l_shoulder: parts.shoulder,
		// 3997-1
		r_shoulder: parts.shoulder
	},
	animations: {
		// ill, cast same as stand
		// 3998
		stand: stand,
		// 3999
		walk: walk,
		// 4000
		run: run,
		// 4001
		hit: hit,
		// 4002
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 4003
		attack: attack,
		big: attack,
		counter: attack,
		// 4004
		land: land,
		// 4005
		dead: dead,
		// 4006
		sleep: sleep,
		// 4007
		release: release
	}
};
