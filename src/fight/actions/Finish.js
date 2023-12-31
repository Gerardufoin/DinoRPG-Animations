// @ts-check

import { State } from '../State.js';

export class Finish extends State {
	static EndBehaviour = {
		Run: 0,
		Escape: 1,
		Stand: 2,
		Guard: 3
	};
}
