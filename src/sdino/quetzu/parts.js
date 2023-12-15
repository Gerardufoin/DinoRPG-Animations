// @ts-check
import { ref } from '../references.js';

// 1302
const flames = {
	ref: ref.quetzu.back_flame,
	glow: {
		distance: 2,
		color: '#ff0000',
		quality: 1,
		strength: 0.7 //1.47
	},
	blur: {
		x: 0.8, //3
		y: 0.8, //3
		quality: 1
	}
};

// 1303 p2
const back_flames = {
	partIdx: 2,
	frames: [0, 1, 2],
	transform: {
		tx: 1.0,
		ty: -5.7,
		a: 0.268,
		d: 0.268
	},
	parts: [
		// 1302
		{
			...flames,
			transform: {
				tx: 0.0,
				ty: 3.7,
				a: 0.896,
				d: 0.904
			}
		},
		// 1302
		{
			...flames,
			transform: {
				tx: 0.0,
				ty: 7.45,
				a: 0.801,
				d: 0.808
			}
		},
		// 1302
		{
			...flames,
			transform: {
				tx: 0.0,
				ty: 16.4,
				a: 0.571,
				d: 0.576
			}
		}
	]
};

export let parts = {
	// 1304 p5
	back: [
		{
			partIdx: 5,
			frames: [0, 0, 0, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			parts: [
				// 1292
				{
					colorIdx: 1,
					ref: ref.quetzu.back_spike,
					transform: {
						tx: -1.15
					}
				},
				// 1294
				{
					colorIdx: 1,
					ref: ref.quetzu.back_fur,
					transform: {
						tx: -0.15,
						ty: -1.1
					}
				},
				// 1296
				{
					colorIdx: 1,
					ref: ref.quetzu.back_small_wing,
					transform: {
						tx: -0.4,
						ty: -1.75
					}
				},
				// 1298
				{
					colorIdx: 1,
					ref: ref.quetzu.back_wing,
					transform: {
						tx: -0.9,
						ty: 2.4
					}
				},
				// 1300
				{
					colorIdx: 1,
					ref: ref.quetzu.back_stump,
					transform: {
						tx: 0.15,
						ty: 2.7
					}
				},
				// 1303
				[back_flames, back_flames]
			]
		}
	],
	// 1310
	right_arm_top: [],
	// 1335 p4
	right_arm_bottom: [],
	// 1348 p6
	tail_end: [],
	// 1351
	tail: [],
	// 1368 _p3
	body: [],
	// 1371
	left_arm_top: [],
	// 1396 p4
	left_arm_bottom: [],
	// 1441 p7
	head: []
};
