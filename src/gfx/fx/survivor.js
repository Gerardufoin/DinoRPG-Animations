// @ts-check
import { fx_bubble_break } from './bubble_break.js';

const glow = {
	distance: 10,
	color: 0xffff00,
	strength: 2,
	quality: 0.5
};

// GFX 231
export const fx_survivor = {
	parts: {
		brk1: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					a: 0.915,
					d: 0.915
				}
			}
		],
		brk2: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					tx: -7.95,
					ty: -19.8,
					a: 0.508,
					d: 0.508
				}
			}
		],
		brk3: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					tx: 14.25,
					ty: 12.2,
					a: 0.263,
					d: 0.263
				}
			}
		],
		brk4: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					tx: -20.35,
					ty: 18.2,
					a: 0.178,
					d: 0.178
				}
			}
		],
		brk5: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					tx: 0.5,
					ty: 11.85,
					a: -0.312,
					d: -0.312,
					b: 0.312,
					c: -0.312
				}
			}
		],
		brk6: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					tx: -28.85,
					ty: -1.1,
					a: -0.186,
					d: -0.186,
					b: 0.186,
					c: -0.186
				}
			}
		],
		brk7: [
			{
				...fx_bubble_break,
				glow: glow,
				transform: {
					tx: 12.45,
					ty: -17.8,
					a: -0.126,
					d: -0.126,
					b: 0.126,
					c: -0.126
				}
			}
		]
	},
	animation: {
		id: 'fx_bubble_break',
		callbacks: {
			1: [
				['resetChildAnimations', 1],
				['resetChildAnimations', 2],
				['resetChildAnimations', 3]
			],
			2: [
				['resetChildAnimations', 4],
				['resetChildAnimations', 5],
				['resetChildAnimations', 6]
			],
			13: [['destroy']]
		},
		frames: [
			{
				brk1: { l: 0 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			},
			{
				brk1: { l: 0 },
				brk2: { l: 1 },
				brk3: { l: 2 },
				brk4: { l: 3 },
				brk5: { l: 4 },
				brk6: { l: 5 },
				brk7: { l: 6 }
			}
		]
	}
};
