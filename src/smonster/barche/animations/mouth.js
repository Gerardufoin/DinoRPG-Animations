import { ref } from '../../references.js';

// 753
export const barch_mouth = {
	parts: {
		m1: [
			{
				ref: ref.barch.mouth_back_1
			}
		],
		m2: [
			{
				ref: ref.barch.mouth_back_2
			}
		],
		m3: [
			{
				ref: ref.barch.mouth_back_3
			}
		],
		m4: [
			{
				ref: ref.barch.mouth_back_4
			}
		]
	},
	animation: {
		id: 'barch_mouth',
		frames: [{ m1: {} }, { m2: {} }, { m2: {} }, { m3: {} }, { m3: {} }, { m4: {} }]
	}
};
