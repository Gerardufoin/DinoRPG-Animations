// @ts-check
import { ref } from '../references.js';
import { gluon_ball } from './animations/ball.js';
import { gluon_drips } from './animations/drips.js';
import { gluon_puddle } from './animations/puddle.js';

export const parts = {
	// 122
	puddle: [
		// 117
		{
			ref: ref.gluon.puddle
		},
		// 120
		{
			...gluon_puddle,
			transform: {
				tx: 0.25,
				ty: 3.5,
				a: 1.0,
				d: 1.509
			}
		},
		// 121
		{
			ref: ref.gluon.puddle_highlight
		}
	],
	// 124
	arm: [
		{
			ref: ref.gluon.arm
		}
	],
	// 126
	body: [
		{
			ref: ref.gluon.body
		}
	],
	// 128
	eye: [
		{
			ref: ref.gluon.eye
		}
	],
	// 131
	drip: [gluon_drips],
	// 134
	run_drops_1: [
		{
			ref: ref.gluon.run_drops_1
		}
	],
	// 135
	run_drops_2: [
		{
			ref: ref.gluon.run_drops_2
		}
	],
	// 136
	run_drops_3: [
		{
			ref: ref.gluon.run_drops_3
		}
	],
	// 137
	run_drops_4: [
		{
			ref: ref.gluon.run_drops_4
		}
	],
	// 138
	run_drops_5: [
		{
			ref: ref.gluon.run_drops_5
		}
	],
	// 139
	run_drops_6: [
		{
			ref: ref.gluon.run_drops_6
		}
	],
	// 141
	hit_drops_1: [
		{
			ref: ref.gluon.hit_drops_1
		}
	],
	// 142
	hit_drops_2: [
		{
			ref: ref.gluon.hit_drops_2
		}
	],
	// 143
	hit_drops_3: [
		{
			ref: ref.gluon.hit_drops_3
		}
	],
	// 144
	hit_drops_4: [
		{
			ref: ref.gluon.hit_drops_4
		}
	],
	// 145
	hit_drops_5: [
		{
			ref: ref.gluon.hit_drops_5
		}
	],
	// 149
	body_ball: [gluon_ball]
};
