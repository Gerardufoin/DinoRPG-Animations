// @ts-check

import { stand } from './stand.js';

export const land = {
	id: 'worm2_land',
	callbacks: {
		0: [
			['fxShake', 4, 0.95, 0.8],
			['fxAttach', 'smoke', -15, 15]
		],
		35: [['stop']]
	},
	frames: stand.frames
};
