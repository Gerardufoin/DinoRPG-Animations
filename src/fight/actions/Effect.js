// @ts-check
// getEffect from https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx

import { State } from '../State.js';

export const FXEffect = {
	Env7: 0,
	Aura: 1,
	Snow: 2,
	Swamp: 3,
	Cloud: 4,
	Focus: 5,
	Default: 6,
	Attach: 7,
	AttachAnim: 8,
	Anim: 9,
	Hypnose: 10,
	Ray: 11,
	Speed: 12,
	HeadOrTail: 13,
	Leaf: 14,
	MudWall: 15,
	Blink: 16,
	Generate: 17
};

export class Effect extends State {
	constructor(scene, endCall) {
		super(scene, endCall);
	}
}
