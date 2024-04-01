// @ts-check
import { ref as ref_sdino } from '../../sdino/references.js';
import { ref } from '../references.js';
import { barche_mouth } from './animations/mouth.js';
import { barche_beam_attack, beam_glow } from './animations/beam/attack.js';

export const parts = {
	// 740
	spike: [
		{
			ref: ref.barche.spike
		}
	],
	// 742
	back: [
		{
			ref: ref.barche.back
		}
	],
	// 744
	right_leg: [
		{
			ref: ref.barche.right_leg
		}
	],
	// 746
	body: [
		{
			ref: ref.barche.body
		}
	],
	// 748
	left_leg: [
		{
			ref: ref.barche.left_leg
		}
	],
	// 753
	mouth_back: [barche_mouth],
	// 755
	mouth_front: [
		{
			ref: ref.barche.mouth_front
		}
	],
	// 757
	head: [
		{
			ref: ref.barche.head
		}
	],
	// 764
	attack_start: [
		{
			ref: ref.barche.attack_start,
			glow: beam_glow
		}
	],
	// 786coule
	attack: [barche_beam_attack],
	// 788
	attack_end_1: [
		{
			ref: ref.barche.attack_end_1,
			glow: beam_glow
		}
	],
	// 790
	attack_end_2: [
		{
			ref: ref.barche.attack_end_2,
			glow: beam_glow
		}
	],
	// 792
	attack_end_3: [
		{
			ref: ref.barche.attack_end_3,
			glow: beam_glow
		}
	],
	// 794
	attack_end_4: [
		{
			ref: ref.barche.attack_end_4,
			glow: beam_glow
		}
	],
	// 796
	attack_end_5: [
		{
			ref: ref.barche.attack_end_5,
			glow: beam_glow
		}
	],
	// 797
	attack_end_6: [
		{
			ref: ref.barche.attack_end_6
		}
	],
	// 798
	attack_end_7: [
		{
			ref: ref.barche.attack_end_7
		}
	],
	// 799
	attack_end_8: [
		{
			ref: ref.barche.attack_end_8
		}
	],
	// 59_s
	shade: [
		{
			ref: ref_sdino.fx.shadow,
			blur: {
				x: 2,
				y: 2
			}
		}
	]
};
