// @ts-check

import { stand } from './animations/stand.js';
import { ref } from '../references_small.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts_small } from './parts_small.js';
import { parts_big } from './parts_big.js';
import { ref as ref_big } from '../references_big.js';
import { portrait } from './animations/portrait.js';

export const winks = {
	name: 'winks',
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
	big: {
		transforms: [
			// 3577
			{
				tx: -26.7,
				ty: -1.85
			},
			// 3576 p1
			{
				tx: -23.15,
				ty: 16.3
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.winks.shadow,
			transform: {
				tx: -6.25,
				ty: 48.5,
				a: 0.765,
				d: 1.435,
				b: 0.027,
				c: 0
			},
			alpha: 0.289,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 486_p5f
			r_l_3: parts_big.right_leg_3,
			// 500_p5d
			r_l_1: parts_big.right_leg_1,
			// 508_p5e
			r_l_2: parts_big.right_leg_2,
			// 561_p3
			body: parts_big.body,
			// 590_p4
			eyes: parts_big.eyes,
			// 593_special
			special: parts_big.special,
			// 605_p6
			mouth: parts_big.mouth,
			// 614_p5a
			l_l_1: parts_big.left_leg_1,
			// 623_p5c
			l_l_3: parts_big.left_leg_3,
			// 639_p5b
			l_l_2: parts_big.left_leg_2,
			// 641_p5g
			l_pincer: parts_big.left_pincer,
			// 293
			view: parts_big.view
		},
		animations: {
			// 642
			stand: portrait
		}
	},
	small: {
		width: 0.673,
		height: 0.4,
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
			},
			// adjust
			{
				ty: -10
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
				tx: 0.3,
				ty: 0,
				a: 0.917,
				d: 0.917
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 234
			r_l_3: parts_small.right_leg_3,
			// 235
			r_l_2: parts_small.right_leg_2,
			// 247
			r_l_1: parts_small.leg_1,
			// 268
			body: parts_small.body,
			// 271
			special: parts_small.special,
			// 273 (same as 247)
			l_l_1: parts_small.leg_1,
			// 274
			l_l_3: parts_small.left_leg_3,
			// 275
			l_l_2: parts_small.left_leg_2,
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
			// 276
			stand: stand,
			// 277
			walk: walk,
			// 278
			run: run,
			// 279
			hit: hit,
			// 280
			jump: jump,
			// 281
			attack: attack,
			// 282
			land: land,
			// 283
			dead: dead,
			// 283 idx 5
			sleep: { offset: 5, anim: dead },
			// 283 idx 10
			ill: { offset: 10, anim: dead },
			// 280
			fly: jump
		}
	}
};
