// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../../references.js';

// GFX 660
export const fx_slash = {
	parts: {
		s1: [
			{
				ref: ref.fx.slash_1,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.3,
					a: 0.702,
					b: 0.405,
					c: -0.143,
					d: 0.249
				}
			}
		],
		s2: [
			{
				ref: ref.fx.slash_2,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.3,
					a: 0.798,
					b: 0.141,
					c: -0.05,
					d: 0.282
				},
				alpha: 0.805
			}
		],
		s3: [
			{
				ref: ref.fx.slash_3,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.25,
					a: 0.798,
					b: -0.138,
					c: 0.05,
					d: 0.282
				},
				alpha: 0.605
			}
		],
		s4: [
			{
				ref: ref.fx.slash_4,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.3,
					a: 0.702,
					b: -0.405,
					c: 0.143,
					d: 0.249
				},
				alpha: 0.41
			}
		],
		s5: [
			{
				ref: ref.fx.slash_5,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.3,
					ty: 0.05,
					a: 0.783,
					b: -0.207,
					c: 0.073,
					d: 0.277
				},
				alpha: 0.559
			}
		],
		s6: [
			{
				ref: ref.fx.slash_6,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.25,
					a: 0.811,
					d: 0.287
				},
				alpha: 0.707
			}
		],
		s7: [
			{
				ref: ref.fx.slash_7,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.3,
					a: 0.782,
					b: 0.21,
					c: -0.073,
					d: 0.277
				},
				alpha: 0.852
			}
		],
		s8: [
			{
				ref: ref.fx.slash_8,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -4.3,
					a: 0.702,
					b: 0.405,
					c: -0.143,
					d: 0.249
				}
			}
		]
	},
	animation: {
		id: 'fx_slash',
		callbacks: {
			7: [['stop'], ['destroy']]
		},
		frames: [{ s1: {} }, { s2: {} }, { s3: {} }, { s4: {} }, { s5: {} }, { s6: {} }, { s7: {} }, { s8: {} }]
	}
};
