import { ref } from '../references.js';

// GFX 57
export let fx_braise_ploc = {
	parts: {
		p1: [{ ref: ref.fx.braise_ploc_1 }],
		p2: [{ ref: ref.fx.braise_ploc_2 }],
		p3: [{ ref: ref.fx.braise_ploc_3 }],
		p4: [{ ref: ref.fx.braise_ploc_4 }],
		p5: [{ ref: ref.fx.braise_ploc_5 }],
		p6: [{ ref: ref.fx.braise_ploc_6 }],
		p7: [{ ref: ref.fx.braise_ploc_7 }],
		p8: [{ ref: ref.fx.braise_ploc_8 }],
		p9: [{ ref: ref.fx.braise_ploc_9 }],
		p10: [{ ref: ref.fx.braise_ploc_10 }],
		p11: [{ ref: ref.fx.braise_ploc_11 }],
		p12: [{ ref: ref.fx.braise_ploc_12 }],
		p13: [{ ref: ref.fx.braise_ploc_13 }],
		p14: [{ ref: ref.fx.braise_ploc_14 }],
		p15: [{ ref: ref.fx.braise_ploc_15 }],
		p16: [{ ref: ref.fx.braise_ploc_16 }]
	},
	animation: {
		id: 'fx_braise_ploc',
		callbacks: {
			17: [['stop']]
		},
		frames: [
			{ p1: {} },
			{ p2: {} },
			{ p3: {} },
			{ p4: {} },
			{ p5: {} },
			{ p6: {} },
			{ p7: {} },
			{ p8: {} },
			{ p9: {} },
			{ p10: {} },
			{ p11: {} },
			{ p12: {} },
			{ p13: {} },
			{ p14: {} },
			{ p15: {} },
			{ p16: {} },
			{
				p16: {
					transform: {
						tx: -8.8,
						ty: -0.4,
						a: 1.25,
						d: 1.364
					}
				}
			},
			{}
		]
	}
};
