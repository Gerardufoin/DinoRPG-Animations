// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { parts } from './parts.js';
import { stand } from './animations/stand.js';
import { jump } from './animations/jump.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { cast } from './animations/cast.js';
import { ref } from '../references.js';
import { counter } from './animations/counter.js';

// Symbol 1921
export const mandragore = {
	name: 'mandragore',
	// Symbol 82
	width: 1.233,
	height: 1.753,
	transforms: [
		// 4089
		{
			tx: 14.75,
			ty: -54.9,
			a: -0.9,
			d: 0.9,
			brightness: -16,
			contrast: 11
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
		l_foot: parts.l_foot,
		l_leg: parts.l_leg,
		l_pant: parts.l_pant,
		r_foot: parts.r_foot,
		r_leg: parts.r_leg,
		r_pant: parts.r_pant,
		belt: parts.belt,
		sleeves: parts.sleeves,
		l_armband: parts.l_armband,
		l_arm: parts.l_arm,
		r_hand: parts.hand,
		l_hand: parts.hand,
		r_armband: parts.r_armband,
		r_arm: parts.r_arm,
		body: parts.body,
		head: parts.head,
		// 1905
		attack_1: [
			{
				ref: ref.mandragore.attack_1
			}
		],
		// 1906
		attack_2: [
			{
				ref: ref.mandragore.attack_2
			}
		],
		// 1907
		attack_3: [
			{
				ref: ref.mandragore.attack_3
			}
		],
		// 1908
		attack_4: [
			{
				ref: ref.mandragore.attack_4
			}
		],
		// 1909
		attack_5: [
			{
				ref: ref.mandragore.attack_5
			}
		],
		// 1910
		attack_6: [
			{
				ref: ref.mandragore.attack_6
			}
		],
		// 1911
		attack_7: [
			{
				ref: ref.mandragore.attack_7
			}
		],
		// 1912
		attack_8: [
			{
				ref: ref.mandragore.attack_8
			}
		],
		// 1918
		counter: [
			{
				ref: ref.mandragore.counter
			}
		]
	},
	animations: {
		// guard, release, and ill same as stand
		// 1899
		stand: stand,
		// 1900
		walk: walk,
		// 1901
		run: run,
		// 1902
		hit: hit,
		// 1903
		jump: jump,
		dodge: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		// 1913
		attack: attack,
		big: attack,
		// 1914
		land: land,
		// 1915
		dead: dead,
		// 1916
		sleep: sleep,
		// 1917
		cast: cast,
		shoot: cast,
		// 1919
		counter: counter
	}
};
