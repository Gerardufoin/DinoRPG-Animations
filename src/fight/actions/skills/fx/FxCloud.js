// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Cloud.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';
import { Cloud } from '../../../parts/skills/Cloud.js';

/**
 * The caster generates a wave of colored clouds.
 */
export class FxCloud extends State {
	/**
	 * The caster of the skill.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The color of the clouds.
	 * @type {number}
	 */
	_color;

	/**
	 * The caster generates a wave of colored clouds.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {number} color The color of the clouds.
	 */
	constructor(scene, endCall, caster, color = 0x000000) {
		super(scene, endCall);
		this._caster = caster;
		this._color = color;

		this._caster.playAnim('release');
		this._coefSpeed = 0.015;
	}

	/**
	 * Update the skill animation.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (timer.frameElapsed) {
			for (let i = 0; i < 2; ++i) {
				this._scene.dm.addSprite(
					new Cloud(this._scene, this._caster.intSide, this._color),
					Layers.Scene.FIGHTERS
				);
			}
		}
		if (this._coef == 1) {
			this._caster.backToDefault();
			this.end();
		}
	}
}
