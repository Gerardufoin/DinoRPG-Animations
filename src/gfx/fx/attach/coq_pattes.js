// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../../references.js';

// TODO find way for the mark to work with both MULTIPLY and ADD to simulate OVERLAY

const coq_patte_frames = [
	{
		p: {}
	},
	{
		p: {
			alpha: 0.992
		}
	},
	{
		p: {
			alpha: 0.984
		}
	},
	{
		p: {
			alpha: 0.977
		}
	},
	{
		p: {
			alpha: 0.969
		}
	},
	{
		p: {
			alpha: 0.961
		}
	},
	{
		p: {
			alpha: 0.957
		}
	},
	{
		p: {
			alpha: 0.949
		}
	},
	{
		p: {
			alpha: 0.941
		}
	},
	{
		p: {
			alpha: 0.934
		}
	},
	{
		p: {
			alpha: 0.926
		}
	},
	{
		p: {
			alpha: 0.918
		}
	},
	{
		p: {
			alpha: 0.91
		}
	},
	{
		p: {
			alpha: 0.902
		}
	},
	{
		p: {
			alpha: 0.895
		}
	},
	{
		p: {
			alpha: 0.887
		}
	},
	{
		p: {
			alpha: 0.879
		}
	},
	{
		p: {
			alpha: 0.875
		}
	},
	{
		p: {
			alpha: 0.867
		}
	},
	{
		p: {
			alpha: 0.859
		}
	},
	{
		p: {
			alpha: 0.852
		}
	},
	{
		p: {
			alpha: 0.844
		}
	},
	{
		p: {
			alpha: 0.836
		}
	},
	{
		p: {
			alpha: 0.828
		}
	},
	{
		p: {
			alpha: 0.82
		}
	},
	{
		p: {
			alpha: 0.813
		}
	},
	{
		p: {
			alpha: 0.805
		}
	},
	{
		p: {
			alpha: 0.797
		}
	},
	{
		p: {
			alpha: 0.793
		}
	},
	{
		p: {
			alpha: 0.785
		}
	},
	{
		p: {
			alpha: 0.777
		}
	},
	{
		p: {
			alpha: 0.77
		}
	},
	{
		p: {
			alpha: 0.762
		}
	},
	{
		p: {
			alpha: 0.754
		}
	},
	{
		p: {
			alpha: 0.746
		}
	},
	{
		p: {
			alpha: 0.738
		}
	},
	{
		p: {
			alpha: 0.73
		}
	},
	{
		p: {
			alpha: 0.723
		}
	},
	{
		p: {
			alpha: 0.715
		}
	},
	{
		p: {
			alpha: 0.707
		}
	},
	{
		p: {
			alpha: 0.703
		}
	},
	{
		p: {
			alpha: 0.695
		}
	},
	{
		p: {
			alpha: 0.688
		}
	},
	{
		p: {
			alpha: 0.68
		}
	},
	{
		p: {
			alpha: 0.672
		}
	},
	{
		p: {
			alpha: 0.664
		}
	},
	{
		p: {
			alpha: 0.656
		}
	},
	{
		p: {
			alpha: 0.648
		}
	},
	{
		p: {
			alpha: 0.641
		}
	},
	{
		p: {
			alpha: 0.633
		}
	},
	{
		p: {
			alpha: 0.625
		}
	},
	{
		p: {
			alpha: 0.621
		}
	},
	{
		p: {
			alpha: 0.613
		}
	},
	{
		p: {
			alpha: 0.605
		}
	},
	{
		p: {
			alpha: 0.598
		}
	},
	{
		p: {
			alpha: 0.59
		}
	},
	{
		p: {
			alpha: 0.582
		}
	},
	{
		p: {
			alpha: 0.574
		}
	},
	{
		p: {
			alpha: 0.566
		}
	},
	{
		p: {
			alpha: 0.559
		}
	},
	{
		p: {
			alpha: 0.551
		}
	},
	{
		p: {
			alpha: 0.543
		}
	},
	{
		p: {
			alpha: 0.539
		}
	},
	{
		p: {
			alpha: 0.531
		}
	},
	{
		p: {
			alpha: 0.523
		}
	},
	{
		p: {
			alpha: 0.516
		}
	},
	{
		p: {
			alpha: 0.508
		}
	},
	{
		p: {
			alpha: 0.5
		}
	},
	{
		p: {
			alpha: 0.492
		}
	},
	{
		p: {
			alpha: 0.484
		}
	},
	{
		p: {
			alpha: 0.477
		}
	},
	{
		p: {
			alpha: 0.469
		}
	},
	{
		p: {
			alpha: 0.461
		}
	},
	{
		p: {
			alpha: 0.457
		}
	},
	{
		p: {
			alpha: 0.449
		}
	},
	{
		p: {
			alpha: 0.441
		}
	},
	{
		p: {
			alpha: 0.434
		}
	},
	{
		p: {
			alpha: 0.426
		}
	},
	{
		p: {
			alpha: 0.418
		}
	},
	{
		p: {
			alpha: 0.41
		}
	},
	{
		p: {
			alpha: 0.402
		}
	},
	{
		p: {
			alpha: 0.395
		}
	},
	{
		p: {
			alpha: 0.387
		}
	},
	{
		p: {
			alpha: 0.379
		}
	},
	{
		p: {
			alpha: 0.375
		}
	},
	{
		p: {
			alpha: 0.367
		}
	},
	{
		p: {
			alpha: 0.359
		}
	},
	{
		p: {
			alpha: 0.352
		}
	},
	{
		p: {
			alpha: 0.344
		}
	},
	{
		p: {
			alpha: 0.336
		}
	},
	{
		p: {
			alpha: 0.328
		}
	},
	{
		p: {
			alpha: 0.32
		}
	},
	{
		p: {
			alpha: 0.313
		}
	},
	{
		p: {
			alpha: 0.305
		}
	},
	{
		p: {
			alpha: 0.297
		}
	},
	{
		p: {
			alpha: 0.293
		}
	},
	{
		p: {
			alpha: 0.285
		}
	},
	{
		p: {
			alpha: 0.277
		}
	},
	{
		p: {
			alpha: 0.27
		}
	},
	{
		p: {
			alpha: 0.262
		}
	},
	{
		p: {
			alpha: 0.254
		}
	},
	{
		p: {
			alpha: 0.246
		}
	},
	{
		p: {
			alpha: 0.238
		}
	},
	{
		p: {
			alpha: 0.23
		}
	},
	{
		p: {
			alpha: 0.223
		}
	},
	{
		p: {
			alpha: 0.215
		}
	},
	{
		p: {
			alpha: 0.207
		}
	},
	{
		p: {
			alpha: 0.203
		}
	},
	{
		p: {
			alpha: 0.195
		}
	},
	{
		p: {
			alpha: 0.188
		}
	},
	{
		p: {
			alpha: 0.18
		}
	},
	{
		p: {
			alpha: 0.172
		}
	},
	{
		p: {
			alpha: 0.164
		}
	},
	{
		p: {
			alpha: 0.156
		}
	},
	{
		p: {
			alpha: 0.148
		}
	},
	{
		p: {
			alpha: 0.141
		}
	},
	{
		p: {
			alpha: 0.133
		}
	},
	{
		p: {
			alpha: 0.125
		}
	},
	{
		p: {
			alpha: 0.121
		}
	},
	{
		p: {
			alpha: 0.113
		}
	},
	{
		p: {
			alpha: 0.105
		}
	},
	{
		p: {
			alpha: 0.098
		}
	},
	{
		p: {
			alpha: 0.09
		}
	},
	{
		p: {
			alpha: 0.082
		}
	},
	{
		p: {
			alpha: 0.074
		}
	},
	{
		p: {
			alpha: 0.066
		}
	},
	{
		p: {
			alpha: 0.059
		}
	},
	{
		p: {
			alpha: 0.051
		}
	},
	{
		p: {
			alpha: 0.043
		}
	},
	{
		p: {
			alpha: 0.039
		}
	},
	{
		p: {
			alpha: 0.031
		}
	},
	{
		p: {
			alpha: 0.023
		}
	},
	{
		p: {
			alpha: 0.016
		}
	},
	{
		p: {
			alpha: 0.008
		}
	},
	{
		p: {
			alpha: 0
		}
	}
];

// GFX 672 coq_patteA
export const fx_coq_patte_a = {
	parts: {
		p: [
			{
				ref: ref.fx.coq_patte_a,
				blend: BLEND_MODES.MULTIPLY,
				transform: {
					tx: 5.35,
					ty: 15.35
				}
			},
			{
				ref: ref.fx.coq_patte_a_highlight,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: 5.35,
					ty: 15.35
				}
			}
		]
	},
	animation: {
		id: 'fx_coq_patte_a',
		callbacks: {
			134: [['destroy']]
		},
		frames: coq_patte_frames
	}
};

// GFX 664 coq_patteB
export const fx_coq_patte_b = {
	parts: {
		p: [
			{
				ref: ref.fx.coq_patte_b,
				blend: BLEND_MODES.MULTIPLY,
				transform: {
					tx: -25.9,
					ty: -5.45
				}
			},
			{
				ref: ref.fx.coq_patte_b_highlight,
				blend: BLEND_MODES.ADD,
				transform: {
					tx: -25.9,
					ty: -5.45
				}
			}
		]
	},
	animation: {
		id: 'fx_coq_patte_b',
		callbacks: {
			134: [['destroy']]
		},
		frames: coq_patte_frames
	}
};
