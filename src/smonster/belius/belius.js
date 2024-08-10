// @ts-check

import { ref as ref_sdino } from '../../dino/references_small.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { parts } from './parts.js';

// Symbol 3582
export const belius = {
	name: 'belius',
	// Symbol 2750
	width: 1.525,
	height: 2.676,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: -80,
			a: 2.838,
			d: 2.838
		},
		// 3582
		{
			a: 1.339,
			d: 1.339
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 0.85,
			a: 1.703,
			d: 0.769
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		// 3524
		sp_1: parts.spike,
		// 3524-1
		sp_2: parts.spike,
		// 3524-2
		sp_3: parts.spike,
		// 3528
		l_arm: parts.limb,
		// 3528-1
		l_leg: parts.limb,
		// 3528-2
		r_leg: parts.limb,
		// 3528-3
		r_arm: parts.limb,
		// 3532
		body: parts.body,
		// 3535
		fur: parts.fur,
		// 3539
		l_horn: parts.horn,
		// 3539-1
		r_horn: parts.horn,
		// 3541
		hair_b: parts.hair_back,
		// 3544
		head: parts.head,
		// 3547
		l_ear: parts.ear,
		// 3550
		nose: parts.nose,
		// 3552
		l_eye: parts.eye,
		// 3552-1
		r_eye: parts.eye,
		// 3555
		hair: parts.hair,
		// 3556
		l_breath_1: parts.breath_1,
		// 3556-1
		r_breath_1: parts.breath_1,
		// 3557
		l_breath_2: parts.breath_2,
		// 3557-1
		r_breath_2: parts.breath_2,
		// 3558
		l_breath_3: parts.breath_3,
		// 3558-1
		r_breath_3: parts.breath_3,
		// 3559
		l_breath_4: parts.breath_4,
		// 3559-1
		r_breath_4: parts.breath_4,
		// 3560
		l_breath_5: parts.breath_5,
		// 3560-1
		r_breath_5: parts.breath_5,
		// 3561
		l_breath_6: parts.breath_6,
		// 3561-1
		r_breath_6: parts.breath_6,
		// 3562
		l_breath_7: parts.breath_7,
		// 3562-1
		r_breath_7: parts.breath_7,
		// 3563
		l_breath_8: parts.breath_8,
		// 3563-1
		r_breath_8: parts.breath_8,
		// 3512
		atk_smear_1: parts.attack_smear_1,
		// 3514
		atk_smear_2: parts.attack_smear_2,
		// 3575 (3515)
		atk_smear_3: parts.attack_smear_3,
		// 3576 (3516)
		atk_smear_4: parts.attack_smear_4,
		// 3577 (3517)
		atk_smear_5: parts.attack_smear_5
	},
	animations: {
		// ill, cast, sleep, release same as stand
		// 3564
		stand: stand,
		// 3570
		walk: walk,
		// 3571
		run: run,
		// 3572
		hit: hit,
		// 3574
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 3578
		attack: attack,
		big: attack,
		counter: attack,
		// 3579
		land: land,
		// 3580
		dead: dead
	}
};
