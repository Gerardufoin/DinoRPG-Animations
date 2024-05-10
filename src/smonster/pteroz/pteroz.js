// @ts-check
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { stand } from '../../sdino/pteroz/animations/stand.js';
import { walk } from '../../sdino/pteroz/animations/walk.js';
import { run } from '../../sdino/pteroz/animations/run.js';
import { attack } from '../../sdino/pteroz/animations/attack.js';
import { land } from '../../sdino/pteroz/animations/land.js';
import { dead } from '../../sdino/pteroz/animations/dead.js';
import { ref as ref_sdino } from '../../sdino/references_small.js';
import { parts } from './parts.js';

// Symbol 920
export const pteroz = {
	name: 'pteroz',
	// Symbol 82
	width: 0.906,
	height: 0.831,
	transforms: [
		// 4089
		{
			tx: 1.9,
			ty: 1.25,
			a: 1.117,
			d: 1.117
		},
		// 920
		{
			tx: -3
		},

		// Adjust
		{
			ty: -10.5
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
		// 886 p6d
		r_wing: parts.right_wing,
		// 892 p6c
		r_hand: parts.hand,
		// 895 p5col0
		fin: parts.fin,
		// 898
		body: parts.body,
		// 901 p3
		beak: parts.beak,
		// 903
		l_leg: parts.left_leg,
		// 907 p4
		eyes: parts.eyes,
		// 892 p6a
		l_hand: parts.hand,
		// 912 p6b
		l_wing: parts.left_wing,
		// 154
		fx_dust_1: fx_dust,
		// 154
		fx_dust_2: fx_dust,
		// 154
		fx_dust_3: fx_dust
	},
	animations: {
		// Same animations as Pteroz from sdino
		// sleep, release, ill, cast, and hit same as stand
		// 913
		stand: stand,
		// 914
		walk: walk,
		// 915
		run: run,
		jump: run,
		jumpDown: run,
		fly: run,
		fall: run,
		dodge: run,
		// 916
		attack: attack,
		big: attack,
		counter: attack,
		// 917
		land: land,
		// 918
		dead: dead
	}
};
