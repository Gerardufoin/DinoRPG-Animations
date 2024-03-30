// @ts-check
import { ref } from '../../references.js';

// 753
export const barche_mouth = {
	parts: {
		m1: [
			{
				ref: ref.barche.mouth_back_1
			}
		],
		m2: [
			{
				ref: ref.barche.mouth_back_2
			}
		],
		m3: [
			{
				ref: ref.barche.mouth_back_3
			}
		],
		m4: [
			{
				ref: ref.barche.mouth_back_4
			}
		]
	},
	animation: {
		id: 'barche_mouth',
		frames: [{ m1: {} }, { m2: {} }, { m2: {} }, { m3: {} }, { m3: {} }, { m4: {} }]
	}
};
