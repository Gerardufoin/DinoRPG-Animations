// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';
import { stand } from './animations/stand.js';
import { fx_dash } from '../fx/dash.js';
import { run } from './animations/run.js';
import { walk } from './animations/walk.js';
import { jump } from './animations/jump.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';

export let hippoclamp = {
	name: 'hippoclamp',
	width: 0.612,
	height: 0.63,
	transforms: [
		// 666 - Hippoclamp confirmed to be satan
		{
			partIdx: 1,
			transforms: [
				{
					tx: 2.9,
					ty: 3.9,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 2.9,
					ty: 3.9,
					a: 1.014,
					d: 1.014,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 2.9,
					ty: 3.85,
					a: 1.028,
					d: 1.028,
					brightness: 8,
					contrast: 3
				},
				{
					tx: 2.9,
					ty: 3.85,
					a: 1.042,
					d: 1.042,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 2.9,
					ty: 3.8,
					a: 1.056,
					d: 1.056,
					brightness: 6,
					contrast: 2
				},
				{
					tx: 2.9,
					ty: 3.8,
					a: 1.071,
					d: 1.071,
					brightness: 4,
					contrast: 2
				},
				{
					tx: 2.9,
					ty: 3.75,
					a: 1.085,
					d: 1.085,
					brightness: 3,
					contrast: 1
				},
				{
					tx: 2.9,
					ty: 3.75,
					a: 1.099,
					d: 1.099,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 2.9,
					ty: 3.7,
					a: 1.113,
					d: 1.113,
					brightness: 1
				},
				{
					tx: 2.9,
					ty: 3.7,
					a: 1.127,
					d: 1.127
				},
				{
					tx: 2.9,
					ty: 2.7,
					a: 1.329,
					d: 1.329,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: -1.5,
			ty: -0.65
		},
		// adjust
		{
			ty: -8.65
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
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#ECFFD9', '#CBFF97', '#D5EAFF', '#97CBFF'],
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
			tx: -0.5,
			ty: 0,
			a: 0.733,
			d: 0.733
		},
		alpha: 0.602,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 607 p6c
		r_f_fin: parts.fin_right,
		// 611 p7a
		body: parts.body,
		// 616 p7b
		back: parts.back,
		// 619 p8
		neck: parts.neck,
		// 626 p4b
		r_eye: parts.eye,
		// 639 p3
		head: parts.head,
		// 648 p6a
		l_f_fin: parts.fin_left,
		// 648 p6b
		l_b_fin: parts.fin_left,
		// 626 p4a
		l_eye: parts.eye,
		// 658
		fx_dash_1: fx_dash,
		// 658
		fx_dash_2: fx_dash
	},
	animations: {
		// missing cast, release
		// sleep same as stand
		// 650
		stand: stand,
		// 651
		walk: walk,
		// 659
		run: run,
		// 660
		hit: hit,
		// 661
		jump: jump,
		// 662
		attack: attack,
		// 663
		land: land,
		// 664
		dead: dead,
		// 650 idx 5
		ill: { offset: 5, anim: stand },
		// 661
		fly: jump
	}
};
