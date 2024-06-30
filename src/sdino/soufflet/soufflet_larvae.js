// @ts-check

import { stand } from './animations/stand_larvae.js';
import { walk } from './animations/walk_larvae.js';
import { run } from './animations/run_larvae.js';
import { hit } from './animations/hit_larvae.js';
import { jump } from './animations/jump_larvae.js';
import { attack } from './animations/attack_larvae.js';
import { land } from './animations/land_larvae.js';
import { dead } from './animations/dead_larvae.js';
import { parts_small, transforms } from './parts_small.js';
import { ref } from '../references_small.js';

export const soufflet_larvae = {
	width: 0.686,
	height: 0.656,
	transforms: transforms,
	glow: {
		distance: 1,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: 0,
			ty: 0,
			a: 0.968,
			d: 0.709
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1071
		head: parts_small.head,
		// 1092
		butt: parts_small.butt,
		// 1093
		eyes: parts_small.eyes,
		// 1094
		r_antennae: parts_small.right_antennae,
		// 1095
		l_antennae: parts_small.left_antennae
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
