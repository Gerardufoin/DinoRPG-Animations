// @ts-check
import { ref } from '../references.js';

// GFX 751
export const fx_tornado = {
	parts: {
		t1: [{ ref: ref.fx.air.tornado_1 }],
		t2: [{ ref: ref.fx.air.tornado_2 }],
		t3: [{ ref: ref.fx.air.tornado_3 }],
		t4: [{ ref: ref.fx.air.tornado_4 }],
		t5: [{ ref: ref.fx.air.tornado_5 }],
		t6: [{ ref: ref.fx.air.tornado_6 }],
		t7: [{ ref: ref.fx.air.tornado_7 }],
		t8: [{ ref: ref.fx.air.tornado_8 }]
	},
	animation: {
		id: 'fx_tornado',
		frames: [{ t1: {} }, { t2: {} }, { t3: {} }, { t4: {} }, { t5: {} }, { t6: {} }, { t7: {} }, { t8: {} }]
	}
};
