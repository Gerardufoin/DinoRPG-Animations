// @ts-check

import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { release } from './animations/release.js';
import { fx_dust } from '../fx/dust.js';
import { parts } from './parts.js';
import { ref } from '../references.js';

export let kabuki = {
	name: 'kabuki',
	width: 0.574,
	height: 0.626,
	transforms: [
		// 965
		{
			partIdx: 1,
			transforms: [
				{
					tx: 0.35,
					ty: 1.7,
					a: 1.007,
					d: 1.007,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 0.55,
					ty: 1.3,
					a: 1.033,
					d: 1.033,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 0.75,
					ty: 0.9,
					a: 1.059,
					d: 1.059,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 0.9,
					ty: 0.55,
					a: 1.084,
					d: 1.084,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 1.1,
					ty: 0.1,
					a: 1.11,
					d: 1.11,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 1.3,
					ty: -0.25,
					a: 1.136,
					d: 1.136,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 1.5,
					ty: -0.65,
					a: 1.162,
					d: 1.162,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 1.65,
					ty: -1,
					a: 1.187,
					d: 1.187,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 1.85,
					ty: -1.4,
					a: 1.213,
					d: 1.213,
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
			tx: -2.4,
			ty: 1.25
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
			[
				'#A2886F',
				'#6D8929',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#64616B',
				'#C9DB24'
			],
			// col1
			[
				'#A2886F',
				'#6D8929',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#64616B',
				'#C9DB24'
			],
			// col2
			[
				'#A2886F',
				'#6D8929',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#64616B',
				'#C9DB24'
			],
			// col3
			[
				'#A2886F',
				'#6D8929',
				'#FFAA1E',
				'#ECFFD9',
				'#CBFF97',
				'#D5EAFF',
				'#97CBFF',
				'#8BA3D7',
				'#DF7E37',
				'#B85F1D',
				'#D31818',
				'#64616B',
				'#C9DB24'
			]
		],
		[
			// col0
			['#07D0A9', '#BC51EE', '#F06CCA'],
			// col1
			['#07D0A9', '#BC51EE', '#F06CCA'],
			// col2
			['#07D0A9', '#BC51EE', '#F06CCA'],
			// col3
			['#07D0A9', '#BC51EE', '#F06CCA']
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
		// 921
		left_shoulder: parts.shoulder,
		// 931
		back: parts.back,
		// 933
		left_hand: parts.hand,
		// 936
		left_leg_bottom: parts.leg,
		// 936
		left_leg_top: parts.leg,
		// 939
		left_arm: parts.arm,
		// 943
		body: parts.body,
		// 945
		head: parts.head,
		// 948 _p1
		eyes: parts.eyes,
		// 951
		hair: parts.hair,
		// 933
		left_foot: parts.hand,
		// 933
		right_hand: parts.hand,
		// 936
		right_leg_bottom: parts.leg,
		// 936
		right_leg_top: parts.leg,
		// 933
		right_foot: parts.hand,
		// 939
		right_arm: parts.arm,
		// 921
		right_shoulder: parts.shoulder,
		// 953 _special
		special: parts.special,
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
		// sleep, fly same as stand
		// 955
		stand: stand,
		// 956
		walk: walk,
		// 957
		run: run,
		// 958
		hit: hit,
		// 959
		jump: jump,
		// 960
		attack: attack,
		// 961
		land: land,
		// 962
		dead: dead,
		// 955 idx 5
		ill: { offset: 5, anim: stand },
		// 963
		release: release
	}
};
