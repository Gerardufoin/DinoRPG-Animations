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

export const santaz = {
	name: 'santaz',
	palette: [
		[
			// col0
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82', '#B85F1D'],
			// col1
			[
				'#FFF2DF',
				'#F4E8B5',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#64616B',
				'#DE8E58',
				'#B85F1D',
				'#D5EAFF',
				'#F5F2DE',
				'#FFFFF7',
				'#F5F2DE'
			],
			// col2
			[
				'#FFF2DF',
				'#F4E8B5',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#64616B',
				'#DE8E58',
				'#B85F1D',
				'#D5EAFF',
				'#F5F2DE',
				'#FFFFF7',
				'#F5F2DE'
			],
			// col3
			['#FFCC79', '#DBB576', '#FFF9AE', '#F0DC99']
		],
		[
			// col0
			['#EEC04E', '#EEC04E', '#EEC04E'],
			// col1
			['#FBCD15', '#FBCD15', '#FBCD15'],
			// col2
			['#FBCD15', '#FBCD15', '#FBCD15'],
			// col3
			['#FFC32E', '#5D5044', '#C22E2E']
		],
		[
			// col0
			['#EC9999', '#AD5757'],
			// col1
			['#9F7777', '#EC9999'],
			// col2
			['#EC9999', '#BB6060'],
			// col3
			['#AF7777', '#EC9999', '#5D2121', '#D688EC', '#FF80BE', '#80FFBC', '#49C4C0']
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
				tx: 34.85,
				ty: 8.7
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.santaz.shadow,
			transform: {
				tx: 0.5,
				ty: 58.75,
				a: -0.629,
				d: 1.046,
				b: 0.096,
				c: 0.121
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 1902
			l_b_leg: parts_big.left_back_leg,
			// 1909 p3b
			r_eye: parts_big.right_eye,
			// 1915
			r_f_leg: parts_big.right_front_leg,
			// 1921
			body: parts_big.body,
			// 1925
			l_f_leg: parts_big.left_front_leg,
			// 1934 p6
			back: parts_big.back,
			// 1941 special
			special: parts_big.special,
			// 1967 p8
			antlers: parts_big.antlers,
			// 1974 p5c
			r_sideburn: parts_big.right_sideburn,
			// 1977 p7b
			r_ear: parts_big.right_ear,
			// 1982
			head: parts_big.head,
			// 2009 p4
			nose: parts_big.nose,
			// 2016 p3a
			l_eye: parts_big.left_eye,
			// 2025_p5a
			beard: parts_big.beard,
			// 2028
			mouth: parts_big.mouth,
			// 2035 p5b
			l_sideburn: parts_big.left_sideburn,
			// 2038 p7a
			l_ear: parts_big.left_ear,
			// 2057 p9
			hair: parts_big.hair,
			// 2060 p8c
			antlers_side: parts_big.antlers_side,
			// 293
			view: parts_big.view
		},
		animations: {
			// 1897
			stand: portrait
		}
	},
	small: {
		width: 0.529,
		height: 0.696,
		transforms: [
			// 855
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
				tx: 0.6,
				ty: -1.75
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
				tx: 0,
				ty: 0,
				a: 0.709,
				d: 0.709
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 779
			r_b_leg: parts_small.leg,
			// 779
			r_f_leg: parts_small.leg,
			// 782
			body: parts_small.body,
			// 779
			l_b_leg: parts_small.leg,
			// 779
			l_f_leg: parts_small.leg,
			// 787 _p6
			back: parts_small.back,
			// 794 _special
			special: parts_small.special,
			// 798 _p3b
			r_eye: parts_small.eye,
			// 817 _p3b
			r_antler: parts_small.antler,
			// 820
			head: parts_small.head,
			// 823
			l_ear: parts_small.ear,
			// 831 _p4
			nose: parts_small.nose,
			// 798 _p3a
			l_eye: parts_small.eye,
			// 817 _p3a
			l_antler: parts_small.antler,
			// 844 _p9
			hair: parts_small.hair
		},
		animations: {
			// missing cast, release
			// sleep same as stand
			// 846
			stand: stand,
			// 847
			walk: walk,
			// 848
			run: run,
			// 849
			hit: hit,
			// 850
			jump: jump,
			// 851
			attack: attack,
			// 852
			land: land,
			// 853
			dead: dead,
			// 846 idx 5
			ill: { offset: 5, anim: stand },
			// 850
			fly: jump
		}
	}
};
