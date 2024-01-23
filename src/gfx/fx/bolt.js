import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// 939
export let fx_bolt = {
	parts: {
		fx_bolt_1: [
			{
				ref: ref.fx.mcBolt_1
			}
		],
		fx_bolt_2: [
			{
				ref: ref.fx.mcBolt_2
			}
		],
		fx_bolt_3: [
			{
				ref: ref.fx.mcBolt_3
			}
		],
		fx_bolt_4: [
			{
				ref: ref.fx.mcBolt_4
			}
		],
		fx_bolt_5: [
			{
				ref: ref.fx.mcBolt_5
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
