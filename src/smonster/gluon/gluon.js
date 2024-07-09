// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { jumpDown } from './animations/jumpDown.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 157
export const gluon = {
	name: 'gluon',
	// Symbol 82
	width: 0.721,
	height: 0.754,
	transforms: [
		// 4089
		{
			tx: 0.1,
			ty: -4.1
		},
		// Adjust
		{
			ty: -9.65
		}
	],
	glow: {
		distance: 1.3,
		color: 0x003300,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -2.4,
			a: 0.979,
			d: 0.809
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		puddle: parts.puddle,
		run_puddle: parts.puddle,
		l_arm: parts.arm,
		r_arm: parts.arm,
		body: parts.body,
		r_eye: parts.eye,
		l_eye: parts.eye,
		drip: parts.drip,
		run_drops_1: parts.run_drops_1,
		run_drops_2: parts.run_drops_2,
		run_drops_3: parts.run_drops_3,
		run_drops_4: parts.run_drops_4,
		run_drops_5: parts.run_drops_5,
		run_drops_6: parts.run_drops_6,
		hit_drops_1: parts.hit_drops_1,
		hit_drops_2: parts.hit_drops_2,
		hit_drops_3: parts.hit_drops_3,
		hit_drops_4: parts.hit_drops_4,
		hit_drops_5: parts.hit_drops_5,
		body_ball: parts.body_ball,
		body_ball_atk: parts.body_ball
	},
	animations: {
		// giard, release, ill, and cast same as stand
		// 132
		stand: stand,
		// 133
		walk: walk,
		// 140
		run: run,
		// 146
		hit: hit,
		// 150
		jump: jump,
		fly: jump,
		fall: jump,
		dodge: jump,
		// 151
		attack: attack,
		big: attack,
		counter: attack,
		// 152
		land: land,
		// 153
		dead: dead,
		// 154
		sleep: sleep,
		// 155
		jumpDown: jumpDown
	}
};
