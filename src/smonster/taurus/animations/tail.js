import { ref } from '../../references.js';

const segment = {
	ref: ref.taurus.tail_segment
};

// 2908
export const taurus_tail = {
	parts: {
		// 2907 segment 1
		t_1: [segment],
		// 2907 segment 2
		t_2: [segment],
		// 2907 segment 3
		t_3: [segment],
		// 2905 tail end
		t_4: [
			{
				ref: ref.taurus.tail_end
			}
		]
	},
	animation: {
		id: 'taurus_tail',
		frames: [
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: -1,
					ty: 7.15,
					a: 1.262,
					b: 0.328,
					c: 0.464,
					d: -1.786,
					l: 3
				},
				t_2: {
					tx: 6.8,
					ty: 3.7,
					a: 0.685,
					b: 0.752,
					c: 1.082,
					d: -0.986,
					l: 2
				},
				t_3: {
					tx: 17.85,
					ty: 4.55,
					a: 0.716,
					b: 0.355,
					c: -0.521,
					d: 1.052,
					l: 1
				},
				t_4: {
					tx: 22.8,
					ty: 5.1,
					a: -0.469,
					b: 1.216,
					c: 1.216,
					d: 0.469,
					l: 0
				}
			},
			{
				t_1: {
					tx: -1.85,
					ty: 6.1,
					a: 1.152,
					b: 0.608,
					c: 0.861,
					d: -1.631,
					l: 3
				},
				t_2: {
					tx: 5.6,
					ty: 5.3,
					a: 0.651,
					b: 0.781,
					c: 1.124,
					d: -0.937,
					l: 2
				},
				t_3: {
					tx: 16.15,
					ty: 6.45,
					a: 0.745,
					b: 0.29,
					c: -0.426,
					d: 1.094,
					l: 1
				},
				t_4: {
					tx: 21.3,
					ty: 6.35,
					a: -0.409,
					b: 1.237,
					c: 1.237,
					d: 0.409,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.45,
					ty: 5.05,
					a: 1,
					b: 0.835,
					c: 1.181,
					d: -1.415,
					l: 3
				},
				t_2: {
					tx: 4.45,
					ty: 6.85,
					a: 0.62,
					b: 0.806,
					c: 1.16,
					d: -0.893,
					l: 2
				},
				t_3: {
					tx: 14.75,
					ty: 8.15,
					a: 0.766,
					b: 0.228,
					c: -0.334,
					d: 1.126,
					l: 1
				},
				t_4: {
					tx: 19.95,
					ty: 7.5,
					a: -0.355,
					b: 1.254,
					c: 1.254,
					d: 0.355,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.75,
					ty: 4,
					a: 0.831,
					b: 1.003,
					c: 1.42,
					d: -1.176,
					l: 3
				},
				t_2: {
					tx: 3.5,
					ty: 8.1,
					a: 0.592,
					b: 0.827,
					c: 1.19,
					d: -0.852,
					l: 2
				},
				t_3: {
					tx: 13.3,
					ty: 9.65,
					a: 0.781,
					b: 0.171,
					c: -0.251,
					d: 1.148,
					l: 1
				},
				t_4: {
					tx: 18.75,
					ty: 8.5,
					a: -0.306,
					b: 1.267,
					c: 1.267,
					d: 0.306,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.9,
					ty: 3,
					a: 0.663,
					b: 1.122,
					c: 1.587,
					d: -0.938,
					l: 3
				},
				t_2: {
					tx: 2.7,
					ty: 9.25,
					a: 0.566,
					b: 0.844,
					c: 1.215,
					d: -0.815,
					l: 2
				},
				t_3: {
					tx: 12.2,
					ty: 11.05,
					a: 0.79,
					b: 0.122,
					c: -0.18,
					d: 1.161,
					l: 1
				},
				t_4: {
					tx: 17.75,
					ty: 9.4,
					a: -0.266,
					b: 1.276,
					c: 1.276,
					d: 0.266,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.85,
					ty: 2.3,
					a: 0.506,
					b: 1.201,
					c: 1.7,
					d: -0.716,
					l: 3
				},
				t_2: {
					tx: 2,
					ty: 10.25,
					a: 0.544,
					b: 0.859,
					c: 1.236,
					d: -0.783,
					l: 2
				},
				t_3: {
					tx: 11.15,
					ty: 12.15,
					a: 0.796,
					b: 0.081,
					c: -0.118,
					d: 1.169,
					l: 1
				},
				t_4: {
					tx: 16.8,
					ty: 10.2,
					a: -0.228,
					b: 1.284,
					c: 1.284,
					d: 0.228,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.75,
					ty: 1.65,
					a: 0.372,
					b: 1.249,
					c: 1.768,
					d: -0.526,
					l: 3
				},
				t_2: {
					tx: 1.35,
					ty: 11.05,
					a: 0.529,
					b: 0.869,
					c: 1.25,
					d: -0.761,
					l: 2
				},
				t_3: {
					tx: 10.4,
					ty: 13.15,
					a: 0.799,
					b: 0.046,
					c: -0.067,
					d: 1.174,
					l: 1
				},
				t_4: {
					tx: 16.05,
					ty: 10.75,
					a: -0.199,
					b: 1.289,
					c: 1.289,
					d: 0.199,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.65,
					ty: 1.15,
					a: 0.266,
					b: 1.276,
					c: 1.806,
					d: -0.376,
					l: 3
				},
				t_2: {
					tx: 0.9,
					ty: 11.65,
					a: 0.514,
					b: 0.878,
					c: 1.263,
					d: -0.739,
					l: 2
				},
				t_3: {
					tx: 9.8,
					ty: 13.85,
					a: 0.8,
					b: 0.018,
					c: -0.027,
					d: 1.175,
					l: 1
				},
				t_4: {
					tx: 15.6,
					ty: 11.3,
					a: -0.177,
					b: 1.292,
					c: 1.292,
					d: 0.177,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.5,
					ty: 0.85,
					a: 0.188,
					b: 1.291,
					c: 1.826,
					d: -0.265,
					l: 3
				},
				t_2: {
					tx: 0.65,
					ty: 12.1,
					a: 0.505,
					b: 0.882,
					c: 1.27,
					d: -0.727,
					l: 2
				},
				t_3: {
					tx: 9.35,
					ty: 14.35,
					a: 0.8,
					b: 0,
					c: -0.001,
					d: 1.176,
					l: 1
				},
				t_4: {
					tx: 15.2,
					ty: 11.65,
					a: -0.16,
					b: 1.294,
					c: 1.294,
					d: 0.16,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.45,
					ty: 0.6,
					a: 0.138,
					b: 1.297,
					c: 1.835,
					d: -0.195,
					l: 3
				},
				t_2: {
					tx: 0.45,
					ty: 12.35,
					a: 0.498,
					b: 0.887,
					c: 1.276,
					d: -0.717,
					l: 2
				},
				t_3: {
					tx: 9.05,
					ty: 14.7,
					a: 0.8,
					b: -0.008,
					c: 0.011,
					d: 1.176,
					l: 1
				},
				t_4: {
					tx: 14.85,
					ty: 11.95,
					a: -0.149,
					b: 1.296,
					c: 1.296,
					d: 0.149,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.45,
					ty: 0.65,
					a: 0.126,
					b: 1.299,
					c: 1.838,
					d: -0.178,
					l: 3
				},
				t_2: {
					tx: 0.35,
					ty: 12.45,
					a: 0.497,
					b: 0.889,
					c: 1.279,
					d: -0.716,
					l: 2
				},
				t_3: {
					tx: 8.9,
					ty: 14.9,
					a: 0.8,
					b: -0.014,
					c: 0.021,
					d: 1.176,
					l: 1
				},
				t_4: {
					tx: 14.8,
					ty: 12.05,
					a: -0.149,
					b: 1.296,
					c: 1.296,
					d: 0.149,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.75,
					ty: 1.65,
					a: 0.349,
					b: 1.256,
					c: 1.777,
					d: -0.494,
					l: 3
				},
				t_2: {
					tx: 1.35,
					ty: 11.35,
					a: 0.547,
					b: 0.857,
					c: 1.233,
					d: -0.788,
					l: 2
				},
				t_3: {
					tx: 10.45,
					ty: 12.9,
					a: 0.797,
					b: 0.067,
					c: -0.098,
					d: 1.171,
					l: 1
				},
				t_4: {
					tx: 17.6,
					ty: 10.6,
					a: -0.452,
					b: 1.222,
					c: 1.222,
					d: 0.452,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.9,
					ty: 2.6,
					a: 0.547,
					b: 1.182,
					c: 1.673,
					d: -0.775,
					l: 3
				},
				t_2: {
					tx: 2.3,
					ty: 10.25,
					a: 0.591,
					b: 0.827,
					c: 1.19,
					d: -0.851,
					l: 2
				},
				t_3: {
					tx: 11.9,
					ty: 11.1,
					a: 0.786,
					b: 0.146,
					c: -0.215,
					d: 1.155,
					l: 1
				},
				t_4: {
					tx: 20.05,
					ty: 9.6,
					a: -0.712,
					b: 1.091,
					c: 1.091,
					d: 0.712,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.85,
					ty: 3.5,
					a: 0.725,
					b: 1.082,
					c: 1.531,
					d: -1.026,
					l: 3
				},
				t_2: {
					tx: 3.2,
					ty: 9.25,
					a: 0.631,
					b: 0.797,
					c: 1.147,
					d: -0.908,
					l: 2
				},
				t_3: {
					tx: 13.3,
					ty: 9.45,
					a: 0.769,
					b: 0.217,
					c: -0.319,
					d: 1.13,
					l: 1
				},
				t_4: {
					tx: 22.3,
					ty: 8.95,
					a: -0.927,
					b: 0.915,
					c: 0.915,
					d: 0.927,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.65,
					ty: 4.35,
					a: 0.873,
					b: 0.966,
					c: 1.367,
					d: -1.235,
					l: 3
				},
				t_2: {
					tx: 4.1,
					ty: 8.4,
					a: 0.668,
					b: 0.765,
					c: 1.102,
					d: -0.962,
					l: 2
				},
				t_3: {
					tx: 14.55,
					ty: 7.9,
					a: 0.748,
					b: 0.281,
					c: -0.412,
					d: 1.099,
					l: 1
				},
				t_4: {
					tx: 24.25,
					ty: 8.65,
					a: -1.088,
					b: 0.716,
					c: 0.716,
					d: 1.088,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.35,
					ty: 5.1,
					a: 0.992,
					b: 0.843,
					c: 1.193,
					d: -1.404,
					l: 3
				},
				t_2: {
					tx: 4.9,
					ty: 7.5,
					a: 0.701,
					b: 0.735,
					c: 1.059,
					d: -1.009,
					l: 2
				},
				t_3: {
					tx: 15.8,
					ty: 6.45,
					a: 0.724,
					b: 0.339,
					c: -0.498,
					d: 1.063,
					l: 1
				},
				t_4: {
					tx: 25.75,
					ty: 8.55,
					a: -1.201,
					b: 0.506,
					c: 0.506,
					d: 1.201,
					l: 0
				}
			},
			{
				t_1: {
					tx: -2.1,
					ty: 5.75,
					a: 1.088,
					b: 0.715,
					c: 1.013,
					d: -1.539,
					l: 3
				},
				t_2: {
					tx: 5.65,
					ty: 6.7,
					a: 0.729,
					b: 0.707,
					c: 1.018,
					d: -1.05,
					l: 2
				},
				t_3: {
					tx: 16.9,
					ty: 5.3,
					a: 0.696,
					b: 0.391,
					c: -0.575,
					d: 1.023,
					l: 1
				},
				t_4: {
					tx: 27.05,
					ty: 8.55,
					a: -1.268,
					b: 0.3,
					c: 0.3,
					d: 1.268,
					l: 0
				}
			},
			{
				t_1: {
					tx: -1.65,
					ty: 6.25,
					a: 1.162,
					b: 0.588,
					c: 0.832,
					d: -1.644,
					l: 3
				},
				t_2: {
					tx: 6.35,
					ty: 6.05,
					a: 0.756,
					b: 0.678,
					c: 0.976,
					d: -1.088,
					l: 2
				},
				t_3: {
					tx: 17.85,
					ty: 4.15,
					a: 0.669,
					b: 0.436,
					c: -0.641,
					d: 0.983,
					l: 1
				},
				t_4: {
					tx: 28.15,
					ty: 8.55,
					a: -1.3,
					b: 0.103,
					c: 0.103,
					d: 1.3,
					l: 0
				}
			},
			{
				t_1: {
					tx: -1.3,
					ty: 6.75,
					a: 1.215,
					b: 0.468,
					c: 0.663,
					d: -1.72,
					l: 3
				},
				t_2: {
					tx: 7,
					ty: 5.35,
					a: 0.777,
					b: 0.654,
					c: 0.942,
					d: -1.118,
					l: 2
				},
				t_3: {
					tx: 18.8,
					ty: 3.15,
					a: 0.641,
					b: 0.476,
					c: -0.699,
					d: 0.942,
					l: 1
				},
				t_4: {
					tx: 28.85,
					ty: 8.65,
					a: -1.302,
					b: -0.074,
					c: -0.074,
					d: 1.302,
					l: 0
				}
			},
			{
				t_1: {
					tx: -1,
					ty: 7.1,
					a: 1.252,
					b: 0.359,
					c: 0.509,
					d: -1.772,
					l: 3
				},
				t_2: {
					tx: 7.55,
					ty: 4.85,
					a: 0.796,
					b: 0.63,
					c: 0.907,
					d: -1.146,
					l: 2
				},
				t_3: {
					tx: 19.6,
					ty: 2.25,
					a: 0.615,
					b: 0.509,
					c: -0.748,
					d: 0.904,
					l: 1
				},
				t_4: {
					tx: 29.4,
					ty: 8.75,
					a: -1.282,
					b: -0.233,
					c: -0.233,
					d: 1.282,
					l: 0
				}
			},
			{
				t_1: {
					tx: -0.6,
					ty: 7.45,
					a: 1.277,
					b: 0.256,
					c: 0.362,
					d: -1.808,
					l: 3
				},
				t_2: {
					tx: 8.1,
					ty: 4.35,
					a: 0.813,
					b: 0.609,
					c: 0.877,
					d: -1.17,
					l: 2
				},
				t_3: {
					tx: 20.3,
					ty: 1.45,
					a: 0.59,
					b: 0.538,
					c: -0.791,
					d: 0.867,
					l: 1
				},
				t_4: {
					tx: 29.85,
					ty: 8.85,
					a: -1.249,
					b: -0.371,
					c: -0.371,
					d: 1.249,
					l: 0
				}
			},
			{
				t_1: {
					tx: -0.25,
					ty: 7.7,
					a: 1.292,
					b: 0.17,
					c: 0.241,
					d: -1.828,
					l: 3
				},
				t_2: {
					tx: 8.5,
					ty: 3.9,
					a: 0.826,
					b: 0.591,
					c: 0.851,
					d: -1.189,
					l: 2
				},
				t_3: {
					tx: 20.85,
					ty: 0.8,
					a: 0.568,
					b: 0.561,
					c: -0.824,
					d: 0.835,
					l: 1
				},
				t_4: {
					tx: 30.05,
					ty: 8.95,
					a: -1.207,
					b: -0.489,
					c: -0.489,
					d: 1.207,
					l: 0
				}
			},
			{
				t_1: {
					ty: 7.85,
					a: 1.3,
					b: 0.092,
					c: 0.13,
					d: -1.839,
					l: 3
				},
				t_2: {
					tx: 8.9,
					ty: 3.5,
					a: 0.836,
					b: 0.576,
					c: 0.829,
					d: -1.204,
					l: 2
				},
				t_3: {
					tx: 21.45,
					ty: 0.2,
					a: 0.548,
					b: 0.581,
					c: -0.853,
					d: 0.805,
					l: 1
				},
				t_4: {
					tx: 30.3,
					ty: 9,
					a: -1.165,
					b: -0.582,
					c: -0.582,
					d: 1.165,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.25,
					ty: 8.05,
					a: 1.303,
					b: 0.029,
					c: 0.042,
					d: -1.844,
					l: 3
				},
				t_2: {
					tx: 9.15,
					ty: 3.2,
					a: 0.846,
					b: 0.562,
					c: 0.809,
					d: -1.217,
					l: 2
				},
				t_3: {
					tx: 21.85,
					ty: -0.2,
					a: 0.53,
					b: 0.597,
					c: -0.877,
					d: 0.779,
					l: 1
				},
				t_4: {
					tx: 30.4,
					ty: 8.95,
					a: -1.124,
					b: -0.658,
					c: -0.658,
					d: 1.124,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.45,
					ty: 8.1,
					a: 1.303,
					b: -0.012,
					c: -0.018,
					d: -1.844,
					l: 3
				},
				t_2: {
					tx: 9.4,
					ty: 2.9,
					a: 0.853,
					b: 0.551,
					c: 0.793,
					d: -1.228,
					l: 2
				},
				t_3: {
					tx: 22.2,
					ty: -0.55,
					a: 0.517,
					b: 0.608,
					c: -0.894,
					d: 0.76,
					l: 1
				},
				t_4: {
					tx: 30.45,
					ty: 9.05,
					a: -1.088,
					b: -0.715,
					c: -0.715,
					d: 1.088,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.55,
					ty: 8.15,
					a: 1.302,
					b: -0.047,
					c: -0.066,
					d: -1.843,
					l: 3
				},
				t_2: {
					tx: 9.6,
					ty: 2.75,
					a: 0.858,
					b: 0.543,
					c: 0.782,
					d: -1.235,
					l: 2
				},
				t_3: {
					tx: 22.45,
					ty: -0.9,
					a: 0.509,
					b: 0.615,
					c: -0.904,
					d: 0.748,
					l: 1
				},
				t_4: {
					tx: 30.5,
					ty: 9,
					a: -1.062,
					b: -0.753,
					c: -0.753,
					d: 1.062,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.65,
					ty: 8.2,
					a: 1.301,
					b: -0.069,
					c: -0.098,
					d: -1.841,
					l: 3
				},
				t_2: {
					tx: 9.65,
					ty: 2.7,
					a: 0.86,
					b: 0.539,
					c: 0.776,
					d: -1.238,
					l: 2
				},
				t_3: {
					tx: 22.55,
					ty: -1,
					a: 0.501,
					b: 0.622,
					c: -0.913,
					d: 0.736,
					l: 1
				},
				t_4: {
					tx: 30.5,
					ty: 9.05,
					a: -1.045,
					b: -0.776,
					c: -0.776,
					d: 1.045,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.7,
					ty: 8.2,
					a: 1.301,
					b: -0.078,
					c: -0.11,
					d: -1.841,
					l: 3
				},
				t_2: {
					tx: 9.55,
					ty: 2.6,
					a: 0.862,
					b: 0.54,
					c: 0.777,
					d: -1.241,
					l: 2
				},
				t_3: {
					tx: 22.55,
					ty: -1.05,
					a: 0.501,
					b: 0.623,
					c: -0.916,
					d: 0.736,
					l: 1
				},
				t_4: {
					tx: 30.5,
					ty: 8.95,
					a: -1.041,
					b: -0.786,
					c: -0.786,
					d: 1.041,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.65,
					ty: 8.2,
					a: 1.302,
					b: -0.063,
					c: -0.089,
					d: -1.842,
					l: 3
				},
				t_2: {
					tx: 9.3,
					ty: 2.4,
					a: 0.839,
					b: 0.573,
					c: 0.824,
					d: -1.207,
					l: 2
				},
				t_3: {
					tx: 22.05,
					ty: -0.5,
					a: 0.535,
					b: 0.592,
					c: -0.87,
					d: 0.787,
					l: 1
				},
				t_4: {
					tx: 30.95,
					ty: 7.65,
					a: -1.231,
					b: -0.426,
					c: -0.426,
					d: 1.231,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.65,
					ty: 8.15,
					a: 1.303,
					b: -0.051,
					c: -0.073,
					d: -1.843,
					l: 3
				},
				t_2: {
					tx: 9,
					ty: 2.3,
					a: 0.818,
					b: 0.602,
					c: 0.866,
					d: -1.178,
					l: 2
				},
				t_3: {
					tx: 21.55,
					a: 0.566,
					b: 0.564,
					c: -0.828,
					d: 0.831,
					l: 1
				},
				t_4: {
					tx: 30.85,
					ty: 6.45,
					a: -1.302,
					b: -0.069,
					c: -0.069,
					d: 1.302,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.55,
					ty: 8.15,
					a: 1.303,
					b: -0.04,
					c: -0.057,
					d: -1.844,
					l: 3
				},
				t_2: {
					tx: 8.85,
					ty: 2.15,
					a: 0.799,
					b: 0.627,
					c: 0.902,
					d: -1.151,
					l: 2
				},
				t_3: {
					tx: 21.15,
					ty: 0.6,
					a: 0.59,
					b: 0.538,
					c: -0.79,
					d: 0.867,
					l: 1
				},
				t_4: {
					tx: 30.15,
					ty: 5.35,
					a: -1.278,
					b: 0.255,
					c: 0.255,
					d: 1.278,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.5,
					ty: 8.1,
					a: 1.304,
					b: -0.029,
					c: -0.041,
					d: -1.845,
					l: 3
				},
				t_2: {
					tx: 8.65,
					ty: 2,
					a: 0.78,
					b: 0.651,
					c: 0.937,
					d: -1.123,
					l: 2
				},
				t_3: {
					tx: 20.85,
					ty: 1,
					a: 0.613,
					b: 0.512,
					c: -0.752,
					d: 0.901,
					l: 1
				},
				t_4: {
					tx: 29.25,
					ty: 4.55,
					a: -1.19,
					b: 0.531,
					c: 0.531,
					d: 1.19,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.45,
					ty: 8.1,
					a: 1.304,
					b: -0.023,
					c: -0.032,
					d: -1.845,
					l: 3
				},
				t_2: {
					tx: 8.5,
					ty: 1.9,
					a: 0.766,
					b: 0.668,
					c: 0.962,
					d: -1.102,
					l: 2
				},
				t_3: {
					tx: 20.5,
					ty: 1.45,
					a: 0.631,
					b: 0.49,
					c: -0.72,
					d: 0.927,
					l: 1
				},
				t_4: {
					tx: 28.15,
					ty: 4.1,
					a: -1.066,
					b: 0.749,
					c: 0.749,
					d: 1.066,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.4,
					ty: 8.1,
					a: 1.304,
					b: -0.013,
					c: -0.018,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.4,
					ty: 1.85,
					a: 0.751,
					b: 0.685,
					c: 0.986,
					d: -1.081,
					l: 2
				},
				t_3: {
					tx: 20.2,
					ty: 1.8,
					a: 0.645,
					b: 0.471,
					c: -0.692,
					d: 0.948,
					l: 1
				},
				t_4: {
					tx: 27.15,
					ty: 3.75,
					a: -0.927,
					b: 0.914,
					c: 0.914,
					d: 0.927,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.4,
					ty: 8.05,
					a: 1.305,
					b: -0.007,
					c: -0.01,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.8,
					a: 0.739,
					b: 0.698,
					c: 1.004,
					d: -1.064,
					l: 2
				},
				t_3: {
					tx: 20,
					ty: 2.1,
					a: 0.656,
					b: 0.456,
					c: -0.67,
					d: 0.964,
					l: 1
				},
				t_4: {
					tx: 26.2,
					ty: 3.65,
					a: -0.799,
					b: 1.029,
					c: 1.029,
					d: 0.799,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.4,
					ty: 8.05,
					a: 1.305,
					b: -0.006,
					c: -0.008,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.73,
					b: 0.707,
					c: 1.018,
					d: -1.051,
					l: 2
				},
				t_3: {
					tx: 19.85,
					ty: 2.25,
					a: 0.665,
					b: 0.442,
					c: -0.65,
					d: 0.978,
					l: 1
				},
				t_4: {
					tx: 25.4,
					ty: 3.65,
					a: -0.687,
					b: 1.107,
					c: 1.107,
					d: 0.687,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.35,
					ty: 8.05,
					a: 1.305,
					b: -0.001,
					c: -0.001,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.1,
					ty: 1.75,
					a: 0.724,
					b: 0.714,
					c: 1.028,
					d: -1.042,
					l: 2
				},
				t_3: {
					tx: 19.7,
					ty: 2.4,
					a: 0.671,
					b: 0.433,
					c: -0.637,
					d: 0.986,
					l: 1
				},
				t_4: {
					tx: 24.8,
					ty: 3.75,
					a: -0.603,
					b: 1.155,
					c: 1.155,
					d: 0.603,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.35,
					ty: 8.05,
					a: 1.305,
					b: 0,
					c: 0,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8,
					ty: 1.7,
					a: 0.72,
					b: 0.717,
					c: 1.033,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.6,
					ty: 2.5,
					a: 0.675,
					b: 0.427,
					c: -0.628,
					d: 0.992,
					l: 1
				},
				t_4: {
					tx: 24.45,
					ty: 3.75,
					a: -0.552,
					b: 1.18,
					c: 1.18,
					d: 0.552,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			},
			{
				t_1: {
					tx: 0.2,
					ty: 8,
					a: 1.305,
					d: -1.846,
					l: 3
				},
				t_2: {
					tx: 8.2,
					ty: 1.75,
					a: 0.72,
					b: 0.72,
					c: 1.036,
					d: -1.037,
					l: 2
				},
				t_3: {
					tx: 19.75,
					ty: 2.5,
					a: 0.677,
					b: 0.427,
					c: -0.627,
					d: 0.994,
					l: 1
				},
				t_4: {
					tx: 24.5,
					ty: 3.65,
					a: -0.536,
					b: 1.19,
					c: 1.19,
					d: 0.536,
					l: 0
				}
			}
		]
	}
};
