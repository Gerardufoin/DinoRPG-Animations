// @ts-check
import { ref } from '../references.js';

// GFX 892
export const fx_explosion = {
	parts: {
		e1: [
			{
				ref: ref.fx.explo_1
			}
		],
		e2: [
			{
				ref: ref.fx.explo_2
			}
		],
		e3: [
			{
				ref: ref.fx.explo_3
			}
		],
		e4: [
			{
				ref: ref.fx.explo_4
			}
		],
		e5: [
			{
				ref: ref.fx.explo_5
			}
		],
		e6: [
			{
				ref: ref.fx.explo_6
			}
		]
	},
	animation: {
		id: 'fx_explosion',
		callbacks: {
			10: [['stop']]
		},
		frames: [
			{
				e1: {}
			},
			{
				e2: {}
			},
			{
				e3: {}
			},
			{
				e3: {}
			},
			{
				e4: {}
			},
			{
				e4: {}
			},
			{
				e5: {}
			},
			{
				e5: {}
			},
			{
				e6: {}
			},
			{
				e6: {}
			},
			{}
		]
	}
};
