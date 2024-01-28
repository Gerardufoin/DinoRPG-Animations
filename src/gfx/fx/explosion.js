import { ref } from '../references.js';

// 892
export let fx_explosion = {
	parts: {
		e_1: [
			{
				ref: ref.fx.explo_1
			}
		],
		e_2: [
			{
				ref: ref.fx.explo_2
			}
		],
		e_3: [
			{
				ref: ref.fx.explo_3
			}
		],
		e_4: [
			{
				ref: ref.fx.explo_4
			}
		],
		e_5: [
			{
				ref: ref.fx.explo_5
			}
		],
		e_6: [
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
				e_1: {}
			},
			{
				e_2: {}
			},
			{
				e_3: {}
			},
			{
				e_3: {}
			},
			{
				e_4: {}
			},
			{
				e_4: {}
			},
			{
				e_5: {}
			},
			{
				e_5: {}
			},
			{
				e_6: {}
			},
			{
				e_6: {}
			},
			{}
		]
	}
};
