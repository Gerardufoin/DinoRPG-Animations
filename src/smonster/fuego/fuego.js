// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from '../brig1/animations/hit.js';
import { dead } from '../brig1/animations/dead.js';
import { jump } from '../brig1/animations/jump.js';
import { land } from '../brig1/animations/land.js';
import { run } from '../brig1/animations/run.js';
import { stand } from '../brig1/animations/stand.js';
import { walk } from '../brig1/animations/walk.js';
import { attack } from '../brig2/animations/attack.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 2618
export const fuego = {
	name: 'fuego',
	// Symbol 82
	width: 0.87,
	height: 1.169,
	transforms: [
		// 4089
		{
			tx: -2.95,
			ty: 12.4
		},
		// Adjust
		{
			ty: -12.25
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
			tx: -0.1,
			a: 1.051,
			d: 1.123
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2586
		r_hand: parts.right_hand,
		// 2589
		l_foot: parts.left_foot,
		// 2592
		l_b_arm: parts.segment,
		// 2592-1
		l_t_arm: parts.segment,
		// 2592-2
		r_b_arm: parts.segment,
		// 2592-3
		r_t_arm: parts.segment,
		// 2592-4
		l_t_leg: parts.segment,
		// 2592-5
		r_t_leg: parts.segment,
		// 2592-6
		r_b_leg: parts.segment,
		// 2592-7
		l_b_leg: parts.segment,
		// 2595
		r_foot: parts.right_foot,
		// 2598
		pants: parts.pants,
		// 2601
		body: parts.body,
		// 2606
		head: parts.head,
		// 2608
		l_hand: parts.left_hand,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// release, ill, cast, sleep same as stand
		// 2609
		stand: stand,
		// 2610
		walk: walk,
		dodge: walk,
		// 2611
		run: run,
		// 2612
		hit: hit,
		// 2613
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		// 2614
		attack: attack,
		big: attack,
		counter: attack,
		// 2615
		land: land,
		// 2616
		dead: dead
	}
};
