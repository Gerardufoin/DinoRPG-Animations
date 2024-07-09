// @ts-check
import { fx_dash } from '../../dino/fx/dash.js';
import { attack } from '../../dino/hippoclamp/animations/attack.js';
import { dead } from '../../dino/hippoclamp/animations/dead.js';
import { hit } from '../../dino/hippoclamp/animations/hit.js';
import { jump } from '../../dino/hippoclamp/animations/jump.js';
import { land } from '../../dino/hippoclamp/animations/land.js';
import { run } from '../../dino/hippoclamp/animations/run.js';
import { stand } from '../../dino/hippoclamp/animations/stand.js';
import { walk } from '../../dino/hippoclamp/animations/walk.js';
import { ref as ref_sdino } from '../../dino/references_small.js';
import { parts } from './parts.js';

// Symbol 854
export const hippo = {
	name: 'hippo',
	// Symbol 82
	width: 0.906,
	height: 0.831,
	transforms: [
		// 4089
		{
			tx: -1.75,
			ty: -2.85,
			a: 1.147,
			d: 1.147
		},
		// 854
		{
			tx: 2.9,
			ty: 3.7,
			a: 1.127,
			d: 1.127
		},
		// Adjust
		{
			ty: -7.7
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
		r_f_fin: parts.fin_right,
		body: parts.body,
		neck: parts.neck,
		r_eye: parts.eye,
		head: parts.head,
		l_f_fin: parts.fin_left,
		l_b_fin: parts.fin_left,
		l_eye: parts.eye,
		// 658
		fx_dash_1: fx_dash,
		// 658
		fx_dash_2: fx_dash,
		back: []
	},
	animations: {
		// Same animations as Hippoclamp
		// release, ill, cast, and sleep same as stand
		// 838
		stand: stand,
		// 839
		walk: walk,
		// 847
		run: run,
		// 848
		hit: hit,
		// 849
		jump: jump,
		jumpDown: jump,
		fly: jump,
		dodge: jump,
		fall: jump,
		// 850
		attack: attack,
		big: attack,
		counter: attack,
		// 851
		land: land,
		// 852
		dead: dead
	}
};
