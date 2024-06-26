// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 974 fxChargeImpact
export const fx_charge_impact = {
	parts: {
		i1: [
			{
				ref: ref.fx.charge_impact,
				blend: BLEND_MODES.ADD
			}
		],
		i2: [
			{
				ref: ref.fx.charge_impact,
				blend: BLEND_MODES.ADD
			}
		],
		i3: [
			{
				ref: ref.fx.charge_impact,
				blend: BLEND_MODES.ADD
			}
		],
		i4: [
			{
				ref: ref.fx.charge_impact,
				blend: BLEND_MODES.ADD
			}
		]
	},
	animation: {
		id: 'fx_charge_impact',
		callbacks: {
			17: [['destroy']]
		},
		frames: [
			{
				i1: {
					a: 0.304,
					d: 1.27,
					l: 3
				},
				i2: {
					a: 0.182,
					d: 0.757,
					l: 2
				},
				i3: {
					a: 0.222,
					d: 0.925,
					l: 1
				},
				i4: {
					a: 0.304,
					d: 1.27,
					l: 0
				}
			},
			{
				i1: {
					a: 0.333,
					d: 1.39,
					alpha: 0.832,
					l: 3
				},
				i2: {
					tx: 0.95,
					a: 0.182,
					d: 0.757,
					alpha: 0.891,
					l: 2
				},
				i3: {
					tx: 0.45,
					a: 0.223,
					d: 0.931,
					alpha: 0.91,
					l: 1
				},
				i4: {
					tx: 0.15,
					a: 0.306,
					d: 1.278,
					alpha: 0.938,
					l: 0
				}
			},
			{
				i1: {
					a: 0.362,
					d: 1.51,
					alpha: 0.668,
					l: 3
				},
				i2: {
					tx: 1.9,
					a: 0.182,
					d: 0.757,
					alpha: 0.777,
					l: 2
				},
				i3: {
					tx: 0.9,
					a: 0.225,
					d: 0.937,
					alpha: 0.816,
					l: 1
				},
				i4: {
					tx: 0.25,
					a: 0.308,
					d: 1.285,
					alpha: 0.875,
					l: 0
				}
			},
			{
				i1: {
					a: 0.391,
					d: 1.63,
					alpha: 0.5,
					l: 3
				},
				i2: {
					tx: 2.85,
					a: 0.182,
					d: 0.757,
					alpha: 0.668,
					l: 2
				},
				i3: {
					tx: 1.35,
					a: 0.226,
					d: 0.943,
					alpha: 0.727,
					l: 1
				},
				i4: {
					tx: 0.4,
					a: 0.31,
					d: 1.293,
					alpha: 0.813,
					l: 0
				}
			},
			{
				i1: {
					a: 0.419,
					d: 1.749,
					alpha: 0.332,
					l: 3
				},
				i2: {
					tx: 3.8,
					a: 0.182,
					d: 0.757,
					alpha: 0.555,
					l: 2
				},
				i3: {
					tx: 1.8,
					a: 0.227,
					d: 0.948,
					alpha: 0.637,
					l: 1
				},
				i4: {
					tx: 0.5,
					a: 0.312,
					d: 1.301,
					alpha: 0.75,
					l: 0
				}
			},
			{
				i1: {
					a: 0.448,
					d: 1.869,
					alpha: 0.168,
					l: 3
				},
				i2: {
					tx: 4.7,
					a: 0.182,
					d: 0.757,
					alpha: 0.445,
					l: 2
				},
				i3: {
					tx: 2.25,
					a: 0.229,
					d: 0.954,
					alpha: 0.547,
					l: 1
				},
				i4: {
					tx: 0.65,
					a: 0.314,
					d: 1.308,
					alpha: 0.688,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 5.65,
					a: 0.182,
					d: 0.757,
					alpha: 0.332,
					l: 2
				},
				i3: {
					tx: 2.75,
					a: 0.23,
					d: 0.96,
					alpha: 0.453,
					l: 1
				},
				i4: {
					tx: 0.75,
					a: 0.315,
					d: 1.316,
					alpha: 0.625,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 6.6,
					a: 0.182,
					d: 0.757,
					alpha: 0.223,
					l: 2
				},
				i3: {
					tx: 3.2,
					a: 0.231,
					d: 0.966,
					alpha: 0.363,
					l: 1
				},
				i4: {
					tx: 0.9,
					a: 0.317,
					d: 1.324,
					alpha: 0.563,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 7.55,
					a: 0.182,
					d: 0.757,
					alpha: 0.109,
					l: 2
				},
				i3: {
					tx: 3.65,
					a: 0.233,
					d: 0.972,
					alpha: 0.273,
					l: 1
				},
				i4: {
					tx: 1,
					a: 0.319,
					d: 1.332,
					alpha: 0.5,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 4.1,
					a: 0.234,
					d: 0.977,
					alpha: 0.184,
					l: 1
				},
				i4: {
					tx: 1.15,
					a: 0.321,
					d: 1.339,
					alpha: 0.438,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 4.55,
					a: 0.236,
					d: 0.983,
					alpha: 0.09,
					l: 1
				},
				i4: {
					tx: 1.25,
					a: 0.323,
					d: 1.347,
					alpha: 0.375,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 1
				},
				i4: {
					tx: 1.4,
					a: 0.325,
					d: 1.355,
					alpha: 0.313,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 1
				},
				i4: {
					tx: 1.5,
					a: 0.326,
					d: 1.362,
					alpha: 0.25,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 1
				},
				i4: {
					tx: 1.65,
					a: 0.328,
					d: 1.37,
					alpha: 0.188,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 1
				},
				i4: {
					tx: 1.75,
					a: 0.33,
					d: 1.378,
					alpha: 0.125,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 1
				},
				i4: {
					tx: 1.9,
					a: 0.332,
					d: 1.385,
					alpha: 0.063,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 3
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 2
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 1
				},
				i4: {
					tx: 2,
					a: 0.334,
					d: 1.393,
					alpha: 0,
					l: 0
				}
			},
			{
				i1: {
					a: 0.477,
					d: 1.989,
					alpha: 0,
					l: 2
				},
				i2: {
					tx: 8.5,
					a: 0.182,
					d: 0.757,
					alpha: 0,
					l: 1
				},
				i3: {
					tx: 5,
					a: 0.237,
					d: 0.989,
					alpha: 0,
					l: 0
				}
			}
		]
	}
};
