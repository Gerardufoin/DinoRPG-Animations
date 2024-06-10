// @ts-check
import { ref } from '../references_small.js';

export const parts_small = {
	// 339
	right_ear: [
		// 338
		{
			colorIdx: 0,
			ref: ref.castivore.right_ear
		}
	],
	// 346
	body_back: [
		{
			partIdx: 3,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
			parts: [
				// 341
				{
					colorIdx: 1,
					ref: ref.castivore.body_smooth_end,
					transform: {
						tx: 7.5,
						ty: 2.8
					}
				},
				// 345
				{
					colorIdx: 1,
					ref: ref.castivore.body_curl_end,
					transform: {
						tx: 7.5,
						ty: 2.8
					}
				}
			]
		},
		{
			partIdx: 3,
			frames: [-1, -1, 0, 0, 0, -1, -1, -1, -1, -1],
			parts: [
				// 343
				{
					colorIdx: 1,
					ref: ref.castivore.body_hair_straight,
					transform: {
						tx: 13.75,
						ty: 8.0,
						a: 0.988,
						d: 1.189,
						b: -0.148,
						c: 0.605
					}
				}
			]
		}
	],
	// 353
	body_front: [
		{
			partIdx: 3,
			frames: [0, 0, 1, 1, 1, -1, -1, -1, 2, 2],
			parts: [
				// 348
				{
					colorIdx: 1,
					ref: ref.castivore.hair_roll,
					transform: {
						tx: 3.9,
						ty: 1.1,
						a: 1.252,
						d: 1.252,
						b: 0.223,
						c: -0.223
					}
				},
				// 343
				{
					colorIdx: 1,
					ref: ref.castivore.body_hair_straight,
					transform: {
						tx: 1.3,
						ty: 4.95,
						a: -0.728,
						d: 0.984,
						b: -0.129,
						c: -0.175
					}
				},
				// 352
				{
					colorIdx: 1,
					ref: ref.castivore.body_curl,
					transform: {
						tx: 7.5,
						ty: 2.8
					}
				}
			]
		},
		{
			partIdx: 3,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, -1, -1],
			parts: [
				// 350
				{
					colorIdx: 1,
					ref: ref.castivore.body_smooth,
					transform: {
						tx: 7.5,
						ty: 2.8
					}
				}
			]
		},
		{
			partIdx: 3,
			frames: [0, 0, 1, 1, 1, -1, -1, -1, -1, -1],
			parts: [
				// 348
				{
					colorIdx: 1,
					ref: ref.castivore.hair_roll,
					transform: {
						tx: 13.7,
						ty: 6.7,
						a: 1.252,
						d: 1.252,
						b: 0.223,
						c: -0.223
					}
				},
				// 343
				{
					colorIdx: 1,
					ref: ref.castivore.body_hair_straight,
					transform: {
						tx: 12.5,
						ty: 8.95
					}
				}
			]
		}
	],
	// 356
	back: [
		{
			partIdx: 8,
			frames: [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
			parts: [
				// 355
				{
					colorIdx: 0,
					ref: ref.castivore.back_hairless,
					transform: {
						tx: 0.1,
						ty: 0.0
					}
				}
			]
		}
	],
	// 358
	nose: [
		{
			ref: ref.castivore.nose,
			colorOffset: {
				r: -46,
				g: -87,
				B: -82
			}
		}
	],
	// 367
	hair: [
		{
			partIdx: 6,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
			parts: [
				// 360
				{
					colorIdx: 1,
					ref: ref.castivore.eyes_hair,
					transform: {
						tx: 0.0,
						ty: 0.05
					}
				},
				// 362
				{
					colorIdx: 0,
					ref: ref.castivore.eyes,
					transform: {
						tx: -0.4,
						ty: 0.15
					}
				}
			]
		},
		{
			partIdx: 6,
			frames: [-1, -1, -1, -1, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3],
			parts: [
				// 364
				{
					colorIdx: 1,
					ref: ref.castivore.hair_spikes,
					transform: {
						tx: 0.2,
						ty: -2.2,
						a: 1.109,
						d: 1.109
					}
				},
				// 364
				{
					colorIdx: 2,
					ref: ref.castivore.hair_spikes,
					transform: {
						tx: 0.2,
						ty: -2.2,
						a: 1.122,
						d: 1.122
					}
				},
				// 366
				{
					colorIdx: 1,
					ref: ref.castivore.hair_smooth,
					transform: {
						tx: 1.05,
						ty: -0.1
					}
				},
				// 348
				{
					colorIdx: 1,
					ref: ref.castivore.hair_roll,
					transform: {
						tx: 0.4,
						ty: -1.6,
						a: 0.48,
						d: 0.504,
						b: 0.04,
						c: -0.042
					}
				}
			]
		}
	],
	// 370
	left_ear: [
		// 369
		{
			colorIdx: 0,
			ref: ref.castivore.left_ear
		}
	],
	// 383
	mouth: [
		{
			partIdx: 4,
			frames: [0, 0, 1, 2, -1, 3, 4, 5, 6, 7, 3],
			parts: [
				// 371
				{
					ref: ref.castivore.mouth_pointy_teeth,
					transform: {
						tx: 0.2,
						ty: -0.5
					}
				},
				// 371
				{
					ref: ref.castivore.mouth_pointy_teeth
				},
				// 375
				{
					colorIdx: 1,
					ref: ref.castivore.mouth_moustache,
					transform: {
						tx: 0.35,
						ty: -0.4
					}
				},
				// 377
				{
					ref: ref.castivore.mouth_two_teeth,
					transform: {
						tx: -0.35,
						ty: 0.3
					}
				},
				// 378
				{
					ref: ref.castivore.mouth_four_teeth
				},
				// 380
				{
					colorIdx: 0,
					ref: ref.castivore.mouth_lips,
					transform: {
						tx: 0.2,
						ty: 0.15
					}
				},
				// 382
				{
					colorIdx: 0,
					ref: ref.castivore.mouth_deadpan,
					transform: {
						tx: 0.0,
						ty: 1.1
					}
				},
				// 375
				{
					colorIdx: 1,
					ref: ref.castivore.mouth_moustache,
					transform: {
						tx: 0.35,
						ty: -0.4,
						a: 1.486,
						d: 0.99,
						b: 0.203,
						c: -0.135
					}
				}
			]
		},
		{
			partIdx: 4,
			frames: [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
			parts: [
				// 373
				{
					colorIdx: 0,
					ref: ref.castivore.mouth_base,
					transform: {
						tx: 0.0,
						ty: -0.25
					}
				}
			]
		}
	],
	// 387
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				[
					{
						colorIdx: 1,
						ref: ref.castivore.special_hair
					},
					{
						ref: ref.castivore.special_bow
					}
				]
			]
		}
	]
};
