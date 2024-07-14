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

// Symbol 1254
export const bamboo = {
	name: 'bamboo',
	// Symbol 82
	width: 0.631,
	height: 0.838,
	transforms: [
		// 4089
		{
			tx: 0.2,
			ty: -11.5
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
		// 1225
		b_hair: parts.back_hair,
		// 1228
		f_hair: parts.front_hair,
		// 1231
		u_body: parts.upper_body,
		// 1233
		r_eye: parts.right_eye,
		// 1237
		l_body: parts.lower_body,
		// 1239
		l_eye: parts.left_eye,
		// 1242
		root: parts.root,
		// 1248
		atk_smear_1: parts.atk_smear_1,
		// 1249
		atk_smear_2: parts.atk_smear_2
	},
	animations: {
		// release, ill, cast, sleep same as stand
		// 1243
		stand: stand,
		// 1244
		walk: walk,
		// 1245
		run: run,
		// 1246
		hit: hit,
		// 1247
		jump: jump,
		jumpDown: jump,
		fall: jump,
		dodge: jump,
		fly: jump,
		// 1250
		attack: attack,
		big: attack,
		counter: attack,
		// 1251
		land: land,
		// 1252
		dead: dead
	}
};
