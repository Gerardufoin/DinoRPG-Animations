// @ts-check
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const nuagoz = {
	name: 'nuagoz',
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
	big: {
		transforms: [
			// 3577
			{
				tx: -26.7,
				ty: -1.85
			},
			// 3576 p1
			{
				tx: 23.05,
				ty: 6.55,
				brightness: -17,
				contrast: 20
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		// This filter is not applied, but left here just in case with the Flash values.
		// It is supposed to do a drop shadow toward the inside of the shape, didn't find an alternative with PixiJS.
		dropShadow: {
			angle: 259,
			blur: 14,
			color: 0xccff00,
			distance: 6,
			inner: true,
			quality: 1,
			strength: 0.2
		},
		shadow: {
			ref: ref_big.nuagoz.shadow,
			transform: {
				tx: 9.35,
				ty: 52.1,
				a: 0.751,
				d: 0.998,
				b: 0.051,
				c: -0.031
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 1275_p3
			body: parts_big.body,
			// 293
			view: parts_big.view
		},
		animations: {
			// 1276
			stand: portrait
		}
	},
	small: {
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

		shadow: {
			ref: ref_small.fx.shadow,
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
			body: parts_small.body,
			// 538
			cloud_1: parts_small.cloud,
			// 538
			cloud_2: parts_small.cloud,
			// 538
			cloud_3: parts_small.cloud,
			// 538
			cloud_4: parts_small.cloud
		},
		animations: {
			// missing cast, release
			// ill and sleep were set to 'dead' but was strange visually. Changed for stand.
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
			// 539
			fly: fly
		}
	}
};
