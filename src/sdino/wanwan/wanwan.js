// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';
import { ref } from '../references.js';

export let wanwan = {
	name: 'wanwan',
	transforms: [
		// 775
		{
			partIdx: 1,
			transforms: [
				{
					tx: 0,
					ty: 0.8,
					a: 0.893,
					d: 0.893,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -0.05,
					ty: 0.65,
					a: 0.91,
					d: 0.91,
					brightness: 9,
					contrast: 5
				},
				{
					tx: -0.15,
					ty: 0.55,
					a: 0.926,
					d: 0.926,
					brightness: 8,
					contrast: 3
				},
				{
					tx: -0.2,
					ty: 0.4,
					a: 0.942,
					d: 0.942,
					brightness: 7,
					contrast: 3
				},
				{
					tx: -0.25,
					ty: 0.25,
					a: 0.958,
					d: 0.958,
					brightness: 6,
					contrast: 2
				},
				{
					tx: -0.35,
					ty: 0.1,
					a: 0.974,
					d: 0.974,
					brightness: 4,
					contrast: 2
				},
				{
					tx: -0.4,
					ty: 0,
					a: 0.99,
					d: 0.99,
					brightness: 3,
					contrast: 1
				},
				{
					tx: -0.45,
					ty: -0.15,
					a: 1.006,
					d: 1.006,
					brightness: 2,
					contrast: 1
				},
				{
					tx: -0.55,
					ty: -0.25,
					a: 1.022,
					d: 1.022,
					brightness: 1
				},
				{
					tx: -0.65,
					ty: -0.4,
					a: 1.038,
					d: 1.038
				},
				{
					tx: -0.3,
					ty: -1.75,
					a: 1.247,
					d: 1.247,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -5.0,
			ty: 1.95
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
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82'],
			// col1
			[
				'#FFF2DF',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
				'#DF7E37',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#FEDEEC',
				'#DD99B5'
			],
			// col2
			[
				'#FFF2DF',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
				'#DF7E37',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#FEDEEC',
				'#DD99B5'
			],
			// col3
			['#99FF00', '#FFFF00', '#FFAA1E', '#9933FF', '#00FFFF']
		],
		[
			// col0
			['#FACBC0', '#FFCC79', '#FFE6AA', '#EAC084', '#FBCFA6', '#ECAB82'],
			// col1
			['#70614B', '#8E8842', '#E8A3F0'],
			// col2
			['#FFF2DF', '#E9E073', '#FEDEEC'],
			// col3
			['#660000', '#7CC4C4', '#7080DE']
		],
		[
			// col0
			['#FFCC79', '#FFCC79', '#FFE6AA', '#EAC084', '#A2886F', '#ECAB82'],
			// col1
			['#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#CB4A4A', '#DF7E37'],
			// col2
			['#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#A82323', '#DF7E37'],
			// col3
			['#660000', '#952F04', '#950404']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -1.4,
			ty: 9.65,
			a: 0.709,
			d: 0.709
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 721 _p7
		tail: parts.tail,
		// 730 _p6b
		right_ear: parts.ear,
		// 735 _p8d
		right_back_leg: parts.leg,
		// 735 _p8b
		right_front_leg: parts.leg,
		// 738
		lower_body: parts.lower_body,
		// 741
		upper_body: parts.upper_body,
		// 735 _p8a
		left_front_leg: parts.leg,
		// 735 _p8c
		left_back_leg: parts.leg,
		// 744
		head: parts.head,
		// 730 _p6a
		left_ear: parts.ear,
		// 753 _p3a
		left_eye: parts.eye,
		// 753 _p3b
		right_eye: parts.eye,
		// 762 _p9
		hair: parts.hair,
		// 764 _col1
		nose: parts.nose
	},
	animations: {
		// missing cast, release
		// sleep same as stand
		// 766
		stand: stand,
		// 767
		walk: walk,
		// 768
		run: run,
		// 769
		hit: hit,
		// 770
		jump: jump,
		// 771
		attack: attack,
		// 772
		land: land,
		// 773
		dead: dead,
		// 766 idx 5
		ill: { offset: 5, anim: stand },
		// 770
		fly: jump
	}
};
