// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_small.js';

export const parts_small = {
	// 559
	tail: [
		{
			partIdx: 8,
			frames: [0, 1, 2, 3, 4, 5, 6],
			parts: [
				// 548
				{
					ref: ref.sirain.tail_bubble
				},
				// 550
				{
					colorIdx: 0,
					ref: ref.sirain.tail_thin,
					transform: {
						tx: 0.75,
						ty: -1.6
					}
				},
				// 552
				{
					colorIdx: 0,
					ref: ref.sirain.tail_fan,
					transform: {
						tx: -0.05,
						ty: 2.35
					}
				},
				[
					// 554
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fat,
						transform: {
							tx: 0.4,
							ty: 1.05
						}
					}
				],
				[
					// 556
					{
						colorIdx: 1,
						ref: ref.sirain.tail_fin,
						transform: {
							tx: 3.8,
							ty: -0.45,
							a: 0.52,
							d: -0.866,
							b: -0.3,
							c: -0.5
						}
					},
					// 554
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fat,
						transform: {
							tx: 1.75,
							ty: 1.05,
							a: 1.644,
							d: 1.0
						}
					},
					// 556
					{
						colorIdx: 1,
						ref: ref.sirain.tail_fin,
						transform: {
							tx: 5.9,
							ty: 0.5
						}
					}
				],
				[
					// 556
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fin,
						transform: {
							tx: 4.9,
							ty: 1.1,
							a: 0.644,
							d: 0.928,
							b: 0.172,
							c: -0.249
						}
					},
					// 554
					{
						colorIdx: 0,
						ref: ref.sirain.tail_fat,
						transform: {
							tx: 1.75,
							ty: 1.05,
							a: 1.644,
							d: 1.0
						}
					},
					// 556
					{
						colorIdx: 1,
						ref: ref.sirain.tail_fin,
						transform: {
							tx: 4.9,
							ty: -1.35,
							a: 0.571,
							d: -0.68,
							b: -0.571,
							c: -0.68
						}
					}
				],
				[
					// 558
					{
						colorIdx: 0,
						ref: ref.sirain.tail_dry,
						transform: {
							tx: 1.75,
							ty: 1.05,
							a: 1.644,
							d: 1.0
						}
					}
				]
			]
		}
	],
	// 565
	leg: [
		// 561
		{
			colorIdx: 0,
			ref: ref.sirain.leg
		},
		// 564
		{
			special: true,
			colorIdx: 0,
			ref: ref.sirain.leg_special,
			transform: {
				tx: -2.85,
				ty: -2.5
			}
		}
	],
	// 571
	body: [
		// 570
		{
			colorIdx: 0,
			ref: ref.sirain.body
		},
		// 569
		{
			special: true,
			colorIdx: 3,
			ref: ref.sirain.body_special,
			transform: {
				tx: -5.75,
				ty: -17.05
			}
		}
	],
	// 578
	ear: [
		{
			partIdx: 5,
			frames: [0, 1, 2, 3, 4],
			parts: [
				// 573
				{
					colorIdx: 0,
					ref: ref.sirain.ear
				},
				[
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear,
						transform: {
							tx: 0.45,
							ty: 0.95,
							a: 0.933,
							d: 1.239,
							b: 0.217,
							c: 0.0
						}
					},
					// 575
					{
						colorIdx: 1,
						ref: ref.sirain.ear_inside,
						transform: {
							tx: -0.15,
							ty: 1.0
						}
					}
				],
				// 573
				{
					colorIdx: 0,
					ref: ref.sirain.ear,
					transform: {
						tx: -1.45,
						ty: 0.7,
						a: 0.775,
						d: 0.579
					}
				},
				// 573
				{
					colorIdx: 0,
					ref: ref.sirain.ear,
					transform: {
						tx: -2.25,
						ty: 2.4,
						a: 0.52,
						d: 0.389,
						b: 0.342,
						c: -0.256
					}
				},
				[
					// 577
					{
						colorIdx: 1,
						ref: ref.sirain.ear_bat
					},
					// 573
					{
						colorIdx: 0,
						ref: ref.sirain.ear,
						transform: {
							tx: -2.1,
							ty: 0.4,
							a: 0.556,
							d: 0.445,
							b: -0.149,
							c: 0.119
						}
					}
				]
			]
		}
	],
	// 585
	head: [
		// 580
		{
			colorIdx: 0,
			ref: ref.sirain.head
		},
		// 581
		{
			ref: ref.sirain.head_highlight
		},
		// 584
		{
			special: true,
			colorIdx: 0,
			blend: BLEND_MODES.MULTIPLY,
			ref: ref.sirain.head_special,
			transform: {
				tx: -2.8,
				ty: -2.9
			}
		}
	],
	// 589
	eye: [
		// 586
		{
			ref: ref.sirain.eye
		},
		// 588
		{
			colorIdx: 2,
			ref: ref.sirain.eye_pupil,
			transform: {
				tx: 0.2,
				ty: -0.3,
				a: 0.72,
				d: 0.72
			}
		}
	],
	// 154
	fx_dust: [
		{
			ref: ref.fx.dust,
			colorOffset: {
				r: -11,
				g: -51,
				b: -92
			}
		}
	]
};
