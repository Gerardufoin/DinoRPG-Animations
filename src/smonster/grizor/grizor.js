// @ts-check
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 2655
export const grizor = {
	name: 'grizor',
	// Symbol 82
	width: 2.254,
	height: 2.431,
	transforms: [
		// 4089
		{
			tx: -37.6,
			ty: -86.5,
			a: 0.792,
			d: 0.792,
			brightness: -10,
			contrast: 10,
			saturation: -3
		}
	],
	fullscreenFilters: true,
	parts: {
		// 2620
		l_b_arm: parts.left_bottom_arm,
		// 2622
		l_t_arm: parts.left_top_arm,
		// 2624
		body: parts.body,
		// 2626
		neck: parts.neck,
		// 2628
		l_shoulder: parts.left_shoulder,
		// 2630
		r_shoulder: parts.right_shoulder,
		// 2632
		r_b_arm: parts.right_bottom_arm,
		// 2634
		r_t_arm: parts.right_top_arm,
		// 2636
		head: parts.head,
		// 2640
		atk_beam_1: parts.attack_beam_1,
		// 2642
		atk_beam_2: parts.attack_beam_2,
		// 2644
		atk_beam_3: parts.attack_beam_3,
		// 2646
		atk_beam_4: parts.attack_beam_4,
		// 2648
		atk_beam_5: parts.attack_beam_5,
		// 2650
		atk_beam_6: parts.attack_beam_6,
		// 2652
		atk_beam_7: parts.attack_beam_7
	},
	animations: {
		// guard, ill, attack, walk, run, dodge, jumpDown, fly, jump, fall, land, dead, sleep same as stand
		// 2637
		stand: stand,
		// 2638
		hit: hit,
		// 2653
		attack: attack,
		release: attack,
		big: attack,
		superattack: attack,
		counter: attack
	}
};
