// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { parts } from './parts.js';

// Symbol 1699
// ffrutx is created using a mix of multiple morphshapes.
// It makes it unfortunately impossible to export normally, so the animations are frames by frames shots of the body.
// As such this is by far the worst monster in terme of efficiency and performance.
export const ffrutx = {
	name: 'ffrutx',
	// Symbol 82
	width: 0.752,
	height: 0.631,
	transforms: [
		// 4089
		{
			tx: 0,
			ty: 0,
			brightness: -15,
			contrast: 11
		},
		// Adjust
		{
			ty: -7.7
		}
	],
	glow: {
		distance: 1.3,
		color: 0x660000,
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
		// 1566
		body: parts.body,
		// 1576
		l_eye: parts.eye,
		// 1576-1
		r_eye: parts.eye,
		// 1580
		stem: parts.stem,
		// 1624
		r_hand: parts.right_hand,
		// 1626
		lips: parts.lips,
		// 1628
		mouth: parts.mouth,
		// 1632
		leaves: parts.leaves,
		// 1636
		l_shoulder: parts.left_shoulder,
		// 1637
		l_hand: parts.left_hand,
		// 1642
		r_arm_stand: parts.right_arm_stand,
		// 1643
		l_arm_stand: parts.left_arm_stand,
		// 1654
		r_arm_run: parts.right_arm_run,
		// 1655
		l_arm_run: parts.left_arm_run,
		// 1658
		l_arm_hit: parts.left_arm_hit,
		// 1659
		r_hand_hit: parts.hand_hit,
		// 1659-1
		l_hand_hit: parts.hand_hit,
		// 1660
		r_arm_hit: parts.right_arm_hit,
		r_arm_attack: parts.right_arm_attack,
		l_arm_attack: parts.left_arm_attack,
		// 1683
		leaves_dead: parts.leaves_dead,
		// 1615
		l_eye_closed: parts.eye_closed,
		// 1615-1
		r_eye_closed: parts.eye_closed,
		// 1694
		r_arm_dead: parts.right_arm_dead,
		r_arm_dead_still: parts.right_arm_dead_still,
		// 1695
		l_arm_dead: parts.left_arm_dead,
		l_arm_dead_still: parts.left_arm_dead_still
	},
	animations: {
		// guard, release, ill, cast, walk, dodge, jumpDown, fall, fly, jump, land, sleep same as stand
		// 1645
		stand: stand,
		// 1657
		run: run,
		// 1661
		hit: hit,
		// 1678
		attack: attack,
		big: attack,
		counter: attack,
		// 1697
		dead: dead
	}
};
