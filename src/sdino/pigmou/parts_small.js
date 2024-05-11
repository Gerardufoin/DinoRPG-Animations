// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_small.js';

const head = [
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
				blend: BLEND_MODES.MULTIPLY,
				transform: {
					tx: -6.65,
					ty: -7.8
				}
			}
		]
	}
];
const head_fins = [
	// 200
	{
		colorIdx: 0,
		ref: ref.pigmou.head_fin,
		transform: {
			tx: -3.25,
			ty: -4.05,
			a: -0.041,
			d: 0.36,
			b: -0.908,
			c: -0.589
		}
	},
	...head,
	// 200
	{
		colorIdx: 0,
		ref: ref.pigmou.head_fin,
		transform: {
			tx: 5.3,
			ty: 2.35
		}
	}
];
const head_sideburns = [
	// 206
	{
		colorIdx: 1,
		ref: ref.pigmou.head_sideburn,
		transform: {
			tx: -4.65,
			ty: 1.0,
			a: -1.0,
			d: 1.0
		}
	},
	...head,
	// 206
	{
		colorIdx: 1,
		ref: ref.pigmou.head_sideburn,
		transform: {
			tx: 3.8,
			ty: 6.4
		}
	}
];
const head_sideburns_long = [
	// 210
	{
		colorIdx: 1,
		ref: ref.pigmou.head_sideburn_long_right,
		transform: {
			tx: -4.65,
			ty: 1.0,
			a: -1.0,
			d: 1.0
		}
	},
	...head,
	// 212
	{
		colorIdx: 1,
		ref: ref.pigmou.head_sideburn_long_left,
		transform: {
			tx: 3.8,
			ty: 6.4
		}
	}
];
// 193
const horns = {
	partIdx: 1,
	frames: [-1, -1, -1, -1, -1, -1, 0, 0, 0, 0, 1],
	parts: [
		// 191
		{
			ref: ref.pigmou.head_horns_stub,
			transform: {
				tx: -0.75,
				ty: -2.04
			}
		},
		// 192
		{
			ref: ref.pigmou.head_horns,
			transform: {
				tx: -0.75,
				ty: -2.04
			}
		}
	]
};
// 195
const horn_fire = {
	ref: ref.pigmou.head_horn_fire,
	glow: {
		distance: 5,
		color: '#FF9900',
		quality: 1,
		strength: 1
	}
};
// 198
const dots = {
	partIdx: 1,
	frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	parts: [
		// 196
		{
			ref: ref.pigmou.head_spikes_small,
			alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
			transform: {
				tx: 1,
				ty: -2.55
			}
		},
		// 197
		{
			ref: ref.pigmou.head_spikes,
			alpha: 0.4, // There is a difference in stroke opacity between opacity of Flash and PixiJS SVG
			transform: {
				tx: 1,
				ty: -2.55
			}
		}
	]
};

export const parts_small = {
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
					blend: BLEND_MODES.MULTIPLY,
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
					}
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
					}
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
					}
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
					blend: BLEND_MODES.MULTIPLY,
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
			frames: [0, 1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13],
			parts: [
				[
					...head,
					// 190
					{
						ref: ref.pigmou.head_shine
					}
				],
				[...head, horns],
				[
					...head,
					{
						...horn_fire,
						transform: {
							tx: -2.85,
							ty: -3.85,
							a: 0.845,
							d: 0.845
						}
					},
					{
						...horn_fire,
						transform: {
							tx: 0.95,
							ty: -0.8,
							a: 0.966,
							d: 0.966,
							b: 0.259,
							c: -0.259
						}
					}
				],
				[...head, dots],
				[
					...head_fins,
					// 201
					{
						ref: ref.pigmou.head_shine
					}
				],
				[...head_fins, horns],
				[
					...head,
					// 203
					{
						colorIdx: 2,
						ref: ref.pigmou.head_spots,
						blend: BLEND_MODES.MULTIPLY,
						transform: {
							tx: 1.9,
							ty: -3.05
						}
					},
					// 204
					{
						ref: ref.pigmou.head_shine
					}
				],
				[
					...head_sideburns,
					// 204
					{
						ref: ref.pigmou.head_shine
					}
				],
				[
					...head_sideburns,
					horns,
					// 204
					{
						ref: ref.pigmou.head_shine
					}
				],
				[
					...head_sideburns,
					dots,
					// 204
					{
						ref: ref.pigmou.head_shine
					}
				],
				[
					...head,
					// 208
					{
						colorIdx: 0,
						ref: ref.pigmou.head_simpson,
						transform: {
							tx: 3.05,
							ty: -4.65
						}
					},
					// 204
					{
						ref: ref.pigmou.head_shine
					}
				],
				[
					...head_sideburns_long,
					// 213
					{
						ref: ref.pigmou.head_shine
					}
				],
				[...head_sideburns_long, dots],
				[...head_sideburns_long, horns]
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
					blend: BLEND_MODES.MULTIPLY,
					transform: {
						tx: -2.85,
						ty: -2.85
					}
				}
			]
		}
	]
};
