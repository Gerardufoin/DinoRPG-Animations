// @ts-check
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { release } from './animations/release.js';
import { fx_slash } from '../fx/slash.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const quetzu = {
	name: 'quetzu',
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
				'#FFF9AE',
				'#F0DC99'
			],
			// col1
			['#FFF9AE', '#F0DC99', '#ECFFD9'],
			// col2
			[
				'#FFCC79',
				'#D45D5D',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
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
				'#FFF9AE',
				'#F0DC99'
			]
		],
		[
			// col0
			['#EEBE62', '#BF7F60', '#EEC074'],
			// col1
			['#BF7F60', '#EEBE62', '#E0D5B3'],
			// col2
			['#96CCDE', '#987DB8', '#D7CAA1', '#DE9696', '#94B87D', '#D7B5A1'],
			// col3
			['#644F4F', '#D98F39', '#CDA35C']
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
				tx: -15.85,
				ty: -74.35,
				a: 0.95,
				d: 0.95
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.quetzu.shadow,
			transform: {
				tx: 6.4,
				ty: 58.55,
				a: -0.697,
				d: 1.55,
				b: 0.112,
				c: 0.373
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts_under: {
			back_fire: parts_big.back_fire
		},
		parts: {
			// 2924 p5a
			r_back: parts_big.r_back,
			// 2924 p5b
			l_back: parts_big.l_back,
			// 2955 p6
			tail_end: parts_big.tail_end,
			// 3006 p4b
			r_arm: parts_big.r_arm,
			// 3011 p2
			tail: parts_big.tail,
			// 3036 p3
			body: parts_big.body,
			// 3081 p4a
			l_arm: parts_big.l_arm,
			// 3084 special
			l_sideburn_sp: parts_big.l_sideburn_sp,
			// 3192 p7
			head: parts_big.head,
			// 293
			view: parts_big.view
		},
		animations: {
			// 3193
			stand: portrait
		}
	},
	small: {
		width: 0.684,
		height: 0.812,
		transforms: [
			// 1462
			{
				partIdx: 1,
				transforms: [
					{
						tx: -0.7,
						ty: 1.55,
						a: 0.987,
						d: 0.987,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -1,
						ty: 0.95,
						a: 1.016,
						d: 1.016,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -1.25,
						ty: 0.35,
						a: 1.045,
						d: 1.045,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -1.55,
						ty: -0.25,
						a: 1.074,
						d: 1.074,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -1.85,
						ty: -0.9,
						a: 1.104,
						d: 1.104,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -2.1,
						ty: -1.55,
						a: 1.133,
						d: 1.133,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -2.35,
						ty: -2.15,
						a: 1.162,
						d: 1.162,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -2.7,
						ty: -2.8,
						a: 1.191,
						d: 1.191,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -2.9,
						ty: -3.4,
						a: 1.221,
						d: 1.221,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -2.3,
						ty: -4.35,
						a: 1.25,
						d: 1.25,
						brightness: 10,
						contrast: 5
					}
				]
			},
			// 1642
			{
				tx: -10.5,
				ty: -16.8,
				a: 1.141,
				d: 1.141
			},
			// adjust
			{
				tx: 2.15,
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
				tx: 0,
				ty: 0,
				a: 0.968,
				d: 0.709
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 1304 _p5a
			l_back: parts_small.back,
			// 1304 _p5b
			r_back: parts_small.back,
			// 1310
			r_t_arm: parts_small.right_arm_top,
			// 1335 _p4b
			r_b_arm: parts_small.right_arm_bottom,
			// 1348 _p6
			tail_end: parts_small.tail_end,
			// 1351
			tail: parts_small.tail,
			// 1368 _p3
			body: parts_small.body,
			// 1371
			l_t_arm: parts_small.left_arm_top,
			// 1396 _p4a
			l_b_arm: parts_small.left_arm_bottom,
			// 1441 _p7
			head: parts_small.head,
			// 1449
			arm_trail: [
				// 1448
				{
					colorIdx: 0,
					ref: ref_small.quetzu.arm_trail
				}
			],
			// 1454
			fx_slash_1: fx_slash,
			// 1454
			fx_slash_2: fx_slash,
			// 1454
			fx_slash_3: fx_slash,
			// 1455
			claw_trail: [
				{
					ref: ref_small.quetzu.claw_trail
				}
			]
		},
		animations: {
			// missing cast, ill, fly
			// 1442
			stand: stand,
			// 1443
			walk: walk,
			// 1444
			run: run,
			// 1445
			hit: hit,
			// 1446
			jump: jump,
			// 1456
			attack: attack,
			// 1457
			land: land,
			// 1458
			dead: dead,
			// 1459
			sleep: sleep,
			// 1460
			release: release
		}
	}
};
