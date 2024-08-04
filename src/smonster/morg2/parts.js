// @ts-check
import { ref } from '../references.js';
import { morg2_beam_attack } from './animations/beam.js';

export const parts = {
	// 2657
	back_leg: [
		{
			ref: ref.morg2.back_leg
		}
	],
	// 2660
	front_foot: [
		{
			ref: ref.morg2.front_foot,
			transform: {
				tx: 4.95,
				ty: 77.9
			}
		}
	],
	// 2662
	front_bottom_leg: [
		{
			ref: ref.morg2.front_bottom_leg
		}
	],
	// 2664
	front_top_leg: [
		{
			ref: ref.morg2.front_top_leg
		}
	],
	// 2666
	lower_body: [
		{
			ref: ref.morg2.lower_body
		}
	],
	// 2668
	upper_body: [
		{
			ref: ref.morg2.upper_body
		}
	],
	// 2670
	jaw: [
		{
			ref: ref.morg2.jaw
		}
	],
	// 2672
	head: [
		{
			ref: ref.morg2.head
		}
	],
	// 2697coule
	beam: [morg2_beam_attack],
	// 2708
	blood_1: [
		{
			ref: ref.morg2.blood_1
		}
	],
	// 2709
	blood_2: [
		{
			ref: ref.morg2.blood_2
		}
	],
	// 2710
	blood_3: [
		{
			ref: ref.morg2.blood_3
		}
	],
	// 2712
	blood_4: [
		{
			ref: ref.morg2.blood_4
		}
	],
	// 2714
	aura: [
		{
			ref: ref.morg2.aura,
			blur: {
				x: 2,
				y: 2
			}
		}
	],
	// 2715
	morph_fx_1: [
		{
			ref: ref.morg2.morph_fx_1
		}
	],
	// 2720
	morph_fx_2: [
		{
			ref: ref.morg2.morph_fx_2
		}
	],
	// 2722
	morph_fx_3: [
		{
			ref: ref.morg2.morph_fx_3
		}
	]
};
