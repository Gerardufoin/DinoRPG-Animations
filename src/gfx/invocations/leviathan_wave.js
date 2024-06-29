// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { ref } from '../references_invocations.js';
import { invoc_leviathan_water } from './leviathan_water.js';
import { invoc_leviathan_wave_top } from './leviathan_wave_top.js';
import { invoc_leviathan_foam } from './leviathan_foam.js';

// GFX 563
export const invoc_leviathan_wave = {
	parts: {
		water: [invoc_leviathan_water],
		shade: [
			{
				ref: ref.leviathan.wave_shade,
				blend: BLEND_MODES.MULTIPLY,
				transform: {
					tx: 1.35,
					ty: 35.45,
					a: 1,
					d: 1.676
				}
			}
		],
		top: [
			{
				...invoc_leviathan_wave_top,
				transform: {
					tx: 7.8,
					ty: -15.45
				}
			}
		],
		foam1: [
			{
				...invoc_leviathan_foam,
				transform: {
					tx: -10.35,
					ty: 53.35,
					a: 0.521,
					d: 0.521
				}
			}
		],
		foam2: [
			{
				...invoc_leviathan_foam,
				transform: {
					tx: 209.65,
					ty: 53.35,
					a: 0.521,
					d: 0.521
				}
			}
		]
	},
	animation: {
		id: 'invoc_leviathan_wave',
		expectedScaling: {
			water: 1
		},
		frames: [
			{
				water: {
					l: 0
				},
				shade: {
					l: 1
				},
				top: {
					l: 2
				},
				foam1: {
					l: 3
				},
				foam2: {
					l: 4
				}
			}
		]
	}
};
