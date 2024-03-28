// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references.js';

// GFX 230
export const fx_bubble_break = {
	parts: {
		base: [
			{
				ref: ref.fx.bubble.base,
				blend: BLEND_MODES.ADD
			}
		],
		bb1: [
			{
				ref: ref.fx.bubble.break_1,
				blend: BLEND_MODES.ADD
			}
		],
		bb2: [
			{
				ref: ref.fx.bubble.break_2,
				blend: BLEND_MODES.ADD
			}
		],
		bb3: [
			{
				ref: ref.fx.bubble.break_3,
				blend: BLEND_MODES.ADD
			}
		],
		bb4: [
			{
				ref: ref.fx.bubble.break_4,
				blend: BLEND_MODES.ADD
			}
		],
		bb5: [
			{
				ref: ref.fx.bubble.break_5,
				blend: BLEND_MODES.ADD
			}
		],
		bb6: [
			{
				ref: ref.fx.bubble.break_6,
				blend: BLEND_MODES.ADD
			}
		],
		bb7: [
			{
				ref: ref.fx.bubble.break_7,
				blend: BLEND_MODES.ADD
			}
		]
	},
	animation: {
		id: 'fx_bubble_break',
		callbacks: {
			12: [['stop']]
		},
		frames: [
			{
				base: {
					transform: {
						a: 1.055,
						d: 1.055
					}
				}
			},
			{ bb1: {} },
			{ bb2: {} },
			{ bb3: {} },
			{ bb4: {} },
			{ bb4: {} },
			{ bb5: {} },
			{ bb5: {} },
			{ bb6: {} },
			{ bb6: {} },
			{ bb7: {} },
			{ bb7: {} },
			{}
		]
	}
};
