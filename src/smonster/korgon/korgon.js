// @ts-check

import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Basic korgon parts
const kparts = {
	r_arm: parts.limb,
	l_arm: parts.limb,
	r_leg: parts.limb,
	l_leg: parts.limb,
	back: parts.back,
	body: parts.body,
	head: parts.head,
	mouth: parts.mouth,
	r_eye: parts.eye,
	l_eye: parts.eye,
	mask: [],
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
};

// Korgon animations
const anims = {
	// release, ill, and cast same as stand
	// 317
	stand: stand,
	// 318
	walk: walk,
	// 319
	run: run,
	// 320
	hit: hit,
	// 321
	jump: jump,
	jumpDown: jump,
	dodge: jump,
	fly: jump,
	fall: jump,
	// 322
	attack: attack,
	big: attack,
	counter: attack,
	// 323
	land: land,
	// 234
	dead: dead,
	// 325
	sleep: sleep
};

// Symbol 312
export const korgon = {
	name: 'korgon',
	// Symbol 82
	width: 0.622,
	height: 0.672,
	transforms: [
		// 4089
		{
			tx: 0.2,
			ty: -1.75
		},
		// Adjust
		{
			tx: 1,
			ty: -6.55
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -2.4,
			a: 1.19,
			d: 1.077
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: kparts,
	animations: anims
};

// Symbol 312
export const rkrgns = {
	name: 'rkrgns',
	// Symbol 82
	width: 0.622,
	height: 0.672,
	transforms: [
		// 4089
		{
			tx: 0.2,
			ty: -1.75,
			a: 0.871,
			d: 0.871
		},
		// Adjust
		{
			tx: 1,
			ty: -6.55
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -2.4,
			a: 0.876,
			d: 0.793
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: kparts,
	animations: anims
};

// Symbol 327
export const kmask = {
	name: 'kmask',
	// Symbol 82
	width: 0.622,
	height: 0.672,
	transforms: [
		// 4089
		{
			tx: 0.35,
			ty: -4.35,
			a: 1.136,
			d: 1.136
		},
		// Adjust
		{
			tx: 1,
			ty: -6.55
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -2.4,
			a: 1.19,
			d: 1.077
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		r_arm: parts.limb,
		l_arm: parts.limb,
		r_leg: parts.limb,
		l_leg: parts.limb,
		back: parts.back,
		body: parts.body,
		head: parts.head,
		mouth: parts.mouth,
		mask: parts.mask,
		r_eye: parts.m_eye,
		l_eye: parts.m_eye,
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
	animations: anims
};
