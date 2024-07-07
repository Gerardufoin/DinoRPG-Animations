// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
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

export const triceragon = {
	name: 'triceragon',
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
				'#B85F1D',
				'#CC5858',
				'#FFF9AE',
				'#F0DC99',
				'#BBDB71',
				'#CC5858',
				'#E74308',
				'#C0F41B',
				'#14DB44',
				'#037259',
				'#E96542',
				'#603F83',
				'#25C1BC',
				'#992245'
			],
			// col1
			['#FFF2DF', '#ECFFD9', '#FAF6CA', '#FFE5A6', '#E6F2FF', '#FAD5D5', '#FFFCE6'],
			// col2
			['#E74308', '#C0F41B', '#14DB44', '#037259', '#E96542', '#603F83', '#25C1BC'],
			// col3
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D']
		],
		[
			// col0
			['#FBCD15', '#FFCC79', '#FFAA1E'],
			// col1
			['#D27709', '#FFE479', '#FFF0B6'],
			// col2
			['#DE2222', '#F73F3F', '#FF8080', '#8EC436', '#6BBD7C', '#80FFB5', '#7C8AC4', '#6693D2', '#D680FF'],
			// col3
			['#FFF2DF', '#FFF9AE', '#FFAA1E']
		],
		[
			// col0
			['#E75F5F', '#FF9F85', '#FFDAD0'],
			// col1
			['#E97676', '#FF8585', '#FFA6A6'],
			// col2
			['#DE2222', '#F73F3F', '#FF8080'],
			// col3
			['#FF3535', '#FF7E77', '#FF9F85']
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
				tx: -13.15,
				ty: -81
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.smog.shadow,
			transform: {
				tx: 13.3,
				ty: 56.55,
				a: -1.051,
				d: 1.298,
				b: 0.187,
				c: 0.15
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 3397 p8
			tail: parts_big.tail,
			// 3415
			body: parts_big.body,
			// 3434
			sp_saddle: parts_big.sp_saddle,
			// 3437
			sp_handles: parts_big.sp_handles,
			// 3476 p5
			frill: parts_big.frill,
			// 3487 p3b
			r_eye: parts_big.right_eye,
			// 3504 p6b
			r_horn: parts_big.right_horn,
			// 3518 p4
			mouth: parts_big.mouth,
			// 3538 p6a
			l_horn: parts_big.left_horn,
			// 3557 p6c
			m_horn: parts_big.middle_horn,
			// 3572 p3a
			l_eye: parts_big.left_eye,
			// 293
			view: parts_big.view
		},
		animations: {
			// 3573
			stand: portrait
		}
	},
	small: {
		width: 0.684,
		height: 0.812,
		transforms: [
			// 1639
			{
				partIdx: 1,
				transforms: [
					{
						tx: 0.35,
						ty: 1.7,
						a: 0.883,
						d: 0.883,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0.55,
						ty: 1.35,
						a: 0.922,
						d: 0.922,
						brightness: 9,
						contrast: 5
					},
					{
						tx: 0.75,
						ty: 0.95,
						a: 0.962,
						d: 0.962,
						brightness: 8,
						contrast: 3
					},
					{
						tx: 0.9,
						ty: 0.6,
						a: 1.002,
						d: 1.002,
						brightness: 7,
						contrast: 3
					},
					{
						tx: 1.1,
						ty: 0.25,
						a: 1.041,
						d: 1.041,
						brightness: 6,
						contrast: 2
					},
					{
						tx: 1.3,
						ty: -0.15,
						a: 1.081,
						d: 1.081,
						brightness: 4,
						contrast: 2
					},
					{
						tx: 1.5,
						ty: -0.5,
						a: 1.12,
						d: 1.12,
						brightness: 3,
						contrast: 1
					},
					{
						tx: 1.65,
						ty: -0.85,
						a: 1.16,
						d: 1.16,
						brightness: 2,
						contrast: 1
					},
					{
						tx: 1.85,
						ty: -1.25,
						a: 1.199,
						d: 1.199,
						brightness: 1
					},
					{
						tx: 2.05,
						ty: -1.9,
						a: 1.239,
						d: 1.239
					},
					{
						tx: 2.3,
						ty: -0.9,
						a: 1.339,
						d: 1.339,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: 1.2,
				ty: -1.9
			},
			// adjust
			{
				ty: -7.5
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
				tx: -2.15,
				ty: 0,
				a: 0.968,
				d: 0.709
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 1569 _p8
			tail: parts_small.tail,
			// 1573
			l_f_leg: parts_small.leg,
			// 1573
			l_b_leg: parts_small.leg,
			// 1573
			r_f_leg: parts_small.leg,
			// 1573
			r_b_leg: parts_small.leg,
			// 1575
			body: parts_small.body,
			// 1582 _p6
			back: parts_small.back,
			// 1590 _p3a
			l_eye: parts_small.eye,
			// 1590 _p3b
			r_eye: parts_small.eye,
			// 1595 _p4
			head: parts_small.head,
			// 1602 _p6c
			nose: parts_small.nose,
			// 1620 _p5
			frill: parts_small.frill,
			// 1626 _p6a
			l_horn: parts_small.horn,
			// 1626 _p6b
			r_horn: parts_small.horn
		},
		animations: {
			// missing cast, release
			// sleep same as stand
			// 1628
			stand: stand,
			// 1629
			walk: walk,
			// 1630
			run: run,
			// 1631
			hit: hit,
			// 1632
			jump: jump,
			// 1633
			attack: attack,
			// 1634
			land: land,
			// 1635
			dead: dead,
			// 1628 idx 5
			ill: { offset: 5, anim: stand },
			// 1637
			fly: fly
		}
	}
};
