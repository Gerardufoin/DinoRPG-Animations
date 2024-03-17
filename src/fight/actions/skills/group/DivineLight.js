// @ts-check
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/JumpAttack.hx
// https://github.com/motion-twin/WebGamesArchives/blob/main/DinoRPG/gfx/fight/src/fx/gr/Tremor.hx

import { Layers } from '../../../DepthManager.js';
import { Fighter } from '../../../Fighter.js';
import { Scene } from '../../../Scene.js';
import { Timer } from '../../../Timer.js';
import { LightBeam } from '../../../parts/skills/LightBeam.js';
import { GroupEffect } from '../GroupEffect.js';

/**
 * Beams of light comes from above the caster and blast the targets.
 */
export class DivineLight extends GroupEffect {
	/**
	 * The beams instantiated.
	 * @type {LightBeam[]}
	 */
	_beams = [];

	/**
	 * Creates beams of light toward the targets.
	 * @param {Scene} scene The Scene where the effect takes place.
	 * @param {() => void} endCall The callback at the end of the State.
	 * @param {Fighter} caster The Fighter casting the skill.
	 * @param {{fighter: Fighter, life?: number}[]} targets The targets of the skill.
	 */
	constructor(scene, endCall, caster, targets) {
		super(scene, endCall, caster, targets);
		caster.playAnim('cast');
		this._coefSpeed = 0.2;

		for (const t of this._targets) {
			const targetRoot = t.fighter.getRootContainer();
			const beam = new LightBeam(
				caster.getRootContainer().x,
				-200,
				targetRoot.x,
				targetRoot.y,
				t.fighter.ray * 3.5
			);
			beam.zIndex = targetRoot.zIndex + 1;
			this._scene.dm.addContainer(beam, Layers.Scene.FIGHTERS);
			this._beams.push(beam);
		}
	}

	/**
	 * Update the beams.
	 * @param {Timer} timer The Fight's timer, containing the elapsed time.
	 */
	update(timer) {
		super.update(timer);

		switch (this._step) {
			// Opening of the beam.
			case 0:
				this._beams.map((b) => b.update(this._coef));
				if (this._coef == 1) {
					this._coefSpeed = 0.03;
					this.nextStep();
				}
				break;
			// Beam stays open a bit wobbling.
			case 1:
				this._beams.map((b) => b.update(0.95 + Math.sin(this._coef * Math.PI * 20) * 0.05));
				if (this._coef == 1) {
					this._coefSpeed = 0.2;
					this.nextStep();
				}
				break;
			// Beam closes. Wrap things up.
			case 2:
				this._beams.map((b) => b.update(1 - this._coef));
				if (this._coef == 1) {
					this._caster.playAnim('stand');
					this._beams.map((b) => this._scene.dm.removeContainer(b, Layers.Scene.FIGHTERS));
					this.damageAll();
					this.end();
				}
				break;
		}
	}
}
