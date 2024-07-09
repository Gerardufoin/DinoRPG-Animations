// @ts-check
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';
import { ref as ref_sdino } from '../../dino/references_small.js';
import { parts_small as parts_rocky } from '../../dino/rocky/parts_small.js';
import { stand } from '../../dino/rocky/animations/stand.js';
import { walk } from '../../dino/rocky/animations/walk.js';
import { run } from '../../dino/rocky/animations/run.js';
import { hit } from '../../dino/rocky/animations/hit.js';
import { jump } from '../../dino/rocky/animations/jump.js';
import { land } from '../../dino/rocky/animations/land.js';
import { dead } from '../../dino/rocky/animations/dead.js';
import { parts } from './parts.js';
import { attack } from './animations/attack.js';

// Symbol 881
export const rocky = {
	name: 'rocky',
	// Symbol 82
	width: 0.906,
	height: 0.831,
	transforms: [
		// 4089
		{
			tx: 2.15,
			ty: -0.6,
			a: 0.953,
			d: 0.953
		},
		// 881
		{
			tx: -2.25,
			ty: 1.75
		},
		// Adjust
		{
			ty: -14
		}
	],
	glow: {
		distance: 1.3,
		color: 0x330000,
		quality: 1,
		strength: 0.3
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
		// 857 p8b
		r_hand: parts.right_hand,
		// 860 p4
		body: parts.body,
		// 863 p6
		mouth: parts.mouth,
		// 867 p5
		eyes: parts.eyes,
		// 870 p8a
		l_hand: parts.left_hand,
		// 146
		fx_impact_1: parts_rocky.fx_impact_1,
		// 147
		fx_impact_2: parts_rocky.fx_impact_2,
		// 148
		fx_impact_3: parts_rocky.fx_impact_3,
		// 149
		fx_impact_4: parts_rocky.fx_impact_4,
		// 150
		fx_impact_5: parts_rocky.fx_impact_5,
		// 154
		fx_dust_1: fx_dust,
		// 154
		fx_dust_2: fx_dust,
		// 154
		fx_dust_3: fx_dust,
		top: []
	},
	animations: {
		// Same animations as Rocky from sdino (except attack)
		// release, ill, cast, and sleep same as stand
		// 871
		stand: stand,
		// 873
		walk: walk,
		// 874
		run: run,
		// 875
		hit: hit,
		// 876
		jump: jump,
		jumpDown: jump,
		dodge: jump,
		fly: jump,
		fall: jump,
		// 877
		attack: attack,
		big: attack,
		counter: attack,
		// 878
		land: land,
		// 879
		dead: dead
	}
};
