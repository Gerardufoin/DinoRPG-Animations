// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { parts } from './parts.js';
import { ref } from '../references_small.js';

export let feross = {
	name: 'feross',
	width: 0.599,
	height: 0.53,
	transforms: [
		// 913
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
			ty: -0.75
		},
		// adjust
		{
			ty: -8
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
				'#A56F1F',
				'#FFCC79',
				'#FFAA1E',
				'#E2EC8A',
				'#F3FE92',
				'#C9DB24',
				'#9BC43C',
				'#6D8929',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#F0DC99'
			],
			// col1
			[
				'#A56F1F',
				'#FFCC79',
				'#FFAA1E',
				'#E2EC8A',
				'#F3FE92',
				'#C9DB24',
				'#9BC43C',
				'#6D8929',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#F0DC99'
			],
			// col2
			[
				'#A56F1F',
				'#FFCC79',
				'#FFAA1E',
				'#E2EC8A',
				'#F3FE92',
				'#C9DB24',
				'#9BC43C',
				'#6D8929',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#F0DC99'
			],
			// col3
			[
				'#A56F1F',
				'#FFCC79',
				'#FFAA1E',
				'#E2EC8A',
				'#F3FE92',
				'#C9DB24',
				'#9BC43C',
				'#6D8929',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#F0DC99'
			]
		],
		[
			// col0
			['#FFD200'],
			// col1
			['#FFE985'],
			// col2
			[
				'#FFD200',
				'#FFAA1E',
				'#E2EC8A',
				'#F3FE92',
				'#ECA2E7',
				'#ECD6A2',
				'#660000',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#3A0000'
			],
			// col3
			['#E2BA00']
		],
		[
			// col0
			['#55B440'],
			// col1
			['#55B440'],
			// col2
			[
				'#FFD200',
				'#FFAA1E',
				'#E2EC8A',
				'#F3FE92',
				'#ECA2E7',
				'#ECD6A2',
				'#660000',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#3A0000'
			],
			// col3
			['#E2BA00']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
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
		// 858 _p6b
		right_ear: parts.ear,
		// 861
		butt: parts.butt,
		// 867 _p4d
		right_front_leg: parts.leg,
		// 878 _p7
		body: parts.body,
		// 867 _p4c
		left_back_leg: parts.leg,
		// 881 _p8
		head: parts.head,
		// 867 _p4b
		left_front_leg: parts.leg,
		// 858 _p6a
		left_ear: parts.ear,
		// 898 _p5
		horn: parts.horn,
		// 901 _p4
		left_nostril: parts.nostril,
		// 887 _p3
		left_eye: parts.eye,
		// 892 _special
		special: parts.special
	},
	animations: {
		// missing cast, release
		// sleep same as stand
		// 903
		stand: stand,
		// 904
		walk: walk,
		// 905
		run: run,
		// 906
		hit: hit,
		// 907
		jump: jump,
		// 908
		attack: attack,
		// 909
		land: land,
		// 910
		dead: dead,
		// 903 idx 5
		ill: { offset: 5, anim: stand },
		// 911
		fly: fly
	}
};
