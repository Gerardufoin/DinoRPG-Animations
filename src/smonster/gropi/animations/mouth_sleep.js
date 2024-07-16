// @ts-check
import { ref } from '../../references.js';

// 1449
export const mouth_sleep = {
	parts: {
		m1: [
			{
				ref: ref.gropi.mouth_sleep_1,
				colorOffset: {
					r: -57,
					g: -72,
					b: -97
				}
			}
		],
		m2: [
			{
				ref: ref.gropi.mouth_sleep_2,
				colorOffset: {
					r: -57,
					g: -72,
					b: -97
				}
			}
		]
	},
	animation: {
		id: 'gropi_mouth_sleep',
		frames: [{ m1: {} }, { m1: {} }, { m2: {} }, { m2: {} }]
	}
};
