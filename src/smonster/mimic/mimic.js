// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { parts } from './parts.js';

// Symbol 3655
export const mimic = {
	name: 'mimic',
	// Symbol 2750
	width: 0.973,
	height: 0.858,
	transforms: [
		// 4089
		{
			tx: -4.5,
			ty: -30.45
		},
		// Adjust
		{
			ty: -7.65
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.85,
			a: 1.176,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3584
		inside: parts.inside,
		// 3586
		box: parts.box,
		// 3588
		b_gum: parts.bottom_gum,
		// 3590
		b_teeth: parts.bottom_teeth,
		// 3597
		cover: parts.cover,
		// 3598 (3609)
		jump_fx_1: parts.jump_fx_1,
		// 3599 (3610)
		jump_fx_2: parts.jump_fx_2,
		// 3600 (3611)
		jump_fx_3: parts.jump_fx_3,
		// 3601 (3612)
		jump_fx_4: parts.jump_fx_4,
		// 3602 (3613)
		jump_fx_5: parts.jump_fx_5,
		// 3603
		sticky_fx_1: parts.sticky_fx_1,
		// 3604
		sticky_fx_2: parts.sticky_fx_2,
		// 3605
		sticky_fx_3: parts.sticky_fx_3,
		// 3606
		sticky_fx_4: parts.sticky_fx_4,
		// 3607
		sticky_fx_5: parts.sticky_fx_5,
		// 3619
		cover_open: parts.cover_open,
		// 3620
		eyes: parts.eyes,
		// 3623 (3646)
		open_fx_1: parts.open_fx_1,
		// 3624 (3647)
		open_fx_2: parts.open_fx_2,
		// 3626
		b_arm: parts.bottom_arm,
		// 3628
		t_arm: parts.top_arm,
		// 3630
		claws: parts.claws,
		// 3631
		atk_smear_1: parts.attack_smear_1,
		// 3632
		atk_smear_2: parts.attack_smear_2,
		// 3633
		atk_smear_3: parts.attack_smear_3,
		// 3634
		atk_smear_4: parts.attack_smear_4,
		// 3635
		atk_smear_5: parts.attack_smear_5,
		// 3636
		atk_smear_6: parts.attack_smear_6,
		// 3637
		atk_smear_7: parts.attack_smear_7,
		// 3638
		atk_smear_8: parts.attack_smear_8,
		// 3639
		atk_smear_9: parts.attack_smear_9,
		// 3640
		atk_smear_10: parts.attack_smear_10,
		// 3641
		atk_smear_11: parts.attack_smear_11,
		// 3642
		atk_smear_12: parts.attack_smear_12,
		// 3643
		atk_smear_13: parts.attack_smear_13,
		// 3650
		cover_dead: parts.cover_dead,
		// 3651
		inside_dead: parts.inside_dead
	},
	animations: {
		// ill, cast, walk same as stand
		// 3608
		stand: stand,
		// 3614
		run: run,
		// 3621
		hit: hit,
		// 3622
		jump: jump,
		jumpDown: jump,
		fly: jump,
		fall: jump,
		dodge: jump,
		// 3644
		attack: attack,
		big: attack,
		counter: attack,
		// 3645
		land: land,
		// 3652
		dead: dead,
		// 3653
		sleep: sleep,
		release: sleep
	}
};
