// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';

// Symbol 4051
export const saboss = {
	name: 'saboss',
	// Symbol 82
	width: 1.513,
	height: 2.662,
	transforms: [
		// 4089
		{
			tx: 0.8,
			ty: -57.8,
			a: 1.5,
			d: 1.5
		},
		// 4051
		{
			tx: 2.9,
			ty: 15,
			a: 0.943,
			d: 0.943
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.081,
			d: 0.978
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 4031
		tail: parts.segment,
		// 4033
		pump_1: parts.pump,
		// 4033-1
		pump_2: parts.pump,
		// 4033-2
		pump_3: parts.pump,
		// 4033-3
		pump_4: parts.pump,
		// 4033-4
		pump_5: parts.pump,
		// 4033-5
		pump_6: parts.pump,
		// 4035
		ball_1: parts.ball,
		// 4035-1
		ball_2: parts.ball,
		// 4035-2
		ball_3: parts.ball,
		// 4035-3
		ball_4: parts.ball,
		// 4035-4
		ball_5: parts.ball,
		// 4035-5
		ball_6: parts.ball,
		// 4036
		l_body: parts.segment,
		// 4037
		m_body: parts.segment,
		// 4039
		tooth: parts.tooth,
		// 4040
		u_body: parts.segment,
		// 4042
		head: parts.head
	},
	animations: {
		// ill, cast, release same as stand
		// 4043
		stand: stand,
		// 4044
		walk: walk,
		run: walk,
		// 4045
		hit: hit,
		// 4046
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 4047
		attack: attack,
		big: attack,
		counter: attack,
		// 4048
		land: land,
		// 4049
		dead: dead,
		sleep: dead
	}
};
