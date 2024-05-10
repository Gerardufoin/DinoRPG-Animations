// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { ref } from '../references_small.js';
import { parts } from './parts.js';

export let pigmou = {
	name: 'pigmou',
	width: 0.735,
	height: 0.625,
	transforms: [
		// 231
		{
			partIdx: 1,
			transforms: [
				{
					tx: 0.0,
					ty: 1.2,
					a: 0.885,
					d: 0.885,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 0.0,
					ty: 1.05,
					a: 0.898,
					d: 0.898,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 0.0,
					ty: 0.95,
					a: 0.911,
					d: 0.911,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 0.0,
					ty: 0.8,
					a: 0.923,
					d: 0.923,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 0.0,
					ty: 0.65,
					a: 0.936,
					d: 0.936,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 0.0,
					ty: 0.55,
					a: 0.949,
					d: 0.949,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 0.0,
					ty: 0.4,
					a: 0.962,
					d: 0.962,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 0.0,
					ty: 0.25,
					a: 0.974,
					d: 0.974,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 0.0,
					ty: 0.15,
					a: 0.987,
					d: 0.987,
					brightness: 1
				},
				{
					tx: 0,
					ty: 0
				},
				{
					tx: 0.0,
					ty: -0.9,
					a: 1.16,
					d: 1.16,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642 No transform, set to tx: 0 and ty: 0
		// adjust
		{
			ty: -8.55
		}
	],
	glow: {
		distance: 1,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
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
			['#A9D9DB', '#FFC400'],
			// col1
			['#73A4A6', '#BB7A2C'],
			// col2
			['#52CFD4', '#C99A00'],
			// col3
			['#329498', '#D78523']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: 0.3,
			ty: 0,
			a: 0.917,
			d: 0.917
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 173
		front_left_leg: parts.front_leg,
		// 173
		front_right_leg: parts.front_leg,
		// 178
		tail: parts.tail,
		// 184
		body: parts.body,
		// 214
		head: parts.head,
		// 220
		back_left_leg: parts.back_left_leg,
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
		]
	},
	animations: {
		// missing cast, release
		// 221
		stand: stand,
		// 222
		walk: walk,
		// 223
		run: run,
		// 224
		hit: hit,
		// 226
		jump: jump,
		// 227
		attack: attack,
		// 228
		land: land,
		// 229
		dead: dead,
		// 229 idx 5
		sleep: { offset: 5, anim: dead },
		// 229 idx 10
		ill: { offset: 10, anim: dead },
		// 226
		fly: jump
	}
};
