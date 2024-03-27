import { ref } from '../../references.js';

// 632
export const efire_left_bottom_arm = {
	parts: {
		a1: [
			{
				ref: ref.efire.left_bottom_arm_1
			}
		],
		a2: [
			{
				ref: ref.efire.left_bottom_arm_2
			}
		],
		a3: [
			{
				ref: ref.efire.left_bottom_arm_3
			}
		]
	},
	animation: {
		id: 'efire_left_bottom_arm',
		frames: [{ a1: {} }, { a1: {} }, { a2: {} }, { a2: {} }, { a3: {} }, { a3: {} }]
	}
};
