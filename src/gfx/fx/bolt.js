import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 939
export let fx_bolt = {
	parts: {
		fx_bolt_1: [
			{
				ref: ref.fx.bolt_1,
				blend: [BLEND_MODES.ADD]
			}
		],
		fx_bolt_2: [
			{
				ref: ref.fx.bolt_2,
				blend: [BLEND_MODES.ADD]
			}
		],
		fx_bolt_3: [
			{
				ref: ref.fx.bolt_3,
				blend: [BLEND_MODES.ADD]
			}
		],
		fx_bolt_4: [
			{
				ref: ref.fx.bolt_4,
				blend: [BLEND_MODES.ADD]
			}
		],
		fx_bolt_5: [
			{
				ref: ref.fx.bolt_5,
				blend: [BLEND_MODES.ADD]
			}
		]
	},
	animation: {
		id: 'fx_bolt',
		callbacks: {
			5: [['destroy']]
		},
		frames: [
			{
				fx_bolt_1: {}
			},
			{
				fx_bolt_2: {}
			},
			{
				fx_bolt_3: {}
			},
			{
				fx_bolt_4: {}
			},
			{
				fx_bolt_5: {}
			},
			{}
		]
	}
};
