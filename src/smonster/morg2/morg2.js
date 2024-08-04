// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { land } from './animations/land.js';
import { morph } from './animations/morph.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';
import { parts as parts_morg } from '../morg/parts.js';
import { parts as parts_barche } from '../barche/parts.js';

// Symbol 2725
export const morg2 = {
	name: 'morg2',
	// Symbol 82
	width: 6.834,
	height: 2.794,
	transforms: [
		// 4089
		{
			tx: -150.8,
			ty: -114.9,
			a: 1.122,
			d: 1.122,
			brightness: -25,
			contrast: 19,
			saturation: -2
		},
		// Adjust
		{
			ty: -17.9
		}
	],
	glow: {
		distance: 2,
		color: 0xa61515,
		quality: 1,
		strength: 1
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -12.7,
			a: 5.721,
			d: 1.462
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1789
		r_foot: parts_morg.right_foot,
		// 1791
		r_t_leg: parts_morg.right_top_leg,
		// 1793
		r_b_leg: parts_morg.right_bottom_leg,
		// 1795
		l_foot: parts_morg.left_foot,
		// 1797
		l_t_leg: parts_morg.left_top_leg,
		// 1797-1
		r_t_leg_morph: parts_morg.left_top_leg,
		// 1799
		l_b_leg: parts_morg.left_bottom_leg,
		// 1801
		r_t_arm: parts_morg.right_top_arm,
		// 1803
		r_b_arm: parts_morg.right_bottom_arm,
		// 1811
		body: parts_morg.body,
		// 1813
		head: parts_morg.head,
		// 1815
		l_t_arm: parts_morg.left_top_arm,
		// 1817
		l_b_arm: parts_morg.left_bottom_arm,
		// 1819
		l_hand: parts_morg.left_hand,
		// 1819-1
		r_hand: parts_morg.left_hand,
		// 2657
		mr_l_b_leg: parts.back_leg,
		// 2657-1
		mr_r_b_leg: parts.back_leg,
		// 2660
		mr_l_f_foot: parts.front_foot,
		// 2660-1
		mr_r_f_foot: parts.front_foot,
		// 2662
		mr_l_f_b_leg: parts.front_bottom_leg,
		// 2662-1
		mr_r_f_b_leg: parts.front_bottom_leg,
		// 2664
		mr_l_f_t_leg: parts.front_top_leg,
		// 2664-1
		mr_r_f_t_leg: parts.front_top_leg,
		// 2666
		mr_l_body: parts.lower_body,
		// 2668
		mr_u_body: parts.upper_body,
		// 2670
		mr_jaw: parts.jaw,
		// 2672
		mr_head: parts.head,
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
		// 797
		atk_e_6: parts_barche.attack_end_6,
		// 798
		atk_e_7: parts_barche.attack_end_7,
		// 799
		atk_e_8: parts_barche.attack_end_8,
		// 2706
		tail: parts_morg.cut_tail,
		// 2708
		blood_1: parts.blood_1,
		// 2709
		blood_2: parts.blood_2,
		// 2710
		blood_3: parts.blood_3,
		// 2712
		blood_4: parts.blood_4,
		// 2714
		aura_1: parts.aura,
		// 2714-1
		aura_2: parts.aura,
		// 2714-2
		aura_3: parts.aura,
		// 2715
		morph_fx_1: parts.morph_fx_1,
		// 2717
		head_dead: parts_morg.head_dead,
		// 2720
		morph_fx_2: parts.morph_fx_2,
		// 2722
		morph_fx_3: parts.morph_fx_3
	},
	animations: {
		// guard, release, ill, walk, run, dodge, jumpDown, fly, jump, sleep same as stand
		// 2674
		stand: stand,
		// 2675
		hit: hit,
		// 2704
		attack: attack,
		big: attack,
		superattack: attack,
		counter: attack,
		// 2707
		land: land,
		fall: land,
		// 2718
		dead: dead,
		// 2723
		morph: morph
	}
};
