// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { mugard_animations, mugard_parts } from '../mugard/mugard.js';

// Symbol 1525
export const muking = {
	name: 'muking',
	// Symbol 82
	width: 0.832,
	height: 2.041,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: 0,
			brightness: -47,
			contrast: 32,
			saturation: 14,
			hue: -17
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
	parts: mugard_parts,
	animations: mugard_animations
};
