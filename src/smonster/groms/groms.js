// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

const grom_parts = {
	// 2021
	tail: parts.tail,
	// 2023
	l_foot: parts.left_foot,
	// 2025
	r_foot: parts.right_foot,
	// 2027
	l_body: parts.body,
	// 2027-1
	r_body: parts.body,
	// 2029
	tummy: parts.tummy,
	// 2031
	back: parts.back,
	// 2033
	navel: parts.navel,
	// 2035
	l_arm: parts.left_arm,
	// 2037
	r_arm: parts.right_arm,
	// 2039
	head: parts.head,
	// 2045
	atk_body_smear: parts.attack_body_smear,
	// 2046
	atk_smear_1: parts.attack_smear_1,
	// 2047
	atk_smear_2: parts.attack_smear_2,
	// 2048
	atk_smear_3: parts.attack_smear_3,
	// 2049
	atk_smear_4: parts.attack_smear_4,
	// 2050
	atk_smear_5: parts.attack_smear_5,
	// 2054
	head_sleep: parts.head_sleep
};

const grom_animations = {
	// guard, release, ill same as stand
	// 2040
	stand: stand,
	// 2041
	walk: walk,
	// 2042
	run: run,
	// 2043
	hit: hit,
	// 2044
	jump: jump,
	jumpDown: jump,
	fly: jump,
	fall: jump,
	dodge: jump,
	// 2051
	attack: attack,
	big: attack,
	// 2052
	land: land,
	// 2055
	dead: dead,
	// 2056
	sleep: sleep
};

// Symbol 2058
export const groms = {
	name: 'groms',
	// Symbol 82
	width: 1.58,
	height: 1.639,
	transforms: [
		// 4089
		{
			tx: -27.05,
			ty: -60.8,
			a: 0.8,
			d: 0.8,
			contrast: 11,
			hue: -80
		},
		// 2058
		{
			tx: 2.95,
			ty: -4,
			a: 0.925,
			d: 0.925
		}
	],
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
	parts: grom_parts,
	animations: grom_animations
};

// Symbol 2058
export const grom2 = {
	name: 'grom2',
	// Symbol 82
	width: 1.606,
	height: 1.65,
	transforms: [
		// 4089
		{
			tx: -23.15,
			ty: -52.85,
			a: 0.7,
			d: 0.7,
			contrast: 11
		},
		// 2058
		{
			tx: 2.95,
			ty: -4,
			a: 0.925,
			d: 0.925
		}
	],
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
	parts: grom_parts,
	animations: grom_animations
};

// Symbol 2058
export const grom3 = {
	name: 'grom3',
	// Symbol 82
	width: 1.771,
	height: 2.024,
	transforms: [
		// 4089
		{
			tx: -29.3,
			ty: -73,
			a: 0.9,
			d: 0.945,
			brightness: 13,
			contrast: 10,
			saturation: -44,
			hue: 180
		},
		// 2058
		{
			tx: 2.95,
			ty: -4,
			a: 0.925,
			d: 0.925
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 1.2,
			a: 1.719,
			d: 1.556
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: grom_parts,
	animations: grom_animations
};
