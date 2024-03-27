import { ref } from '../../references.js';

// 568
export const ewater_left_bottom_arm = {
	parts: {
		a1: [
			{
				ref: ref.ewater.left_bottom_arm_1
			}
		],
		a2: [
			{
				ref: ref.ewater.left_bottom_arm_2
			}
		],
		a3: [
			{
				ref: ref.ewater.left_bottom_arm_3
			}
		]
	},
	animation: {
		id: 'ewater_left_bottom_arm',
		frames: [{ a1: {} }, { a1: {} }, { a2: {} }, { a2: {} }, { a3: {} }]
	}
};
