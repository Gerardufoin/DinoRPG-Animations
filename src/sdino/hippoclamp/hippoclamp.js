// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';
import { stand } from './animations/stand.js';
/*import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { jump } from './animations/jump.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';*/

export let hippoclamp = {
	name: 'hippoclamp',
	transforms: [
		// 666
		{
			partIdx: 1,
			transforms: [
				{
					tx: 2.9,
					ty: 3.9,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 2.9,
					ty: 3.9,
					a: 1.014,
					d: 1.014,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 2.9,
					ty: 3.85,
					a: 1.028,
					d: 1.028,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 2.9,
					ty: 3.85,
					a: 1.042,
					d: 1.042,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 2.9,
					ty: 3.8,
					a: 1.056,
					d: 1.056,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 2.9,
					ty: 3.8,
					a: 1.071,
					d: 1.071,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 2.9,
					ty: 3.75,
					a: 1.085,
					d: 1.085,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 2.9,
					ty: 3.75,
					a: 1.099,
					d: 1.099,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 2.9,
					ty: 3.7,
					a: 1.113,
					d: 1.113,
					brightness: 1
				},
				{
					tx: 2.9,
					ty: 3.7,
					a: 1.127,
					d: 1.127
				},
				{
					tx: 2.9,
					ty: 2.7,
					a: 1.329,
					d: 1.329,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -1.5,
			ty: -0.65
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: [
		[
			// col0
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
			// col1
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#ECFFD9', '#CBFF97', '#D5EAFF', '#97CBFF'],
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
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -0.5,
			ty: 8.65,
			a: 0.733,
			d: 0.733
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 607 p6c
		right_front_fin: [
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
							blend: [BLEND_MODES.ADD],
							transform: {
								tx: 0.15,
								ty: -0.45,
								a: 0.29,
								d: 0.29
							}
						}
					]
					// 615 - PixiJS add mode does not work similarly to Flash if there is nothing underneath
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
		// 626 p4b
		right_eye: [],
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
		// 648 p6a
		left_front_fin: [
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
		],
		// 648 p6b
		left_back_fin: [
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
		],
		// 626 p4a
		left_eye: []
	},
	animations: {
		// missing cast, release
		// sleep same as stand
		// 650
		stand: stand
		/*// 651
		walk: walk,
		// 659
		run: run,
		// 660
		hit: hit,
		// 661
		jump: jump,
		// 662
		attack: attack,
		// 663
		land: land,
		// 664
		dead: dead,
		// 650 idx 5
		ill: { offset: 5, anim: stand },
		// 661
		fly: jump*/
	}
};
