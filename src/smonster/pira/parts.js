// @ts-check

import { ref } from '../references.js';

export const parts = {
	// 363
	tail: [
		{
			ref: ref.pira.tail,
			colorOffset: {
				r: -46,
				b: -92
			}
		}
	],
	// 365
	r_eye: [
		{
			ref: ref.pira.r_eye
		}
	],
	// 369
	body: [
		// 367
		{
			ref: ref.pira.body,
			colorOffset: {
				r: -153,
				g: -77,
				b: -62
			}
		},
		// 368
		{
			ref: ref.pira.body_highlight
		}
	],
	// 371
	l_eye: [
		{
			ref: ref.pira.l_eye
		}
	],
	// 374
	back_fin: [
		{
			ref: ref.pira.back_fin,
			colorOffset: {
				r: -46,
				b: -92
			}
		}
	],
	// 379
	mouth: [
		// 375
		{
			ref: ref.pira.teeth
		},
		// 377
		{
			ref: ref.pira.mouth,
			transform: {
				tx: 0.2
			},
			colorOffset: {
				r: -153,
				g: -77,
				b: -62
			}
		},
		// 378
		{
			ref: ref.pira.mouth_highlight
		}
	],
	// 382
	fin: [
		{
			ref: ref.pira.fin,
			transform: {
				tx: 0.05,
				ty: 0.1
			},
			colorOffset: {
				r: -46,
				b: -92
			}
		}
	],
	// 388
	inside: [
		{
			ref: ref.pira.inside
		}
	]
};
