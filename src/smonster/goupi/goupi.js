// @ts-check
import { BLEND_MODES } from 'pixi.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../dino/references_small.js';
import { ref } from '../references.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';

// Symbol 80
const goupi_base = {
	// Symbol 82
	width: 0.666,
	height: 0.573,
	glow: {
		distance: 1.3,
		color: 0x660000,
		quality: 1,
		strength: 0.3
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.55,
			a: 0.826,
			d: 0.826
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 62
		body: [
			{
				ref: ref.goupi.body,
				colorOffset: {
					r: -16,
					g: -26,
					b: -57
				}
			}
		],
		// 67
		cap: [
			// 64
			{
				ref: ref.goupi.cap,
				colorOffset: {
					g: -72,
					b: -87
				}
			},
			// 66
			{
				ref: ref.goupi.dots,
				transform: {
					tx: -0.5,
					ty: -1.95
				},
				alpha: 0.8,
				blend: BLEND_MODES.SCREEN
			}
		],
		// 77
		sleep_bubble: [
			{
				ref: ref.shared.sleep_bubble
			}
		],
		// 57
		shade: [
			{
				ref: ref_sdino.fx.shadow,
				blur: {
					x: 2,
					y: 2
				}
			}
		],
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust
	},
	animations: {
		// guard, release, ill, and cast same as stand
		// 68
		stand: stand,
		// 69
		walk: walk,
		// 70
		run: run,
		// 71
		hit: hit,
		// 72
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 73
		attack: attack,
		counter: attack,
		big: attack,
		// 74
		land: land,
		// 75
		dead: dead,
		// 78
		sleep: sleep
	}
};

export const goupi = {
	name: 'goupi',
	transforms: [
		// 4089
		{
			tx: -0.1,
			ty: -0.45,
			a: 0.882,
			d: 0.882,
			hue: -40
		},
		// 80
		{
			tx: -0.7,
			ty: 0.15
		},
		// Adjust
		{
			ty: -10
		}
	],
	...goupi_base
};

export const goupi2 = {
	name: 'goupi2',
	transforms: [
		// 4089
		{
			tx: -0.1,
			ty: -0.45,
			a: 0.882,
			d: 0.882,
			contrast: -1,
			saturation: 4,
			hue: 3
		},
		// 80
		{
			tx: -0.7,
			ty: 0.15
		},
		// Adjust
		{
			ty: -10
		}
	],
	...goupi_base
};

export const goupi3 = {
	name: 'goupi3',
	transforms: [
		// 4089
		{
			tx: -0.1,
			ty: -0.45,
			a: 0.882,
			d: 0.882,
			contrast: 1,
			hue: 35
		},
		// 80
		{
			tx: -0.7,
			ty: 0.15
		},
		// Adjust
		{
			ty: -10
		}
	],
	...goupi_base
};
