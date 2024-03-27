import { ref } from '../../references.js';

// 606
export const efire_right_bottom_arm = {
	parts: {
		a1: [
			{
				ref: ref.efire.right_bottom_arm_1
			}
		],
		a2: [
			{
				ref: ref.efire.right_bottom_arm_2
			}
		],
		a3: [
			{
				ref: ref.efire.right_bottom_arm_3
			}
		]
	},
	animation: {
		id: 'efire_right_bottom_arm',
		frames: [{ a1: {} }, { a1: {} }, { a2: {} }, { a2: {} }, { a3: {} }, { a3: {} }]
	}
};
