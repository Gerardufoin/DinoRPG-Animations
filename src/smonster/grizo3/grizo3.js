// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { parts as parts_barche } from '../barche/parts.js';
import { parts as parts_grizo2 } from '../grizo2/parts.js';
import { parts } from './parts.js';

// Symbol 2774
export const grizo3 = {
	name: 'grizo3',
	// Symbol 2750
	width: 5.732,
	height: 8.023,
	transforms: [
		// 4089
		{
			tx: 118.4,
			ty: -310,
			a: 2.181,
			d: 2.181,
			brightness: -10,
			contrast: 20,
			saturation: -3
		}
	],
	glow: {
		distance: 5,
		color: 0x660000,
		quality: 1,
		strength: 1
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -2.8,
			a: 6.745,
			d: 2.284
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	masks: {
		atk: 'atk_mask'
	},
	parts: {
		// 2727
		l_hair: parts_grizo2.lower_hair,
		// 2729
		u_hair: parts_grizo2.upper_hair,
		// 2737
		b_hair: parts_grizo2.back_hair,
		// 2741
		beard: parts_grizo2.beard,
		// 2677 (764)
		atk_s: parts_barche.attack_start,
		// 2697coule
		atk: parts_grizo2.beam,
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
		// 2752
		r_hand: parts.right_hand,
		// 2754
		l_b_arm: parts.bottom_arm,
		// 2754-1
		r_b_arm: parts.bottom_arm,
		// 2756
		l_t_arm: parts.top_arm,
		// 2756-1
		r_t_arm: parts.top_arm,
		// 2758
		l_shoulder: parts.shoulder,
		// 2758-1
		r_shoulder: parts.shoulder,
		// 2760
		body: parts.body,
		// 2762
		l_hand: parts.left_hand,
		// 2764
		head: parts.head,
		// 2767
		atk_mask: parts.beam_mask,
		// 2771
		aura_1: parts.aura,
		// 2771-1
		aura_2: parts.aura
	},
	animations: {
		// guard, release, ill, walk, run, dodge, jumpDown, fly, jump, fall, sleep same as stand
		// 2765
		stand: stand,
		// 2766
		hit: hit,
		// 2768
		attack: attack,
		big: attack,
		superattack: attack,
		// 2769
		land: land,
		// 2772
		dead: dead
	}
};
