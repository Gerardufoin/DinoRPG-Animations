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
import { parts } from './parts.js';
import { ref } from '../references.js';

export let mahamuti = {
	name: 'mahamuti',
	width: 0.78,
	height: 0.719,
	transforms: [
		// 1044
		{
			partIdx: 1,
			transforms: [
				{
					tx: 2.8,
					ty: 0.75,
					a: 1.113,
					d: 1.113,
					brightness: 10,
					contrast: 5
				},
				{
					tx: 3.5,
					ty: 0.4,
					a: 1.143,
					d: 1.143,
					brightness: 9,
					contrast: 5
				},
				{
					tx: 4.1,
					ty: 0.1,
					a: 1.174,
					d: 1.174,
					brightness: 7,
					contrast: 3
				},
				{
					tx: 4.8,
					ty: -0.3,
					a: 1.204,
					d: 1.204,
					brightness: 6,
					contrast: 3
				},
				{
					tx: 5.4,
					ty: -0.6,
					a: 1.234,
					d: 1.234,
					brightness: 5,
					contrast: 2
				},
				{
					tx: 6.05,
					ty: -1,
					a: 1.264,
					d: 1.264,
					brightness: 4,
					contrast: 1
				},
				{
					tx: 6.65,
					ty: -1.4,
					a: 1.294,
					d: 1.294,
					brightness: 2,
					contrast: 1
				},
				{
					tx: 7.35,
					ty: -1.7,
					a: 1.324,
					d: 1.324,
					brightness: 1
				},
				{
					tx: 7.95,
					ty: -2.1,
					a: 1.355,
					d: 1.355
				},
				{
					tx: 7.95,
					ty: -2.1,
					a: 1.355,
					d: 1.355,
					brightness: -34,
					contrast: 11
				}
			]
		},
		// 1642
		{
			tx: 3.1,
			ty: -1.75
		},
		// adjust
		{
			tx: -4.5,
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
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#CCFFFF',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#CCFFFF',
				'#DDB4AA'
			],
			// col1
			[
				'#D3C6C5',
				'#E8D3B2',
				'#B3A9A8',
				'#FFCCCC',
				'#E8CBA0',
				'#EFE9E4',
				'#F1E0C9',
				'#BDA19A',
				'#DDF5FF',
				'#DDB4AA',
				'#FFCC79',
				'#FFE6AA',
				'#EAC084',
				'#FBCFA6',
				'#ECAB82',
				'#B85F1D'
			],
			// col2
			[
				'#C8E063',
				'#D5EB7A',
				'#9AB45C',
				'#E67777',
				'#6181AF',
				'#D7745B',
				'#74BEB7',
				'#FFF9AE',
				'#FFAA1E',
				'#952F04',
				'#A2886F',
				'#FBCD15',
				'#4F677D',
				'#DF7E37',
				'#B85F1D'
			],
			// col3
			['#FFF2DF', '#FFCC79', '#FFAA1E', '#ECFFD9', '#CBFF97', '#D5EAFF']
		],
		[
			// col0
			['#B16161', '#B13A30', '#FABE2B', '#A1B1BB'],
			// col1
			['#832E2E', '#E0584E', '#FAE12B', '#8B9FAA'],
			// col2
			['#802A2A', '#8C3029', '#FF9210', '#6D848C'],
			// col3
			['#A62626', '#A64A44', '#FFAA1E', '#7A858C']
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
		// 968
		right_back_leg: parts.leg,
		// 968
		right_front_leg: parts.leg,
		// 984
		body: parts.body,
		// 968
		left_back_leg: parts.leg,
		// 968
		left_front_leg: parts.leg,
		// 983
		right_ear: parts.ear,
		// 985 _p6
		back: parts.back,
		// 992
		right_tusk: parts.tusk_side,
		// 995
		right_tusk_fur: parts.tusk_fur,
		// 999 _p3b
		right_eye: parts.eye,
		// 1002
		head: parts.head,
		// 983
		left_ear: parts.ear,
		// 999 _p3a
		left_eye: parts.eye,
		// 1005 _special
		special: parts.special,
		// 1017
		hair: parts.hair,
		// 1021
		trunk_top: parts.trunk,
		// 1021
		trunk_mid: parts.trunk,
		// 1021
		trunk_bottom: parts.trunk,
		// 1024
		trunk_end: parts.trunk_end,
		// 1031
		left_tusk: parts.tusk_front,
		// 995
		left_tusk_fur: parts.tusk_fur,
		// 991
		left_tusk_anim: parts.tusk_side
	},
	animations: {
		// missing cast
		// sleep, fly same as stand
		// 1034
		stand: stand,
		// 1035
		walk: walk,
		// 1036
		run: run,
		// 1037
		hit: hit,
		// 1038
		jump: jump,
		// 1039
		attack: attack,
		// 1040
		land: land,
		// 1041
		dead: dead,
		// 1034 idx 5
		ill: { offset: 5, anim: stand },
		// 1038
		fly: jump,
		// 1042
		release: release
	}
};
