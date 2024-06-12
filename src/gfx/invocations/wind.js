// @ts-check
import { ref } from '../references.js';

// GFX 405
export const invoc_wind = {
	parts: {
		b1: [
			// 303
			{
				ref: ref.invocations.djinn.breath,
				resolution: 1
			}
		],
		b2: [
			// 303
			{
				ref: ref.invocations.djinn.breath,
				resolution: 1
			}
		]
	},
	animation: {
		id: 'invoc_wind',
		callbacks: {
			21: [['gotoAndPlay', 15]]
		},
		frames: [
			{
				b1: {
					tx: -430,
					l: 0
				}
			},
			{
				b1: {
					tx: -399.3,
					l: 0
				}
			},
			{
				b1: {
					tx: -368.55,
					l: 0
				}
			},
			{
				b1: {
					tx: -337.85,
					l: 0
				}
			},
			{
				b1: {
					tx: -307.15,
					l: 0
				}
			},
			{
				b1: {
					tx: -276.4,
					l: 0
				}
			},
			{
				b1: {
					tx: -245.7,
					l: 0
				}
			},
			{
				b1: {
					tx: -215,
					l: 0
				}
			},
			{
				b1: {
					tx: -184.3,
					l: 0
				}
			},
			{
				b1: {
					tx: -153.55,
					l: 0
				}
			},
			{
				b1: {
					tx: -122.85,
					l: 0
				}
			},
			{
				b1: {
					tx: -92.15,
					l: 0
				}
			},
			{
				b1: {
					tx: -61.45,
					l: 0
				}
			},
			{
				b1: {
					tx: -30.7,
					l: 0
				}
			},
			{
				b2: {
					l: 1
				},
				b1: {
					tx: -430,
					l: 0
				}
			},
			{
				b2: {
					tx: 61.45,
					l: 1
				},
				b1: {
					tx: -368.55,
					l: 0
				}
			},
			{
				b2: {
					tx: 122.85,
					l: 1
				},
				b1: {
					tx: -307.15,
					l: 0
				}
			},
			{
				b2: {
					tx: 184.3,
					l: 1
				},
				b1: {
					tx: -245.7,
					l: 0
				}
			},
			{
				b2: {
					tx: 245.7,
					l: 1
				},
				b1: {
					tx: -184.3,
					l: 0
				}
			},
			{
				b2: {
					tx: 307.15,
					l: 1
				},
				b1: {
					tx: -122.85,
					l: 0
				}
			},
			{
				b2: {
					tx: 368.55,
					l: 1
				},
				b1: {
					tx: -61.45,
					l: 0
				}
			},
			{
				b2: {
					tx: 430,
					l: 1
				},
				b1: {
					l: 0
				}
			}
		]
	}
};
