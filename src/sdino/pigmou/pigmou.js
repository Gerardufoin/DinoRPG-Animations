// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const pigmou = {
	name: 'pigmou',
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
			['#A9D9DB', '#FFC400'],
			// col1
			['#73A4A6', '#BB7A2C'],
			// col2
			['#52CFD4', '#C99A00'],
			// col3
			['#329498', '#D78523']
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
				tx: 22.9,
				ty: 9.35,
				a: 1.05,
				d: 1.05
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.pigmou.shadow,
			transform: {
				tx: 0.2,
				ty: 53.95,
				a: 0.816,
				d: 1.02
			},
			alpha: 0.289,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 307_p6b
			l_f_leg: parts_big.left_front_leg,
			// 323_p5
			tail: parts_big.tail,
			// 329
			body: parts_big.body,
			// 338_p6c
			r_b_leg: parts_big.right_back_leg,
			// 349_p6a
			r_f_leg: parts_big.right_front_leg,
			// 414_p7
			head: parts_big.head,
			// 455_p3
			eyes: parts_big.eyes,
			// 473_p4
			mouth: parts_big.mouth
		},
		animations: {
			// 474
			stand: portrait
		}
	},
	small: {
		width: 0.735,
		height: 0.625,
		transforms: [
			// 231
			{
				partIdx: 1,
				transforms: [
					{
						tx: 0.0,
						ty: 1.2,
						a: 0.885,
						d: 0.885,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0.0,
						ty: 1.05,
						a: 0.898,
						d: 0.898,
						brightness: 9,
						contrast: 5
					},
					{
						tx: 0.0,
						ty: 0.95,
						a: 0.911,
						d: 0.911,
						brightness: 8,
						contrast: 3
					},
					{
						tx: 0.0,
						ty: 0.8,
						a: 0.923,
						d: 0.923,
						brightness: 7,
						contrast: 3
					},
					{
						tx: 0.0,
						ty: 0.65,
						a: 0.936,
						d: 0.936,
						brightness: 6,
						contrast: 2
					},
					{
						tx: 0.0,
						ty: 0.55,
						a: 0.949,
						d: 0.949,
						brightness: 4,
						contrast: 2
					},
					{
						tx: 0.0,
						ty: 0.4,
						a: 0.962,
						d: 0.962,
						brightness: 3,
						contrast: 1
					},
					{
						tx: 0.0,
						ty: 0.25,
						a: 0.974,
						d: 0.974,
						brightness: 2,
						contrast: 1
					},
					{
						tx: 0.0,
						ty: 0.15,
						a: 0.987,
						d: 0.987,
						brightness: 1
					},
					{
						tx: 0,
						ty: 0
					},
					{
						tx: 0.0,
						ty: -0.9,
						a: 1.16,
						d: 1.16,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642 No transform, set to tx: 0 and ty: 0
			// adjust
			{
				ty: -8.55
			}
		],
		glow: {
			distance: 1,
			color: 0x330000,
			quality: 1,
			strength: 0.3
		},
		shadow: {
			ref: ref_small.fx.shadow,
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
			// 173
			f_l_leg: parts_small.front_leg,
			// 173
			f_r_leg: parts_small.front_leg,
			// 178
			tail: parts_small.tail,
			// 184
			body: parts_small.body,
			// 214
			head: parts_small.head,
			// 220
			b_l_leg: parts_small.back_left_leg,
			// 146
			fx_impact_1: [
				{
					ref: ref_small.fx.impact_1
				}
			],
			// 147
			fx_impact_2: [
				{
					ref: ref_small.fx.impact_2
				}
			],
			// 148
			fx_impact_3: [
				{
					ref: ref_small.fx.impact_3
				}
			],
			// 149
			fx_impact_4: [
				{
					ref: ref_small.fx.impact_4
				}
			],
			// 150
			fx_impact_5: [
				{
					ref: ref_small.fx.impact_5
				}
			]
		},
		animations: {
			// missing cast, release
			// 221
			stand: stand,
			// 222
			walk: walk,
			// 223
			run: run,
			// 224
			hit: hit,
			// 226
			jump: jump,
			// 227
			attack: attack,
			// 228
			land: land,
			// 229
			dead: dead,
			// 229 idx 5
			sleep: { offset: 5, anim: dead },
			// 229 idx 10
			ill: { offset: 10, anim: dead },
			// 226
			fly: jump
		}
	}
};
