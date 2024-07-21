// @ts-check
import { ref } from '../../references.js';

// 1632
export const leaves = {
	parts: {
		leaves: [
			{
				ref: ref.ffrutx.leaves
			}
		],
		smear: [
			{
				ref: ref.ffrutx.leaves_smear
			}
		]
	},
	animation: {
		id: 'ffrutx_leaves',
		frames: [
			{
				leaves: {
					tx: 0.05,
					ty: 0.05,
					l: 1
				},
				smear: {
					l: 0
				}
			},
			{
				leaves: {
					tx: 0.15,
					ty: -0.05,
					a: -0.967,
					b: -0.251,
					c: 0.251,
					d: -0.967,
					l: 1
				},
				smear: {
					l: 0
				}
			},
			{
				leaves: {
					tx: 0.2,
					a: -0.259,
					b: -0.964,
					c: 0.964,
					d: -0.259,
					l: 1
				},
				smear: {
					l: 0
				}
			},
			{
				leaves: {
					tx: 0.1,
					a: 0.079,
					b: 0.994,
					c: -0.994,
					d: 0.079,
					l: 1
				},
				smear: {
					l: 0
				}
			}
		]
	}
};
