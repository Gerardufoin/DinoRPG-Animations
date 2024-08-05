// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { stand } from './animations/stand.js';
import { parts as parts_barche } from '../barche/parts.js';
import { parts } from './parts.js';

// Symbol 2749
export const grizo2 = {
	name: 'grizo2',
	// Symbol 2750
	width: 4.147,
	height: 4.468,
	transforms: [
		// 4089
		{
			tx: -87.65,
			ty: -183.05,
			a: 1.088,
			d: 1.088,
			brightness: -10,
			contrast: 15,
			saturation: -3
		},
		// Adjust
		{
			ty: -14.3
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -10.9,
			a: 4.318,
			d: 1.462
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	masks: {
		atk: 'atk_mask'
	},
	parts: {
		// 2657
		l_leg: parts.leg,
		// 2657-1
		r_leg: parts.leg,
		// 2727
		l_hair: parts.lower_hair,
		// 2729
		u_hair: parts.upper_hair,
		// 2731
		tail: parts.tail,
		// 2733
		body: parts.body,
		// 2735
		arms: parts.arms,
		// 2737
		b_hair: parts.back_hair,
		// 2739
		head: parts.head,
		// 2741
		beard: parts.beard,
		// 2677 (764)
		atk_s: parts_barche.attack_start,
		// 2697coule
		atk: parts.beam,
		// 2699 (788)
		atk_e_1: parts_barche.attack_end_1,
		// 2700 (790)
		atk_e_2: parts_barche.attack_end_2,
		// 2701 (792)
		atk_e_3: parts_barche.attack_end_3,
		// 2702 (794)
		atk_e_4: parts_barche.attack_end_4,
		// 2703 (796)
		atk_e_5: parts_barche.attack_end_5,
		// 2745 (797)
		atk_e_6: parts_barche.attack_end_6,
		// 2746 (798)
		atk_e_7: parts_barche.attack_end_7,
		// 799
		atk_e_8: parts_barche.attack_end_8,
		// 2744
		atk_mask: parts.beam_mask
	},
	animations: {
		// guard, release, ill, walk, run, dodge, jumpDown, fly, jump, fall, land, dead, sleep same as stand
		// 2742
		stand: stand,
		// 2743
		hit: hit,
		// 2747
		attack: attack,
		superattack: attack,
		big: attack
	}
};
