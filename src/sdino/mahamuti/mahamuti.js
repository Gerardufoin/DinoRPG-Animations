// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { release } from './animations/release.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

// 2355
const big_shadow = {
	ref: ref_big.mahamuti.shadow,
	transform: {
		tx: 0.7,
		ty: 5.9,
		a: -0.585,
		d: 0.96,
		b: 0.022,
		c: 0.111
	},
	alpha: 0.238,
	blur: { x: 8, y: 1 }
};

export const mahamuti = {
	name: 'mahamuti',
	palette: [
		[
			// col0
			[
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#CCFFFF',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#CCFFFF',
				'#DDB4AA'
			],
			// col1
			[
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#FFCCCC',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#DDF5FF',
				'#DDB4AA',
				'#FFCC79',
				'#FFE6AA',
				'#EAC084',
				'#FBCFA6',
				'#ECAB82',
				'#B85F1D'
			],
			// col2
			[
				'#C8E063',
				'#D5EB7A',
				'#9AB45C',
				'#E67777',
				'#6181AF',
				'#D7745B',
				'#74BEB7',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
				'#DF7E37',
				'#B85F1D'
			],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#ECFFD9', '#CBFF97', '#D5EAFF']
		],
		[
			// col0
			['#B16161', '#B13A30', '#FABE2B', '#A1B1BB'],
			// col1
			['#832E2E', '#E0584E', '#FAE12B', '#8B9FAA'],
			// col2
			['#802A2A', '#8C3029', '#FF9210', '#6D848C'],
			// col3
			['#A62626', '#A64A44', '#FFAA1E', '#7A858C']
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
				tx: 17.05,
				ty: 34.55
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		// 2357
		shadow: {
			partIdx: 1,
			frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8],
			transform: {
				tx: -16.6,
				ty: 58.45,
				a: -1,
				d: 1
			},
			parts: [
				{
					transform: {
						tx: -10.05,
						ty: -0.2,
						a: 1.347,
						d: 1.22,
						b: 0.182,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -13.25,
						ty: -0.1,
						a: 1.411,
						d: 1.267,
						b: 0.199,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -16.35,
						ty: -0.1,
						a: 1.475,
						d: 1.313,
						b: 0.215,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -19.55,
						ty: -0.1,
						a: 1.54,
						d: 1.359,
						b: 0.231,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -22.6,
						ty: -0.1,
						a: 1.603,
						d: 1.406,
						b: 0.254,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -25.75,
						ty: 0,
						a: 1.667,
						d: 1.452,
						b: 0.272,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -28.9,
						ty: 0.05,
						a: 1.731,
						d: 1.498,
						b: 0.291,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -32.1,
						ty: 0.05,
						a: 1.794,
						d: 1.545,
						b: 0.31,
						c: 0
					},
					parts: [[big_shadow]]
				},
				{
					transform: {
						tx: -35,
						ty: 0.35,
						a: 1.857,
						d: 1.591,
						b: 0.338,
						c: 0
					},
					parts: [[big_shadow]]
				}
			]
		},
		parts: {
			// 2360
			hooves: parts_big.hooves,
			// 2365 p6b
			b_legs: parts_big.back_legs,
			// 2369 p2
			body: parts_big.body,
			// 2382 p6a
			f_leg: parts_big.front_leg,
			// 2385 p5
			back: parts_big.back,
			// 2393 p7b
			r_tusk: parts_big.right_tusk,
			// 2396
			r_tusk_fur: parts_big.right_tusk_fur,
			// 2407 p4b
			r_ear: parts_big.right_ear,
			// 2412 p3b
			hair_shadow: parts_big.hair_shadow,
			// 2415
			head: parts_big.head,
			// 2453 p8
			eyes: parts_big.eyes,
			// 2466 p3
			hair: parts_big.hair,
			// 2482 p4a
			l_ear: parts_big.left_ear,
			// 2502 p9
			trunk: parts_big.trunk,
			// 2508 p7a
			l_tusk_back: parts_big.left_tusk_back,
			// 2511
			l_tusk_fur: parts_big.left_tusk_fur,
			// 2515_p7c
			l_tusk_front: parts_big.left_tusk_front,
			// 293
			view: parts_big.view
		},
		animations: {
			// 2516
			stand: portrait
		}
	},
	small: {
		width: 0.78,
		height: 0.719,
		transforms: [
			// 1044
			{
				partIdx: 1,
				transforms: [
					{
						tx: 2.8,
						ty: 0.75,
						a: 1.113,
						d: 1.113,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 3.5,
						ty: 0.4,
						a: 1.143,
						d: 1.143,
						brightness: 9,
						contrast: 5
					},
					{
						tx: 4.1,
						ty: 0.1,
						a: 1.174,
						d: 1.174,
						brightness: 7,
						contrast: 3
					},
					{
						tx: 4.8,
						ty: -0.3,
						a: 1.204,
						d: 1.204,
						brightness: 6,
						contrast: 3
					},
					{
						tx: 5.4,
						ty: -0.6,
						a: 1.234,
						d: 1.234,
						brightness: 5,
						contrast: 2
					},
					{
						tx: 6.05,
						ty: -1,
						a: 1.264,
						d: 1.264,
						brightness: 4,
						contrast: 1
					},
					{
						tx: 6.65,
						ty: -1.4,
						a: 1.294,
						d: 1.294,
						brightness: 2,
						contrast: 1
					},
					{
						tx: 7.35,
						ty: -1.7,
						a: 1.324,
						d: 1.324,
						brightness: 1
					},
					{
						tx: 7.95,
						ty: -2.1,
						a: 1.355,
						d: 1.355
					},
					{
						tx: 7.95,
						ty: -2.1,
						a: 1.355,
						d: 1.355,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: 3.1,
				ty: -1.75
			},
			// adjust
			{
				tx: -4.5,
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
				tx: -1.4,
				ty: 0,
				a: 0.709,
				d: 0.709
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 968
			r_b_leg: parts_small.leg,
			// 968
			r_f_leg: parts_small.leg,
			// 984
			body: parts_small.body,
			// 968
			l_b_leg: parts_small.leg,
			// 968
			l_f_leg: parts_small.leg,
			// 983
			r_ear: parts_small.ear,
			// 985 _p6
			back: parts_small.back,
			// 992
			r_tusk: parts_small.tusk_side,
			// 995
			r_t_fur: parts_small.tusk_fur,
			// 999 _p3b
			r_eye: parts_small.eye,
			// 1002
			head: parts_small.head,
			// 983
			l_ear: parts_small.ear,
			// 999 _p3a
			l_eye: parts_small.eye,
			// 1005 _special
			special: parts_small.special,
			// 1017
			hair: parts_small.hair,
			// 1021
			trunk_top: parts_small.trunk,
			// 1021
			trunk_mid: parts_small.trunk,
			// 1021
			trunk_bottom: parts_small.trunk,
			// 1024
			trunk_end: parts_small.trunk_end,
			// 1031
			l_tusk: parts_small.tusk_front,
			// 995
			l_tusk_fur: parts_small.tusk_fur,
			// 991
			l_tusk_anim: parts_small.tusk_side
		},
		animations: {
			// missing cast
			// sleep, fly same as stand
			// 1034
			stand: stand,
			// 1035
			walk: walk,
			// 1036
			run: run,
			// 1037
			hit: hit,
			// 1038
			jump: jump,
			// 1039
			attack: attack,
			// 1040
			land: land,
			// 1041
			dead: dead,
			// 1034 idx 5
			ill: { offset: 5, anim: stand },
			// 1038
			fly: jump,
			// 1042
			release: release
		}
	}
};
