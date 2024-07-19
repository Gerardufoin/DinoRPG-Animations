// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { dead } from './animations/dead.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1621
export const frutox = {
	name: 'frutox',
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
	masks: {
		mouth: 'mask',
		teeth: 'mask'
	},
	parts: {
		// 1564
		r_leaf: parts.right_leaf,
		// 1566
		body: parts.body,
		// 1568
		lips: parts.lips,
		// 1570
		mask: parts.mask,
		// 1572
		mouth: parts.mouth,
		// 1574
		teeth: parts.teeth,
		// 1576
		l_eye: parts.eye,
		// 1576-1
		r_eye: parts.eye,
		// 1578
		l_leaf: parts.left_leaf,
		// 1580
		stem: parts.stem,
		// 1583
		run_l_leaf_1: parts.run_leaf_1,
		// 1583-1
		run_r_leaf_1: parts.run_leaf_1,
		// 1588
		run_body: parts.run_body,
		// 1589
		run_outline: parts.run_outline,
		// 1590
		run_face_1: parts.run_face_1,
		// 1591
		run_l_leaf_2: parts.run_leaf_2,
		// 1591-1
		run_r_leaf_2: parts.run_leaf_2,
		// 1592
		run_face_2: parts.run_face_2,
		// 1593
		run_l_leaf_3: parts.run_leaf_3,
		// 1593-1
		run_r_leaf_3: parts.run_leaf_3,
		// 1594
		run_face_3: parts.run_face_3,
		// 1595
		run_l_leaf_4: parts.run_leaf_4,
		// 1595-1
		run_r_leaf_4: parts.run_leaf_4,
		// 1596
		run_face_4: parts.run_face_4,
		// 1597
		run_l_leaf_5: parts.run_leaf_5,
		// 1597-1
		run_r_leaf_5: parts.run_leaf_5,
		// 1598
		run_face_5: parts.run_face_5,
		// 1599
		run_l_leaf_6: parts.run_leaf_6,
		// 1599-1
		run_r_leaf_6: parts.run_leaf_6,
		// 1600
		run_face_6: parts.run_face_6,
		// 1601
		run_l_leaf_7: parts.run_leaf_7,
		// 1601-1
		run_r_leaf_7: parts.run_leaf_7,
		// 1602
		run_face_7: parts.run_face_7,
		// 1603
		run_l_leaf_8: parts.run_leaf_8,
		// 1603-1
		run_r_leaf_8: parts.run_leaf_8,
		// 1604
		run_face_8: parts.run_face_8,
		// 1605
		run_l_leaf_9: parts.run_leaf_9,
		// 1605-1
		run_r_leaf_9: parts.run_leaf_9,
		// 1606
		run_face_9: parts.run_face_9,
		// 1610
		atk_smear_1: parts.attack_smear_1,
		// 1611
		atk_smear_2: parts.attack_smear_2,
		// 1612
		atk_smear_3: parts.attack_smear_3,
		// 1615
		l_eye_closed: parts.eye_closed,
		// 1615-1
		r_eye_closed: parts.eye_closed,
		// 1617
		juice: parts.juice
	},
	animations: {
		// guard, release, ill, cast, land same as stand
		// 1581
		stand: stand,
		// 1582
		walk: walk,
		// 1607
		run: run,
		// 1608
		hit: hit,
		// 1609
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		dodge: jump,
		// 1613
		attack: attack,
		big: attack,
		counter: attack,
		// 1618
		dead: dead,
		// 1619
		sleep: sleep
	}
};
