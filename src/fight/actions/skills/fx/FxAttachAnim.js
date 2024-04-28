// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/AttachAnim.hx

import { Animator } from '../../../../display/Animator.js';
import { fx_endurance_off } from '../../../../gfx/fx/endurance_off.js';
import { fx_endurance_on } from '../../../../gfx/fx/endurance_on.js';
import { fx_qigong } from '../../../../gfx/fx/qigong.js';
import { fx_receptacle } from '../../../../gfx/fx/receptacle.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';

/**
 * The given animation is attached to the center of the given Fighter.
 * The state is hold until the animation stops playing.
 */
export class FxAttachAnim extends State {
	/**
	 * The possible effect to attach to the fighter and their respective key/animation.
	 * @type {{[id: string]: {fx: object, details: number[]}}}
	 */
	static ATTACHEMENTS = {
		fxEnduranceOn: { fx: fx_endurance_on, details: [] },
		fxEnduranceOff: { fx: fx_endurance_off, details: [] },
		fxQigong: { fx: fx_qigong, details: [] },
		fxReceptacleFire: { fx: fx_receptacle, details: [0] },
		fxReceptacleWood: { fx: fx_receptacle, details: [1] },
		fxReceptacleWater: { fx: fx_receptacle, details: [2] },
		fxReceptacleThunder: { fx: fx_receptacle, details: [3] },
		fxReceptacleAir: { fx: fx_receptacle, details: [4] }
	};

	/**
	 * The animator of the animation playing.
	 * @type {Animator}
	 */
	_animator;
	/**
	 * The Fighter containing the animation.
	 * @type {Fighter}
	 */
	_fighter;

	/**
	 * An animation is attached to the center of the given fighter.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The target of the attachement.
	 * @param {string} fx The animation to attach.
	 */
	constructor(scene, endCall, fighter, fx) {
		super(scene, endCall);
		this._fighter = fighter;
		const anim = FxAttachAnim.ATTACHEMENTS[fx];
		if (anim) {
			this._animator = new Animator(false).loadAnimation(anim.fx, 1, anim.details);
			this._animator.y = -this._fighter.skin.height * 0.5;
			this._fighter.dm.addContainer(this._animator, Layers.Fighter.FX);
		} else {
			console.error(`[FxAttachAnim]: Unkown fx '${fx}'`);
			this.end();
		}
	}

	/**
	 * Updates the animation and ends the state once it is done playing.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._animator) {
			this._animator.update(timer.deltaTimeMS);
			if (this._animator.hasAnimEnded) {
				this._fighter.dm.removeContainer(this._animator, Layers.Fighter.FX);
				this._animator = undefined;
				this.end();
			}
		}
	}
}
