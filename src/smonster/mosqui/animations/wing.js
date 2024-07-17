// @ts-check
import { ref } from '../../references.js';

// 55
export const wing = {
	parts: {
		w1: [
			{
				ref: ref.mosqui.wing_1
			}
		],
		w2: [
			{
				ref: ref.mosqui.wing_2
			}
		],
		w3: [
			{
				ref: ref.mosqui.wing_3
			}
		]
	},
	animation: {
		id: 'mosqui_wing',
		frames: [{ w1: {} }, { w2: {} }, { w3: {} }]
	}
};
