// @ts-check

import { ref } from '../references.js';
import { ref as ref_dino } from '../../sdino/references.js';
import { kazka_back_nerves } from './animations/back_nerves.js';
import { kazka_eye } from './animations/eye.js';
import { kazka_float } from './animations/float.js';
import { fx_dust_frames } from '../../gfx/fx/attach/smoke/dust.js';

export const parts = {
	// 437
	spike: [
		{
			ref: ref.kazka.spike
		}
	],
	// 439
	back_spike: [
		{
			ref: ref.kazka.back_spike
		}
	],
	// 446
	float: [kazka_float],
	// 452
	back: [
		// 447
		{
			ref: ref.kazka.back
		},
		kazka_back_nerves
	],
	// 454
	back_highlight: [
		{
			ref: ref.kazka.back_highlight
		}
	],
	// 459
	eye: [kazka_eye],
	// 464
	back_explosion_1: [
		{
			ref: ref.kazka.back_explosion_1
		}
	],
	// 465
	back_explosion_2: [
		{
			ref: ref.kazka.back_explosion_2
		}
	],
	// 466
	back_explosion_3: [
		{
			ref: ref.kazka.back_explosion_3
		}
	],
	fx_explosion: [
		{
			parts: {
				fx_dust: [
					{
						ref: ref_dino.fx.dust,
						colorOffset: {
							r: 153
						},
						colorMultiplier: {
							r: 0,
							g: 0,
							b: 0
						}
					}
				]
			},
			animation: {
				id: 'kazka_fx_explosion',
				frames: fx_dust_frames
			}
		}
	]
};
