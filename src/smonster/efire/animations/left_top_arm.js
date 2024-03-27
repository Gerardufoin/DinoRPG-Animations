import { ref } from '../../references.js';

// 628
export const efire_left_top_arm = {
	parts: {
		a1: [
			{
				ref: ref.efire.left_top_arm_1
			}
		],
		a2: [
			{
				ref: ref.efire.left_top_arm_2
			}
		],
		a3: [
			{
				ref: ref.efire.left_top_arm_3
			}
		]
	},
	animation: {
		id: 'efire_left_top_arm',
		frames: [{ a1: {} }, { a1: {} }, { a2: {} }, { a2: {} }, { a3: {} }]
	}
};
