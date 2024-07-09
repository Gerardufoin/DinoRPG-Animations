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

// Symbol 977
export const scorp = {
	name: 'scorp',
	// Symbol 82
	width: 1.049,
	height: 0.863,
	transforms: [
		// 4089
		{
			tx: -4.6,
			ty: -3.45
		},
		// 977
		{
			ty: -4.5
		},
		// Adjust
		{
			ty: -7.7
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
		// 956
		tail_4: parts.tail,
		// 956-1
		tail_3: parts.tail,
		// 956-2
		tail_1: parts.tail,
		// 956-3
		tail_2: parts.tail,
		// 958
		r_f_leg: parts.right_leg,
		// 958-1
		r_b_leg: parts.right_leg,
		// 960
		body: parts.body,
		// 963
		head: parts.head,
		// 965
		l_f_leg: parts.left_leg,
		// 965-1
		l_b_leg: parts.left_leg,
		// 967
		stinger: parts.stinger
	},
	animations: {
		// release, ill, cast, sleep, same as stand
		// 968
		stand: stand,
		// 969
		walk: walk,
		// 970
		run: run,
		// 971
		hit: hit,
		// 972
		jump: jump,
		jumpDown: jump,
		fall: jump,
		dodge: jump,
		fly: jump,
		// 973
		attack: attack,
		big: attack,
		counter: attack,
		// 974
		land: land,
		// 975
		dead: dead
	}
};
