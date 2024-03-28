// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 716 partAura2
export const fx_aura_light = {
	parts: {
		a: [
			{
				ref: ref.fx.light,
				blend: BLEND_MODES.ADD
			}
		]
	},
	animation: {
		id: 'fx_aura_light',
		callbacks: {
			4: [['stop']]
		},
		frames: [
			{
				a: {
					a: 0.231,
					d: 0.231
				}
			},
			{
				a: {
					a: 0.496,
					d: 0.496
				}
			},
			{
				a: {
					a: 0.712,
					d: 0.712
				}
			},
			{
				a: {
					a: 0.88,
					d: 0.88
				}
			},
			{
				a: {}
			}
		]
	}
};
