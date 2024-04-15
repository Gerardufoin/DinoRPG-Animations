// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 943 mcFocus
export const fx_focus = {
	parts: {
		f1: [
			{
				ref: ref.fx.focus_1,
				blend: BLEND_MODES.ADD
			}
		],
		f2: [
			{
				ref: ref.fx.focus_2,
				blend: BLEND_MODES.ADD
			}
		],
		w: [
			{
				ref: ref.fx.meteor.wave,
				blend: BLEND_MODES.ADD
			}
		]
	},
	expectedScaling: {
		f2: 2,
		w: 3
	},
	animation: {
		id: 'fx_focus',
		callbacks: {
			2: [['gotoAndPlay', 0]],
			12: [['destroy']]
		},
		frames: [
			{
				f1: {}
			},
			{
				f2: {}
			},
			{},
			{
				w: {
					tx: 0.7,
					ty: -1.85,
					a: 1.092,
					d: 1.092,
					or: 255,
					og: 255,
					ob: 255,
					mr: 0,
					mg: 0,
					mb: 0,
					l: 1
				},
				f2: {
					l: 0
				}
			},
			{
				w: {
					tx: 0.65,
					ty: -1.8,
					a: 1.577,
					d: 1.577,
					alpha: 0.75,
					or: 191,
					og: 191,
					ob: 191,
					mr: 0.25,
					mg: 0.25,
					mb: 0.25,
					l: 1
				},
				f2: {
					a: 1.091,
					d: 1.091,
					alpha: 0.891,
					l: 0
				}
			},
			{
				w: {
					tx: 0.65,
					ty: -1.85,
					a: 2.062,
					d: 2.062,
					alpha: 0.5,
					or: 128,
					og: 128,
					ob: 128,
					mr: 0.5,
					mg: 0.5,
					mb: 0.5,
					l: 1
				},
				f2: {
					a: 1.181,
					d: 1.181,
					alpha: 0.777,
					l: 0
				}
			},
			{
				w: {
					tx: 0.7,
					ty: -1.8,
					a: 2.547,
					d: 2.547,
					alpha: 0.25,
					or: 64,
					og: 64,
					ob: 64,
					mr: 0.75,
					mg: 0.75,
					mb: 0.75,
					l: 1
				},
				f2: {
					a: 1.272,
					d: 1.272,
					alpha: 0.668,
					l: 0
				}
			},
			{
				w: {
					tx: 0.7,
					ty: -1.85,
					a: 3.032,
					d: 3.032,
					alpha: 0,
					l: 1
				},
				f2: {
					a: 1.362,
					d: 1.362,
					alpha: 0.555,
					l: 0
				}
			},
			{
				f2: {
					a: 1.453,
					d: 1.453,
					alpha: 0.445,
					l: 0
				}
			},
			{
				f2: {
					a: 1.544,
					d: 1.544,
					alpha: 0.332,
					l: 0
				}
			},
			{
				f2: {
					a: 1.634,
					d: 1.634,
					alpha: 0.223,
					l: 0
				}
			},
			{
				f2: {
					a: 1.725,
					d: 1.725,
					alpha: 0.109,
					l: 0
				}
			},
			{
				f2: {
					a: 1.816,
					d: 1.816,
					alpha: 0,
					l: 0
				}
			}
		]
	}
};
