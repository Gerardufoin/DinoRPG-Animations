// @ts-check

import { parts } from './parts.js';
import { ref as ref_sdino } from '../../sdino/references.js';
import { stand } from './animations/stand.js';
import { walk } from './animations/walk.js';
import { run } from './animations/run.js';
import { hit } from './animations/hit.js';
import { jump } from './animations/jump.js';
import { attack } from './animations/attack.js';
import { land } from './animations/land.js';
import { dead } from './animations/dead.js';
import { sleep } from './animations/sleep.js';
import { release } from './animations/release.js';

// 2950
export const taurus = {
	name: 'taurus',
	// box 82
	width: 2.406,
	height: 2.93,
	transforms: [
		// 4089
		{
			tx: -53.75,
			ty: -112.4,
			a: 0.928,
			d: 0.928
		},
		// 2950
		{
			tx: 59.35,
			ty: 86.6,
			a: 2.581,
			d: 2.581
		},
		// Adjust
		{
			ty: 2.5
		}
	],
	shadow: {
		ref: ref_sdino.fx.shadow,
		transform: {
			tx: 7.9,
			a: 3.945,
			d: 2.139
		},
		alpha: 0.5,
		blur: { x: 1, y: 1 }
	},
	parts: {
		r_back_spike: parts.r_back_spike,
		mane: parts.mane,
		l_back_spike: parts.l_back_spike,
		r_forearm: parts.r_forearm,
		r_foot: parts.r_foot,
		l_upper_leg: parts.connector_1,
		l_arm: parts.connector_2,
		r_upper_leg: parts.connector_2,
		r_arm: parts.connector_2,
		r_leg: parts.r_leg,
		body: parts.body,
		head: parts.head,
		l_foot: parts.l_foot,
		l_leg: parts.l_leg,
		l_forearm: parts.l_forearm,
		l_sideburn: parts.sideburn,
		r_sideburn: parts.sideburn,
		l_hand: parts.hand,
		r_hand: parts.hand
	},
	animations: {
		// release and ill same as stand
		// 2936
		stand: stand,
		// 2937
		walk: walk,
		// 2938
		run: run,
		// 2939
		hit: hit,
		// 2940,
		jump: jump,
		dodge: jump,
		jumpDown: jump,
		fly: jump,
		// 2941
		attack: attack,
		counter: attack,
		big: attack,
		// 2942
		land: land,
		// 2943
		dead: dead,
		// 2944
		sleep: sleep,
		// 2948
		release: release
	}
};
