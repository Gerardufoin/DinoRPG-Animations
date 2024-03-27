import { ref } from '../../references.js';

// 613
export const efire_right_top_arm = {
	parts: {
		a1: [
			{
				ref: ref.efire.right_top_arm_1
			}
		],
		a2: [
			{
				ref: ref.efire.right_top_arm_2
			}
		],
		a3: [
			{
				ref: ref.efire.right_top_arm_3
			}
		]
	},
	animation: {
		id: 'efire_right_top_arm',
		frames: [{ a1: {} }, { a1: {} }, { a2: {} }, { a2: {} }, { a3: {} }]
	}
};
