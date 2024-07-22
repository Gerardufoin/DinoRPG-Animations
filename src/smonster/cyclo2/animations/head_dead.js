import { cyclo_head_dead_anim } from '../../cyclo/animations/head_dead.js';
import { ref } from '../../references.js';

// 2013
export const head_dead = {
	parts: {
		h: [
			{
				ref: ref.cyclo2.head_dead
			}
		],
		b: [
			{
				ref: ref.cyclo.head_dead_bump
			}
		]
	},
	animation: cyclo_head_dead_anim
};
