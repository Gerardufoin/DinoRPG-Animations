// @ts-check
import { ref } from '../references.js';

// GFX 971 partAura
export const fx_aura = {
	parts: {
		aura: [
			{
				partIdx: 0,
				frames: [0, 1],
				parts: [
					{
						ref: ref.fx.aura.spirals
					},
					{
						ref: ref.fx.aura.lines
					}
				]
			}
		]
	},
	animation: {
		id: 'fx_aura',
		callbacks: {
			5: [['stop']]
		},
		frames: [
			{
				aura: {
					tx: -0.15,
					a: 0.701,
					d: 0.701,
					alpha: 0,
					l: 0
				}
			},
			{
				aura: {
					tx: -0.15,
					a: 0.789,
					d: 0.789,
					alpha: 0.297,
					l: 0
				}
			},
			{
				aura: {
					tx: -0.2,
					a: 0.864,
					d: 0.864,
					alpha: 0.543,
					l: 0
				}
			},
			{
				aura: {
					tx: -0.15,
					a: 0.923,
					d: 0.923,
					alpha: 0.742,
					l: 0
				}
			},
			{
				aura: {
					tx: -0.15,
					a: 0.969,
					d: 0.969,
					alpha: 0.895,
					l: 0
				}
			},
			{
				aura: {
					tx: -0.15,
					l: 0
				}
			}
		]
	}
};
