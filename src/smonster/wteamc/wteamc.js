// @ts-check
import { ref as ref_sdino } from '../../dino/references_small.js';
import { hit } from './animations/hit.js';
import { attack } from './animations/attack.js';
import { jump } from './animations/jump.js';
import { land } from './animations/land.js';
import { run } from './animations/run.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { parts } from './parts.js';

// Symbol 1188
export const wteamc = {
	name: 'wteamc',
	// Symbol 82
	width: 1.777,
	height: 1.937,
	transforms: [
		// 4089
		{
			tx: -3.35,
			ty: -18.85,
			a: 0.781,
			d: 0.781,
			brightness: -15,
			contrast: 11
		},
		// 1188
		{
			ty: 25.6
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
		// 1124 p7
		ww_tail: parts.wanwan_tail,
		// 1127 p6a
		ww_l_ear: parts.wanwan_ear,
		// 1127 p6b
		ww_r_ear: parts.wanwan_ear,
		// 1132 p8a
		ww_l_f_leg: parts.wanwan_leg,
		// 1132 p8b
		ww_r_f_leg: parts.wanwan_leg,
		// 1132 p8c
		ww_l_b_leg: parts.wanwan_leg,
		// 1132 p8d
		ww_r_b_leg: parts.wanwan_leg,
		// 1135
		ww_l_body: parts.wanwan_lower_body,
		// 1138
		ww_u_body: parts.wanwan_upper_body,
		// 1141
		ww_head: parts.wanwan_head,
		// 1147 p3a
		ww_l_eye: parts.wanwan_eye,
		// 1147 p3b
		ww_r_eye: parts.wanwan_eye,
		// 1149 p9
		ww_marks: parts.wanwan_marks,
		// 1151 col1
		ww_nose: parts.wanwan_nose,
		// 1155
		cpt_cape: parts.captain_cape,
		// 1175 sub / 1178 sub
		cpt: parts.captain,
		// 1181 sub
		cpt_down: parts.captain_down
	},
	animations: {
		// release, ill, cast, dead, sleep, dodge same as stand
		// 1176
		stand: stand,
		// 1179
		walk: walk,
		// 1182
		run: run,
		// 1183
		hit: hit,
		// 1184
		jump: jump,
		jumpDown: jump,
		fall: jump,
		fly: jump,
		// 1185
		attack: attack,
		big: attack,
		counter: attack,
		// 1186
		land: land
	}
};
