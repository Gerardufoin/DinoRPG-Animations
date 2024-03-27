// @ts-check

import { fly_animation } from './fly.js';

export const stand = {
	id: 'bat_stand',
	callbacks: {
		0: [['hit']]
	},
	frames: fly_animation
};
