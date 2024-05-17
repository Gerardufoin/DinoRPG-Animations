// @ts-check
import { ref as ref_sdino } from '../../sdino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 804
export const barche = {
	name: 'barche',
	// Symbol 82
	width: 3.218,
	height: 2.092,
	transforms: [
		// 4089
		{
			tx: 17.95,
			ty: -15.2,
			a: 0.677,
			d: 0.677,
			brightness: -41,
			contrast: 20
		},
		// 804
		{
			tx: -7
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 6,
		color: 0xff9900,
		quality: 0.5,
		strength: 1
	},
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
		sp_1: parts.spike,
		sp_2: parts.spike,
		sp_3: parts.spike,
		sp_4: parts.spike,
		sp_5: parts.spike,
		sp_6: parts.spike,
		sp_7: parts.spike,
		sp_8: parts.spike,
		sp_9: parts.spike,
		sp_10: parts.spike,
		back: parts.back,
		r_leg: parts.right_leg,
		body: parts.body,
		l_leg: parts.left_leg,
		mouth_b: parts.mouth_back,
		mouth_f: parts.mouth_front,
		head: parts.head,
		atk_s: parts.attack_start,
		atk: parts.attack,
		atk_e_1: parts.attack_end_1,
		atk_e_2: parts.attack_end_2,
		atk_e_3: parts.attack_end_3,
		atk_e_4: parts.attack_end_4,
		atk_e_5: parts.attack_end_5,
		atk_e_6: parts.attack_end_6,
		atk_e_7: parts.attack_end_7,
		atk_e_8: parts.attack_end_8,
		shade: parts.shade
	},
	animations: {
		// sleep, release, ill, and cast same as stand
		// 758
		stand: stand,
		// 759
		walk: walk,
		// 760
		run: run,
		// 761
		hit: hit,
		// 762
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 800
		attack: attack,
		big: attack,
		counter: attack,
		// 801
		land: land,
		// 802
		dead: dead
	}
};
