// @ts-check
import { ref } from '../../references.js';

// 1588
export const roll = {
	parts: {
		rb: [
			{
				ref: ref.frutox.roll_body
			}
		],
		rbh1: [
			{
				ref: ref.frutox.roll_body_highlight_1
			}
		],
		rbh2: [
			{
				ref: ref.frutox.roll_body_highlight_2
			}
		],
		rbh3: [
			{
				ref: ref.frutox.roll_body_highlight_3
			}
		]
	},
	animation: {
		id: 'frutox_roll',
		frames: [
			{
				rbh1: { l: 1 },
				rb: { l: 0 }
			},
			{
				rbh2: { l: 1 },
				rb: { l: 0 }
			},
			{
				rbh3: { l: 1 },
				rb: { l: 0 }
			}
		]
	}
};
