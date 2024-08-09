// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';
import { roking_eye_glow, roking_head_dead, roking_head_hit } from './animations/head.js';

export const parts = {
	// 3256
	body: [
		{
			ref: ref.roking.body
		}
	],
	// 3258
	shadow: [
		{
			ref: ref.roking.shadow,
			blend: BLEND_MODES.MULTIPLY
		}
	],
	// 3267
	head: [
		// 3259
		{
			ref: ref.roking.face
		},
		// 3261
		{
			ref: ref.roking.mouth,
			transform: {
				tx: 42.3,
				ty: 70.45,
				a: 0.5,
				d: 0.5
			}
		},
		// 3263
		{
			ref: ref.roking.right_eye,
			transform: {
				tx: 41.2,
				ty: 62.65
			},
			glow: roking_eye_glow
		},
		// 3265
		{
			ref: ref.roking.left_eye,
			transform: {
				tx: 68.45,
				ty: 65.1
			},
			glow: roking_eye_glow
		}
	],
	// 3267head
	head_hit: [roking_head_hit],
	// 3267head
	head_sleep: [
		// 3259
		{
			ref: ref.roking.face
		},
		// 3261
		{
			ref: ref.roking.mouth,
			transform: {
				tx: 69.6,
				ty: 84.8,
				a: -0.5,
				d: -0.5
			}
		}
	],
	// 3267head
	head_dead: [roking_head_dead],
	// 3273
	attack_smear_1: [
		{
			ref: ref.roking.attack_smear_1
		}
	],
	// 3274
	attack_smear_2: [
		{
			ref: ref.roking.attack_smear_2
		}
	],
	// 3275
	attack_smear_3: [
		{
			ref: ref.roking.attack_smear_3
		}
	],
	// 3276
	attack_smear_4: [
		{
			ref: ref.roking.attack_smear_4
		}
	],
	// 3277
	attack_smear_5: [
		{
			ref: ref.roking.attack_smear_5
		}
	],
	// 3278
	attack_smear_6: [
		{
			ref: ref.roking.attack_smear_6
		}
	],
	// 3281
	crack_1: [
		{
			ref: ref.roking.crack_1
		}
	],
	// 3282
	crack_2: [
		{
			ref: ref.roking.crack_2
		}
	],
	// 3283
	crack_3: [
		{
			ref: ref.roking.crack_3
		}
	],
	// 3284
	crack_4: [
		{
			ref: ref.roking.crack_4
		}
	],
	// 3285
	crack_5: [
		{
			ref: ref.roking.crack_5
		}
	],
	// 3286
	crack_6: [
		{
			ref: ref.roking.crack_6
		}
	],
	// 3287
	crack_7: [
		{
			ref: ref.roking.crack_7
		}
	],
	// 3289
	right_body: [
		{
			ref: ref.roking.right_body
		}
	],
	// 3292
	inside: [
		{
			ref: ref.roking.inside,
			colorAdjust: {
				contrast: 21,
				saturation: 30
			},
			// Glow should be only on the Y axis, but not doable with current GlowFilter shader
			glow: {
				distance: 10,
				color: 0xfeff01,
				quality: 1,
				strength: 2
			}
		}
	],
	// 3294
	left_body: [
		{
			ref: ref.roking.left_body
		}
	],
	// 3295
	crack_8: [
		{
			ref: ref.roking.crack_8
		}
	],
	// 3296
	crack_9: [
		{
			ref: ref.roking.crack_9
		}
	],
	// 3297
	crack_10: [
		{
			ref: ref.roking.crack_10
		}
	],
	// 3298
	crack_11: [
		{
			ref: ref.roking.crack_11
		}
	],
	// 3299
	crack_12: [
		{
			ref: ref.roking.crack_12
		}
	],
	// 3300
	crack_13: [
		{
			ref: ref.roking.crack_13
		}
	],
	// 3301
	crack_14: [
		{
			ref: ref.roking.crack_14
		}
	],
	// 3302
	crack_15: [
		{
			ref: ref.roking.crack_15
		}
	]
};
