// @ts-check

import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 360
export const borg = {
	name: 'borg',
	// Symbol 82
	width: 2.437,
	height: 2.101,
	transforms: [
		// 4089
		{
			tx: -5.45,
			ty: -20.15
		},
		// Adjust
		{
			tx: 2,
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
			a: 2.413,
			d: 2.184
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		r_hand: parts.r_hand,
		l_arm: parts.arm,
		r_arm: parts.arm,
		l_shoulder: parts.shoulder,
		r_shoulder: parts.shoulder,
		tail: parts.tail,
		butt_1: parts.butt,
		butt_2: parts.butt,
		body: parts.body,
		head: parts.head,
		eyes: parts.eyes,
		mouth: parts.mouth,
		l_hand: parts.l_hand,
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		],
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// guard, release, ill, cast, dodge, and sleep same as stand
		// 350
		stand: stand,
		// 351
		walk: walk,
		// 352
		run: run,
		// 353
		hit: hit,
		// 354
		jump: jump,
		fly: jump,
		fall: jump,
		jumpDown: jump,
		// 355
		attack: attack,
		counter: attack,
		big: attack,
		// 356
		land: land,
		// 357
		dead: dead
	}
};
