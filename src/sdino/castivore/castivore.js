// @ts-check
import { hit } from './animations/hit.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export let castivore = {
	name: 'castivore',
	palette: [
		[
			// col0
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82', '#B85F1D'],
			// col1
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D'],
			// col2
			[
				'#FFF2DF',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
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
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82', '#B85F1D'],
			// col1
			['#FFF0F0', '#6B8D8E', '#807CA3'],
			// col2
			[
				'#FFF2DF',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
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
			['#F59D89', '#F589AC', '#FF7ECB'],
			// col1
			['#FACFC5', '#E26E94', '#E067AF'],
			// col2
			['#FFC2B4', '#FFA8C4', '#FF98D5'],
			// col3
			['#FFC2B4', '#FFA8C4', '#FF98D5']
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
				tx: 31.4,
				ty: 22.55,
				a: 0.906,
				d: 0.906
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.castivore.shadow,
			transform: {
				tx: -0.65,
				ty: 75.55,
				a: 0.643,
				d: 1.207,
				b: 0.023,
				c: 0
			},
			alpha: 0.289,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 811 p3b
			r_fur: parts_big.right_side_fur,
			// 814 p7b
			r_ear: parts_big.right_ear,
			// 816 col0
			body: parts_big.body,
			// 832 p3a
			l_fur: parts_big.left_side_fur,
			// 838 p4
			head: parts_big.head,
			// 846 p5
			eyes: parts_big.eyes,
			// 863 p8
			b_fur: parts_big.back_fur,
			// 869 p7a
			l_ear: parts_big.left_ear,
			// 873 p9
			nose: parts_big.nose,
			// 878 special
			bow: parts_big.bow,
			// 931 p4b
			mouth: parts_big.mouth,
			// 961 p6
			hair: parts_big.hair,
			// 293
			view: parts_big.view
		},
		animations: {
			// 962
			stand: portrait
		}
	},
	small: {
		width: 0.978,
		height: 0.561,
		transforms: [
			// 397
			{
				partIdx: 1,
				transforms: [
					{
						tx: 13.45,
						ty: 1.35,
						a: 0.888,
						d: 0.888,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 13.45,
						ty: 1.3,
						a: 0.901,
						d: 0.901,
						brightness: 9,
						contrast: 5
					},
					{
						tx: 13.45,
						ty: 1.3,
						a: 0.913,
						d: 0.913,
						brightness: 8,
						contrast: 3
					},
					{
						tx: 13.45,
						ty: 1.2,
						a: 0.926,
						d: 0.926,
						brightness: 7,
						contrast: 3
					},
					{
						tx: 13.45,
						ty: 1.2,
						a: 0.938,
						d: 0.938,
						brightness: 6,
						contrast: 2
					},
					{
						tx: 13.45,
						ty: 1.15,
						a: 0.95,
						d: 0.95,
						brightness: 4,
						contrast: 2
					},
					{
						tx: 13.45,
						ty: 1.1,
						a: 0.963,
						d: 0.963,
						brightness: 3,
						contrast: 1
					},
					{
						tx: 13.45,
						ty: 1.1,
						a: 0.975,
						d: 0.975,
						brightness: 2,
						contrast: 1
					},
					{
						tx: 13.45,
						ty: 1,
						a: 0.988,
						d: 0.988,
						brightness: 1
					},
					{
						tx: 13.45,
						ty: 0.95
					},
					{
						tx: 13.85,
						ty: 0.55,
						a: 1.109,
						d: 1.109,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: -14.85,
				ty: 4.05
			},
			// adjust
			{
				ty: -9.5
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
				tx: -2,
				ty: 0,
				a: 1.351,
				d: 1.129
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 339
			r_ear: parts_small.right_ear,
			// 346
			b_body: parts_small.body_back,
			// 353
			f_body: parts_small.body_front,
			// 353
			m_body: parts_small.body_front,
			// 356
			back: parts_small.back,
			// 358
			nose: parts_small.nose,
			// 367
			hair: parts_small.hair,
			// 370
			l_ear: parts_small.left_ear,
			// 383
			mouth: parts_small.mouth,
			// 387
			special: parts_small.special,
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
			],
			// 154
			fx_dust_1: [
				{
					ref: ref_small.fx.dust,
					colorOffset: {
						r: -11,
						g: -51,
						b: -92
					}
				}
			],
			// 154
			fx_dust_2: [
				{
					ref: ref_small.fx.dust,
					colorOffset: {
						r: -11,
						g: -51,
						b: -92
					}
				}
			],
			// 154
			fx_dust_3: [
				{
					ref: ref_small.fx.dust,
					colorOffset: {
						r: -11,
						g: -51,
						b: -92
					}
				}
			]
		},
		animations: {
			// missing cast, release
			// 388
			stand: stand,
			// 389
			walk: walk,
			// 390
			run: run,
			// 391
			hit: hit,
			// 392
			jump: jump,
			// 393
			attack: attack,
			// 394
			land: land,
			// 395
			dead: dead,
			// 395 idx 5
			sleep: { offset: 5, anim: dead },
			// 395 idx 10
			ill: { offset: 10, anim: dead },
			// 392
			fly: jump
		}
	}
};
