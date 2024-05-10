// @ts-check
import { ref } from '../references_small.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { parts } from './parts.js';

export let pteroz = {
	name: 'pteroz',
	width: 0.707,
	height: 0.663,
	transforms: [
		// 517
		{
			partIdx: 1,
			transforms: [
				{
					tx: -4.65,
					ty: 0.6,
					a: 0.822,
					d: 0.822,
					brightness: 10,
					contrast: 5
				},
				{
					tx: -4.75,
					ty: 0.5,
					a: 0.842,
					d: 0.842,
					brightness: 9,
					contrast: 5
				},
				{
					tx: -4.8,
					ty: 0.5,
					a: 0.862,
					d: 0.862,
					brightness: 8,
					contrast: 3
				},
				{
					tx: -4.9,
					ty: 0.4,
					a: 0.882,
					d: 0.882,
					brightness: 7,
					contrast: 3
				},
				{
					tx: -5,
					ty: 0.3,
					a: 0.901,
					d: 0.901,
					brightness: 6,
					contrast: 2
				},
				{
					tx: -5.05,
					ty: 0.25,
					a: 0.921,
					d: 0.921,
					brightness: 4,
					contrast: 2
				},
				{
					tx: -5.15,
					ty: 0.25,
					a: 0.941,
					d: 0.941,
					brightness: 3,
					contrast: 1
				},
				{
					tx: -5.25,
					ty: 0.15,
					a: 0.961,
					d: 0.961,
					brightness: 2,
					contrast: 1
				},
				{
					tx: -5.3,
					ty: 0.05,
					a: 0.98,
					d: 0.98,
					brightness: 1
				},
				{
					tx: -5.4,
					ty: 0.05
				},
				{
					tx: -6,
					ty: 0.05,
					a: 1.166,
					d: 1.166,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 1.9,
			ty: 1.25,
			a: 1.117,
			d: 1.117
		},
		// adjust
		{
			ty: -8.55
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
	},
	palette: [
		[
			// col0
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
			// col1
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
		]
	],
	shadow: {
		ref: ref.fx.shadow,
		transform: {
			tx: -1.7,
			ty: 0,
			a: 0.917,
			d: 0.917
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 473
		r_wing: parts.right_wing,
		// 479
		r_hand: parts.hand,
		// 482
		fin: parts.fin,
		// 485
		body: parts.body,
		// 494
		beak: parts.beak,
		// 496
		l_leg: parts.left_leg,
		// 503
		eyes: parts.eyes,
		// 479
		l_hand: parts.hand,
		// 508
		l_wing: parts.left_wing,
		// 154
		fx_dust_1: fx_dust,
		// 154
		fx_dust_2: fx_dust,
		// 154
		fx_dust_3: fx_dust
	},
	animations: {
		// missing cast, release
		// hit same as stand
		// 509
		stand: stand,
		// 510
		walk: walk,
		// 511
		run: run,
		// 511
		jump: run,
		// 512
		attack: attack,
		// 513
		land: land,
		// 514
		dead: dead,
		// 514 idx 5
		sleep: { offset: 5, anim: dead },
		// 514 idx 10
		ill: { offset: 10, anim: dead },
		// 515
		fly: fly
	}
};
