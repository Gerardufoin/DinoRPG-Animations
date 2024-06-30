// @ts-check

import { stand } from './animations/stand_adult.js';
import { stand as l_stand } from './animations/stand_larvae.js';
import { hit } from './animations/hit_adult.js';
import { attack } from './animations/attack_adult.js';
import { land } from './animations/land_adult.js';
import { dead } from './animations/dead_adult.js';
import { parts_small, transforms } from './parts_small.js';
import { ref } from '../references_small.js';

export const soufflet_adult = {
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
		l_antennae: parts_small.left_antennae,
		// 1119
		l_arm: parts_small.arm,
		// 1119
		r_arm: parts_small.arm,
		// 1122
		body: parts_small.body
	},
	animations: {
		// missing cast, release, fly
		// walk (1125), run (1126), jump (1128) are the same animation as stand
		// 1124
		stand: stand,
		// 1127
		hit: hit,
		// 1129
		attack: attack,
		// 1130
		land: land,
		// 1131
		dead: dead,
		// 1096
		sleep: l_stand,
		// 1096 idx 5
		ill: { offset: 5, anim: l_stand }
	}
};
