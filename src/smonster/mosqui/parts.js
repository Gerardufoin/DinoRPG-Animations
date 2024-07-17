// @ts-check
import { ref } from '../references.js';
import { legs } from './animations/legs.js';
import { wing } from './animations/wing.js';

export const parts = {
	// 1493
	leg_segment: [
		{
			ref: ref.mosqui.leg_segment
		}
	],
	// 1494
	legs: [legs],
	// 1496
	butt: [
		{
			ref: ref.mosqui.butt
		}
	],
	// 1498
	body: [
		{
			ref: ref.mosqui.body
		}
	],
	// 1500
	head: [
		{
			ref: ref.mosqui.head
		}
	],
	// 1503
	wings_hit: [
		{
			ref: ref.mosqui.wings_hit
		}
	],
	// 1507
	wing_dead: [
		{
			ref: ref.mosqui.wing_dead
		}
	],
	// 55
	wing: [wing]
};
