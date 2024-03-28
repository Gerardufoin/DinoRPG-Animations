// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Attach.hx

import { Animator } from '../../../../display/Animator.js';
import { fx_bubble } from '../../../../gfx/fx/bubble.js';
import { fx_onde_focus } from '../../../../gfx/fx/onde_focus.js';
import { fx_survivor } from '../../../../gfx/fx/survivor.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Sprite } from '../../../Sprite.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';

/**
 * The given animation is attached to the given Fighter.
 */
export class FxAttach extends State {
	/**
	 * The possible effect to attach to the fighter and their respective key/animation.
	 */
	static ATTACHEMENTS = {
		fxBubble: fx_bubble,
		fxSurvivor: fx_survivor,
		fxOndeFocus: fx_onde_focus
	};

	/**
	 * An animation is attached to the given fighter.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The target of the attachement.
	 * @param {string} fx The animation to attach.
	 */
	constructor(scene, endCall, fighter, fx) {
		super(scene, endCall);
		// As the state is called from Skill, the fighter is already ready, do not add it to the cast.
		const anim = FxAttach.ATTACHEMENTS[fx];
		if (anim) {
			const animator = new Animator(false).loadAnimation(anim);
			animator.y = -fighter.height * 0.5;
			const sprite = new Sprite(animator);
			/**
			 * Update the animator.
			 * @param {Timer} timer The Fight's timer, containing the elapsed time.
			 */
			sprite.update = (timer) => {
				animator.update(timer.deltaTimeMS);
			};
			animator.registerCallback('destroy', () => {
				sprite.kill();
			});
			fighter.dm.addSprite(sprite, Layers.Fighter.FX);
		} else {
			console.error(`[FxAttach]: Unkown fx '${fx}'`);
		}
		this.end();
	}
}
