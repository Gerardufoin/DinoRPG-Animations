// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { guard } from './animations/guard.js';
import { land } from './animations/land.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 3774
export const updwn = {
	name: 'updwn',
	// Symbol 82
	width: 2.192,
	height: 1.815,
	transforms: [
		// 4089
		{
			tx: 23.1,
			ty: -70.05,
			brightness: 1,
			contrast: 15,
			saturation: 16
		},
		// 3774
		{
			tx: -13.95,
			ty: -0.95
		},
		// Adjust
		{
			ty: -7.65
		}
	],
	glow: {
		distance: 5,
		color: 0xccffff,
		quality: 1,
		strength: 1.5
	},
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.85,
			a: 3.05,
			d: 1.994
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3742
		r_foot_back: parts.right_foot_back,
		// 3744
		l_t_leg: parts.top_leg,
		// 3744-1
		r_t_leg: parts.top_leg,
		// 3747
		r_b_leg: parts.right_bottom_leg,
		// 3749
		r_foot: parts.right_foot,
		// 3755
		body: parts.body,
		// 3758
		l_b_leg: parts.left_bottom_leg,
		// 3760
		l_foot: parts.left_foot,
		// 3768
		shield: parts.shield,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_dust_4: fx_dust,
		fx_dust_5: fx_dust,
		fx_dust_6: fx_dust,
		fx_dust_7: fx_dust
	},
	animations: {
		// release, ill, cast, sleep, fly same as stand
		// 3761
		stand: stand,
		// 3762
		walk: walk,
		// 3763
		run: run,
		// 3764
		hit: hit,
		jump: hit,
		jumpDown: hit,
		fall: hit,
		dodge: hit,
		// 3765
		attack: attack,
		big: attack,
		counter: attack,
		// 3766
		land: land,
		// 3767
		dead: dead,
		// 3772
		guard: guard
	}
};
