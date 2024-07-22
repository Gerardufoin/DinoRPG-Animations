// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { down } from './animations/down.js';
import { downwalk } from './animations/downwalk.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { up } from './animations/up.js';
import { upwalk } from './animations/upwalk.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1979
export const cyclo = {
	name: 'cyclo',
	// Symbol 82
	width: 1.531,
	height: 1.667,
	transforms: [
		// 4089
		{
			tx: -22.1,
			ty: -54.9,
			a: 1.2,
			d: 1.2,
			brightness: -16,
			contrast: 11
		},
		// 1979
		{
			tx: -6.75
		},
		// Adjust
		{
			ty: -7.7
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
	parts: {
		// 1923
		r_hand: parts.right_hand,
		// 1925
		r_arm: parts.right_arm,
		// 1927
		l_shoulder: parts.shoulder,
		// 1927-1
		r_shoulder: parts.shoulder,
		// 1929
		r_leg: parts.right_leg,
		// 1929
		r_leg_down: parts.right_leg,
		// 1929
		l_leg_down: parts.right_leg,
		// 1931
		r_foot: parts.right_foot,
		// 1931
		r_foot_down: parts.right_foot,
		// 1931
		l_foot_down: parts.right_foot,
		// 1933
		l_leg: parts.left_leg,
		// 1935
		l_foot: parts.left_foot,
		// 1937
		body: parts.body,
		// 1939
		l_hand: parts.left_hand,
		// 1939
		r_hand_up: parts.left_hand,
		// 1939
		l_hand_up: parts.left_hand,
		// 1939
		r_hand_down: parts.left_hand,
		// 1941
		l_arm: parts.left_arm,
		// 1941
		r_arm_up: parts.left_arm,
		// 1941
		l_arm_up: parts.left_arm,
		// 1941
		r_arm_down: parts.left_arm,
		// 1943
		head: parts.head,
		// 1949
		atk_smear_1: parts.attack_smear_1,
		// 1950
		atk_smear_2: parts.attack_smear_2,
		// 1951
		atk_smear_3: parts.attack_smear_3,
		// 1952
		atk_smear_4: parts.attack_smear_4,
		// 1953
		atk_smear_5: parts.attack_smear_5,
		// 1959
		head_dead: parts.head_dead,
		// 1962
		head_sleep: parts.head_sleep,
		// 1965
		l_leg_up: parts.leg_up,
		// 1965
		r_leg_up: parts.leg_up,
		// 1967
		l_foot_up: parts.foot_up,
		// 1967
		r_foot_up: parts.foot_up,
		// 1969
		head_up: parts.head_up,
		// 1971
		r_shoulder_up: parts.shoulder_up,
		// 1971-1
		l_shoulder_up: parts.shoulder_up,
		// 1973
		body_up: parts.body_up
	},
	animations: {
		// guard, release, ill same as stand
		// 1944
		stand: stand,
		// 1945
		walk: walk,
		// 1946
		run: run,
		// 1947
		hit: hit,
		// 1948
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1954
		attack: attack,
		big: attack,
		// 1955
		land: land,
		// 1960
		dead: dead,
		// 1963
		sleep: sleep,
		// 1974
		up: up,
		// 1975
		upwalk: upwalk,
		// 1976
		down: down,
		// 1977
		downwalk: downwalk
	}
};
