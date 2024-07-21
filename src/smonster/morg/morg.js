// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { cast } from './animations/cast.js';
import { dead } from './animations/dead.js';
import { fall } from './animations/fall.js';
import { jump } from './animations/jump.js';
import { run } from './animations/run.js';
import { land } from './animations/land.js';
import { sleep } from './animations/sleep.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1867
export const morg = {
	name: 'morg',
	// Symbol 82
	width: 2.575,
	height: 2.521,
	transforms: [
		// 4089
		{
			tx: -53.75,
			ty: -103.35,
			brightness: -16,
			contrast: 11
		},
		// 1867
		{
			tx: 87.75,
			ty: -7.7,
			a: -0.9,
			d: 0.9
		}
	],
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
		// 1787
		tail: parts.tail,
		// 1789
		r_foot: parts.right_foot,
		// 1791
		r_t_leg: parts.right_top_leg,
		// 1793
		r_b_leg: parts.right_bottom_leg,
		// 1795
		l_foot: parts.left_foot,
		// 1797
		l_t_leg: parts.left_top_leg,
		// 1799
		l_b_leg: parts.left_bottom_leg,
		// 1801
		r_t_arm: parts.right_top_arm,
		// 1803
		r_b_arm: parts.right_bottom_arm,
		// 1805
		r_hand: parts.right_hand,
		// 1809
		weapon: parts.weapon,
		// 1811
		body: parts.body,
		// 1813
		head: parts.head,
		// 1815
		l_t_arm: parts.left_top_arm,
		// 1817
		l_b_arm: parts.left_bottom_arm,
		// 1819
		l_hand: parts.left_hand,
		// 1821
		body_armor: parts.body_armor,
		// 1823
		l_arm_armor: parts.left_arm_armor,
		// 1825
		shoulder_armor: parts.shoulder_armor,
		// 1831
		atk_smear_1: parts.attack_smear_1,
		// 1832
		atk_smear_2: parts.attack_smear_2,
		// 1833
		atk_smear_3: parts.attack_smear_3,
		// 1834
		atk_smear_4: parts.attack_smear_4,
		// 1835
		atk_smear_5: parts.attack_smear_5,
		// 1838
		smoke_1: parts.smoke,
		// 1838-1
		smoke_2: parts.smoke,
		// 1839
		dirt_1: parts.dirt_1,
		// 1840
		dirt_2: parts.dirt_2,
		// 1841
		dirt_3: parts.dirt_3,
		// 1842
		dirt_4: parts.dirt_4,
		// 1843
		dirt_5: parts.dirt_5,
		// 1844
		dirt_6: parts.dirt_6,
		// 1845
		dirt_7: parts.dirt_7,
		// 1849
		blood_1: parts.blood_1,
		// 1850
		blood_2: parts.blood_2,
		// 1851
		blood_3: parts.blood_3,
		// 1852
		blood_4: parts.blood_4,
		// 1853
		blood_5: parts.blood_5,
		// 1854
		blood_6: parts.blood_6,
		// 1855
		blood_7: parts.blood_7,
		// 1856
		blood_8: parts.blood_8,
		// 1857
		blood_9: parts.blood_9,
		// 1858
		blood_10: parts.blood_10,
		// 1859
		blood_11: parts.blood_11,
		// 1860
		blood_puddle: parts.blood_puddle,
		// 1863
		head_sleep: parts.head_sleep
	},
	animations: {
		// guard, release, ill same as stand
		// 1826
		stand: stand,
		// 1827
		walk: walk,
		// 1828
		run: run,
		// 1829
		hit: hit,
		// 1830
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		// 1846
		attack: attack,
		big: attack,
		counter: attack,
		// 1847
		land: land,
		// 1848
		fall: fall,
		// 1862
		dead: dead,
		// 1864
		sleep: sleep,
		// 1865
		cast: cast
	}
};
