// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_invocations.js';

// GFX 337
export const invoc_vulcan_head = {
	parts: {
		head: [
			// 332
			{
				ref: ref.vulcan.head_shadow,
				transform: {
					tx: 34.9,
					ty: 28.8,
					a: 0.892,
					d: 1.237
				},
				colorOffset: {
					r: 102
				},
				colorMultiplier: {
					r: 0,
					g: 0,
					b: 0
				},
				blur: {
					x: 1,
					y: 1
				},
				alpha: 0.5,
				blend: BLEND_MODES.MULTIPLY
			},
			// 333
			{
				ref: ref.vulcan.head
			},
			// 335
			{
				ref: ref.vulcan.head_highlight,
				transform: {
					tx: 2.5,
					ty: 15.9
				},
				blend: BLEND_MODES.OVERLAY,
				alpha: 0.7
			}
		]
	},
	animation: {
		id: 'invoc_vulcan_head',
		frames: [
			{
				head: {
					tx: 8.85,
					ty: 11.35,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 8.5,
					ty: 13.45,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 8.65,
					ty: 15.1,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 8.9,
					ty: 16.2,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 9.15,
					ty: 16.9,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 9.2,
					ty: 17.1,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 11.85,
					ty: 19.1,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 14.2,
					ty: 17.6,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 15,
					ty: 15.5,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 15.15,
					ty: 13.9,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 15.1,
					ty: 12.9,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 15,
					ty: 12.6,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 14.1,
					ty: 10,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 12.45,
					ty: 8.55,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 10.7,
					ty: 8.75,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 9.75,
					ty: 9.6,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 9.35,
					ty: 10.25,
					a: 0.84,
					d: 0.84
				}
			},
			{
				head: {
					tx: 9.25,
					ty: 10.45,
					a: 0.84,
					d: 0.84
				}
			}
		]
	}
};
