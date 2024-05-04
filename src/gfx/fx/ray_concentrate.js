// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 962 mcRayConcentrate
export const fx_ray_concentrate = {
	parts: {
		ray: [
			{
				ref: ref.fx.ray,
				blend: BLEND_MODES.ADD
			}
		]
	},
	animation: {
		id: 'fx_ray_concentrate',
		callbacks: {
			11: [['destroy']]
		},
		frames: [
			{
				ray: {
					tx: 17,
					a: 0.487,
					d: 0.051
				}
			},
			{
				ray: {
					tx: 15.3,
					a: 0.439,
					d: 0.146
				}
			},
			{
				ray: {
					tx: 13.6,
					a: 0.392,
					d: 0.241
				}
			},
			{
				ray: {
					tx: 11.9,
					a: 0.344,
					d: 0.336
				}
			},
			{
				ray: {
					tx: 10.2,
					a: 0.296,
					d: 0.43
				}
			},
			{
				ray: {
					tx: 8.5,
					a: 0.249,
					d: 0.525
				}
			},
			{
				ray: {
					tx: 6.8,
					a: 0.201,
					d: 0.62
				}
			},
			{
				ray: {
					tx: 5.1,
					a: 0.153,
					d: 0.715
				}
			},
			{
				ray: {
					tx: 3.4,
					a: 0.105,
					d: 0.81
				}
			},
			{
				ray: {
					tx: 1.7,
					a: 0.058,
					d: 0.905
				}
			},
			{
				ray: {
					a: 0.01,
					d: 1
				}
			},
			{}
		]
	}
};
