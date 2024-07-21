// @ts-check
import { ref } from '../../references.js';

const head_parts = {
	head_top: [
		{
			ref: ref.rapaca.head_top
		}
	],
	head_jaw: [
		{
			ref: ref.rapaca.head_jaw
		}
	]
};

// 1771
export const head = {
	parts: head_parts,
	animation: {
		id: 'rapaca_head',
		callbacks: {
			18: [['gotoAndPlay', 1]]
		},
		frames: [
			{
				head_jaw: {
					tx: 19.7,
					ty: 43.4,
					a: 0.998,
					b: -0.061,
					c: 0.061,
					d: 0.998,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.4,
					ty: 44.6,
					a: 0.993,
					b: -0.118,
					c: 0.118,
					d: 0.993,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.25,
					ty: 45.85,
					a: 0.984,
					b: -0.175,
					c: 0.175,
					d: 0.984,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.2,
					ty: 47.1,
					a: 0.971,
					b: -0.234,
					c: 0.234,
					d: 0.971,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.05,
					ty: 48.25,
					a: 0.956,
					b: -0.289,
					c: 0.289,
					d: 0.956,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.15,
					ty: 49.5,
					a: 0.937,
					b: -0.346,
					c: 0.346,
					d: 0.937,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.45,
					ty: 50.05,
					a: 0.916,
					b: -0.402,
					c: 0.402,
					d: 0.916,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.2,
					ty: 48.45,
					a: 0.945,
					b: -0.322,
					c: 0.322,
					d: 0.945,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.05,
					ty: 47.05,
					a: 0.968,
					b: -0.246,
					c: 0.246,
					d: 0.968,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.95,
					ty: 45.4,
					a: 0.986,
					b: -0.165,
					c: 0.165,
					d: 0.986,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.05,
					ty: 43.85,
					a: 0.996,
					b: -0.083,
					c: 0.083,
					d: 0.996,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.3,
					ty: 42.2,
					a: 1,
					b: -0.001,
					c: 0.001,
					d: 1,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.65,
					ty: 40.75,
					a: 0.997,
					b: 0.079,
					c: -0.079,
					d: 0.997,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 21.15,
					ty: 39.15,
					a: 0.986,
					b: 0.161,
					c: -0.161,
					d: 0.986,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.95,
					ty: 37.65,
					a: 0.97,
					b: 0.242,
					c: -0.242,
					d: 0.97,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.6,
					ty: 39.55,
					a: 0.99,
					b: 0.14,
					c: -0.14,
					d: 0.99,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.45,
					ty: 41.5,
					a: 0.999,
					b: 0.04,
					c: -0.04,
					d: 0.999,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.7,
					ty: 43.4,
					a: 0.998,
					b: -0.061,
					c: 0.061,
					d: 0.998,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.7,
					ty: 43.4,
					a: 0.998,
					b: -0.061,
					c: 0.061,
					d: 0.998,
					l: 1
				},
				head_top: {
					l: 0
				}
			}
		]
	}
};

// 1771
export const head_hit = {
	parts: head_parts,
	animation: {
		id: 'rapaca_head_hit',
		callbacks: {
			12: [['stop']]
		},
		frames: [
			{
				head_jaw: {
					tx: 20.15,
					ty: 40.5,
					a: 0.996,
					b: 0.092,
					c: -0.092,
					d: 0.996,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.65,
					ty: 45.6,
					a: 0.986,
					b: -0.161,
					c: 0.161,
					d: 0.986,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 25.65,
					ty: 58.5,
					a: 0.595,
					b: -0.802,
					c: 0.802,
					d: 0.595,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 24.6,
					ty: 57.35,
					a: 0.659,
					b: -0.748,
					c: 0.748,
					d: 0.659,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 23.65,
					ty: 56.05,
					a: 0.722,
					b: -0.688,
					c: 0.688,
					d: 0.722,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 22.8,
					ty: 54.7,
					a: 0.779,
					b: -0.623,
					c: 0.623,
					d: 0.779,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 22.1,
					ty: 53.3,
					a: 0.829,
					b: -0.555,
					c: 0.555,
					d: 0.829,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 21.45,
					ty: 51.8,
					a: 0.874,
					b: -0.481,
					c: 0.481,
					d: 0.874,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.95,
					ty: 50.3,
					a: 0.911,
					b: -0.407,
					c: 0.407,
					d: 0.911,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.7,
					ty: 48.75,
					a: 0.944,
					b: -0.326,
					c: 0.326,
					d: 0.944,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.4,
					ty: 47.1,
					a: 0.968,
					b: -0.246,
					c: 0.246,
					d: 0.968,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 20.45,
					ty: 45.45,
					a: 0.986,
					b: -0.161,
					c: 0.161,
					d: 0.986,
					l: 1
				},
				head_top: {
					l: 0
				}
			},
			{
				head_jaw: {
					tx: 19.75,
					ty: 43.8,
					a: 0.997,
					b: -0.078,
					c: 0.078,
					d: 0.997,
					l: 1
				},
				head_top: {
					l: 0
				}
			}
		]
	}
};
