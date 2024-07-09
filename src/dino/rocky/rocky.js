// @ts-check
import { ref } from '../references_small.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { jump } from './animations/jump.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_big } from '../references_big.js';
import { parts_small } from './parts_small.js';
import { portrait } from './animations/portrait.js';
import { parts_big } from './parts_big.js';

export const rocky = {
	name: 'rocky',
	palette: [
		[
			// col0
			[
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#DACBBE',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#DCCCBC',
				'#DDB4AA'
			],
			// col1
			[
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#DACBBE',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#DCCCBC',
				'#DDB4AA'
			],
			// col2
			['#C8E063', '#D5EB7A', '#9AB45C', '#B9E27A', '#B4AA5C', '#D7745B', '#74BEB7'],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#EEFFD7', '#CBFF97', '#D5EAFF']
		],
		[
			// col0
			['#8A6060', '#F0CD56'],
			// col1
			['#8A6060', '#F0CD56'],
			// col2
			['#C8E063', '#D5EB7A', '#9AB45C', '#B9E27A', '#B4AA5C', '#D7745B', '#74BEB7'],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#EEFFD7', '#CBFF97', '#D5EAFF']
		],
		[
			// col0
			['#95B895', '#B3D3D7'],
			// col1
			['#95B895', '#B3D3D7'],
			// col2
			['#C8E063', '#D5EB7A', '#9AB45C', '#B9E27A', '#B4AA5C', '#D7745B', '#74BEB7'],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#EEFFD7', '#CBFF97', '#D5EAFF']
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
				tx: 2.65,
				ty: -11.75,
				a: 1.058,
				d: 1.058
			}
		],
		glow: {
			distance: 1,
			color: 0x660000,
			quality: 1,
			strength: 2
		},
		shadow: {
			ref: ref_big.rocky.shadow,
			transform: {
				tx: 0.9,
				ty: 60.3,
				a: 0.58,
				d: 0.735,
				b: 0.066,
				c: -0.388
			},
			alpha: 0.289,
			blur: { x: 10, y: 0 }
		},
		parts: {
			// 1116
			body: parts_big.body,
			// 293
			view: parts_big.view
		},
		animations: {
			// 1117
			stand: portrait
		}
	},
	small: {
		width: 0.989,
		height: 0.927,
		transforms: [
			// 468
			{
				partIdx: 1,
				transforms: [
					{
						tx: -2.65,
						ty: 2.55,
						a: 0.882,
						d: 0.882,
						brightness: 10,
						contrast: 5
					},
					{
						tx: -2.6,
						ty: 2.45,
						a: 0.895,
						d: 0.895,
						brightness: 9,
						contrast: 5
					},
					{
						tx: -2.55,
						ty: 2.35,
						a: 0.908,
						d: 0.908,
						brightness: 8,
						contrast: 3
					},
					{
						tx: -2.5,
						ty: 2.3,
						a: 0.922,
						d: 0.922,
						brightness: 7,
						contrast: 3
					},
					{
						tx: -2.45,
						ty: 2.2,
						a: 0.935,
						d: 0.935,
						brightness: 6,
						contrast: 2
					},
					{
						tx: -2.45,
						ty: 2.1,
						a: 0.948,
						d: 0.948,
						brightness: 4,
						contrast: 2
					},
					{
						tx: -2.4,
						ty: 2,
						a: 0.961,
						d: 0.961,
						brightness: 3,
						contrast: 1
					},
					{
						tx: -2.35,
						ty: 1.95,
						a: 0.974,
						d: 0.974,
						brightness: 2,
						contrast: 1
					},
					{
						tx: -2.3,
						ty: 1.85,
						a: 0.987,
						d: 0.987,
						brightness: 1
					},
					{
						tx: -2.25,
						ty: 1.75
					},
					{
						tx: -2.25,
						ty: 1.75,
						brightness: -34,
						contrast: 11
					}
				]
			},
			// 1642
			{
				tx: 2.15,
				ty: 0.4,
				a: 0.953,
				d: 0.953
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
				tx: -0.2,
				ty: 0,
				a: 1.351,
				d: 1.129
			},
			alpha: 0.602,
			blur: { x: 1, y: 1 }
		},
		parts: {
			// 404
			r_hand: parts_small.right_hand,
			// 420
			body: parts_small.body,
			// 437
			mouth: parts_small.mouth,
			// 447
			eyes: parts_small.eyes,
			// 450
			top: parts_small.top,
			// 457
			l_hand: parts_small.left_hand,
			// 146
			fx_impact_1: parts_small.fx_impact_1,
			// 147
			fx_impact_2: parts_small.fx_impact_2,
			// 148
			fx_impact_3: parts_small.fx_impact_3,
			// 149
			fx_impact_4: parts_small.fx_impact_4,
			// 150
			fx_impact_5: parts_small.fx_impact_5,
			// 154
			fx_dust_1: fx_dust,
			// 154
			fx_dust_2: fx_dust,
			// 154
			fx_dust_3: fx_dust
		},
		animations: {
			// missing cast
			// 458
			stand: stand,
			// 460
			walk: walk,
			// 461
			run: run,
			// 462
			hit: hit,
			// 463
			jump: jump,
			// 464
			attack: attack,
			release: attack,
			// 465
			land: land,
			// 466
			dead: dead,
			// 466 idx 5
			sleep: { offset: 5, anim: dead },
			// 466 idx 10
			ill: { offset: 10, anim: dead },
			// 463
			fly: jump
		}
	}
};
