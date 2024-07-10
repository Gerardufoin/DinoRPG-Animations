// @ts-check
import { attack as brgAtk } from '../../brig1/animations/attack.js';

// Same as brig1 attack, but without the smoke/shake callback
export const attack = {
	id: 'brig2_attack',
	callbacks: {
		2: [['hit']],
		15: [['stop']]
	},
	frames: brgAtk.frames
};
