// @ts-check
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { release } from './animations/release.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref } from '../references.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const moueffe = {
	name: 'moueffe',
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
			['#A9D9DB', '#9C4D00', '#DBA3C5'],
			// col1
			['#73A4A6', '#AA5400', '#8E448D'],
			// col2
			['#52CFD4', '#8E200A', '#B44FB2'],
			// col3
			['#329498', '#B62C12', '#DE5DDC']
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
				tx: -42.05,
				ty: -59.7
			}
		],
		parts: {
			// 102_p6b
			r_arm: parts_big.right_arm,
			// 120_p3b
			r_leg: parts_big.right_leg,
			// 136_p5a
			hair: parts_big.hair,
			// 172_p7
			body: parts_big.body,
			// 186_p3
			l_leg: parts_big.left_leg,
			// 253_p4
			head: parts_big.head,
			// 286_p6
			l_arm: parts_big.left_arm,
			// 291_p5c
			hair_side: parts_big.hair_side,
			// 81_p1
			b_bones: parts_big.back_bones
		},
		animations: {
			// 294
			stand: portrait
		}
	},
	small: {
		width: 0.941,
		height: 0.8,
		transforms: [
			// 163
			{
				partIdx: 1,
				transforms: [
					{
						tx: -0.65,
						ty: 2.05,
						a: 0.797,
						d: 0.797,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -0.6,
						ty: 1.8,
						a: 0.819,
						d: 0.819,
						brightness: 9,
						contrast: 5
					},
					{
						tx: -0.55,
						ty: 1.55,
						a: 0.842,
						d: 0.842,
						brightness: 8,
						contrast: 3
					},
					{
						tx: -0.45,
						ty: 1.3,
						a: 0.865,
						d: 0.865,
						brightness: 7,
						contrast: 3
					},
					{
						tx: -0.4,
						ty: 1.1,
						a: 0.887,
						d: 0.887,
						brightness: 6,
						contrast: 2
					},
					{
						tx: -0.35,
						ty: 0.85,
						a: 0.91,
						d: 0.91,
						brightness: 4,
						contrast: 2
					},
					{
						tx: -0.3,
						ty: 0.6,
						a: 0.932,
						d: 0.932,
						brightness: 3,
						contrast: 1
					},
					{
						tx: -0.25,
						ty: 0.35,
						a: 0.955,
						d: 0.955,
						brightness: 2,
						contrast: 1
					},
					{
						tx: -0.15,
						ty: 0.1,
						a: 0.977,
						d: 0.977,
						brightness: 1
					},
					{
						tx: 0,
						ty: 0
					},
					{
						tx: -0.05,
						ty: -1.1,
						a: 1.069,
						d: 1.069,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: 0.0,
				ty: 0.85,
				a: 0.915,
				d: 0.915
			},
			// adjust
			{
				ty: -11.5
			}
		],
		glow: {
			distance: 1.3,
			color: 0x330000,
			quality: 1,
			strength: 0.3
		},
		shadow: {
			ref: ref.fx.shadow,
			transform: {
				tx: -0.8,
				ty: 0,
				a: 1.351,
				d: 1.129
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 79
			b_bones: parts_small.back_bones,
			// 82
			r_arm: parts_small.right_arm,
			// 88
			r_foot: parts_small.right_foot,
			// 91
			l_leg_connector: parts_small.connector_1,
			// 92
			r_arm_connector: parts_small.connector_2,
			// 92
			r_leg_connector: parts_small.connector_2,
			// 92
			l_arm_connector: parts_small.connector_2,
			// 98
			r_leg: parts_small.right_leg,
			// 110
			body: parts_small.body,
			// 123
			head: parts_small.head,
			// 127
			l_foot: parts_small.left_foot,
			// 132
			l_leg: parts_small.left_leg,
			// 139
			l_arm: parts_small.left_arm,
			// 160
			r_hand: parts_small.hand,
			// 160
			l_hand: parts_small.hand,
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
			],
			// 154
			fx_dust_1: fx_dust,
			// 154
			fx_dust_2: fx_dust,
			// 154
			fx_dust_3: fx_dust
		},
		animations: {
			// cast(140), sleep are same as stand
			// missing fly, ill
			// 141
			stand: stand,
			// 142
			walk: walk,
			// 143
			run: run,
			// 144
			hit: hit,
			// 145
			jump: jump,
			// 151
			attack: attack,
			// 152
			land: land,
			// 157
			dead: dead,
			// 161
			release: release
		}
	}
};
