// @ts-check
import { ref } from '../references.js';

// GFX 710 partLightHeal
export const fx_light_heal = {
	parts: {
		l: [
			{
				ref: ref.fx.light
			}
		],
		h: [
			{
				ref: ref.fx.healing
			}
		]
	},
	animation: {
		id: 'fx_light_heal',
		callbacks: {
			1: [['gotoAndPlayRandom', 20]],
			23: [['gotoAndPlay', 3]]
		},
		frames: [
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{ l: {} },
			{
				l: {},
				h: {}
			},
			{
				l: {},
				h: {
					a: 0.5,
					d: 0.5
				}
			},
			{ l: {} }
		]
	}
};
