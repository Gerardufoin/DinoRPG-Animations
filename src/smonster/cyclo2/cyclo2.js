// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from '../cyclo/animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from '../cyclo/animations/dead.js';
import { jump } from '../cyclo/animations/jump.js';
import { run } from '../cyclo/animations/run.js';
import { land } from '../cyclo/animations/land.js';
import { sleep } from '../cyclo/animations/sleep.js';
import { stand } from '../cyclo/animations/stand.js';
import { walk } from '../cyclo/animations/walk.js';
import { parts } from './parts.js';

// Symbol 2019
export const cyclo2 = {
	name: 'cyclo2',
	// Symbol 82
	width: 1.531,
	height: 1.667,
	transforms: [
		// 4089
		{
			tx: -26.25,
			ty: -60.9,
			a: 1.325,
			d: 1.264,
			brightness: -16,
			contrast: 11
		},
		// 2019
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
		// 1981
		r_hand: parts.right_hand,
		// 1983
		r_arm: parts.right_arm,
		// 1984
		l_shoulder: parts.shoulder,
		// 1984-1
		r_shoulder: parts.shoulder,
		// 1986
		r_foot: parts.right_foot,
		// 1988
		r_leg: parts.right_leg,
		// 1990
		l_foot: parts.left_foot,
		// 1992
		l_leg: parts.left_leg,
		// 1994
		body: parts.body,
		// 1996
		l_hand: parts.left_hand,
		// 1998
		l_arm: parts.left_arm,
		// 2000
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
		// 2006
		atk_smear_arms: parts.attack_smear_arms,
		// 2013
		head_dead: parts.head_dead,
		// 2016
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, ill same as stand
		// 2001 (1944)
		stand: stand,
		// 2002 (1945)
		walk: walk,
		// 2003 (1946)
		run: run,
		// 2004 (1947)
		hit: hit,
		// 2005 (1948)
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 2008
		attack: attack,
		big: attack,
		// 2009 (1955)
		land: land,
		// 2014 (1960)
		dead: dead,
		// 2017 (1963)
		sleep: sleep
	}
};
