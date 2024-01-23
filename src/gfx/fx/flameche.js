import { ref } from '../references.js';

// 836
export let fx_flameche = {
	parts: {
		base: [
			{
				ref: ref.fx.flameche_base
			}
		],
		fx_1: [
			{
				ref: ref.fx.flameche_1
			}
		],
		fx_2: [
			{
				ref: ref.fx.flameche_2
			}
		],
		fx_3: [
			{
				ref: ref.fx.flameche_3
			}
		],
		fx_4: [
			{
				ref: ref.fx.flameche_4
			}
		],
		fx_5: [
			{
				ref: ref.fx.flameche_5
			}
		],
		fx_6: [
			{
				ref: ref.fx.flameche_6
			}
		],
		fx_7: [
			{
				ref: ref.fx.flameche_7
			}
		],
		fx_8: [
			{
				ref: ref.fx.flameche_8
			}
		],
		smoke: [
			{
				ref: ref.fx.flameche_smoke
			}
		]
	},
	animation: {
		id: 'fx_flameche',
		callbacks: {
			24: [['destroy']]
		},
		frames: [
			{
				fx_1: {
					l: 1
				},
				base: {
					ty: 0.05,
					l: 0
				}
			},
			{
				fx_1: {
					l: 1
				},
				base: {
					ty: -1.4,
					a: 0.895,
					d: 1.012,
					or: 28,
					mr: 0.891,
					mg: 0.891,
					mb: 0.891,
					l: 0
				}
			},
			{
				fx_2: {
					l: 1
				},
				base: {
					ty: -2.85,
					a: 0.789,
					d: 1.023,
					or: 57,
					mr: 0.777,
					mg: 0.777,
					mb: 0.777,
					l: 0
				}
			},
			{
				fx_3: {
					l: 1
				},
				base: {
					ty: -4.3,
					a: 0.684,
					d: 1.035,
					or: 85,
					mr: 0.668,
					mg: 0.668,
					mb: 0.668,
					l: 0
				}
			},
			{
				fx_4: {
					l: 1
				},
				base: {
					ty: -5.75,
					a: 0.579,
					d: 1.047,
					or: 113,
					mr: 0.555,
					mg: 0.555,
					mb: 0.555,
					l: 0
				}
			},
			{
				fx_5: {
					l: 1
				},
				base: {
					ty: -7.15,
					a: 0.473,
					d: 1.059,
					or: 142,
					mr: 0.445,
					mg: 0.445,
					mb: 0.445,
					l: 0
				}
			},
			{
				fx_6: {
					l: 2
				},
				smoke: {
					tx: 0.5,
					ty: -12.8,
					a: 0.681,
					d: 0.681,
					alpha: 0.5,
					l: 1
				},
				base: {
					ty: -8.6,
					a: 0.368,
					d: 1.071,
					or: 170,
					mr: 0.332,
					mg: 0.332,
					mb: 0.332,
					l: 0
				}
			},
			{
				fx_7: {
					l: 2
				},
				smoke: {
					tx: 0.5,
					ty: -14.35,
					a: 0.717,
					d: 0.717,
					alpha: 0.469,
					l: 1
				},
				base: {
					ty: -10.05,
					a: 0.263,
					d: 1.082,
					or: 198,
					mr: 0.223,
					mg: 0.223,
					mb: 0.223,
					l: 0
				}
			},
			{
				fx_8: {
					l: 2
				},
				smoke: {
					tx: 0.5,
					ty: -16,
					a: 0.752,
					d: 0.752,
					alpha: 0.438,
					l: 1
				},
				base: {
					ty: -11.5,
					a: 0.158,
					d: 1.094,
					or: 227,
					mr: 0.109,
					mg: 0.109,
					mb: 0.109,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -17.6,
					a: 0.788,
					d: 0.788,
					alpha: 0.406,
					l: 1
				},
				base: {
					ty: -13,
					a: 0.052,
					d: 1.106,
					or: 255,
					mr: 0,
					mg: 0,
					mb: 0,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -19.15,
					a: 0.824,
					d: 0.824,
					alpha: 0.375,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -20.75,
					a: 0.859,
					d: 0.859,
					alpha: 0.344,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -22.35,
					a: 0.895,
					d: 0.895,
					alpha: 0.313,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -23.95,
					a: 0.931,
					d: 0.931,
					alpha: 0.281,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -25.55,
					a: 0.966,
					d: 0.966,
					alpha: 0.25,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -27.15,
					a: 1.002,
					d: 1.002,
					alpha: 0.219,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.45,
					ty: -28.75,
					a: 1.037,
					d: 1.037,
					alpha: 0.188,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -30.35,
					a: 1.073,
					d: 1.073,
					alpha: 0.156,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.45,
					ty: -31.9,
					a: 1.109,
					d: 1.109,
					alpha: 0.125,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -33.5,
					a: 1.144,
					d: 1.144,
					alpha: 0.094,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.45,
					ty: -35.05,
					a: 1.18,
					d: 1.18,
					alpha: 0.063,
					l: 0
				}
			},
			{
				smoke: {
					tx: 0.5,
					ty: -36.7,
					a: 1.216,
					d: 1.216,
					alpha: 0.031,
					l: 0
				}
			},
			{},
			{},
			{}
		]
	}
};
