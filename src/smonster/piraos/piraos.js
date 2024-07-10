// @ts-check

import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { fly } from './animations/fly.js';
import { hit } from './animations/hit.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1095
export const piraos = {
	name: 'piraos',
	// Symbol 82
	width: 0.63,
	height: 0.671,
	transforms: [
		// 4089
		{
			tx: -2.15,
			ty: -11.5
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 1
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 0.88,
			d: 0.797
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 1073
		tail: parts.tail,
		// 1075
		body: parts.body,
		// 1077
		l_eye: parts.l_eye,
		// 1079
		back_fin: parts.back_fin,
		// 1081
		mouth: parts.mouth,
		// 1081
		mouth_atk_bot: parts.mouth,
		// 1081
		mouth_atk_top: parts.mouth,
		// 1083
		r_eye: parts.r_eye,
		// 1085
		l_fin: parts.fin,
		// 1085
		r_fin: parts.fin,
		// 1090
		inside: parts.inside,
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
		// release, ill, sleep, and cast same as stand
		// 1086 (383)
		stand: stand,
		// 1087 (384)
		walk: walk,
		run: walk,
		// 1088 (385)
		hit: hit,
		// 1089 (386)
		fly: fly,
		fall: fly,
		jump: fly,
		jumpDown: fly,
		dodge: fly,
		// 1091 (389)
		attack: attack,
		big: attack,
		counter: attack,
		// 1092 (390)
		land: land,
		// 1093 (391)
		dead: dead
	}
};
