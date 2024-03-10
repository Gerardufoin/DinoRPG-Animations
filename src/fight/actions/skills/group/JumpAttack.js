// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/JumpAttack.hx
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Tremor.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { Sismic } from '../../../parts/skills/Sismic.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * The Fighter jumps and create an effect on landing which damages the targets.
 */
export class JumpAttack extends GroupEffect {
	/**
	 * Type of effect to play at landing.
	 */
	_type;

	/**
	 * Creates a shockwave around the caster.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 * @param {string} type Type of effect to play at landing. Only "shake" is known for now. Default to shake.
	 */
	constructor(scene, endCall, caster, targets, type = 'shake') {
		super(scene, endCall, caster, targets);
		caster.playAnim('jump');
		this._coefSpeed = 0.1;
		this._type = type;
	}

	/**
	 * Update the shockwave.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		this._caster._z = -Math.sin(this._coef * 3.14) * 100;
		if (this._coef == 1) {
			this._caster.playAnim('land');
			switch (this._type) {
				case 'shake':
					{
						this._scene.fxShake(18, 0.93, 1);
						const cRoot = this._caster.getRootContainer();
						this._scene.dm.addSprite(new Sismic(this._scene, cRoot.x, cRoot.y, 0.6), Layers.Scene.SHADE);
					}
					break;
				default:
					console.error(`Unknown JumpAttack type ${this._type}`);
			}
			this.damageAll();
			this.end();
		}
	}
}
