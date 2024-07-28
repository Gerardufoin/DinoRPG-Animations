import { ref } from '../../references.js';

// 2331
export const piglou_attack_burst = {
	parts: {
		b1: [
			{
				ref: ref.piglou.attack_burst_1
			}
		],
		b2: [
			{
				ref: ref.piglou.attack_burst_2
			}
		],
		b3: [
			{
				ref: ref.piglou.attack_burst_3
			}
		],
		b4: [
			{
				ref: ref.piglou.attack_burst_4
			}
		],
		b5: [
			{
				ref: ref.piglou.attack_burst_5
			}
		]
	},
	animation: {
		id: 'piglou_attack_burst',
		frames: [{ b1: {} }, { b2: {} }, { b3: {} }, { b4: {} }, { b5: {} }, {}]
	}
};
