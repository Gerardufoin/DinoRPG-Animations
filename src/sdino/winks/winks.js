// @ts-check

import { BLEND_MODES } from 'pixi.js';
import { stand } from './animations/stand.js';

export let winks = {
	name: 'winks',
	transforms: [
		// 285
		{
			partIdx: 1,
			transforms: [
				{
					tx: 0.3,
					ty: 3.0,
					a: 0.734,
					d: 0.734,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 0.3,
					ty: 2.9,
					a: 0.764,
					d: 0.764,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 0.3,
					ty: 2.9,
					a: 0.793,
					d: 0.793,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 0.3,
					ty: 2.85,
					a: 0.823,
					d: 0.823,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 0.3,
					ty: 2.8,
					a: 0.852,
					d: 0.852,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 0.3,
					ty: 2.8,
					a: 0.882,
					d: 0.882,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 0.3,
					ty: 2.7,
					a: 0.911,
					d: 0.911,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 0.3,
					ty: 2.7,
					a: 0.941,
					d: 0.941,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 0.3,
					ty: 2.6,
					a: 0.97,
					d: 0.97,
					brightness: 1
				},
				{
					tx: 0.3,
					ty: 2.6
				},
				{
					tx: 0.3,
					ty: 2.6,
					a: 1.188,
					d: 1.188,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 0.0,
			ty: 2.1,
			a: 0.771,
			d: 0.771
		}
	],
	glow: {
		distance: 1,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: [
		[
			// col0
			[
				'#F0DC99',
				'#FFCC79',
				'#FFAA1E',
				'#DF7E37',
				'#D1F49B',
				'#BBDB71',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#CC5858',
				'#FFF9AE',
				'#F0DC99',
				'#BBDB71',
				'#CC5858',
				'#CC7695'
			],
			// col1
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D'],
			// col2
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			],
			// col3
			[
				'#FFF2DF',
				'#FFCC79',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			]
		],
		[
			// col0
			['#D2D2D2', '#FFEF79'],
			// col1
			['#939393', '#FAD96E'],
			// col2
			['#D2D2D2', '#FFEF79'],
			// col3
			['#D2D2D2', '#FFEF79']
		]
	],
	shadow: {
		ref: 'fx/shadow.svg',
		offset: { x: 14.25, y: 8.95 },
		transform: {
			tx: 0.3,
			ty: 8.55,
			a: 0.917,
			d: 0.917
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 234
		right_leg_3: [
			{
				partIdx: 5,
				frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2],
				parts: [
					// 233
					{
						colorIdx: 0,
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
		right_leg_1: [
			{
				partIdx: 5,
				frames: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3],
				parts: [
					// 233
					{
						colorIdx: 0,
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'leg.svg',
						offset: { x: 5.5, y: 7.9 },
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
						ref: 'pincer.svg',
						offset: { x: 9.45, y: 10.8 },
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
						ref: 'body.svg',
						offset: { x: 1, y: 1 },
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
						ref: 'body_shine.svg',
						offset: { x: 8.45, y: 7.25 }
					},
					// 252
					{
						colorIdx: 0,
						ref: 'body_big_fold.svg',
						offset: { x: 1, y: 1 },
						transform: {
							tx: -5.6,
							ty: -7.55
						}
					},
					// 255
					{
						colorIdx: 0,
						ref: 'body_small_fold.svg',
						offset: { x: 0.95, y: 1 },
						transform: {
							tx: -4.45,
							ty: -8.6
						}
					},
					// 258
					{
						ref: 'body_spike_brown.svg',
						offset: { x: 1.05, y: 1 },
						transform: {
							tx: -5.0,
							ty: -8.4,
							a: 0.807,
							d: 0.807
						}
					},
					// 258
					{
						colorIdx: 0,
						ref: 'body_spike.svg',
						offset: { x: 1.05, y: 1 },
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
						ref: 'body_blob.svg',
						offset: { x: 1.05, y: 1 },
						transform: {
							tx: -9.6,
							ty: -8.25
						}
					},
					// 262
					{
						colorIdx: 0,
						ref: 'body_blob.svg',
						offset: { x: 1.05, y: 1 },
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
						ref: 'body_big_fold_shine.svg',
						offset: { x: 8.45, y: 6.4 }
					},
					// 256
					{
						ref: 'body_small_fold_shine.svg',
						offset: { x: 8.7, y: 8.15 }
					},
					// 259
					{
						ref: 'body_mono_spike_shine.svg',
						offset: { x: 8.55, y: 8.15 }
					},
					// 258
					{
						colorIdx: 0,
						ref: 'body_spike.svg',
						offset: { x: 1.05, y: 1 },
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
						ref: 'body_dots.svg',
						offset: { x: 38.9, y: 15.55 },
						blend: [BLEND_MODES.MULTIPLY],
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
						ref: 'body_speks.svg',
						offset: { x: 10.5, y: 9.25 }
					},
					// 267
					{
						ref: 'body_small_spikes.svg',
						offset: { x: 8.5, y: 7.05 }
					}
				]
			},
			{
				partIdx: 3,
				frames: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1],
				parts: [
					// 260
					{
						ref: 'body_dual_spikes_shine.svg',
						offset: { x: 9, y: 8.95 }
					},
					// 263
					{
						ref: 'body_blob_shine.svg',
						offset: { x: 9.15, y: 7.5 }
					}
				]
			}
		]
	},
	animations: {
		// 276
		stand: stand
	}
};
