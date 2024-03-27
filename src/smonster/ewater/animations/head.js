import { ref } from '../../references.js';

// 577
export const ewater_head = {
	parts: {
		h1: [
			{
				ref: ref.ewater.head_1
			},
			{
				ref: ref.ewater.head_highlight_1
			}
		],
		h2: [
			{
				ref: ref.ewater.head_2
			},
			{
				ref: ref.ewater.head_highlight_2
			}
		],
		h3: [
			{
				ref: ref.ewater.head_3
			},
			{
				ref: ref.ewater.head_highlight_3
			}
		],
		h4: [
			{
				ref: ref.ewater.head_4
			},
			{
				ref: ref.ewater.head_highlight_4
			}
		]
	},
	animation: {
		id: 'ewater_head',
		frames: [{ h1: {} }, { h1: {} }, { h2: {} }, { h2: {} }, { h3: {} }, { h3: {} }, { h4: {} }, { h4: {} }]
	}
};
