// @ts-check

import { State } from '../State.js';

export class AddFighter extends State {
	static EntranceEffect = {
		Stand: 0,
		Grow: 1,
		Fall: 2,
		Run: 3,
		Ground: 4,
		Anim: 5
	};
}
