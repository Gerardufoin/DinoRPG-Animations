import { BLEND_MODES } from 'pixi.js';
import { ref } from '../../references.js';

// 3099
export const groule_orb = {
	parts: {
		h: [
			// 3098
			{
				ref: ref.groule.orb_highlight,
				transform: {
					tx: 2.15,
					ty: 19.55
				},
				/*blur: {
					x: 1,
					y: 1
				}*/
				blend: BLEND_MODES.OVERLAY
			}
		],
		o: [
			// 3093
			{
				ref: ref.groule.orb
			},
			// 3095
			{
				ref: ref.groule.orb_details,
				blend: BLEND_MODES.OVERLAY
			}
		]
	},
	animation: {
		id: 'groule_orb',
		frames: [
			{
				h: {
					l: 1
				},
				o: {
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -2.25,
					ty: 2.5,
					a: 0.991,
					b: -0.131,
					c: 0.131,
					d: 0.991,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -4.15,
					ty: 5.4,
					a: 0.964,
					b: -0.263,
					c: 0.263,
					d: 0.964,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -5.6,
					ty: 8.4,
					a: 0.921,
					b: -0.388,
					c: 0.388,
					d: 0.921,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -6.75,
					ty: 11.65,
					a: 0.86,
					b: -0.508,
					c: 0.508,
					d: 0.86,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -7.35,
					ty: 15.05,
					a: 0.783,
					b: -0.619,
					c: 0.619,
					d: 0.783,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -7.55,
					ty: 18.4,
					a: 0.695,
					b: -0.717,
					c: 0.717,
					d: 0.695,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -7.3,
					ty: 21.9,
					a: 0.592,
					b: -0.804,
					c: 0.804,
					d: 0.592,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -6.6,
					ty: 25.25,
					a: 0.478,
					b: -0.877,
					c: 0.877,
					d: 0.478,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -5.45,
					ty: 28.4,
					a: 0.359,
					b: -0.932,
					c: 0.932,
					d: 0.359,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -3.9,
					ty: 31.45,
					a: 0.23,
					b: -0.972,
					c: 0.972,
					d: 0.23,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: -1.9,
					ty: 34.3,
					a: 0.097,
					b: -0.995,
					c: 0.995,
					d: 0.097,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 0.3,
					ty: 36.7,
					a: -0.031,
					b: -0.999,
					c: 0.999,
					d: -0.031,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 2.95,
					ty: 38.9,
					a: -0.165,
					b: -0.986,
					c: 0.986,
					d: -0.165,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 5.8,
					ty: 40.7,
					a: -0.293,
					b: -0.955,
					c: 0.955,
					d: -0.293,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 9,
					ty: 42.1,
					a: -0.419,
					b: -0.906,
					c: 0.906,
					d: -0.419,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 12.3,
					ty: 43.1,
					a: -0.537,
					b: -0.842,
					c: 0.842,
					d: -0.537,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 15.6,
					ty: 43.6,
					a: -0.644,
					b: -0.763,
					c: 0.763,
					d: -0.644,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 19.05,
					ty: 43.7,
					a: -0.741,
					b: -0.67,
					c: 0.67,
					d: -0.741,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 22.5,
					ty: 43.3,
					a: -0.824,
					b: -0.564,
					c: 0.564,
					d: -0.824,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 25.75,
					ty: 42.5,
					a: -0.891,
					b: -0.45,
					c: 0.45,
					d: -0.891,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 28.95,
					ty: 41.25,
					a: -0.944,
					b: -0.326,
					c: 0.326,
					d: -0.944,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 32,
					ty: 39.55,
					a: -0.98,
					b: -0.196,
					c: 0.196,
					d: -0.98,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 34.65,
					ty: 37.55,
					a: -0.998,
					b: -0.066,
					c: 0.066,
					d: -0.998,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 37.05,
					ty: 35.15,
					a: -0.998,
					b: 0.066,
					c: -0.066,
					d: -0.998,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 39.1,
					ty: 32.55,
					a: -0.98,
					b: 0.196,
					c: -0.196,
					d: -0.98,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 40.85,
					ty: 29.55,
					a: -0.944,
					b: 0.326,
					c: -0.326,
					d: -0.944,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 42.15,
					ty: 26.3,
					a: -0.891,
					b: 0.45,
					c: -0.45,
					d: -0.891,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 43,
					ty: 23.1,
					a: -0.824,
					b: 0.564,
					c: -0.564,
					d: -0.824,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 43.45,
					ty: 19.7,
					a: -0.741,
					b: 0.67,
					c: -0.67,
					d: -0.741,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 43.4,
					ty: 16.2,
					a: -0.644,
					b: 0.763,
					c: -0.763,
					d: -0.644,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 42.9,
					ty: 12.9,
					a: -0.537,
					b: 0.842,
					c: -0.842,
					d: -0.537,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 42,
					ty: 9.6,
					a: -0.419,
					b: 0.906,
					c: -0.906,
					d: -0.419,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 40.6,
					ty: 6.4,
					a: -0.293,
					b: 0.955,
					c: -0.955,
					d: -0.293,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 38.85,
					ty: 3.5,
					a: -0.165,
					b: 0.986,
					c: -0.986,
					d: -0.165,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 36.7,
					ty: 0.8,
					a: -0.031,
					b: 0.999,
					c: -0.999,
					d: -0.031,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 34.3,
					ty: -1.4,
					a: 0.097,
					b: 0.995,
					c: -0.995,
					d: 0.097,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 31.5,
					ty: -3.45,
					a: 0.23,
					b: 0.972,
					c: -0.972,
					d: 0.23,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 28.45,
					ty: -5.1,
					a: 0.359,
					b: 0.932,
					c: -0.932,
					d: 0.359,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 25.3,
					ty: -6.25,
					a: 0.478,
					b: 0.877,
					c: -0.877,
					d: 0.478,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 22,
					ty: -7,
					a: 0.592,
					b: 0.804,
					c: -0.804,
					d: 0.592,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 18.55,
					ty: -7.3,
					a: 0.695,
					b: 0.717,
					c: -0.717,
					d: 0.695,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 15.15,
					ty: -7.15,
					a: 0.783,
					b: 0.619,
					c: -0.619,
					d: 0.783,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 11.75,
					ty: -6.55,
					a: 0.86,
					b: 0.508,
					c: -0.508,
					d: 0.86,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 8.5,
					ty: -5.5,
					a: 0.921,
					b: 0.388,
					c: -0.388,
					d: 0.921,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 5.45,
					ty: -4.1,
					a: 0.964,
					b: 0.263,
					c: -0.263,
					d: 0.964,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					tx: 2.55,
					ty: -2.2,
					a: 0.991,
					b: 0.131,
					c: -0.131,
					d: 0.991,
					l: 0
				}
			},
			{
				h: {
					l: 1
				},
				o: {
					l: 0
				}
			}
		]
	}
};