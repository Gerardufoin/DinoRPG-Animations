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

// Symbol 1348
export const yakuzi = {
	name: 'yakuzi',
	// Symbol 82
	width: 0.825,
	height: 1.273,
	transforms: [
		// 4089
		{
			tx: 1.35,
			ty: -12.6,
			brightness: -15,
			contrast: 11
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
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
		// 1316
		l_b_arm: parts.bottom_arm,
		// 1316-1
		r_b_arm: parts.bottom_arm,
		// 1318
		l_hand: parts.hand,
		// 1318-1
		r_hand: parts.hand,
		// 1320
		l_t_arm: parts.top_arm,
		// 1320-1
		r_t_arm: parts.top_arm,
		// 1322
		r_foot: parts.right_foot,
		// 1324
		l_b_leg: parts.bottom_leg,
		// 1324-1
		r_b_leg: parts.bottom_leg,
		// 1326
		l_t_leg: parts.top_leg,
		// 1326-1
		r_t_leg: parts.top_leg,
		// 1328
		l_foot: parts.left_foot,
		// 1330
		pants: parts.pants,
		// 1332
		body: parts.body,
		// 1334
		shoulders: parts.shoulders,
		// 1336
		head: parts.head,
		// 1338
		hair: parts.hair,
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
		// guard, release, ill, cast same as stand
		// 1339
		stand: stand,
		// 1340
		walk: walk,
		// 1341
		run: run,
		// 1342
		hit: hit,
		// 1343
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1344
		attack: attack,
		// 1345
		land: land,
		// 1346
		dead: dead,
		sleep: dead
	}
};
