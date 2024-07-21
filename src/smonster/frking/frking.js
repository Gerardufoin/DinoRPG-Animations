// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1749
export const frking = {
	name: 'frking',
	// Symbol 82
	width: 1.339,
	height: 1.551,
	transforms: [
		// 4089
		{
			ty: 0.05,
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
	masks: {
		mouth: 'mask',
		b_t_lips: 'mask'
	},
	parts: {
		// 1572
		mouth: parts.mouth,
		// 1617
		juice: parts.juice,
		// 1701
		b_leaf_1: parts.back_leaf_1,
		// 1703
		b_leaf_2: parts.back_leaf_2,
		// 1705
		body: parts.body,
		// 1707
		beard: parts.beard,
		// 1709
		lips: parts.lips,
		// 1710
		mask: parts.mask,
		// 1712
		b_t_lips: parts.back_top_lips,
		// 1714
		t_lips: parts.top_lips,
		// 1716
		eyes_closed: parts.eyes_closed,
		// 1718
		l_eye: parts.eye,
		// 1718-1
		r_eye: parts.eye,
		// 1719
		eyes: parts.eyes,
		// 1721
		nose: parts.nose,
		// 1723
		f_leaf_1: parts.front_leaf_1,
		// 1725
		f_leaf_2: parts.front_leaf_2,
		// 1727
		f_leaf_3: parts.front_leaf_3,
		// 1729
		f_leaf_4: parts.front_leaf_4,
		// 1731
		f_leaf_5: parts.front_leaf_5,
		// 1733
		f_leaf_6: parts.front_leaf_6,
		// 1735
		f_leaf_7: parts.front_leaf_7,
		// 1742
		atk_mask: parts.attack_mask,
		// 1743
		leaves: parts.leaves
	},
	animations: {
		// guard, release, ill, cast, sleep same as stand
		// 1736
		stand: stand,
		// 1737
		walk: walk,
		// 1738
		run: run,
		// 1739
		hit: hit,
		// 1740
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1744
		attack: attack,
		big: attack,
		counter: attack,
		// 1745
		land: land,
		// 1747
		dead: dead
	}
};
