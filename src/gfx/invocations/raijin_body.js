// @ts-check
import { ref } from '../references.js';
import { invoc_raijin_hair } from './raijin_hair.js';
import { invoc_raijin_belt } from './raijin_belt.js';

// GFX 375
export const invoc_raijin_body = {
	parts: {
		body: [
			// 371
			{
				...invoc_raijin_belt,
				transform: {
					tx: 285.4,
					ty: 122.5
				}
			},
			// 371
			{
				...invoc_raijin_belt,
				transform: {
					tx: 271.15,
					ty: 136.65,
					a: 0.643,
					d: 0.455,
					b: -0.243,
					c: 0.172
				}
			},
			// 372
			{
				ref: ref.invocations.raijin.body,
				resolution: 1
			}
		],
		hair: [invoc_raijin_hair]
	},
	animation: {
		id: 'invoc_raijin_body',
		frames: [
			{
				body: {
					l: 1
				},
				hair: {
					tx: 97,
					ty: 56.65,
					l: 0
				}
			},
			{
				body: {
					ty: -1,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 56.1,
					l: 0
				}
			},
			{
				body: {
					ty: -2,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 55.6,
					l: 0
				}
			},
			{
				body: {
					ty: -2.9,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 55.05,
					l: 0
				}
			},
			{
				body: {
					ty: -3.75,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 54.55,
					l: 0
				}
			},
			{
				body: {
					ty: -4.55,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 54,
					l: 0
				}
			},
			{
				body: {
					ty: -5.3,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 53.5,
					l: 0
				}
			},
			{
				body: {
					ty: -6,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 52.95,
					l: 0
				}
			},
			{
				body: {
					ty: -6.65,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 52.45,
					l: 0
				}
			},
			{
				body: {
					ty: -7.25,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 51.9,
					l: 0
				}
			},
			{
				body: {
					ty: -7.75,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 51.4,
					l: 0
				}
			},
			{
				body: {
					ty: -8.25,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 50.85,
					l: 0
				}
			},
			{
				body: {
					ty: -8.65,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 50.35,
					l: 0
				}
			},
			{
				body: {
					ty: -9,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 49.8,
					l: 0
				}
			},
			{
				body: {
					ty: -9.3,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 49.3,
					l: 0
				}
			},
			{
				body: {
					ty: -9.55,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 48.75,
					l: 0
				}
			},
			{
				body: {
					ty: -9.75,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 48.25,
					l: 0
				}
			},
			{
				body: {
					ty: -9.9,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 47.7,
					l: 0
				}
			},
			{
				body: {
					ty: -9.95,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 47.2,
					l: 0
				}
			},
			{
				body: {
					ty: -10,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 46.65,
					l: 0
				}
			},
			{
				body: {
					ty: -9.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 47.15,
					l: 0
				}
			},
			{
				body: {
					ty: -9,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 47.65,
					l: 0
				}
			},
			{
				body: {
					ty: -8.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 48.15,
					l: 0
				}
			},
			{
				body: {
					ty: -8,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 48.65,
					l: 0
				}
			},
			{
				body: {
					ty: -7.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 49.15,
					l: 0
				}
			},
			{
				body: {
					ty: -7,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 49.65,
					l: 0
				}
			},
			{
				body: {
					ty: -6.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 50.15,
					l: 0
				}
			},
			{
				body: {
					ty: -6,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 50.65,
					l: 0
				}
			},
			{
				body: {
					ty: -5.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 51.15,
					l: 0
				}
			},
			{
				body: {
					ty: -5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 51.65,
					l: 0
				}
			},
			{
				body: {
					ty: -4.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 52.15,
					l: 0
				}
			},
			{
				body: {
					ty: -4,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 52.65,
					l: 0
				}
			},
			{
				body: {
					ty: -3.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 53.15,
					l: 0
				}
			},
			{
				body: {
					ty: -3,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 53.65,
					l: 0
				}
			},
			{
				body: {
					ty: -2.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 54.15,
					l: 0
				}
			},
			{
				body: {
					ty: -2,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 54.65,
					l: 0
				}
			},
			{
				body: {
					ty: -1.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 55.15,
					l: 0
				}
			},
			{
				body: {
					ty: -1,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 55.65,
					l: 0
				}
			},
			{
				body: {
					ty: -0.5,
					l: 1
				},
				hair: {
					tx: 97,
					ty: 56.15,
					l: 0
				}
			},
			{
				body: {
					l: 1
				},
				hair: {
					tx: 97,
					ty: 56.65,
					l: 0
				}
			}
		]
	}
};
