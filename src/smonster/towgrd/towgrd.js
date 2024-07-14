// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { guard } from './animations/guard.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 1222
export const towgrd = {
	name: 'towgrd',
	// Symbol 82
	width: 2.406,
	height: 1.804,
	transforms: [
		// 4089
		{
			tx: 10.7,
			ty: -44.65
		},
		// 1222
		{
			tx: -14.6,
			ty: -0.95
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 3,
		color: 0xccffcc,
		quality: 1,
		strength: 1.5
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
		// 1190
		r_b_arm: parts.right_bottom_arm,
		// 1192
		r_hand: parts.right_hand,
		// 1194
		r_t_arm: parts.right_top_arm,
		// 1196
		body: parts.body,
		// 1198
		legs: parts.legs,
		// 1200
		l_t_arm: parts.left_top_arm,
		// 1202
		l_b_arm: parts.left_bottom_arm,
		// 1204
		l_hand: parts.left_hand,
		// 1206
		head: parts.head,
		// 1208
		l_eye: parts.eye,
		// 1208-1
		r_eye: parts.eye,
		// 1216 morphshape
		shield: parts.shield,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_dust_4: fx_dust,
		fx_dust_5: fx_dust,
		fx_dust_6: fx_dust
	},
	animations: {
		// release, ill, cast, walk, run, dodge, jumpDown, fall, jump, sleep, fly same as stand
		// 1209
		stand: stand,
		// 1210
		hit: hit,
		// 1211
		attack: attack,
		big: attack,
		counter: attack,
		// 1212
		land: land,
		// 1215
		dead: dead,
		// 1220
		guard: guard
	}
};
