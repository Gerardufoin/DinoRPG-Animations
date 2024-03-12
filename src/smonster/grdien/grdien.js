// @ts-check

import { stand } from './animations/stand.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { fx_dust } from '../../sdino/fx/dust.js';
import { parts } from './parts.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';

export const grdien = {
	name: 'grdien',
	width: 2.323,
	height: 2.227,
	transforms: [
		// 4089
		{
			tx: 1.2,
			ty: -78.4,
			a: 0.974,
			d: 0.974
		},
		// 529
		{
			tx: -5,
			ty: 24,
			a: 1.258,
			d: 1.258
		},
		// adjust
		{
			ty: -8
		}
	],
	glow: {
		distance: 1,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 2.5,
			d: 2.3
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		r_arm: parts.r_arm,
		r_hand: parts.r_hand,
		r_forearm: parts.r_forearm,
		body: parts.body,
		roots: parts.roots,
		l_forearm: parts.l_forearm,
		l_arm: parts.l_arm,
		l_hand: parts.l_hand,
		head: parts.head,
		l_eye: parts.eye,
		r_eye: parts.eye,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_dust_4: fx_dust,
		fx_dust_5: fx_dust,
		fx_dust_6: fx_dust
	},
	animations: {
		// release, ill, cast, sleep, fly same as stand
		// 523
		stand: stand,
		walk: { anim: stand, offset: 4 },
		run: { anim: stand, offset: 9 },
		//524
		hit: hit,
		dodge: { anim: hit, offset: 5 },
		jumpDown: { anim: hit, offset: 5 },
		fall: { anim: hit, offset: 5 },
		jump: { anim: hit, offset: 5 },
		// 525
		attack: attack,
		counter: attack,
		big: attack,
		// 526
		land: land,
		// 527
		dead: dead
	}
};
