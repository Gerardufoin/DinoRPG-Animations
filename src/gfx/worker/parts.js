// @ts-check
import { ref } from '../references.js';

const colorOffset = {
	r: -51,
	g: -57,
	b: -169
};

export let parts = {
	// 83
	shade: [
		{
			ref: ref.castle.worker.shade
		}
	],
	// 100
	l_foot: [
		{
			ref: ref.castle.worker.l_foot,
			colorOffset: colorOffset
		}
	],
	// 102
	pants: [
		{
			ref: ref.castle.worker.pants
		}
	],
	// 105
	body: [
		{
			ref: ref.castle.worker.body,
			colorOffset: colorOffset
		}
	],
	// 106
	hammer_1: [
		{
			ref: ref.castle.worker.hammer_1
		}
	],
	// 109
	ear: [
		{
			ref: ref.castle.worker.ear,
			colorOffset: colorOffset
		}
	],
	// 116 smc
	head: [
		{
			ref: ref.castle.worker.head,
			colorOffset: colorOffset
		},
		{
			ref: ref.castle.worker.head_highlights
		},
		{
			partIdx: 0,
			frames: [0, 1, 2],
			parts: [
				{
					ref: ref.castle.worker.helmet_yellow
				},
				{
					ref: ref.castle.worker.helmet_blue
				},
				{
					ref: ref.castle.worker.helmet_red
				}
			]
		}
	],
	// 117
	hammer_2: [
		{
			ref: ref.castle.worker.hammer_2
		}
	],
	// 118
	hammer_3: [
		{
			ref: ref.castle.worker.hammer_3
		}
	],
	// 119
	hammer_4: [
		{
			ref: ref.castle.worker.hammer_4
		}
	],
	// 120
	hammer_5: [
		{
			ref: ref.castle.worker.hammer_5
		}
	],
	// 121
	hammer_6: [
		{
			ref: ref.castle.worker.hammer_6
		}
	],
	// 122
	hammer_7: [
		{
			ref: ref.castle.worker.hammer_7
		}
	],
	// 123
	hammer_8: [
		{
			ref: ref.castle.worker.hammer_8
		}
	],
	// 124
	hammer_9: [
		{
			ref: ref.castle.worker.hammer_9
		}
	],
	// 91
	hand: [
		{
			ref: ref.castle.worker.hand,
			transform: {
				tx: -0.15,
				ty: 0.05
			},
			colorOffset: colorOffset
		}
	],
	// 94
	r_foot: [
		{
			ref: ref.castle.worker.r_foot,
			colorOffset: colorOffset
		}
	],
	// 97
	segment: [
		{
			ref: ref.castle.worker.segment,
			transform: {
				ty: 3.15
			},
			colorOffset: colorOffset
		}
	]
};
