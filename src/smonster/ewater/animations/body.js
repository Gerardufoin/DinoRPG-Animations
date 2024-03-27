import { ref } from '../../references.js';

// 561
export const ewater_body = {
	parts: {
		b1: [
			{
				ref: ref.ewater.body_1
			},
			{
				ref: ref.ewater.body_highlight_1
			}
		],
		b2: [
			{
				ref: ref.ewater.body_2
			},
			{
				ref: ref.ewater.body_highlight_2
			}
		],
		b3: [
			{
				ref: ref.ewater.body_3
			},
			{
				ref: ref.ewater.body_highlight_3
			}
		]
	},
	animation: {
		id: 'ewater_body',
		frames: [{ b1: {} }, { b1: {} }, { b2: {} }, { b2: {} }, { b3: {} }, { b3: {} }]
	}
};
