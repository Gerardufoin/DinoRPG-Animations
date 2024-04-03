// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

export const parts = {
	// 607 p6c
	fin_right: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, -1, 1],
			parts: [
				// 602
				{
					colorIdx: 0,
					ref: ref.hippoclamp.right_fin_fold,
					transform: {
						ty: 0.05
					}
				},
				// 604
				{
					colorIdx: 0,
					ref: ref.hippoclamp.right_fin,
					transform: {
						ty: 0.05
					}
				},
				// 604
				{
					colorIdx: 1,
					ref: ref.hippoclamp.right_fin,
					transform: {
						ty: 0.05
					}
				},
				// 606
				{
					colorIdx: 0,
					ref: ref.hippoclamp.fin_dry,
					transform: {
						tx: -1.45,
						ty: -1.7,
						a: -0.893,
						d: 0.644,
						b: -0.472,
						c: -0.235
					}
				}
			]
		}
	],
	// 611 p7a
	body: [
		// 609
		{
			colorIdx: 0,
			ref: ref.hippoclamp.body
		},
		// 610
		{
			ref: ref.hippoclamp.body_highlight
		}
	],
	// 616 p7b
	back: [
		{
			partIdx: 7,
			frames: [0, 1, 1],
			parts: [
				[
					// 613
					{
						colorIdx: 1,
						ref: ref.hippoclamp.back_fin
					},
					// 615
					{
						ref: ref.hippoclamp.back_shine,
						blend: BLEND_MODES.ADD,
						alpha: 0.21,
						transform: {
							tx: 0.15,
							ty: -0.45,
							a: 0.29,
							d: 0.29
						}
					}
				]
				// 615
				// Note: Honestly, this part without the fin underneath really feels more like a bug on MT part than anything, removing it for now
				/*{
					ref: ref.hippoclamp.back_shine,
					alpha: 0.18,
					transform: {
						tx: 0.15,
						ty: -0.45,
						a: 0.29,
						d: 0.29
					}
				}*/
			]
		}
	],
	// 619 p8
	neck: [
		// 618
		{
			colorIdx: 0,
			ref: ref.hippoclamp.neck
		}
	],
	// 626 p4a + p4b
	eye: [
		{
			partIdx: 4,
			frames: [0, 1, 2, 3, 4],
			parts: [
				[
					// 620
					{
						ref: ref.hippoclamp.eye_empty
					},
					// 621
					{
						ref: ref.hippoclamp.pupil_big
					}
				],
				[
					// 620
					{
						ref: ref.hippoclamp.eye_empty
					},
					// 622
					{
						ref: ref.hippoclamp.pupil_white
					}
				],
				[
					// 620
					{
						ref: ref.hippoclamp.eye_empty
					},
					// 623
					{
						ref: ref.hippoclamp.pupil
					}
				],
				[
					// 624
					{
						ref: ref.hippoclamp.eye_full
					}
				],
				[
					//625
					{
						ref: ref.hippoclamp.eye
					}
				]
			]
		}
	],
	// 639 p3
	head: [
		{
			partIdx: 3,
			frames: [0, 1, 1, 2, 3, 4, 0, 0, 0],
			parts: [
				[
					// 628
					{
						colorIdx: 0,
						ref: ref.hippoclamp.head
					},
					// 629
					{
						ref: ref.hippoclamp.head_highlight
					}
				],
				[
					// 628
					{
						colorIdx: 0,
						ref: ref.hippoclamp.head
					},
					// 630
					{
						ref: ref.hippoclamp.head_mouth
					},
					// 631
					{
						ref: ref.hippoclamp.head_mouth_highlight
					}
				],
				[
					// 633
					{
						colorIdx: 0,
						ref: ref.hippoclamp.head_curved,
						transform: {
							tx: -0.05,
							ty: -0.15,
							a: 0.938,
							d: 0.938
						}
					},
					// 634
					{
						ref: ref.hippoclamp.head_curved_mouth
					},
					// 631
					{
						ref: ref.hippoclamp.head_mouth_highlight
					}
				],
				[
					// 636
					{
						colorIdx: 0,
						ref: ref.hippoclamp.head_trunk
					},
					// 631
					{
						ref: ref.hippoclamp.head_mouth_highlight
					}
				],
				[
					// 628
					{
						colorIdx: 0,
						ref: ref.hippoclamp.head
					},
					// 638
					{
						colorIdx: 1,
						ref: ref.hippoclamp.head_lips,
						transform: {
							tx: -2.9,
							ty: 2.9
						}
					},
					// 629
					{
						ref: ref.hippoclamp.head_highlight
					}
				]
			]
		}
	],
	// 648 p6a + p6b
	fin_left: [
		{
			partIdx: 6,
			frames: [0, 1, 2, 3, 4, 5],
			parts: [
				// 641
				{
					colorIdx: 0,
					ref: ref.hippoclamp.left_fin_fold,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				},
				// 643
				{
					colorIdx: 0,
					ref: ref.hippoclamp.left_fin,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				},
				// 643
				{
					colorIdx: 1,
					ref: ref.hippoclamp.left_fin,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				},
				// 606
				{
					colorIdx: 0,
					ref: ref.hippoclamp.fin_dry,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				},
				// 645
				{
					colorIdx: 0,
					ref: ref.hippoclamp.left_fin_stump,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				},
				// 647
				{
					colorIdx: 0,
					ref: ref.hippoclamp.left_fin_curve,
					transform: {
						tx: 0.05,
						ty: 0.05
					}
				}
			]
		}
	]
};
