// @ts-check
import { ref } from '../../../references.js';

const bgAlpha = 0.75;

const gust = [
	{
		ref: ref.fx.env.air.gust,
		blur: {
			x: 1,
			y: 1,
			quality: 1
		}
	}
];
const wind = [
	{
		ref: ref.fx.env.air.wind
	}
];

// GFX 297
export const env_air_hurricane = {
	parts: {
		w1: wind,
		w2: wind,
		g1: gust,
		g2: gust,
		g3: gust,
		bg1: [
			{
				ref: ref.fx.env.air.effect_1,
				alpha: bgAlpha
			}
		],
		bg2: [
			{
				ref: ref.fx.env.air.effect_2,
				alpha: bgAlpha
			}
		],
		bg3: [
			{
				ref: ref.fx.env.air.effect_3,
				alpha: bgAlpha
			}
		],
		bg4: [
			{
				ref: ref.fx.env.air.effect_4,
				alpha: bgAlpha
			}
		],
		bg5: [
			{
				ref: ref.fx.env.air.effect_5,
				alpha: bgAlpha
			}
		],
		bg6: [
			{
				ref: ref.fx.env.air.effect_6,
				alpha: bgAlpha
			}
		],
		bg7: [
			{
				ref: ref.fx.env.air.effect_7,
				alpha: bgAlpha
			}
		],
		bg8: [
			{
				ref: ref.fx.env.air.effect_8,
				alpha: bgAlpha
			}
		],
		bg9: [
			{
				ref: ref.fx.env.air.effect_9,
				alpha: bgAlpha
			}
		],
		bg10: [
			{
				ref: ref.fx.env.air.effect_10,
				alpha: bgAlpha
			}
		],
		bg11: [
			{
				ref: ref.fx.env.air.effect_11,
				alpha: bgAlpha
			}
		],
		bg12: [
			{
				ref: ref.fx.env.air.effect_12,
				alpha: bgAlpha
			}
		],
		bg13: [
			{
				ref: ref.fx.env.air.effect_13,
				alpha: bgAlpha
			}
		]
	},
	animation: {
		id: 'env_air_hurricane',
		frames: [
			{
				g2: {
					tx: -108.45,
					ty: 25.2,
					a: 0.99,
					b: -0.139,
					c: 0.175,
					d: 1.252,
					l: 3
				},
				g1: {
					tx: 182.25,
					ty: 16.15,
					a: 0.983,
					b: 0.182,
					c: -0.131,
					d: 0.709,
					l: 2
				},
				w1: {
					tx: -132.5,
					ty: 98.15,
					l: 1
				},
				bg1: {
					l: 0
				}
			},
			{
				g2: {
					tx: -79.55,
					ty: 20.25,
					a: 0.994,
					b: -0.105,
					c: 0.127,
					d: 1.204,
					l: 3
				},
				g1: {
					tx: 252.05,
					ty: 10.9,
					a: 0.974,
					b: 0.221,
					c: -0.174,
					d: 0.767,
					l: 2
				},
				w1: {
					tx: 0.1,
					ty: 96.85,
					l: 1
				},
				bg2: {
					l: 0
				}
			},
			{
				g2: {
					tx: -42.85,
					ty: 15.35,
					a: 0.998,
					b: -0.066,
					c: 0.075,
					d: 1.14,
					l: 3
				},
				g1: {
					tx: 314.05,
					ty: 10.5,
					a: 0.965,
					b: 0.259,
					c: -0.219,
					d: 0.815,
					l: 2
				},
				w1: {
					tx: 132.7,
					ty: 95.55,
					l: 1
				},
				bg3: {
					l: 0
				}
			},
			{
				g2: {
					tx: 1.95,
					ty: 11.15,
					a: 1,
					b: -0.018,
					c: 0.019,
					d: 1.06,
					l: 4
				},
				g1: {
					tx: 367.6,
					ty: 13.5,
					a: 0.956,
					b: 0.289,
					c: -0.259,
					d: 0.856,
					l: 3
				},
				w2: {
					tx: -132.5,
					ty: 52.65,
					l: 2
				},
				w1: {
					tx: 265.3,
					ty: 94.25,
					l: 1
				},
				bg4: {
					l: 0
				}
			},
			{
				g2: {
					tx: 54.55,
					ty: 9.05,
					a: 0.999,
					b: 0.039,
					c: -0.038,
					d: 0.961,
					l: 4
				},
				g1: {
					tx: 412.8,
					ty: 18.25,
					a: 0.948,
					b: 0.314,
					c: -0.295,
					d: 0.89,
					l: 3
				},
				w2: {
					tx: -22,
					ty: 52.65,
					l: 2
				},
				w1: {
					tx: 397.9,
					ty: 92.95,
					l: 1
				},
				bg5: {
					l: 0
				}
			},
			{
				g2: {
					tx: 114.65,
					ty: 10.25,
					a: 0.994,
					b: 0.105,
					c: -0.089,
					d: 0.844,
					l: 4
				},
				g1: {
					tx: 449.6,
					ty: 23.55,
					a: 0.941,
					b: 0.335,
					c: -0.326,
					d: 0.916,
					l: 3
				},
				w2: {
					tx: 88.5,
					ty: 52.65,
					l: 2
				},
				w1: {
					tx: 530.5,
					ty: 91.65,
					l: 1
				},
				bg6: {
					l: 0
				}
			},
			{
				g2: {
					tx: 182.25,
					ty: 16.15,
					a: 0.983,
					b: 0.182,
					c: -0.131,
					d: 0.709,
					l: 5
				},
				g3: {
					tx: -108.45,
					ty: 25.2,
					a: 0.99,
					b: -0.139,
					c: 0.175,
					d: 1.252,
					l: 4
				},
				g1: {
					tx: 478.4,
					ty: 28.6,
					a: 0.935,
					b: 0.354,
					c: -0.354,
					d: 0.935,
					l: 3
				},
				w1: {
					tx: -132.5,
					ty: 124.15,
					l: 2
				},
				w2: {
					tx: 199,
					ty: 52.65,
					l: 1
				},
				bg7: {
					l: 0
				}
			},
			{
				g2: {
					tx: 254.15,
					ty: 5.15,
					a: 0.972,
					b: 0.23,
					c: -0.195,
					d: 0.824,
					l: 4
				},
				g3: {
					tx: -46.15,
					ty: 17.6,
					a: 0.996,
					b: -0.087,
					c: 0.099,
					d: 1.131,
					l: 3
				},
				w1: {
					tx: 0.1,
					ty: 122.85,
					l: 2
				},
				w2: {
					tx: 309.5,
					ty: 52.65,
					l: 1
				},
				bg8: {
					l: 0
				}
			},
			{
				g2: {
					tx: 318.8,
					ty: -0.1,
					a: 0.96,
					b: 0.276,
					c: -0.265,
					d: 0.921,
					l: 4
				},
				g3: {
					tx: 8.8,
					ty: 14.2,
					a: 0.999,
					b: -0.04,
					c: 0.041,
					d: 1.021,
					l: 3
				},
				w1: {
					tx: 132.7,
					ty: 121.55,
					l: 2
				},
				w2: {
					tx: 420,
					ty: 52.65,
					l: 1
				},
				bg9: {
					l: 0
				}
			},
			{
				g2: {
					tx: 375.1,
					ty: -1.3,
					a: 0.948,
					b: 0.313,
					c: -0.331,
					d: 1.001,
					l: 4
				},
				g3: {
					tx: 56.15,
					ty: 13.85,
					a: 1,
					b: -0.001,
					c: 0.001,
					d: 0.924,
					l: 3
				},
				w1: {
					tx: 265.3,
					ty: 120.25,
					l: 2
				},
				w2: {
					tx: 530.5,
					ty: 52.65,
					l: 1
				},
				bg10: {
					l: 0
				}
			},
			{
				g2: {
					tx: 422.45,
					ty: 0.2,
					a: 0.938,
					b: 0.343,
					c: -0.39,
					d: 1.067,
					l: 3
				},
				g3: {
					tx: 95.85,
					ty: 15.55,
					a: 0.999,
					b: 0.031,
					c: -0.026,
					d: 0.841,
					l: 2
				},
				w1: {
					tx: 397.9,
					ty: 118.95,
					l: 1
				},
				bg11: {
					l: 0
				}
			},
			{
				g2: {
					tx: 461.85,
					ty: 3,
					a: 0.927,
					b: 0.371,
					c: -0.447,
					d: 1.117,
					l: 3
				},
				g3: {
					tx: 128.2,
					ty: 18.25,
					a: 0.998,
					b: 0.057,
					c: -0.044,
					d: 0.772,
					l: 2
				},
				w1: {
					tx: 530.5,
					ty: 117.65,
					l: 1
				},
				bg12: {
					l: 0
				}
			},
			{
				g2: {
					tx: 491.95,
					ty: 6,
					a: 0.92,
					b: 0.391,
					c: -0.492,
					d: 1.156,
					l: 2
				},
				g3: {
					tx: 153.75,
					ty: 20.95,
					a: 0.997,
					b: 0.079,
					c: -0.057,
					d: 0.719,
					l: 1
				},
				bg13: {
					l: 0
				}
			}
		]
	}
};
