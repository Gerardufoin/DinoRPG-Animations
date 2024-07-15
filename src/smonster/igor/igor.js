// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 1366
export const igor = {
	name: 'igor',
	// Symbol 82
	width: 0.825,
	height: 1.273,
	transforms: [
		// 4089
		{
			tx: 1.35,
			ty: -12.6,
			brightness: -15,
			contrast: 11
		},
		// Adjust
		{
			ty: -7.7
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
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1351
		wind: parts.wind,
		// 1361_sub
		igor: parts.igor
	},
	animations: {
		// guard, release, ill, cast, walk, run, hit, dodge, jumpDown, fall, fly, jump, dead, sleep same as stand
		// 1362
		stand: stand,
		// 1363 + 1364
		attack: attack,
		big: attack,
		counter: attack,
		land: attack
	}
};
