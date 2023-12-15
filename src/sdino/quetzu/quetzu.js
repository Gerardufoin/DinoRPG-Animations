// @ts-check

import { stand } from './animations/stand.js';
/*import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { release } from './animations/release.js';
import { fx_dust } from '../fx/dust.js';*/
import { parts } from './parts.js';
import { ref } from '../references.js';

export let quetzu = {
	name: 'quetzu',
	transforms: [
		// 1462
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
				'#DF7E37',
				'#FFF9AE',
				'#F0DC99'
			],
			// col1
			['#FFF9AE', '#F0DC99', '#ECFFD9'],
			// col2
			[
				'#FFCC79',
				'#D45D5D',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
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
				'#FFF9AE',
				'#F0DC99'
			]
		],
		[
			// col0
			['#EEBE62', '#BF7F60', '#EEC074'],
			// col1
			['#BF7F60', '#EEBE62', '#E0D5B3'],
			// col2
			['#96CCDE', '#987DB8', '#D7CAA1', '#DE9696', '#94B87D', '#D7B5A1'],
			// col3
			['#644F4F', '#D98F39', '#CDA35C']
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
		// 1304 _p5a
		left_back: parts.back,
		// 1304 _p5b
		right_back: parts.back,
		// 1310
		right_arm_top: parts.right_arm_top,
		// 1335 _p4b
		right_arm_bottom: parts.right_arm_bottom,
		// 1348 _p6
		tail_end: parts.tail_end,
		// 1351
		tail: parts.tail,
		// 1368 _p3
		body: parts.body,
		// 1371
		left_arm_top: parts.left_arm_top,
		// 1396 _p4a
		left_arm_bottom: parts.left_arm_bottom,
		// 1441 _p7
		head: parts.head
	},
	animations: {
		// missing cast, ill, fly
		// 1442
		stand: stand
		// 1443
		/*walk: walk,
		// 1444
		run: run,
		// 1445
		hit: hit,
		// 1446
		jump: jump,
		// 1456
		attack: attack,
		// 1457
		land: land,
		// 1458
		dead: dead,
		// 1459
		sleep: sleep,
		// 1460
		release: release*/
	}
};
