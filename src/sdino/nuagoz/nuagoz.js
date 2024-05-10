// @ts-check
import { ref } from '../references_small.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';

export let nuagoz = {
	name: 'nuagoz',
	width: 0.519,
	height: 0.63,
	transforms: [
		// 547
		{
			partIdx: 1,
			transforms: [
				{
					tx: -0.25,
					ty: 0.25,
					a: 0.883,
					d: 0.883,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -0.25,
					ty: 0.25,
					a: 0.896,
					d: 0.896,
					brightness: 9,
					contrast: 5
				},
				{
					tx: -0.25,
					ty: 0.25,
					a: 0.909,
					d: 0.909,
					brightness: 8,
					contrast: 3
				},
				{
					tx: -0.25,
					ty: 0.2,
					a: 0.922,
					d: 0.922,
					brightness: 7,
					contrast: 3
				},
				{
					tx: -0.2,
					ty: 0.2,
					a: 0.935,
					d: 0.935,
					brightness: 6,
					contrast: 2
				},
				{
					tx: -0.2,
					ty: 0.2,
					a: 0.948,
					d: 0.948,
					brightness: 4,
					contrast: 2
				},
				{
					tx: -0.2,
					ty: 0.2,
					a: 0.961,
					d: 0.961,
					brightness: 3,
					contrast: 1
				},
				{
					tx: -0.25,
					ty: 0.25,
					a: 0.974,
					d: 0.974,
					brightness: 2,
					contrast: 1
				},
				{
					tx: -0.25,
					ty: 0.25,
					a: 0.987,
					d: 0.987,
					brightness: 1
				},
				{
					tx: -0.25,
					ty: 0.25
				},
				{
					tx: -0.25,
					ty: 0.25,
					a: 1.07,
					d: 1.07,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 0.1,
			ty: -1.8
		},
		// adjust
		{
			ty: -10.55
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
			['#FFF2DF', '#ECFFD9', '#D5EAFF', '#FFFBD5', '#E6F2FF', '#FFE6E6', '#FFFCE6', '#838596'],
			// col1
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
			['#FFAAE6', '#F0CD56'],
			// col1
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
			['#6063B8'],
			// col1
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
			tx: -0.8,
			ty: 0,
			a: 0.612,
			d: 0.612
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 534
		body: [
			// 533
			{
				partIdx: 3,
				frames: [0, 1, 2],
				parts: [
					[
						// 520
						{
							colorIdx: 0,
							ref: ref.nuagoz.small_cloud,
							transform: {
								tx: 10.097,
								ty: -2.535,
								a: 0.939,
								d: 0.939
							}
						},
						// 522
						{
							colorIdx: 0,
							ref: ref.nuagoz.body,
							transform: {
								tx: -1.5,
								ty: 0.0,
								a: 0.939,
								d: 0.939
							}
						},
						// 523
						{
							ref: ref.nuagoz.body_shine,
							transform: {
								tx: -1.5,
								ty: 0.0,
								a: 0.939,
								d: 0.939
							}
						},
						// 525
						{
							colorIdx: 0,
							ref: ref.nuagoz.eyes,
							transform: {
								tx: -6.946,
								ty: 2.16,
								a: 0.939,
								d: 0.939
							}
						},
						// 527
						{
							colorIdx: 0,
							ref: ref.nuagoz.mouth,
							transform: {
								tx: -8.59,
								ty: 5.869,
								a: 0.939,
								d: 0.939
							}
						}
					],
					[
						// 529
						{
							colorIdx: 0,
							ref: ref.nuagoz.body_long,
							transform: {
								tx: 0.937,
								ty: 0.657,
								a: 0.939,
								d: 0.939
							}
						},
						// 525
						{
							colorIdx: 0,
							ref: ref.nuagoz.eyes,
							transform: {
								tx: -9.374,
								ty: -0.563,
								a: 0.878,
								d: 0.435,
								b: 0.0657,
								c: -0.0325
							},
							resolution: 0.8
						}
					],
					[
						// 531
						{
							colorIdx: 0,
							ref: ref.nuagoz.body_round,
							transform: {
								tx: 1.223,
								ty: 0.0,
								a: 0.939,
								d: 0.939
							}
						},
						// 532
						{
							ref: ref.nuagoz.body_round_shine,
							transform: {
								tx: -1.5,
								ty: 0.0,
								a: 0.939,
								d: 0.939
							}
						},
						// 525
						{
							colorIdx: 0,
							ref: ref.nuagoz.eyes,
							transform: {
								tx: -6.43,
								ty: 4.179,
								a: 0.939,
								d: 0.939
							}
						}
					]
				]
			}
		],
		// 538
		cloud_1: [
			{
				ref: ref.nuagoz.cloud
			}
		],
		// 538
		cloud_2: [
			{
				ref: ref.nuagoz.cloud
			}
		],
		// 538
		cloud_3: [
			{
				ref: ref.nuagoz.cloud
			}
		],
		// 538
		cloud_4: [
			{
				ref: ref.nuagoz.cloud
			}
		]
	},
	animations: {
		// missing cast, release
		// 536
		stand: stand,
		// 539
		walk: fly,
		// 540
		run: run,
		// 541
		hit: hit,
		// 542
		jump: jump,
		// 543
		attack: attack,
		// 544
		land: land,
		// 545
		dead: dead,
		// 545 idx 5
		sleep: { offset: 5, anim: dead },
		// 545 idx 10
		ill: { offset: 10, anim: dead },
		// 539
		fly: fly
	}
};
