// @ts-check
import { ref } from '../references_invocations.js';

// GFX 540
export const invoc_totem_laser = {
	parts: {
		l: [
			{
				ref: ref.totem.laser,
				glow: {
					distance: 5,
					color: 0xffcc00,
					quality: 0.5,
					strength: 2
				}
			}
		]
	},
	animation: {
		id: 'invoc_totem_laser',
		frames: [
			{
				l: {}
			},
			{
				l: {
					tx: -1.75,
					a: 1.28,
					d: 1
				}
			},
			{
				l: {
					tx: -3.5,
					a: 1.56,
					d: 1
				}
			},
			{
				l: {
					tx: -5.25,
					a: 1.84,
					d: 1
				}
			},
			{
				l: {
					tx: -3.5,
					a: 1.56,
					d: 1
				}
			},
			{
				l: {
					tx: -1.75,
					a: 1.28,
					d: 1
				}
			},
			{
				l: {}
			}
		]
	}
};
