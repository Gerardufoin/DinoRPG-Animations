// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_invocations.js';
import { invoc_totem_speed } from './totem_speed.js';

// GFX 536
export const invoc_totem_ship = {
	parts: {
		// 522
		l_engine: [
			// 209
			{
				ref: ref.totem.engine,
				transform: {
					tx: 22.65,
					ty: 22.6,
					a: 0.796,
					d: 0.794
				},
				glow: {
					distance: 12,
					color: 0xffffff,
					quality: 1,
					strength: 1
				}
			}
		],
		// 522
		r_engine: [
			// 209
			{
				ref: ref.totem.engine,
				transform: {
					tx: 22.65,
					ty: 22.6,
					a: 0.796,
					d: 0.794
				},
				glow: {
					distance: 12,
					color: 0xffffff,
					quality: 1,
					strength: 1
				}
			}
		],
		// 529
		speed: [
			{
				...invoc_totem_speed,
				blur: {
					x: 0.5,
					y: 0.5
				}
			}
		],
		// 531
		ship: [
			{
				ref: ref.totem.body,
				resolution: 1
			}
		],
		// 533
		r_eye: [
			{
				ref: ref.totem.right_eye,
				transform: {
					tx: -32.45,
					ty: 19.05
				},
				blend: BLEND_MODES.ADD,
				blur: {
					x: 1,
					y: 1
				}
			}
		],
		// 535
		l_eye: [
			{
				ref: ref.totem.left_eye,
				transform: {
					tx: 11.05,
					ty: -24.45
				},
				blend: BLEND_MODES.ADD,
				blur: {
					x: 1,
					y: 1
				}
			}
		]
	},
	animation: {
		id: 'invoc_totem_ship',
		expectedScaling: {
			ship: 1
		},
		frames: [
			{
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 291.45,
					ty: 236.4,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 1
				},
				l_engine: {
					tx: 342.8,
					ty: 214.35,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 0
				}
			},
			{
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 286.45,
					ty: 234.95,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 1
				},
				l_engine: {
					tx: 337.75,
					ty: 212.85,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 0
				}
			},
			{
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 281.45,
					ty: 233.45,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 1
				},
				l_engine: {
					tx: 332.75,
					ty: 211.4,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 276.5,
					ty: 232.05,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 1
				},
				l_engine: {
					tx: 327.75,
					ty: 209.9,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.109,
					l: 5
				},
				r_eye: {
					alpha: 0.109,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 271.5,
					ty: 230.6,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 1
				},
				l_engine: {
					tx: 322.85,
					ty: 208.55,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.223,
					l: 5
				},
				r_eye: {
					alpha: 0.223,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 275.55,
					ty: 231.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 1
				},
				l_engine: {
					tx: 326.9,
					ty: 209.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.332,
					l: 5
				},
				r_eye: {
					alpha: 0.332,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 279.45,
					ty: 233,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 1
				},
				l_engine: {
					tx: 330.9,
					ty: 210.95,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.445,
					l: 5
				},
				r_eye: {
					alpha: 0.445,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 283.5,
					ty: 234.1,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 1
				},
				l_engine: {
					tx: 334.85,
					ty: 212.15,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.555,
					l: 5
				},
				r_eye: {
					alpha: 0.555,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 287.45,
					ty: 235.35,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 1
				},
				l_engine: {
					tx: 338.9,
					ty: 213.3,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.668,
					l: 5
				},
				r_eye: {
					alpha: 0.668,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 291.45,
					ty: 236.4,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 1
				},
				l_engine: {
					tx: 342.8,
					ty: 214.35,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.777,
					l: 5
				},
				r_eye: {
					alpha: 0.777,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 286.45,
					ty: 234.95,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 1
				},
				l_engine: {
					tx: 337.75,
					ty: 212.85,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.891,
					l: 5
				},
				r_eye: {
					alpha: 0.891,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 281.45,
					ty: 233.45,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 1
				},
				l_engine: {
					tx: 332.75,
					ty: 211.4,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 0
				}
			},
			{
				l_eye: {
					l: 5
				},
				r_eye: {
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 276.5,
					ty: 232.05,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 1
				},
				l_engine: {
					tx: 327.75,
					ty: 209.9,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.926,
					l: 5
				},
				r_eye: {
					alpha: 0.926,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 271.5,
					ty: 230.6,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 1
				},
				l_engine: {
					tx: 322.85,
					ty: 208.55,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.852,
					l: 5
				},
				r_eye: {
					alpha: 0.852,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 275.55,
					ty: 231.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 1
				},
				l_engine: {
					tx: 326.9,
					ty: 209.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.777,
					l: 5
				},
				r_eye: {
					alpha: 0.777,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 279.45,
					ty: 233,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 1
				},
				l_engine: {
					tx: 330.9,
					ty: 210.95,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.703,
					l: 5
				},
				r_eye: {
					alpha: 0.703,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 283.5,
					ty: 234.1,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 1
				},
				l_engine: {
					tx: 334.85,
					ty: 212.15,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.629,
					l: 5
				},
				r_eye: {
					alpha: 0.629,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 287.45,
					ty: 235.35,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 1
				},
				l_engine: {
					tx: 338.9,
					ty: 213.3,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.703,
					l: 5
				},
				r_eye: {
					alpha: 0.703,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 291.45,
					ty: 236.4,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 1
				},
				l_engine: {
					tx: 342.8,
					ty: 214.35,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.777,
					l: 5
				},
				r_eye: {
					alpha: 0.777,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 286.45,
					ty: 234.95,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 1
				},
				l_engine: {
					tx: 337.75,
					ty: 212.85,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.852,
					l: 5
				},
				r_eye: {
					alpha: 0.852,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 281.45,
					ty: 233.45,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 1
				},
				l_engine: {
					tx: 332.75,
					ty: 211.4,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.926,
					l: 5
				},
				r_eye: {
					alpha: 0.926,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 276.5,
					ty: 232.05,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 1
				},
				l_engine: {
					tx: 327.75,
					ty: 209.9,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 0
				}
			},
			{
				l_eye: {
					l: 5
				},
				r_eye: {
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 271.5,
					ty: 230.6,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 1
				},
				l_engine: {
					tx: 322.85,
					ty: 208.55,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.891,
					l: 5
				},
				r_eye: {
					alpha: 0.891,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 275.55,
					ty: 231.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 1
				},
				l_engine: {
					tx: 326.9,
					ty: 209.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.777,
					l: 5
				},
				r_eye: {
					alpha: 0.777,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 279.45,
					ty: 233,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 1
				},
				l_engine: {
					tx: 330.9,
					ty: 210.95,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.668,
					l: 5
				},
				r_eye: {
					alpha: 0.668,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 283.5,
					ty: 234.1,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 1
				},
				l_engine: {
					tx: 334.85,
					ty: 212.15,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.555,
					l: 5
				},
				r_eye: {
					alpha: 0.555,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 287.45,
					ty: 235.35,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 1
				},
				l_engine: {
					tx: 338.9,
					ty: 213.3,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.445,
					l: 5
				},
				r_eye: {
					alpha: 0.445,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 291.45,
					ty: 236.4,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 1
				},
				l_engine: {
					tx: 342.8,
					ty: 214.35,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.332,
					l: 5
				},
				r_eye: {
					alpha: 0.332,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 286.45,
					ty: 234.95,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 1
				},
				l_engine: {
					tx: 337.75,
					ty: 212.85,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.223,
					l: 5
				},
				r_eye: {
					alpha: 0.223,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 281.45,
					ty: 233.45,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 1
				},
				l_engine: {
					tx: 332.75,
					ty: 211.4,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.109,
					l: 5
				},
				r_eye: {
					alpha: 0.109,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 276.5,
					ty: 232.05,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 1
				},
				l_engine: {
					tx: 327.75,
					ty: 209.9,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 271.5,
					ty: 230.6,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 1
				},
				l_engine: {
					tx: 322.85,
					ty: 208.55,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.199,
					l: 5
				},
				r_eye: {
					alpha: 0.199,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 275.55,
					ty: 231.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 1
				},
				l_engine: {
					tx: 326.9,
					ty: 209.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.398,
					l: 5
				},
				r_eye: {
					alpha: 0.398,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 279.45,
					ty: 233,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 1
				},
				l_engine: {
					tx: 330.9,
					ty: 210.95,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.602,
					l: 5
				},
				r_eye: {
					alpha: 0.602,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 283.5,
					ty: 234.1,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 1
				},
				l_engine: {
					tx: 334.85,
					ty: 212.15,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.801,
					l: 5
				},
				r_eye: {
					alpha: 0.801,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 287.45,
					ty: 235.35,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 1
				},
				l_engine: {
					tx: 338.9,
					ty: 213.3,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 0
				}
			},
			{
				l_eye: {
					l: 5
				},
				r_eye: {
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 291.45,
					ty: 236.4,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 1
				},
				l_engine: {
					tx: 342.8,
					ty: 214.35,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.801,
					l: 5
				},
				r_eye: {
					alpha: 0.801,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 286.45,
					ty: 234.95,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 1
				},
				l_engine: {
					tx: 337.75,
					ty: 212.85,
					a: 0.7,
					b: 0.393,
					c: -0.28,
					d: 0.499,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.602,
					l: 5
				},
				r_eye: {
					alpha: 0.602,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 281.45,
					ty: 233.45,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 1
				},
				l_engine: {
					tx: 332.75,
					ty: 211.4,
					a: 0.867,
					b: 0.486,
					c: -0.26,
					d: 0.464,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.398,
					l: 5
				},
				r_eye: {
					alpha: 0.398,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 276.5,
					ty: 232.05,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 1
				},
				l_engine: {
					tx: 327.75,
					ty: 209.9,
					a: 1.033,
					b: 0.58,
					c: -0.241,
					d: 0.429,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0.199,
					l: 5
				},
				r_eye: {
					alpha: 0.199,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 271.5,
					ty: 230.6,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 1
				},
				l_engine: {
					tx: 322.85,
					ty: 208.55,
					a: 1.201,
					b: 0.674,
					c: -0.221,
					d: 0.395,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 275.55,
					ty: 231.85,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 1
				},
				l_engine: {
					tx: 326.9,
					ty: 209.8,
					a: 1.066,
					b: 0.599,
					c: -0.237,
					d: 0.422,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 279.5,
					ty: 233,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 1
				},
				l_engine: {
					tx: 330.9,
					ty: 210.95,
					a: 0.933,
					b: 0.524,
					c: -0.252,
					d: 0.45,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 283.5,
					ty: 234.15,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 1
				},
				l_engine: {
					tx: 334.85,
					ty: 212.15,
					a: 0.8,
					b: 0.449,
					c: -0.268,
					d: 0.478,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 287.5,
					ty: 235.35,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 1
				},
				l_engine: {
					tx: 338.9,
					ty: 213.3,
					a: 0.667,
					b: 0.374,
					c: -0.284,
					d: 0.506,
					l: 0
				}
			},
			{
				l_eye: {
					alpha: 0,
					l: 5
				},
				r_eye: {
					alpha: 0,
					l: 4
				},
				ship: {
					l: 3
				},
				speed: {
					tx: -6.75,
					ty: -0.35,
					l: 2
				},
				r_engine: {
					tx: 291.45,
					ty: 236.4,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 1
				},
				l_engine: {
					tx: 342.8,
					ty: 214.35,
					a: 0.535,
					b: 0.3,
					c: -0.3,
					d: 0.535,
					l: 0
				}
			}
		]
	}
};
