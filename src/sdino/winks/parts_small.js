// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_small.js';

export const parts_small = {
	// 234
	right_leg_3: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2],
			parts: [
				// 233
				{
					colorIdx: 0,
					ref: ref.winks.leg,
					transform: {
						tx: 18.15,
						ty: 8.1,
						a: 0.925,
						d: 0.925,
						b: -0.379,
						c: 0.379
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 18.15,
						ty: 8.1,
						a: 0.925,
						d: 0.925,
						b: -0.379,
						c: 0.379
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 19.35,
						ty: 7.85,
						a: 0.468,
						d: 0.468,
						b: -0.356,
						c: 0.356
					}
				}
			]
		}
	],
	// 235
	right_leg_2: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2],
			parts: [
				// 233
				{
					colorIdx: 0,
					ref: ref.winks.leg,
					transform: {
						tx: 12.95,
						ty: 12.1,
						a: 0.992,
						d: 0.992,
						b: -0.126,
						c: 0.126
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 12.95,
						ty: 12.1,
						a: 0.992,
						d: 0.992,
						b: -0.126,
						c: 0.126
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 15.05,
						ty: 12.3,
						a: 0.462,
						d: 0.462,
						b: -0.352,
						c: 0.352
					}
				}
			]
		}
	],
	// 247
	leg_1: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3],
			parts: [
				// 233
				{
					colorIdx: 0,
					ref: ref.winks.leg,
					transform: {
						tx: 6.5,
						ty: 15.5,
						a: 0.944,
						d: 0.944,
						b: 0.327,
						c: -0.327
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 6.5,
						ty: 15.5,
						a: 0.944,
						d: 0.944,
						b: 0.327,
						c: -0.327
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 9.1,
						ty: 15.1,
						a: 0.55,
						d: 0.55,
						b: -0.106,
						c: 0.106
					}
				},
				// 237
				{
					colorIdx: 0,
					ref: ref.winks.pincer,
					transform: {
						tx: 9.204,
						ty: 12.827,
						a: 0.902,
						d: 0.902,
						b: 0.312,
						c: -0.312
					}
				}
			]
		}
	],
	// 268
	body: [
		{
			partIdx: 3,
			frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1],
			parts: [
				// 249
				{
					colorIdx: 0,
					ref: ref.winks.body,
					transform: {
						tx: -8.85,
						ty: -7.35
					}
				}
			]
		},
		{
			partIdx: 3,
			frames: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6],
			parts: [
				// 250
				{
					ref: ref.winks.body_shine
				},
				// 252
				{
					colorIdx: 0,
					ref: ref.winks.body_big_fold,
					transform: {
						tx: -5.6,
						ty: -7.55
					}
				},
				// 255
				{
					colorIdx: 0,
					ref: ref.winks.body_small_fold,
					transform: {
						tx: -4.45,
						ty: -8.6
					}
				},
				// 258
				{
					ref: ref.winks.body_spike,
					transform: {
						tx: -5.0,
						ty: -8.4,
						a: 0.807,
						d: 0.807
					},
					colorOffset: {
						r: -123,
						g: -143,
						b: -215
					}
				},
				// 258
				{
					colorIdx: 0,
					ref: ref.winks.body_spike,
					transform: {
						tx: -3.8,
						ty: -9.45,
						a: 0.807,
						d: 0.807
					}
				},
				// 262
				{
					colorIdx: 0,
					ref: ref.winks.body_blob,
					transform: {
						tx: -9.6,
						ty: -8.25
					}
				},
				// 262
				{
					colorIdx: 0,
					ref: ref.winks.body_blob,
					transform: {
						tx: -9.6,
						ty: -6.15,
						a: 1.0,
						d: 0.776
					}
				}
			]
		},
		{
			partIdx: 3,
			frames: [-1, -1, -1, 0, 0, 0, 1, 1, 1, 2, 3, 3, 3, -1, -1, 4, 4, 4, 5, 5, 5, 6, 6, 6],
			parts: [
				// 253
				{
					ref: ref.winks.body_big_fold_shine
				},
				// 256
				{
					ref: ref.winks.body_small_fold_shine
				},
				// 259
				{
					ref: ref.winks.body_mono_spike_shine
				},
				// 258
				{
					colorIdx: 0,
					ref: ref.winks.body_spike,
					transform: {
						tx: -6.6,
						ty: -3.4,
						a: 0.602,
						d: 0.602
					}
				},
				// 265
				{
					colorIdx: 2,
					ref: ref.winks.body_dots,
					blend: BLEND_MODES.MULTIPLY,
					transform: {
						tx: -0.65,
						ty: -4.85,
						a: 0.237,
						d: 0.206,
						b: -0.027,
						c: 0.024
					}
				},
				// 266
				{
					ref: ref.winks.body_speks
				},
				// 267
				{
					ref: ref.winks.body_small_spikes
				}
			]
		},
		{
			partIdx: 3,
			frames: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1],
			parts: [
				// 260
				{
					ref: ref.winks.body_dual_spikes_shine
				},
				// 263
				{
					ref: ref.winks.body_blob_shine
				}
			]
		}
	],
	// 271
	special: [
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 0,
					ref: ref.winks.special,
					transform: {
						tx: -0.2
					}
				}
			]
		}
	],
	// 234 -- Almost same as 274, only last transform changes
	left_leg_3: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2],
			parts: [
				// 233
				{
					colorIdx: 0,
					ref: ref.winks.leg,
					transform: {
						tx: 18.15,
						ty: 8.1,
						a: 0.925,
						d: 0.925,
						b: -0.379,
						c: 0.379
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 18.15,
						ty: 8.1,
						a: 0.925,
						d: 0.925,
						b: -0.379,
						c: 0.379
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 19.45,
						ty: 9.2,
						a: 0.468,
						d: 0.468,
						b: -0.356,
						c: 0.356
					}
				}
			]
		}
	],
	// 235 -- Almost same as 275, only last transform changes
	left_leg_2: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2],
			parts: [
				// 233
				{
					colorIdx: 0,
					ref: ref.winks.leg,
					transform: {
						tx: 12.95,
						ty: 12.1,
						a: 0.992,
						d: 0.992,
						b: -0.126,
						c: 0.126
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 12.95,
						ty: 12.1,
						a: 0.992,
						d: 0.992,
						b: -0.126,
						c: 0.126
					}
				},
				// 233
				{
					colorIdx: 1,
					ref: ref.winks.leg,
					transform: {
						tx: 15.95,
						ty: 12.25,
						a: 0.462,
						d: 0.462,
						b: -0.352,
						c: 0.352
					}
				}
			]
		}
	]
};
