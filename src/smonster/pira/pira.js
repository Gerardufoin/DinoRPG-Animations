// @ts-check

import { fx_dust } from '../../sdino/fx/dust.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 393
export const pira = {
	name: 'pira',
	// Symbol 82
	width: 0.63,
	height: 0.671,
	transforms: [
		// 4089
		{
			tx: -1.95,
			ty: -10.5
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
			a: 0.88,
			d: 0.797
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		tail: parts.tail,
		r_eye: parts.r_eye,
		body: parts.body,
		l_eye: parts.l_eye,
		back_fin: parts.back_fin,
		mouth: parts.mouth,
		mouth_atk_bot: parts.mouth,
		mouth_atk_top: parts.mouth,
		l_fin: parts.fin,
		r_fin: parts.fin,
		inside: parts.inside,
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
		// release, ill, sleep, and cast same as stand
		// 383
		stand: stand,
		// 384
		walk: walk,
		run: walk,
		// 385
		hit: hit,
		// 386
		fly: fly,
		fall: fly,
		jump: fly,
		jumpDown: fly,
		dodge: fly,
		// 389
		attack: attack,
		big: attack,
		counter: attack,
		// 390
		land: land,
		// 391
		dead: dead
	}
};
