// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { cast } from './animations/cast.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1785
export const rapaca = {
	name: 'rapaca',
	// Symbol 82
	width: 2.849,
	height: 1.852,
	transforms: [
		// 4089
		{
			tx: 7.3,
			ty: -25,
			a: 0.677,
			d: 0.677
		},
		// 1785
		{
			tx: -4.35,
			a: 0.9,
			d: 0.9
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
		// 1751
		tail_end: parts.tail_end,
		// 1753
		tail: parts.tail,
		// 1755
		body: parts.body,
		// 1757
		r_leg: parts.right_leg,
		// 1759
		l_leg: parts.left_leg,
		// 1761
		r_t_wing: parts.right_top_wing,
		// 1763
		r_b_wing: parts.right_bottom_wing,
		// 1765
		l_t_wing: parts.left_top_wing,
		// 1767
		l_b_wing: parts.left_bottom_wing,
		// 1781
		head_sleep: parts.head_sleep,
		// 1771
		head: parts.head,
		// 1771
		head_stand: parts.head_stand,
		// 1771
		head_hit: parts.head_hit,
		// 1771
		head_dead: parts.head_dead
	},
	animations: {
		// release, ill same as stand
		// 1772
		stand: stand,
		// 1773
		walk: walk,
		// 1774
		run: run,
		// 1775
		hit: hit,
		// 1776
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1777
		attack: attack,
		big: attack,
		counter: attack,
		// 1778
		land: land,
		// 1779
		dead: dead,
		// 1782
		sleep: sleep,
		// 1783
		cast: cast,
		shoot: cast
	}
};
