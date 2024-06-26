// @ts-check

import { Layers } from '../../../fight/DepthManager.js';

export const run = {
	id: 'barche_run',
	callbacks: {
		0: [['fxAttachScene', 'coq_patte_b', -10, 0, Layers.Scene.SHADE, { scale: 1.2 }]],
		4: [
			['fxShake', 2, 0.85, 0.5],
			['fxAttach', 'smoke', -15, 20],
			['fxAttachScene', 'coq_patte_a', 0, -10, Layers.Scene.SHADE, { scale: 1.2 }]
		]
	},
	frames: [
		{
			head: {
				tx: -14.55,
				ty: -54.9,
				a: 0.946,
				b: -0.322,
				c: 0.322,
				d: 0.946,
				l: 16
			},
			sp_1: {
				tx: 58.95,
				ty: 23.5,
				a: 0.259,
				b: 0.201,
				c: -0.201,
				d: 0.259,
				l: 15
			},
			sp_2: {
				tx: 71.8,
				ty: 10.15,
				a: 0.392,
				b: -0.226,
				c: 0.226,
				d: 0.392,
				l: 14
			},
			sp_3: {
				tx: 71.6,
				ty: 19.5,
				a: 0.557,
				b: 0.149,
				c: -0.149,
				d: 0.557,
				l: 13
			},
			mouth_f: {
				tx: -16.45,
				ty: -44.15,
				a: 0.712,
				b: -0.701,
				c: 0.701,
				d: 0.712,
				l: 12
			},
			mouth_b: {
				tx: -25.1,
				ty: -48.05,
				a: 0.82,
				b: -0.57,
				c: 0.57,
				d: 0.82,
				l: 11
			},
			l_leg: {
				tx: 13.55,
				ty: 3.6,
				l: 10
			},
			body: {
				tx: 21.9,
				ty: -10,
				l: 9
			},
			r_leg: {
				tx: -59.9,
				ty: -17.6,
				l: 8
			},
			back: {
				tx: 1.15,
				ty: -58.5,
				l: 7
			},
			sp_4: {
				tx: -15.45,
				ty: -42.7,
				a: 0,
				b: -0.668,
				c: -0.668,
				d: 0,
				l: 6
			},
			sp_5: {
				tx: 28.3,
				ty: -27.75,
				a: 0.74,
				b: -0.087,
				c: 0.087,
				d: 0.74,
				l: 5
			},
			sp_6: {
				tx: 7.85,
				ty: -53.25,
				a: 0.866,
				b: -0.5,
				c: 0.5,
				d: 0.866,
				l: 4
			},
			sp_7: {
				tx: 5.95,
				ty: -43.3,
				a: 0.929,
				b: -0.37,
				c: 0.37,
				d: 0.929,
				l: 3
			},
			sp_8: {
				tx: 65.2,
				ty: 8.4,
				a: 0.392,
				b: -0.226,
				c: 0.226,
				d: 0.392,
				l: 2
			},
			sp_9: {
				tx: -13.75,
				ty: -47.7,
				a: 0.369,
				b: -0.808,
				c: 0.808,
				d: 0.369,
				l: 1
			},
			sp_10: {
				tx: 7.8,
				ty: -41.3,
				a: 0,
				b: -0.668,
				c: 0.668,
				d: 0,
				l: 0
			}
		},
		{
			head: {
				tx: -13.85,
				ty: -57.6,
				a: 0.944,
				b: -0.322,
				c: 0.317,
				d: 0.945,
				l: 16
			},
			sp_1: {
				tx: 62.45,
				ty: 21.4,
				a: 0.283,
				b: 0.219,
				c: -0.201,
				d: 0.258,
				l: 15
			},
			sp_2: {
				tx: 75.3,
				ty: 8.05,
				a: 0.394,
				b: -0.193,
				c: 0.193,
				d: 0.395,
				l: 14
			},
			sp_3: {
				tx: 75.45,
				ty: 17.4,
				a: 0.58,
				b: 0.154,
				c: -0.147,
				d: 0.557,
				l: 13
			},
			mouth_f: {
				tx: -12.1,
				ty: -46.65,
				a: 0.7,
				b: -0.702,
				c: 0.695,
				d: 0.71,
				l: 12
			},
			mouth_b: {
				tx: -23.65,
				ty: -49.45,
				a: 0.819,
				b: -0.549,
				c: 0.538,
				d: 0.833,
				l: 11
			},
			l_leg: {
				tx: 9.7,
				ty: -5.15,
				a: 0.997,
				b: 0.066,
				c: -0.054,
				d: 1.026,
				l: 10
			},
			body: {
				tx: 25.4,
				ty: -13.2,
				d: 1.043,
				l: 9
			},
			r_leg: {
				tx: -57.35,
				ty: -18.3,
				l: 8
			},
			back: {
				tx: 0.7,
				ty: -60.95,
				l: 7
			},
			sp_4: {
				tx: -11.025,
				ty: -46.475,
				a: -0.167,
				b: -0.623,
				c: -0.623,
				d: 0.167,
				l: 6
			},
			sp_5: {
				tx: 31.55,
				ty: -29.95,
				a: 0.735,
				b: -0.117,
				c: 0.117,
				d: 0.735,
				l: 5
			},
			sp_6: {
				tx: 7.1,
				ty: -56.2,
				a: 0.806,
				b: -0.588,
				c: 0.588,
				d: 0.806,
				l: 4
			},
			sp_7: {
				tx: 6.3,
				ty: -45.2,
				a: 0.906,
				b: -0.419,
				c: 0.419,
				d: 0.906,
				l: 3
			},
			sp_8: {
				tx: 68.65,
				ty: 6.25,
				a: 0.398,
				b: -0.213,
				c: 0.213,
				d: 0.398,
				l: 2
			},
			sp_9: {
				tx: -11.5,
				ty: -48.75,
				a: 0.282,
				b: -0.841,
				c: 0.841,
				d: 0.282,
				l: 1
			},
			sp_10: {
				tx: 12.5,
				ty: -44.825,
				a: -0.086,
				b: -0.657,
				c: 0.657,
				d: -0.086,
				l: 0
			}
		},
		{
			head: {
				tx: -12.85,
				ty: -62.45,
				a: 0.94,
				b: -0.329,
				c: 0.312,
				d: 0.945,
				l: 16
			},
			sp_1: {
				tx: 67.8,
				ty: 18.1,
				a: 0.321,
				b: 0.249,
				c: -0.201,
				d: 0.259,
				l: 15
			},
			sp_2: {
				tx: 80.65,
				ty: 4.75,
				a: 0.394,
				b: -0.143,
				c: 0.144,
				d: 0.397,
				l: 14
			},
			sp_3: {
				tx: 81.25,
				ty: 14.1,
				a: 0.616,
				b: 0.165,
				c: -0.149,
				d: 0.557,
				l: 13
			},
			mouth_f: {
				tx: -2.75,
				ty: -52,
				a: 0.678,
				b: -0.706,
				c: 0.684,
				d: 0.711,
				l: 12
			},
			mouth_b: {
				tx: -21.05,
				ty: -52.25,
				a: 0.818,
				b: -0.513,
				c: 0.481,
				d: 0.856,
				l: 11
			},
			l_leg: {
				tx: 3.8,
				ty: -18.6,
				a: 0.984,
				b: 0.174,
				c: -0.149,
				d: 1.06,
				l: 10
			},
			body: {
				tx: 30.75,
				ty: -18.1,
				d: 1.11,
				l: 9
			},
			r_leg: {
				tx: -53.4,
				ty: -19.4,
				c: 0.002,
				l: 8
			},
			back: {
				tx: -0.2,
				ty: -66.05,
				l: 7
			},
			sp_4: {
				tx: -6.6,
				ty: -50.25,
				a: -0.334,
				b: -0.578,
				c: -0.578,
				d: 0.334,
				l: 6
			},
			sp_5: {
				tx: 36.5,
				ty: -33.3,
				a: 0.726,
				b: -0.164,
				c: 0.164,
				d: 0.726,
				l: 5
			},
			sp_6: {
				tx: 5.8,
				ty: -61.9,
				a: 0.666,
				b: -0.744,
				c: 0.744,
				d: 0.666,
				l: 4
			},
			sp_7: {
				tx: 7.15,
				ty: -49.05,
				a: 0.857,
				b: -0.511,
				c: 0.511,
				d: 0.857,
				l: 3
			},
			sp_8: {
				tx: 74.05,
				ty: 3,
				a: 0.408,
				b: -0.194,
				c: 0.194,
				d: 0.408,
				l: 2
			},
			sp_9: {
				tx: -8.2,
				ty: -50.4,
				a: 0.147,
				b: -0.876,
				c: 0.876,
				d: 0.147,
				l: 1
			},
			sp_10: {
				tx: 17.2,
				ty: -48.35,
				a: -0.173,
				b: -0.645,
				c: 0.645,
				d: -0.173,
				l: 0
			}
		},
		{
			head: {
				tx: -11.65,
				ty: -61.05,
				a: 0.934,
				b: -0.336,
				c: 0.303,
				d: 0.945,
				l: 16
			},
			sp_1: {
				tx: 65,
				ty: 20.75,
				a: 0.287,
				b: 0.248,
				c: -0.214,
				d: 0.247,
				l: 15
			},
			sp_2: {
				tx: 77.85,
				ty: 7.35,
				a: 0.403,
				b: -0.147,
				c: 0.148,
				d: 0.405,
				l: 14
			},
			sp_3: {
				tx: 78.2,
				ty: 16.85,
				a: 0.605,
				b: 0.121,
				c: -0.113,
				d: 0.565,
				l: 13
			},
			mouth_f: {
				tx: -6.7,
				ty: -50.35,
				a: 0.648,
				b: -0.711,
				c: 0.67,
				d: 0.71,
				l: 12
			},
			mouth_b: {
				tx: -25.25,
				ty: -49.05,
				a: 0.817,
				b: -0.477,
				c: 0.425,
				d: 0.876,
				l: 11
			},
			l_leg: {
				tx: 2.95,
				ty: -10.55,
				a: 0.992,
				b: 0.114,
				c: -0.069,
				d: 1.047,
				l: 10
			},
			body: {
				tx: 27.35,
				ty: -13.85,
				b: -0.022,
				d: 1.074,
				l: 9
			},
			r_leg: {
				tx: -52.6,
				ty: -23.75,
				c: -0.005,
				d: 0.992,
				l: 8
			},
			back: {
				tx: -1.3,
				ty: -64.95,
				l: 7
			},
			sp_4: {
				tx: -8.75,
				ty: -49.95,
				a: -0.277,
				b: -0.606,
				c: -0.606,
				d: 0.277,
				l: 6
			},
			sp_5: {
				tx: 33.85,
				ty: -30.55,
				a: 0.731,
				b: -0.136,
				c: 0.136,
				d: 0.731,
				l: 5
			},
			sp_6: {
				tx: 4.5,
				ty: -58.65,
				a: 0.5,
				b: -0.866,
				c: 0.866,
				d: 0.5,
				l: 4
			},
			sp_7: {
				tx: 8,
				ty: -43.85,
				a: 0.801,
				b: -0.597,
				c: 0.597,
				d: 0.801,
				l: 3
			},
			sp_8: {
				tx: 71.25,
				ty: 5.75,
				a: 0.408,
				b: -0.193,
				c: 0.193,
				d: 0.408,
				l: 2
			},
			sp_9: {
				tx: -9.5,
				ty: -51.95,
				a: 0.2,
				b: -0.864,
				c: 0.864,
				d: 0.2,
				l: 1
			},
			sp_10: {
				tx: 14.2,
				ty: -44.95,
				a: -0.093,
				b: -0.661,
				c: 0.661,
				d: -0.093,
				l: 0
			}
		},
		{
			head: {
				tx: -10.25,
				ty: -60.3,
				a: 0.931,
				b: -0.344,
				c: 0.297,
				d: 0.946,
				l: 16
			},
			sp_1: {
				tx: 62,
				ty: 23.5,
				a: 0.254,
				b: 0.246,
				c: -0.227,
				d: 0.234,
				l: 15
			},
			sp_2: {
				tx: 74.9,
				ty: 10.15,
				a: 0.413,
				b: -0.153,
				c: 0.153,
				d: 0.413,
				l: 14
			},
			sp_3: {
				tx: 74.95,
				ty: 19.55,
				a: 0.591,
				b: 0.081,
				c: -0.078,
				d: 0.571,
				l: 13
			},
			mouth_f: {
				tx: -11.05,
				ty: -48.6,
				a: 0.619,
				b: -0.716,
				c: 0.656,
				d: 0.712,
				l: 12
			},
			mouth_b: {
				tx: -32.35,
				ty: -48.2,
				a: 0.811,
				b: -0.508,
				c: 0.471,
				d: 0.857,
				l: 11
			},
			l_leg: {
				tx: 2,
				ty: -2.15,
				a: 0.998,
				b: 0.057,
				c: 0.009,
				d: 1.027,
				l: 10
			},
			body: {
				tx: 23.85,
				ty: -9.5,
				a: 1.001,
				b: -0.044,
				d: 1.038,
				l: 9
			},
			r_leg: {
				tx: -51.8,
				ty: -28.25,
				c: -0.017,
				d: 0.984,
				l: 8
			},
			back: {
				tx: -2.25,
				ty: -63.95,
				l: 7
			},
			sp_4: {
				tx: -11.3,
				ty: -49.5,
				a: -0.217,
				b: -0.63,
				c: -0.63,
				d: 0.217,
				l: 6
			},
			sp_5: {
				tx: 31.15,
				ty: -27.75,
				a: 0.736,
				b: -0.111,
				c: 0.111,
				d: 0.736,
				l: 5
			},
			sp_6: {
				tx: 5.8,
				ty: -56.45,
				a: 0.659,
				b: -0.749,
				c: 0.749,
				d: 0.659,
				l: 4
			},
			sp_7: {
				tx: 7.6,
				ty: -43.45,
				a: 0.857,
				b: -0.511,
				c: 0.511,
				d: 0.857,
				l: 3
			},
			sp_8: {
				tx: 68.3,
				ty: 8.45,
				a: 0.409,
				b: -0.191,
				c: 0.191,
				d: 0.409,
				l: 2
			},
			sp_9: {
				tx: -10.85,
				ty: -53.5,
				a: 0.252,
				b: -0.849,
				c: 0.85,
				d: 0.252,
				l: 1
			},
			sp_10: {
				tx: 11.2,
				ty: -41.45,
				a: -0.012,
				b: -0.667,
				c: 0.667,
				d: -0.012,
				l: 0
			}
		},
		{
			head: {
				tx: -11.25,
				ty: -61.95,
				a: 0.934,
				b: -0.337,
				c: 0.303,
				d: 0.944,
				l: 16
			},
			sp_1: {
				tx: 58.95,
				ty: 23.5,
				a: 0.221,
				b: 0.24,
				c: -0.24,
				d: 0.221,
				l: 15
			},
			sp_2: {
				tx: 71.8,
				ty: 10.15,
				a: 0.423,
				b: -0.158,
				c: 0.158,
				d: 0.423,
				l: 14
			},
			sp_3: {
				tx: 71.65,
				ty: 19.55,
				a: 0.574,
				b: 0.04,
				c: -0.04,
				d: 0.574,
				l: 13
			},
			mouth_f: {
				tx: -14.7,
				ty: -49.55,
				a: 0.594,
				b: -0.721,
				c: 0.646,
				d: 0.712,
				l: 12
			},
			mouth_b: {
				tx: -30.05,
				ty: -50.25,
				a: 0.804,
				b: -0.539,
				c: 0.517,
				d: 0.834,
				l: 11
			},
			l_leg: {
				tx: 1.05,
				ty: 3.6,
				c: 0.088,
				l: 10
			},
			body: {
				tx: 20.25,
				ty: -7.8,
				b: -0.071,
				l: 9
			},
			r_leg: {
				tx: -51.05,
				ty: -33.85,
				d: 0.976,
				l: 8
			},
			back: {
				tx: 1.15,
				ty: -56.85,
				l: 7
			},
			sp_4: {
				tx: -13.8,
				ty: -51.95,
				a: -0.153,
				b: -0.649,
				c: -0.649,
				d: 0.153,
				l: 6
			},
			sp_5: {
				tx: 28.25,
				ty: -27.75,
				a: 0.739,
				b: -0.085,
				c: 0.085,
				d: 0.739,
				l: 5
			},
			sp_6: {
				tx: 6.9,
				ty: -57.3,
				a: 0.797,
				b: -0.598,
				c: 0.598,
				d: 0.797,
				l: 4
			},
			sp_7: {
				tx: 7.45,
				ty: -46.2,
				a: 0.905,
				b: -0.418,
				c: 0.418,
				d: 0.905,
				l: 3
			},
			sp_8: {
				tx: 65.2,
				ty: 8.4,
				a: 0.409,
				b: -0.191,
				c: 0.191,
				d: 0.409,
				l: 2
			},
			sp_9: {
				tx: -12.2,
				ty: -57.95,
				a: 0.308,
				b: -0.831,
				c: 0.831,
				d: 0.308,
				l: 1
			},
			sp_10: {
				tx: 8,
				ty: -40.75,
				a: 0.073,
				b: -0.663,
				c: 0.663,
				d: 0.073,
				l: 0
			}
		},
		{
			head: {
				tx: -12.4,
				ty: -63.75,
				a: 0.937,
				b: -0.333,
				c: 0.308,
				d: 0.944,
				l: 16
			},
			sp_1: {
				tx: 58.95,
				ty: 17.4,
				a: 0.23,
				b: 0.231,
				c: -0.231,
				d: 0.23,
				l: 15
			},
			sp_2: {
				tx: 71.8,
				ty: 4.05,
				a: 0.416,
				b: -0.173,
				c: 0.173,
				d: 0.416,
				l: 14
			},
			sp_3: {
				tx: 71.65,
				ty: 13.4,
				a: 0.572,
				b: 0.065,
				c: -0.065,
				d: 0.572,
				l: 13
			},
			mouth_f: {
				tx: -15.9,
				ty: -52.25,
				a: 0.646,
				b: -0.715,
				c: 0.674,
				d: 0.707,
				l: 12
			},
			mouth_b: {
				tx: -27.85,
				ty: -52.6,
				a: 0.796,
				b: -0.575,
				c: 0.565,
				d: 0.812,
				l: 11
			},
			l_leg: {
				tx: 4,
				ty: -2.55,
				c: 0.066,
				d: 1.001,
				l: 10
			},
			body: {
				tx: 20.65,
				ty: -14.5,
				b: -0.053,
				l: 9
			},
			r_leg: {
				tx: -53.15,
				ty: -36.2,
				d: 0.981,
				l: 8
			},
			back: {
				tx: 1.15,
				ty: -63.4,
				l: 7
			},
			sp_4: {
				tx: -14.1,
				ty: -56,
				a: -0.116,
				b: -0.656,
				c: -0.656,
				d: 0.116,
				l: 6
			},
			sp_5: {
				tx: 28.2,
				ty: -33.9,
				a: 0.739,
				b: -0.084,
				c: 0.084,
				d: 0.739,
				l: 5
			},
			sp_6: {
				tx: 8.25,
				ty: -58.2,
				a: 0.906,
				b: -0.419,
				c: 0.419,
				d: 0.906,
				l: 4
			},
			sp_7: {
				tx: 6.75,
				ty: -48.65,
				a: 0.947,
				b: -0.317,
				c: 0.317,
				d: 0.947,
				l: 3
			},
			sp_8: {
				tx: 65.15,
				ty: 2.3,
				a: 0.405,
				b: -0.198,
				c: 0.198,
				d: 0.405,
				l: 2
			},
			sp_9: {
				tx: -12.55,
				ty: -61.75,
				a: 0.321,
				b: -0.825,
				c: 0.825,
				d: 0.321,
				l: 1
			},
			sp_10: {
				tx: 7.9,
				ty: -47,
				a: 0.055,
				b: -0.665,
				c: 0.665,
				d: 0.055,
				l: 0
			}
		},
		{
			head: {
				tx: -13.5,
				ty: -59.3,
				a: 0.939,
				b: -0.329,
				c: 0.316,
				d: 0.943,
				l: 16
			},
			sp_1: {
				tx: 58.9,
				ty: 20.9,
				a: 0.246,
				b: 0.214,
				c: -0.214,
				d: 0.246,
				l: 15
			},
			sp_2: {
				tx: 71.85,
				ty: 7.5,
				a: 0.403,
				b: -0.202,
				c: 0.202,
				d: 0.403,
				l: 14
			},
			sp_3: {
				tx: 71.6,
				ty: 16.85,
				a: 0.565,
				b: 0.11,
				c: -0.11,
				d: 0.565,
				l: 13
			},
			mouth_f: {
				tx: -17.15,
				ty: -42.55,
				a: 0.703,
				b: -0.707,
				c: 0.707,
				d: 0.703,
				l: 12
			},
			mouth_b: {
				tx: -24.95,
				ty: -45.5,
				a: 0.787,
				b: -0.612,
				c: 0.612,
				d: 0.787,
				l: 11
			},
			l_leg: {
				tx: 9.5,
				ty: 0.95,
				c: 0.027,
				d: 1.001,
				l: 10
			},
			body: {
				tx: 21.35,
				ty: -11.95,
				b: -0.022,
				l: 9
			},
			r_leg: {
				tx: -57,
				ty: -25.7,
				d: 0.992,
				l: 8
			},
			back: {
				tx: 1.15,
				ty: -60.6,
				l: 7
			},
			sp_4: {
				tx: -14.85,
				ty: -48.55,
				a: -0.05,
				b: -0.665,
				c: -0.665,
				d: 0.05,
				l: 6
			},
			sp_5: {
				tx: 28.2,
				ty: -30.4,
				a: 0.739,
				b: -0.084,
				c: 0.084,
				d: 0.739,
				l: 5
			},
			sp_6: {
				tx: 8.05,
				ty: -56,
				a: 0.888,
				b: -0.453,
				c: 0.453,
				d: 0.888,
				l: 4
			},
			sp_7: {
				tx: 6.4,
				ty: -46.25,
				a: 0.938,
				b: -0.338,
				c: 0.338,
				d: 0.938,
				l: 3
			},
			sp_8: {
				tx: 65.25,
				ty: 5.7,
				a: 0.398,
				b: -0.212,
				c: 0.212,
				d: 0.398,
				l: 2
			},
			sp_9: {
				tx: -13.2,
				ty: -53.85,
				a: 0.346,
				b: -0.815,
				c: 0.815,
				d: 0.346,
				l: 1
			},
			sp_10: {
				tx: 7.8,
				ty: -43.75,
				a: 0.024,
				b: -0.667,
				c: 0.667,
				d: 0.024,
				l: 0
			}
		}
	]
};
