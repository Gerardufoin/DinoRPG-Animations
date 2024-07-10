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
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 1004
export const brig1 = {
	name: 'brig1',
	// Symbol 82
	width: 0.909,
	height: 0.998,
	transforms: [
		// 4089
		{
			tx: -3.35,
			ty: 5.95
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
		// 978
		r_hand: parts.right_hand,
		// 981
		l_foot: parts.left_foot,
		// 982
		l_b_arm: parts.segment,
		// 982-1
		l_t_arm: parts.segment,
		// 982-2
		r_b_arm: parts.segment,
		// 982-3
		r_t_arm: parts.segment,
		// 982-4
		l_t_leg: parts.segment,
		// 982-5
		r_t_leg: parts.segment,
		// 982-6
		r_b_leg: parts.segment,
		// 982-7
		l_b_leg: parts.segment,
		// 983
		r_foot: parts.right_foot,
		// 986
		pants: parts.pants,
		// 987
		body: parts.body,
		// 992
		head: parts.head,
		// 994
		l_hand: parts.left_hand,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// release, ill, cast, sleep same as stand
		// 995
		stand: stand,
		// 996
		walk: walk,
		dodge: walk,
		// 997
		run: run,
		// 998
		hit: hit,
		// 999
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		// 1000
		attack: attack,
		big: attack,
		counter: attack,
		// 1001
		land: land,
		// 1002
		dead: dead
	}
};
