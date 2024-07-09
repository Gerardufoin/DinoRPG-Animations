// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { attack } from './animations/attack.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 738
export const vener = {
	name: 'vener',
	// Symbol 82
	width: 3.272,
	height: 2.428,
	transforms: [
		// 4089
		{
			tx: 20.1,
			ty: -21.4,
			a: 0.918,
			d: 0.918
		},
		// 738
		{
			tx: -7,
			ty: 0
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 6,
		color: 0xff9900,
		quality: 0.5,
		strength: 1
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
		r_t_arm: parts.right_top_arm,
		body: parts.body,
		mouth_b: parts.mouth_back,
		neck: parts.neck,
		tail_s: parts.tail_start,
		l_b_leg: parts.left_bottom_leg,
		head: parts.head,
		mouth_f: parts.mouth_front,
		l_shoulder: parts.left_shoulder,
		r_b_arm: parts.right_bottom_arm,
		l_t_arm: parts.left_top_arm,
		l_b_arm: parts.left_bottom_arm,
		l_hand: parts.left_hand,
		r_hand: parts.right_hand,
		tail_e: parts.tail_end,
		fx_dust_1: parts.dust,
		fx_dust_2: parts.dust,
		fx_dust_3: parts.dust,
		fx_dust_4: parts.dust,
		fx_dust_5: parts.dust,
		fx_dust_6: parts.dust
	},
	animations: {
		// dead, dodge, jump, jumpDown, fall, fly, hit, cast, release, ill, run, sleep, and walk same as stand
		// 735
		stand: stand,
		// 736
		attack: attack,
		big: attack,
		counter: attack,
		land: attack
	}
};
