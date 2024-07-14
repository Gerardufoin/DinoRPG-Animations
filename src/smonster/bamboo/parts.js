// @ts-check
import { ref } from '../references.js';

export const parts = {
	// 1225
	back_hair: [
		{
			ref: ref.bamboo.back_hair,
			transform: {
				tx: 0.05,
				ty: 0.1
			},
			colorOffset: {
				r: -87,
				g: -148,
				b: -169
			}
		}
	],
	// 1228
	front_hair: [
		{
			ref: ref.bamboo.front_hair,
			colorOffset: {
				r: -87,
				g: -148,
				b: -169
			}
		}
	],
	// 1231
	upper_body: [
		{
			ref: ref.bamboo.upper_body,
			colorOffset: {
				r: -67,
				g: -36,
				b: -148
			}
		}
	],
	// 1233
	right_eye: [
		{
			ref: ref.bamboo.right_eye
		}
	],
	// 1237
	lower_body: [
		// 1235
		{
			ref: ref.bamboo.lower_body,
			colorOffset: {
				r: -67,
				g: -36,
				b: -148
			}
		},
		// 1236
		{
			ref: ref.bamboo.lower_body_highlight
		}
	],
	// 1239
	left_eye: [
		{
			ref: ref.bamboo.left_eye
		}
	],
	// 1242
	root: [
		// 1240
		{
			ref: ref.bamboo.root,
			transform: {
				tx: 0.2,
				ty: 0
			},
			colorOffset: {
				r: -67,
				g: -36,
				b: -148
			}
		},
		// 1241
		{
			ref: ref.bamboo.root_highlight
		}
	],
	// 1248
	atk_smear_1: [
		{
			ref: ref.bamboo.attack_smear_1
		}
	],
	// 1249
	atk_smear_2: [
		{
			ref: ref.bamboo.attack_smear_2
		}
	]
};
