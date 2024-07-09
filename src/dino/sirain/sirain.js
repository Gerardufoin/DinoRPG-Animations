// @ts-check
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { jump } from './animations/jump.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const sirain = {
	name: 'sirain',
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
			['#A9D9DB', '#CC8AE5', '#EC9EC0'],
			// col1
			['#73A4A6', '#945FA8', '#D0769D'],
			// col2
			['#52CFD4', '#FFD035', '#FFD035'],
			// col3
			['#329498', '#FFDB64', '#FFDB64']
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
				tx: 32.6,
				ty: 11.7
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.sirain.shadow,
			transform: {
				tx: 10.15,
				ty: 54.15,
				a: -0.69,
				d: 1.298,
				b: 0.105,
				c: 0.15
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts_under: {
			tail_bubble: parts_big.tail_bubble
		},
		parts: {
			// 1289_p5b
			r_ear: parts_big.right_ear,
			// 1297_p7b
			r_leg: parts_big.right_leg,
			// 1312_p8
			tail: parts_big.tail,
			// 1315_p4b
			r_eye: parts_big.right_eye,
			// 1331_p6
			body: parts_big.body,
			// 1351_p3
			head: parts_big.head,
			// 1363_p7a
			l_leg: parts_big.left_leg,
			// 1385_p4a
			l_eye: parts_big.left_eye,
			// 1404_p5a
			l_ear: parts_big.left_ear,
			// 293
			view: parts_big.view
		},
		animations: {
			// 1405
			stand: portrait
		}
	},
	small: {
		width: 0.59,
		height: 0.66,
		transforms: [
			// 600
			{
				partIdx: 1,
				transforms: [
					{
						tx: 3,
						ty: -0.8,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 3,
						ty: -0.85,
						a: 1.017,
						d: 1.017,
						brightness: 9,
						contrast: 5
					},
					{
						tx: 3,
						ty: -0.95,
						a: 1.033,
						d: 1.033,
						brightness: 8,
						contrast: 3
					},
					{
						tx: 3.05,
						ty: -1,
						a: 1.05,
						d: 1.05,
						brightness: 7,
						contrast: 3
					},
					{
						tx: 3.05,
						ty: -1.1,
						a: 1.066,
						d: 1.066,
						brightness: 6,
						contrast: 2
					},
					{
						tx: 3.05,
						ty: -1.15,
						a: 1.083,
						d: 1.083,
						brightness: 4,
						contrast: 2
					},
					{
						tx: 3.05,
						ty: -1.25,
						a: 1.099,
						d: 1.099,
						brightness: 3,
						contrast: 1
					},
					{
						tx: 3.1,
						ty: -1.3,
						a: 1.116,
						d: 1.116,
						brightness: 2,
						contrast: 1
					},
					{
						tx: 3.1,
						ty: -1.4,
						a: 1.132,
						d: 1.132,
						brightness: 1
					},
					{
						tx: 3.1,
						ty: -1.5,
						a: 1.149,
						d: 1.149
					},
					{
						tx: 3.2,
						ty: -2.8,
						a: 1.317,
						d: 1.317,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: -0.8,
				ty: 0.9
			},
			// adjust
			{
				ty: -8.55
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
			// 559
			tail: parts_small.tail,
			// 565
			r_leg: parts_small.leg,
			// 571
			body: parts_small.body,
			// 578
			r_ear: parts_small.ear,
			// 585
			head: parts_small.head,
			// 578
			l_ear: parts_small.ear,
			// 565
			l_leg: parts_small.leg,
			// 589
			eye: parts_small.eye,
			// 154
			fx_dust_1: parts_small.fx_dust,
			// 154
			fx_dust_2: parts_small.fx_dust,
			// 154
			fx_dust_3: parts_small.fx_dust
		},
		animations: {
			// missing cast, release
			// sleep same as stand
			// 591
			stand: stand,
			// 592
			walk: walk,
			// 593
			run: run,
			// 594
			hit: hit,
			// 595
			jump: jump,
			// 596
			attack: attack,
			// 597
			land: land,
			// 598
			dead: dead,
			// 591 idx 5
			ill: { offset: 5, anim: stand },
			// 595
			fly: jump
		}
	}
};
