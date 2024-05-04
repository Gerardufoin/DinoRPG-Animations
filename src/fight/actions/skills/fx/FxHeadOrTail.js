// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/RandomState.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { HeadOrTail } from '../../../parts/skills/HeadOrTail.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The given Fighter spanws a rotating card which stops on either a success or a loss.
 */
export class FxHeadOrTail extends GroupEffect {
	/**
	 * Reference to the result of the card flip.
	 * @type {boolean}
	 */
	_success;
	/**
	 * Reference to the head or tail card.
	 * @type {HeadOrTail}
	 */
	_card;

	/**
	 * A Fighter spawns in a rotating card of the given type, which then stops on either a success or a failure based on the success parameter.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 * @param {string} type The type of card.
	 * @param {boolean} success True if the card lands on the success side, false otherwise.
	 */
	constructor(scene, endCall, fighter, type, success) {
		super(scene, endCall, fighter, []);
		this._success = success;
		this._coefSpeed = 0.025;

		this._card = new HeadOrTail(this._scene, this._caster, type);
		this._caster.dm.addSprite(this._card, Layers.Fighter.FRONT);
	}

	/**
	 * Update the skill until completion.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Flip and stop the card.
			case 0:
				if (this._coef === 1) {
					this._card.stop(this._success);
					this.nextStep();
				}
				break;
			// Shows the result.
			case 1:
				if (this._coef === 1) {
					this._card.fade = true;
					this.nextStep();
				}
				break;
			// Wait for the card to fade and end the skill.
			case 2:
				if (this._coef === 1) {
					this._card.kill();
					this.end();
				}
				break;
		}
	}
}
