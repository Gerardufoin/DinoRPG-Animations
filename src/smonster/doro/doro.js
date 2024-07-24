// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { down } from './animations/down.js';
import { downwalk } from './animations/downwalk.js';
import { fall } from './animations/fall.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { up } from './animations/up.js';
import { upwalk } from './animations/upwalk.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 2119
export const doro = {
	name: 'doro',
	// Symbol 82
	width: 1.797,
	height: 1.743,
	transforms: [
		// 4089
		{
			tx: -25.4,
			ty: -55.55,
			a: 0.724,
			d: 0.724,
			brightness: -5,
			contrast: 19,
			saturation: -17
		},
		// 2119
		{
			tx: 1.9
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 3.8,
			a: 1.832,
			d: 1.658
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 2060
		l_t_arm: parts.top_arm,
		// 2060-1
		r_t_arm: parts.top_arm,
		// 2062
		l_b_arm: parts.bottom_arm,
		// 2062-1
		r_b_arm: parts.bottom_arm,
		// 2064
		l_hand: parts.hand,
		// 2064-1
		r_hand: parts.hand,
		// 2066
		b_armor: parts.back_armor,
		// 2068
		l_foot: parts.foot,
		// 2068-1
		r_foot: parts.foot,
		// 2070
		l_leg: parts.leg,
		// 2070-1
		r_leg: parts.leg,
		// 2072
		tail: parts.tail,
		// 2074
		body: parts.body,
		// 2076
		f_armor: parts.front_armor,
		// 2078
		head: parts.head,
		// 2085
		atk_smear_1: parts.attack_smear_1,
		// 2086
		atk_smear_2: parts.attack_smear_2,
		// 2087
		atk_smear_3: parts.attack_smear_3,
		// 2088
		atk_smear_4: parts.attack_smear_4,
		// 2089
		atk_smear_5: parts.attack_smear_5,
		// 2093
		head_sleep: parts.head_sleep,
		// 2097
		tail_up: parts.tail_up,
		// 2099
		l_leg_up: parts.leg_up,
		// 2099-1
		r_leg_up: parts.leg_up,
		// 2101
		r_arm_up: parts.arm_up,
		// 2101-1
		l_arm_up: parts.arm_up,
		// 2103
		body_front: parts.body_front,
		// 2105
		armor_front: parts.armor_front,
		// 2107
		head_up: parts.head_up,
		// 2111
		r_leg_down: parts.leg_down,
		// 2111-1
		l_leg_down: parts.leg_down,
		// 2113
		l_arm_down: parts.arm_down,
		// 2113-1
		r_arm_down: parts.arm_down,
		// 2115
		head_down: parts.head_down
	},
	animations: {
		// guard, release, ill same as stand
		// 2079
		stand: stand,
		// 2080
		walk: walk,
		// 2081
		run: run,
		// 2082
		hit: hit,
		// 2083
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 2084
		fall: fall,
		// 2090
		attack: attack,
		big: attack,
		// 2091
		land: land,
		// 2094
		dead: dead,
		// 2095
		sleep: sleep,
		// 2108
		up: up,
		// 2109
		upwalk: upwalk,
		// 2116
		down: down,
		// 2117
		downwalk: downwalk
	}
};
