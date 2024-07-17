// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 1510
export const mosqui = {
	name: 'mosqui',
	// Symbol 82
	width: 1.312,
	height: 1.139,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: 0,
			a: 1.004,
			d: 0.994,
			brightness: -15,
			contrast: 11
		},
		// 1510
		{
			tx: -3.5,
			ty: -12.6,
			a: 0.665,
			d: 0.665
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
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
		// 1493
		leg_sgm_12: parts.leg_segment,
		// 1493-1
		leg_sgm_11: parts.leg_segment,
		// 1493-10
		leg_sgm_10: parts.leg_segment,
		// 1493-11
		leg_sgm_9: parts.leg_segment,
		// 1493-2
		leg_sgm_8: parts.leg_segment,
		// 1493-3
		leg_sgm_7: parts.leg_segment,
		// 1493-4
		leg_sgm_6: parts.leg_segment,
		// 1493-5
		leg_sgm_5: parts.leg_segment,
		// 1493-6
		leg_sgm_4: parts.leg_segment,
		// 1493-7
		leg_sgm_3: parts.leg_segment,
		// 1493-8
		leg_sgm_2: parts.leg_segment,
		// 1493-9
		leg_sgm_1: parts.leg_segment,
		// 1494
		l_legs: parts.legs,
		// 1494-1
		r_legs: parts.legs,
		// 1496
		butt: parts.butt,
		// 1498
		body: parts.body,
		// 1500
		head: parts.head,
		// 1503
		wings_hit: parts.wings_hit,
		// 1507
		l_wing_dead: parts.wing_dead,
		// 1507-1
		r_wing_dead: parts.wing_dead,
		// 55
		l_wing: parts.wing,
		// 55-1
		r_wing: parts.wing
	},
	animations: {
		// guard, release, ill, cast, walk, land, sleep same as stand
		// 1501
		stand: stand,
		// 1502
		run: run,
		// 1504
		hit: hit,
		jump: hit,
		jumpDown: hit,
		fall: hit,
		fly: hit,
		dodge: hit,
		// 1505
		attack: attack,
		big: attack,
		counter: attack,
		// 1508
		dead: dead
	}
};
