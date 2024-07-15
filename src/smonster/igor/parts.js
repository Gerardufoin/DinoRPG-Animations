// @ts-check
import { ref } from '../references.js';
import { lights } from './animations/lights.js';
import { red_light } from './animations/red_light.js';
import { wind } from './animations/wind.js';

export const parts = {
	// 1351
	wind: [wind],
	// 1361_sub
	igor: [
		// 1355
		{
			...lights,
			transform: {
				tx: -4.45,
				ty: -26.1
			}
		},
		// 1356
		{
			ref: ref.igor.igor
		},
		// 1360
		{
			...red_light,
			transform: {
				tx: -5.15,
				ty: -63.2
			}
		}
	]
};
