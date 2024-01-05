// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/ac/AddFighter.hx

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
