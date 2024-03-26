import { ref } from '../../references.js';

// 414
export const anguil_whisker = {
	parts: {
		w1: [
			{
				ref: ref.anguil.whisker_1
			}
		],
		w2: [
			{
				ref: ref.anguil.whisker_2
			}
		],
		w3: [
			{
				ref: ref.anguil.whisker_3
			}
		],
		w4: [
			{
				ref: ref.anguil.whisker_4
			}
		],
		w5: [
			{
				ref: ref.anguil.whisker_5
			}
		],
		w6: [
			{
				ref: ref.anguil.whisker_6
			}
		]
	},
	glow: {
		distance: 8,
		color: 0xffffcc,
		quality: 0.5,
		strength: 3
	},
	animation: {
		id: 'anguil_whisker',
		frames: [
			{ w1: {} },
			{ w1: {} },
			{ w2: {} },
			{ w2: {} },
			{ w3: {} },
			{ w3: {} },
			{ w4: {} },
			{ w4: {} },
			{ w5: {} },
			{ w5: {} },
			{ w6: {} },
			{ w6: {} }
		]
	}
};
