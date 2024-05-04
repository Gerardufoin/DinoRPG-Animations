// @ts-check
import { ref } from '../references.js';

// GFX 328 _receptacle
export const fx_receptacle = {
	parts: {
		r: [
			{
				partIdx: 0,
				frames: [0, 1, 2, 3, 4],
				parts: [
					{
						ref: ref.fx.receptacle.fire
					},
					{
						ref: ref.fx.receptacle.wood
					},
					{
						ref: ref.fx.receptacle.water
					},
					{
						ref: ref.fx.receptacle.thunder
					},
					{
						ref: ref.fx.receptacle.air
					}
				]
			}
		]
	},
	animation: {
		id: 'fx_receptacle',
		callbacks: {
			26: [['stop']]
		},
		expectedScaling: {
			r: 1
		},
		frames: [
			{
				r: {
					a: 0.163,
					d: 0.163,
					acb: 0,
					acc: 0,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.254,
					d: 0.254,
					acb: 26,
					acc: 25,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.319,
					d: 0.319,
					acb: 45,
					acc: 42,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.358,
					d: 0.358,
					acb: 56,
					acc: 52,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.372,
					d: 0.372,
					acb: 60,
					acc: 56,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					acb: 0,
					acc: 0,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 1,
					d: 1,
					alpha: 0.996,
					acb: 0,
					acc: 0,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.999,
					d: 0.999,
					alpha: 0.992,
					acb: 0,
					acc: 0,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.997,
					d: 0.997,
					alpha: 0.98,
					acb: 0,
					acc: 1,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.994,
					d: 0.994,
					alpha: 0.965,
					acb: 0,
					acc: 3,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.991,
					d: 0.991,
					alpha: 0.941,
					acb: 0,
					acc: 5,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.987,
					d: 0.987,
					alpha: 0.918,
					acb: 0,
					acc: 8,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.982,
					d: 0.982,
					alpha: 0.891,
					acb: 0,
					acc: 10,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.976,
					d: 0.976,
					alpha: 0.855,
					acb: 0,
					acc: 12,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.97,
					d: 0.97,
					alpha: 0.816,
					acb: 0,
					acc: 15,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.963,
					d: 0.963,
					alpha: 0.773,
					acb: 0,
					acc: 20,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.955,
					d: 0.955,
					alpha: 0.727,
					acb: 0,
					acc: 24,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.947,
					d: 0.947,
					alpha: 0.672,
					acb: 0,
					acc: 28,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.938,
					d: 0.938,
					alpha: 0.617,
					acb: 0,
					acc: 33,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.928,
					d: 0.928,
					alpha: 0.555,
					acb: 0,
					acc: 38,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.917,
					d: 0.917,
					alpha: 0.488,
					acb: 0,
					acc: 45,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.906,
					d: 0.906,
					alpha: 0.418,
					acb: 0,
					acc: 50,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.893,
					d: 0.893,
					alpha: 0.344,
					acb: 0,
					acc: 58,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.881,
					d: 0.881,
					alpha: 0.266,
					acb: 0,
					acc: 63,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.867,
					d: 0.867,
					alpha: 0.18,
					acb: 0,
					acc: 71,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.852,
					d: 0.852,
					alpha: 0.094,
					acb: 0,
					acc: 78,
					acs: 0,
					ach: 0,
					l: 0
				}
			},
			{
				r: {
					a: 0.837,
					d: 0.837,
					alpha: 0,
					acb: 0,
					acc: 87,
					acs: 0,
					ach: 0,
					l: 0
				}
			}
		]
	}
};
