// @ts-check
import { ref } from '../references_small.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts_small } from './parts_small.js';
import { ref as ref_big } from '../references_big.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const planaile = {
	name: 'planaile',
	palette: [
		[
			// col0
			[
				'#FFB0B0',
				'#FA8177',
				'#E28B8B',
				'#FF996F',
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
			['#FFDDDD', '#FBCCC8', '#FCE1C7', '#F3CEB6', '#EAC49D', '#EAC49D'],
			// col2
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15'],
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
			['#8A6464', '#73648A', '#64868A'],
			// col1
			['#A87D7D', '#908EAD', '#82AAAF'],
			// col2
			['#F5A2A2', '#9993FF', '#91ECF7'],
			// col3
			['#C49595', '#9A98BD', '#A5BFC2']
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
				tx: 27.25,
				ty: 16.75,
				a: 0.841,
				d: 0.841
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.planaile.shadow,
			transform: {
				tx: 20.75,
				ty: 49.9,
				a: 0.71,
				d: 1.332,
				b: 0.025,
				c: 0
			},
			alpha: 0.289,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 650 p7b
			r_arm: parts_big.right_arm,
			// 652 p8b
			r_foot: parts_big.right_foot,
			// 654 col0
			face: parts_big.face,
			// 665 p9
			body: parts_big.body,
			// 674_p4b
			r_ear: parts_big.right_ear,
			// 711 p4a
			l_ear: parts_big.left_ear,
			// 753 p3
			head: parts_big.head,
			// 763 p7a
			l_arm: parts_big.left_arm,
			// 777 p5
			eyes: parts_big.eyes,
			// 791 p6
			mouth: parts_big.mouth,
			// 795 p8
			nose: parts_big.nose,
			// 799 p8a
			l_foot: parts_big.left_foot,
			// 293
			view: parts_big.view
		},
		animations: {
			// 800
			stand: portrait
		}
	},
	small: {
		width: 0.673,
		height: 0.606,
		transforms: [
			// 336
			{
				partIdx: 1,
				transforms: [
					{
						tx: 11.45,
						ty: 14.65,
						a: 0.868,
						d: 0.868,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 11.45,
						ty: 14.55,
						a: 0.883,
						d: 0.883,
						brightness: 9,
						contrast: 5
					},
					{
						tx: 11.45,
						ty: 14.45,
						a: 0.897,
						d: 0.897,
						brightness: 8,
						contrast: 3
					},
					{
						tx: 11.45,
						ty: 14.4,
						a: 0.912,
						d: 0.912,
						brightness: 7,
						contrast: 3
					},
					{
						tx: 11.4,
						ty: 14.3,
						a: 0.927,
						d: 0.927,
						brightness: 6,
						contrast: 2
					},
					{
						tx: 11.4,
						ty: 14.2,
						a: 0.941,
						d: 0.941,
						brightness: 4,
						contrast: 2
					},
					{
						tx: 11.45,
						ty: 14.1,
						a: 0.956,
						d: 0.956,
						brightness: 3,
						contrast: 1
					},
					{
						tx: 11.45,
						ty: 14.05,
						a: 0.971,
						d: 0.971,
						brightness: 2,
						contrast: 1
					},
					{
						tx: 11.45,
						ty: 13.95,
						a: 0.985,
						d: 0.985,
						brightness: 1
					},
					{
						tx: 11.45,
						ty: 13.85
					},
					{
						tx: 11.45,
						ty: 13.45,
						a: 1.159,
						d: 1.159,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: -12.35,
				ty: -11.65
			},
			// adjust
			{
				ty: -8.9
			}
		],
		glow: {
			distance: 1,
			color: 0x330000,
			quality: 1,
			strength: 0.3
		},
		shadow: {
			ref: ref.fx.shadow,
			transform: {
				tx: -1.25,
				ty: 0,
				a: 0.917,
				d: 0.917
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 288
			r_arm: parts_small.right_arm,
			// 294
			body: parts_small.body,
			// 297
			head: parts_small.head,
			// 305
			ears: parts_small.ears,
			// 308
			l_leg: parts_small.left_leg,
			// 310
			l_foot: parts_small.left_foot,
			// 312
			l_hand: parts_small.left_hand,
			// 315
			l_arm: parts_small.left_arm,
			// 317
			r_hand: parts_small.right_hand,
			// 323
			r_eye: parts_small.right_eye,
			// 326
			l_eye: parts_small.left_eye,
			// 146
			fx_impact_1: [
				{
					ref: ref.fx.impact_1
				}
			],
			// 147
			fx_impact_2: [
				{
					ref: ref.fx.impact_2
				}
			],
			// 148
			fx_impact_3: [
				{
					ref: ref.fx.impact_3
				}
			],
			// 149
			fx_impact_4: [
				{
					ref: ref.fx.impact_4
				}
			],
			// 150
			fx_impact_5: [
				{
					ref: ref.fx.impact_5
				}
			]
		},
		animations: {
			// missing cast, release
			// 327
			stand: stand,
			// 328
			walk: walk,
			// 329
			run: fly,
			// 330
			hit: hit,
			// 331 but same as 329
			jump: fly,
			// 332
			attack: attack,
			// 333
			land: land,
			// 334
			dead: dead,
			// 334 idx 5
			sleep: { offset: 5, anim: dead },
			// 334 idx 10
			ill: { offset: 10, anim: dead },
			// 329
			fly: fly
		}
	}
};
