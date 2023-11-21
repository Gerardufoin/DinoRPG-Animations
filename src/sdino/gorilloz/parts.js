// @ts-check

import { ref } from '../references.js';

export let parts = {
	// 669
	hand: [
		// 668
		{
			colorIdx: 0,
			ref: ref.gorilloz.hand
		}
	],
	// 674 p8
	arm: [
		// 671
		{
			colorIdx: 1,
			ref: ref.gorilloz.arm,
			transform: {
				tx: -0.1,
				ty: 0.2
			}
		},
		{
			partIdx: 8,
			frames: [0, 0, -1, -1],
			parts: [
				// 673
				{
					colorIdx: 1,
					ref: ref.gorilloz.arm_fur,
					transform: {
						tx: -0.35,
						ty: -2.5
					}
				}
			]
		}
	],
	// 677
	body: [
		// 676
		{
			colorIdx: 1,
			ref: ref.gorilloz.body
		}
	],
	// 690 p7
	head: [
		{
			partIdx: 7,
			frames: [0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5],
			parts: [
				[
					// 679
					{
						colorIdx: 1,
						ref: ref.gorilloz.head,
						transform: {
							tx: 0.0,
							ty: 0.0,
							a: 1.0,
							d: 0.851,
							b: 0.0,
							c: -0.079
						}
					},
					// 681
					{
						colorIdx: 3,
						ref: ref.gorilloz.hair_banana,
						transform: {
							tx: 0.45,
							ty: -1.35
						}
					}
				],
				[
					// 679
					{
						colorIdx: 1,
						ref: ref.gorilloz.head,
						transform: {
							tx: 0.0,
							ty: 0.0,
							a: 1.0,
							d: 0.851,
							b: 0.0,
							c: -0.079
						}
					},
					// 685
					{
						colorIdx: 1,
						ref: ref.gorilloz.hair,
						transform: {
							tx: 1.05,
							ty: -0.3
						}
					}
				],
				[
					// 687
					{
						colorIdx: 1,
						ref: ref.gorilloz.head_pointy,
						transform: {
							tx: 0.0,
							ty: 0.0,
							a: 1.0,
							d: 0.851,
							b: 0.0,
							c: -0.079
						}
					}
				],
				[
					// 679
					{
						colorIdx: 1,
						ref: ref.gorilloz.head,
						transform: {
							tx: 0.0,
							ty: 0.0,
							a: 1.0,
							d: 0.851,
							b: 0.0,
							c: -0.079
						}
					}
				],
				[
					// 687
					{
						colorIdx: 1,
						ref: ref.gorilloz.head_pointy,
						transform: {
							tx: 0.25,
							ty: -0.3,
							a: 0.997,
							d: 0.991,
							b: 0.074,
							c: -0.153
						}
					}
				],
				[
					// 687
					{
						colorIdx: 1,
						ref: ref.gorilloz.head_pointy,
						transform: {
							tx: 0.25,
							ty: -0.3,
							a: 0.997,
							d: 0.991,
							b: 0.074,
							c: -0.153
						}
					},
					// 689
					{
						colorIdx: 1,
						ref: ref.gorilloz.hair_fur,
						transform: {
							tx: 2.75,
							ty: -1.45
						}
					}
				]
			]
		},
		{
			special: true,
			ref: ref.gorilloz.special,
			transform: {
				tx: -6.9,
				ty: -4.3,
				a: 0.169,
				d: 0.169
			}
		}
	],
	// 693 p3
	face: [
		// 692
		{
			colorIdx: 0,
			ref: ref.gorilloz.face
		}
	],
	// 698 p5
	ear: [
		{
			partIdx: 5,
			frames: [0, 1, 2],
			parts: [
				// 695
				{
					colorIdx: 0,
					ref: ref.gorilloz.ear_pointy,
					transform: {
						tx: 0,
						ty: -1
					}
				},
				// 697
				{
					colorIdx: 0,
					ref: ref.gorilloz.ear,
					transform: {
						tx: 0.0,
						ty: -1.0,
						a: 0.902,
						d: 0.758
					}
				},
				// 697
				{
					colorIdx: 0,
					ref: ref.gorilloz.ear,
					transform: {
						tx: 0.3,
						ty: -1.25,
						a: 1.198,
						d: 1.198
					}
				}
			]
		}
	]
};
