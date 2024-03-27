// @ts-check

import { fly_frames } from './fly.js';

export const attack = {
	id: 'kazka_attack',
	callbacks: {
		4: [['hit']],
		14: [['gotoAndPlay', 5]]
	},
	frames: fly_frames
};
