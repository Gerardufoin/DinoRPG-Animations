// @ts-check
import { ref } from '../references.js';

// GFX 348
export const invoc_ifrit_fire = {
	parts: {
		f1: [
			{
				ref: ref.invocations.ifrit.fire_1
			}
		],
		f2: [
			{
				ref: ref.invocations.ifrit.fire_2
			}
		],
		f3: [
			{
				ref: ref.invocations.ifrit.fire_3
			}
		],
		f4: [
			{
				ref: ref.invocations.ifrit.fire_4
			}
		]
	},
	animation: {
		id: 'invoc_ifrit_fire',
		frames: [{ f1: {} }, { f1: {} }, { f2: {} }, { f2: {} }, { f3: {} }, { f3: {} }, { f4: {} }, { f4: {} }]
	}
};
