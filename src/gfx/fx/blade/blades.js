// @ts-check
import { fx_blade_spin } from './blade_spin.js';

// GFX 687
export const fx_blades = {
	parts: {
		b1: [
			{
				...fx_blade_spin,
				blur: {
					x: 0.2,
					y: 0.2,
					quality: 1
				}
			}
		],
		b2: [
			{
				...fx_blade_spin,
				blur: {
					x: 0.2,
					y: 0.2,
					quality: 1
				}
			}
		]
	},
	expectedScaling: {
		b1: 3,
		b2: 3
	},
	animation: {
		id: 'fx_blades',
		callbacks: {
			2: [['stop']]
		},
		frames: [
			{
				b1: {
					tx: -2.45,
					ty: 2.65,
					a: 0.945,
					b: -0.326,
					c: 0.326,
					d: 0.945,
					l: 1
				},
				b2: {
					l: 0
				}
			},
			{
				b1: {
					tx: -1.85,
					ty: -8.05,
					a: 1.777,
					b: 0.283,
					c: -0.283,
					d: 1.777,
					l: 1
				},
				b2: {
					tx: -9.7,
					ty: -2.1,
					a: 1.697,
					b: -0.595,
					c: 0.595,
					d: 1.697,
					l: 0
				}
			},
			{
				b1: {
					tx: 6.8,
					ty: -19.5,
					a: 2.064,
					b: 1.583,
					c: -1.583,
					d: 2.064,
					l: 1
				},
				b2: {
					tx: -20.8,
					ty: 1.85,
					a: 2.022,
					b: -1.636,
					c: 1.636,
					d: 2.022,
					l: 0
				}
			}
		]
	}
};
