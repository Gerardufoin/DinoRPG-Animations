import { ref } from '../../references.js';

const wing_glow = {
	distance: 5,
	color: 0xffffff,
	quality: 0.5,
	strength: 1
};

// 2388
export const febrez_wings = {
	parts: {
		l_t_wing: [
			{
				ref: ref.febrez.top_wing,
				glow: wing_glow
			}
		],
		r_t_wing: [
			{
				ref: ref.febrez.top_wing,
				glow: wing_glow
			}
		],
		l_b_wing: [
			{
				ref: ref.febrez.bottom_wing,
				glow: wing_glow
			}
		],
		r_b_wing: [
			{
				ref: ref.febrez.bottom_wing,
				glow: wing_glow
			}
		],
		wings_smear: [
			{
				ref: ref.febrez.wings_smear
			}
		]
	},
	animation: {
		id: 'fegrez_wings',
		frames: [
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0.289,
					l: 4
				},
				l_t_wing: {
					tx: 55.4,
					a: -1,
					d: 1,
					l: 3
				},
				l_b_wing: {
					tx: 54.35,
					ty: 37.6,
					a: -0.615,
					d: -0.615,
					l: 2
				},
				r_b_wing: {
					tx: 12.4,
					ty: 38.75,
					a: 0.582,
					d: -0.582,
					l: 1
				},
				r_t_wing: {
					tx: 9.3,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0.145,
					l: 4
				},
				l_t_wing: {
					tx: 55.4,
					a: -1,
					d: 1,
					l: 3
				},
				l_b_wing: {
					tx: 54.35,
					ty: 37.6,
					a: -0.615,
					d: -0.615,
					l: 2
				},
				r_b_wing: {
					tx: 12.4,
					ty: 38.75,
					a: 0.582,
					d: -0.582,
					l: 1
				},
				r_t_wing: {
					tx: 9.3,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0,
					l: 4
				},
				l_t_wing: {
					tx: 55.4,
					a: -1,
					d: 1,
					l: 3
				},
				l_b_wing: {
					tx: 54.35,
					ty: 37.6,
					a: -0.615,
					d: -0.615,
					l: 2
				},
				r_b_wing: {
					tx: 12.4,
					ty: 38.75,
					a: 0.582,
					d: -0.582,
					l: 1
				},
				r_t_wing: {
					tx: 9.3,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0.699,
					l: 4
				},
				l_b_wing: {
					tx: 11,
					ty: 14.3,
					a: 0.268,
					b: 0.687,
					c: 0.714,
					d: -0.278,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 3
				},
				l_t_wing: {
					tx: -4.25,
					ty: 43.45,
					a: 0.162,
					b: -0.987,
					c: 0.987,
					d: 0.162,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 2
				},
				r_b_wing: {
					tx: 55.15,
					ty: 17.45,
					a: -0.352,
					b: 0.609,
					c: -0.609,
					d: -0.352,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 1
				},
				r_t_wing: {
					tx: 68.6,
					ty: 45.05,
					a: -0.114,
					b: -0.993,
					c: -0.993,
					d: 0.114,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0.289,
					l: 4
				},
				l_t_wing: {
					tx: 50.9,
					ty: 61.05,
					a: 0.528,
					b: -0.849,
					c: -0.849,
					d: -0.528,
					l: 3
				},
				l_b_wing: {
					tx: 43.6,
					ty: 7.05,
					a: 0.08,
					b: 0.712,
					c: -0.712,
					d: 0.08,
					l: 2
				},
				r_b_wing: {
					tx: 23.85,
					ty: 7.7,
					a: -0.138,
					b: 0.714,
					c: 0.714,
					d: 0.138,
					l: 1
				},
				r_t_wing: {
					tx: 9.2,
					ty: 58.4,
					a: -0.394,
					b: -0.919,
					c: 0.919,
					d: -0.394,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0.074,
					l: 4
				},
				l_t_wing: {
					tx: 50.9,
					ty: 61.05,
					a: 0.528,
					b: -0.849,
					c: -0.849,
					d: -0.528,
					l: 3
				},
				l_b_wing: {
					tx: 43.6,
					ty: 7.05,
					a: 0.08,
					b: 0.712,
					c: -0.712,
					d: 0.08,
					l: 2
				},
				r_b_wing: {
					tx: 23.85,
					ty: 7.7,
					a: -0.138,
					b: 0.714,
					c: 0.714,
					d: 0.138,
					l: 1
				},
				r_t_wing: {
					tx: 9.2,
					ty: 58.4,
					a: -0.394,
					b: -0.919,
					c: 0.919,
					d: -0.394,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0,
					l: 4
				},
				l_t_wing: {
					tx: 50.9,
					ty: 61.05,
					a: 0.528,
					b: -0.849,
					c: -0.849,
					d: -0.528,
					l: 3
				},
				l_b_wing: {
					tx: 43.6,
					ty: 7.05,
					a: 0.08,
					b: 0.712,
					c: -0.712,
					d: 0.08,
					l: 2
				},
				r_b_wing: {
					tx: 23.85,
					ty: 7.7,
					a: -0.138,
					b: 0.714,
					c: 0.714,
					d: 0.138,
					l: 1
				},
				r_t_wing: {
					tx: 9.2,
					ty: 58.4,
					a: -0.394,
					b: -0.919,
					c: 0.919,
					d: -0.394,
					l: 0
				}
			},
			{
				wings_smear: {
					tx: -1.55,
					ty: 6.75,
					alpha: 0.699,
					l: 4
				},
				l_b_wing: {
					tx: 15.15,
					ty: 48.85,
					a: 0.606,
					b: -0.29,
					c: -0.333,
					d: -0.697,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 3
				},
				l_t_wing: {
					tx: -1.5,
					ty: 10.05,
					a: 0.919,
					b: -0.394,
					c: 0.394,
					d: 0.919,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 2
				},
				r_b_wing: {
					tx: 49.7,
					ty: 49.4,
					a: -0.609,
					b: -0.352,
					c: 0.352,
					d: -0.609,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 1
				},
				r_t_wing: {
					tx: 67.15,
					ty: 10.85,
					a: -0.909,
					b: -0.418,
					c: -0.418,
					d: 0.909,
					blx: 0,
					bly: 2,
					blq: 1,
					l: 0
				}
			}
		]
	}
};
