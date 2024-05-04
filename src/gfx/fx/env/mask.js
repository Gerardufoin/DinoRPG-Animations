// @ts-check
import { ref } from '../../references.js';

// GFX 246
export const env_mask = {
	parts: {
		mask: [
			{
				ref: ref.fx.env.mask,
				transform: {
					tx: 2.1,
					ty: 4.5,
					a: 0.04,
					d: 0.04
				}
			}
		]
	},
	animation: {
		id: 'env_mask',
		callbacks: {
			18: [['stop']]
		},
		expectedScaling: {
			mask: 30
		},
		frames: [
			{
				mask: {
					tx: 200.45,
					ty: 125.3
				}
			},
			{
				mask: {
					tx: 171.55,
					ty: 96.4,
					a: 3.792,
					d: 3.792
				}
			},
			{
				mask: {
					tx: 144.3,
					ty: 69.15,
					a: 6.425,
					d: 6.425
				}
			},
			{
				mask: {
					tx: 118.7,
					ty: 43.6,
					a: 8.897,
					d: 8.897
				}
			},
			{
				mask: {
					tx: 94.75,
					ty: 19.65,
					a: 11.211,
					d: 11.211
				}
			},
			{
				mask: {
					tx: 72.5,
					ty: -2.65,
					a: 13.364,
					d: 13.364
				}
			},
			{
				mask: {
					tx: 51.85,
					ty: -23.3,
					a: 15.358,
					d: 15.358
				}
			},
			{
				mask: {
					tx: 32.85,
					ty: -42.3,
					a: 17.193,
					d: 17.193
				}
			},
			{
				mask: {
					tx: 15.5,
					ty: -59.65,
					a: 18.868,
					d: 18.868
				}
			},
			{
				mask: {
					tx: -0.15,
					ty: -75.35,
					a: 20.384,
					d: 20.384
				}
			},
			{
				mask: {
					tx: -14.2,
					ty: -89.35,
					a: 21.74,
					d: 21.74
				}
			},
			{
				mask: {
					tx: -26.6,
					ty: -101.75,
					a: 22.937,
					d: 22.937
				}
			},
			{
				mask: {
					tx: -37.35,
					ty: -112.45,
					a: 23.974,
					d: 23.974
				}
			},
			{
				mask: {
					tx: -46.4,
					ty: -121.55,
					a: 24.851,
					d: 24.851
				}
			},
			{
				mask: {
					tx: -53.85,
					ty: -129,
					a: 25.569,
					d: 25.569
				}
			},
			{
				mask: {
					tx: -59.65,
					ty: -134.75,
					a: 26.127,
					d: 26.127
				}
			},
			{
				mask: {
					tx: -63.75,
					ty: -138.9,
					a: 26.526,
					d: 26.526
				}
			},
			{
				mask: {
					tx: -66.2,
					ty: -141.35,
					a: 26.766,
					d: 26.766
				}
			},
			{
				mask: {
					tx: -67.05,
					ty: -142.2,
					a: 26.845,
					d: 26.845
				}
			}
		]
	}
};
