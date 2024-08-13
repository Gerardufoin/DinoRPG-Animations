// @ts-check
import { ref } from '../../references.js';

const eye_parts = {
	f1: [
		{
			ref: ref.rhubar.eye_flame_1
		}
	],
	f2: [
		{
			ref: ref.rhubar.eye_flame_2
		}
	],
	f3: [
		{
			ref: ref.rhubar.eye_flame_3
		}
	],
	f4: [
		{
			ref: ref.rhubar.eye_flame_4
		}
	],
	f5: [
		{
			ref: ref.rhubar.eye_flame_5
		}
	],
	f6: [
		{
			ref: ref.rhubar.eye_flame_6
		}
	]
};

// 3803
export const rhubar_right_eye_flame = {
	parts: eye_parts,
	animation: {
		id: 'rhubar_right_eye_flame',
		frames: [
			{ f1: {} },
			{ f1: {} },
			{ f1: {} },
			{ f2: {} },
			{ f2: {} },
			{ f2: {} },
			{ f3: {} },
			{ f3: {} },
			{ f3: {} },
			{ f4: {} },
			{ f4: {} },
			{ f4: {} },
			{ f5: {} },
			{ f5: {} },
			{ f5: {} },
			{ f6: {} },
			{ f6: {} },
			{ f6: {} }
		]
	}
};

// 3823
export const rhubar_left_eye_flame = {
	parts: eye_parts,
	animation: {
		id: 'rhubar_left_eye_flame',
		frames: [
			{ f5: {} },
			{ f5: {} },
			{ f5: {} },
			{ f6: {} },
			{ f6: {} },
			{ f6: {} },
			{ f1: {} },
			{ f1: {} },
			{ f1: {} },
			{ f2: {} },
			{ f2: {} },
			{ f2: {} },
			{ f3: {} },
			{ f3: {} },
			{ f3: {} },
			{ f4: {} },
			{ f4: {} },
			{ f4: {} }
		]
	}
};
