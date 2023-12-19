// @ts-check

import { stand } from './animations/stand.js';
/*import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { release } from './animations/release.js';*/
import { parts } from './parts.js';
import { ref } from '../references.js';

export let smog = {
	name: 'smog',
	transforms: [
		// 1562
		{
			partIdx: 1,
			transforms: [
				{
					tx: -0.7,
					ty: 1.55,
					a: 0.987,
					d: 0.987,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -1,
					ty: 0.95,
					a: 1.016,
					d: 1.016,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -1.25,
					ty: 0.35,
					a: 1.045,
					d: 1.045,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -1.55,
					ty: -0.25,
					a: 1.074,
					d: 1.074,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -1.85,
					ty: -0.9,
					a: 1.104,
					d: 1.104,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -2.1,
					ty: -1.55,
					a: 1.133,
					d: 1.133,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -2.35,
					ty: -2.15,
					a: 1.162,
					d: 1.162,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -2.7,
					ty: -2.8,
					a: 1.191,
					d: 1.191,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -2.9,
					ty: -3.4,
					a: 1.221,
					d: 1.221,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -2.3,
					ty: -4.35,
					a: 1.25,
					d: 1.25,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -4.15,
					ty: -8.55,
					a: 1.48,
					d: 1.48,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -10.5,
			ty: -16.8,
			a: 1.141,
			d: 1.141
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
				'#B85F1D',
				'#CC5858',
				'#FFF9AE',
				'#F0DC99',
				'#BBDB71',
				'#CC5858',
				'#CC7695'
			],
			// col1
			['#FFF2DF', '#ECFFD9', '#FAF6CA', '#FFE5A6', '#E6F2FF', '#FAD5D5', '#FFFCE6'],
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
				'#00CCFF',
				'#D31818',
				'#FFF9AE',
				'#F0DC99'
			],
			// col3
			['#FFF2DF', '#FFF9AE', '#FFAA1E', '#952F04', '#A2886F', '#FBCD15', '#4F677D', '#DF7E37', '#B85F1D']
		],
		[
			// col0
			['#FBCD15', '#FFCC79', '#FFAA1E'],
			// col1
			['#D27709', '#FFE479', '#FFF0B6'],
			// col2
			['#DE2222', '#EE5357', '#FF8080', '#8EC436', '#6BBD7C', '#80FFB5', '#7C8AC4', '#6693D2', '#D680FF'],
			// col3
			['#FFF2DF', '#FFF9AE', '#FFAA1E']
		],
		[
			// col0
			['#E75F5F', '#FF9F85', '#FFDAD0'],
			// col1
			['#E97676', '#FF8585', '#FFA6A6'],
			// col2
			['#DE2222', '#F73F3F', '#FF8080'],
			// col3
			['#FF3535', '#FF7E77', '#FF9F85']
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -2.15,
			ty: 10.4,
			a: 0.968,
			d: 0.709
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1473 _p8
		tail: parts.tail,
		// 1480
		left_foot: parts.foot,
		// 1480
		right_foot: parts.foot,
		// 1483
		left_leg: parts.leg,
		// 1483
		right_leg: parts.leg,
		// 1486
		left_foreleg: parts.foreleg,
		// 1486
		right_foreleg: parts.foreleg,
		// 1489
		left_arm: parts.arm,
		// 1489
		right_arm: parts.arm,
		// 1502 _p7
		body: parts.body,
		// 1511
		neck: parts.neck,
		// 1514
		jaw: parts.jaw,
		// 1539 _p4
		head: parts.head,
		// 1548 _p3
		eyes: parts.eyes
	},
	animations: {
		// missing cast, ill, fly
		// 1549
		stand: stand
		// 1550
		/*walk: walk,
		// 1551
		run: run,
		// 1552
		hit: hit,
		// 1553
		jump: jump,
		// 1556
		attack: attack,
		// 1557
		land: land,
		// 1558
		dead: dead,
		// 1559
		sleep: sleep,
		// 1560
		release: release*/
	}
};
