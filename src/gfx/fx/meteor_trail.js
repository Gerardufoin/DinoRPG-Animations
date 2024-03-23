import { ref } from '../references.js';

// GFX 806
export let fx_meteor_trail = {
	parts: {
		mt1: [{ ref: ref.fx.meteor_trail_1 }],
		mt2: [{ ref: ref.fx.meteor_trail_2 }],
		mt3: [{ ref: ref.fx.meteor_trail_3 }]
	},
	animation: {
		id: 'fx_meteor_trail',
		frames: [{ mt1: {} }, { mt1: {} }, { mt2: {} }, { mt2: {} }, { mt3: {} }, { mt3: {} }]
	}
};
