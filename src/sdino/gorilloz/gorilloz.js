// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fx_dust } from '../fx/dust.js';
import { release } from './animations/release.js';
import { parts } from './parts.js';
import { ref } from '../references.js';

export let gorilloz = {
	name: 'gorilloz',
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
			['#C68768'],
			// col3
			['#66CCFF']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -1.4,
			ty: 9.65,
			a: 0.839,
			d: 0.839
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 669
		right_foot: parts.hand,
		// 669
		left_foot: parts.hand,
		// 669
		right_hand: parts.hand,
		// 674 p8b
		right_arm: parts.arm,
		// 677
		body: parts.body,
		// 690 p7a
		head: parts.head,
		// 693 p3
		face: parts.face,
		// 698 p5a
		left_ear: parts.ear,
		// 669
		left_hand: parts.hand,
		// 674 p8a
		left_arm: parts.arm,
		// 160
		open_left_hand: parts.open_hand,
		// 160
		open_right_hand: parts.open_hand,
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
};
