// @ts-check
import { ref } from '../references.js';

// GFX 321 _pileouface
export const fx_head_or_tail = {
	parts: {
		lose: [
			{
				partIdx: 0,
				frames: [0, 1],
				parts: [
					{
						ref: ref.fx.random.face_lose
					},
					{
						ref: ref.fx.random.joker_lose
					}
				]
			}
		],
		win: [
			{
				partIdx: 0,
				frames: [0, 1],
				parts: [
					{
						ref: ref.fx.random.face_win
					},
					{
						ref: ref.fx.random.joker_win
					}
				]
			}
		]
	},
	animation: {
		id: 'fx_head_or_tail',
		frames: [
			{
				lose: {
					tx: -7.5
				}
			},
			{
				lose: {
					tx: -4.7,
					a: 0.859,
					d: 1
				}
			},
			{
				lose: {
					tx: -1.95,
					a: 0.717,
					d: 1
				}
			},
			{
				lose: {
					tx: 0.9,
					a: 0.576,
					d: 1
				}
			},
			{
				lose: {
					tx: 7.1,
					a: 0.1,
					d: 1
				}
			},
			{
				win: {
					tx: -2.35,
					a: 0.648,
					b: 0,
					c: 0.046,
					d: 1
				}
			},
			{
				win: {
					tx: -2.25,
					ty: -0.8,
					a: 0.76,
					b: 0.03,
					c: -0.023,
					d: 1.005
				}
			},
			{
				win: {
					tx: -2,
					ty: -1.7,
					a: 0.871,
					b: 0.069,
					c: -0.097,
					d: 1.004
				}
			},
			{
				win: {
					tx: -2.4,
					ty: -2.6,
					a: 0.98,
					b: 0.119,
					c: -0.17,
					d: 0.999
				}
			},
			{
				win: {
					tx: -2.95,
					ty: 3.2,
					a: 0.646,
					b: -0.33,
					c: 0.027,
					d: 1.1
				}
			},
			{
				lose: {
					tx: 9.05,
					ty: -6.75,
					a: 0.226,
					b: 0.442,
					c: -0.149,
					d: 1.058
				}
			},
			{
				lose: {
					tx: 3.55,
					ty: -0.95,
					a: 0.565,
					b: 0.396,
					c: -0.131,
					d: 0.929
				}
			}
		]
	}
};
