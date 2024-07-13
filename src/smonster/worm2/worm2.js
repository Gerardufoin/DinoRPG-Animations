// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 1274
export const worm2 = {
	name: 'worm2',
	// Symbol 82
	width: 1.365,
	height: 1.363,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: 0.75,
			a: 0.792,
			d: 0.792,
			contrast: 12,
			saturation: 18
		},
		// 1274
		{
			tx: -3.15,
			ty: -12.6,
			contrast: 1,
			saturation: -42,
			hue: 9
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
		// 1256
		body_3: parts.body,
		// 1256-1
		body_2: parts.body,
		// 1256-2
		body_1: parts.body,
		// 1258
		head_back: parts.head_back,
		// 1259
		mouth: parts.mouth,
		// 1261
		head_bottom: parts.head_bottom,
		// 1263
		head_top: parts.head_top,
		// 1264
		hl_body_1: parts.hl_body_1,
		// 1265
		hl_body_2: parts.hl_body_2,
		// 1266
		hl_head: parts.hl_head,
		// 1096
		ground: parts.ground
	},
	animations: {
		// release, ill, cast, walk, run same as stand
		// 1267
		stand: stand,
		// 1268 (same as 1269)
		hit: hit,
		jump: hit,
		jumpDown: hit,
		fall: hit,
		fly: hit,
		dodge: hit,
		// 1270
		attack: attack,
		big: attack,
		counter: attack,
		shoot: attack,
		// 1271
		land: land,
		// 1272
		dead: dead,
		sleep: dead
	}
};
