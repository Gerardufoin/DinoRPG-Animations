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
import { big } from './animations/big.js';
import { special } from './animations/special.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export let toufufu = {
	name: 'toufufu',
	palette: [
		[
			// col0
			['#C69D52', '#B4B376', '#D9AA63', '#BF9D75', '#D0B098', '#D2B377', '#ECC1A9'],
			// col1
			['#BB1D1D', '#DF7E37', '#C48181', '#B5D3F0', '#FFF9AE', '#F0DC99', '#FCE647', '#838383'],
			// col2
			['#A13F3F', '#B85F1D', '#B14949', '#D5EAFF', '#FFF9AE', '#F0DC99', '#FFFF5E', '#A1A1A1'],
			// col3
			['#8E98FF', '#94F587', '#DD85FF', '#60E5E1', '#FF5151', '#5176E2', '#FFFF5E', '#A1A1A1']
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
				tx: -35.3,
				ty: -47.35,
				a: 1.151,
				d: 1.151
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.toufufu.shadow,
			transform: {
				tx: 3.2,
				ty: 56.95,
				a: -0.706,
				d: 1.157,
				b: 0.027,
				c: 0.134
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 2684 p7b
			r_sideburn: parts_big.right_sideburn,
			// 2697 p6a
			r_leg: parts_big.right_leg,
			// 2702
			body: parts_big.body,
			// 2705
			navel: parts_big.navel,
			// 2716 p6b
			l_leg: parts_big.left_leg,
			// 2720 special
			s_outfit: parts_big.special_outfit,
			// 2760 p5b
			r_arm: parts_big.right_arm,
			// 2768 p2
			head: parts_big.head,
			// 2809 p3
			eyes: parts_big.eyes,
			// 2837 p8
			mouth: parts_big.mouth,
			// 2886 p7a
			hair: parts_big.hair,
			// 2892 p5
			l_arm: parts_big.left_arm,
			// 293
			view: parts_big.view
		},
		animations: {
			// 2893
			stand: portrait
		}
	},
	small: {
		width: 0.686,
		height: 0.656,
		transforms: [
			// 1290
			{
				partIdx: 1,
				transforms: [
					{
						tx: 0,
						ty: 0,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -0.8,
						a: 1.018,
						d: 1.028,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -1.6,
						a: 1.037,
						d: 1.057,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -2.4,
						a: 1.055,
						d: 1.085,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -3.2,
						a: 1.073,
						d: 1.114,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -0.05,
						ty: -4,
						a: 1.092,
						d: 1.142,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -0.05,
						ty: -4.8,
						a: 1.11,
						d: 1.171,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -5.6,
						a: 1.128,
						d: 1.199,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -6.4,
						a: 1.147,
						d: 1.228,
						brightness: 10,
						contrast: 5
					},
					{
						tx: 0,
						ty: -7.2,
						a: 1.165,
						d: 1.256,
						brightness: 10,
						contrast: 5
					}
				]
			},
			// 1642
			{
				tx: -16.9,
				ty: -12.8
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
			// 1162
			tail: parts_small.tail,
			// 1137
			r_foot: parts_small.right_foot,
			// 1140
			r_u_leg: parts_small.upper_leg,
			// 1156
			r_l_leg: parts_small.lower_leg,
			// 1159
			r_u_arm: parts_small.upper_arm,
			// 1177
			r_l_arm: parts_small.lower_arm,
			// 1174
			r_hand: parts_small.hand,
			// 1171
			body: parts_small.body,
			// 1260
			head: parts_small.head,
			// 1159
			l_u_arm: parts_small.upper_arm,
			// 1177
			l_l_arm: parts_small.lower_arm,
			// 1174
			l_hand: parts_small.hand,
			// 1180
			l_foot: parts_small.left_foot,
			// 1137-1
			l_foot_run: parts_small.right_foot,
			// 1140
			l_u_leg: parts_small.upper_leg,
			// 1156
			l_l_leg: parts_small.lower_leg,
			// 1269
			trail: [
				{
					ref: ref_small.toufufu.attack_trail
				}
			],
			// 1270
			fx_shock_1: [
				{
					ref: ref_small.fx.shock_1
				}
			],
			// 1271
			fx_shock_2: [
				{
					ref: ref_small.fx.shock_2
				}
			],
			// 1272
			fx_shock_3: [
				{
					ref: ref_small.fx.shock_3
				}
			],
			// 1273
			fx_shock_4: [
				{
					ref: ref_small.fx.shock_4
				}
			],
			// 1274
			fx_shock_5: [
				{
					ref: ref_small.fx.shock_5
				}
			],
			// 1275
			fx_shock_6: [
				{
					ref: ref_small.fx.shock_6
				}
			],
			// 1276
			fx_shock_7: [
				{
					ref: ref_small.fx.shock_7
				}
			],
			// 1174
			hand_atk_1: parts_small.hand,
			// 1174
			hand_atk_2: parts_small.hand,
			// 1174
			hand_atk_3: parts_small.hand,
			// 1174
			hand_atk_4: parts_small.hand,
			fx_dust_1: fx_dust,
			fx_dust_2: fx_dust,
			fx_dust_3: fx_dust,
			// 1287
			fx_dodge: [
				// 1286
				{
					colorIdx: 2,
					ref: ref_small.fx.dodge
				}
			]
		},
		animations: {
			// missing cast
			// sleep, fly same as stand
			// 1262
			stand: stand,
			// 1263
			walk: walk,
			// 1264
			run: run,
			// 1265
			hit: hit,
			// 1266
			jump: jump,
			// 1277
			attack: attack,
			// 1278
			land: land,
			// 1279
			dead: dead,
			// 1280
			sleep: sleep,
			// 1280 idx 5
			ill: { offset: 5, anim: sleep },
			// 1283
			big: big,
			// 1284
			release: release,
			// 1288
			special: special
		}
	}
};
