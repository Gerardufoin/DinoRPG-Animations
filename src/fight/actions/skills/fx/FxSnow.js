// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/Anim.hx

import { PixiHelper } from '../../../../display/PixiHelper.js';
import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { State } from '../../../State.js';
import { Timer } from '../../../Timer.js';
import { Snow } from '../../../parts/skills/Snow.js';

/**
 * Petals falls on the given Fighter.
 */
export class FxSnow extends State {
	/**
	 * The Fighter spawning the petals.
	 * @type {Fighter}
	 */
	_caster;
	/**
	 * The type of petal to spawn.
	 * @type {number}
	 */
	_type;
	/**
	 * The petals' glow color.
	 * @type {number}
	 */
	_color;
	/**
	 * The percent of the rainbow color to apply.
	 * @type {number}
	 */
	_rainbowPercent;

	/**
	 * A Fighter generates petals on itself. The petals can be colored and have a randomized rainbow color.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} fighter The Fighter playing the animation.
	 * @param {number} type The type of petal. 0 is a big yellow one, 1+ is a smaller green one.
	 * @param {number} color The color of the petal.
	 * @param {number} percent The rainbow color percentage to apply to the petal. 0 to disable the effect.
	 */
	constructor(scene, endCall, fighter, type, color, percent) {
		super(scene, endCall);
		// As the state is called from Skill, the fighter is already ready, do not add to the cast.^
		this._caster = fighter;
		this._type = type;
		this._color = color;
		this._rainbowPercent = percent;
		this._coefSpeed = 0.01;

		this._caster.playAnim('cast');
	}

	/**
	 * Updates the progression of the state.
	 * @param {Timer} timer The Fight's Timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		if (this._coef < 0.9 && PixiHelper.tmodRandom(0.5, timer.tmod)) {
			this._caster.dm.addSprite(
				new Snow(
					this._scene,
					this._type,
					this._color,
					this._rainbowPercent,
					(Math.random() * 2 - 1) * this._caster.ray,
					-(this._caster.height + Math.random() * 4)
				),
				Math.random() < 0.5 ? Layers.Fighter.BACK : Layers.Fighter.FRONT
			);
		}

		if (this._coef === 1) {
			this._caster.backToDefault();
			this.end();
		}
	}
}
