// @ts-check

import { parts } from './parts.js';
import { strike } from './animations/strike.js';
import { windup } from './animations/windup.js';
import { idle } from './animations/idle.js';

// TODO: Rework the animation to remove the hammer duplicates created by JPEXS and fix the arm behind the helmet during idle.
export let worker = {
	name: 'worker',
	parts: {
		l_foot: parts.l_foot,
		pants: parts.pants,
		body: parts.body,
		hammer_1: parts.hammer_1,
		l_ear: parts.ear,
		r_ear: parts.ear,
		head: parts.head,
		hammer_2: parts.hammer_2,
		hammer_3: parts.hammer_3,
		hammer_4: parts.hammer_4,
		hammer_5: parts.hammer_5,
		hammer_6: parts.hammer_6,
		hammer_7: parts.hammer_7,
		hammer_8: parts.hammer_8,
		hammer_9: parts.hammer_9,
		l_hand: parts.hand,
		r_hand: parts.hand,
		r_foot: parts.r_foot,
		l_arm_bot: parts.segment,
		l_arm_top: parts.segment,
		r_arm_top: parts.segment,
		r_for_bot: parts.segment,
		l_leg_top: parts.segment,
		r_leg_top: parts.segment,
		l_leg_bot: parts.segment,
		r_leg_bot: parts.segment,
		shade: parts.shade
	},
	animations: {
		strike: strike,
		idle: idle,
		windup: windup
	}
};
