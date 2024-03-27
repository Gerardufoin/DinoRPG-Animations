import { ref } from '../../references.js';

// 581
export const ewater_eye = {
	parts: {
		e1: [
			{
				ref: ref.ewater.eye_1
			}
		],
		e2: [
			{
				ref: ref.ewater.eye_2
			}
		],
		e3: [
			{
				ref: ref.ewater.eye_3
			}
		]
	},
	animation: {
		id: 'ewater_eye',
		frames: [{ e1: {} }, { e1: {} }, { e2: {} }, { e2: {} }, { e3: {} }, { e3: {} }]
	}
};
