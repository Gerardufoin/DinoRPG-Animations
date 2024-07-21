// @ts-check
import { ref } from '../references.js';
import { left_arm_attack, right_arm_attack } from './animations/attack_arms.js';
import { left_arm_dead, right_arm_dead } from './animations/dead_arms.js';
import { leaves } from './animations/leaves.js';
import { left_arm_run, right_arm_run } from './animations/run_arms.js';
import { left_arm_stand, right_arm_stand } from './animations/stand_arms.js';

export const parts = {
	// 1566
	body: [
		{
			ref: ref.frutox.body
		}
	],
	// 1576
	eye: [
		{
			ref: ref.frutox.eye
		}
	],
	// 1580
	stem: [
		{
			ref: ref.frutox.stem
		}
	],
	// 1615
	eye_closed: [
		{
			ref: ref.frutox.eye_closed
		}
	],
	// 1624
	right_hand: [
		{
			ref: ref.ffrutx.right_hand
		}
	],
	// 1626
	lips: [
		{
			ref: ref.ffrutx.lips
		}
	],
	// 1628
	mouth: [
		{
			ref: ref.ffrutx.mouth
		}
	],
	// 1632
	leaves: [leaves],
	// 1636
	left_shoulder: [
		{
			ref: ref.ffrutx.left_shoulder
		}
	],
	// 1637
	left_hand: [
		{
			ref: ref.ffrutx.left_hand
		}
	],
	// 1642
	right_arm_stand: [right_arm_stand],
	// 1643
	left_arm_stand: [left_arm_stand],
	// 1654
	right_arm_run: [right_arm_run],
	// 1655
	left_arm_run: [left_arm_run],
	// 1658
	left_arm_hit: [
		{
			ref: ref.ffrutx.left_arm_hit
		}
	],
	// 1659
	hand_hit: [
		{
			ref: ref.ffrutx.hand_hit
		}
	],
	// 1660
	right_arm_hit: [
		{
			ref: ref.ffrutx.right_arm_hit
		}
	],
	right_arm_attack: [right_arm_attack],
	left_arm_attack: [left_arm_attack],
	// 1683
	leaves_dead: [
		// 1681
		{
			ref: ref.ffrutx.leaves_dead_back
		},
		// 1580
		{
			ref: ref.frutox.stem,
			transform: {
				tx: -0.05,
				ty: -0.05,
				a: 0.952,
				d: 0.952,
				b: -0.302,
				c: 0.302
			}
		},
		// 1682
		{
			ref: ref.ffrutx.leaves_dead_front
		}
	],
	// 1694
	right_arm_dead: [right_arm_dead],
	right_arm_dead_still: [
		{
			ref: ref.ffrutx.right_arm_dead_still
		}
	],
	// 1695
	left_arm_dead: [left_arm_dead],
	left_arm_dead_still: [
		{
			ref: ref.ffrutx.left_arm_dead_still
		}
	]
};
