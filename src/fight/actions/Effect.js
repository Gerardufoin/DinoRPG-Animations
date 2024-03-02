// @ts-check
// getEffect from https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/Main.hx

import { Scene } from '../Scene.js';
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

/**
 * Creates a visual effect in the Scene, ranging from auras to invocations.
 * TODO.
 */
export class Effect extends State {
	/**
	 * The visual effect being played, value from the FxEffect enum.
	 * @type {number}
	 */
	_fx;

	/**
	 * Creates the given visual effect in the Scene.
	 * @param {Scene} scene The Scene where the State is happening.
	 * @param {() => void} endCall The function to call at the end of the State, if any.
	 * @param {number} fx The visual effect to spawn.
	 */
	constructor(scene, endCall, fx) {
		super(scene, endCall);
		this._fx = fx;
	}

	/**
	 * Initialize the effect being used.
	 */
	init() {
		console.log(`Playing visual effect ${Object.keys(FXEffect)[this._fx]}`);
		this.end();
	}
}
