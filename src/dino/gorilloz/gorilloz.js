// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { release } from './animations/release.js';
import { ref as ref_small } from '../references_small.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const gorilloz = {
	name: 'gorilloz',
	palette: [
		[
			// col0
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82', '#825353'],
			// col1
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D'],
			// col2
			[
				'#4F677D',
				'#A2886F',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#8BA3D7',
				'#67CA02',
				'#D31818',
				'#B85F1D',
				'#00CCFF'
			],
			// col3
			['#F8F718', '#DDE875', '#7BB93E']
		],
		[
			// col0
			['#F4E6D7'],
			// col1
			['#C68768'],
			// col2
			['#66CCFF'],
			// col3
			['#66CCFF']
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
				tx: 25.65,
				ty: -5.3
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.gorilloz.shadow,
			transform: {
				tx: 2.4,
				ty: 54.75,
				a: -1.142,
				d: 1.899,
				b: 0.174,
				c: 0.219
			},
			alpha: 0.18,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 1579
			l_foot: parts_big.left_foot,
			// 1582
			hands: parts_big.hands,
			// 1589 p8b
			r_arm: parts_big.right_arm,
			// 1592
			body: parts_big.body,
			// 1595 p5b
			r_ear: parts_big.right_ear,
			// 1598
			l_leg: parts_big.left_leg,
			// 1624 p7
			b_hair: parts_big.back_hair,
			// 1629 p9b
			r_sideburn: parts_big.right_sideburn,
			// 1654 p3
			mouth: parts_big.mouth,
			// 1661 p5a
			l_ear: parts_big.left_ear,
			// 1666 p9a
			l_sideburn: parts_big.left_sideburn,
			// 1680 p8a
			l_arm: parts_big.left_arm,
			// 1725 p6
			eyes: parts_big.eyes,
			// 1736 p7c
			f_hair: parts_big.front_hair,
			// 1743 p4
			nose: parts_big.nose,
			// 1745 special
			special: parts_big.special,
			// 293
			view: parts_big.view
		},
		animations: {
			// 1746
			stand: portrait
		}
	},
	small: {
		width: 0.718,
		height: 0.666,
		transforms: [
			// 710
			{
				partIdx: 1,
				transforms: [
					{
						tx: -10.6,
						ty: 3.95,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -10.8,
						ty: 3.75,
						a: 1.017,
						d: 1.017,
						brightness: 9,
						contrast: 5
					},
					{
						tx: -11,
						ty: 3.6,
						a: 1.034,
						d: 1.034,
						brightness: 8,
						contrast: 3
					},
					{
						tx: -11.15,
						ty: 3.4,
						a: 1.052,
						d: 1.052,
						brightness: 7,
						contrast: 3
					},
					{
						tx: -11.35,
						ty: 3.2,
						a: 1.069,
						d: 1.069,
						brightness: 6,
						contrast: 2
					},
					{
						tx: -11.55,
						ty: 3.05,
						a: 1.086,
						d: 1.086,
						brightness: 4,
						contrast: 2
					},
					{
						tx: -11.75,
						ty: 2.9,
						a: 1.103,
						d: 1.103,
						brightness: 3,
						contrast: 1
					},
					{
						tx: -11.9,
						ty: 2.7,
						a: 1.121,
						d: 1.121,
						brightness: 2,
						contrast: 1
					},
					{
						tx: -12.1,
						ty: 2.55,
						a: 1.138,
						d: 1.138,
						brightness: 1
					},
					{
						tx: -12.3,
						ty: 2.35,
						a: 1.155,
						d: 1.155
					},
					{
						tx: -14.3,
						ty: 2.75,
						a: 1.408,
						d: 1.408,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: -0.95,
				ty: 2.0
			},
			// adjust
			{
				ty: -9.65
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
				a: 0.839,
				d: 0.839
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 669
			r_foot: parts_small.hand,
			// 669
			l_foot: parts_small.hand,
			// 669
			r_hand: parts_small.hand,
			// 674 p8b
			r_arm: parts_small.arm,
			// 677
			body: parts_small.body,
			// 690 p7a
			head: parts_small.head,
			// 693 p3
			face: parts_small.face,
			// 698 p5a
			l_ear: parts_small.ear,
			// 669
			l_hand: parts_small.hand,
			// 674 p8a
			l_arm: parts_small.arm,
			// 160
			l_o_hand: parts_small.open_hand,
			// 160
			r_o_hand: parts_small.open_hand,
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
			fx_dust_1: fx_dust,
			// 154
			fx_dust_2: fx_dust,
			// 154
			fx_dust_3: fx_dust
		},
		animations: {
			// missing cast
			// sleep same as stand
			// 700
			stand: stand,
			// 701
			walk: walk,
			// 702
			run: run,
			// 703
			hit: hit,
			// 704
			jump: jump,
			// 705
			attack: attack,
			// 706
			land: land,
			// 707
			dead: dead,
			// 700 idx 5
			ill: { offset: 5, anim: stand },
			// 704
			fly: jump,
			// 705
			release: release
		}
	}
};
