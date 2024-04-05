// @ts-check
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { attack } from '../../sdino/gorilloz/animations/attack.js';
import { dead } from '../../sdino/gorilloz/animations/dead.js';
import { hit } from '../../sdino/gorilloz/animations/hit.js';
import { jump } from '../../sdino/gorilloz/animations/jump.js';
import { land } from '../../sdino/gorilloz/animations/land.js';
import { release } from '../../sdino/gorilloz/animations/release.js';
import { run } from '../../sdino/gorilloz/animations/run.js';
import { stand } from '../../sdino/gorilloz/animations/stand.js';
import { walk } from '../../sdino/gorilloz/animations/walk.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { parts } from './parts.js';

// Symbol 954
export const egrllz = {
	name: 'egrllz',
	// Symbol 82
	width: 0.998,
	height: 0.915,
	transforms: [
		// 4089
		{
			tx: -0.15,
			ty: -2.8,
			a: 1.306,
			d: 1.306
		},
		// 954
		{
			tx: -10.6,
			ty: 3.95,
			brightness: 10,
			contrast: 5
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 19,
		color: 0xccffcc,
		quality: 0.5,
		strength: 2,
		fullScreen: true
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: -1.2,
			a: 1.278,
			d: 1.156
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 669
		r_foot: parts.hand,
		// 669
		l_foot: parts.hand,
		// 669
		r_hand: parts.hand,
		// 674 p8b
		r_arm: parts.arm,
		// 677
		body: parts.body,
		// 690 p7a
		head: parts.head,
		// 693 p3
		face: parts.face,
		// 698 p5a
		l_ear: parts.ear,
		// 669
		l_hand: parts.hand,
		// 674 p8a
		l_arm: parts.arm,
		// 160
		l_o_hand: parts.open_hand,
		// 160
		r_o_hand: parts.open_hand,
		// 146
		fx_impact_1: [
			{
				ref: ref_sdino.fx.impact_1
			}
		],
		// 147
		fx_impact_2: [
			{
				ref: ref_sdino.fx.impact_2
			}
		],
		// 148
		fx_impact_3: [
			{
				ref: ref_sdino.fx.impact_3
			}
		],
		// 149
		fx_impact_4: [
			{
				ref: ref_sdino.fx.impact_4
			}
		],
		// 150
		fx_impact_5: [
			{
				ref: ref_sdino.fx.impact_5
			}
		],
		// 154
		fx_dust_1: fx_dust,
		// 154
		fx_dust_2: fx_dust,
		// 154
		fx_dust_3: fx_dust
	},
	animations: {
		// Same animations as Gorilloz.
		// Some were a bit different (land, attack) but the Gorilloz animations were nicer, so I kept them.
		// ill and sleep same as stand
		// 945
		stand: stand,
		// 946
		walk: walk,
		// 947
		run: run,
		// 948
		hit: hit,
		// 949
		jump: jump,
		jumpDown: jump,
		fly: jump,
		fall: jump,
		dodge: jump,
		// 950
		attack: attack,
		big: attack,
		counter: attack,
		// 951
		land: land,
		// 952
		dead: dead,
		release: release
	}
};
