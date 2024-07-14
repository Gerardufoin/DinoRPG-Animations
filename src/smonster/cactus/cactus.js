// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1314
export const cactus = {
	name: 'cactus',
	// Symbol 82
	width: 1.508,
	height: 1.273,
	transforms: [
		// 4089
		{
			tx: -7.5,
			ty: -14.6,
			a: 1.305,
			d: 1.305
		},
		// Adjust
		{
			ty: -5
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
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
		// 1276
		tail_4: parts.tail,
		// 1276-1
		tail_3: parts.tail,
		// 1276-2
		tail_1: parts.tail,
		// 1276-3
		tail_2: parts.tail,
		// 1278
		r_legs: parts.right_legs,
		// 1280
		r_pincer: parts.right_pincer,
		// 1282
		body: parts.body,
		// 1294
		head: parts.head,
		// 1296
		l_legs: parts.left_legs,
		// 1298
		l_pincer: parts.left_pincer,
		// 1300
		ball: parts.ball,
		// 1311
		head_dead: parts.head_dead
	},
	animations: {
		// release, ill, cast, sleep same as stand
		// 1301
		stand: stand,
		// 1302
		walk: walk,
		// 1303
		run: run,
		// 1304
		hit: hit,
		// 1305
		jump: jump,
		jumpDown: jump,
		fall: jump,
		dodge: jump,
		fly: jump,
		// 1306
		attack: attack,
		big: attack,
		counter: attack,
		// 1307
		land: land,
		// 1312
		dead: dead
	}
};
