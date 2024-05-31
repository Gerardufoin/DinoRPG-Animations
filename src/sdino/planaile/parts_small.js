// @ts-check
import { ref } from '../references_small.js';

export const parts_small = {
	// 288
	right_arm: [
		// 287
		{
			colorIdx: 1,
			ref: ref.planaile.right_arm
		}
	],
	// 294
	body: [
		{
			// 291
			special: true,
			colorIdx: 2,
			ref: ref.planaile.body_special,
			transform: {
				tx: -2.0,
				ty: -14.0
			}
		},
		{
			partIdx: 9,
			frames: [0, 0, 1],
			parts: [
				// 293
				{
					colorIdx: 2,
					ref: ref.planaile.body
				},
				// 293
				{
					colorIdx: 1,
					ref: ref.planaile.body
				}
			]
		}
	],
	// 297
	head: [
		// 296
		{
			colorIdx: 1,
			ref: ref.planaile.head,
			transform: {
				tx: -0.55,
				ty: 0.1
			}
		}
	],
	// 305
	ears: [
		{
			partIdx: 4,
			frames: [0, 1, 1, 2],
			parts: [
				// 299
				{
					colorIdx: 0,
					ref: ref.planaile.ears_round,
					transform: {
						tx: -0.9,
						ty: 0.9
					}
				},
				// 304
				{
					colorIdx: 0,
					ref: ref.planaile.ears_pointy
				},
				// 304
				{
					colorIdx: 0,
					ref: ref.planaile.ears_pointy,
					transform: {
						tx: 0.0,
						ty: -0.6,
						a: 0.891,
						d: 1.128
					}
				}
			]
		},
		// 302
		{
			special: true,
			colorIdx: 2,
			ref: ref.planaile.ears_special,
			transform: {
				tx: -9.35,
				ty: -10.25
			}
		}
	],
	// 308
	left_leg: [
		// 307
		{
			colorIdx: 0,
			ref: ref.planaile.left_leg,
			transform: {
				tx: 0.0,
				ty: 0.05
			}
		}
	],
	// 310
	left_foot: [
		{
			ref: ref.planaile.left_foot
		}
	],
	// 312
	left_hand: [
		{
			ref: ref.planaile.left_hand
		}
	],
	// 315
	left_arm: [
		// 314
		{
			colorIdx: 0,
			ref: ref.planaile.left_arm
		}
	],
	// 317
	right_hand: [
		{
			ref: ref.planaile.right_hand
		}
	],
	// 323
	right_eye: [
		// 319
		{
			special: true,
			ref: ref.planaile.eye_special,
			transform: {
				tx: -2.3,
				ty: -4.3,
				a: 0.403,
				d: 0.907
			}
		},
		{
			partIdx: 8,
			frames: [
				0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
			],
			parts: [
				// 321
				{
					ref: ref.planaile.nose,
					colorOffset: {
						r: -108,
						g: -148,
						b: -153
					}
				},
				// 321
				{
					ref: ref.planaile.nose,
					colorOffset: {
						r: -133,
						g: -87,
						b: 20
					}
				}
			]
		},
		// 322
		{
			ref: ref.planaile.nose_highlight
		}
	],
	// 326
	left_eye: [
		{
			partIdx: 1,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			parts: [
				// 324
				{
					ref: ref.planaile.left_eye_white
				},
				// 325
				{
					ref: ref.planaile.left_eye_red
				}
			]
		},
		// 319
		{
			special: true,
			ref: ref.planaile.eye_special,
			transform: {
				tx: -3.5,
				ty: -2.85
			}
		}
	]
};
