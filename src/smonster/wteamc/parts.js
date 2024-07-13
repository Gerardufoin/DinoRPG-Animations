// @ts-check
import { ref } from '../references.js';
import { ref as ref_dino } from '../../dino/references_small.js';
import { captain_down, captain_stand } from './animations/captain.js';

export const parts = {
	// 1124 p7
	wanwan_tail: [
		{
			ref: ref_dino.wanwan.tail,
			transform: {
				tx: -1.9,
				ty: 0.45
			}
		}
	],
	// 1127 p6
	wanwan_ear: [
		{
			ref: ref_dino.wanwan.ear,
			transform: {
				tx: 0.25
			}
		}
	],
	// 1132 p8
	wanwan_leg: [
		// 1129 (732)
		{
			ref: ref_dino.wanwan.leg,
			transform: {
				tx: 0.05
			}
		},
		// 1131 (734)
		{
			ref: ref_dino.wanwan.leg_fur,
			transform: {
				tx: 0.75,
				ty: 1.0
			}
		}
	],
	// 1135
	wanwan_lower_body: [
		// 1134 (738)
		{
			ref: ref_dino.wanwan.lower_body
		}
	],
	// 1138
	wanwan_upper_body: [
		// 1337 (741)
		{
			ref: ref_dino.wanwan.upper_body,
			transform: {
				tx: 16.45,
				ty: 1.45
			}
		}
	],
	// 1141
	wanwan_head: [
		// 1140 (744)
		{
			ref: ref_dino.wanwan.head
		}
	],
	// 1147 p3
	wanwan_eye: [
		// 1146
		{
			transform: {
				a: 0.793,
				d: 0.793
			},
			parts: [
				[
					// 745
					{
						ref: ref_dino.wanwan.eye
					},
					// 747
					{
						ref: ref_dino.wanwan.eyeball,
						transform: {
							tx: -0.05,
							ty: -0.1
						}
					},
					// 748
					{
						ref: ref_dino.wanwan.eye_pupil
					}
				]
			]
		}
	],
	// 1149 p9
	wanwan_marks: [
		{
			ref: ref.wteamc.wanwan_head_markings
		}
	],
	// 1151 col1
	wanwan_nose: [
		{
			ref: ref.wteamc.wanwan_nose
		}
	],
	// 1155
	captain_cape: [
		{
			ref: ref.wteamc.cape,
			colorOffset: {
				r: -62,
				g: -77
			}
		}
	],
	// 1175 sub / 1178 sub
	captain: [captain_stand],
	// 1181 sub
	captain_down: [captain_down]
};
