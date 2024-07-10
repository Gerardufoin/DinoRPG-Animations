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

// Symbol 1071
export const brig3 = {
	name: 'brig3',
	// Symbol 82
	width: 0.909,
	height: 0.998,
	transforms: [
		// 4089
		{
			tx: -0.65,
			ty: -11.5
		},
		// 1071
		{
			tx: -3.4,
			ty: 17.75
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
		strength: 1
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
		// 1041
		r_hand: parts.right_hand,
		// 1044
		l_foot: parts.left_foot,
		// 1046
		l_b_arm: parts.segment,
		// 1046-1
		l_t_arm: parts.segment,
		// 1046-2
		r_b_arm: parts.segment,
		// 1046-3
		r_t_arm: parts.segment,
		// 1046-4
		l_t_leg: parts.segment,
		// 1046-5
		r_t_leg: parts.segment,
		// 1046-6
		r_b_leg: parts.segment,
		// 1046-7
		l_b_leg: parts.segment,
		// 1049
		r_foot: parts.right_foot,
		// 1052
		pants: parts.pants,
		// 1055
		body: parts.body,
		// 1060
		head: parts.head,
		// 1061
		l_hand: parts.left_hand,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// release, ill, cast, sleep same as stand
		// 1062
		stand: stand,
		// 1063
		walk: walk,
		dodge: walk,
		// 1064
		run: run,
		// 1065
		hit: hit,
		// 1066
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		// 1067
		attack: attack,
		big: attack,
		counter: attack,
		// 1068
		land: land,
		// 1069
		dead: dead
	}
};
