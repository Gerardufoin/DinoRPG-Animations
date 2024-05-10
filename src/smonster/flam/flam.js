// @ts-check

import { ref as ref_sdino } from '../../sdino/references_small.js';
import { ref } from '../references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { dodge } from './animations/dodge.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 254
export const flam = {
	name: 'flam',
	// Symbol 82
	width: 0.783,
	height: 0.833,
	light: true,
	transforms: [
		// 4089 + 254 + adjust
		{
			tx: 1,
			ty: -13.8
		}
	],
	glow: {
		distance: 5,
		color: 0xff9900,
		quality: 1,
		strength: 0.8
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.55,
			a: 0.826,
			d: 0.826
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		body: parts.body,
		body_dead: parts.body,
		l_eye: parts.eye,
		r_eye: parts.eye,
		cinders: parts.cinders,
		// 6
		fx_burst_1: [
			{
				ref: ref.fx.burst_1
			}
		],
		// 7
		fx_burst_2: [
			{
				ref: ref.fx.burst_2
			}
		],
		// 8
		fx_burst_3: [
			{
				ref: ref.fx.burst_3
			}
		],
		// 9
		fx_burst_4: [
			{
				ref: ref.fx.burst_4
			}
		],
		// 10
		fx_burst_5: [
			{
				ref: ref.fx.burst_5
			}
		],
		// 11
		fx_burst_6: [
			{
				ref: ref.fx.burst_6
			}
		],
		// 12
		fx_burst_7: [
			{
				ref: ref.fx.burst_7
			}
		],
		// 13
		fx_burst_8: [
			{
				ref: ref.fx.burst_8
			}
		],
		// 14
		fx_burst_9: [
			{
				ref: ref.fx.burst_9
			}
		],
		// 15
		fx_burst_10: [
			{
				ref: ref.fx.burst_10
			}
		],
		// 16
		fx_burst_11: [
			{
				ref: ref.fx.burst_11
			}
		],
		// 17
		fx_burst_12: [
			{
				ref: ref.fx.burst_12
			}
		],
		// 18
		fx_burst_13: [
			{
				ref: ref.fx.burst_13
			}
		],
		// 19
		fx_burst_14: [
			{
				ref: ref.fx.burst_14
			}
		],
		// 20
		fx_burst_15: [
			{
				ref: ref.fx.burst_15
			}
		],
		// 21
		fx_burst_16: [
			{
				ref: ref.fx.burst_16
			}
		],
		// 22
		fx_burst_17: [
			{
				ref: ref.fx.burst_17
			}
		],
		// 23
		fx_burst_18: [
			{
				ref: ref.fx.burst_18
			}
		]
	},
	animations: {
		// guard, release, ill, and cast same as stand
		// 220
		stand: stand,
		// 221
		walk: walk,
		// 222
		run: run,
		// 222
		hit: hit,
		// 223
		jump: jump,
		fly: jump,
		// 224
		attack: attack,
		counter: attack,
		big: attack,
		// 225
		land: land,
		jumpDown: land,
		fall: land,
		// 250
		dead: dead,
		// 251
		sleep: sleep,
		// 252
		dodge: dodge
	}
};
