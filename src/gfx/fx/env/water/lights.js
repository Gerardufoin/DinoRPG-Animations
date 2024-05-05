// @ts-check
import { ref } from '../../../references.js';

const light = [
	{
		ref: ref.fx.env.water.light,
		blur: {
			x: 1,
			y: 1,
			quality: 1
		}
	}
];

// GFX 249
export const env_water_light = {
	parts: {
		l1: light,
		l2: light,
		l3: light,
		l4: light,
		l5: light,
		l6: light,
		l7: light,
		l8: light,
		l9: light,
		l10: light,
		l11: light,
		l12: light,
		l13: light,
		l14: light,
		l15: light,
		l16: light
	},
	animation: {
		id: 'env_water_light',
		callbacks: {
			0: [['stop']]
		},
		frames: [
			{
				l1: {
					tx: 495,
					ty: 11.3,
					a: 0.844,
					d: 0.844,
					alpha: 0.602,
					l: 15
				},
				l2: {
					tx: 453.65,
					ty: 9.8,
					a: 0.409,
					b: 0,
					c: -0.079,
					d: 0.71,
					alpha: 0.391,
					l: 14
				},
				l3: {
					tx: 396,
					ty: 11.3,
					a: 0.844,
					d: 0.844,
					alpha: 0.602,
					l: 13
				},
				l4: {
					tx: 463.95,
					ty: 2.4,
					a: 0.787,
					d: 0.787,
					alpha: 0.602,
					l: 12
				},
				l5: {
					tx: 354.65,
					ty: 9.8,
					a: 0.409,
					b: 0,
					c: -0.079,
					d: 0.71,
					alpha: 0.391,
					l: 11
				},
				l6: {
					tx: 297,
					ty: 11.3,
					a: 0.844,
					d: 0.844,
					alpha: 0.602,
					l: 10
				},
				l7: {
					tx: 364.95,
					ty: 2.4,
					a: 0.787,
					d: 0.787,
					alpha: 0.602,
					l: 9
				},
				l8: {
					tx: 255.65,
					ty: 9.8,
					a: 0.409,
					b: 0,
					c: -0.079,
					d: 0.71,
					alpha: 0.391,
					l: 8
				},
				l9: {
					tx: 198,
					ty: 11.3,
					a: 0.844,
					d: 0.844,
					alpha: 0.602,
					l: 7
				},
				l10: {
					tx: 265.95,
					ty: 2.4,
					a: 0.787,
					d: 0.787,
					alpha: 0.602,
					l: 6
				},
				l11: {
					tx: 156.65,
					ty: 9.8,
					a: 0.409,
					b: 0,
					c: -0.079,
					d: 0.71,
					alpha: 0.391,
					l: 5
				},
				l12: {
					tx: 99,
					ty: 11.3,
					a: 0.844,
					d: 0.844,
					alpha: 0.602,
					l: 4
				},
				l13: {
					tx: 166.95,
					ty: 2.4,
					a: 0.787,
					d: 0.787,
					alpha: 0.602,
					l: 3
				},
				l14: {
					tx: 57.65,
					ty: 9.8,
					a: 0.409,
					b: 0,
					c: -0.079,
					d: 0.71,
					alpha: 0.391,
					l: 2
				},
				l15: {
					ty: 11.3,
					a: 0.844,
					d: 0.844,
					alpha: 0.602,
					l: 1
				},
				l16: {
					tx: 67.95,
					ty: 2.4,
					a: 0.787,
					d: 0.787,
					alpha: 0.602,
					l: 0
				}
			}
		]
	}
};
