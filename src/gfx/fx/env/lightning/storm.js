// @ts-check
import { ref } from '../../../references.js';
import { env_lightning_spark } from './spark.js';
import { env_lightning_spark_long } from './spark_long.js';

const bgAlpha = 0.65;

// GFX 280
export const env_lightning_storm = {
	parts: {
		mask1: [
			{
				ref: ref.fx.env.lightning.mask
			}
		],
		mask2: [
			{
				ref: ref.fx.env.lightning.mask
			}
		],
		sl1: [env_lightning_spark_long],
		sl2: [env_lightning_spark_long],
		s1: [env_lightning_spark],
		s2: [env_lightning_spark],
		s3: [env_lightning_spark],
		bg1: [
			{
				ref: ref.fx.env.lightning.effect_1,
				alpha: bgAlpha
			}
		],
		bg2: [
			{
				ref: ref.fx.env.lightning.effect_2,
				alpha: bgAlpha
			}
		],
		bg3: [
			{
				ref: ref.fx.env.lightning.effect_3,
				alpha: bgAlpha
			}
		],
		bg4: [
			{
				ref: ref.fx.env.lightning.effect_4,
				alpha: bgAlpha
			}
		],
		bg5: [
			{
				ref: ref.fx.env.lightning.effect_5,
				alpha: bgAlpha
			}
		],
		bg6: [
			{
				ref: ref.fx.env.lightning.effect_6,
				alpha: bgAlpha
			}
		],
		bg7: [
			{
				ref: ref.fx.env.lightning.effect_7,
				alpha: bgAlpha
			}
		],
		bg8: [
			{
				ref: ref.fx.env.lightning.effect_8,
				alpha: bgAlpha
			}
		],
		bg9: [
			{
				ref: ref.fx.env.lightning.effect_9,
				alpha: bgAlpha
			}
		],
		bg10: [
			{
				ref: ref.fx.env.lightning.effect_10,
				alpha: bgAlpha
			}
		],
		bg11: [
			{
				ref: ref.fx.env.lightning.effect_11,
				alpha: bgAlpha
			}
		],
		bg12: [
			{
				ref: ref.fx.env.lightning.effect_12,
				alpha: bgAlpha
			}
		],
		bg13: [
			{
				ref: ref.fx.env.lightning.effect_13,
				alpha: bgAlpha
			}
		],
		bg14: [
			{
				ref: ref.fx.env.lightning.effect_14,
				alpha: bgAlpha
			}
		],
		bg15: [
			{
				ref: ref.fx.env.lightning.effect_15,
				alpha: bgAlpha
			}
		],
		bg16: [
			{
				ref: ref.fx.env.lightning.effect_16,
				alpha: bgAlpha
			}
		],
		bg17: [
			{
				ref: ref.fx.env.lightning.effect_17,
				alpha: bgAlpha
			}
		],
		bg18: [
			{
				ref: ref.fx.env.lightning.effect_18,
				alpha: bgAlpha
			}
		],
		bg19: [
			{
				ref: ref.fx.env.lightning.effect_19,
				alpha: bgAlpha
			}
		],
		bg20: [
			{
				ref: ref.fx.env.lightning.effect_20,
				alpha: bgAlpha
			}
		],
		bg21: [
			{
				ref: ref.fx.env.lightning.effect_21,
				alpha: bgAlpha
			}
		],
		bg22: [
			{
				ref: ref.fx.env.lightning.effect_22,
				alpha: bgAlpha
			}
		]
	},
	masks: {
		sl1: 'mask1',
		sl2: 'mask2'
	},
	animation: {
		id: 'env_lightning_storm',
		frames: [
			{
				s2: {
					tx: -105.05,
					ty: 49.55,
					a: 0.99,
					b: -0.139,
					c: 0.139,
					d: 0.99,
					l: 4
				},
				s1: {
					tx: 182.25,
					ty: 16.15,
					a: 0.983,
					b: 0.182,
					c: -0.131,
					d: 0.709,
					l: 3
				},
				mask1: {
					tx: -34.3,
					ty: 36.1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg1: {
					l: 0
				}
			},
			{
				s2: {
					tx: -101.4,
					ty: 48.45,
					a: 0.991,
					b: -0.132,
					c: 0.131,
					d: 0.988,
					l: 4
				},
				s1: {
					tx: 238.3,
					ty: 11.5,
					a: 0.976,
					b: 0.213,
					c: -0.165,
					d: 0.756,
					l: 3
				},
				mask1: {
					tx: -8.2,
					ty: 36.1,
					a: 1.42,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg2: {
					l: 0
				}
			},
			{
				s2: {
					tx: -92.5,
					ty: 46.2,
					a: 0.992,
					b: -0.123,
					c: 0.121,
					d: 0.98,
					l: 4
				},
				s1: {
					tx: 288.85,
					ty: 10.25,
					a: 0.969,
					b: 0.243,
					c: -0.199,
					d: 0.796,
					l: 3
				},
				mask1: {
					tx: 23.95,
					ty: 36.1,
					a: 1.94,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg3: {
					l: 0
				}
			},
			{
				s2: {
					tx: -78,
					ty: 42.5,
					a: 0.994,
					b: -0.105,
					c: 0.103,
					d: 0.968,
					l: 4
				},
				s1: {
					tx: 333.45,
					ty: 11.3,
					a: 0.962,
					b: 0.268,
					c: -0.232,
					d: 0.831,
					l: 3
				},
				mask1: {
					tx: 62.3,
					ty: 36.1,
					a: 2.558,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg4: {
					l: 0
				}
			},
			{
				s2: {
					tx: -57.95,
					ty: 37.8,
					a: 0.996,
					b: -0.084,
					c: 0.08,
					d: 0.95,
					l: 4
				},
				s1: {
					tx: 372.2,
					ty: 13.9,
					a: 0.955,
					b: 0.293,
					c: -0.263,
					d: 0.859,
					l: 3
				},
				mask1: {
					tx: 106.75,
					ty: 36.1,
					a: 3.275,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg5: {
					l: 0
				}
			},
			{
				s2: {
					tx: -32.3,
					ty: 32.6,
					a: 0.998,
					b: -0.057,
					c: 0.053,
					d: 0.927,
					l: 4
				},
				s1: {
					tx: 404.65,
					ty: 17.25,
					a: 0.95,
					b: 0.31,
					c: -0.288,
					d: 0.884,
					l: 3
				},
				mask1: {
					tx: 157.4,
					ty: 36.1,
					a: 4.091,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg6: {
					l: 0
				}
			},
			{
				s2: {
					tx: -0.55,
					ty: 26.9,
					a: 1,
					b: -0.018,
					c: 0.017,
					d: 0.898,
					l: 4
				},
				s1: {
					tx: 431.3,
					ty: 20.75,
					a: 0.944,
					b: 0.326,
					c: -0.311,
					d: 0.902,
					l: 3
				},
				mask1: {
					tx: 225.45,
					ty: 36.1,
					a: 3.404,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg7: {
					l: 0
				}
			},
			{
				s2: {
					tx: 36.25,
					ty: 21.95,
					a: 1,
					b: 0.018,
					c: -0.016,
					d: 0.862,
					l: 6
				},
				s1: {
					tx: 451.9,
					ty: 23.9,
					a: 0.94,
					b: 0.338,
					c: -0.33,
					d: 0.916,
					l: 5
				},
				mask2: {
					tx: -34.3,
					ty: 36.1,
					l: 4
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 3
				},
				mask1: {
					tx: 286.7,
					ty: 36.1,
					a: 2.786,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg8: {
					l: 0
				}
			},
			{
				s2: {
					tx: 79.25,
					ty: 17.8,
					a: 0.997,
					b: 0.066,
					c: -0.054,
					d: 0.819,
					l: 6
				},
				s1: {
					tx: 466.6,
					ty: 26.35,
					a: 0.937,
					b: 0.346,
					c: -0.343,
					d: 0.926,
					l: 5
				},
				mask2: {
					tx: -13,
					ty: 36.1,
					a: 1.343,
					d: 1,
					l: 4
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 3
				},
				mask1: {
					tx: 341.1,
					ty: 36.1,
					a: 2.236,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg9: {
					l: 0
				}
			},
			{
				s2: {
					tx: 127.95,
					ty: 15.65,
					a: 0.992,
					b: 0.122,
					c: -0.094,
					d: 0.767,
					l: 6
				},
				s1: {
					tx: 475.25,
					ty: 28.05,
					a: 0.935,
					b: 0.351,
					c: -0.35,
					d: 0.933,
					l: 5
				},
				mask2: {
					tx: 12.6,
					ty: 36.1,
					a: 1.756,
					d: 1,
					l: 4
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 3
				},
				mask1: {
					tx: 388.7,
					ty: 36.1,
					a: 1.756,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg10: {
					l: 0
				}
			},
			{
				s2: {
					tx: 182.25,
					ty: 16.15,
					a: 0.983,
					b: 0.182,
					c: -0.131,
					d: 0.709,
					l: 7
				},
				s3: {
					tx: -106,
					ty: 54.75,
					a: 0.969,
					b: -0.245,
					c: 0.245,
					d: 0.969,
					l: 6
				},
				s1: {
					tx: 478.4,
					ty: 28.6,
					a: 0.935,
					b: 0.354,
					c: -0.354,
					d: 0.935,
					l: 5
				},
				mask2: {
					tx: 42.4,
					ty: 36.1,
					a: 2.236,
					d: 1,
					l: 4
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 3
				},
				mask1: {
					tx: 429.5,
					ty: 36.1,
					a: 1.343,
					d: 1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg11: {
					l: 0
				}
			},
			{
				s2: {
					tx: 234,
					ty: 11.5,
					a: 0.975,
					b: 0.217,
					c: -0.167,
					d: 0.75,
					l: 6
				},
				s3: {
					tx: -103.85,
					ty: 54.15,
					a: 0.969,
					b: -0.242,
					c: 0.242,
					d: 0.967,
					l: 5
				},
				mask2: {
					tx: 76.45,
					ty: 36.1,
					a: 2.786,
					d: 1,
					l: 4
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 3
				},
				mask1: {
					tx: 463.45,
					ty: 36.1,
					l: 2
				},
				sl1: {
					tx: 9.3,
					ty: 64,
					l: 1
				},
				bg12: {
					l: 0
				}
			},
			{
				s2: {
					tx: 281.35,
					ty: 9.85,
					a: 0.967,
					b: 0.251,
					c: -0.204,
					d: 0.786,
					l: 4
				},
				s3: {
					tx: -97.7,
					ty: 52.55,
					a: 0.972,
					b: -0.234,
					c: 0.232,
					d: 0.963,
					l: 3
				},
				mask2: {
					tx: 114.8,
					ty: 36.1,
					a: 3.404,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg13: {
					l: 0
				}
			},
			{
				s2: {
					tx: 323.75,
					ty: 10.3,
					a: 0.958,
					b: 0.28,
					c: -0.239,
					d: 0.817,
					l: 4
				},
				s3: {
					tx: -87.55,
					ty: 49.85,
					a: 0.975,
					b: -0.221,
					c: 0.217,
					d: 0.955,
					l: 3
				},
				mask2: {
					tx: 157.4,
					ty: 36.1,
					a: 4.091,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg14: {
					l: 0
				}
			},
			{
				s2: {
					tx: 361.2,
					ty: 12.3,
					a: 0.951,
					b: 0.306,
					c: -0.271,
					d: 0.843,
					l: 4
				},
				s3: {
					tx: -73.05,
					ty: 46.25,
					a: 0.979,
					b: -0.2,
					c: 0.193,
					d: 0.944,
					l: 3
				},
				mask2: {
					tx: 216.2,
					ty: 36.1,
					a: 3.498,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg15: {
					l: 0
				}
			},
			{
				s2: {
					tx: 393.65,
					ty: 15.05,
					a: 0.942,
					b: 0.33,
					c: -0.302,
					d: 0.864,
					l: 4
				},
				s3: {
					tx: -54.8,
					ty: 42.15,
					a: 0.983,
					b: -0.178,
					c: 0.168,
					d: 0.928,
					l: 3
				},
				mask2: {
					tx: 269.9,
					ty: 36.1,
					a: 2.956,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg16: {
					l: 0
				}
			},
			{
				s2: {
					tx: 420.75,
					ty: 18.35,
					a: 0.936,
					b: 0.347,
					c: -0.327,
					d: 0.882,
					l: 4
				},
				s3: {
					tx: -32.15,
					ty: 37.45,
					a: 0.988,
					b: -0.148,
					c: 0.136,
					d: 0.909,
					l: 3
				},
				mask2: {
					tx: 318.6,
					ty: 36.1,
					a: 2.464,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg17: {
					l: 0
				}
			},
			{
				s2: {
					tx: 443.15,
					ty: 21.45,
					a: 0.93,
					b: 0.363,
					c: -0.349,
					d: 0.896,
					l: 4
				},
				s3: {
					tx: -5.4,
					ty: 32.75,
					a: 0.993,
					b: -0.114,
					c: 0.101,
					d: 0.884,
					l: 3
				},
				mask2: {
					tx: 362.3,
					ty: 36.1,
					a: 2.022,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg18: {
					l: 0
				}
			},
			{
				s2: {
					tx: 460.6,
					ty: 24.2,
					a: 0.925,
					b: 0.375,
					c: -0.367,
					d: 0.906,
					l: 4
				},
				s3: {
					tx: 25.4,
					ty: 28.3,
					a: 0.997,
					b: -0.074,
					c: 0.064,
					d: 0.854,
					l: 3
				},
				mask2: {
					tx: 401.05,
					ty: 36.1,
					a: 1.631,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg19: {
					l: 0
				}
			},
			{
				s2: {
					tx: 472.8,
					ty: 26.3,
					a: 0.922,
					b: 0.383,
					c: -0.379,
					d: 0.913,
					l: 4
				},
				s3: {
					tx: 60.5,
					ty: 24.4,
					a: 0.999,
					b: -0.027,
					c: 0.022,
					d: 0.818,
					l: 3
				},
				mask2: {
					tx: 434.75,
					ty: 36.1,
					a: 1.29,
					d: 1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg20: {
					l: 0
				}
			},
			{
				s2: {
					tx: 480.1,
					ty: 27.7,
					a: 0.92,
					b: 0.387,
					c: -0.386,
					d: 0.918,
					l: 4
				},
				s3: {
					tx: 99.4,
					ty: 21.85,
					a: 1,
					b: 0.022,
					c: -0.017,
					d: 0.775,
					l: 3
				},
				mask2: {
					tx: 463.45,
					ty: 36.1,
					l: 2
				},
				sl2: {
					tx: 443.6,
					ty: 110.3,
					a: -1,
					d: -1,
					l: 1
				},
				bg21: {
					l: 0
				}
			},
			{
				s2: {
					tx: 482.5,
					ty: 28.25,
					a: 0.92,
					b: 0.391,
					c: -0.391,
					d: 0.92,
					l: 2
				},
				s3: {
					tx: 142.2,
					ty: 20.7,
					a: 0.997,
					b: 0.079,
					c: -0.057,
					d: 0.726,
					l: 1
				},
				bg22: {
					l: 0
				}
			}
		]
	}
};
