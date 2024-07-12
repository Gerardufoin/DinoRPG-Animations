// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 1121
export const worm = {
	name: 'worm',
	// Symbol 82
	width: 1.433,
	height: 1.43,
	transforms: [
		// 4089
		{
			tx: -2.15,
			ty: -11.5,
			contrast: 12,
			saturation: 18
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -8.9,
			a: 2.145,
			d: 0.797
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1098
		body_3: parts.body,
		// 1098-1
		body_2: parts.body,
		// 1098-2
		body_1: parts.body,
		// 1100
		head_back: parts.head_back,
		// 1102
		mouth: parts.mouth,
		// 1104
		head_bottom: parts.head_bottom,
		// 1106
		head_top: parts.head_top,
		// 1108
		hl_body_1: parts.hl_body_1,
		// 1110
		hl_body_2: parts.hl_body_2,
		// 1112
		hl_head: parts.hl_head,
		// 1096
		ground: parts.ground
	},
	animations: {
		// release, ill, cast, walk, sleep same as stand
		// 1113
		stand: stand,
		// 1114
		run: run,
		// 1115
		hit: hit,
		jump: hit,
		jumpDown: hit,
		fall: hit,
		dodge: hit,
		fly: hit,
		// 1117
		attack: attack,
		big: attack,
		counter: attack,
		// 1118
		land: land,
		// 1119
		dead: dead
	}
};
