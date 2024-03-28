// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 222
export const fx_bubble = {
	parts: {
		base: [
			{
				ref: ref.fx.bubble.base,
				blend: BLEND_MODES.ADD
			}
		],
		wave: [
			{
				ref: ref.fx.shockwave
			}
		],
		fx1: [
			{
				ref: ref.fx.bubble.fx_1
			}
		],
		fx2: [
			{
				ref: ref.fx.bubble.fx_2
			}
		],
		fx3: [
			{
				ref: ref.fx.bubble.fx_3
			}
		],
		fx4: [
			{
				ref: ref.fx.bubble.fx_4
			}
		],
		fx5: [
			{
				ref: ref.fx.bubble.fx_5
			}
		],
		fx6: [
			{
				ref: ref.fx.bubble.fx_6
			}
		],
		fx7: [
			{
				ref: ref.fx.bubble.fx_7
			}
		],
		fx8: [
			{
				ref: ref.fx.bubble.fx_8
			}
		],
		fx9: [
			{
				ref: ref.fx.bubble.fx_9
			}
		]
	},
	animation: {
		id: 'fx_bubble',
		callbacks: {
			16: [['destroy']]
		},
		frames: [
			{
				wave: {
					a: 1.094,
					d: 1.094,
					l: 1
				},
				base: {
					l: 0
				}
			},
			{
				wave: {
					a: 1.107,
					d: 1.107,
					alpha: 0.855,
					l: 1
				},
				base: {
					alpha: 0.918,
					l: 0
				}
			},
			{
				wave: {
					a: 1.119,
					d: 1.119,
					alpha: 0.715,
					l: 1
				},
				base: {
					alpha: 0.832,
					l: 0
				}
			},
			{
				wave: {
					a: 1.132,
					d: 1.132,
					alpha: 0.57,
					l: 1
				},
				base: {
					alpha: 0.75,
					l: 0
				}
			},
			{
				wave: {
					a: 1.145,
					d: 1.145,
					alpha: 0.43,
					l: 1
				},
				base: {
					alpha: 0.668,
					l: 0
				}
			},
			{
				wave: {
					a: 1.158,
					d: 1.158,
					alpha: 0.285,
					l: 1
				},
				base: {
					alpha: 0.582,
					l: 0
				}
			},
			{
				wave: {
					a: 1.171,
					d: 1.171,
					alpha: 0.145,
					l: 1
				},
				base: {
					alpha: 0.5,
					l: 0
				}
			},
			{
				fx1: {
					l: 2
				},
				wave: {
					a: 1.184,
					d: 1.184,
					alpha: 0,
					l: 1
				},
				base: {
					alpha: 0.418,
					l: 0
				}
			},
			{
				fx2: {
					l: 1
				},
				base: {
					alpha: 0.332,
					l: 0
				}
			},
			{
				fx3: {
					l: 1
				},
				base: {
					alpha: 0.25,
					l: 0
				}
			},
			{
				fx4: {
					l: 1
				},
				base: {
					alpha: 0.168,
					l: 0
				}
			},
			{
				fx5: {
					l: 1
				},
				base: {
					alpha: 0.082,
					l: 0
				}
			},
			{
				fx6: {
					l: 1
				},
				base: {
					alpha: 0,
					l: 0
				}
			},
			{
				fx7: {
					l: 0
				}
			},
			{
				fx8: {
					l: 0
				}
			},
			{
				fx9: {
					l: 0
				}
			},
			{}
		]
	}
};
