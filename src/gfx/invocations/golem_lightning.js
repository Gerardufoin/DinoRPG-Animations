// @ts-check
import { ref } from '../references.js';

// GFX 394
export const invoc_golem_lightning = {
	parts: {
		l1: [
			{
				ref: ref.invocations.golem.lightning_1
			}
		],
		l2: [
			{
				ref: ref.invocations.golem.lightning_2
			}
		],
		l3: [
			{
				ref: ref.invocations.golem.lightning_3
			}
		],
		n1: [
			{
				ref: ref.invocations.golem.lightning_node_1
			}
		],
		n2: [
			{
				ref: ref.invocations.golem.lightning_node_2
			}
		]
	},
	animation: {
		id: 'invoc_golem_lightning',
		frames: [
			{
				l1: { l: 0 },
				n1: { l: 1 }
			},
			{
				l1: { l: 0 }
			},
			{
				l2: { l: 0 },
				n2: { l: 1 }
			},
			{
				l2: { l: 0 }
			},
			{
				l3: { l: 0 }
			},
			{
				l3: { l: 0 }
			}
		]
	}
};
