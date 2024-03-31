// @ts-check

import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 471
export const kazka = {
	name: 'kazka',
	// Symbol 82
	width: 1.026,
	height: 1.032,
	transforms: [
		// 4089
		{
			tx: -0.65,
			ty: -18.75,
			brightness: 7,
			contrast: 11
		},
		// 471
		{
			tx: 26.85,
			ty: -2.1
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
		l_f_sp: parts.spike,
		r_f_sp: parts.spike,
		r_b_sp: parts.spike,
		l_b_sp: parts.spike,
		b_sp_1: parts.back_spike,
		b_sp_2: parts.back_spike,
		b_sp_3: parts.back_spike,
		float: parts.float,
		back: parts.back,
		back_hl: parts.back_highlight,
		l_eye: parts.eye,
		r_eye: parts.eye,
		b_ex_1: parts.back_explosion_1,
		b_ex_2: parts.back_explosion_2,
		b_ex_3: parts.back_explosion_3,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_exp_1: parts.fx_explosion,
		fx_exp_2: parts.fx_explosion,
		fx_exp_3: parts.fx_explosion
	},
	animations: {
		// release, ill, walk, run, and cast same as stand
		// walk, run, hit had an offset of 4, 9, 14, but with the gotoAndPlay(1) it does not really make sense.
		// Split hit into a new animation which rollback to stand.
		// 460
		stand: stand,
		hit: hit,
		// 461
		fly: fly,
		jump: fly,
		jumpDown: fly,
		fall: fly,
		dodge: fly,
		// 462
		attack: attack,
		counter: attack,
		big: attack,
		// 463
		land: land,
		// 468
		dead: dead,
		// 469
		sleep: sleep
	}
};
