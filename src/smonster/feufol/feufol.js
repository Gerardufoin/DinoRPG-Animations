// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { dodge } from './animations/dodge.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';

// Symbol 3713
export const feufol = {
	name: 'feufol',
	// Symbol 2750
	width: 0.973,
	height: 0.858,
	transforms: [
		// 4089
		{
			tx: 40.7,
			ty: -62.5
		},
		// 3713
		{
			tx: -63,
			ty: -41.5
		},
		// Adjust
		{
			ty: -11
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.85,
			a: 1.176,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3668
		aura: parts.aura,
		// 3672
		eye: parts.eye,
		// 3673
		body: parts.body,
		// 3676
		aura_fly: parts.aura_fly,
		// 3678
		head_fly: parts.head_fly,
		// 3691
		hit_fx: parts.hit_fx,
		// 3706
		atk_fx: parts.attack_fx,
		// 3709
		head_dead: parts.head_dead
	},
	animations: {
		// release, guard, ill, cast, walk, sleep same as stand
		// 3674
		stand: stand,
		// 3680
		fly: fly,
		run: fly,
		jump: fly,
		jumpDown: fly,
		fall: fly,
		land: fly,
		// 3692
		hit: hit,
		// 3707
		attack: attack,
		big: attack,
		counter: attack,
		// 3710
		dead: dead,
		// 3711
		dodge: dodge
	}
};
