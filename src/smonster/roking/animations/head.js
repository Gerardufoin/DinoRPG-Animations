import { ref } from '../../references.js';

export const roking_eye_glow = {
	distance: 5,
	color: 0xff0000,
	quality: 0.5,
	strength: 1
};

const head_parts = {
	f: [
		{
			ref: ref.roking.face
		}
	],
	le: [
		{
			ref: ref.roking.left_eye,
			glow: roking_eye_glow
		}
	],
	re: [
		{
			ref: ref.roking.right_eye,
			glow: roking_eye_glow
		}
	],
	m: [
		{
			ref: ref.roking.mouth
		}
	]
};

// 3267
export const roking_head_hit = {
	parts: head_parts,
	animation: {
		id: 'roking_head_hit',
		callbacks: {
			7: [['stop']]
		},
		frames: [
			{
				le: {
					tx: 67.45,
					ty: 64,
					a: 1.351,
					d: 2,
					l: 3
				},
				re: {
					tx: 40.45,
					ty: 60.3,
					a: 1.254,
					d: 3.005,
					l: 2
				},
				m: {
					tx: 72.15,
					ty: 88.85,
					a: -0.598,
					d: -0.819,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 67.7,
					ty: 64.3,
					a: 1.258,
					d: 1.735,
					l: 3
				},
				re: {
					tx: 40.65,
					ty: 60.95,
					a: 1.187,
					d: 2.473,
					l: 2
				},
				m: {
					tx: 71.75,
					ty: 88.25,
					a: -0.584,
					d: -0.773,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 67.9,
					ty: 64.55,
					a: 1.179,
					d: 1.51,
					l: 3
				},
				re: {
					tx: 40.85,
					ty: 61.45,
					a: 1.13,
					d: 2.023,
					l: 2
				},
				m: {
					tx: 71.4,
					ty: 87.7,
					a: -0.57,
					d: -0.728,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.1,
					ty: 64.75,
					a: 1.115,
					d: 1.327,
					l: 3
				},
				re: {
					tx: 40.95,
					ty: 61.9,
					a: 1.083,
					d: 1.655,
					l: 2
				},
				m: {
					tx: 71.05,
					ty: 87.1,
					a: -0.556,
					d: -0.682,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.25,
					ty: 64.9,
					a: 1.064,
					d: 1.184,
					l: 3
				},
				re: {
					tx: 41.05,
					ty: 62.25,
					a: 1.047,
					d: 1.368,
					l: 2
				},
				m: {
					tx: 70.65,
					ty: 86.55,
					a: -0.542,
					d: -0.637,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.35,
					ty: 65,
					a: 1.029,
					d: 1.082,
					l: 3
				},
				re: {
					tx: 41.15,
					ty: 62.5,
					a: 1.021,
					d: 1.164,
					l: 2
				},
				m: {
					tx: 70.35,
					ty: 86,
					a: -0.528,
					d: -0.591,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.4,
					ty: 65.05,
					a: 1.007,
					d: 1.02,
					l: 3
				},
				re: {
					tx: 41.15,
					ty: 62.6,
					a: 1.005,
					d: 1.041,
					l: 2
				},
				m: {
					tx: 69.95,
					ty: 85.4,
					a: -0.514,
					d: -0.546,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			}
		]
	}
};

// 3267
export const roking_head_dead = {
	parts: head_parts,
	animation: {
		id: 'roking_head_dead',
		callbacks: {
			14: [['stop']]
		},
		frames: [
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.996,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.996,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.98,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.98,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.953,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.953,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.918,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.918,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.871,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.871,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.816,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.816,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.75,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.75,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.672,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.672,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.586,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.586,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.488,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.488,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.383,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.383,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.266,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.266,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0.137,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0.137,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			},
			{
				le: {
					tx: 68.45,
					ty: 65.1,
					alpha: 0,
					l: 3
				},
				re: {
					tx: 41.2,
					ty: 62.65,
					alpha: 0,
					l: 2
				},
				m: {
					tx: 69.6,
					ty: 84.8,
					a: -0.5,
					d: -0.5,
					l: 1
				},
				f: {
					l: 0
				}
			}
		]
	}
};
