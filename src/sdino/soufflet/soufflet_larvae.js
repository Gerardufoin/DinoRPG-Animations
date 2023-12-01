// @ts-check

import { stand } from './animations/stand_larvae.js';
import { walk } from './animations/walk_larvae.js';
import { run } from './animations/run_larvae.js';
import { hit } from './animations/hit_larvae.js';
import { jump } from './animations/jump_larvae.js';
import { attack } from './animations/attack_larvae.js';
import { land } from './animations/land_larvae.js';
import { dead } from './animations/dead_larvae.js';
import { parts, transforms, palette } from './parts.js';
import { ref } from '../references.js';

export let soufflet_larvae = {
	name: 'soufflet',
	transforms: transforms,
	glow: {
		distance: 1,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: palette,
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -1.4,
			ty: 9.65,
			a: 0.968,
			d: 0.709
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1071
		head: parts.head,
		// 1092
		butt: parts.butt,
		// 1093
		eyes: parts.eyes,
		// 1094
		right_antennae: parts.right_antennae,
		// 1095
		left_antennae: parts.left_antennae
	},
	animations: {
		// missing cast, release, fly
		// sleep same as stand
		// 1096
		stand: stand,
		// 1097
		walk: walk,
		// 1098
		run: run,
		// 1099
		hit: hit,
		// 1100
		jump: jump,
		// 1101
		attack: attack,
		// 1102
		land: land,
		// 1103
		dead: dead,
		// 1096 idx 5
		ill: { offset: 5, anim: stand }
	}
};
