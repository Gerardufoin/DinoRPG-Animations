// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

export let parts = {
	// 173
	front_leg: [
		// 167
		{
			colorIdx: 0,
			ref: ref.pigmou.front_leg,
			transform: {
				ty: -0.5
			}
		},
		{
			partIdx: 6,
			frames: [-1, 0],
			parts: [
				// 172
				{
					colorIdx: 1,
					ref: ref.pigmou.leg_fur,
					transform: {
						tx: 2.15,
						ty: -2.6,
						a: 1.122,
						d: 1.122,
						b: 0.301,
						c: -0.301
					}
				}
			]
		},
		// 170
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 0,
					ref: ref.pigmou.front_leg_special,
					blend: [BLEND_MODES.MULTIPLY],
					transform: {
						tx: -4.85,
						ty: -3.2
					}
				}
			]
		}
	],
	// 178
	tail: [
		// 175
		{
			partIdx: 5,
			frames: [0, 1, 2, 3],
			parts: [
				{
					colorIdx: 1,
					ref: ref.pigmou.tail_fur,
					transform: {
						tx: -0.05,
						ty: -0.1,
						a: 1.021,
						d: 1.021,
						b: -0.108,
						c: 0.108
					},
					resolution: 3
				},
				[
					{
						colorIdx: 1,
						ref: ref.pigmou.tail_fur,
						transform: {
							tx: 4.45,
							ty: -3.0,
							a: 0.108,
							d: 0.108,
							b: 1.021,
							c: -1.021
						}
					},
					// 177
					{
						colorIdx: 0,
						ref: ref.pigmou.tail,
						transform: {
							tx: 0.2,
							ty: -1.8
						}
					}
				],
				{
					colorIdx: 1,
					ref: ref.pigmou.tail_fur,
					transform: {
						tx: -0.75,
						ty: -0.25,
						a: 1.194,
						d: 1.194,
						b: -0.459,
						c: 0.459
					},
					resolution: 3
				},
				{
					colorIdx: 1,
					ref: ref.pigmou.tail_fur,
					transform: {
						tx: -0.5,
						ty: -1.55,
						a: 1.647,
						d: 1.647,
						b: -0.633,
						c: 0.633
					},
					resolution: 3
				}
			]
		}
	],
	// 184
	body: [
		// 180
		{
			colorIdx: 0,
			ref: ref.pigmou.body
		},
		// 183
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				// 182
				{
					colorIdx: 0,
					ref: ref.pigmou.body_special,
					blend: [BLEND_MODES.MULTIPLY],
					transform: {
						tx: -4,
						ty: -4.4
					}
				}
			]
		}
	],
	// 214
	head: [
		{
			partIdx: 7,
			frames: [-1, -1, -1, -1, -1, 0, 0, -1, -1, 1, 1, 1, -1, 2, 2, 2],
			parts: [
				// 200
				{
					colorIdx: 0,
					ref: ref.pigmou.head_acc_1,
					transform: {
						tx: -3.25,
						ty: -4.05,
						a: -0.041,
						d: 0.36,
						b: -0.908,
						c: -0.589
					}
				},
				// 206
				{
					colorIdx: 1,
					ref: ref.pigmou.head_acc_2,
					transform: {
						tx: -4.65,
						ty: 1.0,
						a: -1.0,
						d: 1.0
					}
				},
				// 210
				{
					colorIdx: 1,
					ref: ref.pigmou.head_acc_3,
					transform: {
						tx: -4.65,
						ty: 1.0,
						a: -1.0,
						d: 1.0
					}
				}
			]
		},
		// 186
		{
			colorIdx: 0,
			ref: ref.pigmou.head,
			transform: {
				tx: -0.1,
				ty: 0
			}
		},
		// 189
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 0,
					ref: ref.pigmou.head_special,
					blend: [BLEND_MODES.MULTIPLY],
					transform: {
						tx: -6.65,
						ty: -7.8
					}
				}
			]
		},
		{
			partIdx: 7,
			frames: [0, 1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 8, 8, 8],
			parts: [
				// 190
				{
					ref: ref.pigmou.head_acc_4
				},
				// 193
				{
					partIdx: 1,
					frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
					parts: [
						// 191
						{
							ref: ref.pigmou.head_acc_5,
							transform: {
								tx: -0.75,
								ty: -2.04
							}
						},
						// 192
						{
							ref: ref.pigmou.head_acc_6,
							transform: {
								tx: -0.75,
								ty: -2.04
							}
						}
					]
				},
				// 195
				{
					ref: ref.pigmou.head_acc_7,
					transform: {
						tx: -2.85,
						ty: -3.85,
						a: 0.845,
						d: 0.845
					},
					glow: {
						distance: 5,
						color: '#FF9900',
						quality: 1,
						strength: 1
					}
				},
				// 198
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					parts: [
						// 196
						{
							ref: ref.pigmou.head_acc_8,
							alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
							transform: {
								tx: 1,
								ty: -2.55
							}
						},
						// 197
						{
							ref: ref.pigmou.head_acc_9,
							alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
							transform: {
								tx: 1,
								ty: -2.55
							}
						}
					]
				},
				// 200
				{
					colorIdx: 0,
					ref: ref.pigmou.head_acc_1,
					transform: {
						tx: 5.3,
						ty: 2.35
					}
				},
				// 203
				{
					colorIdx: 2,
					ref: ref.pigmou.head_acc_10,
					blend: [BLEND_MODES.MULTIPLY],
					transform: {
						tx: 1.9,
						ty: -3.05
					}
				},
				// 206
				{
					colorIdx: 1,
					ref: ref.pigmou.head_acc_2,
					transform: {
						tx: 3.8,
						ty: 6.4
					}
				},
				// 208
				{
					colorIdx: 0,
					ref: ref.pigmou.head_acc_11,
					transform: {
						tx: 3.05,
						ty: -4.65
					}
				},
				// 212
				{
					colorIdx: 1,
					ref: ref.pigmou.head_acc_12,
					transform: {
						tx: 3.8,
						ty: 6.4
					}
				}
			]
		},
		{
			partIdx: 7,
			frames: [-1, -1, -1, 0, -1, 1, 2, -1, -1, -1, 2, 3, -1, 4, 3, 2],
			parts: [
				// 195
				{
					ref: ref.pigmou.head_acc_7,
					transform: {
						tx: 0.95,
						ty: -0.8,
						a: 0.966,
						d: 0.966,
						b: 0.259,
						c: -0.259
					},
					glow: {
						distance: 1,
						color: '#FF9900',
						quality: 1,
						strength: 1
					}
				},
				// 201
				{
					ref: ref.pigmou.head_acc_13
				},
				// 193
				{
					partIdx: 1,
					frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
					parts: [
						// 191
						{
							ref: ref.pigmou.head_acc_5,
							transform: {
								tx: -0.75,
								ty: -2.05
							}
						},
						// 192
						{
							ref: ref.pigmou.head_acc_6,
							transform: {
								tx: -0.75,
								ty: -2.05
							}
						}
					]
				},
				// 198
				{
					partIdx: 1,
					frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
					parts: [
						// 196
						{
							ref: ref.pigmou.head_acc_8,
							alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
							transform: {
								tx: 1,
								ty: -2.55
							}
						},
						// 197
						{
							ref: ref.pigmou.head_acc_9,
							alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
							transform: {
								tx: 1,
								ty: -2.55
							}
						}
					]
				},
				// 213
				{
					ref: ref.pigmou.head_acc_14
				}
			]
		},
		{
			partIdx: 7,
			frames: [-1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1],
			parts: [
				// 204
				{
					ref: ref.pigmou.head_acc_15
				}
			]
		}
	],
	// 220
	back_left_leg: [
		// 216
		{
			colorIdx: 0,
			ref: ref.pigmou.back_leg,
			transform: {
				tx: 0.05
			}
		},
		{
			partIdx: 6,
			frames: [-1, 0],
			parts: [
				// 172
				{
					colorIdx: 1,
					ref: ref.pigmou.leg_fur,
					transform: {
						tx: 0.1,
						ty: -2.45
					}
				}
			]
		},
		// 219
		{
			partIdx: 15,
			frames: [-1, 0],
			parts: [
				{
					colorIdx: 0,
					ref: ref.pigmou.back_leg_special,
					blend: [BLEND_MODES.MULTIPLY],
					transform: {
						tx: -2.85,
						ty: -2.85
					}
				}
			]
		}
	]
};
