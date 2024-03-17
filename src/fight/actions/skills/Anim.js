// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Anim.hx

import { Fighter } from '../../Fighter.js';
import { Scene } from '../../Scene.js';
import { State } from '../../State.js';

/**
 * The given Fighter plays a specific animation.
 */
export class Anim extends State {
	/**
	 * A Fighter plays an animation.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 * @param {string} anim The animation to play.
	 */
	constructor(scene, endCall, fighter, anim) {
		super(scene, endCall);
		// As the state is called from Skill, the fighter is already ready, do not add to the cast.
		fighter.playAnim(anim);
		this.end();
	}
}
