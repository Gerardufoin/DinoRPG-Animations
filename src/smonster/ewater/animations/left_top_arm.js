import { ref } from '../../references.js';

// 564
export const ewater_left_top_arm = {
	parts: {
		a1: [
			{
				ref: ref.ewater.left_top_arm_1
			}
		],
		a2: [
			{
				ref: ref.ewater.left_top_arm_2
			}
		]
	},
	animation: {
		id: 'ewater_left_top_arm',
		frames: [{ a1: {} }, { a1: {} }, { a2: {} }, { a2: {} }, { a2: {} }]
	}
};
