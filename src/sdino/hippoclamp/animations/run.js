// @ts-check

export const run = {
	id: 'hippoclamp_run',
	callbacks: {
		4: [['fxAttach', 'smoke_small', 0, 5, { randomAlpha: true }]],
		7: [['fxAttach', 'smoke_small', 0, 5, { randomAlpha: true }]],
		10: [['gotoAndPlay', 7]]
	},
	frames: [
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0,
				l: 10
			},
			l_eye: {
				tx: -9.15,
				ty: -2.7,
				a: 1.169,
				c: -0.428,
				d: 1.169,
				l: 9
			},
			l_f_fin: {
				tx: 3.35,
				ty: 8.15,
				a: 1.169,
				c: -0.376,
				d: 1.026,
				l: 8
			},
			l_b_fin: {
				tx: 9.9,
				ty: 4.85,
				a: 1.014,
				c: -0.261,
				d: 0.712,
				l: 7
			},
			head: {
				tx: -9.15,
				ty: -2.7,
				a: 1.169,
				c: -0.428,
				d: 1.169,
				l: 6
			},
			r_eye: {
				tx: -9.7,
				ty: -3.2,
				a: 1.242,
				b: -0.46,
				c: 0.067,
				d: 1.073,
				l: 5
			},
			neck: {
				tx: -4.65,
				ty: -0.8,
				a: 1.097,
				b: -0.869,
				c: 0.538,
				d: 0.815,
				l: 4
			},
			back: {
				tx: 4.95,
				ty: -1.35,
				c: -0.366,
				l: 3
			},
			body: {
				tx: 1.55,
				ty: 2.9,
				c: -0.366,
				l: 2
			},
			r_f_fin: {
				tx: -6.8,
				ty: 5.35,
				c: -0.366,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.85,
				ty: 3.2,
				b: -0.132,
				c: -0.283,
				d: 1.037,
				alpha: 0.145,
				or: 56,
				og: 51,
				ob: 41,
				mr: 0.75,
				mg: 0.75,
				mb: 0.75,
				l: 10
			},
			l_eye: {
				tx: -10,
				ty: -2.4,
				a: 1.168,
				b: 0.027,
				c: -0.43,
				d: 1.162,
				l: 9
			},
			l_f_fin: {
				tx: 3.4,
				ty: 8,
				a: 1.183,
				b: -0.022,
				c: -0.326,
				d: 1.019,
				l: 8
			},
			l_b_fin: {
				tx: 9.9,
				ty: 4.65,
				a: 1.045,
				b: -0.005,
				c: -0.235,
				d: 0.7,
				l: 7
			},
			head: {
				tx: -10,
				ty: -2.4,
				a: 1.168,
				b: 0.027,
				c: -0.43,
				d: 1.162,
				l: 6
			},
			r_eye: {
				tx: -10.55,
				ty: -2.85,
				a: 1.242,
				b: -0.428,
				c: 0.061,
				d: 1.079,
				l: 5
			},
			neck: {
				tx: -5.25,
				ty: -0.65,
				a: 1.03,
				b: -0.924,
				c: 0.595,
				d: 0.786,
				l: 4
			},
			back: {
				tx: 4.55,
				ty: -1.35,
				a: 1.014,
				c: -0.34,
				d: 0.998,
				l: 3
			},
			body: {
				tx: 1.2,
				ty: 2.9,
				a: 1.014,
				c: -0.34,
				d: 0.998,
				l: 2
			},
			r_f_fin: {
				tx: -6.95,
				ty: 5.2,
				c: -0.342,
				d: 1.003,
				l: 1
			},
			fx_dash_2: {
				tx: -0.2,
				ty: -2.25,
				a: 0.996,
				b: -0.263,
				c: -0.201,
				d: 1.056,
				alpha: 0.145,
				or: 56,
				og: 51,
				ob: 41,
				mr: 0.75,
				mg: 0.75,
				mb: 0.75,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.85,
				ty: 3.2,
				b: -0.132,
				c: -0.283,
				d: 1.037,
				alpha: 0.289,
				or: 112,
				og: 102,
				ob: 82,
				mr: 0.5,
				mg: 0.5,
				mb: 0.5,
				l: 10
			},
			l_eye: {
				tx: -12.5,
				ty: -1.6,
				a: 1.162,
				b: 0.118,
				c: -0.44,
				d: 1.143,
				l: 9
			},
			l_f_fin: {
				tx: 3.3,
				ty: 7.5,
				a: 1.223,
				b: -0.102,
				c: -0.183,
				d: 0.986,
				l: 8
			},
			l_b_fin: {
				tx: 9.75,
				ty: 4.3,
				a: 1.142,
				b: -0.025,
				c: -0.165,
				d: 0.661,
				l: 7
			},
			head: {
				tx: -12.5,
				ty: -1.6,
				a: 1.162,
				b: 0.118,
				c: -0.44,
				d: 1.143,
				l: 6
			},
			r_eye: {
				tx: -13.05,
				ty: -1.85,
				a: 1.241,
				b: -0.333,
				c: 0.044,
				d: 1.096,
				l: 5
			},
			neck: {
				tx: -7.15,
				ty: -0.2,
				a: 0.809,
				b: -1.069,
				c: 0.766,
				d: 0.674,
				l: 4
			},
			back: {
				tx: 3.3,
				ty: -1.25,
				a: 1.059,
				c: -0.27,
				d: 0.99,
				l: 3
			},
			body: {
				tx: 0.15,
				ty: 2.85,
				a: 1.059,
				c: -0.27,
				d: 0.99,
				l: 2
			},
			r_f_fin: {
				tx: -7.55,
				ty: 5,
				c: -0.276,
				d: 1.011,
				l: 1
			},
			fx_dash_2: {
				tx: -0.2,
				ty: -2.25,
				a: 0.996,
				b: -0.263,
				c: -0.201,
				d: 1.056,
				alpha: 0.289,
				or: 112,
				og: 102,
				ob: 82,
				mr: 0.5,
				mg: 0.5,
				mb: 0.5,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.85,
				ty: 3.2,
				b: -0.132,
				c: -0.283,
				d: 1.037,
				alpha: 0.434,
				or: 168,
				og: 153,
				ob: 122,
				mr: 0.25,
				mg: 0.25,
				mb: 0.25,
				l: 10
			},
			l_eye: {
				tx: -16.95,
				ty: -0.15,
				a: 1.135,
				b: 0.273,
				c: -0.46,
				d: 1.109,
				l: 9
			},
			l_f_fin: {
				tx: 3.35,
				ty: 6.7,
				a: 1.279,
				b: -0.244,
				c: 0.028,
				d: 0.889,
				l: 8
			},
			l_b_fin: {
				tx: 9.5,
				ty: 3.65,
				a: 1.306,
				b: -0.064,
				c: -0.061,
				d: 0.579,
				l: 7
			},
			head: {
				tx: -16.95,
				ty: -0.15,
				a: 1.135,
				b: 0.273,
				c: -0.46,
				d: 1.109,
				l: 6
			},
			r_eye: {
				tx: -17.5,
				ty: -0.1,
				a: 1.223,
				b: -0.177,
				c: 0.015,
				d: 1.125,
				l: 5
			},
			neck: {
				tx: -10.35,
				ty: 0.55,
				a: 0.398,
				b: -1.204,
				c: 1.002,
				d: 0.401,
				l: 4
			},
			back: {
				tx: 1.05,
				ty: -1.15,
				a: 1.135,
				c: -0.153,
				d: 0.966,
				l: 3
			},
			body: {
				tx: -1.75,
				ty: 2.9,
				a: 1.135,
				c: -0.153,
				d: 0.966,
				l: 2
			},
			r_f_fin: {
				tx: -8.55,
				ty: 4.6,
				c: -0.161,
				d: 1.016,
				l: 1
			},
			fx_dash_2: {
				tx: -0.2,
				ty: -2.25,
				a: 0.996,
				b: -0.263,
				c: -0.201,
				d: 1.056,
				alpha: 0.434,
				or: 168,
				og: 153,
				ob: 122,
				mr: 0.25,
				mg: 0.25,
				mb: 0.25,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -23.1,
				ty: 2.05,
				a: 1.062,
				b: 0.486,
				c: -0.486,
				d: 1.062,
				l: 9
			},
			l_f_fin: {
				tx: 3.3,
				ty: 5.55,
				a: 1.329,
				b: -0.478,
				c: 0.245,
				d: 0.682,
				l: 8
			},
			l_b_fin: {
				tx: 9.3,
				ty: 2.6,
				a: 1.54,
				b: -0.142,
				c: 0.04,
				d: 0.437,
				l: 7
			},
			head: {
				tx: -23.1,
				ty: 2.05,
				a: 1.062,
				b: 0.486,
				c: -0.486,
				d: 1.062,
				l: 6
			},
			r_eye: {
				tx: -23.6,
				ty: 1.3,
				a: 1.164,
				b: 0.031,
				c: -0.031,
				d: 1.164,
				l: 5
			},
			neck: {
				tx: -15,
				ty: 1.75,
				a: -0.173,
				b: -1.15,
				c: 1.157,
				d: -0.127,
				l: 4
			},
			back: {
				tx: -2.1,
				ty: -1,
				a: 1.245,
				d: 0.908,
				l: 3
			},
			body: {
				tx: -4.4,
				ty: 2.9,
				a: 1.245,
				d: 0.908,
				l: 2
			},
			r_f_fin: {
				tx: -9.95,
				ty: 4,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -22.5,
				ty: 1.6,
				a: 1.081,
				b: 0.438,
				c: -0.438,
				d: 1.081,
				l: 9
			},
			l_f_fin: {
				tx: 2.8,
				ty: 4.6,
				a: 1.249,
				b: -0.598,
				c: 0.325,
				d: 0.679,
				l: 8
			},
			l_b_fin: {
				tx: 8.1,
				ty: 1.6,
				a: 1.426,
				b: -0.437,
				c: 0.136,
				d: 0.445,
				l: 7
			},
			head: {
				tx: -22.5,
				ty: 1.6,
				a: 1.081,
				b: 0.438,
				c: -0.438,
				d: 1.081,
				l: 6
			},
			r_eye: {
				tx: -23.15,
				ty: 0.75,
				a: 1.165,
				b: -0.016,
				c: 0.016,
				d: 1.165,
				l: 5
			},
			neck: {
				tx: -14.75,
				ty: 1.5,
				a: -0.071,
				b: -1.161,
				c: 1.164,
				d: -0.026,
				l: 4
			},
			back: {
				tx: -2.2,
				ty: -1.05,
				a: 1.22,
				d: 0.917,
				l: 3
			},
			body: {
				tx: -4.4,
				ty: 2.9,
				a: 1.22,
				d: 0.917,
				l: 2
			},
			r_f_fin: {
				tx: -10.3,
				ty: 2.8,
				a: 0.995,
				b: 0.092,
				c: -0.092,
				d: 0.995,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -21.9,
				ty: 1.2,
				a: 1.102,
				b: 0.38,
				c: -0.38,
				d: 1.102,
				l: 9
			},
			l_f_fin: {
				tx: 2.3,
				ty: 3.5,
				a: 1.134,
				b: -0.739,
				c: 0.431,
				d: 0.662,
				l: 8
			},
			l_b_fin: {
				tx: 6.6,
				ty: 0.35,
				a: 1.209,
				b: -0.751,
				c: 0.263,
				d: 0.424,
				l: 7
			},
			head: {
				tx: -21.9,
				ty: 1.2,
				a: 1.102,
				b: 0.38,
				c: -0.38,
				d: 1.102,
				l: 6
			},
			r_eye: {
				tx: -22.55,
				ty: 0,
				a: 1.162,
				b: -0.081,
				c: 0.081,
				d: 1.162,
				l: 5
			},
			neck: {
				tx: -14.5,
				ty: 1.15,
				a: 0.052,
				b: -1.162,
				c: 1.16,
				d: 0.098,
				l: 4
			},
			back: {
				tx: -2.35,
				ty: -1.1,
				a: 1.19,
				d: 0.929,
				l: 3
			},
			body: {
				tx: -4.55,
				ty: 2.9,
				a: 1.19,
				d: 0.929,
				l: 2
			},
			r_f_fin: {
				tx: -10.75,
				ty: 1.4,
				a: 0.977,
				b: 0.208,
				c: -0.208,
				d: 0.977,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 9
			},
			l_f_fin: {
				tx: 1.5,
				ty: 2,
				a: 0.978,
				b: -0.883,
				c: 0.561,
				d: 0.621,
				l: 8
			},
			l_b_fin: {
				tx: 4.85,
				ty: -1.25,
				a: 0.865,
				b: -1.028,
				c: 0.414,
				d: 0.348,
				l: 7
			},
			head: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 6
			},
			r_eye: {
				tx: -21.75,
				ty: -0.35,
				a: 1.155,
				b: -0.157,
				c: 0.157,
				d: 1.155,
				l: 5
			},
			neck: {
				tx: -14.15,
				ty: 0.8,
				a: 0.208,
				b: -1.145,
				c: 1.137,
				d: 0.253,
				l: 4
			},
			back: {
				tx: -2.55,
				ty: -1.15,
				a: 1.153,
				d: 0.943,
				l: 3
			},
			body: {
				tx: -4.65,
				ty: 2.9,
				a: 1.153,
				d: 0.943,
				l: 2
			},
			r_f_fin: {
				tx: -11.15,
				ty: -0.85,
				a: 0.937,
				b: 0.347,
				c: -0.347,
				d: 0.937,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 9
			},
			l_f_fin: {
				tx: 1.5,
				ty: 2,
				a: 0.978,
				b: -0.883,
				c: 0.561,
				d: 0.621,
				l: 8
			},
			l_b_fin: {
				tx: 4.85,
				ty: -1.25,
				a: 0.865,
				b: -1.028,
				c: 0.414,
				d: 0.348,
				l: 7
			},
			head: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 6
			},
			r_eye: {
				tx: -21.75,
				ty: -0.35,
				a: 1.155,
				b: -0.157,
				c: 0.157,
				d: 1.155,
				l: 5
			},
			neck: {
				tx: -14.15,
				ty: 0.8,
				a: 0.208,
				b: -1.145,
				c: 1.137,
				d: 0.253,
				l: 4
			},
			back: {
				tx: -2.55,
				ty: -1.15,
				a: 1.153,
				d: 0.943,
				l: 3
			},
			body: {
				tx: -4.65,
				ty: 2.9,
				a: 1.153,
				d: 0.943,
				l: 2
			},
			r_f_fin: {
				tx: -11.15,
				ty: -0.85,
				a: 0.937,
				b: 0.347,
				c: -0.347,
				d: 0.937,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 9
			},
			l_f_fin: {
				tx: 1.5,
				ty: 2,
				a: 0.978,
				b: -0.883,
				c: 0.561,
				d: 0.621,
				l: 8
			},
			l_b_fin: {
				tx: 4.85,
				ty: -1.25,
				a: 0.865,
				b: -1.028,
				c: 0.414,
				d: 0.348,
				l: 7
			},
			head: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 6
			},
			r_eye: {
				tx: -21.75,
				ty: -0.35,
				a: 1.155,
				b: -0.157,
				c: 0.157,
				d: 1.155,
				l: 5
			},
			neck: {
				tx: -14.15,
				ty: 0.8,
				a: 0.208,
				b: -1.145,
				c: 1.137,
				d: 0.253,
				l: 4
			},
			back: {
				tx: -2.55,
				ty: -1.15,
				a: 1.153,
				d: 0.943,
				l: 3
			},
			body: {
				tx: -4.65,
				ty: 2.9,
				a: 1.153,
				d: 0.943,
				l: 2
			},
			r_f_fin: {
				tx: -11.15,
				ty: -0.85,
				a: 0.937,
				b: 0.347,
				c: -0.347,
				d: 0.937,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		},
		{
			fx_dash_1: {
				tx: 2.8,
				ty: 3.2,
				b: -0.133,
				c: -0.284,
				d: 1.038,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 10
			},
			l_eye: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 9
			},
			l_f_fin: {
				tx: 1.5,
				ty: 2,
				a: 0.978,
				b: -0.883,
				c: 0.561,
				d: 0.621,
				l: 8
			},
			l_b_fin: {
				tx: 4.85,
				ty: -1.25,
				a: 0.865,
				b: -1.028,
				c: 0.414,
				d: 0.348,
				l: 7
			},
			head: {
				tx: -21.1,
				ty: 0.3,
				a: 1.126,
				b: 0.308,
				c: -0.308,
				d: 1.126,
				l: 6
			},
			r_eye: {
				tx: -21.75,
				ty: -0.35,
				a: 1.155,
				b: -0.157,
				c: 0.157,
				d: 1.155,
				l: 5
			},
			neck: {
				tx: -14.15,
				ty: 0.8,
				a: 0.208,
				b: -1.145,
				c: 1.137,
				d: 0.253,
				l: 4
			},
			back: {
				tx: -2.55,
				ty: -1.15,
				a: 1.153,
				d: 0.943,
				l: 3
			},
			body: {
				tx: -4.65,
				ty: 2.9,
				a: 1.153,
				d: 0.943,
				l: 2
			},
			r_f_fin: {
				tx: -11.15,
				ty: -0.85,
				a: 0.937,
				b: 0.347,
				c: -0.347,
				d: 0.937,
				l: 1
			},
			fx_dash_2: {
				tx: -0.15,
				ty: -2.3,
				a: 0.996,
				b: -0.266,
				c: -0.201,
				d: 1.057,
				alpha: 0.578,
				or: 224,
				og: 204,
				ob: 163,
				mr: 0,
				mg: 0,
				mb: 0,
				l: 0
			}
		}
	]
};
