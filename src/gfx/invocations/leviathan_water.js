// @ts-check
import { ref } from '../references_invocations.js';

// GFX 545
export const invoc_leviathan_water = {
	parts: {
		w1: [
			{
				ref: ref.water,
				resolution: 1
			}
		],
		w2: [
			{
				ref: ref.water,
				resolution: 1
			}
		]
	},
	animation: {
		id: 'invoc_leviathan_water',
		expectedScaling: {
			w1: 1,
			w2: 1
		},
		frames: [
			{
				w2: {
					l: 1
				},
				w1: {
					ty: 395,
					l: 0
				}
			},
			{
				w2: {
					ty: -43.9,
					l: 1
				},
				w1: {
					ty: 351.1,
					l: 0
				}
			},
			{
				w2: {
					ty: -87.8,
					l: 1
				},
				w1: {
					ty: 307.2,
					l: 0
				}
			},
			{
				w2: {
					ty: -131.65,
					l: 1
				},
				w1: {
					ty: 263.35,
					l: 0
				}
			},
			{
				w2: {
					ty: -175.55,
					l: 1
				},
				w1: {
					ty: 219.45,
					l: 0
				}
			},
			{
				w2: {
					ty: -219.45,
					l: 1
				},
				w1: {
					ty: 175.55,
					l: 0
				}
			},
			{
				w2: {
					ty: -263.35,
					l: 1
				},
				w1: {
					ty: 131.65,
					l: 0
				}
			},
			{
				w2: {
					ty: -307.2,
					l: 1
				},
				w1: {
					ty: 87.8,
					l: 0
				}
			},
			{
				w2: {
					ty: -351.1,
					l: 1
				},
				w1: {
					ty: 43.9,
					l: 0
				}
			}
		]
	}
};
