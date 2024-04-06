// @ts-check
import { ref } from '../../references.js';

// GFX 686
export const fx_blade_spin = {
	parts: {
		b: [
			{
				ref: ref.fx.projectile.blade
			}
		]
	},
	animation: {
		id: 'fx_blade_spin',
		frames: [
			{
				b: {}
			},
			{
				b: {
					tx: -4,
					ty: 6.25,
					a: 0.764,
					b: -0.643,
					c: 0.643,
					d: 0.764
				}
			},
			{
				b: {
					tx: -3.1,
					ty: 13.6,
					a: 0.17,
					b: -0.985,
					c: 0.985,
					d: 0.17
				}
			},
			{
				b: {
					tx: 2.25,
					ty: 18.6,
					a: -0.497,
					b: -0.866,
					c: 0.866,
					d: -0.497
				}
			},
			{
				b: {
					tx: 9.65,
					ty: 18.95,
					a: -0.939,
					b: -0.342,
					c: 0.342,
					d: -0.939
				}
			},
			{
				b: {
					tx: 15.55,
					ty: 14.55,
					a: -0.939,
					b: 0.342,
					c: -0.342,
					d: -0.939
				}
			},
			{
				b: {
					tx: 17.25,
					ty: 7.3,
					a: -0.497,
					b: 0.866,
					c: -0.866,
					d: -0.497
				}
			},
			{
				b: {
					tx: 13.9,
					ty: 0.8,
					a: 0.17,
					b: 0.985,
					c: -0.985,
					d: 0.17
				}
			},
			{
				b: {
					tx: 7.1,
					ty: -2.15,
					a: 0.764,
					b: 0.643,
					c: -0.643,
					d: 0.764
				}
			}
		]
	}
};
