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
import { parts as parts_updwn } from '../updwn/parts.js';
import { parts as parts_upgrd } from '../upgrd/parts.js';
import { parts } from './parts.js';
import { fx_dust } from '../../gfx/fx/attach/smoke/dust.js';

// Symbol 3790
export const fullgd = {
	name: 'fullgd',
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
		// 3790
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
		color: 0xff6600,
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
		// 2842
		legs: parts_upgrd.legs,
		// 2844
		r_b_arm: parts_upgrd.right_bottom_arm,
		// 2846
		r_hand: parts_upgrd.right_hand,
		// 2848
		r_t_arm: parts_upgrd.right_top_arm,
		// 2854
		u_body: parts_upgrd.body,
		// 2856
		l_t_arm: parts_upgrd.left_top_arm,
		// 2858
		l_b_arm: parts_upgrd.left_bottom_arm,
		// 2860
		l_hand: parts_upgrd.left_hand,
		// 2862
		head: parts_upgrd.head,
		// 2864
		l_eye: parts_upgrd.eye,
		// 2864-1
		r_eye: parts_upgrd.eye,
		// 2867
		atk_smear: parts_upgrd.attack_smear,
		// 2871
		spirit: parts_upgrd.spirit,
		// 3742
		r_foot_back: parts_updwn.right_foot_back,
		// 3744
		l_t_leg: parts_updwn.top_leg,
		// 3744-1
		r_t_leg: parts_updwn.top_leg,
		// 3747
		r_b_leg: parts_updwn.right_bottom_leg,
		// 3749
		r_foot: parts_updwn.right_foot,
		// 3755
		l_body: parts_updwn.body,
		// 3758
		l_b_leg: parts_updwn.left_bottom_leg,
		// 3760
		l_foot: parts_updwn.left_foot,
		// 3768
		shield: parts.shield,
		fx_dust_1: fx_dust,
		fx_dust_2: fx_dust,
		fx_dust_3: fx_dust,
		fx_dust_4: fx_dust,
		fx_dust_5: fx_dust,
		fx_dust_6: fx_dust,
		fx_dust_7: fx_dust,
		fx_dust_8: fx_dust,
		fx_dust_9: fx_dust,
		fx_dust_10: fx_dust
	},
	animations: {
		// release, ill, cast, sleep, fly same as stand
		// 3775
		stand: stand,
		// 3776
		walk: walk,
		// 3777
		run: run,
		// 3778
		hit: hit,
		jump: hit,
		jumpDown: hit,
		dodge: hit,
		fall: hit,
		// 3780
		attack: attack,
		big: attack,
		counter: attack,
		// 3781
		land: land,
		// 3782
		dead: dead,
		// 3788
		guard: guard
	}
};
