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

export let santaz = {
	name: 'santaz',
	widht: 0.529,
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
	shadow: {
		ref: ref.fx.shadow,
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
		right_back_leg: parts.leg,
		// 779
		right_front_leg: parts.leg,
		// 782
		body: parts.body,
		// 779
		left_back_leg: parts.leg,
		// 779
		left_front_leg: parts.leg,
		// 787 _p6
		back: parts.back,
		// 794 _special
		special: parts.special,
		// 798 _p3b
		right_eye: parts.eye,
		// 817 _p3b
		right_antler: parts.antler,
		// 820
		head: parts.head,
		// 823
		left_ear: parts.ear,
		// 831 _p4
		nose: parts.nose,
		// 798 _p3a
		left_eye: parts.eye,
		// 817 _p3a
		left_antler: parts.antler,
		// 844 _p9
		hair: parts.hair
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
};
